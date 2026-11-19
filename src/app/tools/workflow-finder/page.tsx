import { pageMetadata } from "@/lib/page-metadata";
import WorkflowFinderClient from "./WorkflowFinderClient";

export const metadata = pageMetadata(
  "/tools/workflow-finder",
  "n8n Workflow Idea Finder: Free Tool",
  "Find n8n workflow ideas by industry and software stack to help prioritise a potential automation project.",
);

export default function WorkflowFinderPage() {
  return <WorkflowFinderClient />;
}
