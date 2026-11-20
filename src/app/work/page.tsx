import Image from "next/image";
import Link from "next/link";
import { agencyMeta, Closing, PageHero, SecondaryLink, CallLink } from "@/components/Agency";
import FlowDiagram from "@/components/FlowDiagram";
import LoomEmbed from "@/components/LoomEmbed";
import WorkflowDemo from "@/components/WorkflowDemo";
import FeaturedCases from "@/components/pages/work/FeaturedCases";
import WorkFilter from "@/components/pages/work/WorkFilter";
import { caseStudies, exampleWorkflows } from "@/lib/case-studies";
import "./work.css";

export const metadata = agencyMeta(
  "/work",
  "AI Implementation Case Studies & Examples",
  "Anonymised client case studies, an interactive workflow demo and example builds for CRM, admin and integration workflows across Australian businesses.",
);

const legend = [
  ["Client work", `${caseStudies.length} case studies`, "Real builds, client names withheld. Figures are client-reported."],
  ["Demo", "3 builds", "Runs on fictional data: an interactive demo, a product build and a recorded walkthrough."],
  ["Example workflow", `${exampleWorkflows.length} patterns`, "Illustrative handoffs we automate often. Not client results."],
] as const;

function Legend() {
  return (
    <aside className="work-legend glass" aria-label="How to read this page">
      <p className="work-legend-title">How to read this page</p>
      <ul>
        {legend.map(([label, count, copy]) => (
          <li key={label}>
            <span className="work-tag">{label}</span>
            <strong>{count}</strong>
            <p>{copy}</p>
          </li>
        ))}
      </ul>
      <p className="work-legend-foot">Every item carries one of these labels, so you always know what’s real, what’s a demo and what’s illustrative.</p>
    </aside>
  );
}

export default function Work() {
  return (
    <article className="agency">
      <PageHero
        kicker="Selected work"
        title="AI automation case studies and examples."
        lead="Client case studies, a working demo you can run, and example workflows for the handoffs we see most often in Australian businesses."
        actions={<><CallLink /><SecondaryLink href="#case-studies">Read the case studies</SecondaryLink></>}
        visual={<Legend />}
      />

      <WorkFilter counts={{ client: caseStudies.length, demo: 3, example: exampleWorkflows.length }}>
        <section className="agency-wrap agency-section ambient-zone work-kind" data-kind="client" id="case-studies" aria-labelledby="cases-heading">
          <p className="kicker">Case studies</p>
          <h2 id="cases-heading" data-reveal>Client work, anonymised.</h2>
          <p className="section-lead" data-reveal>Each case study names the problem, what we built and the results the client reported. Client names are withheld; figures are not independently audited.</p>
          <FeaturedCases />
        </section>

        <section className="blueprint-band work-kind" data-kind="demo" id="demo" aria-labelledby="demo-heading">
          <div className="agency-wrap agency-section">
            <p className="kicker">Interactive demo · fictional data</p>
            <h2 id="demo-heading" data-reveal>Run a workflow yourself.</h2>
            <p className="section-lead" data-reveal>Pick a scenario to see how a well-built workflow handles clean data, bad data, uncertainty and a failing integration.</p>
            <WorkflowDemo />
          </div>
        </section>

        <section className="agency-wrap agency-section work-kind" data-kind="example" id="examples" aria-labelledby="examples-heading">
          <p className="kicker">Example workflows</p>
          <h2 id="examples-heading" data-reveal>Handoffs we automate most often.</h2>
          <p className="section-lead" data-reveal>Illustrative examples, not client results. Every build is scoped to your systems in the audit.</p>
          <div className="work-examples">
            {exampleWorkflows.map((w, i) => (
              <section key={w.title} className="work-example glass" data-reveal aria-label={w.title}>
                <div className="work-example-copy">
                  <span className="work-example-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <span className="work-tag">Example workflow · illustrative</span>
                  <h3>{w.title}</h3>
                  <p className="work-example-aud">{w.audience}</p>
                  <p>{w.copy}</p>
                </div>
                <FlowDiagram steps={w.flow} label={`${w.title} example workflow`} />
              </section>
            ))}
          </div>
        </section>

        <section className="agency-wrap agency-section work-kind work-product" data-kind="demo" aria-labelledby="salesos-heading">
          <div className="work-product-copy" data-reveal>
            <span className="work-tag">Demo · product build · fictional records</span>
            <h2 id="salesos-heading">Small Business Sales OS</h2>
            <p className="section-lead">A Notion workspace that puts contacts, pipeline, follow-ups and quotes in one place. The case study uses fictional records.</p>
            <Link className="work-link" href="/work/small-business-sales-os">Explore the build <span aria-hidden="true">↗</span></Link>
          </div>
          <Link className="work-product-image glass" href="/work/small-business-sales-os" aria-label="Explore the Small Business Sales OS build" data-reveal>
            <Image src="/work/sales-os/command-center.jpg" alt="Sales command centre showing follow-ups, contacts and opportunities" width={1512} height={805} sizes="(max-width: 860px) 90vw, 600px" />
          </Link>
        </section>

        <section className="blueprint-band work-kind" data-kind="demo" id="workflow" aria-labelledby="loom-heading">
          <div className="agency-wrap agency-section work-feature">
            <div>
              <p className="kicker">Recorded walkthrough</p>
              <h2 id="loom-heading">From enquiry to booking.</h2>
              <p className="section-lead">A recorded walkthrough of a lead-response and booking system built earlier.</p>
            </div>
            <LoomEmbed onDemand />
          </div>
        </section>
      </WorkFilter>
      <Closing />
    </article>
  );
}
