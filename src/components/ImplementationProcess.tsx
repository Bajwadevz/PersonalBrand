import Link from "next/link";
import { ClipboardList, Headphones, MessagesSquare, Workflow } from "lucide-react";
import { CallLink } from "./Agency";
import ScrollProgress from "./motion/ScrollProgress";

const phases = [
  {
    title: "Discover",
    price: "Free",
    scope: "20-minute call",
    Icon: MessagesSquare,
    summary: "Walk us through one recurring task, the people involved and the tools it touches.",
    outcomes: ["Identify the bottleneck and its owner", "Agree whether an audit makes sense"],
  },
  {
    title: "Audit",
    price: "A$1,000",
    scope: "Fixed scope",
    Icon: ClipboardList,
    summary: "We map up to two workflows across three systems and check where automation is feasible.",
    outcomes: ["Current and proposed workflow maps", "Written roadmap and review meeting"],
  },
  {
    title: "Implement",
    price: "From A$3,500",
    scope: "Quoted after the audit",
    Icon: Workflow,
    summary: "Approve a fixed scope. We build and test the workflow with your team, including what happens when an integration fails.",
    outcomes: ["Tested integrations and approval rules", "Documentation and team handover"],
  },
  {
    title: "Support",
    price: "From A$490/month",
    scope: "Optional",
    Icon: Headphones,
    summary: "Choose ongoing support for the workflows covered by your agreement.",
    outcomes: ["Health checks and incident response", "Agreed scope for corrective maintenance"],
  },
];

export default function ImplementationProcess({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="blueprint-band process-band" id="implementation-process" aria-labelledby="process-heading">
      <div className="agency-wrap agency-section">
        <p className="kicker">How it works</p>
        <h2 id="process-heading" data-reveal>From first call to working system.</h2>
        <p className="section-lead">Start with one process. See the scope and price at each step before you decide to proceed.</p>
        <ol className="process-grid" role="list" data-progress-root>
          <li className="process-track" aria-hidden="true"><span /><ScrollProgress steps={phases.length} /></li>
          {phases.map(({ title, price, scope, Icon, summary, outcomes }, index) => (
            <li className="process-step glass-blueprint" key={title}>
              <div className="process-step-marker"><Icon size={21} aria-hidden="true" /><span>Step {index + 1}</span></div>
              <h3>{title}</h3>
              <p className="process-price">{price}</p>
              <p className="process-scope">{scope}</p>
              <p>{summary}</p>
              {detailed && <ul>{outcomes.map(outcome => <li key={outcome}>{outcome}</li>)}</ul>}
            </li>
          ))}
        </ol>
        <div className="process-next" data-reveal>
          <div>
            <h3>What happens on the first call?</h3>
            <p>Bring one task that slows your team down. We’ll talk through it and agree on a next step.</p>
          </div>
          <div className="process-actions">
            <CallLink />
            <Link href={detailed ? "/ai-operations-audit" : "/how-it-works"}>
              {detailed ? "See the audit scope" : "See the full process"} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
