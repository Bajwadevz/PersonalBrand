---
title: "How to Use OpenAI's GPT-4o in Make.com: A Beginner's Complete Guide"
date: "2025-03-22"
description: "A complete beginner's guide to connecting GPT-4o inside Make.com. Includes setup, module config, prompt tips, token management, and 3 starter workflow templates."
keywords: "how to use GPT-4o in Make.com, Make.com OpenAI module, connect OpenAI to Make, GPT automation no-code"
tags: ["Automation", "AI Tools", "Make", "Tutorial"]
readingTime: "8 min read"
author: Shahzaib Bajwa
ogImage: /og-how-to-use-gpt4o-in-make-com-guide.png
---

**Using GPT-4o in Make.com** is the fastest way for operators to add AI to their workflows without code. This guide walks you through setup, module configuration, prompt best practices, token management, and three starter templates so you can run research, summarization, and writing flows inside your [AI automation stack](/blog/ai-automation-stack-operators-2025).

## Why Make + GPT-4o Is the Best Combo for Operators

Make gives you triggers, branching, and 400+ integrations; GPT-4o gives you reasoning and language. Together you get: lead research, draft generation, summarization, and classification inside one visual scenario. No servers, no custom code—just scenario design and an API key.

## Prerequisites: API Key and Make Account

1. **OpenAI API key:** Go to platform.openai.com → API keys → Create. Copy the key; you’ll store it in Make.
2. **Make account:** Sign up at make.com. Create a new scenario to follow along.

## Step-by-Step: Adding the OpenAI Module to a Scenario

1. In your scenario, click **+** to add a module.
2. Search for **"OpenAI"** and choose **OpenAI** (official).
3. Select **"Create a Completion"** or **"Create a Message"** (recommended: Create a Message for chat-style prompts).
4. **Connection:** Create a new connection, paste your API key, save.
5. **Module configuration:**
   - **Model:** `gpt-4o` (or `gpt-4o-mini` for cheaper, high-volume tasks).
   - **Messages:** Add a system message and a user message. In the user message, use the mapping panel to pull in data from previous modules (e.g. `{{1.company_name}}`).

Run once and check the output; the AI response will appear in the module’s output and can be mapped into the next step (e.g. Notion, email, CRM).

## Choosing Models: GPT-4o vs GPT-4o-Mini (When to Use Which)

| Use case | Model | Why |
|----------|--------|-----|
| Complex reasoning, long context, high-stakes copy | **gpt-4o** | Better accuracy and nuance |
| High volume, triage, extraction, short summaries | **gpt-4o-mini** | Cheaper, fast, good enough for many tasks |
| Mixed workload | **gpt-4o** for 1–2 steps, **gpt-4o-mini** for the rest | Balance cost and quality |

Start with **gpt-4o-mini** for new scenarios; upgrade to **gpt-4o** only where you see quality issues or need longer context.

## Writing Effective System Prompts Inside Make

- **Be specific:** "You are a B2B research assistant" beats "You are helpful."
- **Define output format:** "Output only valid JSON with keys: summary, painPoints, hook."
- **Constrain length:** "Under 100 words" or "One sentence per bullet."
- **Use the user message for data:** Put the variable content (lead name, company, raw text) in the user message; keep instructions in the system message.

Example system message for [lead research](/blog/ai-lead-research-system-make-openai): "You are a B2B research assistant. Given a company name, output a JSON object with: companySize, recentNews, painPoints (array of 3), hook (one sentence). No markdown, only JSON."

## Handling Outputs: JSON Parsing, Text Splitting

- **JSON:** If you asked for JSON, add a **JSON – Parse JSON** module after OpenAI. Map the AI output into the "JSON string" field. Then map parsed fields into CRM, Airtable, etc.
- **Plain text:** Use **Text Parser** or **Set variable** if you need to extract a specific part (e.g. first paragraph).
- **Errors:** Add error handling: if OpenAI or the parser fails, route to a Slack alert or a "manual review" path.

## Token Cost Management Tips

- Use **gpt-4o-mini** for steps that don’t need flagship quality.
- Shorten system and user messages: remove filler, pass only necessary context.
- Cache when possible: e.g. if the same company is enriched multiple times in a run, call the AI once and reuse the result.
- Set **max_tokens** in the OpenAI module to cap response length and cost.

## 3 Starter Templates

**1. Research:** Trigger (new CRM lead) → OpenAI (enrichment prompt with company name) → Parse JSON → Update CRM. See [AI lead research system](/blog/ai-lead-research-system-make-openai) for the full prompt.

**2. Summarize:** Trigger (new document or row) → OpenAI ("Summarize the following in 3 bullets: {{body}}") → Create Notion page or send Slack.

**3. Write:** Trigger (new qualified lead) → OpenAI (personalized email prompt with enrichment data) → Create draft in Gmail or add row to "Drafts" Airtable.

Swap triggers and actions to fit your stack; the pattern is the same.

---
**Want the exact workflows and system prompts?**
[Get the Playbook →](/product)
---

## FAQ

### Do I need coding experience to use OpenAI in Make?

No. You only need to map fields between modules and write clear prompts. The OpenAI module handles the API call.

### What if my prompt is too long?

Trim the system message and pass only essential data in the user message. If you need long context, use gpt-4o and ensure your plan includes enough tokens (check OpenAI’s context limits).

### Can I use Claude or another LLM in Make?

Make has a Claude connector. For others, use the **HTTP** module and call the provider’s API (same idea: send a request, parse the response, map to next step).

### How do I avoid rate limits?

Space out runs (e.g. add a delay between iterations in a loop), use **gpt-4o-mini** where possible, and monitor usage in your OpenAI dashboard.
