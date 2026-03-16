import type { Metadata } from "next";
import WorkflowFinderClient from "./WorkflowFinderClient";

export const metadata: Metadata = {
  title: "n8n Workflow Idea Finder — Free Tool | bajwaa.dev",
  description: "Select your industry and tools. Get 5 specific n8n workflow ideas built for your exact stack — curated from real operator workflows. Free, no sign-up.",
  alternates: { canonical: "https://bajwaa.dev/tools/workflow-finder" },
};

export default function WorkflowFinderPage() {
  return <WorkflowFinderClient />;
}
