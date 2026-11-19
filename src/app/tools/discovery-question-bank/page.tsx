import { pageMetadata } from "@/lib/page-metadata";
import DiscoveryQuestionClient from "./DiscoveryQuestionClient";

export const metadata = pageMetadata(
  "/tools/discovery-question-bank",
  "Sales Discovery Question Bank",
  "Browse sales discovery questions by stage and buyer role to prepare for a conversation about business needs and qualification.",
);

export default function DiscoveryQuestionPage() {
  return <DiscoveryQuestionClient />;
}
