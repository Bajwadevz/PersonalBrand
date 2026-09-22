# Site Audit — bajwaa.dev Commercial System Expansion

Date: September 17, 2026
Repository Location: `Personal Brand/PersonalBrand`

---

## 1. Technical Structure Summary

- **Framework & Version:** Next.js `16.1.6` (App Router, Turbopack enabled)
- **React Version:** React `19.2.3`, React DOM `19.2.3`
- **Language / Typing:** TypeScript `^5`
- **Package Manager & Lockfile:** npm, `package-lock.json`
- **Styling / Tokens:** Tailwind CSS `^4` (`@import "tailwindcss";`), `tw-animate-css`, `shadcn/tailwind.css`, `@tailwindcss/typography`. Core variables defined in `src/app/globals.css`:
  - Accent Color: `#2D6A8F` (`var(--color-ocean)`)
  - Border / Radius: `var(--color-site-border)`, `--radius: 0.625rem`
  - Typography: Inter (`var(--font-sans)`), Plus Jakarta (`var(--font-heading)`), JetBrains Mono (`var(--font-mono)`)
  - Shared visual classes: `.glass-card`, `.card-hover`, `.btn-primary`, `.btn-secondary`, `.section-shell`, `.container-shell`, `.muted-copy`, `.pulse-glow`
- **Content Sources:** Hardcoded React components & local MDX/Markdown files (`src/content/posts/*.md`) parsed via `gray-matter` & `react-markdown`.
- **Forms & Email Delivery:**
  - Contact Form (`src/components/ContactForm.tsx`): Formspree endpoint `https://formspree.io/f/xlgprbwd`. On successful submit, triggers fire-and-forget subscription to `/api/subscribe`.
  - Waitlist Opt-in (`src/components/WaitlistForm.tsx`, `KitEmbedForm.tsx`): Calls `/api/subscribe`, which communicates with ConvertKit v3 API (`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`) using `CONVERTKIT_API_KEY` and `CONVERTKIT_FORM_ID`.
- **Analytics:** `@vercel/analytics` (`ClientAnalytics.tsx` mounted in `src/app/layout.tsx`).
- **SEO & Metadata:** Native Next.js `Metadata` objects on pages, `sitemap.ts`, `robots.ts`, `manifest.ts`, `opengraph-image.tsx`, `apple-icon.tsx`, `icon.tsx`.
- **Build / Lint Verification Commands:** `npx tsc --noEmit`.

---

## 2. Current Route Map

| Path | Purpose / Page Component | Status |
|---|---|---|
| `/` | Homepage (`src/app/page.tsx`) | Active flagship & offers |
| `/work-with-me` | Work With Me (`src/app/work-with-me/page.tsx`) | Active offer overview |
| `/contact` | Lead-Response Audit (`src/app/contact/page.tsx`) | Active contact form |
| `/services/websites` | Service Business Websites (`src/app/services/websites/page.tsx`) | Active website offers |
| `/services/automations` | Workflow Automations (`src/app/services/automations/page.tsx`) | Active automation offers |
| `/services/lead-response` | Flagship AI Lead Response (`src/app/services/lead-response/page.tsx`) | Active flagship system |
| `/services/system-care` | System Care & Support (`src/app/services/system-care/page.tsx`) | Active support plans |
| `/demos/plumbing` | ClearFlow Plumbing Concept Demo (`src/app/demos/plumbing/page.tsx`) | Active concept demo |
| `/demos/hvac` | Northstar HVAC Concept Demo (`src/app/demos/hvac/page.tsx`) | Active concept demo |
| `/ai-implementation-os` | AI Implementation OS Product (`src/app/ai-implementation-os/page.tsx`) | Active digital product |
| `/blog` | Blog Index (`src/app/blog/page.tsx`) | Active insights |
| `/blog/[slug]` | Individual Blog Post (`src/app/blog/[slug]/page.tsx`) | Active content posts |
| `/tools` | Interactive Free Tools Index (`src/app/tools/page.tsx`) | Active tools index |
| `/tools/*` | Tool pages (stack builder, ROI calculator, etc.) | Active free tools |
| `/about` | About Page (`src/app/about/page.tsx`) | Active founder bio & story |
| `/workflows` | Workflow Directory (`src/app/workflows/page.tsx`) | Active showcase |
| `/product` | Redirect to `/ai-implementation-os` | Active redirect |

---

## 3. Data Flow Audit

```mermaid
flowchart TD
    UserContact[Visitor on /contact] -->|Fills Form| ContactComponent[ContactForm.tsx]
    ContactComponent -->|POST JSON| Formspree[Formspree Endpoint xlgprbwd]
    ContactComponent -->|On Success POST /api/subscribe| KitRoute[/api/subscribe]
    KitRoute -->|POST ConvertKit API| ConvertKit[ConvertKit Forms API]

    UserWaitlist[Visitor on /ai-implementation-os] -->|Fills Email| WaitlistComponent[WaitlistForm / KitEmbedForm]
    WaitlistComponent -->|POST /api/subscribe| KitRoute
```

---

## 4. Single Source of Truth Pricing Table

| Offer Name | Standard Price | Founding 50% Price | Delivery Timeline | Contact ID / Query |
|---|---|---|---|---|
| Lead Flow & Website Audit | $500 | $250 | 2 business days | `lead-flow-audit` |
| Conversion Landing Page | $1,500 | $750 | 5–7 business days | `conversion-landing-page` |
| Essential Service Website | $3,000 | $1,500 | 10–14 business days | `essential-service-website` |
| Modern Lead-Generation Website | $5,000 | $2,500 | 15–20 business days | `modern-lead-generation-website` |
| Website + Inbound Flow System | $8,000 | $4,000 | 20–25 business days | `website-inbound-flow-system` |
| Missed-Call Text-Back | $1,500 | $750 | 3–5 business days | `missed-call-text-back` |
| Form-to-CRM Fast Lane | $1,800 | $900 | 3–5 business days | `form-to-crm-fast-lane` |
| AI Lead Qualification & Routing | $2,500 | $1,250 | 5–7 business days | `ai-lead-qualification-routing` |
| Automated Follow-Up Rescue | $2,500 | $1,250 | 5–7 business days | `automated-follow-up-rescue` |
| CRM Workflow Cleanup | $2,000 | $1,000 | 5–7 business days | `crm-workflow-cleanup` |
| Operations Workflow Build | $4,000 | $2,000 | 10–15 business days | `operations-workflow-build` |
| AI Lead Response & Booking System | $6,000 | $3,000 | 10 business days | `ai-lead-response-booking-system` |
| System Care | $500/mo | $250/mo | Monthly | `system-care` |
| Growth Optimization | $1,000/mo | $500/mo | Monthly | `growth-optimization` |
| AI Implementation OS | $200 | $100 | Self-paced / 30-day | `ai-implementation-os` |
