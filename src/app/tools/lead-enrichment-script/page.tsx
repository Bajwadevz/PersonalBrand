import { pageMetadata } from "@/lib/page-metadata";
import LeadEnrichmentClient from "./LeadEnrichmentClient";

export const metadata = pageMetadata(
  "/tools/lead-enrichment-script",
  "Lead Enrichment Script Generator",
  "Generate JavaScript or Python examples for formatting lead data before sending it to a CRM through n8n or Make.",
);

export default function LeadEnrichmentPage() {
  return <LeadEnrichmentClient />;
}
