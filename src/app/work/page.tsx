import Image from "next/image";
import Link from "next/link";
import { agencyMeta, CallLink, Closing } from "@/components/Agency";
import CaseStudyCards from "@/components/CaseStudyCards";
import FlowDiagram from "@/components/FlowDiagram";
import LoomEmbed from "@/components/LoomEmbed";
import WorkflowDemo from "@/components/WorkflowDemo";
import { exampleWorkflows } from "@/lib/case-studies";

export const metadata = agencyMeta(
  "/work",
  "AI Implementation Case Studies & Examples",
  "Anonymised client case studies, an interactive workflow demo and example builds for CRM, admin and integration workflows across Australian businesses.",
);

export default function Work() {
  return (
    <article className="agency">
      <section className="agency-intro">
        <div className="agency-wrap">
          <p className="kicker">Selected work</p>
          <h1>AI automation case studies and examples.</h1>
          <p className="lead">Client case studies, a working demo you can run, and example workflows for the handoffs we see most often in Australian businesses.</p>
          <div className="inline-actions"><CallLink /><a href="#case-studies">Read the case studies <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>

      <section className="agency-wrap agency-section ambient-zone" id="case-studies" aria-labelledby="cases-heading">
        <p className="kicker">Case studies</p>
        <h2 id="cases-heading" data-reveal>Client work, anonymised.</h2>
        <p className="section-lead" data-reveal>Each case study names the problem, what we built and the results the client reported. Client names are withheld.</p>
        <CaseStudyCards />
      </section>

      <section className="blueprint-band" id="demo" aria-labelledby="demo-heading">
        <div className="agency-wrap agency-section">
          <p className="kicker">Interactive demo</p>
          <h2 id="demo-heading" data-reveal>Run a workflow yourself.</h2>
          <p className="section-lead" data-reveal>Pick a scenario to see how a well-built workflow handles clean data, bad data, uncertainty and a failing integration.</p>
          <WorkflowDemo />
        </div>
      </section>

      <section className="agency-wrap agency-section" aria-labelledby="examples-heading">
        <p className="kicker">Example workflows</p>
        <h2 id="examples-heading" data-reveal>Handoffs we automate most often.</h2>
        <p className="section-lead" data-reveal>Illustrative examples, not client results. Every build is scoped to your systems in the audit.</p>
        <div className="example-list">
          {exampleWorkflows.map(w => (
            <section key={w.title} className="example-card glass" data-reveal>
              <div>
                <p className="kicker">{w.audience}</p>
                <h3>{w.title}</h3>
                <p>{w.copy}</p>
              </div>
              <FlowDiagram steps={w.flow} label={`${w.title} example workflow`} />
            </section>
          ))}
        </div>
      </section>

      <section className="agency-wrap agency-section work-feature">
        <div data-reveal>
          <p className="kicker">Product build</p>
          <h2>Small Business Sales OS</h2>
          <p className="section-lead">A Notion workspace that puts contacts, pipeline, follow-ups and quotes in one place. The case study uses fictional records.</p>
          <Link className="work-link" href="/work/small-business-sales-os">Explore the build ↗</Link>
        </div>
        <Link className="work-image glass" href="/work/small-business-sales-os" aria-label="Explore the Small Business Sales OS build" data-reveal>
          <Image src="/work/sales-os/command-center.jpg" alt="Sales command centre showing follow-ups, contacts and opportunities" width={1512} height={805} sizes="(max-width: 700px) 90vw, 560px" />
        </Link>
      </section>

      <section className="blueprint-band" id="workflow">
        <div className="agency-wrap agency-section work-feature">
          <div>
            <p className="kicker">Recorded walkthrough</p>
            <h2>From enquiry to booking.</h2>
            <p className="section-lead">A recorded walkthrough of a lead-response and booking system built earlier.</p>
          </div>
          <LoomEmbed onDemand />
        </div>
      </section>
      <Closing />
    </article>
  );
}
