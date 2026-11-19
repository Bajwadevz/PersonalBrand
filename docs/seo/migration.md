# Australian search migration

Production baseline captured 19 November 2026 before changing the site. The CSV records all 49 URLs advertised in the production sitemap, seven concept demos, two utility routes, robots and the sitemap. All 60 returned HTTP 200 to the crawler. The server-rendered site described lead response for service businesses, promoted a free audit and sold several separate offers. Ten responses contained a homepage canonical, including seven noindex demo pages. Blog URLs, the tools library and the Sales OS example have distinct search intent.

The crawl records response times, unique internal paths, title, H1, description, canonical, robots, image counts and JSON-LD script counts. Times reflect a single network fetch per URL. Blank robots cells mean no HTML robots directive appeared. Neither fetch success nor discovery in a sitemap proves Google indexing.

## Route decisions

| Existing URL | Release behaviour | Reason |
| --- | --- | --- |
| /, /about, /contact | Rewrite in place | Preserve brand, founder and enquiry destinations |
| /work-with-me | 308 to /ai-implementation | Agency engagement and implementation scope |
| /services/lead-response | 308 to /solutions/crm-automation | Lead capture, assignment and CRM handover |
| /services/automations | 308 to /solutions/business-process-automation | Workflow implementation |
| /services/system-care | 308 to /how-it-works | Ongoing support is an engagement phase |
| /services/websites | Keep as design concept archive | Historical design offers have no equivalent current service |
| /work/small-business-sales-os | Keep | Original product and fictional demo records |
| /ai-implementation-os, /product | Keep education page, redirect /product directly with 308 | Different from agency services |
| /blog and all 27 articles | Keep | Preserve 27 editorial URLs and add one new Australian pricing guide. Update obsolete calls to action and social preview fallback |
| /tools, its nine utilities, /workflows | Keep | Existing tools and examples have separate intent |
| /demos/* | Keep seven noindex concept demos outside sitemap | Illustrations of fictional businesses |
| /demo | Keep noindex outside sitemap | Visual experiment |

The new sitemap omits redirecting and noindex routes. Last-modified dates are omitted unless a reliable content update date is available. Sitemap entries use the production origin. Preview deployments disallow crawlers and emit noindex on agency pages. Product templates and education remain available at their distinct historical URLs.

## Search intent and evidence

| Landing page | Search intent | What the page needs to answer |
| --- | --- | --- |
| / | AI implementation agency Australia | Who the agency serves and how to book |
| /ai-implementation | AI implementation services for Australian businesses | Scope, tools, control and deliverables |
| /ai-operations-audit | AI business audit or AI opportunity assessment | Paid deliverable, scope, entry pricing and buying process |
| /ai-implementation-perth | AI implementation Perth and Western Australia | Remote delivery, Perth time and practical software handovers |
| /solutions/crm-automation | CRM automation Australia | Record creation, ownership, exceptions and integrations |
| /solutions/business-process-automation | Business process automation Australia | Repetitive work, process design and human checkpoints |
| /how-it-works | AI implementation process | Discovery, scoping, build and care |
| /work | AI automation examples | Inspect an actual demonstration and its limits |

Australian results returned agency service, audit and location pages. CRM Online describes implementation and integration, AI4SMB describes an audit-to-build journey, and 13Labs describes Perth workflow delivery. These are qualitative intent examples only. [CRM Online](https://crmonline.com.au/applied-ai), [AI4SMB](https://ai4smb.com.au/services), [13Labs](https://www.13labs.au/locations/perth/business-process-automation).

Australian search volume, difficulty, click-through rate, conversion and referring domains remain unmeasured. The configured treg connection and CLI both returned an expired or invalid token. The public PageSpeed endpoint returned RESOURCE_EXHAUSTED. Private GSC, GA4 and CrUX field measurements are outstanding. A GOOGLE_SITE_VERIFICATION environment variable is supported for HTML-tag ownership verification when a property uses that method. Domain property verification requires the owner's DNS access.

## Production checks after release

1. Fetch production robots and sitemap, inspect the returned canonical host, and check that the release is indexable. Inspect the five 308 responses without following redirects, then verify each destination returns 200.
2. In the verified Search Console property, save the prelaunch performance export by query, page, country and device. Save Links exports and submit the canonical sitemap. Inspect the home, service, audit, Perth and two solution URLs.
3. Compare Australian impressions, clicks and qualified discovery enquiries at 30, 60 and 90 days. Review page-indexing reasons and redirect losses against the saved URL inventory. Capture field LCP, INP and CLS separately from local lab measurements when sufficient traffic exists.
4. Review partner/referral links with the founder and request relevant links only where there is a real relationship. A page serving Perth remotely does not establish a physical office.

## Local production verification

The [release crawl](release-crawl.csv) verified 55 sitemap URLs. Every URL returned HTTP 200 with one H1, its own canonical and title, description, Open Graph title and Twitter card metadata. The five permanent redirects returned 308 and their destinations returned 200. Robots advertised the production sitemap and the social image rendered as PNG.

| Homepage Lighthouse run | Performance | LCP | TBT | CLS |
| --- | ---: | ---: | ---: | ---: |
| Existing live site, mobile | 100 | 1.2 s | 40 ms | 0 |
| Rebuilt local production site, mobile | 100 | 0.9 s | 40 ms | 0 |
| Existing live site, desktop | 97 | 0.5 s | 0 ms | 0 |
| Rebuilt local production site, desktop | 100 | 0.2 s | 0 ms | 0 |

These are individual lab runs. The local build avoids the network conditions of a production deployment. Field INP and Core Web Vitals remain pending.
