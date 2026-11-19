# Insights and SEO rollout

The website uses **Insights** in navigation and retains the canonical `/blog` archive and existing article URLs. The archive includes all 27 original articles, the pricing guide from the agency rebuild and three new guides. The home page highlights guides and the service pages link to the most relevant article. The articles link back to services and related reading.

| Search intent | Canonical landing page | Supporting article |
| --- | --- | --- |
| AI implementation agency or services in Australia | / and /ai-implementation | AI implementation cost in Australia |
| CRM automation services | /solutions/crm-automation | Reduce manual CRM updates without replacing your CRM |
| Rules, workflows and AI agents | /solutions/business-process-automation | Business process automation vs AI agents |
| Paid AI operations audit | /ai-operations-audit | AI operations audit checklist |
| AI implementation for Perth businesses | /ai-implementation-perth | Link to pricing and the delivery process from the service page |

The new guides address decisions buyers can make before commissioning work. The CRM guide uses a quote-to-CRM handoff. The workflow guide compares rules, AI classification and a bounded agent. The audit checklist describes useful evidence, redaction and process ownership. Provider and Australian Government references are cited on the relevant pages. This map reflects query intent and qualitative search results. Search volumes and search positions remain unmeasured.

## Measurement after release

- Export Search Console performance for the previous 90 days by query and landing page, with an Australia filter. Save impressions, clicks, CTR and average position for the existing URLs and the service-page cluster.
- Submit the sitemap after publication and inspect the home, Perth, service and new article URLs. Compare canonical selection and index coverage against the local crawl.
- Review impressions, relevant clicks and qualified discovery enquiries at 30, 60 and 90 days. Use those results to choose topics and revise existing pages where their search intent overlaps.

## Verified locally

The production-mode crawl checked all 58 sitemap URLs, including all 31 articles. Each returned HTTP 200 with a canonical, title, description and one H1. All five migration redirects returned 308 and resolved. The browser confirmed the archive links to every canonical article and that the topic filter restores the complete archive. The wider browser run passed with 46 distinct internal links and zero violations across 20 automated accessibility scans. See [release crawl](release-crawl.csv) and [browser results](../agency-qa/browser-results.json).
