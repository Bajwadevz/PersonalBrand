import type { Metadata } from "next";
import StackBuilderClient from "./StackBuilderClient";

export const metadata: Metadata = {
  title: "Automation Stack Recommender — Free Tool | bajwaa.dev",
  description: "Select your role, goals, and budget. Get a specific recommended automation stack with tool justifications — no generic advice. Free, no sign-up.",
  alternates: { canonical: "https://bajwaa.dev/tools/stack-builder" },
};

export default function StackBuilderPage() {
  return <StackBuilderClient />;
}
