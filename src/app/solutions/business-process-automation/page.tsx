import { agencyMeta, DetailPage, type Detail } from "@/components/Agency";

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

export default function Page() {
  return <DetailPage detail={detail}/>;
}
