"use client";

import { useState } from "react";
import InlineOptIn from "@/components/InlineOptIn";

type Prompt = {
  title: string;
  role: string;
  task: string;
  platform: string;
  prompt: string;
};

const prompts: Prompt[] = [
  {
    title: "Lead Research Brief Generator",
    role: "Sales Rep / AE",
    task: "Research leads before calls",
    platform: "n8n / Make",
    prompt: `You are a sales research assistant. You will receive structured data about a prospect including their name, company, job title, LinkedIn URL, and company website. Your job is to produce a concise pre-call research brief.

Output format (use these exact headers):
**Company snapshot** (2–3 sentences: what the company does, size, funding stage if known)
**Prospect context** (1–2 sentences: their role, likely responsibilities, career background)
**Potential pain points** (3 bullet points: challenges likely faced by someone in this role at this company)
**Suggested opener** (1 sentence: a non-generic conversation starter based on their context)
**Key question** (1 sentence: the single most important discovery question for this call)

Be specific. Do not use generic phrases like "growing company" or "fast-paced environment." If you lack data on a section, write "Insufficient data" rather than guessing.

Input data will follow.`,
  },
  {
    title: "CRM Record Enrichment Writer",
    role: "Sales Rep / AE",
    task: "Enrich CRM data",
    platform: "n8n / Make",
    prompt: `You are a CRM data enrichment assistant. You will receive raw information about a company or contact. Your task is to extract and format structured data for CRM entry.

Return ONLY a valid JSON object with these fields (use null if data is unavailable, never guess):
{
  "company_name": "string",
  "industry": "string",
  "employee_count_estimate": "string (e.g. 50-200)",
  "annual_revenue_estimate": "string or null",
  "primary_product_or_service": "string (1 sentence)",
  "headquarters_location": "string",
  "funding_stage": "string or null",
  "key_competitors": ["string"],
  "icp_fit_score": "number 1-10",
  "icp_fit_reason": "string (1-2 sentences explaining the score)"
}

Do not include any text outside the JSON object.`,
  },
  {
    title: "Meeting Notes Summarizer",
    role: "Operations Lead",
    task: "Summarize meeting notes",
    platform: "n8n / Make",
    prompt: `You are a meeting notes processor. You will receive a raw meeting transcript or notes. Your task is to extract structured outputs that can be acted on immediately.

Output format (use these exact headers):
**Meeting summary** (3–4 sentences: what was discussed and decided)
**Decisions made** (bullet list: each decision on its own line, starting with the outcome)
**Action items** (bullet list: format as "Owner — Task — Deadline" for each item)
**Open questions** (bullet list: unresolved questions that need follow-up)
**Next meeting** (date/time if mentioned, otherwise "Not scheduled")

Be precise. Do not paraphrase action items — use the exact commitment made. If a deadline was not set, write "No deadline set."`,
  },
  {
    title: "Inbound Lead Qualifier",
    role: "Sales Team",
    task: "Qualify inbound leads",
    platform: "n8n / Make",
    prompt: `You are an inbound lead qualification assistant. You will receive a completed lead form submission. Your task is to score and classify this lead based on ICP fit and buying intent signals.

Output format:
**ICP fit score**: X/10
**Buying intent score**: X/10
**Overall priority**: Hot / Warm / Cold
**Qualification summary** (2–3 sentences: why this lead does or does not fit)
**Recommended next action**: (one of: Immediate outreach / Nurture sequence / Disqualify)
**Key qualification gaps**: (bullet list of missing information needed to fully qualify)

Scoring criteria:
- ICP fit: Consider company size, industry, role seniority, and stated use case
- Buying intent: Consider urgency language, specific pain points mentioned, timeline stated, and budget signals
- Be conservative — score 7+ only for leads with clear ICP fit AND explicit buying signals`,
  },
  {
    title: "Weekly Report Generator",
    role: "Operations Lead",
    task: "Generate weekly reports",
    platform: "n8n / Make",
    prompt: `You are a weekly operations report writer. You will receive raw data including metrics, completed tasks, and team updates. Your task is to produce a clean, executive-ready weekly summary.

Output format:
**Week of**: [date range]
**Headline metric**: [the single most important number this week and what it means]
**What moved forward** (3–5 bullet points: completed work with specific outcomes)
**What is at risk** (bullet list: anything behind schedule or blocked, with owner and blocker)
**Key metrics** (table or bullet list: core KPIs with this week vs last week comparison)
**Focus for next week** (3 bullet points: top priorities and who owns them)

Rules: Be specific with numbers. Do not write vague statements like "good progress was made." If data is missing for a section, flag it explicitly rather than omitting the section.`,
  },
  {
    title: "Follow-up Email Drafter",
    role: "Sales Rep / AE",
    task: "Draft follow-up messages",
    platform: "n8n / Make",
    prompt: `You are a sales follow-up email writer. You will receive context about a sales conversation including what was discussed, what was agreed, and the prospect's stated concerns or objections. Your task is to draft a follow-up email.

Rules:
- Subject line: specific to the conversation, not generic ("Following up" is not acceptable)
- Opening: reference one specific thing from the conversation — not a generic opener
- Body: 3–5 sentences maximum. Cover what was promised, next step, and one piece of value
- CTA: one clear ask with a specific action (not "let me know your thoughts")
- Tone: direct and professional — no filler phrases like "I hope this email finds you well"
- Length: under 150 words total

Output format:
Subject: [subject line]
---
[email body]`,
  },
  {
    title: "Customer Support Triage Assistant",
    role: "Customer Success Team",
    task: "Answer customer questions",
    platform: "n8n / Make",
    prompt: `You are a customer support triage assistant. You will receive an incoming customer message. Your task is to classify it and draft an initial response.

Output format (JSON):
{
  "category": "one of: Bug report / Feature request / Billing / How-to question / Complaint / Other",
  "priority": "one of: Urgent / High / Normal / Low",
  "priority_reason": "1 sentence explaining the priority",
  "suggested_team": "one of: Engineering / Billing / Support / Success",
  "draft_response": "a 2–4 sentence empathetic and helpful response that acknowledges the issue and sets clear next steps",
  "requires_human_review": true or false,
  "escalation_reason": "string if requires_human_review is true, otherwise null"
}

Priority rules: Urgent = data loss, security issue, or complete product failure. High = key feature broken. Normal = usability issue. Low = general question or feature request.`,
  },
  {
    title: "Content Brief Writer",
    role: "Marketing Team",
    task: "Create content briefs",
    platform: "n8n / Make",
    prompt: `You are a content strategist and SEO brief writer. You will receive a target keyword and a brief description of the target audience. Your task is to produce a complete content brief.

Output format:
**Target keyword**: [keyword]
**Search intent**: [Informational / Commercial / Transactional / Navigational] — [1 sentence explanation]
**Target audience**: [who is searching this and why]
**Recommended title**: [H1 — specific, keyword-forward, under 60 characters]
**Meta description**: [under 160 characters, includes keyword, clear value proposition]
**Content outline**:
  H2: [section heading]
  — Key point to cover
  — Key point to cover
  H2: [section heading]
  — Key point to cover
  [Continue for all major sections]
**Word count target**: [number] words
**Internal link opportunities**: [2–3 existing content pieces to link to]
**What must be included**: [3–5 specific data points, examples, or angles that differentiate this from generic content on the topic]`,
  },
];

const roles = ["All", ...Array.from(new Set(prompts.map((p) => p.role)))];
const tasks = ["All", ...Array.from(new Set(prompts.map((p) => p.task)))];

export default function PromptLibraryClient() {
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedTask, setSelectedTask] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = prompts.filter((p) => {
    const roleMatch = selectedRole === "All" || p.role === selectedRole;
    const taskMatch = selectedTask === "All" || p.task === selectedTask;
    return roleMatch && taskMatch;
  });

  function handleCopy(title: string, promptText: string) {
    navigator.clipboard.writeText(promptText);
    setCopied(title);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="relative w-full overflow-hidden pb-32">
      <section className="pt-32 lg:pt-40 pb-12 px-6 max-w-4xl mx-auto w-full relative z-10">
        <div className="mb-8 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50">
          <span className="flex h-2 w-2 rounded-full bg-[#0B2545] mr-2 opacity-80"></span>
          Free tool · {prompts.length} prompts · production-ready
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
          AI System Prompt Library
        </h1>
        <p className="text-xl max-w-2xl text-gray-600 font-medium leading-relaxed">
          Production-ready system prompts organized by role and task. Copy directly into your n8n or Make AI node — no editing required.
        </p>
      </section>

      <section className="pb-8 px-6 max-w-4xl mx-auto w-full relative z-10">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-6 flex flex-col sm:flex-row gap-6 flex-wrap">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Filter by role</label>
            <div className="flex flex-wrap gap-2">
              {roles.map((r) => (
                <button key={r} onClick={() => setSelectedRole(r)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${selectedRole === r ? "bg-[#0F172A] border-[#0F172A] text-white" : "bg-[#F8FAFC] border-gray-200 text-gray-600 hover:border-gray-400"}`}>
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Filter by task</label>
            <div className="flex flex-wrap gap-2">
              {tasks.map((t) => (
                <button key={t} onClick={() => setSelectedTask(t)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${selectedTask === t ? "bg-[#0F172A] border-[#0F172A] text-white" : "bg-[#F8FAFC] border-gray-200 text-gray-600 hover:border-gray-400"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 px-6 max-w-4xl mx-auto w-full relative z-10 flex flex-col gap-4">
        {filtered.length === 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-400 text-sm">
            No prompts match those filters. Try clearing one filter.
          </div>
        )}
        {filtered.map((p) => (
          <div key={p.title} className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
            <div className="p-6 flex items-start justify-between gap-4">
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 border border-gray-200/50">{p.role}</span>
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 border border-gray-200/50">{p.task}</span>
                  <span className="inline-flex items-center rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#0B2545] border border-gray-200/50">{p.platform}</span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A] leading-snug">{p.title}</h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleCopy(p.title, p.prompt)}
                  className="text-xs font-semibold text-[#0B2545] bg-[#F8FAFC] hover:bg-gray-100 border border-gray-200/50 rounded-full px-3 py-1.5 transition-colors"
                >
                  {copied === p.title ? "Copied ✓" : "Copy"}
                </button>
                <button
                  onClick={() => setExpanded(expanded === p.title ? null : p.title)}
                  className="text-xs font-semibold text-gray-500 hover:text-gray-900 bg-[#F8FAFC] hover:bg-gray-100 border border-gray-200/50 rounded-full px-3 py-1.5 transition-colors"
                >
                  {expanded === p.title ? "Hide ↑" : "Preview ↓"}
                </button>
              </div>
            </div>
            {expanded === p.title && (
              <div className="border-t border-gray-100 bg-[#0F172A] p-6">
                <pre className="text-white/70 text-xs leading-relaxed whitespace-pre-wrap font-mono">{p.prompt}</pre>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="pb-16 px-6 max-w-4xl mx-auto w-full relative z-10">
        <InlineOptIn />
      </section>
    </div>
  );
}
