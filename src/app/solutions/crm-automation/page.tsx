import { agencyMeta, DetailPage, type Detail } from "@/components/Agency";

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

export default function Page() {
  return <DetailPage detail={detail}/>;
}
