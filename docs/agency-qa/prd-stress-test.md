# Brand redesign PRD review

The live bajwaa.dev homepage, the first agency rebuild, the previous grid implementation and the Agentsy reference were reviewed at desktop and mobile widths. The brand kit supplied exact palette values. Ocean Blue (`#2D6A8F`) and the original sans-serif type, glass navigation and perspective grid carry the old site’s identity. Blueprint Pro navy (`#0E2A47`) and cyan (`#3FD0FF`) are used in the process and walkthrough sections. Dark mode starts from Midnight Machine ink (`#0B0F1A`). The reference informed the scale of the hero, the immersive grid section and the timing of a short handoff animation.

| PRD area | Result | Evidence or remaining gate |
| --- | --- | --- |
| A, D, F · Positioning and commercial journey | Implemented | Australia-first implementation, one discovery action, A$750 audit with bounded deliverables, A$3,500 starting build and optional support from A$490 per month. Founder confirmation of pricing, invoice issuer and tax treatment remains required. |
| F, G · Layout and narrative | Implemented | Hero, problem, capabilities, boxed process, ownership, FAQ and discovery close. Brand-driven light and dark styling extends to the service pages, form and policies. |
| I2, L2 · Lead intake | Local checks passed | Synthetic tests cover provider receipt, retry, validation, duplicates and throttling. Native success uses a short-lived receipt and JavaScript success requires a successful response. Real Formspree-to-inbox delivery, CRM setup and a dedicated calendar require account access or approval. Email scheduling is the current path. |
| I4, L4 · Workflow proof | Implemented | The recorded lead-response walkthrough replaces the interactive sandbox at the founder’s request. The Work page includes the internal Sales OS case study and labelled illustrative scenarios. |
| H, L3 · SEO migration | Local checks passed | All 55 sitemap URLs return 200, five permanent redirects resolve, and the social image renders. The Perth page describes remote delivery. Search Console, keyword measurements, GA4 verification and field performance remain pending. |
| E, I3, J · Operations | Prepared | Manual invoice workflow, staging checks, CRM reconciliation and reporting templates are documented. Production conversion and commercial outcomes require live evidence. |
| K4 · Production release | Awaiting approval | Review pricing, claims and policies, then confirm staging delivery and publisher access. See the [launch handoff](launch.md). |

The browser review also caught a root loading boundary that hid page content when JavaScript was disabled. Removing that boundary lets the browser display the server-rendered content and access the native enquiry form. Dark-mode text colours are explicitly applied to the navigation and footer links.

## Final production-mode checks

The production build, lint, seven automated tests and browser suite passed. The browser suite checked 13 pages, 43 links, navigation and theme persistence down to 320 pixels, the native enquiry flow with JavaScript disabled, and the current process and recorded walkthrough. The 20 axe scans returned zero violations in the sampled routes, themes and viewport widths. The browser intercepted every synthetic post. See the [browser report](browser-results.json).

The grid-redesign baseline Lighthouse run scored 100 on mobile and 100 on desktop. Mobile LCP was 0.9 seconds with 40 ms total blocking time and zero layout shift. Desktop LCP was 0.2 seconds with zero blocking time and zero layout shift. Field measurements require production traffic.
