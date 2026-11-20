import Link from "next/link";
import { agencyMeta, DetailPage, type Detail } from "@/components/Agency";
import FlowDiagram from "@/components/FlowDiagram";
import CountUp from "@/components/motion/CountUp";
import AdminQueue from "@/components/pages/solutions/AdminQueue";
import { exampleWorkflows, getCaseStudy } from "@/lib/case-studies";
import "../solutions.css";

const detail: Detail = {
  "path": "/solutions/business-process-automation",
  "title": "Business Process Automation Australia",
  "description": "Automate the admin your team repeats every week — forms, inboxes, quotes, invoices and job updates across Xero, MYOB and your job-management software.",
  "label": "Admin & operations",
  "heading": "Business process automation that takes recurring work out of copy-and-paste.",
  "lead": "We help operations teams automate repeatable steps in reporting, document intake and handovers while keeping judgement calls with the people responsible.",
  "sections": [
    [
      "Map one recurring job",
      "Start with the last reporting cycle or incoming document. Record the inputs, destination, manual checks and minutes spent correcting exceptions."
    ],
    [
      "Separate rules from judgement",
      "A rule can check whether an invoice has a reference. AI can suggest a category from the description. The accounts owner still approves exceptions and any payment."
    ],
    [
      "Measure what changed",
      "Compare completed runs, handling time and corrections with the starting workflow. Handover includes who watches failures, when to retry and how to return temporarily to the manual process."
    ]
  ],
  "links": [
    ["Case study: AI lead research pipeline", "/work/ai-lead-research-pipeline"], ["Example workflows", "/work#examples-heading"],
    ["Compare automation and AI agents", "/blog/business-process-automation-vs-ai-agents"],
    [
      "AI Operations Audit",
      "/ai-operations-audit"
    ],
    [
      "Watch the implementation walkthrough",
      "/work"
    ],
    [
      "CRM & customer workflows",
      "/solutions/crm-automation"
    ]
  ]
};

export const metadata = agencyMeta(detail.path, detail.title, detail.description);

const options = [
  {
    name: "Native feature",
    line: "Turn on what you already pay for.",
    best: "Your CRM, Xero or job software already has the setting — workflows, bank rules, repeating invoices.",
    cost: "Usually included in your current plan.",
    watch: "Limited to one system, and easy to forget who set it up or why.",
    example: "Xero bank rules for recurring supplier payments.",
  },
  {
    name: "Rules-based integration",
    line: "If this, then that — across systems.",
    best: "The data is already in fields and you can write the rule in one sentence.",
    cost: "Low monthly platform cost plus the build.",
    watch: "Fails quietly when a field changes, so it needs monitoring and a retry path.",
    example: "An approved quote creates the job and a draft Xero invoice.",
  },
  {
    name: "AI-assisted",
    line: "Reads the messy input; a person approves.",
    best: "The input is free text, emails or PDFs and someone currently interprets it.",
    cost: "Build plus per-use model costs, and a little review time each run.",
    watch: "Can be confidently wrong — a person approves anything that pays, sends or commits.",
    example: "A supplier invoice PDF becomes suggested coding for accounts to check.",
  },
] as const;

const ladder = [
  ["Can software you already own do it?", "Use the native feature."],
  ["Is the data in fields, with a rule you can write down?", "Use a rules-based integration."],
  ["Is it free text, documents or a judgement call?", "Use AI to draft, with a person approving."],
] as const;

const quote = exampleWorkflows.find(w => w.title.startsWith("Approved quote"))!;
const report = exampleWorkflows.find(w => w.title.startsWith("Weekly report"))!;
const examples = [
  { title: report.title, audience: report.audience, flow: report.flow, copy: report.copy },
  {
    title: "Document intake → accounts",
    audience: "Accounts and admin teams",
    flow: ["Invoice PDF arrives", "Extract fields", "Suggest coding", "Accounts approves", "Xero bill draft"],
    copy: "Supplier documents are read and pre-filled. Anything unclear, or any payment, waits for the accounts owner.",
  },
  { title: quote.title, audience: quote.audience, flow: quote.flow, copy: quote.copy },
];

const study = getCaseStudy("ai-lead-research-pipeline")!;

export default function Page() {
  const m = study.metrics[0];
  return (
    <DetailPage
      detail={detail}
      visual={<AdminQueue />}
      after={<>
        <section className="agency-wrap agency-section" aria-labelledby="bpa-examples">
          <p className="kicker">Examples</p>
          <h2 id="bpa-examples" data-reveal>Three jobs we automate often.</h2>
          <p className="section-lead" data-reveal>Illustrative examples, not client results. Each build is scoped to your systems in the audit.</p>
          <div className="sol-examples">
            {examples.map(w => (
              <section key={w.title} className="sol-example glass" data-reveal aria-label={w.title}>
                <div className="sol-example-copy">
                  <span className="sol-tag">Illustrative · {w.audience}</span>
                  <h3>{w.title}</h3>
                  <p>{w.copy}</p>
                </div>
                <FlowDiagram steps={w.flow} label={`${w.title} example workflow`} />
              </section>
            ))}
          </div>
        </section>
        <section className="agency-wrap agency-section sol-next" aria-labelledby="bpa-next">
          <p className="kicker">Proof and next step</p>
          <h2 id="bpa-next" data-reveal>See it in practice, then scope yours.</h2>
          <div className="sol-next-grid">
            <Link href={`/work/${study.slug}`} className="sol-next-card glass" data-reveal>
              <span className="sol-tag">Client work · anonymised</span>
              <span className="sol-related-metric"><CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} /></span>
              <span className="sol-related-label">{m.label} (client-reported)</span>
              <h3>{study.shortTitle}</h3>
              <span className="sol-related-go">Read the case study <span aria-hidden="true">↗</span></span>
            </Link>
            <Link href="/ai-operations-audit" className="sol-next-card glass" data-reveal style={{ ["--d" as string]: "80ms" }}>
              <span className="sol-tag">Fixed scope</span>
              <span className="sol-related-metric">A$750</span>
              <span className="sol-related-label">up to two workflows mapped, with native, rules and AI options compared</span>
              <h3>AI Operations Audit</h3>
              <span className="sol-related-go">See what the audit includes <span aria-hidden="true">→</span></span>
            </Link>
          </div>
        </section>
      </>}
    >
      <section className="blueprint-band" aria-labelledby="bpa-options">
        <div className="agency-wrap agency-section">
          <p className="kicker">Three ways to automate</p>
          <h2 id="bpa-options" data-reveal>Pick the cheapest option that works.</h2>
          <p className="section-lead" data-reveal>An honest comparison. AI is not always the answer — and sometimes the right answer is to leave a task manual.</p>
          <div className="sol-options">
            {options.map((o, i) => (
              <article key={o.name} className="sol-option glass-blueprint" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                <span className="sol-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{o.name}</h3>
                <p className="sol-option-line">{o.line}</p>
                <dl>
                  <div><dt>Best when</dt><dd>{o.best}</dd></div>
                  <div><dt>Typical cost</dt><dd>{o.cost}</dd></div>
                  <div><dt>Watch out for</dt><dd>{o.watch}</dd></div>
                  <div><dt>Example</dt><dd>{o.example}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <ol className="sol-ladder" aria-label="Quick decision guide">
            {ladder.map(([q, a], i) => (
              <li key={q} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                <span className="sol-ladder-q">{q}</span>
                <span className="sol-ladder-a"><span aria-hidden="true">→ </span>{a}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </DetailPage>
  );
}
