import type { Metadata } from "next";
import LeadEnrichmentClient from "./LeadEnrichmentClient";

export const metadata: Metadata = {
  title: "Lead Enrichment Script Generator | bajwaa.dev",
  description: "Generate custom JavaScript/Python snippets for formatting lead data in n8n or Make before pushing to your CRM.",
  alternates: { canonical: "https://bajwaa.dev/tools/lead-enrichment-script" },
};

export default function LeadEnrichmentPage() {
  return <LeadEnrichmentClient />;
}
