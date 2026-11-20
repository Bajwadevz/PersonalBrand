# Inbound system: from CTA to a scheduled call

Every primary CTA (`CallLink`, `data-cta="discovery"`) goes to `/contact#book`. The contact page is booking-first: it explains the 20-minute call, then asks the visitor either to pick a time on the calendar (when configured) or to **request** 1–3 weekday windows in their time zone. Operational detail for storage and delivery stays in `docs/discovery-intake.md`.

## Flow

```
CTA click ([data-cta])  ──► analytics: cta_click {cta, page}
        │
        ▼
/contact#book  (agenda · what to bring · what happens next · offer path)
        │
        ├── DISCOVERY_CALENDAR_URL set? ──► "Pick a time now" (new tab)   ──► analytics: booking_link_open
        │                                    + inline embed for Cal.com / Calendly / Google appointment pages
        │
        └── Request form (always available; works without JavaScript)
              fields: 1–3 call windows, time zone (+ "other" text), name, email, company,
                      region, team size, task; optional: systems, frequency, other software, website
              analytics: lead_form_start
                │
                ▼
          POST /api/leads  (origin check · 16 KB limit · server validation · honeypot)
                │
                ├── LEAD_REDIS_REST_URL/TOKEN set ─► Redis inbox (durable, de-dup, rate limit)
                │                                    └─► Formspree notification (best effort)
                └── otherwise ─────────────────────► Formspree delivery (must be acknowledged)
                │
                ├── state "saved" + HUBSPOT_ACCESS_TOKEN ─► after response: upsert contact by email
                │                                          + Note with the full enquiry (failure = log only)
                ▼
          JS: JSON {state}        No JS: 303 → /contact?status=…#enquiry + 2-min HttpOnly receipt cookies
                │
                ▼
          "Request received": chosen times echoed, next steps, A$750 audit link, email fallback
          analytics: lead_form_submit_success | lead_form_submit_error {reason}
                │
                ▼
          Operator emails within one business day (target) to confirm a time ─► CRM: Discovery booked
```

States shown to the visitor: `saved` and `duplicate` (success panel; only when the server set the matching receipt), `invalid`, `limited`, `unavailable` (error with email fallback, form kept). A success URL without a receipt cookie shows the form, never a fake confirmation.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `DISCOVERY_CALENDAR_URL` | Optional | HTTPS link to the owner's 20-minute event. Shows "Pick a time now" above the form. Cal.com (`cal.com`, `app.cal.com`), Calendly (`calendly.com`) and Google appointment pages (`calendar.google.com/.../appointments/...`) are also embedded inline (lazy, collapsed by default). If a Content-Security-Policy is added later, include the host in `frame-src`. |
| `LEAD_FORMSPREE_ID` | Optional | Formspree form id. Defaults to the existing `xlgprbwd`. Use a separate form for staging. |
| `LEAD_REDIS_REST_URL`, `LEAD_REDIS_REST_TOKEN` | Recommended | Upstash REST database for the durable inbox, distributed de-duplication and rate limiting. Set both or neither. |
| `LEAD_HASH_SECRET` | Recommended with Redis | Stable secret for hashed record keys, so rotating the Redis token keeps identifiers stable. |
| `HUBSPOT_ACCESS_TOKEN` | Optional | HubSpot private-app token. Scopes: `crm.objects.contacts.write`, `crm.objects.contacts.read` (HubSpot documents notes under the contacts scopes; confirm in the private-app scope screen and test once in a sandbox). Server-only; never prefix with `NEXT_PUBLIC_`. |

### HubSpot hand-off (`src/lib/crm-hubspot.ts`)

Runs only for new (`saved`) requests, after the lead has been stored/delivered by the paths above, and after the HTTP response where the platform supports `after()`.

1. `POST /crm/v3/objects/contacts/batch/upsert` with `idProperty: "email"` and `email`, `firstname`, `lastname` (split from the name), `company`, `website` (if given).
2. `POST /crm/v3/objects/notes` associated to that contact (association type 202) containing the task description, requested times and time zone, team size, region, systems, frequency, software, website, first-touch campaign, consent version and timestamp.

Failures log `discovery_crm_unavailable` with the HTTP status only (no personal data) and do not change what the visitor sees. Lifecycle stage and lead status are **not** set automatically, so a returning customer is never moved backwards; set them by hand using the mapping below. Alert on `discovery_crm_unavailable` and back-fill from the Redis inbox or Formspree.

## CRM stage mapping

| Stage | Enters when | Evidence / action |
|---|---|---|
| New enquiry | Request received (form, email or calendar booking) | Note from the website hand-off, or Formspree/Redis record entered manually |
| Qualified | Operator confirms it's an Australian business with a recurring task we can help with | Reply sent proposing/confirming one of the requested times |
| Discovery booked | A time is confirmed by calendar invite or the prospect's reply | Calendar event exists; never mark booked from the form alone |
| Discovery held | The 20-minute call happened | Short call note: task, systems, frequency, fit |
| Audit proposed | A$750 fixed-scope AI Operations Audit offered | Scope + invoice sent |
| Audit paid / in progress | Invoice paid | Audit start date |
| Audit delivered | Findings and implementation estimate delivered | Report link |
| Implementation proposed / won | Build quote (from A$3,500) sent / accepted | Quote, deposit |
| Support | Optional monthly support (from A$490/month) started | Agreement |
| Not a fit / Lost | At any stage | Reason recorded; no further sequence |

HubSpot users can map these to deal stages in a "Discovery" pipeline; contact lifecycle can stay at Lead → Sales Qualified Lead → Opportunity → Customer.

## Analytics (Vercel Web Analytics)

`cta_click {cta, page}` for any `[data-cta]` click (and other links to `/contact`), `booking_link_open {page}` for calendar links and the embed toggle, `lead_form_start`, `lead_form_submit_success`, `lead_form_submit_error {reason}`. Properties are restricted to short labels/paths by `funnelEvent`; no form content, email or query strings are sent. Custom-event properties need a Vercel plan that supports them.

## Manual test checklist

Use fictional data and a staging Formspree form/HubSpot sandbox.

- [ ] `/contact#book` from a header/page CTA lands on the agenda + form; `cta_click` recorded.
- [ ] Browser in Perth/Adelaide/Darwin/Brisbane/Sydney/Melbourne pre-selects the matching zone; other zones pre-select "Other" and show the city field.
- [ ] Submitting with no time windows shows "Choose at least one time window", focuses the first window, and sends nothing.
- [ ] A fourth window cannot be ticked; un-ticking re-enables the others.
- [ ] Successful submit shows "Request received", echoes the chosen times and zone, links to `/ai-operations-audit` and the email fallback; focus moves to the heading.
- [ ] Re-submitting identical content shows "We already have this request" (no second success event).
- [ ] With JavaScript disabled: submit lands on `/contact?status=saved#enquiry` with times echoed; reloading after two minutes shows the form again, not a fake success.
- [ ] `/contact?status=saved` opened directly shows the form (no receipt cookie).
- [ ] Invalid (bad email, Saturday window, unknown zone), limited (11 tries/10 min) and unavailable (provider down) states show honest messages with the email address.
- [ ] With `DISCOVERY_CALENDAR_URL` set: "Pick a time now" opens in a new tab; for Cal.com/Calendly/Google the inline calendar loads; `booking_link_open` recorded.
- [ ] With `HUBSPOT_ACCESS_TOKEN` set: contact upserted by email (no duplicate on resubmit), Note attached. With an invalid token: visitor still sees success; logs show `discovery_crm_unavailable`.
- [ ] Keyboard only: every chip, select, details toggle and button reachable with visible focus; targets ≥ 44px.
- [ ] 390px wide in light and dark: no horizontal scroll, chips readable.
