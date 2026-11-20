import Link from "next/link";
import { agencyMeta, DetailPage, type Detail } from "@/components/Agency";
import PerthClock from "@/components/pages/perth/PerthClock";
import "./perth.css";

const detail: Detail = {
  "path": "/ai-implementation-perth",
  "title": "AI Automation & AI Consulting for Perth SMEs",
  "description": "AI automation for Perth and WA small businesses, delivered remotely on Perth time. We cut repetitive admin and connect HubSpot, Xero, MYOB and job tools.",
  "label": "Perth & Western Australia",
  "heading": "AI automation for Perth businesses, delivered remotely.",
  "lead": "We help Perth and Western Australian teams automate handoffs between their inbox, CRM, job management and accounts tools. Discovery, workflow reviews and handover happen remotely, with appointments arranged in Perth time.",
  "sections": [
    [
      "Follow a job from enquiry to accounts",
      "For a Perth field-service operator, a quote request may start in email, move into a job-management tool and finish in Xero or MYOB. We trace where staff re-enter the same details and where finance still needs to review an action."
    ],
    [
      "Check the systems before committing",
      "An audit checks the integration options available on your specific plans, whether you use HubSpot, accounting software or a job board. An approved change to a CRM and a payment authorisation need different controls."
    ],
    [
      "Start with one workflow",
      "The free discovery call establishes fit. A paid A$750 audit produces a written plan and a separately scoped implementation proposal if the opportunity is worthwhile."
    ]
  ],
  "links": [
    ["AI help for WA small businesses", "/blog/ai-for-wa-small-businesses"],
    ["Client case studies", "/work"],
    ["Compare Australian implementation costs", "/blog/ai-implementation-cost-australia"],
    ["See how to match quotes to CRM records", "/blog/reduce-manual-crm-updates"],
    ["AI implementation", "/ai-implementation"],
    ["AI Operations Audit", "/ai-operations-audit"]
  ]
};

export const metadata = agencyMeta(detail.path, detail.title, detail.description);

const stacks = [
  ["Accounts", ["Xero", "MYOB"], "Draft invoices, sales orders and reconciliation prompts, with finance approving anything that moves money."],
  ["CRM", ["HubSpot"], "Enquiries, deals and follow-ups logged automatically, so the pipeline matches what actually happened."],
  ["Trades & field service", ["ServiceM8", "simPRO", "Tradify"], "Approved quotes become draft jobs, and completed jobs flow to accounts without retyping."],
] as const;

const examples = [
  ["Trades business", "Quote approved in email → draft job in ServiceM8 → draft invoice in Xero once the job is marked complete. The office coordinator reviews any job with an unclear site address."],
  ["Professional services firm", "Website enquiry → HubSpot contact and deal → follow-up email drafted for a partner to approve before it is sent."],
  ["Regional supplier", "Orders arriving by email → draft sales order in MYOB → exception list each morning for orders that don’t match a known customer or product."],
] as const;

const honest = [
  "No Perth office or shopfront: every stage runs remotely",
  "Calls booked in Perth hours (AWST)",
  "Written process maps and recorded handovers for staff who can’t join",
  "Built in accounts your business owns",
];

export default function Page() {
  return (
    <DetailPage detail={detail} visual={<PerthClock />}>
      <section className="agency-wrap agency-section perth-honest" aria-labelledby="perth-honest">
        <div>
          <p className="kicker">Straight answer</p>
          <h2 id="perth-honest" data-reveal>No Perth office. Perth hours.</h2>
          <p className="section-lead">You won’t find a local address here. What you get instead is a remote process built around WA time, so a Perth team never has to work to Sydney’s clock.</p>
        </div>
        <ul className="perth-honest-list">
          {honest.map((item, i) => <li key={item} data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>{item}</li>)}
        </ul>
      </section>

      <section className="perth-stacks-band" aria-labelledby="perth-stacks">
        <div className="agency-wrap agency-section">
          <p className="kicker">Common WA stacks</p>
          <h2 id="perth-stacks" data-reveal>We connect the tools you already pay for.</h2>
          <div className="perth-stacks">
            {stacks.map(([group, tools, copy], i) => (
              <div key={group} className="perth-stack glass" data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
                <h3>{group}</h3>
                <ul>{tools.map(t => <li key={t}>{t}</li>)}</ul>
                <p>{copy}</p>
              </div>
            ))}
          </div>
          <p className="perth-note">Integration options vary by plan. The audit confirms what your specific accounts support before anything is scoped. Tool names are listed for clarity, not to imply a partnership.</p>
        </div>
      </section>

      <section className="agency-wrap agency-section" aria-labelledby="perth-examples">
        <p className="kicker">What it could look like</p>
        <h2 id="perth-examples" data-reveal>Three WA workflows, start to finish.</h2>
        <ol className="perth-examples">
          {examples.map(([title, copy], i) => (
            <li key={title} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
              <span className="perth-tag">Illustrative example</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
        <p className="perth-note">These examples are illustrative, not client results. Real numbers come from measuring your own process during the audit.</p>

        <Link href="/blog/ai-for-wa-small-businesses" className="perth-guide glass" data-reveal>
          <span className="kicker">Guide · Perth &amp; WA</span>
          <span className="perth-guide-title">AI for Perth and WA small businesses: free help, grants and when to hire support</span>
          <span className="perth-guide-arrow" aria-hidden="true">→</span>
        </Link>
      </section>
    </DetailPage>
  );
}
