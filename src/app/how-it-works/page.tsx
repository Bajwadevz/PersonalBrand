import Link from "next/link";
import { agencyMeta, CallLink, Closing, PageHero, SecondaryLink } from "@/components/Agency";
import EngagementGantt from "@/components/pages/process/EngagementGantt";
import ProcessTimeline from "@/components/pages/process/ProcessTimeline";
import "./how-it-works.css";

export const metadata = agencyMeta(
  "/how-it-works",
  "How AI Implementation Works, Step by Step",
  "From a free 20-minute call to an A$1,000 audit, a scoped build from A$3,500 and optional support from A$490/month. See each step and what you receive.",
);

const timeline = [
  ["Discovery call", "20 minutes", "Usually bookable within a week."],
  ["AI Operations Audit", "About 1–2 weeks", "Target five business days once payment, intake and access are complete."],
  ["Implementation proposal", "A few business days", "Written scope, acceptance tests and a fixed quote after the readout."],
  ["Build and connect", "About 2–5 weeks", "Depends on the number of systems, API access and exceptions."],
  ["Acceptance testing", "About 1 week", "Overlaps the build. Speed depends on your team’s availability to test."],
  ["Support", "Monthly, optional", "Starts after handover, under the terms in your agreement."],
] as const;

const covered = [
  "Monitoring of the workflows named in your agreement",
  "Responding to failures and alerts, and replaying failed tasks",
  "Corrective fixes when a connected tool changes its fields, limits or API",
  "Periodic health checks and a short note on what changed",
];
const notCovered = [
  "New workflows, new integrations or new features — quoted as a change request",
  "Rebuilding after you replace a core system",
  "Third-party software subscriptions and usage fees",
  "Out-of-hours cover unless your agreement includes it",
];

export default function HowItWorks() {
  return (
    <article className="agency hiw">
      <PageHero
        kicker="How it works"
        title="How our AI implementation process works."
        lead="Bring us one recurring task. We’ll help you decide if it’s worth automating, what needs to change and who should own the system after handover."
        actions={<><CallLink /><SecondaryLink href="#process">See the four steps</SecondaryLink></>}
        visual={<EngagementGantt />}
      />

      <section className="agency-wrap agency-section hiw-process" id="process" aria-labelledby="hiw-process-heading">
        <div className="hiw-intro">
          <p className="kicker">Four steps</p>
          <h2 id="hiw-process-heading" data-reveal>From first call to a system your team owns.</h2>
          <p className="section-lead">You see the scope and price at every step before deciding whether to continue. Stopping after any step is a normal outcome.</p>
        </div>
        <ProcessTimeline />
      </section>

      <section className="blueprint-band" aria-labelledby="hiw-timeline-heading">
        <div className="agency-wrap agency-section hiw-plan">
          <div>
            <p className="kicker">Indicative timeline</p>
            <h2 id="hiw-timeline-heading" data-reveal>How long it usually takes.</h2>
            <p className="section-lead">These are typical ranges for one workflow, not a guarantee. Your proposal states the actual timeline once we’ve seen your systems.</p>
          </div>
          <ol className="hiw-plan-list">
            {timeline.map(([stage, range, note], i) => (
              <li key={stage} data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
                <span className="hiw-plan-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <span className="hiw-plan-stage">{stage}</span>
                <span className="hiw-plan-range">{range}</span>
                <span className="hiw-plan-note">{note}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="agency-wrap agency-section hiw-accept" aria-labelledby="hiw-accept-heading">
        <div>
          <p className="kicker">Acceptance &amp; handover</p>
          <h2 id="hiw-accept-heading" data-reveal>Know what “done” means before we start.</h2>
          <p className="section-lead">The audit has its own fixed scope and written deliverable. If you proceed, you approve a separate proposal. Prices are in Australian dollars; applicable tax and third-party software costs are confirmed before you commit.</p>
        </div>
        <ol className="hiw-accept-grid">
          <li className="glass" data-reveal><span>A</span><h3>Acceptance tests agreed upfront</h3><p>The proposal lists the normal and exceptional cases the workflow must handle. That list is the definition of finished.</p></li>
          <li className="glass" data-reveal style={{ ["--d" as string]: "80ms" }}><span>B</span><h3>Your team tests real examples</h3><p>We fix defects found against the agreed tests before launch. Changes to the scope are quoted separately.</p></li>
          <li className="glass" data-reveal style={{ ["--d" as string]: "160ms" }}><span>C</span><h3>Accounts stay in your name</h3><p>Integrations run in software accounts your business owns, with permissions documented.</p></li>
          <li className="glass" data-reveal style={{ ["--d" as string]: "240ms" }}><span>D</span><h3>Handover your team can use</h3><p>Documentation and a session covering monitoring, how to replay a failed task and who owns each integration.</p></li>
        </ol>
      </section>

      <section className="hiw-support-band" id="support" aria-labelledby="hiw-support-heading">
        <div className="agency-wrap agency-section">
          <div className="hiw-support-head">
            <div>
              <p className="kicker">Optional support</p>
              <h2 id="hiw-support-heading" data-reveal>Keeping it running, from A$490/month.</h2>
              <p className="section-lead">Support is maintenance for what we’ve already built together. New work is scoped and quoted separately, so the monthly fee stays predictable.</p>
            </div>
            <p className="hiw-support-price glass" data-reveal><span>From</span> A$490<small>/month</small></p>
          </div>
          <div className="hiw-support-grid">
            <section className="glass" data-reveal aria-labelledby="hiw-covered">
              <h3 id="hiw-covered">Monitoring &amp; maintenance — covered</h3>
              <ul className="check-list">{covered.map(c => <li key={c}>{c}</li>)}</ul>
            </section>
            <section className="glass" data-reveal style={{ ["--d" as string]: "80ms" }} aria-labelledby="hiw-not-covered">
              <h3 id="hiw-not-covered">New features — scoped separately</h3>
              <ul className="cross-list">{notCovered.map(c => <li key={c}>{c}</li>)}</ul>
            </section>
          </div>
          <p className="hiw-support-note">Exact coverage, response times and covered workflows are written into your support agreement.</p>
          <div className="hero-actions">
            <CallLink />
            <Link className="hero-secondary" href="/ai-operations-audit">Start with the A$1,000 audit <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <Closing />
    </article>
  );
}
