import type { Metadata } from "next";
import DiscoveryQuestionClient from "./DiscoveryQuestionClient";

export const metadata: Metadata = {
  title: "Sales Discovery Question Bank | bajwaa.dev",
  description: "Stop asking 'what keeps you up at night'. A curated bank of hard-hitting discovery questions organized by sales stage and persona.",
  alternates: { canonical: "https://bajwaa.dev/tools/discovery-question-bank" },
};

export default function DiscoveryQuestionPage() {
  return <DiscoveryQuestionClient />;
}
