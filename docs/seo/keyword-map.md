# bajwaa.dev keyword map (Australia and Perth)

Prepared 20 November 2026.

## 1. Data sources and baseline

| Source | Status | Notes |
| --- | --- | --- |
| AgentGrown `seo_checkin` / `gsc_query` | **Not available** | The AgentGrown account holds only one other site. `bajwaa.dev` returned "No site on this account". No Search Console baseline was pulled. |
| AgentGrown `keyword_volume` / `keyword_ideas` | **Not used** | These tools return **US/English** Google Ads data only and must be billed against a site on the account. That site is not bajwaa.dev, and US volumes would mislead an Australian map. |
| treg (DataForSEO Google Ads volume, `location_code` 2036 = Australia, US$0.09 per batch) | **Failed, no charge** | The treg MCP key and the CLI login are both expired ("not signed in, or this token is invalid or expired"). |
| WebSearch / WebFetch | Used | Qualitative SERP and competitor review on 19–20 November 2026. WebSearch runs from a **US index**, so results approximate google.com.au but don't match it exactly. |
| Repository | Used | `src/app/**/page.tsx`, `src/lib/page-metadata.ts`, `docs/seo/australia-release-audit.md` |

**GSC baseline (last 90 days): not available.** bajwaa.dev is either not verified in Search Console or not connected to AgentGrown. The release audit already lists "verify ownership in Search Console, export the Australian search baseline" as a pending step.

**No search volumes, keyword difficulty or CPC figures appear in this document, because none were retrieved.** Every "competition" value below is a qualitative SERP observation: who ranks and how commercial the results are. It is not a tool score. Before treating the priorities as final, re-run the table through an Australian volume source; section 6 has the exact steps.

Legend for SERP competition (observed):
- **High**: page one is national agencies, big directories (Clutch, DesignRush, Semrush Agencies), government AI directory listings and self-published "best of" guides.
- **Medium**: a mix of agency pages and listicles, with some thin or new pages ranking.
- **Low/unclear**: SERP is dominated by vendor docs or app-store listings, or I didn't test it.

## 2. Keyword table

Volume and CPC are "n/a" across the table because no Australian volume source was reachable.

| Keyword | AU volume | Difficulty / competition | CPC | Intent | Target page | Evidence source |
| --- | --- | --- | --- | --- | --- | --- |
| ai implementation australia | n/a | High (observed): gov AI directory listings, Clutch AU, First Focus, RSM | n/a | Commercial | / | WebSearch "AI implementation services Australia small business", 19 Nov 2026 |
| ai implementation services | n/a | High (observed) | n/a | Commercial | /ai-implementation | Same SERP |
| ai implementation consultant / partner | n/a | Medium (inferred): First Focus has a "how to choose AI implementation partners for SMBs" article | n/a | Commercial | /ai-implementation | Same SERP (firstfocus.com.au, 28 Aug 2026) |
| ai integration services | n/a | Medium (FUZN, AI4SMB per release audit) | n/a | Commercial | /ai-implementation | docs/seo/australia-release-audit.md |
| ai agency australia | n/a | High (inferred): directory-heavy | n/a | Commercial/navigational | / | Directory pattern in the SERPs above |
| ai automation agency australia | n/a | High (observed): Dotsquares press page, multi-city n8n agencies | n/a | Commercial | / | WebSearch "AI automation agency Perth small business" |
| ai for small business australia | n/a | Medium-high (observed): gov AI directory, Deloitte, RSM, business.gov.au events | n/a | Informational to commercial | / (+ blog hub) | WebSearch, 19 Nov 2026 |
| ai automation perth | n/a | High (observed): 13labs Perth city pages, Cipher Projects Perth guide, Agentrix, Dilate, Orbilon | n/a | Commercial, local | /ai-implementation-perth | WebSearch + WebFetch of cipherprojects.com Perth guide |
| ai agency perth | n/a | High (observed): Semrush Agencies Perth list, DesignRush, Clutch | n/a | Commercial, local | /ai-implementation-perth | WebSearch |
| ai consultant perth / ai consulting perth | n/a | Medium-high (observed): Lilach Bullock, Sandlabs "ai-consulting-perth", wa-i, Forge & Lever | n/a | Commercial, local | /ai-implementation-perth | WebSearch "AI consultant Perth" |
| ai for small business perth | n/a | Medium (observed): SBDC "Level Up: AI for Small Business", ai.gov.au WA SME clinic, Eventbrite workshops | n/a | Informational | New article (gap #2) linking to /ai-implementation-perth | WebSearch |
| automation consultant perth | n/a | Medium (inferred) | n/a | Commercial, local | /ai-implementation-perth | Cipher Perth guide (11 providers) |
| business process automation australia | n/a | Not tested | n/a | Commercial | /solutions/business-process-automation | Release audit query group |
| workflow automation small business | n/a | Not tested | n/a | Informational/commercial | /solutions/business-process-automation | Seed |
| ai workflow automation | n/a | Not tested | n/a | Commercial | /solutions/business-process-automation | Seed |
| automate admin tasks | n/a | Not tested | n/a | Problem-aware | /solutions/business-process-automation (+ blog) | Seed |
| crm automation | n/a | Not tested (likely high: dominated by CRM vendors) | n/a | Mixed | /solutions/crm-automation | Seed |
| hubspot automation | n/a | Not tested (likely HubSpot's own docs) | n/a | Informational | /solutions/crm-automation | Seed |
| hubspot consultant perth | n/a | Not tested | n/a | Commercial, local | /solutions/crm-automation (Perth section) | Seed |
| hubspot xero integration | n/a | Low for agencies (observed): SERP is Xero App Store, HubSpot KB, Zapier, one agency (MO Agency); native "Data sync by HubSpot" rated 2.14/5 on Xero AU app store | n/a | Problem-aware/commercial | New page (gap #1) | WebSearch "HubSpot Xero integration automation consultant Australia" |
| xero automation | n/a | Not tested | n/a | Mixed | /solutions/business-process-automation then gap #1 | Seed |
| myob automation | n/a | Not tested | n/a | Mixed | /solutions/business-process-automation | Seed |
| ai audit | n/a | Not tested (ambiguous: also matches "auditing AI models") | n/a | Mixed | /ai-operations-audit | Seed |
| ai readiness assessment | n/a | Medium (observed): Sandlabs free assessment, The Missing Link, Kyocera, Team 400, ScoreApp/Jotform quizzes, Clutch package at $2,000 | n/a | Commercial | /ai-operations-audit | WebSearch "AI readiness assessment small business Australia cost" |
| ai opportunity assessment | n/a | Not tested | n/a | Commercial | /ai-operations-audit | Seed |
| ai implementation cost | n/a | Not tested | n/a | Commercial investigation | /blog/ai-implementation-cost-australia | Seed + existing post |
| n8n agency australia / n8n consultant | n/a | High (observed): Osher, 13Labs, Tecala, Spruik, Goodspeed "3 best n8n agencies in Australia", Upwork/Fiverr | n/a | Commercial | Gap #3 article, not a service page | WebSearch "n8n automation agency Australia" |
| make.com expert australia | n/a | Not tested | n/a | Commercial | Gap #3 | Seed |
| zapier expert australia | n/a | Not tested | n/a | Commercial | Gap #3 | Seed |
| ai grants australia / small business ai grant wa | n/a | Medium (observed): business.gov.au AI Adopt, SA AI Capability Pilot, WA Innovation Booster, WA Local Capability Fund | n/a | Informational | Gap #2 | WebSearch "AI adoption grant small business Western Australia 2026" |
| servicem8 / simpro xero integration | n/a | Not tested | n/a | Problem-aware | Gap #5 | Seed (job-management tools) |

## 3. Page-level targeting

The character counts include " | bajwaa.dev" (13 characters). If the root layout already appends the suffix through a title template, put only the part before the pipe in `pageMetadata()`. All copy uses Australian English, makes no office claim and offers no guarantee.

### / (home)
- **Primary:** ai implementation australia. **Secondary:** ai automation agency australia, ai for small business australia
- **Title (57):** `AI Implementation Agency for Australian SMEs | bajwaa.dev`
- **Meta:** `Done-for-you AI implementation for Australian businesses with 5–50 staff. We cut repetitive admin and connect HubSpot, Xero and MYOB. Remote delivery.`
- **H1:** "AI implementation for Australian small businesses: less busywork, same tools." The current H1, "Your business, without the busywork.", has no keyword in it. Keep it as the visual line and add the keyword phrase as the H1 text, or as an eyebrow inside the H1.

### /ai-implementation
- **Primary:** ai implementation services. **Secondary:** ai integration services, ai implementation consultant
- **Title (53):** `AI Implementation & Integration Services | bajwaa.dev`
- **Meta:** `AI implementation from A$3,500: we scope, build and test automations inside the software you already own, then hand over the accounts and documentation.`
- **H1:** "AI implementation and integration services for Australian teams"

### /ai-operations-audit
- **Primary:** ai readiness assessment. **Secondary:** ai audit, ai opportunity assessment
- **Title (51):** `AI Readiness & Operations Audit, A$750 | bajwaa.dev`
- **Meta:** `A fixed-price A$750 AI operations audit. We map your recurring admin, rank the automation opportunities and deliver a written plan with costed next steps.`
- **H1:** "AI operations audit: a practical AI readiness assessment for small businesses"
- Note: the SERP shows a free quiz, a A$395 DIY playbook and a ~$2,000 consultant package. A short "how this compares" block covering free quiz, DIY template and this audit would match the intent.

### /how-it-works
- **Primary:** ai implementation process. **Secondary:** ai implementation plan
- **Title (54):** `How AI Implementation Works, Step by Step | bajwaa.dev`
- **Meta:** `From a free 20-minute call to a A$750 audit, a scoped build from A$3,500 and optional managed support from A$490/month. See each step and what you get.`
- **H1:** "How our AI implementation process works" (the current H1, "A clear path from bottleneck to build.", has no keyword)

### /work
- **Primary:** ai automation case studies. **Secondary:** ai automation examples small business
- **Title (50):** `AI Automation Case Studies & Examples | bajwaa.dev`
- **Meta:** `Real AI implementation and automation projects: the problem, the systems connected, what changed for the team, and what we would do differently.`
- **H1:** "AI automation case studies" (current: "See what we build.")
- For each /work/<case-study>, put the system pair and the job in the title, for example "HubSpot to Xero quote-to-invoice automation". Target ≤47 characters before the suffix.

### /about
- **Primary:** brand ("bajwaa.dev"). **Secondary:** remote ai implementation
- **Title (52):** `About Our Remote AI Implementation Work | bajwaa.dev`
- **Meta:** `Who builds your automations, how we work remotely with Australian teams, and the tools we know well: HubSpot, Xero, MYOB, forms and shared inboxes.`
- **H1:** "About bajwaa.dev"

### /contact
- **Primary:** ai discovery call. **Secondary:** brand
- **Title (52):** `Book a Free 20-Minute AI Discovery Call | bajwaa.dev`
- **Meta:** keep the current description (already ≤155 and on-intent).
- **H1:** keep "Bring us one recurring task."

### /ai-implementation-perth
- **Primary:** ai automation perth. **Secondary:** ai consultant perth, ai agency perth, automation consultant perth, ai for small business perth
- **Title (53):** `AI Automation & Implementation for Perth | bajwaa.dev`
- **Meta:** `Remote AI implementation for Perth and WA businesses on AWST. We automate admin and connect HubSpot, Xero and MYOB. No Perth office, no travel fee.`
- **H1:** "AI automation for Perth businesses, delivered remotely on Perth time"
- Keep the honest "no Perth office" line. One listed competitor, IOTAI, says the same on its Perth page, so it reads as normal.

### /solutions/crm-automation
- **Primary:** crm automation. **Secondary:** hubspot automation, hubspot consultant perth, reduce manual crm updates
- **Title (53):** `CRM Automation for HubSpot & Small Teams | bajwaa.dev`
- **Meta:** `Stop retyping leads and deal updates. We automate HubSpot and other CRMs: capture, de-duplication, owner assignment, follow-ups and Xero handoffs.`
- **H1:** "CRM automation for small teams using HubSpot and similar CRMs"

### /solutions/business-process-automation
- **Primary:** business process automation australia. **Secondary:** workflow automation small business, ai workflow automation, automate admin tasks, xero automation, myob automation
- **Title (52):** `Business Process Automation for AU SMEs | bajwaa.dev`
- **Meta:** `Automate the admin your team repeats every week: forms, inboxes, quotes, invoices and job updates across Xero, MYOB and your job-management software.`
- **H1:** "Business process automation for Australian small businesses"

### /blog
- **Title (57):** `AI Implementation Guides for Australian SMEs | bajwaa.dev`
- **H1:** keep "AI implementation guides."

### Existing posts
| Post | Primary keyword | Title (with suffix) |
| --- | --- | --- |
| ai-implementation-cost-australia | ai implementation cost australia | `AI Implementation Cost in Australia (2026) \| bajwaa.dev` (55) |
| reduce-manual-crm-updates | reduce manual crm data entry | `How to Reduce Manual CRM Updates \| bajwaa.dev` (45) |
| business-process-automation-vs-ai-agents | business process automation vs ai agents | `Process Automation vs AI Agents: Which Fits? \| bajwaa.dev` (57) |
| ai-operations-audit-checklist-australia | ai audit checklist | `AI Audit Checklist for Australian Businesses \| bajwaa.dev` (57) |
| how-to-audit-your-workflow-for-ai-automation | how to audit a workflow for automation | `How to Audit a Workflow for AI Automation \| bajwaa.dev` (54) |

## 4. Content gaps (ranked by demand × fit)

Demand is judged from SERP signals, not measured volume. Re-rank once you have AU volumes.

**1. HubSpot + Xero integration for Australian businesses**: a solutions page or long guide. Target: *hubspot xero integration*. Also targets *xero automation* and *hubspot consultant perth*.
- Why: the observed SERP is app listings and docs with almost no agency content. The native "Data sync by HubSpot" has a 2.14/5 rating on the Xero AU App Store, and a reviewer reports that HubSpot-to-Xero invoice sync isn't possible. Fit is very high, since this is the core service.
- Outline: the native options (Xero's HubSpot app, Data sync by HubSpot) and what each syncs; known gaps (invoice direction, tracking categories, GST, contact duplicates); when Zapier or Make is enough and when a custom build is needed; a worked quote → deal → invoice → paid flow; a testing checklist; costs (link to the cost post) and a CTA to the A$750 audit.

**2. AI for WA small businesses: grants, free programs and when to hire help.** Target: *ai for small business perth* plus *ai grants western australia*.
- Why: the Perth SERP holds SBDC "Level Up: AI for Small Business", the ai.gov.au WA SME workflow clinic, Eventbrite workshops and the federal AI Adopt centres. No agency page ties these together honestly. This is the strongest local-relevance asset you can publish without a Perth office.
- Outline: free and low-cost WA options (SBDC series, AI Adopt centres, workshops); WA and federal grants with eligibility (Innovation Booster, Local Capability Fund digital round, AI Adopt) and a "check current rounds" caveat; DIY vs workshop vs done-for-you; three WA workflow examples such as quote-to-invoice, job scheduling and lead intake; a link to /ai-implementation-perth.

**3. n8n vs Make vs Zapier for Australian small businesses.** Target: *n8n vs make vs zapier*. Also targets *n8n agency australia*, *make.com expert australia* and *zapier expert australia*.
- Why: the "n8n agency australia" SERP is crowded with n8n specialists (Osher, 13Labs, Tecala, Spruik). A tool-neutral comparison reaches the same buyers without competing head-on. Fit is high because you are tool-agnostic.
- Outline: pricing in AUD at 5–50 staff scale; data residency (self-hosted n8n on AU infrastructure vs cloud); Xero, MYOB and HubSpot connector depth; maintenance burden; when to switch; how managed support (A$490/month) covers each.

**4. AI readiness assessment: free quiz vs DIY template vs paid audit.** Target: *ai readiness assessment small business*.
- Why: the SERP mixes free quizzes (Sandlabs, ScoreApp, Jotform), DIY playbooks (~A$199–A$395) and consultant packages (~$2,000 on Clutch). Prices are unverified. A comparison article feeds directly into the A$750 audit.
- Outline: what each option produces; a sample audit output; questions to ask any assessor; a red-flag list; a link to the audit checklist post and /ai-operations-audit.

**5. Connect your job-management software to Xero and your CRM (ServiceM8, simPRO, Tradify).** Target: *servicem8 xero integration* / *simpro hubspot integration*.
- Why: demand is untested, but fit is strong for trades and field services, which are common in WA. 13labs builds Perth × industry pages for builders, accountants and others, which shows that vertical-intent pages compete there. Write one substantive guide rather than thin city × industry doorway pages.
- Outline: common double-entry points (job → invoice → CRM); what native integrations cover; three automation patterns; exception handling and human approval; cost range; a case study link once /work pages are live.

## 5. Perth-specific findings

- **The SERP is crowded with Perth-claiming providers.** Cipher Projects' "Best AI Business Automation Companies in Perth (2026)" lists 11 providers. AI Applied, Azoria, C4Site, Source Digital ("100% Perth-based"), Agentrix, Third Vision and Vertical AI all claim Perth. Spruik and Mindiam are multi-city. IOTAI and Sandlabs deliver remotely, and IOTAI states "no Perth office".
- **Price anchors are visible.** C4Site lists Core A$750, Workflow Starter A$1,500, Workflow Pro A$3,500 and Custom AI A$5,000+, which mirrors your A$750 / A$3,500 ladder almost exactly. Source Digital quotes A$3k–A$25k fixed price. Mindiam's Perth page quotes A$2,500+GST per automation. Spruik runs a free audit, then A$1,500 and A$3,500 a month. All figures are as reported by the Cipher page and unverified. **Differentiate on scope and deliverables, not price.**
- **Directories and listicles hold many Perth positions:** Cipher Projects, Clutch, DesignRush, Semrush Agencies Perth and the government AI directory (aidirectory.industry.gov.au, which lists wa-i). A free listing on the gov AI directory and Clutch, and an inclusion request to Cipher's Perth guide, are cheaper wins than out-ranking them.
- **13labs runs programmatic Perth pages** (/perth/automation/builders, /accountants, /recruitment-agencies and so on). Don't copy this with thin pages. One Perth page plus a WA-focused guide (gap #2) and Perth-relevant case studies is the honest approach.
- **The public sector owns the "AI for small business Perth" informational space** (SBDC Level Up series, ai.gov.au WA SME clinic, AI Adopt). Link out to these; they build trust and match intent.
- **Named competitors:** I couldn't find Fantom Labs, Core Nova, Cognition Co or DotVA in these Perth SERPs with one combined query. They may rank on google.com.au but not in the US-index results available here. AI4SMB appears in the earlier release audit for integration intent. I didn't verify any of them further.

## 6. To complete this map

1. Add bajwaa.dev as a site in AgentGrown, after verifying it in Search Console. Then run `seo_checkin` and `gsc_query` (90 days: query, page, and country through `gsc_live`).
2. Re-authorise treg (`treg update`, then `treg mcp install --oauth`, then `/mcp` → Authenticate). Then run one DataForSEO Google Ads search-volume batch with `location_code: 2036` (Australia) for every keyword in section 2. That costs about US$0.09 per batch of up to 1,000 keywords. Optionally run a second batch with a Perth location code.
3. Fill the volume and CPC columns, then re-rank section 4.
