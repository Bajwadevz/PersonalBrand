import { agencyMeta, DetailPage, type Detail } from "@/components/Agency";
import FlowDiagram from "@/components/FlowDiagram";

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

export default function Page() {
  return <DetailPage detail={detail}>
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
