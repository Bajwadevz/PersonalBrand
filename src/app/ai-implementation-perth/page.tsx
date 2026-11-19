import { agencyMeta, DetailPage, type Detail } from "@/components/Agency";

const detail: Detail = {
  "path": "/ai-implementation-perth",
  "title": "AI Implementation for Perth and Western Australian Businesses",
  "description": "Remote AI implementation for Perth and Western Australian businesses. Review CRM, job management and accounting handoffs and arrange discovery in AWST.",
  "label": "Perth & Western Australia",
  "heading": "AI implementation for Perth businesses, delivered remotely.",
  "lead": "We help Western Australian teams reduce manual admin and connect the software they already rely on. Discovery, workflow reviews and handover can all happen remotely.",
  "sections": [
    [
      "Follow a job from enquiry to accounts",
      "For a Perth field-service operator, a quote request may start in email, move into a job-management tool and finish in Xero or MYOB. We trace where staff re-enter the same details and where finance still needs to review an action."
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
