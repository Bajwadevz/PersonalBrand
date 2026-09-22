"use client";

import { useState } from "react";
import Link from "next/link";
import { Flame, Snowflake, Shield, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

export default function HVACDemoPage() {
  const [symptom, setSymptom] = useState<string>("not-cooling");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
      {/* 1. Fixed Top Concept Demo Banner */}
      <div className="bg-amber-500 text-slate-950 px-4 py-2 text-center text-xs font-bold tracking-wide uppercase shadow-md flex items-center justify-center gap-2 z-50 sticky top-0">
        <AlertTriangle className="h-4 w-4 shrink-0" />
        <span>Concept demo by bajwaa.dev — not a live service business</span>
        <Link
          href="/services/websites"
          className="underline ml-2 hover:text-slate-800 text-[11px] font-extrabold whitespace-nowrap"
        >
          Build a site like this →
        </Link>
      </div>

      {/* Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs px-6 py-2.5 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-amber-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Seasonal AC & Heating Service Open
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="hidden sm:inline text-slate-400">Same-Day Diagnostic Appointments</span>
        </div>
        <div className="font-mono text-amber-400 font-semibold">
          Demo Phone: (555) 018-9942 [Demo Only]
        </div>
      </div>

      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
              <Flame className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                Northstar Heating & Air
              </span>
              <span className="text-[10px] block text-slate-500 uppercase tracking-widest font-semibold">
                Residential Climate Control Specialists
              </span>
            </div>
          </div>

          <a
            href="#hvac-form"
            className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-md"
          >
            Book Service
          </a>
        </div>
      </header>

      {/* 2. Hero with Dual Pathways */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider">
            Fast Diagnostic • Upfront Scope • Licensed HVAC Techs
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
            AC Not Cooling or Furnace Not Heating?
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Northstar provides same-day diagnostic calls, transparent repair estimates, and seasonal tune-ups to keep your home comfortable year-round.
          </p>

          {/* Dual Pathways */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <a
              href="#hvac-form"
              onClick={() => setSymptom("not-cooling")}
              className="p-4 rounded-2xl bg-sky-500/10 border border-sky-400/30 text-left hover:bg-sky-500/20 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <Snowflake className="h-6 w-6 text-sky-400" />
                <span className="text-xs font-bold text-sky-400 group-hover:translate-x-1 transition-transform">Book AC Repair →</span>
              </div>
              <h3 className="font-bold text-base text-white">Air Conditioner Issues</h3>
              <p className="text-xs text-slate-400 mt-1">Warm air blowing, frozen coils, or system won&apos;t turn on.</p>
            </a>

            <a
              href="#hvac-form"
              onClick={() => setSymptom("not-heating")}
              className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-left hover:bg-amber-500/20 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <Flame className="h-6 w-6 text-amber-400" />
                <span className="text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">Book Heating Repair →</span>
              </div>
              <h3 className="font-bold text-base text-white">Heating & Heat Pump</h3>
              <p className="text-xs text-slate-400 mt-1">Cold air, furnace short cycling, or thermostat issues.</p>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Trust Strip */}
      <section className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Same-Day Dispatch</h4>
              <p className="text-xs text-slate-500">Fast local climate response</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Upfront Repair Guarantee</h4>
              <p className="text-xs text-slate-500">No work performed without approval</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Certified Techs</h4>
              <p className="text-xs text-slate-500">EPA & NATE certified professionals</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
              <Flame className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm">All Major Brands</h4>
              <p className="text-xs text-slate-500">Trane, Carrier, Lennox, Goodman</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Symptom Selector & Appointment Flow Preview */}
      <section className="py-16 px-6 max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">SYMPTOM DIAGNOSTIC</span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">Select What Your HVAC System Is Doing</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {[
            { id: "not-cooling", label: "AC Not Cooling", icon: "❄️" },
            { id: "not-heating", label: "Heating Not Working", icon: "🔥" },
            { id: "unusual-noise", label: "Unusual Noises", icon: "🔊" },
            { id: "high-bill", label: "High Energy Bill", icon: "⚡" },
            { id: "tune-up", label: "Routine Tune-Up", icon: "🛠️" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSymptom(item.id)}
              className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                symptom === item.id
                  ? "bg-amber-500/10 border-amber-500 text-amber-600 font-bold shadow-sm"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-400"
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* 5. Lead Form Prototype */}
        <div id="hvac-form" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 shadow-lg max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">APPOINTMENT INTAKE</span>
            <h2 className="text-2xl font-bold mt-1">Schedule Diagnostic Visit</h2>
            <p className="text-xs text-slate-500 mt-1">Selected Symptom: <span className="font-bold text-amber-600 uppercase">{symptom.replace("-", " ")}</span></p>
          </div>

          {submitted ? (
            <div className="p-8 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 rounded-2xl text-center">
              <CheckCircle2 className="h-12 w-12 text-amber-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Appointment Request Submitted!</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
                In a live system, this sends an immediate confirmation SMS with available appointment slots and assigns a duty dispatcher.
              </p>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-left">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-1">
                  Want an appointment booking flow like this for your HVAC business?
                </p>
                <Link
                  href="/contact?offer=modern-lead-generation-website&demo=hvac"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-600 hover:underline"
                >
                  Request a website & lead flow quote from bajwaa.dev →
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-400">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-400">Phone Number (For SMS Confirmation)</label>
                  <input
                    required
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-400">Service Address</label>
                <input
                  required
                  type="text"
                  placeholder="456 Oak Ave, City, State ZIP"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-400">Preferred Time Window</label>
                <select
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                >
                  <option value="morning">Morning (8 AM – 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM – 4 PM)</option>
                  <option value="evening">Emergency / First Available</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
              >
                Submit Demo Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Attribution Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-8 px-6 mt-auto border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-semibold text-slate-300">Northstar Heating & Air — Fictional Concept Demo</p>
            <p className="text-[11px] text-slate-500">Designed & engineered by bajwaa.dev to demonstrate HVAC lead intake architecture.</p>
          </div>
          <Link
            href="/services/websites"
            className="text-amber-400 hover:underline font-bold text-xs"
          >
            Built by bajwaa.dev — Explore Website Services →
          </Link>
        </div>
      </footer>
    </div>
  );
}
