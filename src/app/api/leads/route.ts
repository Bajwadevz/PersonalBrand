import { after } from "next/server";
import { handOffToHubspot } from "../../../lib/crm-hubspot";
import { deliverLead, deliverOnce, intakeConfig, storeLead, validateLead, type Lead } from "../../../lib/lead-intake";
import { encodeCallReceipt } from "../../../lib/scheduling";

/** Run work after the response where the platform supports it; otherwise await it. */
async function afterResponse(task: () => Promise<void>) {
  try { after(task); } catch { await task(); }
}

export async function POST(request: Request) {
  let accepted: Lead | null = null;
  const reply = (status: number, state: string) => {
    const headers = new Headers({ "Cache-Control": "no-store" });
    if (status === 429) headers.set("Retry-After", "600");
    if (request.headers.get("accept")?.includes("text/html")) {
      headers.set("Location", `/contact?status=${state}#enquiry`);
      if (status === 200) {
        const secure = new URL(request.url).protocol === "https:" ? "; Secure" : "";
        const cookie = `; Path=/contact; Max-Age=120; HttpOnly; SameSite=Lax${secure}`;
        headers.append("Set-Cookie", `discovery-receipt=${state}${cookie}`);
        // Echo the requested times (no personal data) on the no-JavaScript success page.
        if (accepted) headers.append("Set-Cookie", `discovery-request=${encodeCallReceipt({ times: accepted.preferredTimes, timezone: accepted.timezone, timezoneOther: "" })}${cookie}`);
      }
      return new Response(null, { status: 303, headers });
    }
    return Response.json({ state }, { status, headers });
  };
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return reply(403, "invalid");
  if (!request.headers.get("content-type")?.startsWith("application/x-www-form-urlencoded")) return reply(415, "invalid");
  const limit = 16384;
  if (Number(request.headers.get("content-length") ?? 0) > limit) return reply(413, "invalid");
  const reader = request.body?.getReader();
  if (!reader) return reply(400, "invalid");
  let size = 0;
  const chunks: Uint8Array[] = [];
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > limit) { await reader.cancel(); return reply(413, "invalid"); }
      chunks.push(value);
    }
    const form = new FormData();
    for (const [key, value] of new URLSearchParams(Buffer.concat(chunks).toString("utf8"))) form.append(key, value);
    const lead = validateLead(form);
    if (!lead) return reply(422, "invalid");
    accepted = lead;
    const config = intakeConfig();
    // Vercel overwrites this header at ingress. Other hosts share one fallback bucket.
    const visitor = request.headers.get("x-vercel-forwarded-for")?.split(",")[0].trim() || "direct";
    const state = config ? await storeLead(config, lead, visitor) : await deliverOnce(lead, visitor);
    if (config && state === "saved") {
      // The enquiry is already durable. The Redis inbox remains the recovery path.
      try { await deliverLead(lead); } catch { console.warn("discovery_notification_unavailable"); }
    }
    // Optional CRM hand-off: only for new requests, never blocks or changes the reply.
    if (state === "saved") await afterResponse(() => handOffToHubspot(lead));
    return reply(state === "limited" ? 429 : 200, state);
  } catch {
    console.warn("discovery_intake_unavailable");
    return reply(503, "unavailable");
  }
}
