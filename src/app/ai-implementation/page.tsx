import { agencyMeta, DetailPage, type Detail } from "@/components/Agency";

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

export default function Page() {
  return <DetailPage detail={detail}/>;
}
