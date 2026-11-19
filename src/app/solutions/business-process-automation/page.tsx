import { agencyMeta, DetailPage, type Detail } from "@/components/Agency";

const detail: Detail = {
  "path": "/solutions/business-process-automation",
  "title": "Business Process Automation for Australian Teams",
  "description": "Assess repetitive reporting, document intake and handovers. Explore rules, AI-assisted classification and approval controls for Australian operations teams.",
  "label": "Admin & operations",
  "heading": "Move recurring work out of the copy-and-paste queue.",
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

export default function Page() {
  return <DetailPage detail={detail}/>;
}
