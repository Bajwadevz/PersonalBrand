"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  Plus,
  Minus,
  Target,
  Quote,
} from "lucide-react";

const OUTCOMES = [
  { metric: "18%", label: "Average EBITDA improvement", context: "within 12 months of engagement" },
  { metric: "$40M+", label: "Cost structure re-engineered", context: "across active client portfolios" },
  { metric: "6 wks", label: "From diagnostic to roadmap", context: "not a 6-month discovery phase" },
];

const SERVICES = [
  {
    id: "growth",
    name: "Growth Strategy",
    outcome: "A prioritized path to your next stage of revenue — not a 90-slide deck.",
  },
  {
    id: "ops",
    name: "Operating Model Redesign",
    outcome: "Org structure and process rebuilt around how the business actually runs today.",
  },
  {
    id: "turnaround",
    name: "Performance Turnaround",
    outcome: "Margin and cash recovered fast, with the team that has to live with the changes.",
  },
  {
    id: "capital",
    name: "Capital & M&A Readiness",
    outcome: "The business made defensible and attractive before it goes to market or to the board.",
  },
];

const CASE_STUDIES = [
  {
    sector: "Industrial Services",
    challenge: "Flat revenue, margin compression across three regions.",
    result: "Re-segmented pricing and sales motion; margin up 6.2 points in two quarters.",
  },
  {
    sector: "B2B SaaS",
    challenge: "Series C board pressure on unit economics ahead of Series D.",
    result: "Restructured go-to-market cost base; CAC payback cut from 19 to 11 months.",
  },
  {
    sector: "Healthcare Services",
    challenge: "Post-acquisition integration stalled at 60%.",
    result: "Rebuilt integration roadmap; full synergy capture realized 4 months early.",
  },
];

const PROCESS = [
  { step: "Diagnose", body: "Two weeks, direct access to your data and your team — not a survey." },
  { step: "Prioritize", body: "A roadmap ranked by impact and effort, not a list of everything that's wrong." },
  { step: "Execute", body: "We stay embedded through implementation. Strategy work ends when results show up." },
  { step: "Transfer", body: "Your team owns the playbook when we leave — no dependency built in." },
];

const FAQS = [
  { q: "Do you only advise, or do you help execute?", a: "Both. Every engagement includes an execution phase alongside your team — we don't hand over a deck and disappear. Roughly 70% of our engagement time is spent in implementation, not diagnostics." },
  { q: "What size company do you typically work with?", a: "Primarily $10M–$500M in revenue, across growth-stage and established mid-market companies. We're selective about fit — we'll tell you directly in the first call if we're not the right partner." },
  { q: "How is the engagement structured commercially?", a: "A fixed-fee diagnostic phase, followed by a scoped implementation engagement with clear milestones. We do not bill open-ended hours." },
  { q: "Who on your team actually does the work?", a: "A senior partner leads every engagement and stays on it start to finish. You will not be handed to a team of first-year analysts." },
];

export default function ConsultingDemoPage() {
  const [activeService, setActiveService] = useState(SERVICES[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const current = SERVICES.find((s) => s.id === activeService) || SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#15181c] text-[#e7e9eb] font-sans selection:bg-[#a97d50] selection:text-[#15181c]">
      {/* Concept Demo Banner */}
      <div className="bg-amber-400 text-slate-950 px-4 py-2 text-center text-xs font-bold tracking-wide uppercase shadow-lg flex items-center justify-center gap-2 z-50 sticky top-0 border-b border-amber-500">
        <AlertTriangle className="h-4 w-4 shrink-0 text-slate-950" />
        <span>Concept demo by bajwaa.dev — not a real consulting firm</span>
        <Link href="/services/websites" className="underline ml-2 hover:text-slate-800 text-[11px] font-extrabold whitespace-nowrap">
          Build a site like this →
        </Link>
      </div>

      {/* Header */}
      <header className="border-b border-[#2a2f35] sticky top-8 z-40 px-6 py-4 bg-[#15181c]/95 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M4 22L11 8L15 16L19 4L26 22" stroke="#a97d50" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
            <span className="text-lg font-extrabold tracking-tight text-white">MERIDIAN</span>
          </div>
          <a href="#briefing" className="inline-flex items-center gap-2 bg-white text-[#15181c] px-5 py-2.5 text-xs font-bold uppercase tracking-wide hover:bg-[#e7e9eb] transition-colors">
            Request a Briefing
          </a>
        </div>
      </header>

      {/* Hero — statement + stat rail */}
      <section className="py-20 md:py-28 px-6 border-b border-[#2a2f35]">
        <div className="max-w-6xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#a97d50] font-bold mb-6 block">
            Executive Strategy &amp; Operating Partners
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight text-white mb-10 max-w-4xl text-balance">
            We fix what&apos;s actually broken — and stay until it&apos;s fixed.
          </h1>
          <p className="text-[#9aa1a8] text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            Meridian advises operators and boards on growth, margin, and readiness — with senior partners
            embedded through execution, not a diagnostic that ends at a slide deck.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#briefing" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#e7e9eb] text-[#15181c] px-8 py-4 text-sm font-bold uppercase tracking-wide transition-colors">
              Request a Strategic Briefing <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#cases" className="inline-flex items-center justify-center gap-2 border border-[#3a4048] text-[#e7e9eb] px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:border-[#a97d50]/60 transition-colors">
              Review Case Results
            </a>
          </div>

          <div className="grid sm:grid-cols-3 border-t border-[#2a2f35]">
            {OUTCOMES.map((o) => (
              <div key={o.label} className="py-8 sm:pr-8 border-b sm:border-b-0 sm:border-r border-[#2a2f35] last:border-r-0">
                <span className="text-3xl sm:text-4xl font-extrabold text-white block">{o.metric}</span>
                <span className="text-sm font-semibold text-[#e7e9eb] block mt-2">{o.label}</span>
                <span className="text-xs text-[#6b7178] block mt-1">{o.context}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services as outcomes — tab-driven */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full border-b border-[#2a2f35]">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-14">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#a97d50] font-bold mb-3 block">Where We Engage</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white max-w-xl">Four mandates. One standard of rigor.</h2>
          </div>
          <Target className="h-8 w-8 text-[#a97d50] hidden sm:block" />
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <div className="flex flex-col border-t border-[#2a2f35]">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveService(s.id)}
                className={`text-left py-5 border-b border-[#2a2f35] flex items-center justify-between gap-4 transition-colors ${
                  activeService === s.id ? "text-white" : "text-[#6b7178] hover:text-[#9aa1a8]"
                }`}
              >
                <span className="text-lg font-bold">{s.name}</span>
                <ArrowRight className={`h-4 w-4 shrink-0 transition-transform ${activeService === s.id ? "translate-x-1 text-[#a97d50]" : ""}`} />
              </button>
            ))}
          </div>

          <div className="bg-[#1c2025] border border-[#2a2f35] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#a97d50] font-bold block mb-3">Outcome, Not Deliverable</span>
              <p className="text-xl sm:text-2xl font-bold text-white leading-snug">{current.outcome}</p>
            </div>
            <a href="#briefing" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-3 transition-all self-start">
              Discuss this mandate <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="cases" className="py-24 px-6 max-w-6xl mx-auto w-full border-b border-[#2a2f35]">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#a97d50] font-bold mb-3 block">Case Results</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-14 max-w-xl">Representative engagements across sectors.</h2>

        <div className="space-y-px bg-[#2a2f35]">
          {CASE_STUDIES.map((c) => (
            <div key={c.sector} className="bg-[#15181c] p-6 sm:p-8 grid sm:grid-cols-[0.7fr_1.1fr_1.3fr] gap-4 sm:gap-8 items-start">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#a97d50]">{c.sector}</span>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#6b7178] font-semibold block mb-1">Challenge</span>
                <p className="text-sm text-[#9aa1a8]">{c.challenge}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#6b7178] font-semibold block mb-1">Result</span>
                <p className="text-sm text-white font-semibold flex items-start gap-1.5">
                  <TrendingUp className="h-4 w-4 text-[#a97d50] shrink-0 mt-0.5" /> {c.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full border-b border-[#2a2f35]">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#a97d50] font-bold mb-3 block">How We Engage</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-14 max-w-xl">Diagnostic to transfer, in one continuous engagement.</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2a2f35]">
          {PROCESS.map((p, i) => (
            <div key={p.step} className="bg-[#15181c] p-6">
              <span className="text-4xl font-extrabold text-[#2a2f35]">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-base font-bold text-white mt-3 mb-2">{p.step}</h3>
              <p className="text-xs text-[#9aa1a8] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Authority testimonial */}
      <section className="py-24 px-6 bg-[#1c2025] border-b border-[#2a2f35]">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="h-8 w-8 text-[#a97d50] mx-auto mb-6" />
          <p className="text-xl sm:text-2xl text-white leading-relaxed font-bold mb-8 text-balance">
            &ldquo;They didn&apos;t leave after the roadmap. Meridian sat with our ops team until the
            margin number actually moved — that&apos;s the difference from every firm before them.&rdquo;
          </p>
          <span className="text-xs uppercase tracking-[0.2em] text-[#6b7178] font-semibold">CEO, Industrial Services Group — $180M Revenue</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto w-full border-b border-[#2a2f35]">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#a97d50] font-bold mb-3 block">Before Engaging</span>
        <h2 className="text-3xl font-extrabold text-white mb-10">What boards and operators ask.</h2>

        <div>
          {FAQS.map((f, i) => (
            <div key={f.q} className="border-b border-[#2a2f35]">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
                <span className="text-sm sm:text-base font-bold text-white">{f.q}</span>
                {openFaq === i ? <Minus className="h-4 w-4 text-[#a97d50] shrink-0" /> : <Plus className="h-4 w-4 text-[#6b7178] shrink-0" />}
              </button>
              {openFaq === i && <p className="text-sm text-[#9aa1a8] leading-relaxed pb-6 max-w-2xl">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry */}
      <section id="briefing" className="py-24 px-6 max-w-3xl mx-auto w-full">
        <div className="border border-[#2a2f35] bg-[#1c2025] p-8 md:p-12">
          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#a97d50] font-bold mb-3 block">Executive Briefing</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Request a Strategic Briefing</h2>
            <p className="text-xs text-[#6b7178]">A senior partner reviews every request personally within 24 hours.</p>
          </div>

          {submitted ? (
            <div className="p-8 border border-[#a97d50]/30 text-center">
              <TrendingUp className="h-10 w-10 text-[#a97d50] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Briefing Request Received</h3>
              <p className="text-xs text-[#9aa1a8] mb-6 max-w-md mx-auto leading-relaxed">
                In a live deployment, this notifies the partner team immediately and schedules a same-week call.
              </p>
              <div className="p-4 border border-[#2a2f35] text-left">
                <p className="text-xs font-bold text-white mb-1">Want an authoritative, executive-grade site like this?</p>
                <Link href="/contact?offer=modern-lead-generation-website&demo=consulting" className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#a97d50] hover:underline">
                  Request a quote from bajwaa.dev <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#9aa1a8]">Full Name</label>
                  <input required type="text" placeholder="Morgan Webb" className="w-full px-4 py-3 bg-[#15181c] border border-[#2a2f35] text-sm text-white outline-none focus:border-[#a97d50]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#9aa1a8]">Company &amp; Title</label>
                  <input required type="text" placeholder="CEO, Acme Industrial" className="w-full px-4 py-3 bg-[#15181c] border border-[#2a2f35] text-sm text-white outline-none focus:border-[#a97d50]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#9aa1a8]">Mandate of Interest</label>
                  <select className="w-full px-4 py-3 bg-[#15181c] border border-[#2a2f35] text-sm text-white outline-none focus:border-[#a97d50]">
                    <option>Growth Strategy</option>
                    <option>Operating Model Redesign</option>
                    <option>Performance Turnaround</option>
                    <option>Capital &amp; M&amp;A Readiness</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#9aa1a8]">Approximate Revenue</label>
                  <select className="w-full px-4 py-3 bg-[#15181c] border border-[#2a2f35] text-sm text-white outline-none focus:border-[#a97d50]">
                    <option>Under $10M</option>
                    <option>$10M – $50M</option>
                    <option>$50M – $500M</option>
                    <option>$500M+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-[#9aa1a8]">What outcome are you trying to reach?</label>
                <textarea required rows={4} placeholder="Briefly describe the situation and the result you need..." className="w-full px-4 py-3 bg-[#15181c] border border-[#2a2f35] text-sm text-white outline-none focus:border-[#a97d50] resize-none" />
              </div>
              <button type="submit" className="w-full bg-white hover:bg-[#e7e9eb] text-[#15181c] py-4 text-sm font-bold uppercase tracking-wide transition-colors">
                Submit Briefing Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-[#6b7178] text-xs py-10 px-6 mt-auto border-t border-[#2a2f35]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-[#9aa1a8]">Meridian Strategy Partners — Fictional Concept Demo</p>
            <p className="text-[11px] text-[#4a5058]">Designed &amp; engineered by bajwaa.dev to demonstrate executive advisory positioning.</p>
          </div>
          <Link href="/services/websites" className="text-[#a97d50] hover:underline font-bold text-xs">
            Built by bajwaa.dev — Explore Website Services <ArrowUpRight className="inline h-3.5 w-3.5" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
