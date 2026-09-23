"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  ShieldCheck,
  Quote,
} from "lucide-react";

const PRACTICE_AREAS = [
  {
    id: "corporate",
    name: "Corporate & M&A",
    outcome: "Deals closed without surprises in diligence.",
    detail:
      "Structuring, negotiation, and closing for founders and acquirers who cannot afford ambiguity in the terms.",
  },
  {
    id: "litigation",
    name: "Commercial Litigation",
    outcome: "Disputes resolved before they become headlines.",
    detail:
      "Pre-litigation strategy, arbitration, and trial counsel for matters where reputation is as much at stake as damages.",
  },
  {
    id: "estates",
    name: "Estates & Wealth Transfer",
    outcome: "Wealth transferred on your terms, not the court's.",
    detail:
      "Trust structuring and succession planning for families and principals with complex, multi-generational holdings.",
  },
  {
    id: "regulatory",
    name: "Regulatory & Compliance",
    outcome: "Positioned ahead of scrutiny, not reacting to it.",
    detail:
      "Standing counsel for regulated industries navigating examinations, filings, and enforcement exposure.",
  },
];

const MATTERS = [
  {
    tag: "Corporate",
    title: "$140M cross-border acquisition",
    result: "Closed 11 days ahead of schedule with zero post-close disputes.",
  },
  {
    tag: "Litigation",
    title: "Contract dispute, manufacturing sector",
    result: "Resolved via arbitration; client avoided public trial exposure entirely.",
  },
  {
    tag: "Estates",
    title: "Three-generation family holding structure",
    result: "Restructured to reduce transfer tax exposure by low eight figures.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Confidential intake",
    body: "A partner — not an associate — reviews your matter directly and gives you an honest read within 48 hours.",
  },
  {
    step: "02",
    title: "Strategy before scope",
    body: "We define the outcome you need and the risk you're carrying before a single hour is billed.",
  },
  {
    step: "03",
    title: "Direct partner access",
    body: "Your matter is led by the partner you retained, throughout — not handed off after signing.",
  },
  {
    step: "04",
    title: "Resolution, documented",
    body: "Every matter closes with a clear record of outcome, exposure addressed, and next-step recommendations.",
  },
];

const FAQS = [
  {
    q: "Do you take on matters outside your four practice areas?",
    a: "Selectively. If a matter falls outside corporate, litigation, estates, or regulatory work, we'll tell you plainly in the first call and refer you to counsel we trust — rather than take a fee for a matter we're not the right fit for.",
  },
  {
    q: "How is billing structured?",
    a: "Most engagements are scoped as a fixed fee for a defined phase of work, agreed upfront. Litigation matters that require open-ended hours are billed transparently with monthly detail, not lump summaries.",
  },
  {
    q: "Will a partner actually handle my matter?",
    a: "Yes. Every engagement is led by the partner you speak with in the first call. Associates support the work; they do not run it.",
  },
  {
    q: "How quickly can you start?",
    a: "Time-sensitive matters — active litigation, closing deadlines, regulatory notices — are reviewed within 24 hours of intake. Standard matters begin within one week of engagement.",
  },
];

export default function LawFirmDemoPage() {
  const [activePractice, setActivePractice] = useState(PRACTICE_AREAS[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const current = PRACTICE_AREAS.find((p) => p.id === activePractice) || PRACTICE_AREAS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0b09] text-[#ece6d9] font-serif selection:bg-[#b8973e] selection:text-[#0c0b09]">
      {/* Concept Demo Disclosure Banner */}
      <div className="bg-amber-400 text-slate-950 px-4 py-2 text-center text-xs font-bold tracking-wide uppercase shadow-lg flex items-center justify-center gap-2 z-50 sticky top-0 border-b border-amber-500 font-sans">
        <AlertTriangle className="h-4 w-4 shrink-0 text-slate-950" />
        <span>Concept demo by bajwaa.dev — not a real law firm</span>
        <Link href="/services/websites" className="underline ml-2 hover:text-slate-800 text-[11px] font-extrabold whitespace-nowrap">
          Build a site like this →
        </Link>
      </div>

      {/* Header */}
      <header className="border-b border-[#2a2823] sticky top-8 z-40 px-6 py-5 bg-[#0c0b09]/95 backdrop-blur-xl font-sans">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className="shrink-0">
              <rect x="1" y="1" width="32" height="32" rx="2" stroke="#b8973e" strokeWidth="1" />
              <path d="M17 8L10 14V26H24V14L17 8Z" stroke="#b8973e" strokeWidth="1.2" />
              <path d="M13 18H21M13 22H21" stroke="#b8973e" strokeWidth="1" />
            </svg>
            <div>
              <span className="text-lg tracking-[0.08em] font-bold text-[#f5f1e8]">ASHFORD &amp; COLE</span>
              <span className="text-[9px] block text-[#8a8172] uppercase tracking-[0.25em] font-semibold mt-0.5">
                Attorneys &amp; Counselors at Law
              </span>
            </div>
          </div>
          <a
            href="#inquiry"
            className="hidden sm:inline-flex items-center gap-2 border border-[#b8973e]/50 text-[#e9d9ad] px-5 py-2.5 text-xs font-semibold tracking-wide uppercase hover:bg-[#b8973e] hover:text-[#0c0b09] transition-colors"
          >
            Request a Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-24 md:py-36 px-6 border-b border-[#2a2823]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.3fr_0.7fr] gap-16 items-end">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#b8973e] font-bold mb-6 block">
              Est. 1994 — Corporate &amp; Litigation Counsel
            </span>
            <h1 className="text-4xl sm:text-6xl leading-[1.12] font-bold text-[#f5f1e8] mb-8 text-balance">
              Counsel for matters where the outcome cannot be left to chance.
            </h1>
            <p className="font-sans text-[#c3bba9] text-base sm:text-lg max-w-xl leading-relaxed">
              Ashford &amp; Cole advises founders, principals, and institutions on the matters that define
              a company or a family&apos;s future — led personally by the partner you retain, from intake to resolution.
            </p>
          </div>
          <div className="font-sans border-l border-[#2a2823] pl-8 space-y-6">
            <div>
              <span className="block text-3xl font-bold text-[#b8973e]">27</span>
              <span className="text-xs text-[#8a8172] uppercase tracking-wider">Years in practice</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-[#b8973e]">$1.8B+</span>
              <span className="text-xs text-[#8a8172] uppercase tracking-wider">Transaction value advised</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-[#b8973e]">4</span>
              <span className="text-xs text-[#8a8172] uppercase tracking-wider">Practice areas, no dilution</span>
            </div>
          </div>
        </div>

        <div className="font-sans max-w-5xl mx-auto mt-14 flex flex-col sm:flex-row gap-4">
          <a
            href="#inquiry"
            className="inline-flex items-center justify-center gap-2 bg-[#b8973e] text-[#0c0b09] px-8 py-4 text-sm font-bold uppercase tracking-wide hover:bg-[#cbab52] transition-colors"
          >
            Request a Confidential Consultation <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#matters"
            className="inline-flex items-center justify-center gap-2 border border-[#3a372f] text-[#e9e2d3] px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:border-[#b8973e]/60 transition-colors"
          >
            Review Recent Matters
          </a>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-b border-[#2a2823] py-8 px-6 font-sans">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-[#6f6858] text-xs uppercase tracking-[0.2em] font-semibold">
          <span>Martindale-Hubbell AV Preeminent®</span>
          <span className="hidden sm:inline text-[#3a372f]">•</span>
          <span>State Bar Certified Specialist</span>
          <span className="hidden sm:inline text-[#3a372f]">•</span>
          <span>Chambers-Ranked Practice</span>
          <span className="hidden sm:inline text-[#3a372f]">•</span>
          <span>Best Lawyers® 2025</span>
        </div>
      </section>

      {/* Practice Areas — editorial list w/ live detail panel */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full border-b border-[#2a2823]">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-14">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#b8973e] font-bold mb-4 block">
              Practice Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f1e8] mb-6 leading-tight">
              Four disciplines. No dilution of attention.
            </h2>
            <p className="font-sans text-[#8a8172] text-sm leading-relaxed max-w-md">
              We deliberately limit our practice so that every matter receives partner-level judgment, not
              associate-level triage.
            </p>
          </div>

          <div>
            {PRACTICE_AREAS.map((area) => (
              <button
                key={area.id}
                onClick={() => setActivePractice(area.id)}
                className={`font-sans w-full text-left py-5 border-b border-[#2a2823] flex items-center justify-between gap-6 transition-colors group ${
                  activePractice === area.id ? "text-[#f5f1e8]" : "text-[#5f594d] hover:text-[#a89f8c]"
                }`}
              >
                <span className="text-lg sm:text-xl font-semibold">{area.name}</span>
                <Plus className={`h-4 w-4 shrink-0 transition-transform ${activePractice === area.id ? "rotate-45 text-[#b8973e]" : ""}`} />
              </button>
            ))}

            <div className="font-sans mt-8 border border-[#2a2823] p-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#b8973e] font-bold block mb-2">Outcome</span>
              <p className="text-[#f5f1e8] font-semibold mb-3">{current.outcome}</p>
              <p className="text-sm text-[#a89f8c] leading-relaxed">{current.detail}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Recent Matters */}
      <section id="matters" className="py-24 px-6 max-w-6xl mx-auto w-full border-b border-[#2a2823]">
        <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#b8973e] font-bold mb-4 block">
          Recent Matters
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f1e8] mb-14 max-w-xl leading-tight">
          Representative results, discussed under privilege in your consultation.
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-[#2a2823]">
          {MATTERS.map((m) => (
            <div key={m.title} className="bg-[#0c0b09] p-8 flex flex-col justify-between min-h-[220px]">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#b8973e] font-bold">{m.tag}</span>
              <div>
                <h3 className="text-lg font-semibold text-[#f5f1e8] mt-4 mb-3 leading-snug">{m.title}</h3>
                <p className="font-sans text-sm text-[#a89f8c] leading-relaxed">{m.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full border-b border-[#2a2823]">
        <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#b8973e] font-bold mb-4 block">
          How Engagements Begin
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f1e8] mb-14 max-w-xl leading-tight">
          A deliberate process, from first call to resolution.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {PROCESS.map((p) => (
            <div key={p.step} className="border-t border-[#b8973e]/40 pt-5">
              <span className="font-sans text-3xl font-bold text-[#3a372f]">{p.step}</span>
              <h3 className="text-base font-semibold text-[#f5f1e8] mt-3 mb-2">{p.title}</h3>
              <p className="font-sans text-xs text-[#8a8172] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Authority / Testimonial */}
      <section className="py-24 px-6 border-b border-[#2a2823] bg-[#111009]">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="h-8 w-8 text-[#b8973e] mx-auto mb-6" />
          <p className="text-xl sm:text-2xl text-[#f5f1e8] leading-relaxed font-semibold mb-8 text-balance">
            &ldquo;They gave us a clear position within a week and closed the matter without it ever
            becoming public. That discretion is worth more than the invoice.&rdquo;
          </p>
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#8a8172] font-semibold">
            Managing Partner, Private Equity Firm — Client since 2019
          </span>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto w-full border-b border-[#2a2823]">
        <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#b8973e] font-bold mb-4 block">
          Questions Before Retaining Counsel
        </span>
        <h2 className="text-3xl font-bold text-[#f5f1e8] mb-10">What clients ask first.</h2>

        <div className="font-sans space-y-0">
          {FAQS.map((f, i) => (
            <div key={f.q} className="border-b border-[#2a2823]">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-sm sm:text-base font-semibold text-[#f5f1e8]">{f.q}</span>
                {openFaq === i ? (
                  <Minus className="h-4 w-4 text-[#b8973e] shrink-0" />
                ) : (
                  <Plus className="h-4 w-4 text-[#8a8172] shrink-0" />
                )}
              </button>
              {openFaq === i && (
                <p className="text-sm text-[#a89f8c] leading-relaxed pb-6 max-w-2xl">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry */}
      <section id="inquiry" className="py-24 px-6 max-w-3xl mx-auto w-full">
        <div className="border border-[#2a2823] p-8 md:p-12">
          <div className="mb-8">
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#b8973e] font-bold mb-3 block">
              Confidential Intake
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f1e8] mb-2">Request a Consultation</h2>
            <p className="font-sans text-xs text-[#8a8172] flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-[#b8973e]" /> Reviewed personally by a partner. Protected by
              attorney-client confidentiality from first contact.
            </p>
          </div>

          {submitted ? (
            <div className="font-sans p-8 border border-[#b8973e]/40 text-center">
              <ShieldCheck className="h-10 w-10 text-[#b8973e] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#f5f1e8] mb-2">Inquiry Received</h3>
              <p className="text-xs text-[#a89f8c] mb-6 max-w-md mx-auto leading-relaxed">
                In a live deployment, this triggers an immediate confidential notification to the reviewing partner
                and a same-day acknowledgment to the client.
              </p>
              <div className="p-4 border border-[#2a2823] text-left">
                <p className="text-xs font-bold text-[#f5f1e8] mb-1">
                  Want a credibility-first website like this for your firm?
                </p>
                <Link
                  href="/contact?offer=modern-lead-generation-website&demo=law-firm"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#b8973e] hover:underline"
                >
                  Request a quote from bajwaa.dev <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="font-sans space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#c3bba9]">Full Name</label>
                  <input required type="text" placeholder="Alexandra Reyes" className="w-full px-4 py-3 bg-transparent border border-[#3a372f] text-sm text-[#f5f1e8] outline-none focus:border-[#b8973e]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#c3bba9]">Email</label>
                  <input required type="email" placeholder="you@company.com" className="w-full px-4 py-3 bg-transparent border border-[#3a372f] text-sm text-[#f5f1e8] outline-none focus:border-[#b8973e]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#c3bba9]">Practice Area Needed</label>
                  <select className="w-full px-4 py-3 bg-transparent border border-[#3a372f] text-sm text-[#f5f1e8] outline-none focus:border-[#b8973e]">
                    <option className="bg-[#0c0b09]">Corporate &amp; M&amp;A</option>
                    <option className="bg-[#0c0b09]">Commercial Litigation</option>
                    <option className="bg-[#0c0b09]">Estates &amp; Wealth Transfer</option>
                    <option className="bg-[#0c0b09]">Regulatory &amp; Compliance</option>
                    <option className="bg-[#0c0b09]">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#c3bba9]">Urgency</label>
                  <select className="w-full px-4 py-3 bg-transparent border border-[#3a372f] text-sm text-[#f5f1e8] outline-none focus:border-[#b8973e]">
                    <option className="bg-[#0c0b09]">Active deadline / time-sensitive</option>
                    <option className="bg-[#0c0b09]">Within the next month</option>
                    <option className="bg-[#0c0b09]">Exploring options</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-[#c3bba9]">Brief Summary of the Matter</label>
                <textarea required rows={4} placeholder="Provide a brief, confidential summary. Do not include privileged detail you would not share in a first call." className="w-full px-4 py-3 bg-transparent border border-[#3a372f] text-sm text-[#f5f1e8] outline-none focus:border-[#b8973e] resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#b8973e] hover:bg-[#cbab52] text-[#0c0b09] py-4 text-sm font-bold uppercase tracking-wide transition-colors">
                Submit Confidential Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="font-sans text-[#8a8172] text-xs py-10 px-6 mt-auto border-t border-[#2a2823]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-[#c3bba9]">Ashford &amp; Cole LLP — Fictional Concept Demo</p>
            <p className="text-[11px] text-[#5f594d]">Designed &amp; engineered by bajwaa.dev to demonstrate quiet-luxury law firm positioning.</p>
          </div>
          <Link href="/services/websites" className="text-[#b8973e] hover:underline font-bold text-xs">
            Built by bajwaa.dev — Explore Website Services <ArrowUpRight className="inline h-3.5 w-3.5" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
