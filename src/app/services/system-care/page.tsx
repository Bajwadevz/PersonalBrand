import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, HelpCircle } from "lucide-react";
import OfferCard from "@/components/OfferCard";

export const metadata: Metadata = {
  title: "System Care & Post-Launch Support Plans | Bajwaa Dev",
  description:
    "Ongoing monitoring, monthly health reports, minor fixes, prompt tuning, and growth optimization for deployed website and automation systems.",
  alternates: {
    canonical: "https://bajwaa.dev/services/system-care",
  },
  openGraph: {
    title: "System Care & Post-Launch Support Plans | Bajwaa Dev",
    description:
      "Ongoing monitoring, monthly health reports, minor fixes, prompt tuning, and growth optimization for deployed website and automation systems.",
    url: "https://bajwaa.dev/services/system-care",
  },
};

const faqs = [
  {
    q: "Who is eligible for System Care plans?",
    a: "System Care is available for active implementations completed by bajwaa.dev or following a paid system takeover audit.",
  },
  {
    q: "What counts as maintenance versus a new project?",
    a: "Maintenance includes bug fixes, API connection monitoring, prompt tuning, minor field adjustments, and routine health checks. New full-page builds or complex new multi-app integrations are quoted as separate fixed-scope projects.",
  },
  {
    q: "Are third-party tool and API costs included in the monthly rate?",
    a: "No. Clients retain direct ownership of their own software, domain, web hosting, Twilio, Make, n8n, and OpenAI/Claude accounts.",
  },
];

export default function SystemCarePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="section-shell">
        <div className="container-shell max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest muted-copy">
            POST-LAUNCH SYSTEM CARE
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.1]">
            Peace of mind for your deployed website & automations
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg muted-copy leading-relaxed">
            Continuous monitoring, incident review, monthly performance reporting, and controlled workflow updates so your lead intake never skips a beat.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-ocean)] bg-[rgba(45,106,143,0.08)] px-4 py-2 rounded-full">
            <ShieldCheck className="h-4 w-4" /> Available following a bajwaa.dev build or paid takeover audit
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="container-shell mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <OfferCard offerKey="systemCare" />
          <OfferCard offerKey="growthOptimization" flagship={true} />
        </div>
      </section>

      {/* Scope Boundaries */}
      <section className="container-shell mb-24">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-[var(--color-card-border)]">
          <h2 className="text-xl font-bold mb-6">Maintenance vs New Project Boundaries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                ✓ Included in System Care
              </h3>
              <ul className="space-y-2 text-sm muted-copy">
                <li>• Continuous webhook & API monitoring</li>
                <li>• Incident triage and broken trigger repairs</li>
                <li>• Prompt tuning for better lead classification</li>
                <li>• Monthly health and lead response reports</li>
                <li>• Minor text, field, or routing adjustments</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold text-amber-600 dark:text-amber-400 mb-3">
                ⚡ Quoted as Separate Fixed Project
              </h3>
              <ul className="space-y-2 text-sm muted-copy">
                <li>• Complete website design revamps</li>
                <li>• Adding new 5+ page site sections</li>
                <li>• Integrating new enterprise CRM systems</li>
                <li>• Custom SaaS software development</li>
                <li>• Ongoing ad management or SEO campaigns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-shell">
        <div className="container-shell max-w-4xl">
          <div className="mb-10 text-center">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(45,106,143,0.1)] mb-3">
              <HelpCircle className="h-5 w-5 text-[var(--color-ocean)]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">System Care FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Need post-launch system care?</h2>
          <p className="mt-3 mb-8 muted-copy max-w-xl">
            Select a plan or inquire about a takeover audit for your existing automation stack.
          </p>
          <Link
            href="/contact?offer=system-care"
            className="btn-primary min-h-[52px] px-10 text-base pulse-glow inline-flex items-center justify-center"
          >
            Inquire About System Care
          </Link>
        </div>
      </section>
    </div>
  );
}
