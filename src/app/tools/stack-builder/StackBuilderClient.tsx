"use client";

import { useState } from "react";
import Link from "next/link";
import InlineOptIn from "@/components/InlineOptIn";

const roles = [
  "Solo Founder",
  "Sales Team (2–10 reps)",
  "Marketing Team",
  "Operations Lead",
  "Recruiting Team",
  "Agency / Consultant",
  "Product Team",
  "Customer Success Team",
];

const goals = [
  "Save time on manual data entry",
  "Automate outbound prospecting",
  "Build automated reporting",
  "Streamline client onboarding",
  "Automate content production",
  "Qualify and route inbound leads",
  "Reduce back-and-forth email",
  "Sync data across tools automatically",
];

const budgets = [
  "$0/month (free only)",
  "$20–50/month",
  "$50–200/month",
  "$200+/month",
];

type StackItem = {
  tool: string;
  role: string;
  why: string;
  cost: string;
  tier: "essential" | "recommended" | "advanced";
};

type StackResult = {
  summary: string;
  stack: StackItem[];
  firstBuild: string;
  readMore: { label: string; href: string };
};

function buildStack(role: string, selectedGoals: string[], budget: string): StackResult {
  const isFree = budget === "$0/month (free only)";
  const isLow = budget === "$20–50/month";
  const needsProspecting = selectedGoals.includes("Automate outbound prospecting");
  const needsReporting = selectedGoals.includes("Build automated reporting");
  const needsOnboarding = selectedGoals.includes("Streamline client onboarding");
  const needsInbound = selectedGoals.includes("Qualify and route inbound leads");
  const needsContent = selectedGoals.includes("Automate content production");
  const needsSync = selectedGoals.includes("Sync data across tools automatically");
  const isSales = role === "Sales Team (2–10 reps)" || role === "Solo Founder";
  const isAgency = role === "Agency / Consultant";

  const stack: StackItem[] = [];

  // Automation layer — always first
  if (isFree) {
    stack.push({
      tool: "n8n (self-hosted)",
      role: "Core automation engine",
      why: "Free when self-hosted on a $5/month VPS. Handles complex multi-step workflows, has native AI nodes, and scales without per-task pricing. Best free option available.",
      cost: "Free (VPS ~$5/month)",
      tier: "essential",
    });
  } else {
    stack.push({
      tool: "Make.com",
      role: "Core automation engine",
      why: "Best visual workflow builder for teams. Faster to set up than n8n, generous free tier, and the Starter plan at $9/month covers most early workflows. Upgrade to n8n later if you need more control.",
      cost: "Free–$9/month",
      tier: "essential",
    });
  }

  // Data layer
  stack.push({
    tool: "Airtable",
    role: "Structured data layer",
    why: "Acts as your automation database — stores enriched leads, client records, and workflow outputs in a format both humans and automations can read and write. Free tier handles most solo/small team needs.",
    cost: "Free–$20/month",
    tier: "essential",
  });

  // Prospecting layer
  if (needsProspecting && !isFree) {
    stack.push({
      tool: "Apollo.io",
      role: "Lead data and prospecting",
      why: "Best value data source for outbound. Free tier gives 50 exports/month which is enough to start. Connects natively to Make and n8n for automated list building and CRM enrichment.",
      cost: "Free–$49/month",
      tier: "recommended",
    });
  }

  if (needsProspecting && isSales && !isFree && !isLow) {
    stack.push({
      tool: "Clay",
      role: "AI-powered lead enrichment",
      why: "Combines 50+ data sources to auto-enrich leads before your reps touch them. Integrates with n8n and Make via webhook. The best tool for building automated research workflows.",
      cost: "$149+/month",
      tier: "advanced",
    });
  }

  // CRM
  if (isSales || needsInbound) {
    stack.push({
      tool: "HubSpot CRM",
      role: "CRM and pipeline tracking",
      why: "Free CRM that connects natively to Make and n8n. Handles contact management, deal tracking, and inbound lead routing without needing a paid plan for most small teams.",
      cost: "Free",
      tier: "essential",
    });
  }

  // Reporting
  if (needsReporting) {
    stack.push({
      tool: "Notion",
      role: "Internal knowledge and reporting hub",
      why: "Automations write summaries, reports, and data outputs directly into Notion pages via API. Your team reads from Notion — your automations write to it. No manual compilation.",
      cost: "Free–$10/month",
      tier: "recommended",
    });
  }

  // Content
  if (needsContent && !isFree) {
    stack.push({
      tool: "OpenAI API",
      role: "AI text generation for content workflows",
      why: "Connect via Make or n8n to generate first drafts, summaries, subject lines, and follow-up emails at scale. Pay-per-use pricing means low cost until volume scales.",
      cost: "~$5–20/month",
      tier: "recommended",
    });
  }

  // Onboarding / scheduling
  if (needsOnboarding || isAgency) {
    stack.push({
      tool: "Calendly",
      role: "Automated scheduling and onboarding triggers",
      why: "When a client books, Calendly fires a webhook into Make or n8n — triggering automated onboarding sequences, CRM updates, and intake form assignments without manual work.",
      cost: "Free–$12/month",
      tier: "recommended",
    });
  }

  // Sync
  if (needsSync) {
    stack.push({
      tool: "Google Sheets",
      role: "Universal data connector",
      why: "Every tool connects to Google Sheets. Use it as a lightweight sync layer between apps that do not have direct integrations. Make and n8n both read and write to Sheets natively.",
      cost: "Free",
      tier: "essential",
    });
  }

  // Build summaries
  const summaries: Record<string, string> = {
    "Solo Founder": "A lean, low-cost stack built for one operator to run like a team of five. The automation layer connects your data and handles the repetitive work so you focus on decisions only you can make.",
    "Sales Team (2–10 reps)": "A sales-focused stack that eliminates manual research, CRM updates, and follow-up writing. Reps spend time selling — the system handles everything else.",
    "Marketing Team": "An automation stack that turns one piece of content into many, runs reporting automatically, and keeps your tools in sync without manual exports.",
    "Operations Lead": "A system-first stack for eliminating data entry, syncing tools, and delivering automated reports. Designed to give ops leverage without adding headcount.",
    "Recruiting Team": "A recruiting stack that automates candidate sourcing, outreach sequencing, and pipeline updates so your team spends time on conversations — not admin.",
    "Agency / Consultant": "A client-delivery stack that automates onboarding, reporting, and communication so you can serve more clients without proportionally more time.",
    "Product Team": "An ops stack for product teams — automated user feedback collection, reporting, and internal tool syncing so your team ships faster with better information.",
    "Customer Success Team": "A CS stack that automates health scoring, follow-ups, and renewal tracking so your team stays proactive on every account without manual checking.",
  };

  const firstBuilds: Record<string, string> = {
    "Solo Founder": "Start with an automated weekly summary: pull data from your CRM, Airtable, or any tool you track in, and have Make or n8n format and send it to your inbox every Monday. Takes 2–3 hours to build and immediately gives you back your Sunday evenings.",
    "Sales Team (2–10 reps)": "Build a lead research workflow first: when a new lead is added to your CRM, Make or n8n automatically pulls company data, writes a 3-bullet briefing, and updates the CRM record before the rep opens it. Saves 20–40 minutes of prep per call.",
    "Marketing Team": "Start with a content repurposing workflow: when a blog post is published, Make automatically generates social captions for LinkedIn and Twitter, creates a newsletter excerpt, and logs everything to your content calendar in Airtable.",
    "Operations Lead": "Build your first automated report: pull data from the tools your team uses most, have Make format it into a clean weekly summary, and send it automatically every Friday. You will never compile a manual report again.",
    "Recruiting Team": "Start with an inbound application router: when a form is submitted, n8n scores the application against your ICP criteria, routes qualified candidates to a Notion board, and sends an automated acknowledgment. Zero manual triage.",
    "Agency / Consultant": "Build an automated client onboarding sequence first: when Calendly fires a booking webhook, n8n creates the client record in Airtable, sends the intake form, creates the project folder, and notifies your team in Slack. All in under 10 seconds.",
    "Product Team": "Start with automated user feedback aggregation: pull NPS responses, support tickets, and app reviews into a single Airtable base daily via Make. Tag them by theme automatically. Your team reads a structured digest instead of raw noise.",
    "Customer Success Team": "Build a health score alert workflow: when a customer metric drops below a threshold in your CRM or product analytics, n8n automatically creates a follow-up task, drafts a check-in email, and notifies the account owner in Slack.",
  };

  const readMoreLinks: Record<string, { label: string; href: string }> = {
    "Solo Founder": { label: "Read: AI Automation Stack for Operators →", href: "/blog/ai-automation-stack-operators-2025" },
    "Sales Team (2–10 reps)": { label: "Read: AI Automation for Sales Professionals →", href: "/blog/ai-automation-for-sales-professionals-a-practical-guide" },
    "Marketing Team": { label: "Read: AI Productivity Systems for Small Teams →", href: "/blog/ai-productivity-systems-for-small-teams" },
    "Operations Lead": { label: "Read: From Manual Tasks to Autonomous Systems →", href: "/blog/manual-tasks-to-autonomous-systems" },
    "Recruiting Team": { label: "Read: AI Workflows That Replace Entire Hiring Categories →", href: "/blog/ai-workflows-replace-hiring-roles" },
    "Agency / Consultant": { label: "Read: Best No-Code AI Tools for Operators →", href: "/blog/best-no-code-ai-tools-for-operators-2026" },
    "Product Team": { label: "Read: Building Internal AI Tools for Small Teams →", href: "/blog/building-internal-ai-tools" },
    "Customer Success Team": { label: "Read: Designing AI Workflows That Actually Ship →", href: "/blog/designing-ai-workflows-that-actually-ship" },
  };

  return {
    summary: summaries[role] ?? "A focused automation stack matched to your role and goals. Start with the essential tier — get that working before adding recommended tools.",
    stack,
    firstBuild: firstBuilds[role] ?? "Start with the highest time-cost manual task you do every week. Build one automation that handles it end-to-end before touching anything else.",
    readMore: readMoreLinks[role] ?? { label: "Read the Automation Audit Guide →", href: "/blog/how-to-audit-your-workflow-for-ai-automation" },
  };
}

const tierStyles: Record<string, string> = {
  essential: "bg-[#0F172A] text-white",
  recommended: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  advanced: "bg-gray-100 text-gray-500 border border-gray-200/50",
};

export default function StackBuilderClient() {
  const [role, setRole] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [result, setResult] = useState<StackResult | null>(null);

  function toggleGoal(goal: string) {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal].slice(0, 4)
    );
  }

  function handleBuild() {
    if (!role || selectedGoals.length < 1 || !budget) return;
    setResult(buildStack(role, selectedGoals, budget));
  }

  const canBuild = role && selectedGoals.length >= 1 && budget;

  return (
    <div className="relative w-full overflow-hidden pb-32">
      <section className="pt-32 lg:pt-40 pb-12 px-6 max-w-4xl mx-auto w-full relative z-10">
        <div className="mb-8 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50">
          <span className="flex h-2 w-2 rounded-full bg-[#0B2545] mr-2 opacity-80"></span>
          Free tool · instant result · no sign-up required
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
          Automation Stack Recommender
        </h1>
        <p className="text-xl max-w-2xl text-gray-600 font-medium leading-relaxed">
          Select your role, goals, and budget. Get a specific stack recommendation with justification for each tool — built for your exact situation.
        </p>
      </section>

      <section className="pb-12 px-6 max-w-4xl mx-auto w-full relative z-10">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-8 md:p-10 flex flex-col gap-8">

          <div>
            <label className="block text-[#0F172A] font-bold text-sm uppercase tracking-wider mb-3">Your role</label>
            <div className="flex flex-wrap gap-2">
              {roles.map((r) => (
                <button key={r} onClick={() => setRole(r)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${role === r ? "bg-[#0F172A] border-[#0F172A] text-white" : "bg-[#F8FAFC] border-gray-200 text-gray-600 hover:border-gray-400"}`}>
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[#0F172A] font-bold text-sm uppercase tracking-wider mb-1">
              Your main goals <span className="font-normal text-gray-400 normal-case tracking-normal">(pick 1–4)</span>
            </label>
            <p className="text-xs text-gray-400 mb-3">{selectedGoals.length}/4 selected</p>
            <div className="flex flex-wrap gap-2">
              {goals.map((g) => (
                <button key={g} onClick={() => toggleGoal(g)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${selectedGoals.includes(g) ? "bg-[#0F172A] border-[#0F172A] text-white" : "bg-[#F8FAFC] border-gray-200 text-gray-600 hover:border-gray-400"}`}>
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[#0F172A] font-bold text-sm uppercase tracking-wider mb-3">Monthly budget for tools</label>
            <div className="flex flex-wrap gap-2">
              {budgets.map((b) => (
                <button key={b} onClick={() => setBudget(b)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${budget === b ? "bg-[#0F172A] border-[#0F172A] text-white" : "bg-[#F8FAFC] border-gray-200 text-gray-600 hover:border-gray-400"}`}>
                  {b}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleBuild}
            disabled={!canBuild}
            className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-900 transition-colors duration-200 ease-out min-h-[44px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] disabled:opacity-30 disabled:cursor-not-allowed w-full sm:w-auto"
          >
            Build My Stack →
          </button>
        </div>
      </section>

      {result && (
        <section className="pb-12 px-6 max-w-4xl mx-auto w-full relative z-10 flex flex-col gap-6">
          <div className="bg-[#0F172A] rounded-2xl p-8 text-white">
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">Stack Summary</p>
            <p className="text-white/80 leading-relaxed">{result.summary}</p>
          </div>

          <div className="flex flex-col gap-4">
            {result.stack.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-base font-bold text-[#0F172A]">{item.tool}</h3>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tierStyles[item.tier]}`}>
                      {item.tier}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{item.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.why}</p>
                </div>
                <div className="shrink-0 text-sm font-semibold text-[#0B2545] bg-[#F8FAFC] border border-gray-200/50 rounded-full px-4 py-2 whitespace-nowrap self-start">
                  {item.cost}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-8">
            <h3 className="text-base font-bold text-[#0F172A] mb-3">Build this first</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{result.firstBuild}</p>
            <Link
              href={result.readMore.href}
              className="text-sm font-semibold text-[#0B2545] hover:underline underline-offset-4 transition-colors"
            >
              {result.readMore.label}
            </Link>
          </div>
        </section>
      )}

      <section className="pb-16 px-6 max-w-4xl mx-auto w-full relative z-10">
        <InlineOptIn />
      </section>
    </div>
  );
}
