# Australian SEO release audit

19 November 2026

The agency release targets the Australian market with one canonical version of each page, an `en-AU` document language, Australian English copy, AUD prices, and an accurately described remote delivery area. The Perth page explains AWST coordination and a quote-to-accounts workflow using tools familiar to Western Australian operators. Structured data represents a remote service and publisher.

## Australian search intent

| Query group | Landing page | What to emphasise |
| --- | --- | --- |
| AI implementation agency Australia | / | One offer for Australian teams with a clear discovery path |
| AI integration services Australia | /ai-implementation | Scope, test cases, existing software, and account ownership |
| AI operations audit Australia | /ai-operations-audit | A$750 scope, written deliverables and review meeting |
| AI implementation Perth and AI automation Perth | /ai-implementation-perth | Perth time, WA client workflows and remote delivery |
| CRM automation Australia | /solutions/crm-automation | Matching records, handling duplicates and assigning ownership |
| Business process automation Australia | /solutions/business-process-automation | Recurring handoffs, exceptions and human approvals |
| AI implementation costs in Australia | /blog/ai-implementation-cost-australia | Agency prices, running costs and a worked estimate |

Australian query results surface service pages that emphasise implementation scope and integration with the tools a team already owns. Perth competitors feature specific office workflows and a starting diagnostic. The site's pages respond with bounded deliverables, local working hours and real examples of an implementation handoff. The query review is qualitative. Search Console and paid volume data were unavailable. [AI4SMB](https://ai4smb.com.au/services), [FUZN](https://fuzn.com.au/services/ai-integration/), [CLIK Digital](https://clikdigital.com.au/ai-automation-perth/).

## Indexing and migration

The legacy article URLs and their internal links stay in the canonical `/blog` archive. The five permanent redirects support the existing URL migration, and only canonical destinations appear in the production sitemap. Review the [migration record](migration.md) and [release crawl](release-crawl.csv). [Google Search Central migration guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

## Release and production measurements

Pushes to `agency-australia` are for review. Vercel's current production deployment tracks `main`. Production release still requires owner confirmation of prices, policies and the live enquiry destination. After approval and publication, verify ownership in Search Console, export the Australian search baseline, submit the production sitemap and inspect the main service pages. Follow the [Insights measurement plan](insights-rollout.md) for comparison over time.

## Pre-push evidence

- The production build and lint passed. All seven automated tests passed, including form receipt validation, retry and deduplication. npm reported zero production dependency advisories.
- The final crawl checked 58 canonical pages and 66 distinct internal paths. Every page had one H1, a unique title and description, `en-AU` language, a canonical URL and social-preview tags. All 31 articles returned valid Article JSON-LD. The social image returned HTTP 200 as PNG. The crawl surfaced missing social images on the legacy AI Implementation OS page, which now uses the shared metadata.
- All five permanent redirects resolved to successful destinations. Browser QA checked 13 entry routes across desktop and mobile, including both themes, Insights filtering, reduced motion, Loom loading, and the native enquiry flow with JavaScript disabled. Local submissions used synthetic data and an intercepted response. See the [browser results](../agency-qa/browser-results.json).
