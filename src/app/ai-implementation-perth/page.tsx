import { agencyMeta, DetailPage, type Detail } from "@/components/Agency";

const detail: Detail = {
  "path": "/ai-implementation-perth",
  "title": "AI Automation for Perth Businesses",
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
      "How a WA service team could cut quote re-entry",
      "An illustrative workflow starts when an office coordinator receives an approved quote. The quote ID links it to the CRM deal, then the system creates a draft job for review. If the site address or customer record is unclear, the coordinator gets the original quote and an exception to resolve. Before rollout, the team can compare manual re-entries, corrections and follow-up time across a sample of quotes."
    ],
    [
      "Coordinate across WA business hours",
      "Share a suitable time in Perth local time (AWST) when you enquire. We agree a meeting slot, name a process owner and use written maps and recorded handovers for staff who cannot join."
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
    ["Compare Australian implementation costs", "/blog/ai-implementation-cost-australia"],
    ["See how to match quotes to CRM records", "/blog/reduce-manual-crm-updates"],
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

export default function Page() {
  return <DetailPage detail={detail}/>;
}
