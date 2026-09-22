import Link from "next/link";
import { Metadata } from "next";
import { Workflow, Phone, FileSpreadsheet, Bot, Repeat, Sparkles, ShieldAlert, Check } from "lucide-react";
import OfferCard from "@/components/OfferCard";
import { StackSlider } from "@/components/stack-slider";

export const metadata: Metadata = {
  title: "Focused Workflow Automations for Small Business | Bajwaa Dev",
  description:
    "Fixed-scope lead response, missed-call text-back, CRM sync, AI qualification, and operations workflow builds.",
  alternates: {
    canonical: "https://bajwaa.dev/services/automations",
  },
  openGraph: {
    title: "Focused Workflow Automations for Small Business | Bajwaa Dev",
    description:
      "Fixed-scope lead response, missed-call text-back, CRM sync, AI qualification, and operations workflow builds.",
    url: "https://bajwaa.dev/services/automations",
  },
};

const problemLeaks = [
  {
    title: "Missed Calls & After-Hours Inquiries",
    desc: "Callers hang up and call the next contractor if they get voicemail.",
    Icon: Phone,
    offerKey: "missedCallTextBack" as const,
  },
  {
    title: "Form-to-CRM Delays",
    desc: "Form leads sit in email for hours before a rep enters them in CRM.",
    Icon: FileSpreadsheet,
    offerKey: "formToCrmFastLane" as const,
  },
  {
    title: "Unqualified Lead Time Waste",
    desc: "Owner spends hours talking to tire-kickers outside the service area.",
    Icon: Bot,
    offerKey: "aiLeadQualificationRouting" as const,
  },
  {
    title: "Prospect Follow-Up Decay",
    desc: "Quotes sent but never followed up on due to busy job schedules.",
    Icon: Repeat,
    offerKey: "automatedFollowUpRescue" as const,
  },
  {
    title: "Cluttered CRM & Broken Triggers",
    desc: "Duplicate contacts, broken webhooks, and messy deal stages.",
    Icon: Sparkles,
    offerKey: "crmWorkflowCleanup" as const,
  },
  {
    title: "Manual Repetitive Operations",
    desc: "Re-keying job data between forms, spreadsheets, calendar, and billing.",
    Icon: Workflow,
    offerKey: "operationsWorkflowBuild" as const,
  },
];

const faqs = [
  {
    q: "Do you use AI for every single workflow?",
    a: "No. We prioritize deterministic, reliable logic (webhooks, simple field mapping, standard triggers) whenever possible. AI is introduced specifically for tasks requiring classification, messy text extraction, lead scoring, or constrained draft generation.",
  },
  {
    q: "What happens when an automation fails?",
    a: "Every build includes error logging, instant failure alerts to Slack or email, and a human fallback path so no lead is silently dropped.",
  },
  {
    q: "How long does an automation build take?",
    a: "Focused automation packages take between 3 and 15 business days depending on the number of connected tools and logic complexity.",
  },
];

export default function AutomationServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="section-shell">
        <div className="container-shell max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest muted-copy">
            FOCUSED AUTOMATION BUILDS
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.1]">
            Fix the workflow that keeps leaking time or leads
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg muted-copy leading-relaxed">
            Start with one clear trigger, one measurable outcome, and the simplest reliable implementation. Every build includes testing, visibility, documentation, and a human fallback where judgment matters.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?offer=missed-call-text-back"
              className="btn-primary pulse-glow min-h-[48px] px-8 text-sm inline-flex items-center justify-center w-full sm:w-auto"
            >
              Request an automation scope
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Leak Selector Grid */}
      <section className="container-shell mb-24">
        <div className="mb-8 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)]">
            DIAGNOSE THE LEAK
          </span>
          <h2 className="text-2xl font-bold mt-1">Which workflow is slowing down your business?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemLeaks.map((item) => (
            <div key={item.title} className="glass-card card-hover rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(45,106,143,0.1)] mb-4 text-[var(--color-ocean)]">
                  <item.Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p className="text-xs muted-copy leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link
                href={`/contact?offer=${item.offerKey}`}
                className="text-xs font-bold text-[var(--color-ocean)] hover:underline inline-flex items-center gap-1"
              >
                Fix this bottleneck →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 6 Automation Offers */}
      <section className="container-shell mb-24">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)]">
            FIXED-SCOPE OFFERS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">Focused Automation Sub-Offers</h2>
          <p className="text-sm muted-copy mt-2">Prices reflect 50% early-customer launch rates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <OfferCard offerKey="missedCallTextBack" compact={true} />
          <OfferCard offerKey="formToCrmFastLane" compact={true} />
          <OfferCard offerKey="aiLeadQualificationRouting" compact={true} />
          <OfferCard offerKey="automatedFollowUpRescue" compact={true} />
          <OfferCard offerKey="crmWorkflowCleanup" compact={true} />
          <OfferCard offerKey="operationsWorkflowBuild" compact={true} />
        </div>
      </section>

      {/* Workflow Architecture Diagram */}
      <section className="container-shell mb-24">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-[var(--color-card-border)] text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)] mb-2 block">
            HOW WE BUILD RELIABLE AUTOMATION
          </span>
          <h2 className="text-2xl font-bold mb-8">System Architecture Pattern</h2>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-medium">
            <div className="px-4 py-3 rounded-xl bg-[rgba(45,106,143,0.08)] border border-[rgba(45,106,143,0.2)] text-[var(--color-site-text)]">
              1. Event Trigger (Call / Form / Webhook)
            </div>
            <span className="text-gray-400 font-bold">→</span>
            <div className="px-4 py-3 rounded-xl bg-[rgba(45,106,143,0.08)] border border-[rgba(45,106,143,0.2)] text-[var(--color-site-text)]">
              2. Deterministic Rules (Filter & Validate)
            </div>
            <span className="text-gray-400 font-bold">→</span>
            <div className="px-4 py-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300">
              3. Constrained AI Task (Classify / Extract)
            </div>
            <span className="text-gray-400 font-bold">→</span>
            <div className="px-4 py-3 rounded-xl bg-[rgba(45,106,143,0.08)] border border-[rgba(45,106,143,0.2)] text-[var(--color-site-text)]">
              4. System Action (CRM / SMS / Calendar)
            </div>
            <span className="text-gray-400 font-bold">→</span>
            <div className="px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300">
              5. Log & Human Fallback Alert
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <StackSlider />

      {/* Scope Boundaries */}
      <section className="container-shell py-16">
        <div className="glass-card rounded-2xl p-8 border border-[var(--color-card-border)]">
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="h-6 w-6 text-[var(--color-ocean)]" />
            <h2 className="text-xl font-bold">What Every Automation Build Includes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm muted-copy">
            <div className="flex items-start">
              <Check className="h-4 w-4 text-[var(--color-ocean)] mr-2 mt-0.5 shrink-0" />
              <span>Defined process map & happy/failure path handling</span>
            </div>
            <div className="flex items-start">
              <Check className="h-4 w-4 text-[var(--color-ocean)] mr-2 mt-0.5 shrink-0" />
              <span>Testing with real or production-like sanitized data</span>
            </div>
            <div className="flex items-start">
              <Check className="h-4 w-4 text-[var(--color-ocean)] mr-2 mt-0.5 shrink-0" />
              <span>Traceable logging sheet or database record</span>
            </div>
            <div className="flex items-start">
              <Check className="h-4 w-4 text-[var(--color-ocean)] mr-2 mt-0.5 shrink-0" />
              <span>Instant failure alert notifications</span>
            </div>
            <div className="flex items-start">
              <Check className="h-4 w-4 text-[var(--color-ocean)] mr-2 mt-0.5 shrink-0" />
              <span>Human review fallback for uncertain conditions</span>
            </div>
            <div className="flex items-start">
              <Check className="h-4 w-4 text-[var(--color-ocean)] mr-2 mt-0.5 shrink-0" />
              <span>Loom walkthrough, one-page runbook & 14 days support</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-shell">
        <div className="container-shell max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Automation Build FAQ</h2>
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

      {/* Final CTA */}
      <section className="container-shell pb-20 text-center">
        <div className="glass-card rounded-3xl p-10 md:p-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to automate your bottleneck?</h2>
          <p className="mt-3 mb-8 muted-copy max-w-xl">
            Tell us about your current tools and process. We&apos;ll propose a clear, fixed-scope build within 24 hours.
          </p>
          <Link
            href="/contact?offer=missed-call-text-back"
            className="btn-primary min-h-[52px] px-10 text-base pulse-glow inline-flex items-center justify-center"
          >
            Request an Automation Scope
          </Link>
        </div>
      </section>
    </div>
  );
}
