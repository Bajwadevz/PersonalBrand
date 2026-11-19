import { agencyMeta, DetailPage, type Detail } from "@/components/Agency";

const detail: Detail = {
  "path": "/about",
  "title": "About Shahzeb Bajwa and bajwaa.dev",
  "description": "Meet Shahzeb Bajwa, the founder of bajwaa.dev, and learn how his software sales and computer science background informs AI implementation for Australian teams.",
  "label": "About the founder",
  "heading": "Built by someone who has carried the pipeline.",
  "lead": "I’m Shahzeb Bajwa. My background is in computer science and B2B software sales. I started building workflows after seeing how often a good customer conversation disappeared between an inbox and the CRM.",
  "sections": [
    [
      "From the sales floor to the workflow",
      "I work with tools including HubSpot, Make and n8n. I start by asking the person doing the work to walk me through a recent example, including what went wrong."
    ],
    [
      "How I work with your team",
      "We agree who owns the accounts, which actions require sign-off and what your team needs to operate the workflow after handover. You can review the method and watch a recorded walkthrough before discussing a project."
    ],
    [
      "Working across Australia",
      "bajwaa.dev supports Australian businesses remotely. We arrange discovery calls around a mutually agreed time and document decisions so your team can review them asynchronously."
    ]
  ],
  "links": [
    [
      "How it works",
      "/how-it-works"
    ],
    [
      "Watch the implementation walkthrough",
      "/work"
    ]
  ]
};

export const metadata = agencyMeta(detail.path, detail.title, detail.description);

export default function Page() {
  return <DetailPage detail={detail}/>;
}
