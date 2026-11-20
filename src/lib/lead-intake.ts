import { createHmac } from "node:crypto";
import { campaignKeys, campaignValue, teamSizes } from "./discovery";
import { callTimeLabel, callTimeValues, callTimeZones, frequencies, maxCallTimes, systemOptions, timeZoneLabel } from "./scheduling";

export function intakeConfig() {
  const url = process.env.LEAD_REDIS_REST_URL;
  const token = process.env.LEAD_REDIS_REST_TOKEN;
  if (!url && !token) return null;
  if (!url?.startsWith("https://") || !token) throw new Error("Incomplete shared intake configuration");
  return { url, token };
}

export function calendarLink() {
  try {
    const url = new URL(process.env.DISCOVERY_CALENDAR_URL || "");
    return url.protocol === "https:" && !url.username && !url.password ? url.href : null;
  } catch {
    return null;
  }
}

/**
 * Inline embeds are limited to scheduler hosts that are designed to be framed.
 * Anything else is offered as a plain link only.
 */
export function calendarEmbed(link: string | null) {
  if (!link) return null;
  const url = new URL(link);
  const host = url.hostname.replace(/^www\./, "");
  if (host === "cal.com" || host === "app.cal.com") {
    url.searchParams.set("embed", "true");
    return url.href;
  }
  if (host === "calendly.com") {
    url.searchParams.set("hide_gdpr_banner", "1");
    return url.href;
  }
  if (host === "calendar.google.com" && url.pathname.includes("/appointments/")) return url.href;
  return null;
}

export function validateLead(data: FormData) {
  const read = (name: string) => String(data.get(name) ?? "").trim();
  const name = read("name");
  const email = read("email").toLowerCase();
  const company = read("company");
  const region = read("region");
  const software = read("software");
  const teamSize = read("teamSize");
  const problem = read("problem");
  const website = read("website");
  const all = (name: string) => data.getAll(name).map(value => String(value).trim()).filter(Boolean);
  const times = all("times");
  const timezone = read("timezone");
  const timezoneOther = read("timezoneOther");
  const systems = all("systems");
  const frequency = read("frequency");
  const invalidSchedule = times.length < 1 || times.length > maxCallTimes || new Set(times).size !== times.length ||
    !times.every(time => callTimeValues.includes(time)) || !callTimeZones.some(([key]) => key === timezone) ||
    timezoneOther.length > 60 || systems.length > systemOptions.length || new Set(systems).size !== systems.length ||
    !systems.every(system => systemOptions.some(option => option === system)) ||
    (frequency !== "" && !frequencies.some(([key]) => key === frequency));
  const invalid = invalidSchedule || !name || name.length > 100 || !company || company.length > 150 ||
    !region || region.length > 100 || software.length > 240 || website.length > 500 ||
    email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !teamSizes.some(size => size === teamSize) || problem.length < 10 || problem.length > 2000 ||
    read("consent") !== "yes" || read("fax");
  if (invalid) return null;
  if (website) {
    try {
      const parsed = new URL(website);
      if (!["http:", "https:"].includes(parsed.protocol) || parsed.username || parsed.password) return null;
    } catch { return null; }
  }
  const campaign = Object.fromEntries(campaignKeys.map(key => [key, campaignValue(read(key))]));
  // Store requested times in week order, whatever order they were ticked in.
  const preferredTimes = callTimeValues.filter(time => times.includes(time));
  return {
    name, email, company, region, software, teamSize, problem, website,
    preferredTimes, timezone, timezoneOther: timezone === "Other" ? timezoneOther : "", systems, frequency,
    campaign, consent: "enquiry-v2",
  };
}

export type Lead = NonNullable<ReturnType<typeof validateLead>>;

/** Human-readable call request, used in notifications and the CRM note. */
export function describeCallRequest(lead: Pick<Lead, "preferredTimes" | "timezone" | "timezoneOther">) {
  const zone = lead.timezone === "Other" ? (lead.timezoneOther || "Other (not specified)") : timeZoneLabel(lead.timezone);
  return `${lead.preferredTimes.map(callTimeLabel).join("; ")} — ${zone} time`;
}

type Config = NonNullable<ReturnType<typeof intakeConfig>>;

// The first enquiry keeps its original campaign. A changed enquiry from the same
// company/contact is appended to that record. Identical retries do not append.
export const storeScript = `
local count = redis.call('INCR', KEYS[1])
if count == 1 then redis.call('EXPIRE', KEYS[1], 600) end
if count > 10 then return 'limited' end
if redis.call('HEXISTS', KEYS[2], ARGV[1]) == 1 then return 'duplicate' end
redis.call('HSETNX', KEYS[2], 'first', ARGV[2])
redis.call('HSET', KEYS[2], ARGV[1], ARGV[2])
redis.call('EXPIRE', KEYS[2], 7776000)
redis.call('ZREMRANGEBYSCORE', KEYS[3], '-inf', tonumber(ARGV[3]) - 7776000)
redis.call('ZADD', KEYS[3], ARGV[3], KEYS[2])
redis.call('EXPIRE', KEYS[3], 7776000)
return 'saved'
`;

export async function storeLead(config: Config, lead: Lead, visitor: string) {
  const hash = (value: string) => createHmac("sha256", process.env.LEAD_HASH_SECRET || config.token).update(value).digest("hex");
  const companyKey = lead.company.replace(/\s+/g, " ").toLowerCase();
  const record = `discovery:v1:contact:${hash(JSON.stringify([lead.email, companyKey]))}`;
  const fingerprint = hash(JSON.stringify([lead.name, lead.region, lead.teamSize, lead.problem, lead.software, lead.website, lead.preferredTimes, lead.timezone, lead.timezoneOther, lead.systems, lead.frequency]));
  const receivedAt = new Date();
  const response = await fetch(config.url, {
    method: "POST", headers: { Authorization: `Bearer ${config.token}`, "Content-Type": "application/json" },
    body: JSON.stringify(["EVAL", storeScript, 3, `discovery:v1:limit:${hash(visitor)}`, record,
      "discovery:v1:inbox", fingerprint, JSON.stringify({ ...lead, receivedAt: receivedAt.toISOString() }), Math.floor(receivedAt.getTime() / 1000)]),
    signal: AbortSignal.timeout(8000), cache: "no-store", redirect: "error",
  });
  if (!response.ok) throw new Error("Intake storage unavailable");
  const { result } = await response.json();
  if (!["saved", "duplicate", "limited"].includes(result)) throw new Error("Unexpected intake response");
  return result as "saved" | "duplicate" | "limited";
}

// Reuse the site's existing Formspree destination. A separate ID can be used for staging.
export async function deliverLead(lead: Lead) {
  const formId = process.env.LEAD_FORMSPREE_ID || "xlgprbwd";
  if (!/^[a-z0-9]+$/i.test(formId)) throw new Error("Invalid form configuration");
  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      ...lead, campaign: undefined, ...lead.campaign,
      preferredTimes: lead.preferredTimes.map(callTimeLabel).join("; "), callRequest: describeCallRequest(lead),
      systems: lead.systems.join(", "), subject: `Discovery call request: ${lead.company}`,
    }),
    signal: AbortSignal.timeout(8000), cache: "no-store", redirect: "error",
  });
  if (!response.ok) throw new Error("Enquiry delivery unavailable");
  const receipt: { ok?: unknown; next?: unknown; error?: unknown; errors?: unknown } | null = await response.json();
  // Formspree's SDK recognizes the next field. Also accept explicit AJAX acknowledgements.
  const acknowledged = receipt?.ok === true || (typeof receipt?.next === "string" && receipt.next.trim().length > 0);
  const rejected = receipt?.ok === false || typeof receipt?.error === "string" || Array.isArray(receipt?.errors);
  if (!acknowledged || rejected) throw new Error("Unconfirmed enquiry delivery");
}

// The existing Formspree-only deployment has provider spam protection. These
// bounded, short-lived guards also coalesce concurrent requests in one instance.
const recent = new Map<string, { until: number; delivery: Promise<void> }>();
const visits = new Map<string, { until: number; count: number }>();
const digest = (value: string) => createHmac("sha256", instanceSalt).update(value).digest("hex");
const instanceSalt = crypto.randomUUID();

export async function deliverOnce(lead: Lead, visitor: string) {
  const now = Date.now();
  for (const [key, entry] of recent) if (entry.until <= now) recent.delete(key);
  for (const [key, entry] of visits) if (entry.until <= now) visits.delete(key);
  const visitorKey = digest(visitor);
  let visit = visits.get(visitorKey);
  if (!visit) {
    if (visits.size >= 4096) return "limited";
    visit = { count: 0, until: now + 600_000 };
    visits.set(visitorKey, visit);
  }
  if (++visit.count > 10 || recent.size >= 4096) return "limited";
  const key = digest(JSON.stringify([lead.email, lead.company.toLowerCase().replace(/\s+/g, " "), lead.name, lead.region, lead.software, lead.teamSize, lead.website, lead.problem, lead.preferredTimes, lead.timezone, lead.timezoneOther, lead.systems, lead.frequency]));
  const existing = recent.get(key);
  if (existing) { await existing.delivery; return "duplicate"; }
  const delivery = deliverLead(lead);
  recent.set(key, { until: now + 600_000, delivery });
  try { await delivery; return "saved"; }
  catch (error) { recent.delete(key); throw error; }
}
