import { describeCallRequest, type Lead } from "./lead-intake";
import { frequencies } from "./scheduling";

// Optional HubSpot hand-off. Server-only: the token is read from the environment
// and never reaches the browser. The lead is already stored/delivered by the
// primary paths before this runs; a failure here only logs a warning.

const api = "https://api.hubapi.com";
// HubSpot-defined association type: note → contact.
const noteToContact = 202;

export function hubspotToken() {
  const token = process.env.HUBSPOT_ACCESS_TOKEN?.trim();
  return token ? token : null;
}

export function splitName(name: string) {
  const parts = name.replace(/\s+/g, " ").trim().split(" ");
  return { firstname: parts[0] ?? "", lastname: parts.slice(1).join(" ") };
}

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);

export function hubspotNoteBody(lead: Lead, receivedAt = new Date()) {
  const frequency = frequencies.find(([key]) => key === lead.frequency)?.[1] ?? "Not stated";
  const campaign = Object.entries(lead.campaign).filter(([, value]) => value).map(([key, value]) => `${key}=${value}`).join(", ");
  const rows: [string, string][] = [
    ["Requested call times", describeCallRequest(lead)],
    ["Company", lead.company],
    ["Region", lead.region],
    ["Team size", lead.teamSize],
    ["Systems involved", lead.systems.join(", ") || "Not stated"],
    ["How often the task happens", frequency],
    ["Other software", lead.software || "Not stated"],
    ["Website", lead.website || "Not stated"],
    ["Campaign", campaign || "None"],
    ["Consent", lead.consent],
    ["Received", receivedAt.toISOString()],
  ];
  return `<p><strong>Discovery call request (website)</strong></p>` +
    `<p>${escapeHtml(lead.problem).replace(/\n/g, "<br>")}</p>` +
    `<ul>${rows.map(([label, value]) => `<li><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</li>`).join("")}</ul>` +
    `<p>Stage: New enquiry. Move to “Discovery booked” only after a time is confirmed.</p>`;
}

async function hubspot(token: string, path: string, body: unknown) {
  const response = await fetch(`${api}${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body), signal: AbortSignal.timeout(8000), cache: "no-store", redirect: "error",
  });
  if (!response.ok) throw new Error(`HubSpot ${path} responded ${response.status}`);
  return response.json() as Promise<Record<string, unknown>>;
}

/** Upsert the contact by email, then attach the full enquiry as a note. */
export async function syncLeadToHubspot(lead: Lead, token = hubspotToken()) {
  if (!token) return { synced: false as const };
  const properties: Record<string, string> = { email: lead.email, ...splitName(lead.name), company: lead.company };
  if (lead.website) properties.website = lead.website;
  const upsert = await hubspot(token, "/crm/v3/objects/contacts/batch/upsert", {
    inputs: [{ idProperty: "email", id: lead.email, properties }],
  });
  const results = Array.isArray(upsert.results) ? upsert.results as { id?: unknown }[] : [];
  const contactId = typeof results[0]?.id === "string" ? results[0].id : null;
  if (!contactId) throw new Error("HubSpot upsert returned no contact id");
  const receivedAt = new Date();
  await hubspot(token, "/crm/v3/objects/notes", {
    properties: { hs_timestamp: receivedAt.toISOString(), hs_note_body: hubspotNoteBody(lead, receivedAt) },
    associations: [{ to: { id: contactId }, types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: noteToContact }] }],
  });
  return { synced: true as const, contactId };
}

/** Never throws. Logs a stable, non-personal event name on failure. */
export async function handOffToHubspot(lead: Lead) {
  if (!hubspotToken()) return;
  try { await syncLeadToHubspot(lead); }
  catch (error) { console.warn("discovery_crm_unavailable", error instanceof Error ? error.message : "unknown"); }
}
