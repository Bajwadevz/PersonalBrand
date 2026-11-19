import { pageMetadata } from "@/lib/page-metadata";
import PromptLibraryClient from "./PromptLibraryClient";

export const metadata = pageMetadata(
  "/tools/prompt-library",
  "AI System Prompt Library: Free Tool",
  "Explore system prompts by role and task, then copy an example to adapt and test in your own workflow.",
);

export default function PromptLibraryPage() {
  return <PromptLibraryClient />;
}
