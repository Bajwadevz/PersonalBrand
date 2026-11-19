import Link from "next/link";
import { agencyMeta, CallLink } from "@/components/Agency";
import ImplementationProcess from "@/components/ImplementationProcess";

export const metadata = agencyMeta(
  "/how-it-works",
  "How AI Implementation Works, Step by Step",
  "From a free 20-minute call to a A$750 audit, a scoped build from A$3,500 and optional support from A$490/month. See each step and what you receive.",
);

export default function HowItWorks() {
  return (
    <article className="agency">
      <section className="agency-intro">
        <div className="agency-wrap">
          <p className="kicker">How it works</p>
          <h1>How our AI implementation process works.</h1>
          <p className="lead">Bring us one recurring task. We’ll help you decide if it’s worth automating, what needs to change and who should own the system after handover.</p>
          <div className="inline-actions">
            <CallLink />
            <a href="#implementation-process">View steps and pricing <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>
      <ImplementationProcess detailed />
      <div className="agency-wrap detail-list">
        <section>
          <h2>Know what you’re approving.</h2>
          <p>The audit has its own fixed scope and written deliverable. If you proceed to implementation, you approve a separate proposal covering integrations, acceptance tests, account ownership and handover. Prices are in Australian dollars. Applicable tax and third-party software costs are confirmed before you commit.</p>
        </section>
        <nav aria-label="Related pages"><Link href="/work">Watch the walkthrough →</Link><Link href="/ai-operations-audit">Read about the audit →</Link></nav>
      </div>
    </article>
  );
}
