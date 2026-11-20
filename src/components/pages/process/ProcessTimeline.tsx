import Link from "next/link";
import TimelineDriver from "./TimelineDriver";

type Phase = {
  id: string;
  title: string;
  price: string;
  timing: string;
  summary: string;
  you: string[];
  we: string[];
  get: string[];
  link?: [string, string];
};

const phases: Phase[] = [
  {
    id: "discover",
    title: "Discover",
    price: "Free",
    timing: "20-minute video call",
    summary: "A short conversation about one recurring task that is costing your team time.",
    you: ["Pick one task that slows the team down", "Tell us which tools it touches and who owns it"],
    we: ["Ask how the work moves today and where it stalls", "Say plainly if an audit isn’t worth it for you"],
    get: ["An honest view on whether the task is a good candidate", "A clear next step — or a suggestion to wait"],
  },
  {
    id: "audit",
    title: "Audit",
    price: "A$750 fixed",
    timing: "Target 5 business days after payment, intake and access",
    summary: "A fixed-scope investigation of one team and up to two workflows, ending in a written plan.",
    you: ["Approve the boundary and pay the invoice", "Share examples and arrange two stakeholder sessions"],
    we: ["Map current handoffs across up to three systems", "Check integration limits, exceptions and approval points"],
    get: ["Workflow maps, bottleneck register and roadmap", "A recommended first build with indicative running costs"],
    link: ["See the full audit scope", "/ai-operations-audit"],
  },
  {
    id: "implement",
    title: "Implement",
    price: "From A$3,500",
    timing: "Fixed quote after the audit",
    summary: "We build and test the agreed workflow inside the software you already use.",
    you: ["Approve a written scope with acceptance tests", "Provide access and test real examples with us"],
    we: ["Build, connect and document the workflow", "Handle failure paths: retries, alerts and human review"],
    get: ["A tested workflow running in accounts you own", "Documentation and a handover session for your team"],
    link: ["About implementation", "/ai-implementation"],
  },
  {
    id: "support-step",
    title: "Support",
    price: "From A$490/month",
    timing: "Optional, after handover",
    summary: "Ongoing monitoring and corrective maintenance for the workflows covered by your agreement.",
    you: ["Tell us when something looks wrong", "Raise new ideas as separate change requests"],
    we: ["Monitor covered workflows and respond to failures", "Fix breakages caused by tool or data changes"],
    get: ["Someone accountable for keeping it running", "A clear line between maintenance and new work"],
    link: ["What support covers", "#support"],
  },
];

const columns = [["you", "What you do"], ["we", "What we do"], ["get", "What you get"]] as const;

/** The definitive four-step process: a vertical line drawn by scroll with the active step highlighted. */
export default function ProcessTimeline() {
  return (
    <ol className="hiw-timeline" data-timeline aria-label="Engagement steps">
      <li className="hiw-rail" aria-hidden="true"><span /><TimelineDriver /></li>
      {phases.map((p, i) => (
        <li key={p.id} id={p.id} className="hiw-step" data-step>
          <div className="hiw-node" aria-hidden="true"><span>{String(i + 1).padStart(2, "0")}</span></div>
          <div className="hiw-step-body">
            <header className="hiw-step-head">
              <p className="hiw-step-n">Step {String(i + 1).padStart(2, "0")}</p>
              <h3>{p.title}</h3>
              <p className="hiw-step-summary">{p.summary}</p>
            </header>
            <dl className="hiw-meta">
              <div><dt>Price</dt><dd>{p.price}</dd></div>
              <div><dt>Timing</dt><dd>{p.timing}</dd></div>
            </dl>
            <div className="hiw-cols">
              {columns.map(([key, label]) => (
                <div key={key}>
                  <h4>{label}</h4>
                  <ul>{p[key].map(item => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
            {p.link && <Link className="hiw-step-link" href={p.link[1]}>{p.link[0]} <span aria-hidden="true">→</span></Link>}
          </div>
        </li>
      ))}
    </ol>
  );
}
