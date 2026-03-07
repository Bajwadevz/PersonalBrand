---
title: "How I Built an Automated Weekly Report System in Under 2 Hours"
date: "2025-02-23"
description: "I built a fully automated weekly business report system using Make, Notion, and OpenAI in under 2 hours. Here's the exact workflow, prompts, and setup."
keywords: "automated weekly report system, Make Notion automation, auto-generate reports AI, operator reporting automation"
tags: ["Automation", "AI Tools", "Strategy", "Make"]
readingTime: "7 min read"
author: Shahzaib Bajwa
ogImage: /og-automated-weekly-report-system-make-notion.png
---

Before this build, I was spending about three hours every Friday pulling numbers from Notion, Airtable, and spreadsheets, then writing a summary by hand. Now a **automated weekly report system** runs on a schedule: it pulls the data, sends it to OpenAI for a concise summary, and drops the result into Notion and my inbox. I built it in under two hours with Make, Notion, and OpenAI. Here’s the exact setup.

## The Before: 3 Hours Every Friday Manually Compiling Reports

Every Friday I’d open Notion databases, Airtable views, and a couple of Google Sheets. I’d copy metrics, paste them into a doc, and write a narrative. Same structure every week—revenue, pipeline, support tickets, top wins—but fully manual. It was the perfect candidate for [AI automation stack](/blog/ai-automation-stack-operators-2025) treatment: repeatable, structured, and time-consuming.

## The After: Zero-Touch Weekly Report in Your Inbox

Now: Make runs on a schedule (e.g. Friday 5 p.m.). It reads from Notion and/or Airtable/Sheets, builds a text summary of the week’s data, sends that to OpenAI with a fixed prompt, gets back a short narrative, and then creates a new Notion page and sends an email (or Slack) with the report. I don’t touch it unless I want to tweak the prompt or add a source.

## What the System Pulls (Notion DB, Airtable, Google Sheets)

My scenario pulls:

- **Notion:** A database of deals (stage, value, close date) and a tasks database (completed this week).
- **Airtable (optional):** Support or ops metrics if you track them there.
- **Google Sheets (optional):** Revenue or other numbers that live in a sheet.

Make has native modules for all three. I use "Search Records" or "List Records" with a date filter (e.g. "Last 7 days") and map the key fields into a single text block for the AI.

## The Make Scenario (Step-by-Step)

1. **Trigger:** "Schedule" — every Friday at 5 p.m. (or your preferred time).
2. **Module 2 — Notion:** "Search Records" or "List Records" for your deals DB. Filter: updated or created in last 7 days. Map: deal name, stage, value, close date. Repeat for tasks if you use them. Output: one text block per source (e.g. "Deals this week: …").
3. **Module 3 — (Optional) Airtable/Sheets:** Same idea—pull the views you care about, output a text summary of the numbers.
4. **Module 4 — OpenAI:** One HTTP or native "OpenAI" module. System prompt (see below). User message: the concatenated text from steps 2–3.
5. **Module 5 — Notion:** "Create a Page" in your Reports database (or a dedicated parent page). Title: "Weekly Report – [current date]". Body: the AI output (use "Build a string" if you need to add markdown).
6. **Module 6 — Email or Slack:** Send yourself (and optionally team) the same summary. I use Gmail "Send an Email" with a fixed subject like "Weekly Report – [date]."

No routers required for a first version—one linear flow is enough.

## The AI Summarization Prompt

**System prompt:**

```
You are a concise business reporter. Given raw data from the past week (deals, tasks, metrics), write a short weekly report (under 300 words) with: 1) Headline and 2–3 bullet highlights, 2) Key numbers (revenue, pipeline, tasks), 3) One short paragraph of narrative and next-week focus. Use clear headings. No fluff. Output in markdown.
```

**User message:** The concatenated text from your Notion/Airtable/Sheets steps. Example: "Deals this week: Deal A – Stage: Proposal – $5k. Deal B – Stage: Negotiation – $12k. Tasks completed: 14."

The AI returns a formatted report; that string goes into the Notion page and the email body.

## Output Format: Slack Message + Email + Notion Page

- **Notion:** New page in your Reports DB (or under a "Reports" parent) with the full markdown. Easy to search and link.
- **Email:** Same content in the body so you and stakeholders get it in inbox.
- **Slack (optional):** Add a "Slack – Create a Message" step with a shortened version (e.g. first 2 bullets + link to Notion).

## Lessons Learned and Edge Cases

- **Empty weeks:** If no deals or tasks, the text might be very short. Prompt the AI to still output a valid structure: "No new deals this week; focus was on X."
- **Date range:** Use "last 7 days" from the run date so the report is always aligned to the same window.
- **Errors:** Add error handling in Make so a failed Notion or OpenAI call sends you an alert instead of failing silently.
- **Sensitive data:** Don’t put raw PII in the prompt if your OpenAI usage isn’t locked down; aggregate to counts and deal names only if needed.

---
**Want the exact workflows and system prompts?**
[Get the Playbook →](/product)
---

## FAQ

### Can I use this with only Notion (no Airtable/Sheets)?

Yes. Use one or more Notion "List/Search Records" modules, combine the output into one text block, and send that to OpenAI. Then create the report page and email.

### How do I change the report structure?

Edit the system prompt. Ask for different sections (e.g. "Risks," "Wins," "Metrics table"). The rest of the scenario stays the same.

### What if I want the report in a different format (e.g. PDF)?

Add a step after OpenAI: use a "Create PDF" service (e.g. via API) or a tool that turns markdown to PDF, then attach that to the email or store in Notion.

### Does this work with n8n instead of Make?

Yes. Same logic: schedule trigger → read from Notion/Sheets/Airtable → build text → call OpenAI → write to Notion and send email/Slack.
