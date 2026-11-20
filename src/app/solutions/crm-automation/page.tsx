import CaseHeadline from "@/components/CaseHeadline";
import Link from "next/link";
import { agencyMeta, DetailPage, type Detail } from "@/components/Agency";
import CrmRecordCompare from "@/components/pages/solutions/CrmRecordCompare";
import EnquiryBeam from "@/components/pages/solutions/EnquiryBeam";
import { getCaseStudy } from "@/lib/case-studies";
import "../solutions.css";

const detail: Detail = {
  "path": "/solutions/crm-automation",
  "title": "CRM Automation for HubSpot & Small Teams",
  "description": "Stop retyping leads and deal updates. We automate HubSpot and other CRMs: enquiry capture, de-duplication, owner assignment, follow-ups and Xero handoffs.",
  "label": "CRM & customer workflows",
  "heading": "CRM automation that gives every enquiry an owner and a next step.",
  "lead": "We design CRM workflows around the way your team qualifies, assigns and follows up customer requests. The starting point is the CRM you already use.",
  "sections": [
    [
      "Find the missing handoff",
      "Trace an enquiry from inbox or form to contact, company and open deal. Check where people copy details, assign owners or lose the original source."
    ],
    [
      "Keep the record trustworthy",
      "Match contacts using agreed identifiers, preserve the first source and send ambiguous matches to a reviewer. A repeat submission should update the right record without creating another open deal."
    ],
    [
      "Give staff a recovery path",
      "Define what happens when an owner is missing or the CRM is offline. Agree how to queue exceptions, who can resolve them and when to retry the update."
    ]
  ],
  "links": [
    ["HubSpot and Xero integration guide", "/blog/hubspot-xero-integration-guide"],
    ["Case study: Salesforce CRM hygiene assistant", "/work/salesforce-crm-hygiene-agent"], ["Case study: outbound engine with HubSpot sync", "/work/outbound-automation-crm-sync"],
    ["Read the CRM handoff guide", "/blog/reduce-manual-crm-updates"],
    [
      "Watch the implementation walkthrough",
      "/work"
    ],
    [
      "AI implementation",
      "/ai-implementation"
    ],
    [
      "AI Operations Audit",
      "/ai-operations-audit"
    ]
  ]
};

export const metadata = agencyMeta(detail.path, detail.title, detail.description);

const problems = [
  ["Duplicate contacts", "The same customer exists three times, each with half the history."],
  ["Enquiries with no owner", "A form lands in the CRM and nobody is told it is theirs."],
  ["Lost lead source", "You can’t tell which channel brought in the work that actually closed."],
  ["Follow-ups left to memory", "Open deals sit with no next step and no date until the customer goes cold."],
  ["Retyping into Xero", "Won deals are keyed again as contacts and invoices by someone in accounts."],
  ["Reports nobody trusts", "The pipeline view is out of date, so the real numbers live in a spreadsheet."],
] as const;

const includes = [
  ["Enquiry capture", "Forms, a shared inbox and missed calls create or update the right record."],
  ["Matching rules", "Agreed identifiers for de-duplication, with unclear matches sent to a reviewer."],
  ["Owner assignment", "Routing by service, region or round-robin — and a fallback when nobody fits."],
  ["Follow-up tasks", "Every open deal gets a dated next step; overdue ones surface to a manager."],
  ["Accounting handoff", "Won deals create the Xero contact and a draft invoice for accounts to check."],
  ["Exception queue & handover", "Failed updates are queued and retried, with a written runbook for your team."],
] as const;

const related = ["salesforce-crm-hygiene-agent", "construction-crm", "clinic-call-tracking-crm"].map(s => getCaseStudy(s)!).filter(Boolean);

export default function Page() {
  return (
    <DetailPage
      detail={detail}
      visual={<CrmRecordCompare />}
      after={<>
        <section className="agency-wrap agency-section" aria-labelledby="crm-includes">
          <div className="sol-split">
            <div>
              <p className="kicker">What a CRM build includes</p>
              <h2 id="crm-includes" data-reveal>Built in the CRM you already pay for.</h2>
              <p className="section-lead" data-reveal>HubSpot, Pipedrive, Salesforce or Zoho. The exact scope comes out of the audit; implementation starts from A$3,500.</p>
            </div>
            <ol className="sol-includes">
              {includes.map(([t, c], i) => (
                <li key={t} data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
                  <span className="sol-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <div><h3>{t}</h3><p>{c}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="blueprint-band" aria-labelledby="crm-proof">
          <div className="agency-wrap agency-section">
            <p className="kicker">Related work</p>
            <h2 id="crm-proof" data-reveal>CRM workflows we’ve built.</h2>
            <p className="section-lead" data-reveal>Anonymised client work. Results were reported by each client and are not a promise for another business.</p>
            <div className="sol-related">
              {related.map(c => {
                return (
                  <Link key={c.slug} href={`/work/${c.slug}`} className="sol-related-card glass-blueprint" data-reveal>
                    <span className="sol-tag">Client work · anonymised</span>
                    <CaseHeadline study={c} valueClass="sol-related-metric" labelClass="sol-related-label" />
                    <h3>{c.shortTitle}</h3>
                    <span className="sol-related-go">Read the case study <span aria-hidden="true">↗</span></span>
                  </Link>
                );
              })}
              <Link href="/blog/hubspot-xero-integration-guide" className="sol-related-card sol-related-guide glass-blueprint" data-reveal>
                <span className="sol-tag">Guide</span>
                <h3>HubSpot and Xero integration guide</h3>
                <span className="sol-related-label">What to sync, what to leave manual and where the handoff usually breaks.</span>
                <span className="sol-related-go">Read the guide <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          </div>
        </section>
      </>}
    >
      <section className="agency-wrap agency-section" aria-labelledby="crm-problems">
        <p className="kicker">Common CRM problems we fix</p>
        <h2 id="crm-problems" data-reveal>Where customer records go wrong.</h2>
        <ul className="sol-problems">
          {problems.map(([t, c], i) => (
            <li key={t} className="glass" data-reveal style={{ ["--d" as string]: `${(i % 3) * 70}ms` }}>
              <span className="sol-problem-mark" aria-hidden="true">!</span>
              <h3>{t}</h3>
              <p>{c}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="agency-wrap agency-section sol-beam-section" aria-labelledby="crm-flow">
        <div className="sol-split">
          <div>
            <p className="kicker">How an enquiry should travel</p>
            <h2 id="crm-flow" data-reveal>From first message to owned record.</h2>
            <p className="section-lead" data-reveal>Every channel lands in one matching step. Clear matches update the record and assign an owner; unclear ones wait for a person instead of being guessed. Illustrative flow.</p>
          </div>
          <div className="sol-beam-wrap glass" data-reveal><EnquiryBeam /></div>
        </div>
      </section>
    </DetailPage>
  );
}
