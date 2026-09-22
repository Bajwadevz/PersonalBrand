import Link from "next/link";
import { ArrowUpRight, Flame, Wrench } from "lucide-react";

export default function DemoShowcase() {
  return (
    <section className="py-16 md:py-24 relative z-10 w-full">
      <div className="container-shell w-full">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="mb-4 inline-flex items-center rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest muted-copy">
            WEBSITE CONCEPTS FOR SERVICE BUSINESSES
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight mb-4">
            Built to turn local searches into calls and booked jobs
          </h2>
          <p className="text-base muted-copy leading-relaxed">
            Explore two conversion-focused homepage concepts showing how clear offers, trust, service-area intent, and immediate lead capture work together seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Plumbing Card */}
          <div className="glass-card card-hover relative flex flex-col rounded-2xl overflow-hidden border border-[var(--color-card-border)] group">
            {/* Fake Mac Browser Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[var(--color-site-bg)] border-b border-[var(--color-site-border)]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
              </div>
              <span className="text-[11px] font-mono muted-copy bg-[rgba(17,17,17,0.04)] dark:bg-[rgba(255,255,255,0.06)] px-3 py-0.5 rounded-md">
                clearflow-plumbing-demo.bajwaa.dev
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                Concept Demo
              </span>
            </div>

            {/* Visual Header / Teaser */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-blue-500/5 via-sky-500/5 to-transparent border-b border-[var(--color-site-border)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-4">
                <Wrench className="h-5 w-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                Plumbing & Drain Services
              </p>
              <h3 className="text-xl font-bold mb-2">ClearFlow Plumbing Co.</h3>
              <p className="text-sm muted-copy">
                Emergency leak response, mobile 1-click calls, upfront pricing guarantee, and fast lead capture.
              </p>
            </div>

            {/* Features & CTA */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <ul className="space-y-2 mb-6 text-xs muted-copy">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ocean)]"></span>
                  Emergency leak vs routine repair request selector
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ocean)]"></span>
                  Service-area map & transparent dispatch window
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ocean)]"></span>
                  Instant booking form linked to bajwaa.dev inbound system
                </li>
              </ul>

              <Link
                href="/demos/plumbing"
                className="btn-secondary w-full min-h-[44px] text-xs inline-flex items-center justify-center gap-1.5 font-semibold group-hover:bg-[rgba(45,106,143,0.08)]"
              >
                View Plumbing Demo <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* HVAC Card */}
          <div className="glass-card card-hover relative flex flex-col rounded-2xl overflow-hidden border border-[var(--color-card-border)] group">
            {/* Fake Mac Browser Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[var(--color-site-bg)] border-b border-[var(--color-site-border)]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
              </div>
              <span className="text-[11px] font-mono muted-copy bg-[rgba(17,17,17,0.04)] dark:bg-[rgba(255,255,255,0.06)] px-3 py-0.5 rounded-md">
                northstar-hvac-demo.bajwaa.dev
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                Concept Demo
              </span>
            </div>

            {/* Visual Header / Teaser */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-transparent border-b border-[var(--color-site-border)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-4">
                <Flame className="h-5 w-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                Heating & Air Conditioning
              </p>
              <h3 className="text-xl font-bold mb-2">Northstar Heating & Air</h3>
              <p className="text-sm muted-copy">
                Dual AC/Heating seasonal pathways, symptom diagnostic selector, and automated appointment intake.
              </p>
            </div>

            {/* Features & CTA */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <ul className="space-y-2 mb-6 text-xs muted-copy">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ocean)]"></span>
                  Seasonal AC not cooling / Heating not working pathways
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ocean)]"></span>
                  Symptom picker (noises, high bill, routine tune-up)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ocean)]"></span>
                  Interactive appointment flow preview
                </li>
              </ul>

              <Link
                href="/demos/hvac"
                className="btn-secondary w-full min-h-[44px] text-xs inline-flex items-center justify-center gap-1.5 font-semibold group-hover:bg-[rgba(45,106,143,0.08)]"
              >
                View HVAC Demo <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
