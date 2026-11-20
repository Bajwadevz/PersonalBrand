import { CallLink, SecondaryLink } from "@/components/Agency";

const rows = [
  ["An enquiry sits in a shared inbox until someone notices it.", "The enquiry is captured and checked as soon as it arrives."],
  ["Details are re-typed into the CRM, sometimes twice.", "A contact and deal are created in the CRM, with duplicates flagged."],
  ["Follow-up depends on who remembers.", "Unclear cases go to a named person to review and approve."],
  ["Nobody can see where a lead stalled.", "Every step is logged, and a failed step raises an alert."],
] as const;

/** Home-only band: what one workflow looks like before and after it is built. */
export default function BeforeAfter() {
  return (
    <section className="blueprint-band home-ba" id="how-engagements-work" aria-labelledby="home-ba-heading">
      <div className="agency-wrap agency-section">
        <p className="kicker">What changes</p>
        <h2 id="home-ba-heading" data-reveal>One workflow, before and after.</h2>
        <p className="section-lead" data-reveal>An illustrative example using customer enquiries. Your own process is mapped and scoped during the audit, before anything is built.</p>
        <div className="home-ba-table" role="table" aria-label="Before and after an enquiry workflow is built">
          <div className="home-ba-row home-ba-head" role="row">
            <span role="columnheader">Before</span><span aria-hidden="true" /><span role="columnheader">After</span>
          </div>
          {rows.map(([before, after], i) => (
            <div key={before} className="home-ba-row" role="row" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
              <p role="cell" className="home-ba-before">{before}</p>
              <span className="home-ba-line" aria-hidden="true"><span /></span>
              <p role="cell" className="home-ba-after">{after}</p>
            </div>
          ))}
        </div>
        <div className="home-ba-foot" data-reveal>
          <p>Every engagement starts the same way: a free 20-minute call, then a fixed-scope A$1,000 audit before any build is quoted.</p>
          <div className="hero-actions"><CallLink variant="light" /><SecondaryLink href="/how-it-works">See how it works</SecondaryLink></div>
        </div>
      </div>
    </section>
  );
}
