"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Flame,
  Snowflake,
  Shield,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  PhoneCall,
  Zap,
} from "lucide-react";

const SYMPTOMS = [
  {
    id: "not-cooling",
    label: "AC Blowing Warm Air",
    icon: "❄️",
    desc: "Low refrigerant, frozen evaporator coil, or compressor failure.",
    mode: "cooling",
  },
  {
    id: "not-heating",
    label: "Furnace Not Heating",
    icon: "🔥",
    desc: "Ignitor breakdown, pressure switch error, or thermostat disconnect.",
    mode: "heating",
  },
  {
    id: "unusual-noise",
    label: "Squealing / Banging Noises",
    icon: "🔊",
    desc: "Blower motor belt wear, loose fan blade, or bearing issue.",
    mode: "cooling",
  },
  {
    id: "high-bill",
    label: "Unusually High Energy Bill",
    icon: "⚡",
    desc: "System running continuously due to duct leaks or dirty coils.",
    mode: "heating",
  },
  {
    id: "tune-up",
    label: "Seasonal Maintenance Tune-Up",
    icon: "🛠️",
    desc: "21-point HVAC safety inspection, filter swap, & coil cleaning.",
    mode: "cooling",
  },
];

const TIME_SLOTS = [
  { id: "morning", time: "Morning (8:00 AM – 12:00 PM)", status: "2 Spots Left Today" },
  { id: "afternoon", time: "Afternoon (12:00 PM – 4:00 PM)", status: "1 Spot Left Today" },
  { id: "evening", time: "Emergency Evening Dispatch", status: "Priority Available" },
];

export default function HVACDemoPage() {
  const [activeMode, setActiveMode] = useState<"cooling" | "heating">("cooling");
  const [selectedSymptom, setSelectedSymptom] = useState("not-cooling");
  const [selectedSlot, setSelectedSlot] = useState("morning");
  const [sqFt, setSqFt] = useState<number>(2000);
  const [submitted, setSubmitted] = useState(false);

  const currentSymptomObj = SYMPTOMS.find((s) => s.id === selectedSymptom) || SYMPTOMS[0];

  // Tonnage math: ~500 sq ft per ton
  const calculatedTonnage = (sqFt / 500).toFixed(1);
  const estimatedSavings = Math.round((sqFt / 100) * 14);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-20 sm:pb-0">
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
          <span className="flex items-center gap-1.5 text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Seasonal Climate Diagnostic Window Active
          </span>
          <span className="hidden md:inline text-slate-700">|</span>
          <span className="hidden md:inline text-slate-400">Same-Day HVAC Diagnostics</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-amber-400 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
            Demo Line: (555) 018-9942
          </span>
        </div>
      </div>

      {/* 3. Header */}
      <header className="bg-slate-900/60 backdrop-blur-xl border-b border-slate-800/80 sticky top-8 z-40 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`h-11 w-11 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg transition-colors ${
              activeMode === "cooling" ? "bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-sky-500/20" : "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-amber-500/20"
            }`}>
              {activeMode === "cooling" ? <Snowflake className="h-6 w-6" /> : <Flame className="h-6 w-6" />}
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white flex items-center gap-2">
                Northstar Heating & Air <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">HVAC PRO</span>
              </span>
              <span className="text-[10px] block text-slate-400 uppercase tracking-widest font-semibold">
                NATE Certified • Climate Control Specialists
              </span>
            </div>
          </div>

          <a
            href="#hvac-form"
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2"
          >
            <PhoneCall className="h-4 w-4" /> Book Service
          </a>
        </div>
      </header>

      {/* 4. Luxury Hero Section with Seasonal Mode Toggle */}
      <section className="demo-noise relative py-20 md:py-28 px-6 overflow-hidden">
        {/* Ambient Glow */}
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blur-[130px] rounded-full pointer-events-none transition-colors duration-700 ${
          activeMode === "cooling" ? "bg-sky-500/15" : "bg-amber-500/15"
        }`}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Mode Switcher Pills */}
          <div className="demo-hairline inline-flex p-1.5 rounded-2xl bg-slate-900 mb-8">
            <button
              type="button"
              onClick={() => {
                setActiveMode("cooling");
                setSelectedSymptom("not-cooling");
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeMode === "cooling"
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Snowflake className="h-4 w-4" /> Air Conditioning Mode
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveMode("heating");
                setSelectedSymptom("not-heating");
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeMode === "heating"
                  ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Flame className="h-4 w-4" /> Heating & Furnace Mode
            </button>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08] mb-6 text-white text-balance">
            {activeMode === "cooling" ? (
              <>
                AC Not Cooling Your Home? <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">Same-Day Diagnostics</span>
              </>
            ) : (
              <>
                Furnace Cold or Short Cycling? <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">Fast Heating Repair</span>
              </>
            )}
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Northstar dispatches certified technicians with full vehicle inventory. Written price quote confirmed before repair work begins.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <a
              href="#hvac-form"
              className={`w-full sm:w-auto text-white px-8 py-4 rounded-2xl font-extrabold text-base transition-all shadow-xl flex items-center justify-center gap-2 group ${
                activeMode === "cooling"
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-sky-500/30"
                  : "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 shadow-amber-500/30"
              }`}
            >
              Book Diagnostic Visit <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:5550189942"
              className="demo-hairline w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 text-slate-200 px-7 py-4 rounded-2xl text-sm font-bold text-center transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <PhoneCall className="h-4 w-4 text-amber-400" /> (555) 018-9942
            </a>
          </div>
        </div>
      </section>

      {/* 5. Trust Bar */}
      <section className="bg-slate-900/50 border-y border-slate-800/80 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="demo-hairline demo-card-lift bg-slate-900/80 p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 ring-1 ring-amber-500/20">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Same-Day Diagnostic</h4>
              <p className="text-xs text-slate-400 mt-0.5">Rapid dispatch for urgent outages</p>
            </div>
          </div>

          <div className="demo-hairline demo-card-lift bg-slate-900/80 p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 ring-1 ring-amber-500/20">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Upfront Approval Guarantee</h4>
              <p className="text-xs text-slate-400 mt-0.5">Written repair estimate before work</p>
            </div>
          </div>

          <div className="demo-hairline demo-card-lift bg-slate-900/80 p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 ring-1 ring-amber-500/20">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">NATE-Certified Team</h4>
              <p className="text-xs text-slate-400 mt-0.5">EPA compliant certified specialists</p>
            </div>
          </div>

          <div className="demo-hairline demo-card-lift bg-slate-900/80 p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 ring-1 ring-amber-500/20">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">All HVAC Brands</h4>
              <p className="text-xs text-slate-400 mt-0.5">Trane, Carrier, Lennox, Goodman</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive Symptom Diagnostic Matrix */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            DIAGNOSTIC PICKER
          </span>
          <h2 className="text-3xl font-black mt-3 text-white">Select What Your System Is Doing</h2>
          <p className="text-sm text-slate-400 mt-2">Pick a symptom below to preview recommended diagnostic testing.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {SYMPTOMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setSelectedSymptom(item.id);
                if (item.mode) setActiveMode(item.mode as "cooling" | "heating");
              }}
              className={`p-5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-3 ${
                selectedSymptom === item.id
                  ? "bg-amber-500/15 border-amber-500 text-amber-400 font-bold shadow-lg shadow-amber-500/10 scale-[1.02]"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-xs font-bold leading-tight">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Selected Symptom Breakdown Card */}
        <div className="bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{currentSymptomObj.icon}</span>
              <h3 className="font-extrabold text-xl text-white">{currentSymptomObj.label}</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">{currentSymptomObj.desc}</p>
            <div className="flex flex-wrap gap-2 text-[11px] text-amber-300 font-mono">
              <span className="bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">✓ Compressor & Coil Check</span>
              <span className="bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">✓ Thermostat Signal Test</span>
              <span className="bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">✓ Airflow CFM Inspection</span>
            </div>
          </div>
          <a
            href="#hvac-form"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3.5 rounded-xl font-extrabold text-xs whitespace-nowrap transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 shrink-0"
          >
            Schedule Diagnostic ($89 Flat) <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* 7. System Efficiency & Tonnage Calculator Visualizer */}
      <section className="bg-slate-900/60 py-20 px-6 border-y border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">SEER2 SAVINGS CALCULATOR</span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white mb-2">HVAC Sizing & Energy Savings Visualizer</h2>
          <p className="text-xs text-slate-400 mb-10">Adjust home square footage to estimate required system tonnage and annual energy bill savings.</p>

          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 max-w-2xl mx-auto shadow-2xl">
            <div className="flex items-center justify-between mb-4 text-xs font-bold text-slate-300">
              <span>Home Size: <span className="text-amber-400 font-mono text-base">{sqFt.toLocaleString()} sq ft</span></span>
              <span>Est. Tonnage: <span className="text-amber-400 font-mono text-base">{calculatedTonnage} Tons</span></span>
            </div>

            <input
              type="range"
              min="1000"
              max="4000"
              step="100"
              value={sqFt}
              onChange={(e) => setSqFt(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer mb-8"
            />

            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">Recommended SEER2</span>
                <span className="text-xl font-bold text-white font-mono">16.5–18 SEER2</span>
                <span className="text-[10px] text-slate-500 block mt-1">High efficiency heat pump or AC</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/30">
                <span className="text-[11px] text-amber-400 block mb-1">Est. Annual Energy Savings</span>
                <span className="text-2xl font-black text-amber-400 font-mono">${estimatedSavings}/yr</span>
                <span className="text-[10px] text-slate-400 block mt-1">Compared to 10-yr-old 10 SEER system</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Appointment Time Slot Selector & Form Prototype */}
      <section id="hvac-form" className="py-20 px-6 max-w-3xl mx-auto w-full">
        <div className="demo-hairline bg-slate-900/90 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/40 backdrop-blur-xl relative overflow-hidden">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              APPOINTMENT DISPATCH PROTOTYPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 text-white">Book HVAC Diagnostic Call</h2>
            <p className="text-xs text-slate-400 mt-1">Interactive demo illustrating appointment window reservation & text-back trigger.</p>
          </div>

          {/* Time Slot Selector */}
          <div className="mb-8 space-y-2">
            <label className="block text-xs font-bold mb-2 text-slate-300">Select Preferred Time Slot</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => setSelectedSlot(slot.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedSlot === slot.id
                      ? "bg-amber-500/15 border-amber-500 text-white font-bold"
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <div className="text-xs font-bold text-white mb-1">{slot.time}</div>
                  <span className="text-[10px] text-amber-400 font-mono font-semibold">{slot.status}</span>
                </button>
              ))}
            </div>
          </div>

          {submitted ? (
            <div className="p-8 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-center">
              <CheckCircle2 className="h-12 w-12 text-amber-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Demo Appointment Booked!</h3>
              <p className="text-xs text-slate-300 mb-6 max-w-md mx-auto leading-relaxed">
                In a live deployment, this form reserves the technician time slot, dispatches an automated SMS confirmation, and creates an entry in your CRM.
              </p>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-left">
                <p className="text-xs font-bold text-white mb-1">
                  Want an automated HVAC appointment booking flow like this for your business?
                </p>
                <Link
                  href="/contact?offer=modern-lead-generation-website&demo=hvac"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-400 hover:underline"
                >
                  Request a website & lead flow quote from bajwaa.dev →
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
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1 text-slate-300">Mobile Phone (For Instant SMS)</label>
                  <input
                    required
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white outline-none focus:border-amber-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1 text-slate-300">Service Address</label>
                <input
                  required
                  type="text"
                  placeholder="456 Oak Ave, Metro City, 90210"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1 text-slate-300">System Symptom / Description</label>
                <textarea
                  required
                  rows={3}
                  value={`Selected Symptom: ${currentSymptomObj.label}.`}
                  onChange={() => {}}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white outline-none focus:border-amber-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white py-4 rounded-xl font-extrabold text-sm shadow-xl shadow-amber-500/30 transition-all"
              >
                Submit Demo Diagnostic Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 9. Mobile Sticky Dispatch Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 p-3 flex items-center justify-between gap-3 z-40 sm:hidden">
        <a
          href="tel:5550189942"
          className="flex-1 bg-slate-800 border border-slate-700 text-slate-200 py-3 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-1.5"
        >
          <PhoneCall className="h-3.5 w-3.5 text-amber-400" /> Call Demo
        </a>
        <a
          href="#hvac-form"
          className="flex-1 bg-amber-500 text-slate-950 py-3 rounded-xl font-extrabold text-xs text-center flex items-center justify-center gap-1.5"
        >
          Book Diagnostic →
        </a>
      </div>

      {/* Footer Attribution */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-10 px-6 mt-auto border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-slate-200">Northstar Heating & Air — Fictional Concept Demo</p>
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
