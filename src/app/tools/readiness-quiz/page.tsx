import { pageMetadata } from "@/lib/page-metadata";
import ReadinessQuizClient from "./ReadinessQuizClient";

export const metadata = pageMetadata(
  "/tools/readiness-quiz",
  "Workflow Automation Readiness Quiz: Free Tool",
  "Answer ten questions about your workflow and review practical next steps for assessing its readiness for automation.",
);

export default function ReadinessQuizPage() {
  return <ReadinessQuizClient />;
}
