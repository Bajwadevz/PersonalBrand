import { agencyMeta, DetailPage, type Detail } from "@/components/Agency";
import Link from "next/link";
import FlowDiagram from "@/components/FlowDiagram";
import SampleReport from "@/components/pages/process/SampleReport";
import "./audit.css";

const detail: Detail = {
  "path": "/ai-operations-audit",
  "title": "AI Readiness & Operations Audit, A$750",
  "description": "A fixed-price A$750 AI operations audit for Australian businesses. We map your recurring admin, rank automation options and deliver a written, costed plan.",
  "label": "AI Operations Audit",
  "heading": "Know where AI will help before you pay for a build.",
  "lead": "The A$750 fixed-scope audit covers one operating team and up to two agreed workflows and gives you a written implementation plan you can keep, whether you build with us or take it to your own team.",
  "sections": [
    [
      "Agree the boundary",
      "We agree up to two workflows, three business systems and two stakeholder conversations within one team. The scope includes a limited sample review, a written report and one readout. We confirm the total payable, including any applicable tax, before invoicing."
    ],
    [
      "Follow the work",
      "We map the current handoffs, check available integration options and document exceptions, access needs and approval points. Your process owner checks our assumptions."
    ],
    [
      "Take away a decision",
      "You receive current and proposed workflow maps, a feasibility assessment, a 30/60/90-day roadmap and a recommended first build with estimated ongoing software costs. We compare native features, rules and AI where appropriate. The value estimate identifies which volumes, timings and costs your team still needs to measure."
    ],
    [
      "Decide whether to proceed",
      "The readout includes a discussion of risks and alternatives. Production development, extra departments and formal security certification require separate scope."
    ]
  ],
  "links": [
    ["Prepare for the audit", "/blog/ai-operations-audit-checklist-australia"],
    ["Understand implementation costs", "/blog/ai-implementation-cost-australia"],
    [
      "How it works",
      "/how-it-works"
    ],
    [
      "Watch the implementation walkthrough",
      "/work"
    ]
  ]
};

export const metadata = agencyMeta(detail.path, detail.title, detail.description);

const deliverables = [
  ["Executive summary", "The operational problem in plain English — including a clear “not worth automating” if that’s the honest answer."],
  ["Workflow maps", "Current and proposed maps showing inputs, steps, systems and handoffs."],
  ["Bottleneck register", "Frequency, minutes per occurrence, rework and how each figure was verified."],
  ["Integration feasibility", "A data-flow diagram, API and tool limits, and where a person must approve."],
  ["Three options", "Native feature, rules-based integration or AI-assisted process, compared side by side."],
  ["Value model", "The inputs and assumptions behind any time estimate — capacity released, not promised savings."],
  ["30/60/90-day roadmap", "Prioritised actions you can take with us, your own team or another provider."],
  ["First build scope", "A fixed-scope recommendation with indicative ongoing software costs."],
  ["Risk notes", "Privacy, data-handling and operational risks to resolve before building."],
  ["Report and readout", "A written report you keep, plus one review meeting with your team."],
] as const;
const steps = ["Free 20-minute fit call", "Agree the boundary and invoice", "Information intake and access", "Analysis and stakeholder sessions", "Written report and readout", "Optional implementation quote"];

const compareRows = ["Cost", "Your time", "Looks at your real workflows", "Checks integrations", "What you end up with", "Good when"] as const;
const compare = [
  { name: "Free readiness quiz", href: "/tools/readiness-quiz", link: "Take the quiz", cells: ["Free", "About 5 minutes", "No — general questions", "No", "A general readiness score", "You’re curious where to start"] },
  { name: "DIY checklist or template", href: "/blog/ai-operations-audit-checklist-australia", link: "Read the checklist", cells: ["Free", "Several hours of your team’s time", "Yes, if you map them yourselves", "Only if someone in-house knows how", "Your own notes and estimates", "You have time and technical skills in-house"] },
  { name: "AI Operations Audit", featured: true, cells: ["A$750 fixed", "Intake plus two stakeholder sessions", "Yes — traced with your process owner", "Yes — APIs, limits and approval points", "Written report, maps, roadmap and first-build scope", "You want a decision before paying for a build"] },
];

const faqs = [
  ["How do I pay?", "By invoice, paid before work starts. We agree the boundary in writing first, so you know exactly what the A$750 covers."],
  ["Is tax included?", "Any applicable tax is confirmed with you before the invoice is issued, so the total payable is clear upfront."],
  ["How long does it take?", "Our target is five business days after payment, the intake form and system access are complete. We then schedule the readout at a time that suits your team."],
  ["What if automation isn’t worth it?", "Then the report says so plainly. Sometimes the better answer is a native feature, a process change or leaving it alone. You still keep the workflow maps, bottleneck register and roadmap."],
  ["Do I have to build with you afterwards?", "No. The plan is yours to use with us, your own team or another provider. If you’d like a build, we quote it separately."],
  ["What access do you need?", "We agree it during intake. Where possible we start with walkthroughs and example records, and only request the access the agreed workflows need."],
  ["Is it all remote?", "Yes. Stakeholder sessions and the readout happen over video, so location within Australia doesn’t matter."],
] as const;

export default function Page() {
  return <DetailPage detail={detail} visual={<SampleReport />} after={<>
    <section className="agency-wrap agency-section audit-compare" aria-labelledby="audit-compare-heading">
      <p className="kicker">How this compares</p>
      <h2 id="audit-compare-heading" data-reveal>Free quiz, DIY template or a paid audit?</h2>
      <p className="section-lead">A quiz or checklist is a fine place to start. The audit is for when you need someone to trace the real work and check what your systems can do.</p>
      <div className="audit-compare-grid">
        {compare.map((c, i) => (
          <section key={c.name} className={`audit-compare-col glass${c.featured ? " is-featured" : ""}`} data-reveal style={{["--d" as string]: `${i * 80}ms`}} aria-labelledby={`cmp-${i}`}>
            <h3 id={`cmp-${i}`}>{c.name}</h3>
            <dl>{compareRows.map((row, r) => <div key={row}><dt>{row}</dt><dd>{c.cells[r]}</dd></div>)}</dl>
            {c.href ? <Link href={c.href} className="audit-compare-link">{c.link} <span aria-hidden="true">→</span></Link> : <a href="#audit-faq-heading" className="audit-compare-link">Questions about the audit <span aria-hidden="true">↓</span></a>}
          </section>
        ))}
      </div>
    </section>
    <section className="agency-wrap agency-section audit-faq" aria-labelledby="audit-faq-heading">
      <p className="kicker">Audit FAQ</p>
      <h2 id="audit-faq-heading" data-reveal>Common questions.</h2>
      <div className="agency-faq">
        {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </section>
  </>}>
    <section className="agency-wrap agency-section audit-overview ambient-zone">
      <div className="audit-price glass" data-reveal>
        <p className="kicker">Fixed-scope audit</p>
        <p className="audit-amount">A$750</p>
        <p>One team · up to two workflows · up to three systems · two stakeholder sessions · written report and readout.</p>
        <p className="audit-fineprint">Paid before work starts, by invoice. Any applicable tax is confirmed before invoicing. Target turnaround is five business days after payment, intake and access.</p>
      </div>
      <div className="audit-fit" data-reveal>
        <h2>Who it’s for</h2>
        <ul className="check-list">
          <li>Australian businesses with roughly 5–50 staff and real recurring admin or CRM work.</li>
          <li>Teams already using systems such as HubSpot, Xero, MYOB, a job-management tool or a shared inbox.</li>
          <li>A named process owner who can share examples and approve decisions.</li>
        </ul>
        <h2>What’s not included</h2>
        <ul className="cross-list">
          <li>Building or deploying the production workflow.</li>
          <li>Extra departments, unlimited interviews or full data migration.</li>
          <li>Legal compliance certification, penetration testing or guaranteed ROI.</li>
        </ul>
      </div>
    </section>
    <section className="agency-wrap agency-section" aria-labelledby="deliverables-heading">
      <p className="kicker">What you receive</p>
      <h2 id="deliverables-heading" data-reveal>Ten things you keep, whether or not you build with us.</h2>
      <ol className="deliverable-grid">
        {deliverables.map(([title, copy], i) => <li key={title} className="glass" data-reveal style={{["--d" as string]: `${(i % 2) * 80}ms`}}><span className="deliverable-n">{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></li>)}
      </ol>
    </section>
    <section className="agency-wrap agency-section" aria-labelledby="audit-steps-heading">
      <p className="kicker">Process</p>
      <h2 id="audit-steps-heading" data-reveal>From first call to written plan.</h2>
      <FlowDiagram steps={steps} label="AI Operations Audit process" />
      <p className="section-lead">The discovery call is free and short. The detailed investigation and written plan are what the audit pays for.</p>
    </section>
  </DetailPage>;
}
