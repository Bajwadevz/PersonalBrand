import type { Metadata } from "next";
import RoutingLogicClient from "./RoutingLogicClient";

export const metadata: Metadata = {
  title: "Inbound Routing Logic Builder | bajwaa.dev",
  description: "Map out your lead routing rules before building in n8n. Generate a clean logic flow for how inbound leads should be scored and assigned.",
  alternates: { canonical: "https://bajwaa.dev/tools/routing-logic-builder" },
};

export default function RoutingLogicPage() {
  return <RoutingLogicClient />;
}
