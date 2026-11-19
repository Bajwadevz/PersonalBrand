# Discovery enquiry operations

All discovery buttons lead to `/contact`. Without a verified agency scheduler, the operator arranges the call by reply email. The form sends URL-encoded POST requests to `/api/leads`, including with JavaScript disabled. The agency email from the existing site's contact links is the independent fallback. Submission does not subscribe the visitor to Kit.

## Deployment settings

| Server setting | Behaviour |
|---|---|
| `LEAD_FORMSPREE_ID` | Defaults to the existing site's Formspree form ID. Use a separate recipient or form for staging. Verify destination ownership, provider limits and notification delivery before launch. |
| `DISCOVERY_CALENDAR_URL` | Optional HTTPS URL for an owner-verified 20-minute agency event. Check timezone selection and an Australian business-hours slot in staging. |
| `LEAD_REDIS_REST_URL`, `LEAD_REDIS_REST_TOKEN` | Set both to use a dedicated Upstash REST database. Select its region and retention settings with the owner. Restrict access to the server and designated operators and disable eviction. |
| `LEAD_HASH_SECRET` | A stable random server secret keeps record identifiers consistent when rotating the Redis token. Otherwise identifiers derive from the Redis token. |

**Delivery.** With Formspree alone, the provider's successful response confirms delivery to its intake service. Its notification mailbox must be checked separately. Spam filters run at the provider. One application instance also suppresses identical retries and limits a visitor to ten attempts per ten minutes. Guards reset on instance recycling. Distributed deduplication and throttling require the shared Redis settings. Other hosting platforms must supply a trusted client identifier at ingress for per-visitor rate limiting.

**Shared inbox.** Redis atomically preserves the first submission and appends changed enquiries under the normalised email/company key. Unchanged retries return a duplicate acknowledgement. Each record expires 90 days after its latest changed enquiry. The Formspree notification is secondary in this mode. Review the Redis sorted set `discovery:v1:inbox` newest first using `ZREVRANGE discovery:v1:inbox 0 49` in the authenticated private console, then read the selected record using `HGETALL`. If logs show `discovery_notification_unavailable`, recover the enquiry from this inbox, enter it into the CRM and follow up once. `discovery_intake_unavailable` means no successful storage acknowledgement was available to the app. Compare provider records before manually resending. Check the inbox daily and set deployment alerts for these two event names.

**Manual CRM handoff.** Match normalised email and company, preserve first campaign values and append new requests as activities. Record a booked discovery call only after the calendar confirms the appointment or the prospect confirms by email. Use the agreed paid-audit scope and invoice procedure after qualification.

**Analytics.** Vercel Web Analytics collects the existing pageviews and the custom events `cta_click`, `lead_form_start`, `lead_form_submit_success`, `lead_form_submit_error` and, when configured, `booking_link_open`. Confirm custom-event support in the deployed plan. Enquiry fields, email, URL query strings and fragments are excluded from these events. Duplicates do not emit a second success. Confirmed bookings and subsequent invoice and sales stages belong in the CRM.

**Release checks.** Review privacy, terms, the provider regions, retention and tax treatment with the founder. With an authorised staging recipient, send one fictional enquiry, find it in the provider inbox, confirm the email notification and CRM handoff, then retry it and check duplicate handling. Repeat with JavaScript disabled. Disconnect the staging provider and check the visible failure and email fallback. No owner meeting was booked and no external message was sent during local verification.
