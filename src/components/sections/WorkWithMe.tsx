import Link from "next/link";
import { TrendingUp, Layout, Workflow } from "lucide-react";
import { commercialConfig, getDisplayedPrice } from "@/lib/commercialConfig";

export default function WorkWithMe() {
  const flagshipPrice = getDisplayedPrice("aiLeadResponseBookingSystem");
  const landingPrice = getDisplayedPrice("conversionLandingPage");
  const missedCallPrice = getDisplayedPrice("missedCallTextBack");

  return (
    <section id="work-with-me" className="section-shell relative z-10 w-full">
      <div className="container-shell w-full">
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest muted-copy">
            WORK WITH ME
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-tight mb-4">
            Three Ways to Work Together
          </h2>
          <p className="max-w-2xl text-base muted-copy">
            One flagship inbound system, plus conversion-focused website builds and focused workflow automations.
          </p>
        </div>

        {/* Card 1 — Flagship */}
        <div className="glass-card card-hover relative flex flex-col rounded-2xl p-8 md:p-10 overflow-hidden border-2 border-[var(--color-ocean)] bg-[rgba(45,106,143,0.04)]">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-[var(--color-ocean)]" />
          <span className="absolute right-6 top-6 inline-flex items-center rounded-full bg-[var(--color-ocean)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
            Recommended
          </span>
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(45,106,143,0.12)] mb-4">
            <TrendingUp className="h-5 w-5 text-[var(--color-ocean)]" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 pr-28">AI Lead Response & Booking System</h3>
          <p className="text-sm font-semibold text-[var(--color-ocean)] mb-6">
            Every inbound lead answered, qualified, routed, and moved toward booking—day or night.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-xs sm:text-sm muted-copy">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ocean)]"></span>
              Instant under-60-second response to web forms & missed calls
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ocean)]"></span>
              Automated AI qualification & calendar booking handoff
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ocean)]"></span>
              CRM & sheet lead logging with instant owner alerts
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ocean)]"></span>
              Full 10-business-day delivery + 30 days post-launch support
            </li>
          </ul>

          <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-5 border-t border-[var(--color-site-border)]">
            <div>
              <div className="flex items-baseline gap-2">
                {flagshipPrice.isFounding && (
                  <span className="text-sm line-through text-gray-400 font-medium">
                    {flagshipPrice.formattedStandard}
                  </span>
                )}
                <span className="text-2xl font-bold">{flagshipPrice.formattedCurrent}</span>
                {flagshipPrice.isFounding && (
                  <span className="text-xs font-bold text-[var(--color-ocean)] bg-[rgba(45,106,143,0.1)] px-2 py-0.5 rounded-full">
                    50% Early Customer
                  </span>
                )}
              </div>
              <p className="text-xs muted-copy mt-1">Delivery: {commercialConfig.offers.aiLeadResponseBookingSystem.delivery}</p>
            </div>
            <Link
              href="/services/lead-response"
              className="btn-primary pulse-glow min-h-[48px] px-8 text-sm inline-flex items-center justify-center w-full sm:w-auto"
            >
              View the system
            </Link>
          </div>
        </div>

        {/* Card 2 & 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 items-stretch">
          {/* Card 2 — Websites */}
          <div className="glass-card card-hover relative flex flex-col rounded-2xl p-6 overflow-hidden">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(45,106,143,0.08)] mb-3">
              <Layout className="h-5 w-5 text-[var(--color-ocean)]" />
            </div>
            <h3 className="text-lg font-bold mb-1">Websites Built for Inbound Growth</h3>
            <p className="text-xs font-semibold text-[var(--color-ocean)] mb-3">
              Conversion-focused service-business websites that turn visits into calls, forms, and booked work.
            </p>
            <p className="text-xs muted-copy leading-relaxed mb-4">
              From high-converting landing pages to complete 8-page service websites with service-area structures and lead capture connections.
            </p>

            <div className="mt-auto pt-4 border-t border-[var(--color-site-border)]">
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-gray-400 font-medium">From</span>
                  {landingPrice.isFounding && (
                    <span className="text-xs line-through text-gray-400 font-medium">
                      {landingPrice.formattedStandard}
                    </span>
                  )}
                  <span className="text-lg font-bold">{landingPrice.formattedCurrent}</span>
                  {landingPrice.isFounding && (
                    <span className="text-[10px] font-bold text-[var(--color-ocean)] bg-[rgba(45,106,143,0.1)] px-1.5 py-0.5 rounded">
                      50% OFF
                    </span>
                  )}
                </div>
                <p className="text-[11px] muted-copy mt-0.5">Delivery: 5–25 business days depending on scope</p>
              </div>
              <Link
                href="/services/websites"
                className="btn-secondary w-full min-h-[40px] text-xs inline-flex items-center justify-center"
              >
                Explore website packages
              </Link>
            </div>
          </div>

          {/* Card 3 — Automations */}
          <div className="glass-card card-hover relative flex flex-col rounded-2xl p-6 overflow-hidden">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(45,106,143,0.08)] mb-3">
              <Workflow className="h-5 w-5 text-[var(--color-ocean)]" />
            </div>
            <h3 className="text-lg font-bold mb-1">Focused Workflow Automations</h3>
            <p className="text-xs font-semibold text-[var(--color-ocean)] mb-3">
              Fix one lead or operations bottleneck without committing to a full rebuild.
            </p>
            <p className="text-xs muted-copy leading-relaxed mb-4">
              Missed-call text-back, form-to-CRM fast lanes, AI lead qualification, follow-up rescue, and operations workflow builds.
            </p>

            <div className="mt-auto pt-4 border-t border-[var(--color-site-border)]">
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-gray-400 font-medium">From</span>
                  {missedCallPrice.isFounding && (
                    <span className="text-xs line-through text-gray-400 font-medium">
                      {missedCallPrice.formattedStandard}
                    </span>
                  )}
                  <span className="text-lg font-bold">{missedCallPrice.formattedCurrent}</span>
                  {missedCallPrice.isFounding && (
                    <span className="text-[10px] font-bold text-[var(--color-ocean)] bg-[rgba(45,106,143,0.1)] px-1.5 py-0.5 rounded">
                      50% OFF
                    </span>
                  )}
                </div>
                <p className="text-[11px] muted-copy mt-0.5">Delivery: 3–15 business days depending on offer</p>
              </div>
              <Link
                href="/services/automations"
                className="btn-secondary w-full min-h-[40px] text-xs inline-flex items-center justify-center"
              >
                Explore automation offers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
