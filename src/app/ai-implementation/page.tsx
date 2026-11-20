import Link from "next/link";
import { agencyMeta, CallLink, DetailPage, type Detail } from "@/components/Agency";
import IntegrationMap from "@/components/pages/process/IntegrationMap";
import UseCaseTabs from "@/components/pages/process/UseCaseTabs";
import "./ai-implementation.css";

const detail: Detail = {
  "path": "/ai-implementation",
  "title": "AI Implementation & Integration Services",
  "description": "AI implementation from A$3,500. We scope, build and test automations inside the software you already use, then hand over the accounts and documentation.",
  "label": "AI implementation",
  "heading": "AI implementation services for Australian businesses.",
  "lead": "Make your existing systems work together. We map, build and test the workflow with your team, whether it routes enquiries into a CRM, sends documents for review or prepares a report from several tools.",
  "sections": [
    [
      "Start with a handoff",
      "Pick one recurring task. We trace a real example with its owner, including where information enters, who checks it and where the final record belongs."
    ],
    [
      "Choose the simplest reliable method",
      "A rule can route a form by region. AI can help classify free-text requests. When the input is ambiguous, the workflow can pause and show the original request to a human reviewer."
    ],
    [
      "Hand over a working system",
      "Your team tests normal and exceptional cases before launch. The handover covers permissions, monitoring, how to replay a failed task and who owns each integration."
    ]
  ],
  "links": [
    ["Client case studies", "/work"],
    ["AI implementation for Perth and WA", "/ai-implementation-perth"],
    [
      "CRM & customer workflows",
      "/solutions/crm-automation"
    ],
    [
      "Admin & operations",
      "/solutions/business-process-automation"
    ],
    [
      "AI Operations Audit",
      "/ai-operations-audit"
    ]
  ]
};

export const metadata = agencyMeta(detail.path, detail.title, detail.description);

const included = [
  "One agreed workflow across the systems named in the scope",
  "Written acceptance tests covering normal and exception cases",
  "Failure handling: retries, alerts and a human-review step where needed",
  "Build inside accounts your business owns",
  "Documentation, permissions map and a handover session",
  "Defects found against the agreed tests fixed before sign-off",
];
const excluded = [
  "Third-party software subscriptions and usage fees",
  "Extra workflows or departments beyond the scope",
  "Large data migrations or clean-up of historical records",
  "Custom apps where an integration or native feature will do",
  "Ongoing monitoring after handover (optional support)",
];
const factors = [
  ["Systems", "How many tools are connected, and whether each has a usable API."],
  ["Exceptions", "How many unusual cases need their own rule or a person’s review."],
  ["Approvals", "Where a person must check before anything is sent, paid or recorded."],
  ["Data", "Whether records need matching, de-duplicating or reformatting first."],
];

export default function Page() {
  return (
    <DetailPage
      detail={detail}
      visual={<IntegrationMap />}
      after={
        <>
          <section className="agency-wrap agency-section impl-scope" aria-labelledby="impl-scope-heading">
            <p className="kicker">A typical build</p>
            <h2 id="impl-scope-heading" data-reveal>What’s in a build from A$3,500 — and what isn’t.</h2>
            <div className="impl-scope-grid">
              <section className="glass" data-reveal aria-labelledby="impl-in">
                <h3 id="impl-in">Usually included</h3>
                <ul className="check-list">{included.map(i => <li key={i}>{i}</li>)}</ul>
              </section>
              <section className="glass" data-reveal style={{ ["--d" as string]: "80ms" }} aria-labelledby="impl-out">
                <h3 id="impl-out">Not included unless scoped</h3>
                <ul className="cross-list">{excluded.map(i => <li key={i}>{i}</li>)}</ul>
              </section>
            </div>
            <p className="impl-note">Your proposal lists exactly what’s in and out for your build. Nothing is started until you approve it.</p>
          </section>

          <section className="blueprint-band" aria-labelledby="impl-price-heading">
            <div className="agency-wrap agency-section impl-price">
              <div className="impl-price-copy">
                <p className="kicker">How pricing is set</p>
                <h2 id="impl-price-heading" data-reveal>A fixed quote, based on four things.</h2>
                <p className="section-lead">Builds start from A$3,500. After the audit, we quote a fixed price for the agreed scope, so you know the cost before work begins. Applicable tax and third-party software costs are confirmed before you commit.</p>
                <div className="hero-actions">
                  <CallLink variant="light" />
                  <Link className="hero-secondary" href="/ai-operations-audit">Why we start with an audit <span aria-hidden="true">→</span></Link>
                </div>
              </div>
              <ol className="impl-factors">
                {factors.map(([title, copy], i) => (
                  <li key={title} className="glass-blueprint" data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>
                    <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="agency-wrap agency-section impl-next" aria-labelledby="impl-next-heading">
            <h2 id="impl-next-heading" className="impl-next-h" data-reveal>See it before you commit.</h2>
            <div className="impl-next-grid">
              <Link href="/work" className="glass" data-reveal>
                <span className="impl-tag">Case studies</span>
                <h3>See how a build is scoped, tested and handed over</h3>
                <span className="impl-next-go" aria-hidden="true">→</span>
              </Link>
              <Link href="/ai-operations-audit" className="glass" data-reveal style={{ ["--d" as string]: "80ms" }}>
                <span className="impl-tag">A$1,000 audit</span>
                <h3>Get a written plan and first-build scope before you pay for a build</h3>
                <span className="impl-next-go" aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
        </>
      }
    >
      <section className="agency-wrap agency-section impl-build" aria-labelledby="impl-build-heading">
        <p className="kicker">What we build</p>
        <h2 id="impl-build-heading" data-reveal>Workflows that move information between the tools you already pay for.</h2>
        <p className="section-lead">Three common patterns. Each example is illustrative — your flow is mapped from a real task during the audit.</p>
        <UseCaseTabs />
      </section>
    </DetailPage>
  );
}
