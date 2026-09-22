import Link from "next/link";
import { Metadata } from "next";
import { Check, XCircle, HelpCircle } from "lucide-react";
import LoomEmbed from "@/components/LoomEmbed";
import { getDisplayedPrice } from "@/lib/commercialConfig";

export const metadata: Metadata = {
  title: "AI Lead Response & Booking System | Flagship Implementation",
  description:
    "Every inbound lead answered in under 60 seconds, qualified, routed, and booked straight to your calendar in 10 business days.",
  alternates: {
    canonical: "https://bajwaa.dev/services/lead-response",
  },
  openGraph: {
    title: "AI Lead Response & Booking System | Flagship Implementation",
    description:
      "Every inbound lead answered in under 60 seconds, qualified, routed, and booked straight to your calendar in 10 business days.",
    url: "https://bajwaa.dev/services/lead-response",
  },
};

const deliveryPlan = [
  {
    days: "Days 1–2",
    title: "Mapping & Access Setup",
    desc: "Map all intake sources, required fields, qualification rules, urgency levels, calendar availability, escalation paths, and consent boundaries.",
  },
  {
    days: "Days 3–5",
    title: "Response & Qualification Logic",
    desc: "Build under-60-second automated response paths, qualification scoring, and message templates on your existing stack.",
  },
  {
    days: "Days 6–7",
    title: "Routing & CRM Integration",
    desc: "Connect calendar booking handoffs, CRM property tagging, sheet logging, and real-time team notification alerts.",
  },
  {
    days: "Days 8–9",
    title: "Scenario & Fail-Safe Testing",
    desc: "Test normal happy-path leads, urgent after-hours cases, incomplete form fills, duplicate submissions, and failure alert fallbacks.",
  },
  {
    days: "Day 10",
    title: "Controlled Launch & Team Handoff",
    desc: "Controlled live deployment, Loom video walkthrough, runbook documentation handoff, and initial monitoring setup.",
  },
];

const faqs = [
  {
    q: "Will this replace our existing CRM or phone provider?",
    a: "No. We build on top of your existing forms, phone system (e.g., Twilio, OpenPhone), calendar (Calendly, Google Calendar), and CRM (HubSpot, Airtable, ActiveCampaign).",
  },
  {
    q: "What happens if a lead submits an invalid phone number or email?",
    a: "The system logs the error, attempts secondary validation, and triggers a fallback alert for team review so no lead is silently lost.",
  },
  {
    q: "Is third-party software usage included in the price?",
    a: "Third-party software fees (telephony, SMS, automation platform, AI API usage) are paid directly by the client to your software providers.",
  },
];

export default function LeadResponsePage() {
  const priceInfo = getDisplayedPrice("aiLeadResponseBookingSystem");

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="section-shell">
        <div className="container-shell max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-[rgba(45,106,143,0.1)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)]">
            FLAGSHIP 10-DAY IMPLEMENTATION
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.1]">
            Every inbound lead answered, qualified, and moved toward booking
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg muted-copy leading-relaxed">
            A 10-business-day implementation connecting your forms, phone, calendar, and CRM so leads receive an immediate response and the right person gets the right context.
          </p>

          <div className="mt-8 p-6 rounded-2xl glass-card max-w-md mx-auto border-2 border-[var(--color-ocean)]">
            <div className="flex items-baseline justify-center gap-3">
              {priceInfo.isFounding && (
                <span className="text-base line-through text-gray-400 font-medium">
                  {priceInfo.formattedStandard}
                </span>
              )}
              <span className="text-3xl font-bold text-[var(--color-site-text)]">
                {priceInfo.formattedCurrent}
              </span>
              {priceInfo.isFounding && (
                <span className="text-xs font-bold text-[var(--color-ocean)] bg-[rgba(45,106,143,0.12)] px-2.5 py-1 rounded-full">
                  50% Early Customer
                </span>
              )}
            </div>
            <p className="text-xs muted-copy mt-2">Delivery: 10 business days • 30 days post-launch support included</p>
            <p className="text-[11px] text-[var(--color-ocean)] font-medium mt-1">
              Third-party API & software usage billed separately
            </p>

            <Link
              href="/contact?offer=ai-lead-response-booking-system"
              className="btn-primary pulse-glow min-h-[48px] w-full text-sm inline-flex items-center justify-center mt-4"
            >
              Book flagship implementation
            </Link>
          </div>
        </div>
      </section>

      {/* Video Walkthrough Embed */}
      <section className="container-shell mb-24">
        <LoomEmbed
          eyebrow="SYSTEM WALKTHROUGH"
          heading="See how the 10-day lead response system works"
        />
      </section>

      {/* Who it is for / Not for */}
      <section className="container-shell mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-8 border-l-4 border-l-emerald-500">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Check className="h-5 w-5 text-emerald-500" /> Who This Is For
            </h2>
            <ul className="space-y-3 text-sm muted-copy">
              <li className="flex items-start">
                <span className="mr-2 text-emerald-500 font-bold">•</span>
                <span>Owner-led service businesses receiving 15+ inbound leads or calls per month</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-emerald-500 font-bold">•</span>
                <span>Contractors losing jobs because team members are on job sites during the day</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-emerald-500 font-bold">•</span>
                <span>Companies with existing forms, phone, CRM, or booking software ready to connect</span>
              </li>
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-8 border-l-4 border-l-rose-500">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <XCircle className="h-5 w-5 text-rose-500" /> Who This Is Not For
            </h2>
            <ul className="space-y-3 text-sm muted-copy">
              <li className="flex items-start">
                <span className="mr-2 text-rose-500 font-bold">•</span>
                <span>Brand-new ideas without any lead traffic or existing operations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-rose-500 font-bold">•</span>
                <span>Businesses looking for generic outbound spam bots</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-rose-500 font-bold">•</span>
                <span>Teams expecting unconstrained AI to handle sensitive medical or legal counsel</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* System Flow */}
      <section className="container-shell mb-24">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-[var(--color-card-border)] text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)] mb-2 block">
            INBOUND SYSTEM FLOW
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">From Form Fill to Booked Job</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-[rgba(45,106,143,0.06)] border border-[rgba(45,106,143,0.2)]">
              <span className="text-xs font-mono font-bold text-[var(--color-ocean)]">01. INTAKE</span>
              <h3 className="font-bold text-base mt-1">Lead Source</h3>
              <p className="text-xs muted-copy mt-1">Form fill, missed phone call, or after-hours inquiry arrives.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[rgba(45,106,143,0.06)] border border-[rgba(45,106,143,0.2)]">
              <span className="text-xs font-mono font-bold text-[var(--color-ocean)]">02. RESPONSE</span>
              <h3 className="font-bold text-base mt-1">Under 60s SMS/Email</h3>
              <p className="text-xs muted-copy mt-1">Immediate friendly text-back captures lead attention instantly.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[rgba(45,106,143,0.06)] border border-[rgba(45,106,143,0.2)]">
              <span className="text-xs font-mono font-bold text-[var(--color-ocean)]">03. QUALIFICATION</span>
              <h3 className="font-bold text-base mt-1">AI Rubric & Urgency</h3>
              <p className="text-xs muted-copy mt-1">Job details, location, and budget scored against your criteria.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[rgba(45,106,143,0.06)] border border-[rgba(45,106,143,0.2)]">
              <span className="text-xs font-mono font-bold text-[var(--color-ocean)]">04. BOOKING</span>
              <h3 className="font-bold text-base mt-1">Calendar & CRM</h3>
              <p className="text-xs muted-copy mt-1">Lead booked to calendar, logged in CRM with team owner alert.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Day Delivery Outline */}
      <section className="container-shell mb-24">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)]">
            TIMELINE & MILESTONES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">10-Business-Day Implementation Outline</h2>
        </div>

        <div className="space-y-4">
          {deliveryPlan.map((step) => (
            <div key={step.days} className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-xs font-mono font-bold uppercase text-[var(--color-ocean)] bg-[rgba(45,106,143,0.1)] px-3 py-1.5 rounded-xl shrink-0 w-fit">
                {step.days}
              </span>
              <div>
                <h3 className="font-bold text-base">{step.title}</h3>
                <p className="text-xs sm:text-sm muted-copy mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="section-shell">
        <div className="container-shell max-w-4xl">
          <div className="mb-10 text-center">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(45,106,143,0.1)] mb-3">
              <HelpCircle className="h-5 w-5 text-[var(--color-ocean)]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Flagship System FAQ</h2>
          </div>
          <div className="grid gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card rounded-2xl p-6">
                <h3 className="text-base font-bold mb-2">{faq.q}</h3>
                <p className="text-sm muted-copy leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-shell pb-20 text-center">
        <div className="glass-card rounded-3xl p-10 md:p-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready for a 10-day lead response build?</h2>
          <p className="mt-3 mb-8 muted-copy max-w-xl">
            Book your lead response audit to confirm system fit and receive a fixed-scope quote.
          </p>
          <Link
            href="/contact?offer=ai-lead-response-booking-system"
            className="btn-primary min-h-[52px] px-10 text-base pulse-glow inline-flex items-center justify-center"
          >
            Book Flagship System Build
          </Link>
        </div>
      </section>
    </div>
  );
}
