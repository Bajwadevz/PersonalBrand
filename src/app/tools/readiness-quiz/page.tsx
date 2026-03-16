import type { Metadata } from "next";
import ReadinessQuizClient from "./ReadinessQuizClient";

export const metadata: Metadata = {
  title: "Workflow Automation Readiness Quiz — Free Tool | bajwaa.dev",
  description: "10 questions that score how ready your business is for AI workflow automation. Get a readiness score and 3 personalized next steps. Free, no sign-up.",
  alternates: { canonical: "https://bajwaa.dev/tools/readiness-quiz" },
};

export default function ReadinessQuizPage() {
  return <ReadinessQuizClient />;
}
