"use client";

import { useState } from "react";
import Link from "next/link";
import { Wrench, PhoneCall, Shield, Clock, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export default function PlumbingDemoPage() {
  const [requestType, setRequestType] = useState<"emergency" | "routine">("emergency");
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

      {/* 2. Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs px-6 py-2.5 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            24/7 Emergency Dispatch Available
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="hidden sm:inline text-slate-400">Serving Metro Area & Surrounding Suburbs</span>
        </div>
        <div className="font-mono text-amber-400 font-semibold">
          Demo Phone: (555) 019-2834 [Demo Only]
        </div>
      </div>

      {/* Demo Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
              <Wrench className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-blue-950 dark:text-blue-100">
                ClearFlow Plumbing Co.
              </span>
              <span className="text-[10px] block text-slate-500 uppercase tracking-widest font-semibold">
                Licensed & Insured Plumbing Services
              </span>
            </div>
          </div>

          <a
            href="#request-form"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
          >
            <PhoneCall className="h-4 w-4" /> Request Service
          </a>
        </div>
      </header>

      {/* 3. Hero */}
      <section className="bg-gradient-to-b from-blue-900 via-slate-900 to-slate-950 text-white py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider">
            Fast Arrival • Upfront Quotes • Clean Job Guarantee
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
            Emergency Plumbing Leaks & Drain Cleaning Done Right
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            When a burst pipe, blocked drain, or water heater failure threatens your home, ClearFlow dispatches certified technicians with upfront pricing before work begins.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#request-form"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Request Service Online <ArrowRight className="h-5 w-5" />
            </a>
            <div className="w-full sm:w-auto border border-slate-700 text-slate-200 px-6 py-4 rounded-xl text-sm font-semibold text-center bg-slate-800/50">
              Emergency Call: (555) 019-2834
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trust Strip (Process-Based Trust) */}
      <section className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm">30–60 Min Arrival Windows</h4>
              <p className="text-xs text-slate-500">Fast local response for urgent leaks</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Upfront Fixed Pricing</h4>
              <p className="text-xs text-slate-500">No surprise hidden technician fees</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Clean Home Guarantee</h4>
              <p className="text-xs text-slate-500">Shoe covers & tidy work area handoff</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
              <Wrench className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Master Plumbers</h4>
              <p className="text-xs text-slate-500">Fully equipped service vehicles</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Service Cards */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            OUR SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">Complete Residential & Commercial Plumbing</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Emergency Leak Repair", desc: "Burst pipes, active water leaks, and main line shutoff response." },
            { title: "Drain Cleaning & Hydro-Jetting", desc: "Clear stubborn blockages, roots, and slow drain lines." },
            { title: "Water Heater Repair & Install", desc: "Tankless and standard hot water system troubleshooting." },
            { title: "Sewer Line Inspection", desc: "Camera line inspections and pipe repair solutions." },
            { title: "Fixture Installation", desc: "Faucets, toilets, sinks, garbage disposals, and shower valves." },
            { title: "Preventative Maintenance", desc: "Annual plumbing inspections to stop emergency water damage." },
          ].map((srv) => (
            <div key={srv.title} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-base mb-2">{srv.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. What Happens Next 3-Step Section */}
      <section className="bg-slate-100 dark:bg-slate-900/50 py-16 px-6 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">What Happens When You Request Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono font-bold text-blue-600">STEP 1</span>
              <h3 className="font-bold text-base mt-1">Instant Intake Confirmation</h3>
              <p className="text-xs text-slate-500 mt-2">Your request triggers an immediate text response with your technician arrival window.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono font-bold text-blue-600">STEP 2</span>
              <h3 className="font-bold text-base mt-1">On-Site Diagnosis & Quote</h3>
              <p className="text-xs text-slate-500 mt-2">Our technician inspects the problem and presents an exact fixed quote before work starts.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono font-bold text-blue-600">STEP 3</span>
              <h3 className="font-bold text-base mt-1">Repair & Clean Handoff</h3>
              <p className="text-xs text-slate-500 mt-2">Job completed cleanly with work warranty documentation delivered to your phone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Request Form Prototype */}
      <section id="request-form" className="py-16 px-6 max-w-3xl mx-auto w-full">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 shadow-lg">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">ONLINE SERVICE DISPATCH</span>
            <h2 className="text-2xl font-bold mt-1">Request Plumbing Service</h2>
            <p className="text-xs text-slate-500 mt-1">Demo form prototype illustrating immediate lead response workflow.</p>
          </div>

          {/* Request Type Selector */}
          <div className="grid grid-cols-2 gap-3 mb-6 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <button
              type="button"
              onClick={() => setRequestType("emergency")}
              className={`py-2.5 text-xs font-bold rounded-lg transition-all ${
                requestType === "emergency"
                  ? "bg-red-600 text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              🚨 Emergency Leak / Urgent
            </button>
            <button
              type="button"
              onClick={() => setRequestType("routine")}
              className={`py-2.5 text-xs font-bold rounded-lg transition-all ${
                requestType === "routine"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              📅 Routine Repair / Quote
            </button>
          </div>

          {submitted ? (
            <div className="p-8 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-2xl text-center">
              <CheckCircle2 className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Demo Request Received!</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
                In a live deployment, this submission instantly dispatches an automated SMS confirmation to the customer and alerts the duty technician.
              </p>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-left">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-1">
                  Want a high-converting lead response flow like this for your business?
                </p>
                <Link
                  href="/contact?offer=modern-lead-generation-website&demo=plumbing"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:underline"
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
                    placeholder="Jane Smith"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-400">Phone Number (For SMS Text-Back)</label>
                  <input
                    required
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-400">Service Address / ZIP</label>
                <input
                  required
                  type="text"
                  placeholder="123 Main St, City, State ZIP"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-slate-600 dark:text-slate-400">Problem Description</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe your plumbing problem (e.g., leaking pipe under kitchen sink)..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
              >
                Submit Demo Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 8. Demo Footer Attribution */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-8 px-6 mt-auto border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-semibold text-slate-300">ClearFlow Plumbing Co. — Fictional Concept Demo</p>
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
