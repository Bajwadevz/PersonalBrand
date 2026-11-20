/**
 * Typographic founder card for /about. No photo: a monogram plus the path a
 * customer conversation takes, which is the problem the business exists for.
 */
const PATH = ["Sales call", "Inbox", "CRM", "Workflow"] as const;

export default function FounderMark() {
  return (
    <figure className="about-mark glass" aria-label="Shahzeb Bajwa, founder of bajwaa.dev">
      <div className="about-mark-top">
        <span className="about-monogram" aria-hidden="true">
          <span>S</span><span>B</span>
        </span>
        <figcaption>
          <strong>Shahzeb Bajwa</strong>
          <span>Founder, bajwaa.dev</span>
        </figcaption>
      </div>

      <dl className="about-mark-facts">
        <div><dt>Background</dt><dd>Computer science + B2B software sales</dd></div>
        <div><dt>Builds with</dt><dd>HubSpot, Make, n8n, Clay, Salesforce</dd></div>
        <div><dt>Works</dt><dd>Remotely, with Australian teams</dd></div>
      </dl>

      <div className="about-path" aria-hidden="true">
        <span className="about-path-line"><span className="about-path-dot" /></span>
        <ol>
          {PATH.map((step, i) => (
            <li key={step} style={{ ["--i" as string]: i }}>{step}</li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
