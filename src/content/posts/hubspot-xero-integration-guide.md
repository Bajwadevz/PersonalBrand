---
title: "HubSpot Xero integration: a practical guide for Australian small businesses"
date: "2026-11-20"
description: "What the native HubSpot–Xero sync covers, where Australian teams hit gaps with GST, contacts and invoices, and how to choose between the native app, middleware and a custom build."
tags: ["Automation", "CRM", "Finance"]
readingTime: "6 min read"
author: "bajwaa.dev"
---

A deal is marked closed won in HubSpot. Someone in accounts then retypes the customer, the line items and the price into Xero. Later, a salesperson asks whether the invoice has been paid, and accounts checks Xero again. Connecting HubSpot to Xero should remove that retyping. Whether it does depends on which direction your invoices travel and how clean your contact records are.

This guide covers what the native integration handles, the gaps Australian teams commonly hit and how to choose an approach before anyone changes a live ledger.

## What the native HubSpot–Xero integration does

HubSpot's own app, listed on the Xero App Store as [Data sync by HubSpot](https://apps.xero.com/au/industry/professional-services/app/data-sync-by-hubspot), syncs contacts, products (Xero items), invoices and payments. According to [HubSpot's setup guide](https://knowledge.hubspot.com/integrations/connect-hubspot-and-xero-data-sync), you choose a direction for each object. Contacts, products and invoices can sync both ways, only into HubSpot or only into Xero. Payments sync from Xero to HubSpot or both ways.

A few details from that guide matter before you switch it on:

- **Permissions**. You need Super Admin or App Marketplace permissions in HubSpot. Custom field mappings need at least a Data Hub Starter subscription.
- **Timing**. HubSpot detects changes to send to Xero within a few minutes. Changes coming from Xero are checked every 30 minutes, and there is a manual sync option.
- **Order of set-up**. Xero needs an invoice's contact and products to exist before the invoice can sync, so HubSpot recommends setting up contacts and products first.
- **History**. Only invoices created or modified after the sync starts go to Xero, and only payments created after you connect sync to HubSpot.

Read the app's reviews on the Xero listing as well. Its rating there is low, and some reviewers describe connection and invoice sync problems. Reviews are anecdotal, but they are a good reason to test on a small batch first.

## Gaps Australian teams commonly hit

**Invoice direction.** Decide which system creates the invoice. If accounts raises invoices in Xero and sales only needs to see them, a one-way sync into HubSpot is simpler. If sales creates invoices in HubSpot, HubSpot's guide says those invoices need to be edited in HubSpot. Draft invoices do not sync to Xero, so an invoice must be open before it moves across. Some teams want the opposite workflow, where sales prepares a draft and accounts approves it in Xero. Check that your chosen tool supports that before you commit to it.

**Contact duplication and matching.** HubSpot lists a contact that "doesn't share the email address" in both systems as the most common cause of invoice sync failure. Xero also requires unique contact names. If the same customer appears as "Smith Plumbing" in Xero and "Smith Plumbing Pty Ltd" in HubSpot, fix that before the first sync. Merge duplicates in both systems and decide which system owns each field.

**GST and tax codes.** Xero tax rates are imported into HubSpot when invoice sync to Xero is configured, but tax rates created in HubSpot do not sync to Xero. HubSpot also says invoices that use its automated sales tax will not sync to Xero. If your Xero tax rates change later, the guide says you need to re-save the invoice sync settings to import them again. Ask your bookkeeper to confirm which GST codes each product should carry before you map anything.

**Line items and products.** Invoices refer to products by SKU. If a product's SKU changes after it has been added to a synced invoice, HubSpot says that invoice can no longer sync until the line item is removed and re-added. Invoices with tracked inventory items that would go on backorder in Xero also will not sync. A clean, agreed product list is a prerequisite rather than a nice-to-have.

**Currency and fees.** Supported currencies include AUD and NZD, but exchange rates only sync when your HubSpot company currency matches your Xero base currency. Credit card fees do not sync to Xero invoices, which can leave a reconciliation difference.

**Payment status on the deal.** Payment sync records payments against invoices. If your team wants a deal property such as "Paid in full" or a pipeline stage change when a payment lands, that is a separate workflow decision. Confirm whether your HubSpot plan's workflows can do it, or whether you need middleware.

Older guides refer to a Xero-built HubSpot app. Check the current [Xero App Store collection for HubSpot](https://apps.xero.com/au/collection/connect-xero-and-hubspot) to see which apps are listed today. It also includes third-party invoicing apps that create Xero invoices from HubSpot deals.

## Your options: native, middleware or custom

- **Native Data sync by HubSpot**. Suits teams with clean contacts, a simple product list and a clear invoice direction. Lowest build effort. You accept its rules on drafts, tax and timing.
- **Marketplace invoicing app**. Suits teams that want invoices created from a deal stage change with deal products as line items. Compare each listing's features, pricing and AUD support with the vendor before installing.
- **Middleware (Zapier, Make or n8n)**. Suits teams that need conditional logic, such as only invoicing approved deals, writing payment status back to a deal or routing exceptions to a person. Zapier lists ready-made [HubSpot and Xero workflows](https://zapier.com/apps/hubspot/integrations/xero). n8n documents both a [Xero node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.xero/) covering contacts and invoices and a [HubSpot node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.hubspot/). Someone has to monitor and maintain the flow.
- **Custom build against the APIs**. Suits unusual data models, high volumes or strict audit requirements. Highest build and maintenance cost. Usually only justified once the simpler options have been ruled out.

For a deeper tool comparison, see [n8n vs Make vs Zapier](/blog/n8n-vs-make-vs-zapier-ai-automation-2025).

## An illustrative workflow: quote to paid

The following is an illustrative example, not a client project. A 15-person services business uses HubSpot for sales and Xero for accounts.

1. A salesperson moves a deal to "Approved for invoicing". The deal must have an associated company, a billing contact with an email address and line items using agreed products.
2. The workflow checks whether the contact exists in Xero by email. If there is no match or more than one match, it stops and creates a task for the accounts coordinator.
3. If the checks pass, it creates the invoice in Xero using the GST code mapped to each product. Accounts reviews and approves it in Xero.
4. The Xero invoice number and link are written back to the HubSpot deal.
5. When a payment is recorded in Xero, the deal is updated with the amount paid and a "Paid" status. Part-payments are flagged for review rather than closing the deal.

Every step has an owner and a stopping point. That matters more than which tool runs it.

## Testing checklist before go-live

- Connect to a Xero demo company or test organisation first, not your live ledger.
- Run at least one example of each case: new customer, existing customer, duplicate contact, GST-free item, mixed GST invoice, discount, part-payment, credit note and cancelled deal.
- Compare every test invoice against one your bookkeeper prepared by hand. Check totals, GST, account codes and due dates.
- Confirm what happens when a sync fails. Who is notified, and how do they retry?
- Decide what happens to historical invoices, since the native sync only moves new or modified records.
- Write a one-page note covering field ownership, sync direction and who to contact when something breaks.

## When to call for help

Do it yourself if your data is clean, your invoice direction is simple and the native app's rules fit how you work. Ask for help when invoices regularly need judgement, when duplicate contacts run into the hundreds or when your bookkeeper is uneasy about tax mappings. Get help too when a failed sync would leave sales and accounts disagreeing about what a customer owes.

Our [CRM automation](/solutions/crm-automation) and [business process automation](/solutions/business-process-automation) pages explain how we scope integrations like this. Our [cost guide](/blog/ai-implementation-cost-australia) explains how exceptions and integrations affect a quote. For a written plan before any build, the [A$750 AI Operations Audit](/ai-operations-audit) maps the workflow and checks feasibility. Implementation starts from A$3,500, with optional support from A$490 per month.

If your team is still retyping deals into Xero, bring one redacted deal and its matching invoice to a free 20-minute [discovery call](/contact). We will help you work out whether the native sync is enough or whether you need a different approach.
