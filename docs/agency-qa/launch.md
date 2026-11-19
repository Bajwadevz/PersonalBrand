# Agency release handoff

The `agency-australia` branch uses the production-era source at `219ccc7`. The public site continues to serve the previous release.

- Commercial pages use the Australian agency positioning with an audit-first process, an optional support phase and one discovery action. The visual system restores the previous site’s perspective grid, floating glass navigation, wave mark and bold sans-serif type. It uses Ocean Blue for actions, Blueprint Pro navy and cyan for the interactive demo, and the Midnight Machine background for dark mode.
- Discovery leads use the site's existing Formspree routing, with email scheduling by default. The connected calendar was a 30-minute event for another business. The intake runbook covers optional scheduling, shared storage and manual CRM reconciliation.
- The audit is invoiced manually after qualification. The listed AUD prices are starting commercial terms awaiting approval.
- The original Sales OS example and the existing editorial library retain their URLs. The Australian pricing article and commercial pages are included in the sitemap. The [migration report](../seo/migration.md) records redirects, research gaps and the release checks.

## Release sequence

1. Confirm the invoicing entity, tax treatment and prices. Review the published founder biography, policies, processors and support terms.
2. Verify the receiving inbox. In a protected staging deployment, run a fictional enquiry through the real provider and verify arrival, notification and duplicate handling. Use an agency calendar URL if direct booking is enabled.
3. Capture Search Console query, page and link exports before publication. Confirm which analytics properties can capture the production funnel.
4. After approval, deploy the reviewed revision. Check the home and contact paths, robots, sitemap and redirect destinations on the canonical domain. Submit the sitemap and inspect the main service pages in Search Console.
5. Track Australian impressions, clicks and qualified enquiries at 30, 60 and 90 days. Compare field performance when CrUX data becomes available.

## Rollback

Use the previous verified production deployment if enquiry delivery fails, key pages return errors or crawler directives regress. Recheck the canonical domain. Reconcile provider receipts and any shared inbox entries from the release window before restoring or replaying leads.
