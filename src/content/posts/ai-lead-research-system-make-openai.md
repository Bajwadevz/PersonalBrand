---
title: "How to Build an AI Lead Research System with Make and OpenAI (No Code)"
date: "2025-01-10"
description: "Learn how to build an AI-powered lead research system using Make and OpenAI that auto-fills your CRM with company intel before every sales call. No code required."
keywords: "AI lead research automation, Make.com AI workflow, OpenAI CRM automation, no-code lead enrichment"
tags: ["Automation", "AI Tools", "Sales", "Make", "No-Code"]
readingTime: "7 min read"
author: Shahzaib Bajwa
ogImage: /og-ai-lead-research-system-make-openai.png
---

Manual lead research is killing your sales velocity. If you're still spending 20 minutes per prospect digging through LinkedIn, company blogs, and news alerts before every call, you're leaving pipeline on the table. **AI lead research automation** changes that. This guide walks you through building a no-code system that automatically enriches every new CRM lead with company intel, pain points, and recent news—before you pick up the phone.

## Why Manual Lead Research Is Killing Your Sales Velocity

The average SDR or account executive spends 1.5 to 2 hours per day on research alone. That's time not spent in conversations, not spent closing. Worse, the research is often inconsistent: one rep finds the funding announcement, another misses it. **AI lead research automation** standardizes quality and compresses 20 minutes into seconds. Your CRM becomes a pre-call briefing doc for every lead.

## What This System Does (Overview)

When a new lead is added to your CRM (HubSpot, Airtable, or any system with a webhook or native Make connector), the scenario:

1. Triggers on the new record.
2. Sends company domain (or company name) to OpenAI with a structured enrichment prompt.
3. Parses the AI response into fields: company size, recent news, top pain points, one-sentence hook.
4. Pushes that dossier back into the same CRM record.

You open the lead before the call and the briefing is already there. No copy-paste, no missed signals.

## Tools You Need

| Tool | Role |
|------|------|
| **Make.com** | Orchestration: trigger, HTTP, parser, CRM update |
| **OpenAI (GPT-4o)** | Enrichment: turn raw inputs into structured intel |
| **Your CRM** | HubSpot, Airtable, Pipedrive, or any with an API/Make module |

No code. No custom servers. Just scenario design and an OpenAI API key.

## Step-by-Step: Building the Scenario in Make

### 1. Trigger: New Lead Added to CRM

Create a new scenario. Add your CRM as the first module:

- **HubSpot:** "Watch Records" or "Search Records" (e.g. contacts created in last 24 hours).
- **Airtable:** "Watch Records" on your Leads table.
- **Generic:** Use "Webhook" if your CRM can send a webhook on new lead.

Map the fields you need for enrichment: at minimum, **company domain** (or company name) and the **record ID** so you can update the same record later.

### 2. HTTP Module: Call OpenAI With Enrichment Prompt

Add an "HTTP – Make a Request" module:

- **URL:** `https://api.openai.com/v1/chat/completions`
- **Method:** POST
- **Headers:** `Authorization: Bearer YOUR_OPENAI_API_KEY`, `Content-Type: application/json`
- **Body:** JSON with `model: "gpt-4o"` and a `messages` array.

Use this system prompt (adapt to your use case):

```
You are a B2B research assistant. Given a company name or domain, output a JSON object with exactly these keys: companySize (e.g. "50-200"), recentNews (one sentence), painPoints (array of 3 short strings), hook (one sentence for sales outreach). Use only the company name/domain provided; do not invent. If you cannot determine a value, use "Unknown".
```

In the user message, pass the company name or domain from the trigger (e.g. `{{1.company_domain}}`).

### 3. Parser: Extract Company Size, News, Pain Points

OpenAI returns a JSON object inside the response. Add a "JSON – Parse JSON" module (or "Tools – Set Variable" with a JSON path). Map:

- `companySize` → from parsed response
- `recentNews` → from parsed response
- `painPoints` → from parsed response (join as one text field if your CRM has a single "Pain points" field)
- `hook` → from parsed response

Handle errors: if the AI returns invalid JSON, add an error handler route that logs and optionally sends a Slack alert.

### 4. Updater: Push Dossier Back to CRM Record

Add your CRM's "Update a Record" module. Select the same record using the record ID from the trigger. Map the parsed fields to the correct CRM properties (e.g. "Research – Company Size", "Research – Recent News", "Research – Pain Points", "Research – Hook"). Run the scenario once with a test lead and confirm the record updates.

## The Exact System Prompt to Use

Copy this into your OpenAI HTTP module (system message):

```
You are a B2B lead research assistant. Given a company name or website domain, research and output a JSON object with these exact keys:
- companySize: string (e.g. "11-50", "51-200")
- recentNews: string (one sentence on funding, product launch, or notable event in last 6 months)
- painPoints: array of 3 strings (likely operational or sales-related challenges based on industry)
- hook: string (one sentence a salesperson could use to open an email or call)

Use only public information. If uncertain, use "Unknown" or an empty array. Output only valid JSON, no markdown.
```

In the user message, pass: `Enrich this company: {{1.company_domain}}` (or whatever your trigger field is).

## Results: Time Saved and Conversion Impact

Teams running this **AI lead research automation** typically report:

- **Time saved:** 15–20 minutes per lead × number of leads per week.
- **Consistency:** Every rep gets the same quality of intel.
- **Conversion impact:** Better first touches (reference to recent news, clear pain points) improve reply and meeting rates.

Scale the scenario to run on every new lead; add a filter if you only want to enrich certain segments (e.g. enterprise domain, specific source).

## CTA

---
**Want the exact workflows and system prompts?**
[Get the Playbook →](/product)
---

## FAQ

### Do I need to use HubSpot or Airtable?

No. Any CRM or database that Make.com can trigger from and update will work. Use "Webhooks" or "Custom API" if there's no native module.

### How much does the OpenAI step cost per lead?

At typical token usage, enrichment is a few cents per lead. GPT-4o-mini is cheaper if you need higher volume; adjust the model in the HTTP request.

### Can I use Claude or another LLM instead of OpenAI?

Yes. Replace the HTTP URL and payload with the provider's chat API. Keep the same prompt structure and JSON output so the rest of the scenario stays unchanged.

### What if the AI returns invalid JSON?

Add error handling in Make: on failure of the JSON parser, route to a Slack notification or a "manual review" Airtable view so you can fix and re-run.
