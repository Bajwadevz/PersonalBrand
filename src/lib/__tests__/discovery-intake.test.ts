import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import { POST } from "../../app/api/leads/route";

const originalFetch = globalThis.fetch;
const keys = ["LEAD_REDIS_REST_URL", "LEAD_REDIS_REST_TOKEN", "HUBSPOT_ACCESS_TOKEN"] as const;
const original = keys.map(key => process.env[key]);
beforeEach(() => { for (const key of keys) delete process.env[key]; });
afterEach(() => {
  globalThis.fetch = originalFetch;
  keys.forEach((key, index) => {
    if (original[index] !== undefined) process.env[key] = original[index]; else delete process.env[key];
  });
});

function submit(visitor: string, fields: Record<string, string> = {}, headers: Record<string, string> = {}, extra: [string, string][] = []) {
  const body = new URLSearchParams({
    name: "Example Contact", email: `${visitor}@example.test`, company: "Example Company", region: "WA",
    teamSize: "2–10", problem: "We copy the same job details twice.", consent: "yes",
    times: "tue-am", timezone: "Australia/Perth", ...fields,
  });
  for (const [key, value] of extra) body.append(key, value);
  return POST(new Request("https://example.test/api/leads", { method: "POST", body,
    headers: { origin: "https://example.test", "x-vercel-forwarded-for": visitor, ...headers },
  }));
}

test("parallel identical enquiries are delivered once and only acknowledged after receipt", async () => {
  let sent = 0;
  globalThis.fetch = async () => { sent++; return Response.json({ ok: true }); };
  const results = await Promise.all([
    submit("concurrent"), submit("concurrent", { company: " EXAMPLE Company ", email: "CONCURRENT@example.test" }),
  ]);
  assert.deepEqual((await Promise.all(results.map(r => r.json()))).map(r => r.state).sort(), ["duplicate", "saved"]);
  assert.equal(sent, 1);
});
test("failed delivery stays retryable", async () => {
  globalThis.fetch = async () => new Response(null, { status: 503 });
  assert.equal((await submit("retry")).status, 503);
  globalThis.fetch = async () => Response.json({ ok: false });
  assert.equal((await submit("retry")).status, 503);
  globalThis.fetch = async () => Response.json({ ok: true });
  assert.equal((await (await submit("retry")).json()).state, "saved");
});
test("delivery requires a recognised Formspree receipt before acknowledging success", async () => {
  for (const receipt of [{}, { next: "" }, { next: "/thanks", errors: [{ message: "Rejected" }] }, { ok: false, next: "/thanks" }]) {
    globalThis.fetch = async () => Response.json(receipt);
    const response = await submit("receipt");
    assert.equal(response.status, 503);
    assert.equal((await response.json()).state, "unavailable");
  }
  globalThis.fetch = async () => Response.json({ next: "/thanks" });
  const response = await submit("receipt");
  assert.equal(response.status, 200);
  assert.equal((await response.json()).state, "saved");
});
test("validation rejects cross-origin, oversized, honeypot and missing consent without delivery", async () => {
  globalThis.fetch = async () => { throw new Error("unexpected network call"); };
  assert.equal((await submit("invalid", {}, { origin: "https://elsewhere.test" })).status, 403);
  assert.equal((await submit("invalid", { problem: "x".repeat(20000) })).status, 413);
  assert.equal((await submit("invalid", { fax: "filled" })).status, 422);
  assert.equal((await submit("invalid", { consent: "" })).status, 422);
  assert.equal((await submit("invalid", { email: "broken" })).status, 422);
});
test("native form redirects to feedback and repeat attempts throttle", async () => {
  globalThis.fetch = async () => Response.json({ ok: true });
  const response = await submit("native", {}, { accept: "text/html" });
  assert.equal(response.status, 303);
  assert.equal(response.headers.get("location"), "/contact?status=saved#enquiry");
  for (let i = 0; i < 9; i++) assert.equal((await submit("native")).status, 200);
  assert.equal((await submit("native")).status, 429);
});
test("durable intake acknowledges storage despite a notification failure; store failure stays visible", async () => {
  process.env.LEAD_REDIS_REST_URL = "https://storage.example.test";
  process.env.LEAD_REDIS_REST_TOKEN = "fictional-token";
  const destinations: string[] = [];
  globalThis.fetch = async (input) => {
    destinations.push(String(input));
    if (String(input).includes("storage.example.test")) return Response.json({ result: "saved" });
    return new Response(null, { status: 503 });
  };
  assert.equal((await (await submit("durable")).json()).state, "saved");
  assert.equal(destinations.length, 2);
  globalThis.fetch = async () => new Response(null, { status: 503 });
  assert.equal((await submit("outage")).status, 503);
});
test("call times, time zone and qualification fields are validated server-side", async () => {
  globalThis.fetch = async () => { throw new Error("unexpected network call"); };
  assert.equal((await submit("schedule", { times: "" })).status, 422);
  assert.equal((await submit("schedule", { times: "sat-am" })).status, 422);
  assert.equal((await submit("schedule", { timezone: "Europe/London" })).status, 422);
  assert.equal((await submit("schedule", {}, {}, [["times", "wed-pm"], ["times", "thu-am"], ["times", "fri-mid"]])).status, 422);
  assert.equal((await submit("schedule", {}, {}, [["times", "tue-am"]])).status, 422);
  assert.equal((await submit("schedule", { frequency: "hourly" })).status, 422);
  assert.equal((await submit("schedule", {}, {}, [["systems", "Fax machine"]])).status, 422);
  let delivered = "";
  globalThis.fetch = async (_input, init) => { delivered = String(init?.body); return Response.json({ ok: true }); };
  const response = await submit("schedule-ok", { frequency: "weekly", timezone: "Other", timezoneOther: "Auckland" },
    { accept: "text/html" }, [["times", "mon-pm"], ["systems", "Xero"], ["systems", "HubSpot"]]);
  assert.equal(response.status, 303);
  assert.match(response.headers.get("set-cookie") ?? "", /discovery-request=/);
  const payload = JSON.parse(delivered);
  assert.equal(payload.preferredTimes, "Monday afternoon (2–5pm); Tuesday morning (9am–12pm)");
  assert.equal(payload.systems, "Xero, HubSpot");
  assert.match(payload.callRequest, /Auckland time$/);
});
test("HubSpot hand-off upserts and notes the contact but never changes the outcome", async () => {
  process.env.HUBSPOT_ACCESS_TOKEN = "fictional-hubspot-token";
  const calls: string[] = [];
  globalThis.fetch = async (input) => {
    const url = String(input);
    calls.push(url);
    if (url.includes("formspree")) return Response.json({ ok: true });
    if (url.endsWith("/batch/upsert")) return Response.json({ results: [{ id: "101" }] });
    return Response.json({ id: "note-1" });
  };
  assert.equal((await (await submit("crm-ok")).json()).state, "saved");
  assert.deepEqual(calls.map(url => new URL(url).pathname), ["/f/xlgprbwd", "/crm/v3/objects/contacts/batch/upsert", "/crm/v3/objects/notes"]);
  globalThis.fetch = async (input) => String(input).includes("formspree") ? Response.json({ ok: true }) : new Response(null, { status: 401 });
  const response = await submit("crm-down");
  assert.equal(response.status, 200);
  assert.equal((await response.json()).state, "saved");
});
