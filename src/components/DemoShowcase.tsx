import Link from "next/link";
import { ArrowUpRight, Flame, Wrench, Sparkles, CheckCircle2 } from "lucide-react";

export default function DemoShowcase() {
  return (
    <section className="py-20 md:py-28 relative z-10 w-full overflow-hidden">
      <div className="container-shell w-full">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest muted-copy bg-[rgba(45,106,143,0.06)]">
            <Sparkles className="h-3.5 w-3.5 text-[var(--color-ocean)]" />
            <span>WEBSITE CONCEPTS FOR SERVICE BUSINESSES</span>
          </div>
          <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-tight mb-4">
            Built to turn local searches into calls and booked jobs
          </h2>
          <p className="text-base muted-copy leading-relaxed">
            Explore two high-converting homepage concepts showing how clear positioning, process-based trust, instant diagnostic selectors, and immediate lead response work together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Plumbing Card */}
          <div className="glass-card card-hover demo-hairline relative flex flex-col rounded-3xl overflow-hidden group shadow-xl">
            {/* Browser Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 border-b border-slate-800 text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-3.5 py-1 rounded-md border border-slate-800">
                clearflow-plumbing-demo.bajwaa.dev
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                Concept Demo
              </span>
            </div>

            {/* Visual Teaser Body */}
            <div className="p-7 md:p-9 bg-gradient-to-br from-blue-950/80 via-slate-950 to-slate-900 border-b border-slate-800 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-lg">
                  <Wrench className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  ⚡ 30-Min Emergency Dispatch
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
                Plumbing & Drain Services
              </p>
              <h3 className="text-2xl font-black mb-2 text-white">ClearFlow Plumbing Co.</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Emergency leak response, mobile 1-click calls, upfront job price estimator, and instant lead capture.
              </p>
            </div>

            {/* Inclusions & CTA */}
            <div className="p-7 flex flex-col justify-between flex-grow bg-slate-950/60">
              <ul className="space-y-2.5 mb-8 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>Emergency water leak vs routine repair request selector</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>Upfront job cost estimator with fixed price ranges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>Interactive ZIP code service-area coverage checker</span>
                </li>
              </ul>

              <Link
                href="/demos/plumbing"
                className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white min-h-[48px] text-xs inline-flex items-center justify-center gap-2 font-bold rounded-2xl transition-all shadow-lg shadow-blue-600/20 group-hover:scale-[1.01]"
              >
                Launch Plumbing Demo <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* HVAC Card */}
          <div className="glass-card card-hover demo-hairline relative flex flex-col rounded-3xl overflow-hidden group shadow-xl">
            {/* Browser Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 border-b border-slate-800 text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-3.5 py-1 rounded-md border border-slate-800">
                northstar-hvac-demo.bajwaa.dev
              </span>
              <span className="inline-flex items-center rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                Concept Demo
              </span>
            </div>

            {/* Visual Teaser Body */}
            <div className="p-7 md:p-9 bg-gradient-to-br from-amber-950/80 via-slate-950 to-slate-900 border-b border-slate-800 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-lg">
                  <Flame className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  🔥 Dual AC / Heating Active
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
                Heating & Air Conditioning
              </p>
              <h3 className="text-2xl font-black mb-2 text-white">Northstar Heating & Air</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dual AC/Heating seasonal pathways, symptom diagnostic picker, & energy savings visualizer.
              </p>
            </div>

            {/* Inclusions & CTA */}
            <div className="p-7 flex flex-col justify-between flex-grow bg-slate-950/60">
              <ul className="space-y-2.5 mb-8 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Seasonal AC not cooling vs Heating diagnostic switcher</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Interactive home sq ft SEER2 savings calculator visualizer</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Time slot appointment window intake prototype</span>
                </li>
              </ul>

              <Link
                href="/demos/hvac"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 min-h-[48px] text-xs inline-flex items-center justify-center gap-2 font-extrabold rounded-2xl transition-all shadow-lg shadow-amber-500/20 group-hover:scale-[1.01]"
              >
                Launch HVAC Demo <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
