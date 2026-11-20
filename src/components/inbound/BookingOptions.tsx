/**
 * Shown only when DISCOVERY_CALENDAR_URL is configured: a primary "Pick a time
 * now" link, plus an optional inline scheduler for hosts built to be framed.
 * The request form below remains the fallback.
 */
export default function BookingOptions({ calendar, embed }: { calendar: string; embed: string | null }) {
  return <div className="booking-now">
    <p className="kicker">Fastest</p>
    <h2>Pick a time now</h2>
    <p>See live availability and confirm a 20-minute video call straight away. You’ll get a calendar invite by email.</p>
    <a data-discovery-calendar href={calendar} target="_blank" rel="noopener noreferrer" className="agency-button">
      Open the booking calendar <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
    </a>
    {embed && <details className="booking-embed">
      <summary data-discovery-calendar>Or show the calendar on this page</summary>
      <iframe src={embed} title="Book a 20-minute discovery call" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
    </details>}
    <p className="booking-fallback">No time that suits? Request your own times with the form instead.</p>
  </div>;
}
