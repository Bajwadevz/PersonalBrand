import Link from "next/link";
import { agencyEmail } from "@/lib/discovery";
import { callTimeLabel, timeZoneLabel, type CallRequest } from "@/lib/scheduling";

/** Success state shared by the JavaScript and no-JavaScript paths. */
export default function RequestReceived({ duplicate = false, request, calendar }: { duplicate?: boolean; request?: CallRequest | null; calendar?: string | null }) {
  const zone = request && (request.timezone === "Other" ? request.timezoneOther || "your time zone" : timeZoneLabel(request.timezone));
  return <div className="request-received">
    <p className="kicker">{duplicate ? "Already received" : "Request received"}</p>
    <h2 tabIndex={-1} id="request-received-title">{duplicate ? "We already have this request" : "Your call request is in"}</h2>
    {request && request.times.length > 0 && <div className="received-times">
      <p>You asked for a call at one of these times ({zone}):</p>
      <ul>{request.times.map(time => <li key={time}>{callTimeLabel(time)}</li>)}</ul>
    </div>}
    <h3>What happens next</h3>
    <ol className="next-steps">
      <li>A person (not an automated sequence) reads your note.</li>
      <li>We aim to reply within one business day (AEST/AWST) to confirm one of your times with a video-call link, or suggest another time if none work.</li>
      <li>On the 20-minute call we look at the task together. If a paid audit makes sense, we’ll say so; if not, we’ll tell you that too.</li>
    </ol>
    <p>Curious what comes after the call? <Link href="/ai-operations-audit">See what the A$750 AI Operations Audit includes</Link>.</p>
    {calendar && <p>Prefer to lock in a time now? <a href={calendar} data-discovery-calendar target="_blank" rel="noopener noreferrer">Pick a time on the calendar</a>.</p>}
    <p>No reply after a business day, or need to change something? Email <a href={`mailto:${agencyEmail}?subject=Discovery%20call%20request`}>{agencyEmail}</a>.</p>
  </div>;
}
