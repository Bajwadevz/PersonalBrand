# Off-page SEO and Australian/Perth visibility plan — bajwaa.dev

Prepared 20 November 2026. Owner for every action is the founder (Shahzeb Bajwa) unless stated otherwise. Nothing in this plan has been submitted, registered or sent. Every listing, account and outreach message below is for the founder to do personally.

## Ground rules this plan is built on

- **Remote-only and truthful.** bajwaa.dev has no Perth office. Perth/WA is a relationship and content focus, not a claimed location. Every profile shows the city or region where the business is genuinely run and says "remote delivery across Australia" (AWST hours). No street address, no virtual office, no LocalBusiness schema.
- **No Google Business Profile.** Google's rules say a business needs either a location customers visit or to travel to customers. Virtual offices aren't eligible ([Google guidelines](https://support.google.com/business/answer/3038177), [service businesses](https://support.google.com/business/answer/10514743)). A remote-delivery agency fails both tests.
- **ABN status is unverified.** Rows marked **ABN?** probably need an ABN, or at least an Australian registered entity, to join, verify or invoice. Confirm the entity on the [ABN Lookup](https://abr.business.gov.au/) before starting those rows. If there is no ABN, skip them and do the rows that don't need one.
- **Is the founder physically in Perth?** In-person rows (meetups, Spacecubed, CCIWA events) only make sense if he is in Perth or visits. If he isn't, use only the online alternatives listed next to them.

## Known inconsistencies to fix first (found in this repo)

The site links to two different LinkedIn profiles and two different GitHub accounts:

| File | Links to |
| --- | --- |
| `src/components/FloatingSocialBar.tsx` | github.com/Bajwadevz, linkedin.com/in/shahzeb-bajwa, upwork.com/freelancers/bajwaadev |
| `src/components/ui/magnetic-dock.tsx` | github.com/shahzo, linkedin.com/in/shahzaibahmad |

The site also has no `sameAs` in its Organization/Person JSON-LD. Entity consolidation, for Google and for AI answer engines, depends on one canonical profile per platform, linked both ways. Pick one profile on each platform, update both components and add `sameAs`. That change is in the site code, so it's out of scope for this file.

---

## Weeks 1–2: Foundations (entity, owned profiles, zero-cost listings)

| # | Action | URL | Cost | Requirement | Expected value | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Decide canonical identity: one brand name ("Bajwa" / bajwaa.dev — pick and freeze), one founder name spelling (Shahzeb vs Shahzaib appears in URLs), one LinkedIn, one GitHub. Write a 50-word and 150-word boilerplate used verbatim everywhere. | — | Free | None | High. Every later citation reinforces one entity instead of splitting it. | Founder |
| 2 | Fix site links plus `sameAs` JSON-LD (Organization + Person) pointing to the canonical LinkedIn, LinkedIn company page, GitHub, YouTube, Upwork and Crunchbase. No address and no `areaServed` street data; `areaServed: Australia` is fine. | repo | Free | Dev change | High for AI search and knowledge panels. | Founder |
| 3 | Create a LinkedIn company page "bajwaa.dev" (or the frozen brand name). Location: the real base city, or leave it as Australia. Tagline: "Remote AI implementation for Australian small businesses (5–50 staff)". Link the founder's experience entry to it. | https://www.linkedin.com/company/setup/new/ | Free | A personal LinkedIn profile | High. LinkedIn is heavily cited by ChatGPT, Perplexity and Gemini for "who is" queries. | Founder |
| 4 | Align the founder's LinkedIn headline, About and Featured with the site: same offer ladder (free discovery call → A$750 AI Operations Audit → implementation from A$3,500 → support from A$490/month), same tool stack (HubSpot, Make, n8n, Clay, Salesforce), same "remote, AWST hours" wording. Feature the /ai-operations-audit page and one case write-up. | linkedin.com/in/(canonical) | Free | — | High. This is the profile that converts Perth relationship traffic. | Founder |
| 5 | Upwork alignment: same headline and offer framing as the site, a portfolio linking to bajwaa.dev case pages, and **location exactly as Upwork has verified it** (never edited to "Perth" if that's not where he is). Mirror the audit as a fixed-price Project Catalog item only if the price and scope match the site's A$750. | https://www.upwork.com/freelancers/bajwaadev | Free (Upwork fees on work) | Identity verification by Upwork | Medium. Consistency signal plus a reviews source you can quote honestly on site, with attribution. | Founder |
| 6 | GitHub: on the canonical account, add a profile README with the same boilerplate plus 2–3 public, sanitised automation templates (n8n workflow JSON, Make blueprint notes, a HubSpot→Xero mapping example). Archive or redirect the duplicate account. | https://github.com/Bajwadevz (or chosen) | Free | — | Medium. Technical proof of work; GitHub is crawled and cited for "n8n template" style queries. | Founder |
| 7 | Crunchbase organisation profile: logo, founded date, website, socials, description, HQ = real city/region, 3–5 industries. Check for duplicates first. | https://support.crunchbase.com/hc/en-us/articles/115011823988 | Free | Social-authenticated Crunchbase account | Low–medium. Entity corroboration; hard to delete later, so get it right first time. | Founder |
| 8 | Clutch free profile, categories: AI consulting / AI deployment / business process automation, Australia. Location field = genuine base, never a Perth address. Skip paid "Clutch Verified" (about US$499/yr, CreditSafe check) until there are 3+ real client reviews. | https://help.clutch.co/en/knowledge/get-listed-on-clutch | Free (Verified ≈ US$499/yr) | Website and business details. **ABN?** for verification credit check | Medium. Clutch AU category pages rank for "AI companies Australia"; [Clutch AU AI deployment](https://clutch.co/au/consulting/ai/deployment). | Founder |
| 9 | GoodFirms free profile (selective: ~23% acceptance by its own claim). | https://www.goodfirms.co/vendors | Free (PRO US$49/mo, not recommended) | Review/verification by GoodFirms | Medium. Its [Perth AI page](https://www.goodfirms.co/directory/city/artificial-intelligence/perth) appeared in results for "ai automation agency perth", but listing there depends on a Perth location, which we won't fake. Target the Australia-wide categories. | Founder |
| 10 | DesignRush free profile (editorial review of site, portfolio and reputation). Do not buy sponsorship (from US$2,000/mo). | https://www.designrush.com/add-listing | Free | Portfolio and reviews help acceptance | Medium. [DesignRush Perth AI rankings](https://www.designrush.com/agency/ai-companies/au/perth) appeared on page 1. Same location caveat as GoodFirms. | Founder |
| 11 | TechBehemoths free profile (up to 5 services on the free tier). | https://techbehemoths.com | Free | — | Low. A citation and a review surface. | Founder |
| 12 | SourceBottle free expert profile plus daily call-out alerts (AU journalist requests). | https://www.sourcebottle.com/ | Free (paid "pitch" plan optional) | Email | Medium–high. Fastest route to AU media mentions and links from SME publications. | Founder |
| 13 | Set up AI-visibility tracking (prompts below) with a monthly manual check, or the AgentGrown `ai_visibility` prompts tool already connected to this workspace. Record a baseline before any listings go live. | — | Free / existing tool | Search Console verified (see the [Insights plan](insights-rollout.md)) | High as measurement. Without a baseline, nothing below is attributable. | Founder |

**Directory SERP check (US-based search tool, AU results approximated, 19–20 Nov 2026).** "ai automation agency perth" surfaced Clutch profiles, DesignRush (profiles and Perth ranking page), GoodFirms, the National AI Centre's AI Directory (aidirectory.industry.gov.au), Cipher Projects' Perth comparison guide, and agency sites (Lakestone, Forge & Lever, WhatWill AI, Sand Labs, 13Labs). "ai implementation agency australia" was dominated by **aidirectory.industry.gov.au** org pages plus Clutch AU category pages. Confirm on a real google.com.au search from Australia; the tool used here is US-based.

## Weeks 3–6: Partner programs, WA ecosystem, first contributed content

| # | Action | URL | Cost | Requirement | Expected value | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| 14 | **National AI Centre AI Directory** (Dept of Industry). Highest-value AU listing for "AI implementation Australia" queries. **New registrations are paused** (checked 20 Nov 2026). Watch the page and the contact form; apply when it reopens. | https://aidirectory.industry.gov.au/ | Free | Likely an Australian business with an ABN (**ABN?**; not stated while paused) | Very high. A .gov.au profile ranking on page 1. | Founder |
| 15 | Make Solution Partner Program: complete Partner Training plus the required certifications, then apply. Listing is in Make's "Hire an expert" directory ("visibility on our website"). | https://www.make.com/solution-partners | Free | At least one automation expert, automation service experience, training | High. A relevant directory backlink and Make leads at Silver+. | Founder |
| 16 | Zapier Solution Partner Program (the rebranded Experts program). Only if Zapier is in the stack. | https://zapier.com/l/new-experts/info | Not stated | Active business website and an **own-domain email** (no Gmail) | Medium. Note: the site lists Make and n8n, not Zapier; only claim tools you deliver. | Founder |
| 17 | n8n Expert Partner: closed pilot. Join the waitlist only. Meanwhile publish n8n templates to the community and creator hub under the brand. | https://n8n.io/partners | Free | Selection | Medium (long-shot). Templates give an immediate profile link. | Founder |
| 18 | HubSpot Solutions Partner: **defer.** Since 15 Jul 2026 entry needs a Partner Program Membership of **US$400/month** (waived only at US$400+/mo of HubSpot spend), plus HSPPA and Partner Certification. Instead, earn the free HubSpot Academy certifications and list them on LinkedIn. Revisit when 3+ HubSpot clients exist. | https://www.hubspot.com/2026-entry-and-tiers-policy-for-hubspot-solutions-partners | US$400/mo | HSPPA, certification, **ABN?** for billing | Low ROI now. | Founder |
| 19 | Xero Advisor directory: **not eligible.** It needs Xero bronze partner status (accounting/bookkeeping practices with Xero clients) and Xero-certified staff. Use the partnership play (#27) instead. Optional: free Xero Advisor certification for credibility only. | https://www.xero.com/au/partner-programs/partners/ | Free certification | Being an accounting/bookkeeping practice | Indirect only. | Founder |
| 20 | MYOB: the Partner Program is for AU accounting/bookkeeping practices; the Developer Program costs A$200–500/mo and is for app builders. **Not eligible / not worth it.** Partner with MYOB-using bookkeepers instead. | https://www.myob.com/au/accountants-and-bookkeepers/partner-program | — | Practice status | None directly. | Founder |
| 21 | SBDC WA: subscribe to the newsletter; use its free advisory and events to learn what WA small businesses ask about AI; follow its [small business stories blog](https://www.smallbusiness.wa.gov.au/blog/small-business-stories) for local angles. It is a government agency, so don't pitch it for links; offer to speak only if it runs a call for presenters. | https://www.smallbusiness.wa.gov.au/ | Free | — | Medium relationship value, low link value. | Founder |
| 22 | WA AI meetups. **In person only if in Perth.** WA AI Integration Meetup ("Pilot Stories", 25 Nov 2026, The Platform); Perth AI Roundtable (monthly); Perth AI Innovators; Perth AI Builders micro-hackathon at Spacecubed (7 Dec). After 2–3 attendances, offer a 10-minute talk on a real (anonymised) SME automation. | https://www.meetup.com/wa-ai-hub/ , https://www.meetup.com/the-perth-ai-roundtable/ , https://www.meetup.com/perth-ai-innovators , https://www.spacecubed.com/events | Free–low | Physical presence | High relationship value; meetup pages and speaker bios link back. | Founder |
| 23 | Spacecubed (Riff / FLUX). Attend public events (Sales Workshop for small business owners 25 Nov; Christmas Sundowner). A day pass or membership only if in Perth regularly. Never use a Spacecubed address as the business address. | https://www.spacecubed.com/events | Free–paid (ask) | — | Medium relationship value. | Founder |
| 24 | Startup News (WA-focused). Pitch a 500–700-word original piece, e.g. "What a WA 20-person business actually automates first: 5 patterns from AI audits". At least two licensed images, disclosure at the end. No press releases. | https://startupnews.com.au/write-for-us/ | Free | Original, WA-relevant | High. A WA-local editorial link and a byline. | Founder |
| 25 | Dynamic Business contributor account: actionable, jargon-free piece ("Let's Talk" series takes expert commentary). Needs a **work email** and a 250px+ headshot. | https://dynamicbusiness.com/page/write-with-us-contribution-guidelines | Free | Work email; editors may edit headlines | High. National SME audience. | Founder |
| 26 | SmartCompany guest opinion: news-linked and exclusive. Pitch the news editor via the contribute page when an AI/SME news hook appears (e.g. a new government AI guidance release). | https://www.smartcompany.com.au/how-to-contribute-smartcompany/ | Free (unpaid) | Exclusive and original | High authority; hard to land. | Founder |

## Weeks 7–12: Partnerships, media momentum, proof assets

| # | Action | URL | Cost | Requirement | Expected value | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| 27 | **Referral partnerships with Perth/WA bookkeepers, accountants, MSPs and HubSpot/Xero consultants.** Angle: "You own the books/IT; I automate the admin around them (quote→invoice, CRM→Xero, intake). I hand clients back, never compete on your service." Offer: co-written client guide, joint webinar, referral fee only if disclosed to the client. Build a list of 30 by hand from public firm websites. Contact via **LinkedIn connection notes or one personal email per firm** to an address the firm publishes for business enquiries, relevant to their role, with the sender identified and an unsubscribe line. | — | Free | Spam Act compliance (below) | Very high. These partners hold the 5–50-staff WA client relationships, and a "Partners" page on their site is a genuine local link. | Founder |
| 28 | Joint content with 1–2 partners: e.g. "Month-end automation checklist for WA trades businesses", published on both sites with reciprocal attribution links (editorial, not "link swap" pages). | partner sites | Free | Partner agreement | High. Topical local links. | Founder |
| 29 | Podcasts: pitch The Perth Business Podcast and In The Trenches (Perth business owners) with a specific episode idea and a client story. Business News WA's At Close of Business is editor-driven, so pitch only with news. | https://creators.spotify.com/pod/show/perth-business-podcast | Free | — | Medium. Show-notes links plus audio entity mentions. | Founder |
| 30 | YouTube channel under the frozen brand: 6 screen-recorded walkthroughs, 5–8 min each (e.g. "HubSpot deal → Xero invoice with Make", "n8n email triage with human approval", "What's in an A$750 AI Operations Audit"). Embed each on the matching site page, and put the canonical URL in descriptions. | https://www.youtube.com | Free | Google account | High for AI-search and "how to" visibility; Gemini favours YouTube. | Founder |
| 31 | Business News WA: subscribers-only site, editorial opinion. Pitch a data-backed opinion once there are 5+ WA audits to aggregate (anonymised). | https://www.businessnews.com.au/ | Free to pitch (subscription to read) | Original data | High WA authority; low odds early. | Founder |
| 32 | CCIWA: membership pricing is quote-only; members get discounted events. Ask for a quote **only once an ABN is confirmed**. Join if 2+ events/quarter will actually be attended in Perth. | https://cciwa.com/membership-cciwa/ | Paid (quote) | **ABN?** Australian business | Medium. Relationship value; a member directory is not confirmed, so don't join for a link. | Founder |
| 33 | AIIA: open to "technology organisations in Australia"; pricing on request. Low priority for a solo agency; revisit in 2027. | https://aiia.com.au/ | Paid (quote) | **ABN?** | Low now. | Founder |
| 34 | WA Innovators of the Year 2027: the 2026 round closed in May/July 2026. Set a reminder for the 2027 window (expect around April) and enter only with a real client outcome. | https://wa.gov.au/IOTY | Free | WA-based business (**ABN?**, check 2027 guidelines) | High if shortlisted (.gov.au mention). | Founder |
| 35 | West Tech Fest (Curtin-hosted, December). Attend if in Perth; the 2026 dates weren't confirmed in search. | https://www.wa.gov.au/government/media-statements/Cook-Labor-Government/West-Tech-Fest-to-put-WA-on-the-global-stage-for-innovation--20251112 | Varies | — | Relationship value. | Founder |
| 36 | Collect first genuine reviews on Clutch, and Upwork where relevant, by asking every completed client once, with no incentive. Then reconsider Clutch Verified. | — | Free | Real clients | High trust; ACCC compliant. | Founder |
| 37 | Qwoted: free expert tier **unconfirmed** (conflicting sources). Check the pricing page; use it only if free. | https://www.qwoted.com/ | Unconfirmed | — | Medium (global plus AU journalists). | Founder |
| 38 | Day-90 review: compare the AI-visibility baseline with now, check referring domains in Search Console, and record what drove discovery calls. | — | Free | — | Decides next quarter. | Founder |

## Spam Act approach for partner outreach (row 27)

- Under the Spam Act 2003, consent can be inferred from a **conspicuously published** business email address only if the message relates directly to the recipient's business role and the address isn't published with a "no commercial messages" statement. The ACMA treats inferred consent as weaker than express consent, and **the sender must prove consent** ([ACMA: avoid sending spam](https://www.acma.gov.au/avoid-sending-spam)).
- Every message must identify the sender (name, business, ABN if one exists) and include a working unsubscribe that is honoured within 5 business days.
- No harvested or scraped lists, and no bought lists: using lists made with harvesting software is prohibited. Research each firm by hand, one personalised message per firm, no sequences beyond one polite follow-up.
- Prefer LinkedIn connection requests and in-person introductions; they avoid most of the inferred-consent risk.
- Log the source URL of each published address and the date sent, as evidence.

## AI-search prompts to track (ChatGPT, Perplexity, Gemini, Google AI Overviews), monthly

1. "AI implementation agency for small businesses in Australia"
2. "Who can help a Perth small business automate admin with AI?"
3. "AI automation consultant Perth WA remote"
4. "How much does AI implementation cost for an Australian small business?"
5. "AI operations audit Australia price"
6. "HubSpot and Xero automation consultant Australia"
7. "n8n / Make automation expert Australia"
8. "What is bajwaa.dev?" and "Who is Shahzeb Bajwa?" (entity checks: does it describe the business correctly, with no invented Perth office?)
9. "Best AI automation agencies in Perth" (are we cited, and from which sources: Clutch, LinkedIn, Startup News?)
10. "AI agency for 20-person trades/professional services business Australia"

For each prompt, record: mentioned (Y/N), cited URL, which third-party source was cited, and any factual errors (especially a wrong location).

## Wikidata: no, not now

Wikidata items need serious, publicly available independent references (or a structural need). A self-sourced company item for a new solo agency is a typical deletion candidate. Revisit only after 2+ independent editorial articles about the business, not by it, exist ([Wikidata:Items](https://www.wikidata.org/wiki/Wikidata:Items)). No Wikipedia article.

## Do not do

- Create a Google Business Profile, a virtual-office or co-working "address", or any listing with a Perth street address.
- Add `LocalBusiness` / `ProfessionalService` schema with an address or geo, or a "Perth office" anywhere on the site or in profiles.
- Set a directory or Upwork location to Perth unless the business is genuinely run from Perth.
- Buy links, sponsored-post "guest posts", PBN placements, link exchanges or "link insertion" offers; pay for DesignRush, GoodFirms or Clutch sponsored rank placements in year one.
- Mass-submit to low-quality directories, or use citation-building services or "500 directory" packages.
- Write, commission, swap or incentivise reviews, or publish testimonials selectively in a misleading way. Fake reviews breach the Australian Consumer Law ([ACCC guidance](https://www.accc.gov.au/business/advertising-and-promotions/online-reviews-for-product-and-services)). Any incentivised review must be disclosed, so better not to incentivise at all.
- Send cold email to harvested or purchased lists, or send automated sequences to people whose consent can't be shown under the Spam Act.
- Claim partner badges or tiers not held (HubSpot, Make, n8n, Xero, Zapier), or list tools not actually delivered.
- Create a self-sourced Wikidata item or a Wikipedia page.
- Run parallel profiles under different names (Shahzeb vs Shahzaib, two GitHubs, two LinkedIns) once the canonical one is chosen.
- Join paid memberships (CCIWA, AIIA, HubSpot partner) purely for a backlink.

## Sources checked (Nov 2026)

[Google Business Profile guidelines](https://support.google.com/business/answer/3038177) · [National AI Centre AI Directory](https://aidirectory.industry.gov.au/) · [HubSpot 2026 entry policy](https://www.hubspot.com/2026-entry-and-tiers-policy-for-hubspot-solutions-partners) · [Make Solution Partners](https://www.make.com/solution-partners) · [Zapier Solution Partner](https://zapier.com/l/new-experts/info) · [n8n partners](https://n8n.io/partners) · [Xero advisor directory tips](https://www.xero.com/partners/advisor-directory-tips/) · [MYOB partner program](https://www.myob.com/au/accountants-and-bookkeepers/partner-program) · [Clutch free listing](https://help.clutch.co/en/knowledge/free-features-clutch-offers) · [Clutch verification](https://help.clutch.co/en/knowledge/get-verified) · [GoodFirms vendors](https://www.goodfirms.co/vendors) · [DesignRush add listing](https://www.designrush.com/add-listing) · [TechBehemoths](https://techbehemoths.com/knowledge-base/editing-your-profile-services-technologies-and-description) · [SourceBottle](https://www.sourcebottle.com/) · [Startup News write for us](https://startupnews.com.au/write-for-us/) · [Dynamic Business guidelines](https://dynamicbusiness.com/page/write-with-us-contribution-guidelines) · [SmartCompany contribute](https://www.smartcompany.com.au/how-to-contribute-smartcompany/) · [CCIWA membership](https://cciwa.com/membership-cciwa/) · [AIIA](https://aiia.com.au/) · [WA Innovators of the Year](https://wa.gov.au/IOTY) · [Spacecubed events](https://www.spacecubed.com/events) · [ACMA spam](https://www.acma.gov.au/avoid-sending-spam) · [ACCC online reviews](https://www.accc.gov.au/business/advertising-and-promotions/online-reviews-for-product-and-services) · [Crunchbase profile help](https://support.crunchbase.com/hc/en-us/articles/115011823988) · [Wikidata:Items](https://www.wikidata.org/wiki/Wikidata:Items)

Unverified or quote-only items: Qwoted free tier, CCIWA and AIIA pricing, Sortlist free tier (third-party data only, so excluded), the Inside Small Business contributor process (not found; excluded), the Perth HubSpot User Group (none found), West Tech Fest 2026 dates, and the Spacecubed membership price.
