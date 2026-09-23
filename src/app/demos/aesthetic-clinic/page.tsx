"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Sparkle,
  Star,
  Plus,
  Minus,
  BadgeCheck,
} from "lucide-react";

const TREATMENTS = [
  {
    id: "injectables",
    name: "Injectables & Contouring",
    duration: "30–45 min",
    result: "Refined, natural definition — visible in 10–14 days.",
  },
  {
    id: "skin",
    name: "Advanced Skin Resurfacing",
    duration: "45–60 min",
    result: "Texture and tone corrected over a 3-session course.",
  },
  {
    id: "laser",
    name: "Laser & Light Therapy",
    duration: "20–40 min",
    result: "Reduced redness and pigmentation, minimal downtime.",
  },
  {
    id: "wellness",
    name: "Facial Wellness Programs",
    duration: "Ongoing",
    result: "A maintained result, built around your calendar.",
  },
];

const TRANSFORMATIONS = [
  { label: "Jawline Contouring", timeframe: "Result at 3 weeks" },
  { label: "Skin Texture Program", timeframe: "Result at 8 weeks" },
  { label: "Under-Eye Refresh", timeframe: "Result at 2 weeks" },
];

const PROCESS = [
  { step: "Consult", body: "A private, unhurried assessment with a lead practitioner — no sales script." },
  { step: "Plan", body: "A written treatment plan mapped to your goals, timeline, and budget, before anything is booked." },
  { step: "Treat", body: "Performed by senior practitioners only, in a private suite, with medical-grade protocols." },
  { step: "Maintain", body: "A simple maintenance rhythm so results hold — not a subscription you forget about." },
];

const FAQS = [
  { q: "Who actually performs the treatments?", a: "Every treatment is performed by a senior, credentialed practitioner — never a trainee. You'll meet the person treating you during your consultation, not on the day of." },
  { q: "How natural will the result look?", a: "Our approach is restraint-first. The goal in every consultation is a result that reads as 'well-rested,' not 'done' — we'll tell you honestly if a request risks looking overdone." },
  { q: "Is the consultation really free?", a: "Yes. The first consultation is complimentary and carries no obligation to book. You'll leave with a written plan either way." },
  { q: "How do you handle downtime?", a: "We'll tell you the realistic downtime for your specific treatment plan in writing before you book — not a generic range." },
];

export default function AestheticClinicDemoPage() {
  const [activeTreatment, setActiveTreatment] = useState(TREATMENTS[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const current = TREATMENTS.find((t) => t.id === activeTreatment) || TREATMENTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6f0] text-[#332e28] font-sans selection:bg-[#d8c3a5] selection:text-[#332e28]">
      {/* Concept Demo Banner */}
      <div className="bg-amber-400 text-slate-950 px-4 py-2 text-center text-xs font-bold tracking-wide uppercase shadow-lg flex items-center justify-center gap-2 z-50 sticky top-0 border-b border-amber-500">
        <AlertTriangle className="h-4 w-4 shrink-0 text-slate-950" />
        <span>Concept demo by bajwaa.dev — not a real clinic</span>
        <Link href="/services/websites" className="underline ml-2 hover:text-slate-800 text-[11px] font-extrabold whitespace-nowrap">
          Build a site like this →
        </Link>
      </div>

      {/* Header */}
      <header className="bg-[#faf6f0]/95 backdrop-blur-xl border-b border-[#e7dccb] sticky top-8 z-40 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <circle cx="15" cy="15" r="13" stroke="#b08d5f" strokeWidth="1" />
              <path d="M15 8C17 11 19 12.5 22 12.5C19.5 14 18 16.5 18 20C16 17.5 13 16.5 10 17C13 15 15 12 15 8Z" fill="#b08d5f" />
            </svg>
            <div>
              <span className="text-base font-bold tracking-tight text-[#332e28]">Lumière Aesthetic Studio</span>
              <span className="text-[9px] block text-[#8f8271] uppercase tracking-[0.2em] font-semibold">Medical Aesthetics &amp; Skin</span>
            </div>
          </div>
          <a href="#consult" className="inline-flex items-center gap-2 bg-[#332e28] text-[#faf6f0] px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#4a4339] transition-colors">
            Book Consultation
          </a>
        </div>
      </header>

      {/* Hero — asymmetric split */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#b08d5f] font-bold mb-6">
              <Sparkle className="h-3.5 w-3.5" /> Private Consultation, Complimentary
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#28241f] mb-6 text-balance">
              Results that look like you, just rested.
            </h1>
            <p className="text-[#6b6255] text-base sm:text-lg leading-relaxed max-w-lg mb-8">
              Lumière treats skin and structure with restraint — senior practitioners, medical-grade
              protocols, and a plan built around how you want to look in a year, not just this weekend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#consult" className="inline-flex items-center justify-center gap-2 bg-[#332e28] hover:bg-[#4a4339] text-[#faf6f0] px-7 py-3.5 rounded-full text-sm font-semibold transition-colors">
                Reserve a Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#transformations" className="inline-flex items-center justify-center gap-2 border border-[#d8c3a5] text-[#4a4339] px-7 py-3.5 rounded-full text-sm font-semibold hover:border-[#b08d5f] transition-colors">
                View Real Results
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 aspect-[16/10] rounded-3xl bg-gradient-to-br from-[#e7dccb] to-[#d8c3a5] flex items-end p-5">
              <span className="text-xs font-semibold text-[#4a4339] bg-[#faf6f0]/80 px-3 py-1.5 rounded-full">Treatment Suite — Private Room 2</span>
            </div>
            <div className="aspect-square rounded-3xl bg-[#efe7db] border border-[#e7dccb]" />
            <div className="aspect-square rounded-3xl bg-[#e0d3bd] border border-[#e7dccb]" />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-[#e7dccb] py-6 px-6 bg-white/40">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs font-semibold text-[#8f8271]">
          <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-[#b08d5f]" /> Board-Certified Practitioners</span>
          <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-[#b08d5f]" /> Medical-Grade Facility</span>
          <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-[#b08d5f]" /> 4.9★ Client Rating</span>
          <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-[#b08d5f]" /> Est. 2016</span>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#b08d5f] font-bold mb-3 block">Signature Treatments</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#28241f]">Chosen for the result, not the trend.</h2>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <div className="space-y-3">
            {TREATMENTS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTreatment(t.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                  activeTreatment === t.id
                    ? "bg-[#332e28] border-[#332e28] text-[#faf6f0]"
                    : "bg-white/60 border-[#e7dccb] text-[#4a4339] hover:border-[#d8c3a5]"
                }`}
              >
                <div>
                  <h3 className="font-semibold text-sm">{t.name}</h3>
                  <span className={`text-xs ${activeTreatment === t.id ? "text-[#d8c3a5]" : "text-[#8f8271]"}`}>{t.duration}</span>
                </div>
                <Plus className={`h-4 w-4 shrink-0 ${activeTreatment === t.id ? "rotate-45" : ""} transition-transform`} />
              </button>
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#efe7db] to-[#e0d3bd] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a6f45] font-bold">Expected Outcome</span>
              <h3 className="text-2xl font-bold text-[#28241f] mt-2 mb-4">{current.name}</h3>
              <p className="text-[#4a4339] text-sm leading-relaxed">{current.result}</p>
            </div>
            <a href="#consult" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#332e28] hover:gap-3 transition-all self-start">
              Ask about this treatment <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Transformations */}
      <section id="transformations" className="py-24 px-6 bg-white/40 border-y border-[#e7dccb]">
        <div className="max-w-6xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#b08d5f] font-bold mb-3 block">Real Results</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#28241f] mb-14 max-w-xl">Transformations, shown with the timeline that produced them.</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {TRANSFORMATIONS.map((t) => (
              <div key={t.label} className="rounded-3xl overflow-hidden border border-[#e7dccb] bg-white/60">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#e7dccb] to-[#d8c3a5]" />
                <div className="p-5">
                  <h3 className="font-semibold text-sm text-[#28241f] mb-1">{t.label}</h3>
                  <span className="text-xs text-[#8f8271]">{t.timeframe}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#8f8271] mt-6">Illustrative composite imagery. Individual results vary and are discussed during consultation.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#b08d5f] font-bold mb-3 block">How It Works</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#28241f] mb-14 max-w-xl">Unhurried, honest, and medically led.</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS.map((p, i) => (
            <div key={p.step}>
              <span className="text-xs font-bold text-[#b08d5f]">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-base font-semibold text-[#28241f] mt-2 mb-2">{p.step}</h3>
              <p className="text-xs text-[#8f8271] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-[#332e28] text-[#faf6f0]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[#d8c3a5] text-[#d8c3a5]" />
            ))}
          </div>
          <p className="text-lg sm:text-xl leading-relaxed mb-6 text-balance">
            &ldquo;I told them exactly what I didn&apos;t want — to look &lsquo;done.&rsquo; They actually listened,
            and my result is subtle enough that only I notice the difference.&rdquo;
          </p>
          <span className="text-xs uppercase tracking-[0.2em] text-[#b08d5f] font-semibold">Client, Skin Resurfacing Program</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto w-full">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#b08d5f] font-bold mb-3 block">Before You Book</span>
        <h2 className="text-3xl font-bold text-[#28241f] mb-10">Common questions.</h2>

        <div>
          {FAQS.map((f, i) => (
            <div key={f.q} className="border-b border-[#e7dccb]">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
                <span className="text-sm sm:text-base font-semibold text-[#28241f]">{f.q}</span>
                {openFaq === i ? <Minus className="h-4 w-4 text-[#b08d5f] shrink-0" /> : <Plus className="h-4 w-4 text-[#8f8271] shrink-0" />}
              </button>
              {openFaq === i && <p className="text-sm text-[#6b6255] leading-relaxed pb-6 max-w-2xl">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry */}
      <section id="consult" className="py-24 px-6 max-w-3xl mx-auto w-full">
        <div className="rounded-3xl border border-[#e7dccb] bg-white/60 p-8 md:p-12 shadow-xl shadow-[#e7dccb]/40">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#b08d5f] font-bold mb-3 block">Complimentary Consultation</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#28241f] mb-2">Reserve Your Consultation</h2>
            <p className="text-xs text-[#8f8271]">No obligation. You&apos;ll leave with a written treatment plan.</p>
          </div>

          {submitted ? (
            <div className="p-8 bg-[#efe7db] rounded-2xl text-center">
              <BadgeCheck className="h-10 w-10 text-[#b08d5f] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#28241f] mb-2">Consultation Requested</h3>
              <p className="text-xs text-[#6b6255] mb-6 max-w-md mx-auto leading-relaxed">
                In a live deployment, this triggers an instant confirmation text and adds the request to the front-desk booking queue.
              </p>
              <div className="p-4 bg-white rounded-xl border border-[#e7dccb] text-left">
                <p className="text-xs font-bold text-[#28241f] mb-1">Want a warm, premium booking flow like this for your clinic?</p>
                <Link href="/contact?offer=modern-lead-generation-website&demo=aesthetic-clinic" className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#8a6f45] hover:underline">
                  Request a quote from bajwaa.dev <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#4a4339]">Full Name</label>
                  <input required type="text" placeholder="Jordan Lee" className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7dccb] text-sm text-[#28241f] outline-none focus:border-[#b08d5f]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#4a4339]">Phone</label>
                  <input required type="tel" placeholder="(555) 000-0000" className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7dccb] text-sm text-[#28241f] outline-none focus:border-[#b08d5f]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-[#4a4339]">Treatment Area of Interest</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7dccb] text-sm text-[#28241f] outline-none focus:border-[#b08d5f]">
                  <option>Injectables &amp; Contouring</option>
                  <option>Advanced Skin Resurfacing</option>
                  <option>Laser &amp; Light Therapy</option>
                  <option>Facial Wellness Program</option>
                  <option>Not sure — I&apos;d like guidance</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-[#4a4339]">Anything specific you&apos;d like to address?</label>
                <textarea rows={3} placeholder="Tell us what you're hoping to change or maintain..." className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7dccb] text-sm text-[#28241f] outline-none focus:border-[#b08d5f] resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#332e28] hover:bg-[#4a4339] text-[#faf6f0] py-4 rounded-xl font-bold text-sm transition-colors">
                Request My Consultation
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/60 text-[#8f8271] text-xs py-10 px-6 mt-auto border-t border-[#e7dccb]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-[#4a4339]">Lumière Aesthetic Studio — Fictional Concept Demo</p>
            <p className="text-[11px] text-[#a89a83]">Designed &amp; engineered by bajwaa.dev to demonstrate warm-luxury clinic positioning.</p>
          </div>
          <Link href="/services/websites" className="text-[#8a6f45] hover:underline font-bold text-xs">
            Built by bajwaa.dev — Explore Website Services <ArrowUpRight className="inline h-3.5 w-3.5" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
