# Rank check and 30-day action list: 20 November 2026

Day one after the agency release went live. The new commercial pages were submitted to Search Console today, so this is a **baseline**, not a verdict.

## 1. Method and caveats

| Step | What was planned | What actually happened |
| --- | --- | --- |
| Live google.com.au check | 15 keywords plus `site:bajwaa.dev`, loaded in the founder's Chrome (account shahzo@bajwaa.dev) with `gl=au&hl=en-AU&num=100&pws=0` (AU locale, personalisation off), spaced 10–20 s apart | **Stopped on query 1.** The first request ("ai implementation australia") was redirected to Google's "unusual traffic from your computer network" CAPTCHA page. As instructed, the CAPTCHA was not attempted and no further Google searches were made. |
| `site:bajwaa.dev` | One query | **Not run** (blocked by the same CAPTCHA). The Search Console index count in section 3 is used instead. It is more reliable anyway. |
| Search Console | Performance (Country = Australia, 28 days and 3 months) and page indexing | Done, read-only. No settings were changed and no indexing was requested. |
| Competitor snapshot | Top 3 non-directory results for "ai automation perth" | The live AU SERP could not be loaded, and WebSearch hit its usage limit. Instead, the three agency pages were taken from the 19 Nov SERP observation in `keyword-map.md` (US-index approximation) and fetched directly. **They are likely page-one competitors, but their AU positions are not confirmed.** |

Other caveats:
- **The block came from the network's IP address, not the account.** The IP Google reported doesn't look Australian, so even a successful run from this machine might not have shown true AU results, despite `gl=au`. Run future rank checks from an Australian connection, or through a SERP API with an AU location (DataForSEO `location_code` 2036, via treg once it is re-authorised).
- The GSC data runs to **16–17 Nov**, before launch, so none of it reflects the new pages.

## 2. Ranking results

No positions were observed. Everything below is "not checked", **not** "not in top 100".

| Keyword | bajwaa.dev position | Top 5 domains |
| --- | --- | --- |
| ai implementation australia | Not checked (CAPTCHA on this query) | Not observed |
| ai implementation services australia | Not checked | Not observed |
| ai automation agency australia | Not checked | Not observed |
| ai automation perth | Not checked | Not observed (see section 5 for likely competitors) |
| ai consultant perth | Not checked | Not observed |
| ai agency perth | Not checked | Not observed |
| ai for small business perth | Not checked | Not observed |
| crm automation australia | Not checked | Not observed |
| hubspot xero integration | Not checked | Not observed |
| business process automation australia | Not checked | Not observed |
| ai operations audit | Not checked | Not observed |
| ai readiness assessment australia | Not checked | Not observed |
| workflow automation small business australia | Not checked | Not observed |
| bajwaa | Not checked (GSC AU: avg position for the property 2.7 over 28 days, brand is the only query) | Not observed |
| bajwaa.dev | Not checked | Not observed |

**Expected reality:** the commercial pages aren't indexed yet (section 3), so they can't rank today. Only the brand query and legacy blog URLs can show up.

## 3. Index coverage (Search Console → Pages, last update 16 Nov 2026)

| Status | Pages |
| --- | --- |
| **Indexed** | **21** |
| Not indexed | 37 |
| – Discovered, currently not indexed | 21 |
| – Crawled, currently not indexed | 9 |
| – Excluded by `noindex` | 4 |
| – Page with redirect | 2 |
| – Alternate page with proper canonical | 1 |

**The 21 indexed URLs** are `/`, `/about`, `/contact`, `/blog`, `/tools`, `/tools/roi-calculator`, `/ai-implementation-os`, `/services/websites`, `/services/system-care`, `/work-with-me`, `/work/small-business-sales-os`, and 10 blog posts (gpt4o-in-make-com, speed-to-lead-2026, manual-tasks-to-autonomous-systems, clay-vs-apollo, automated-weekly-report, ai-booking-workflow-n8n, missed-call-text-back, ai-lead-response-10-day-build, ai-automation-stack-local-service-2026, best-no-code-ai-tools-2026).

**None of the new commercial pages is indexed yet:** `/ai-implementation`, `/ai-operations-audit`, `/ai-implementation-perth`, `/how-it-works`, `/work` plus the case studies, `/solutions/*`, `/blog/hubspot-xero-integration-guide` and `/blog/ai-for-wa-small-businesses`. `/services/system-care` and `/work-with-me` now return 308 to `/how-it-works` and `/ai-implementation`, so Google should consolidate them onto the new pages.

## 4. Search Console: Australia only

| Window | Clicks | Impressions | CTR | Avg position | Queries shown |
| --- | --- | --- | --- | --- | --- |
| Last 28 days | 0 | 6 | 0% | 2.7 | "bajwaa" (3 impr.) |
| Last 3 months (18 Aug – 17 Nov) | 0 | 12 | 0% | 19.8 | "bajwaa" 4, "workload automation free trial" 2, "weekly report automation" 1. The other 5 impressions are anonymised queries. |

AU pages over 3 months: `/` 4, `/blog` 3, `/tools` 3, `/blog/automated-weekly-report-system-make-notion` 1.

Conclusion: in Australia the site starts from zero on commercial queries. This matches the 20 Nov all-country baseline (AU wasn't in the top 10 countries).

## 5. Competitor on-page snapshot ("ai automation perth")

These pages come from the 19 Nov observation (US index). Their AU positions are unconfirmed. Content was fetched on 20 Nov, and word counts are rough visible-text counts including navigation and footer.

| | 13Labs: `13labs.au/perth/automation` | Agentrix: `agentrix.com.au/` | Sandlabs: `sandlabs.com.au/ai-consulting-perth` |
| --- | --- | --- | --- |
| Title | "AI Automation Training for Perth Businesses \| 13Labs" | "Agentrix AI Agency Perth \| AI Automation & AI Agents Australia" | "AI Consultant & AI Consulting Perth \| Claude Specialists \| Sandlabs" |
| H1 | "AI Automation Training for Perth Businesses" | "Agentrix – AI Agency in Perth" (eyebrow: "The agentic era for Australia") | "AI Consulting Perth – AI consultant Perth – Claude-first AI consulting for Western Australian businesses" |
| Primary CTA | "Free Workflow Audit" / "Get started" | "Book a free 30-min discovery call" | "Book a free call", plus a secondary "Free 10-min assessment" |
| Offer / pricing | A one-time training program ("Stop renting. Start owning."), no price shown; part of a programmatic Perth × industry page set (20+ `/industries/<x>/perth` URLs in its sitemap) | Voice agents, workflow automation and chatbots; "fixed-price scoping", support tiers; no prices shown | Fixed price, founder-led; **A$2,999 AI Audit + improvement plan** shown on the page |
| Proof elements | Industry-specific task lists (trades, health, professional services and more), named founder who "reviews every enquiry" | "Perth-based, same timezone", "100% Australian owned", FAQ block, process steps, 4-hour support SLA | Perth suburb list, Perth FAQ, a large "further reading" hub of AUD-priced guides (Claude pricing, ServiceM8 vs simPRO vs AroFlo, IDP) |
| Word count (est.) | ~900 | ~3,100 | ~1,800 |

What this means for us:
1. **Exact-match local headings win the title and H1.** All three put "Perth" plus the service phrase in both. Our `/ai-implementation-perth` title ("AI Automation for Perth Businesses") is fine, but it doesn't cover "consultant" or "agency".
2. **Every competitor has an FAQ block and a free low-friction CTA.** Ours is the free 20-minute call. Keep it the primary CTA.
3. **Visible price anchors.** Sandlabs shows A$2,999 for an audit, and our A$750 audit is a clear advantage if it is stated on the Perth page.
4. **Topical depth.** Sandlabs supports its Perth page with many AU-specific guides. Our two new guides (WA small business, HubSpot Xero) do the same job once they are indexed and linked.
5. Agentrix and Sandlabs both claim a Perth base. We can't. Compete on "Perth hours (AWST), remote, fixed price, A$750 audit", never on location.

## 6. Prioritised actions for the next 30 days

Engineers are editing page files, so these are recommendations for whoever owns each file. Nothing here has been changed in code.

1. **Indexing, 21–23 Nov (GSC, founder).** Request indexing for `/solutions/crm-automation`, `/solutions/business-process-automation`, `/how-it-works`, `/blog/hubspot-xero-integration-guide` and `/blog/ai-for-wa-small-businesses` (about 5 per day within quota). Then open the 9 "Crawled, currently not indexed" and 4 "noindex" lists and confirm that no new commercial URL is in them. Recheck the Pages report on 27 Nov.
2. **`/ai-implementation-perth`: widen the title and add sections.**
   - Title: `AI Automation & AI Consulting for Perth SMEs | bajwaa.dev` (57 characters)
   - Meta: `Remote AI automation and consulting for Perth and WA small businesses on AWST hours. Fixed-price A$750 audit, builds from A$3,500. No Perth office.` (≤155)
   - Add H2s: "AI consulting for Perth and WA businesses, on Perth time"; "What Perth teams automate first" (quote-to-invoice, job scheduling, lead intake); "Pricing in AUD: A$750 audit, builds from A$3,500"; "Perth AI automation FAQs" (5–6 Q&As: remote delivery, timezone, which tools, cost, grants, what happens after handover).
   - Link to `/blog/ai-for-wa-small-businesses` and out to SBDC and AI Adopt. Target 1,200+ words of real content.
3. **`/ai-operations-audit`: put the keyword in the H1 and add a comparison block.**
   - H1: "AI operations audit: know where AI will help before you pay for a build" (keeps the current line).
   - Add H2 "How the A$750 audit compares", a small table covering free quiz / free workflow call (13Labs, Agentrix style), DIY template, our A$750 audit and a typical consultant audit (A$2,000–A$3,000, as observed on Sandlabs and in Clutch packages). Present it as a range; don't name competitors on the page.
   - Add H2 "Is this an AI readiness assessment?" to cover that query.
4. **Shorten the two new guide titles** (both are well over 60 characters and will be truncated):
   - `/blog/hubspot-xero-integration-guide`: `HubSpot Xero Integration Guide for AU Businesses | bajwaa.dev` (60)
   - `/blog/ai-for-wa-small-businesses`: `AI for Perth & WA Small Businesses: Help & Grants | bajwaa.dev` (61)
   - Keep the long versions as the H1s.
5. **Link the guides to the money pages with descriptive anchors.**
   - The HubSpot Xero guide currently links once to the Perth page. Add in-body links to `/solutions/crm-automation` (anchor "HubSpot and CRM automation") and `/ai-operations-audit` ("A$750 AI operations audit").
   - From `/solutions/crm-automation`, add an H2 "HubSpot and Xero integration" with a summary and a link to the guide. This captures "hubspot xero integration", where the observed SERP had almost no agency content.
6. **Point the legacy pages that still earn impressions at the new pages.** `/blog/how-to-use-gpt4o-in-make-com-guide` (230 impr.), `/blog/clay-vs-apollo-vs-linkedin-sales-nav-ai-outreach` (180) and `/tools` (84) are indexed and are the site's only real impression sources. Add a contextual in-body paragraph to each, not just nav or footer links. For example: "Need this built inside your HubSpot? See [CRM automation](/solutions/crm-automation)." and "Want help choosing? Start with an [AI operations audit](/ai-operations-audit)."
7. **Refresh `/blog/n8n-vs-make-vs-zapier-ai-automation-2025` to 2026 and AU** (keyword-map gap #3).
   - Title: `n8n vs Make vs Zapier for Australian SMEs (2026) | bajwaa.dev` (61). Update the slug only with a 301.
   - Add AUD pricing, AU data residency and Xero/MYOB connector depth, and link to `/solutions/business-process-automation`.
   - The 2025 framing is stale against competitor guides with 2026 AUD pricing.
8. **`/solutions/business-process-automation`: add H2s that carry the query variants:** "Workflow automation for Australian small businesses", "Xero and MYOB automation" and "Business process automation FAQs". Add an FAQ section (every competitor page reviewed has one).
9. **Clean up `/work`.** `/work/small-business-sales-os` (a $59 Notion template) is indexed under the same `/work` path as the client case studies. Either move it under `/tools` or `/templates` with a 301, or clearly label it as a product. Give each case study a system-pair title as in keyword-map §3, for example `HubSpot to Xero Quote-to-Invoice Automation | bajwaa.dev`. Add 2–3 case-study cards to `/ai-implementation-perth` and `/ai-operations-audit` as proof; this is the proof gap compared with Agentrix and Sandlabs.
10. **Earn the first relevant links to the Perth and audit pages** (see the off-page list below). Within 30 days, aim for LinkedIn company page → `/`; Clutch profile → `/`; Make partner or community profile → `/ai-implementation`; one Startup News WA piece → `/blog/ai-for-wa-small-businesses` or `/ai-implementation-perth`.

**Re-run this rank check on about 4 Dec and again on 18 Dec,** from an Australian IP or through a DataForSEO AU SERP call. Don't run it from this machine's network again: it triggered Google's block on the first request.

## 7. Off-page items from `offpage-plan.md` to do first

In this order, all in weeks 1–2:
1. **#1 Canonical identity** (one brand name, one founder spelling, one LinkedIn, one GitHub). `/about` currently says "Shahzeb Bajwa", while the GSC account name and some URLs use "Shahzaib". Freeze this first.
2. **#2 Site link fix plus `sameAs` JSON-LD.** This is a dev task for after the current page edits land.
3. **#3 LinkedIn company page** and **#4 founder LinkedIn alignment.**
4. **#13 AI-visibility baseline.** Record it before any listings go live, so later gains can be attributed.
5. **#8 Clutch free profile** (location = the genuine base, Australia-wide categories).
6. **#12 SourceBottle** alerts (fastest route to AU media links).
7. **#24 Startup News WA pitch**, using `/blog/ai-for-wa-small-businesses` as the supporting asset.
8. **#27 Start building the 30-firm WA bookkeeper/accountant partner list** (by hand, Spam Act compliant). This is the highest-value local link and referral source.
9. **#14 National AI Centre AI Directory.** Registrations are paused, so check weekly.
