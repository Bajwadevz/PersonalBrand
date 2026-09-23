"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Wrench,
  PhoneCall,
  Shield,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  MapPin,
  Sparkles,
  Search,
  DollarSign,
  ChevronRight,
  Calendar,
} from "lucide-react";

const PRICE_ESTIMATES = [
  { id: "drain", name: "Drain Clearing & Hydro-Jetting", range: "$149 – $299", time: "1–2 Hours" },
  { id: "leak", name: "Active Pipe Leak Repair", range: "$189 – $380", time: "1–3 Hours" },
  { id: "heater", name: "Water Heater Diagnostic & Flush", range: "$129 – $249", time: "1 Hour" },
  { id: "fixture", name: "Faucet / Toilet / Fixture Install", range: "$159 – $310", time: "1–2 Hours" },
  { id: "sewer", name: "Main Sewer Line Camera Inspection", range: "$199 – $349", time: "1–2 Hours" },
];

const SERVICE_AREAS = ["Downtown", "North Suburbs", "Westside", "East County", "Metro South", "Harbor District"];

export default function PlumbingDemoPage() {
  const [requestType, setRequestType] = useState<"emergency" | "routine">("emergency");
  const [selectedEstimator, setSelectedEstimator] = useState(PRICE_ESTIMATES[0].id);
  const [zipCode, setZipCode] = useState("");
  const [zipStatus, setZipStatus] = useState<"idle" | "checked">("idle");
  const [submitted, setSubmitted] = useState(false);

  const currentEstimate = PRICE_ESTIMATES.find((item) => item.id === selectedEstimator) || PRICE_ESTIMATES[0];

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.trim()) setZipStatus("checked");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white pb-20 sm:pb-0">
      {/* 1. Fixed Top Concept Demo Disclosure Banner */}
      <div className="bg-amber-400 text-slate-950 px-4 py-2 text-center text-xs font-bold tracking-wide uppercase shadow-lg flex items-center justify-center gap-2 z-50 sticky top-0 border-b border-amber-500">
        <AlertTriangle className="h-4 w-4 shrink-0 text-slate-950" />
        <span>Concept demo by bajwaa.dev — not a live service business</span>
        <Link
          href="/services/websites"
          className="underline ml-2 hover:text-slate-800 text-[11px] font-extrabold whitespace-nowrap"
        >
          Build a site like this →
        </Link>
      </div>

      {/* 2. Utility Bar */}
      <div className="bg-slate-900/90 backdrop-blur-md text-slate-300 text-xs px-6 py-2.5 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            3 Duty Master Plumbers Online Now
          </span>
          <span className="hidden md:inline text-slate-700">|</span>
          <span className="hidden md:inline text-slate-400">Average Emergency Response: 34 Minutes</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-blue-400 font-bold bg-blue-500/10 px-2.5 py-0.5 rounded-md border border-blue-500/20">
            Demo Line: (555) 019-2834
          </span>
        </div>
      </div>

      {/* 3. High-End Header */}
      <header className="bg-slate-900/60 backdrop-blur-xl border-b border-slate-800/80 sticky top-8 z-40 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/20">
              <Wrench className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white flex items-center gap-2">
                ClearFlow Plumbing <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">PRO</span>
              </span>
              <span className="text-[10px] block text-slate-400 uppercase tracking-widest font-semibold">
                Licensed Master Plumbers • Residential & Commercial
              </span>
            </div>
          </div>

          <a
            href="#request-form"
            className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2"
          >
            <PhoneCall className="h-4 w-4" /> Request Service
          </a>
        </div>
      </header>

      {/* 4. Luxury Hero Section */}
      <section className="demo-noise relative py-20 md:py-28 px-6 overflow-hidden">
        {/* Ambient Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-10 right-[8%] w-64 h-64 bg-sky-400/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="demo-hairline inline-flex items-center gap-2 bg-slate-900/90 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_24px_-8px_rgba(59,130,246,0.35)]">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span>Under-60-Second Automated Dispatch Confirmation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08] mb-6 text-white text-balance">
            Emergency Water Leaks & Drain Clearing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">Done Upfront</span>
          </h1>

          <p className="text-slate-300/90 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            No hidden dispatch surcharges. No waiting on hold. ClearFlow connects active emergency leaks or routine service requests directly to duty technicians in real time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <a
              href="#request-form"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white px-8 py-4 rounded-2xl font-extrabold text-base transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              Dispatch Service Online <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:5550192834"
              className="demo-hairline w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 text-slate-200 px-7 py-4 rounded-2xl text-sm font-bold text-center transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <PhoneCall className="h-4 w-4 text-blue-400" /> (555) 019-2834
            </a>
          </div>
        </div>
      </section>

      {/* 5. Process-Based Trust Grid */}
      <section className="bg-slate-900/50 border-y border-slate-800/80 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="demo-hairline demo-card-lift bg-slate-900/80 p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0 ring-1 ring-blue-500/20">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">30-Min Emergency Window</h4>
              <p className="text-xs text-slate-400 mt-0.5">Rapid dispatch for active water leaks</p>
            </div>
          </div>

          <div className="demo-hairline demo-card-lift bg-slate-900/80 p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0 ring-1 ring-blue-500/20">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Flat Upfront Quotes</h4>
              <p className="text-xs text-slate-400 mt-0.5">Written price before any work begins</p>
            </div>
          </div>

          <div className="demo-hairline demo-card-lift bg-slate-900/80 p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0 ring-1 ring-blue-500/20">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Clean Work Guarantee</h4>
              <p className="text-xs text-slate-400 mt-0.5">Floor guards & tidy site handoff</p>
            </div>
          </div>

          <div className="demo-hairline demo-card-lift bg-slate-900/80 p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0 ring-1 ring-blue-500/20">
              <Wrench className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Licensed & Insured</h4>
              <p className="text-xs text-slate-400 mt-0.5">Background-checked master plumbers</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive Upfront Price Estimator Widget */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            TRANSPARENT PRICING
          </span>
          <h2 className="text-3xl font-black mt-3 text-white">Upfront Job Cost Estimator</h2>
          <p className="text-sm text-slate-400 mt-2">Select your service to preview baseline fixed pricing before booking.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Service Selector List */}
          <div className="space-y-2 lg:col-span-2">
            {PRICE_ESTIMATES.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedEstimator(item.id)}
                className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                  selectedEstimator === item.id
                    ? "bg-blue-600/15 border-blue-500 text-white shadow-lg shadow-blue-500/10"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${selectedEstimator === item.id ? "bg-blue-500 text-white" : "bg-slate-800 text-slate-400"}`}>
                    <DollarSign className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{item.name}</h4>
                    <span className="text-xs text-slate-400">Est. Duration: {item.time}</span>
                  </div>
                </div>
                <ChevronRight className={`h-5 w-5 transition-transform ${selectedEstimator === item.id ? "text-blue-400 translate-x-1" : "text-slate-600"}`} />
              </button>
            ))}
          </div>

          {/* Estimate Display Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full pointer-events-none"></div>

            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400 block mb-1">
              SELECTED ESTIMATE
            </span>
            <h3 className="font-extrabold text-lg text-white mb-4">{currentEstimate.name}</h3>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-4">
              <span className="text-xs text-slate-400 block mb-1">Upfront Fixed Range</span>
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                {currentEstimate.range}
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">✓ Written quote confirmed on site</span>
            </div>

            <ul className="space-y-2 text-xs text-slate-300 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                <span>Zero dispatch fee with repair approval</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                <span>Includes parts & 1-year labor warranty</span>
              </li>
            </ul>

            <a
              href="#request-form"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold text-xs inline-flex items-center justify-center gap-1.5 transition-all shadow-md"
            >
              Book This Estimate <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 7. Zip Code Coverage Checker */}
      <section className="bg-slate-900/60 py-16 px-6 border-y border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">SERVICE AREA CHECKER</span>
          <h2 className="text-2xl font-bold mt-1 text-white mb-2">Check Emergency Technician Availability in Your Area</h2>
          <p className="text-xs text-slate-400 mb-8">Enter your ZIP code to verify 30-minute emergency dispatch coverage.</p>

          <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-6">
            <div className="relative w-full">
              <MapPin className="h-4 w-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Enter 5-digit ZIP Code"
                value={zipCode}
                onChange={(e) => {
                  setZipCode(e.target.value);
                  setZipStatus("idle");
                }}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white outline-none focus:border-blue-500 font-mono"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold text-xs whitespace-nowrap transition-all flex items-center justify-center gap-2"
            >
              <Search className="h-4 w-4" /> Check Area
            </button>
          </form>

          {zipStatus === "checked" && (
            <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold animate-fade-in">
              <CheckCircle2 className="h-4 w-4" /> Priority dispatch active for {zipCode} (30–45 min arrival window).
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Coverage Hubs:</span>
            {SERVICE_AREAS.map((area) => (
              <span key={area} className="bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. High-End Request Form Prototype */}
      <section id="request-form" className="py-20 px-6 max-w-3xl mx-auto w-full">
        <div className="demo-hairline bg-slate-900/90 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/40 relative overflow-hidden backdrop-blur-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              DISPATCH PROTOTYPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 text-white">Online Service Dispatch</h2>
            <p className="text-xs text-slate-400 mt-1">Interactive demo showing immediate customer lead capture & text-back trigger.</p>
          </div>

          {/* Mode Switcher */}
          <div className="grid grid-cols-2 gap-3 mb-8 p-1.5 bg-slate-950 rounded-2xl border border-slate-800">
            <button
              type="button"
              onClick={() => setRequestType("emergency")}
              className={`py-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                requestType === "emergency"
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🚨 Emergency Water Leak (Immediate)
            </button>
            <button
              type="button"
              onClick={() => setRequestType("routine")}
              className={`py-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                requestType === "routine"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              📅 Schedule Appointment / Quote
            </button>
          </div>

          {submitted ? (
            <div className="p-8 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-center">
              <CheckCircle2 className="h-12 w-12 text-blue-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Demo Dispatch Complete!</h3>
              <p className="text-xs text-slate-300 mb-6 max-w-md mx-auto leading-relaxed">
                In a live deployment, this form triggers an instant under-60-second SMS text response to the customer and alerts duty technicians via Slack or phone.
              </p>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-left">
                <p className="text-xs font-bold text-white mb-1">
                  Want a high-converting website & automated lead flow like this for your business?
                </p>
                <Link
                  href="/contact?offer=modern-lead-generation-website&demo=plumbing"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-400 hover:underline"
                >
                  Request a quote from bajwaa.dev →
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1 text-slate-300">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1 text-slate-300">Mobile Phone (For Instant SMS)</label>
                  <input
                    required
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white outline-none focus:border-blue-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1 text-slate-300">Service Address & ZIP</label>
                <input
                  required
                  type="text"
                  placeholder="123 Main St, Metro City, 90210"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white outline-none focus:border-blue-500"
                />
              </div>

              {requestType === "routine" && (
                <div>
                  <label className="block text-xs font-bold mb-1 text-slate-300">Preferred Service Day</label>
                  <div className="relative">
                    <Calendar className="h-4 w-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white outline-none focus:border-blue-500 cursor-pointer">
                      <option value="tomorrow">Tomorrow (First Available)</option>
                      <option value="this-week">This Week</option>
                      <option value="weekend">Weekend Preferred</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold mb-1 text-slate-300">Plumbing Problem Details</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe your issue (e.g. leaking line under kitchen sink)..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white py-4 rounded-xl font-extrabold text-sm shadow-xl shadow-blue-600/30 transition-all"
              >
                Submit Demo Dispatch Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 9. Mobile Sticky Dispatch Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 p-3 flex items-center justify-between gap-3 z-40 sm:hidden">
        <a
          href="tel:5550192834"
          className="flex-1 bg-slate-800 border border-slate-700 text-slate-200 py-3 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-1.5"
        >
          <PhoneCall className="h-3.5 w-3.5 text-blue-400" /> Call Demo
        </a>
        <a
          href="#request-form"
          className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-1.5"
        >
          Dispatch Online →
        </a>
      </div>

      {/* Footer Attribution */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-10 px-6 mt-auto border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-slate-200">ClearFlow Plumbing Co. — Fictional Concept Demo</p>
            <p className="text-[11px] text-slate-500">Designed & engineered by bajwaa.dev to demonstrate service-business conversion architecture.</p>
          </div>
          <Link
            href="/services/websites"
            className="text-blue-400 hover:underline font-bold text-xs"
          >
            Built by bajwaa.dev — Explore Website Services →
          </Link>
        </div>
      </footer>
    </div>
  );
}
