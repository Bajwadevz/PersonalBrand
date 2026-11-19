import { pageMetadata } from "@/lib/page-metadata";
import RoutingLogicClient from "./RoutingLogicClient";

export const metadata = pageMetadata(
  "/tools/routing-logic-builder",
  "Inbound Routing Logic Builder",
  "Plan rules for scoring and assigning inbound leads before building a routing workflow in n8n.",
);

export default function RoutingLogicPage() {
  return <RoutingLogicClient />;
}
