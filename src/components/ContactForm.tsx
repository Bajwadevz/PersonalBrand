"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { teamSizes } from "@/lib/discovery";
import { firstCampaign, funnelEvent } from "@/lib/funnel-events";

const messages: Record<string, string> = {
  saved: "Enquiry received. We’ll reply by email to arrange a time.",
  duplicate: "We already received this enquiry. Check your email for our reply.",
  invalid: "Please check the required fields and enter a valid email and website address.",
  limited: "Too many requests in a short period. Please try again in ten minutes or email us directly.",
  unavailable: "We couldn’t confirm delivery. Please try again or email us directly.",
};

export default function ContactForm({ initialState = "" }: { initialState?: string }) {
  const [state, setState] = useState(Object.hasOwn(messages, initialState) ? initialState : "");
  const started = useRef(false);
  const sending = useRef(false);
  const complete = state === "saved" || state === "duplicate";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setState("sending");
    const fields = new URLSearchParams();
    for (const [key, value] of new FormData(event.currentTarget)) fields.set(key, String(value));
    for (const [key, value] of Object.entries(firstCampaign())) fields.set(key, value);
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { Accept: "application/json" }, body: fields });
      const result = await response.json();
      const known = typeof result?.state === "string" && Object.hasOwn(messages, result.state);
      const unconfirmed = !response.ok && (result?.state === "saved" || result?.state === "duplicate");
      const status = known && !unconfirmed ? result.state : "unavailable";
      setState(status);
      if (status === "saved") funnelEvent("lead_form_submit_success");
      else if (status !== "duplicate") funnelEvent("lead_form_submit_error");
    } catch { setState("unavailable"); funnelEvent("lead_form_submit_error"); }
    finally { sending.current = false; }
  }

  return <div className="enquiry-panel" id="enquiry">
    <h2>Tell us about your process</h2>
    <p>A short description is enough. Please leave out passwords, customer records and confidential files.</p>
    <div role="status" aria-live="polite">{messages[state] && <p className="enquiry-status">{messages[state]}</p>}</div>
    {!complete && <form action="/api/leads" method="post" onSubmit={submit} onFocus={() => {
      if (!started.current) { started.current = true; funnelEvent("lead_form_start"); }
    }}>
      <div className="enquiry-fields">
        <label>Your name<input required maxLength={100} autoComplete="name" name="name" /></label>
        <label>Work email<input required type="email" maxLength={254} autoComplete="email" name="email" /></label>
        <label>Company<input required maxLength={150} autoComplete="organization" name="company" /></label>
        <label>Country or region<input required maxLength={100} autoComplete="country-name" name="region" /></label>
        <label>Approximate team size<select required name="teamSize" defaultValue=""><option value="" disabled>Select a size</option>
          {teamSizes.map(value => <option key={value}>{value}</option>)}</select></label>
        <label>Website (optional)<input type="url" maxLength={500} autoComplete="url" name="website" placeholder="https://" /></label>
      </div>
      <label>Current software (optional)<input maxLength={240} name="software" placeholder="For example, Xero and HubSpot" /></label>
      <label>Which manual task takes up time?<textarea required minLength={10} maxLength={2000} name="problem" rows={4} /></label>
      <div hidden aria-hidden="true"><label>Fax<input name="fax" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="enquiry-consent"><input required type="checkbox" value="yes" name="consent" /><span>I agree to be contacted about this enquiry and have read the <Link href="/privacy">privacy notice</Link>.</span></label>
      <button type="submit" disabled={state === "sending"} className="agency-button">{state === "sending" ? "Sending…" : "Request a discovery call"}</button>
    </form>}
  </div>;
}
