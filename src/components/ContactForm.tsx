"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { agencyEmail, teamSizes } from "@/lib/discovery";
import { firstCampaign, funnelEvent } from "@/lib/funnel-events";
import { frequencies, systemOptions, type CallRequest } from "@/lib/scheduling";
import CallTimePicker from "./inbound/CallTimePicker";
import RequestReceived from "./inbound/RequestReceived";

const messages: Record<string, string> = {
  invalid: "Please check the required fields: pick 1–3 call times, your time zone, a valid email and (if given) a full website address.",
  limited: "Too many requests in a short period. Please try again in ten minutes or email us directly.",
  unavailable: "We couldn’t confirm your request was received. Please try again, or email us directly so it isn’t lost.",
};
const known = new Set(["saved", "duplicate", ...Object.keys(messages)]);

export default function ContactForm({ initialState = "", initialRequest = null, calendar = null }: {
  initialState?: string; initialRequest?: CallRequest | null; calendar?: string | null;
}) {
  const [state, setState] = useState(known.has(initialState) ? initialState : "");
  const [request, setRequest] = useState<CallRequest | null>(initialRequest);
  const [timesError, setTimesError] = useState("");
  const started = useRef(false);
  const sending = useRef(false);
  const panel = useRef<HTMLDivElement>(null);
  const complete = state === "saved" || state === "duplicate";

  useEffect(() => {
    // Move focus to the outcome so keyboard and screen-reader users hear it.
    if (complete) panel.current?.querySelector<HTMLElement>("#request-received-title")?.focus();
    else if (messages[state]) panel.current?.querySelector<HTMLElement>(".enquiry-status")?.focus();
  }, [state, complete]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const data = new FormData(event.currentTarget);
    const times = data.getAll("times").map(String);
    if (times.length === 0) {
      setTimesError("Choose at least one time window that suits you.");
      event.currentTarget.querySelector<HTMLInputElement>("input[name=times]")?.focus();
      return;
    }
    setTimesError("");
    sending.current = true;
    setState("sending");
    const fields = new URLSearchParams();
    for (const [key, value] of data) fields.append(key, String(value));
    for (const [key, value] of Object.entries(firstCampaign())) fields.set(key, value);
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { Accept: "application/json" }, body: fields });
      const result = await response.json();
      const recognised = typeof result?.state === "string" && known.has(result.state);
      const unconfirmed = !response.ok && (result?.state === "saved" || result?.state === "duplicate");
      const status = recognised && !unconfirmed ? result.state : "unavailable";
      if (status === "saved" || status === "duplicate") {
        setRequest({ times, timezone: String(data.get("timezone") ?? ""), timezoneOther: String(data.get("timezoneOther") ?? "").trim() });
      }
      setState(status);
      if (status === "saved") funnelEvent("lead_form_submit_success");
      else if (status !== "duplicate") funnelEvent("lead_form_submit_error", { reason: status });
    } catch { setState("unavailable"); funnelEvent("lead_form_submit_error", { reason: "network" }); }
    finally { sending.current = false; }
  }

  return <div className="enquiry-panel" id="enquiry" ref={panel}>
    {complete && <RequestReceived duplicate={state === "duplicate"} request={request} calendar={calendar} />}
    {!complete && <>
      <p className="kicker">{calendar ? "Or request a time" : "Request a call"}</p>
      <h2>Request your free 20-minute call</h2>
      <p>Tell us when suits you and what’s taking up time. Please leave out passwords, customer records and confidential files.</p>
      <div role="alert">{messages[state] && <p className="enquiry-status enquiry-error" tabIndex={-1}>{messages[state]} <a href={`mailto:${agencyEmail}?subject=Discovery%20call%20request`}>{agencyEmail}</a></p>}</div>
      <form action="/api/leads" method="post" onSubmit={submit} onFocus={() => {
        if (!started.current) { started.current = true; funnelEvent("lead_form_start"); }
      }}>
        <CallTimePicker error={timesError} onChange={times => { if (times.length) setTimesError(""); }} />
        <div className="enquiry-fields">
          <label>Your name<input required maxLength={100} autoComplete="name" name="name" /></label>
          <label>Work email<input required type="email" maxLength={254} autoComplete="email" name="email" /></label>
          <label>Company<input required maxLength={150} autoComplete="organization" name="company" /></label>
          <label>Country or region<input required maxLength={100} autoComplete="country-name" name="region" defaultValue="Australia" /></label>
          <label>Approximate team size<select required name="teamSize" defaultValue=""><option value="" disabled>Select a size</option>
            {teamSizes.map(value => <option key={value}>{value}</option>)}</select></label>
          <label>Website (optional)<input type="url" maxLength={500} autoComplete="url" name="website" placeholder="https://" /></label>
        </div>
        <label>Which manual task takes up time?<textarea required minLength={10} maxLength={2000} name="problem" rows={4}
          placeholder="For example, we retype job details from email into Xero every afternoon." /></label>
        <details className="enquiry-more">
          <summary>Add detail (optional): systems involved and how often</summary>
          <fieldset className="chip-set">
            <legend>Which systems are involved?</legend>
            <div className="chips">{systemOptions.map(system => <label key={system} className="chip">
              <input type="checkbox" name="systems" value={system} /><span>{system}</span></label>)}</div>
          </fieldset>
          <fieldset className="chip-set">
            <legend>How often does this task happen?</legend>
            <div className="chips">{frequencies.map(([value, label]) => <label key={value} className="chip">
              <input type="radio" name="frequency" value={value} /><span>{label}</span></label>)}</div>
          </fieldset>
          <label>Other software (optional)<input maxLength={240} name="software" placeholder="For example, ServiceM8 or Airtable" /></label>
        </details>
        <div hidden aria-hidden="true"><label>Fax<input name="fax" tabIndex={-1} autoComplete="off" /></label></div>
        <label className="enquiry-consent"><input required type="checkbox" value="yes" name="consent" /><span>I agree to be contacted about this request and have read the <Link href="/privacy">privacy notice</Link>.</span></label>
        <p className="request-note" id="request-note">This sends a <strong>request</strong> for one of your chosen times, not a confirmed booking. We’ll email you to confirm.</p>
        <button type="submit" disabled={state === "sending"} aria-describedby="request-note" className="agency-button">{state === "sending" ? "Sending…" : "Request a call at these times"}</button>
      </form>
    </>}
  </div>;
}
