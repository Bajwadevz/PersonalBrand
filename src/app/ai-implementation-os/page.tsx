import type { Metadata } from "next";
import { Check, BookOpen, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import KitEmbedForm from "@/components/KitEmbedForm";
import GlassPanel from "@/components/GlassPanel";
import { getDisplayedPrice, commercialConfig } from "@/lib/commercialConfig";

export const metadata: Metadata = {
  title: "AI Implementation OS for Small Business | 30-Day Practical Implementation",
  description:
    "Implement one useful AI workflow in 30 days—without hiring a developer or drowning in tools. Step-by-step small business system.",
  alternates: {
    canonical: "https://bajwaa.dev/ai-implementation-os",
  },
  openGraph: {
    title: "AI Implementation OS for Small Business | Bajwaa Dev",
    description:
      "Implement one useful AI workflow in 30 days—without hiring a developer or drowning in tools. Step-by-step small business system.",
    url: "https://bajwaa.dev/ai-implementation-os",
  },
  twitter: {
    title: "AI Implementation OS for Small Business | Bajwaa Dev",
    description:
      "Implement one useful AI workflow in 30 days—without hiring a developer or drowning in tools. Step-by-step small business system.",
  },
};

const curriculum = [
  {
    week: "Week 1",
    title: "Audit & Workflow Selection",
    items: [
      "Inventory repetitive manual operations & bottleneck tasks",
      "Score candidate workflows by frequency, value, variance, & risk",
      "Select one narrow high-impact implementation track",
      "Define measurable success metrics and workflow ownership",
    ],
  },
  {
    week: "Week 2",
    title: "System Design & Architecture",
    items: [
      "Document trigger, inputs, rules, AI task, action, & human fallback",
      "Select the simplest reliable tool stack (n8n/Make/Form/CRM)",
      "Set strict data privacy & access boundaries",
      "Create the comprehensive test case library",
    ],
  },
  {
    week: "Week 3",
    title: "Build & Safe Testing",
    items: [
      "Build the primary happy-path automation flow",
      "Apply production prompt design templates for extraction & classification",
      "Test normal, missing-data, duplicate, & failure cases",
      "Implement human review triggers for low-confidence outputs",
    ],
  },
  {
    week: "Week 4",
    title: "Deploy, Operate & Scale",
    items: [
      "Deploy workflow to real business environment",
      "Set up error logging & instant team failure notifications",
      "Produce one-page operational runbook for team handoff",
      "Measure initial 30-day ROI and plan next implementation",
    ],
  },
];

const includedAssets = [
  "AI Workflow Opportunity Scorecard & Selection Framework",
  "Current-State Workflow Mapping Worksheet",
  "ROI & Priority Calculator Template",
  "Tool-Selection Decision Tree (n8n vs Make vs Native Zapier)",
  "Trigger / Logic / AI / Action Architecture Canvas",
  "Production Prompt Design Templates (Classification, Extraction, Summarization)",
  "Data-Access & Privacy Protection Checklist",
  "Test-Case Library & Edge Case Matrix",
  "Human-Handoff Rules & Exception Alert Templates",
  "One-Page Workflow Operational Runbook Template",
  "30-Day Implementation Tracker",
  "6 Reference Workflow Blueprints (Lead Response, Inbox Triage, Estimate Follow-Up, Reviews, CRM Updates, Weekly Reports)",
];

const faqs = [
  {
    q: "Do I need coding experience to complete this?",
    a: "No. The system is designed for owner-operators and small team managers. We use visual automation tools (n8n, Make, Zapier, Webhooks) and structured prompt templates.",
  },
  {
    q: "How much time is required each week?",
    a: "Plan for 2 to 3 hours per week over 4 weeks to complete the audit, architecture, build, and operational launch.",
  },
  {
    q: "How does founding access pricing work?",
    a: "Founding access is priced at $100 (50% off the standard $200 list price) for early waitlist members before public release.",
  },
  {
    q: "What happens when Whop checkout is activated?",
    a: "Once sales open, waitlist members receive instant founding access checkout links via email, unlocking the full 30-day OS portal.",
  },
];

export default function AiImplementationOsPage() {
  const priceInfo = getDisplayedPrice("aiImplementationOs");

  const salesOpen = commercialConfig.whop.salesOpen;
  const whopUrl = commercialConfig.whop.productUrl;

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero */}
      <section className="relative section-shell w-full">
        <div className="container-shell max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest muted-copy">
            <BookOpen className="h-4 w-4 text-[var(--color-ocean)]" />
            <span>Founding Access Waitlist</span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.1] mb-6">
            Implement AI in your business—not just in another browser tab
          </h1>

          <p className="text-lg muted-copy max-w-2xl mx-auto mb-8 leading-relaxed">
            A practical 30-day system for small-business owners to select one valuable workflow, build the first version, test it safely, and put it into daily operation.
          </p>

          {/* Pricing Pill */}
          <div className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[rgba(45,106,143,0.08)] border border-[rgba(45,106,143,0.2)]">
            <span className="text-xs line-through text-gray-400 font-medium">{priceInfo.formattedStandard}</span>
            <span className="text-xl font-bold text-[var(--color-site-text)]">{priceInfo.formattedCurrent}</span>
            <span className="text-xs font-bold uppercase text-[var(--color-ocean)] bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-full shadow-sm">
              50% Founding Access
            </span>
          </div>

          {/* Call to Action Zone: Whop vs Waitlist Switch */}
          <div className="w-full max-w-md mx-auto flex flex-col gap-3 relative z-20">
            {salesOpen && whopUrl ? (
              <a
                href={whopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary pulse-glow min-h-[52px] text-base inline-flex items-center justify-center gap-2 w-full font-bold"
              >
                Get Founding Access for $100 <ArrowRight className="h-5 w-5" />
              </a>
            ) : (
              <div>
                <KitEmbedForm />
                <p className="mt-3 text-xs muted-copy">
                  Join the founding waitlist for early access at 50% off ($100). No spam.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Course Preview Card Mockup */}
      <section className="container-shell mb-24">
        <div className="w-full relative max-w-5xl mx-auto flex flex-col items-center perspective-1000">
          <GlassPanel className="absolute top-12 md:top-24 w-[90%] md:w-[85%] h-64 md:h-96 -z-10 bg-white/40 blur-[1px] opacity-60 scale-95 border-gray-200" />
          <GlassPanel className="absolute top-6 md:top-12 w-[95%] md:w-[92%] h-64 md:h-96 -z-5 bg-white/60 blur-[0.5px] opacity-80 scale-[0.98] border-gray-200" />

          <div className="w-full bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200/80 dark:border-slate-800 p-2 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50/80 dark:bg-slate-800/80 border-b border-gray-200 dark:border-slate-700 rounded-t-xl text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="font-mono text-gray-400">os.bajwaa.dev — 30-Day System</span>
              <span className="text-[10px] font-bold uppercase text-[var(--color-ocean)] bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded">
                Founding OS Portal
              </span>
            </div>

            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#F9FAFB] dark:bg-slate-950">
              <div className="space-y-2">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">OS Modules</div>
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-xs font-bold text-[var(--color-ocean)]">
                  1. Workflow Scorecard & Audit
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-xs text-gray-500">
                  2. System Canvas & Prompt Design
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-xs text-gray-500">
                  3. Edge-Case Test Library
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-xs text-gray-500">
                  4. Deployment & Operating Runbook
                </div>
              </div>

              <div className="md:col-span-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-6">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase block mb-1">Interactive Asset Preview</span>
                <h3 className="font-bold text-base mb-3">Workflow Selection Scorecard</h3>
                <p className="text-xs muted-copy leading-relaxed mb-4">
                  Score candidate processes by daily frequency, financial impact, operational variance, and failure risk before picking your 30-day implementation project.
                </p>
                <div className="grid grid-cols-2 gap-3 text-[11px] font-mono">
                  <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    Frequency: High (Daily)
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    Risk Score: Low (Human Review)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Implementation Gap */}
      <section className="container-shell mb-24">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-[var(--color-card-border)]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)] mb-2 block">
              THE SMALL BUSINESS AI GAP
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Why most business owners struggle to move beyond ChatGPT tabs
            </h2>
            <p className="text-sm muted-copy leading-relaxed">
              Research consistently shows business owners do not lack access to AI tools—they lack a clear implementation process for selecting the right workflow, connecting tools, testing edge cases, setting privacy rules, and training team members.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Week Curriculum */}
      <section className="container-shell mb-24">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)]">
            STEP-BY-STEP ROADMAP
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">Four-Week Implementation Curriculum</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {curriculum.map((week) => (
            <div key={week.week} className="glass-card rounded-2xl p-6 md:p-8">
              <span className="text-xs font-mono font-bold text-[var(--color-ocean)] bg-[rgba(45,106,143,0.1)] px-3 py-1 rounded-full">
                {week.week}
              </span>
              <h3 className="text-xl font-bold mt-3 mb-4">{week.title}</h3>
              <ul className="space-y-2 text-xs sm:text-sm muted-copy">
                {week.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <Check className="h-4 w-4 text-[var(--color-ocean)] mr-2 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Included Assets */}
      <section className="container-shell mb-24">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-[var(--color-card-border)]">
          <div className="mb-8 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)]">
              OPERATIONAL TOOLKIT
            </span>
            <h2 className="text-2xl font-bold mt-1">Included Worksheets, Templates & Blueprints</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {includedAssets.map((asset) => (
              <div key={asset} className="flex items-start text-xs sm:text-sm font-medium muted-copy p-3 rounded-xl bg-[rgba(17,17,17,0.02)] dark:bg-[rgba(255,255,255,0.02)] border border-[var(--color-site-border)]">
                <ShieldCheck className="h-4 w-4 text-[var(--color-ocean)] mr-2.5 mt-0.5 shrink-0" />
                <span>{asset}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-shell">
        <div className="container-shell max-w-4xl">
          <div className="mb-10 text-center">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(45,106,143,0.1)] mb-3">
              <HelpCircle className="h-5 w-5 text-[var(--color-ocean)]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">AI Implementation OS FAQ</h2>
          </div>
          <div className="grid gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card rounded-2xl p-6">
                <h3 className="text-base font-bold mb-2">{faq.q}</h3>
                <p className="text-sm muted-copy leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Waitlist / Whop CTA */}
      <section className="container-shell pb-20 text-center">
        <div className="glass-card rounded-3xl p-10 md:p-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to ship your first AI workflow?</h2>
          <p className="mt-3 mb-8 muted-copy max-w-xl">
            Join the founding waitlist to lock in 50% off founding access ($100) before public launch.
          </p>

          <div className="w-full max-w-md mx-auto">
            {salesOpen && whopUrl ? (
              <a
                href={whopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary pulse-glow min-h-[52px] text-base inline-flex items-center justify-center gap-2 w-full font-bold"
              >
                Get Founding Access for $100 <ArrowRight className="h-5 w-5" />
              </a>
            ) : (
              <KitEmbedForm />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
