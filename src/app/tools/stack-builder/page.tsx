import { pageMetadata } from "@/lib/page-metadata";
import StackBuilderClient from "./StackBuilderClient";

export const metadata = pageMetadata(
  "/tools/stack-builder",
  "Automation Stack Recommender: Free Tool",
  "Explore automation tools for your role, goals and budget to build a shortlist for evaluation.",
);

export default function StackBuilderPage() {
  return <StackBuilderClient />;
}
