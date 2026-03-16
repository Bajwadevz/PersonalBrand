import type { Metadata } from "next";
import PromptLibraryClient from "./PromptLibraryClient";

export const metadata: Metadata = {
  title: "AI System Prompt Library — Free Tool | bajwaa.dev",
  description: "Browse production-ready system prompts by role and task. Copy directly into your n8n or Make workflow. Built from real operator deployments. Free, no sign-up.",
  alternates: { canonical: "https://bajwaa.dev/tools/prompt-library" },
};

export default function PromptLibraryPage() {
  return <PromptLibraryClient />;
}
