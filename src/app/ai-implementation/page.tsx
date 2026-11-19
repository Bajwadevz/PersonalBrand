import { agencyMeta, DetailPage, type Detail } from "@/components/Agency";

const detail: Detail = {
  "path": "/ai-implementation",
  "title": "AI Implementation Services for Australian Businesses",
  "description": "Connect existing tools, reduce repetitive admin and improve CRM handoffs with scoped AI implementation services for Australian businesses.",
  "label": "AI implementation",
  "heading": "Make your existing systems work together.",
  "lead": "We build around the process your team actually uses. That may mean connecting a form to a CRM, routing a document for review or preparing a report from several systems.",
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

export default function Page() {
  return <DetailPage detail={detail}/>;
}
