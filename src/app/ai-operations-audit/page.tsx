import { agencyMeta, DetailPage, type Detail } from "@/components/Agency";

const detail: Detail = {
  "path": "/ai-operations-audit",
  "title": "AI Operations Audit for Australian Businesses",
  "description": "Explore a fixed-scope A$750 workflow audit for one operating team, including integration checks, a written roadmap and a review meeting. See the scope and deliverables.",
  "label": "AI Operations Audit",
  "heading": "Know where AI will help before you pay for a build.",
  "lead": "The A$750 fixed-scope audit covers one operating team and up to two agreed workflows and gives you a written implementation plan you can keep, whether you build with us or take it to your own team.",
  "sections": [
    [
      "Agree the boundary",
      "We agree up to two workflows, three business systems and two stakeholder conversations within one team. The scope includes a limited sample review, a written report and one readout. We confirm the total payable, including any applicable tax, before invoicing."
    ],
    [
      "Follow the work",
      "We map the current handoffs, check available integration options and document exceptions, access needs and approval points. Your process owner checks our assumptions."
    ],
    [
      "Take away a decision",
      "You receive current and proposed workflow maps, a feasibility assessment, a 30/60/90-day roadmap and a recommended first build with estimated ongoing software costs. We compare native features, rules and AI where appropriate. The value estimate identifies which volumes, timings and costs your team still needs to measure."
    ],
    [
      "Decide whether to proceed",
      "The readout includes a discussion of risks and alternatives. Production development, extra departments and formal security certification require separate scope."
    ]
  ],
  "links": [
    ["Prepare for the audit", "/blog/ai-operations-audit-checklist-australia"],
    ["Understand implementation costs", "/blog/ai-implementation-cost-australia"],
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
