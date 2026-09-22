import Link from "next/link";
import { Metadata } from "next";
import { MessageSquare, Hammer, Rocket, HelpCircle } from "lucide-react";
import LoomEmbed from "@/components/LoomEmbed";
import OfferCard from "@/components/OfferCard";
import { getDisplayedPrice } from "@/lib/commercialConfig";

export const metadata: Metadata = {
  title: "Work With Me | Inbound & Automation Systems for Service Businesses",
  description:
    "Turn inbound attention into booked work through conversion-focused websites, immediate lead response, CRM automation, qualification, and follow-up.",
  alternates: {
    canonical: "https://bajwaa.dev/work-with-me",
  },
  openGraph: {
    title: "Work With Me | Bajwaa Dev",
    description:
      "Turn inbound attention into booked work through conversion-focused websites, immediate lead response, CRM automation, qualification, and follow-up.",
    url: "https://bajwaa.dev/work-with-me",
  },
  twitter: {
    title: "Work With Me | Bajwaa Dev",
    description:
      "Turn inbound attention into booked work through conversion-focused websites, immediate lead response, CRM automation, qualification, and follow-up.",
  },
};

const steps = [
  {
    title: "Fit & Flow Review",
    desc: "Confirm the business problem, current tools, required access, and measurable outcome before writing any code.",
    Icon: MessageSquare,
  },
  {
    title: "Fixed-Scope Build",
    desc: "Build and test your website or workflow automation; timeline from 3 to 25 business days depending on scope.",
    Icon: Hammer,
  },
  {
    title: "Handoff & Support",
    desc: "Provide Loom walkthrough, documentation, connected forms/workflows, and 14 to 30 days of included bug-fix support.",
    Icon: Rocket,
  },
];

const faqs = [
  {
    q: "How does the 50% early-customer pricing work?",
    a: "Standard rates are our permanent list prices. Early-customer pricing is a legitimate launch rate (50% off standard list prices) available for a limited implementation capacity while founding slots remain open.",
  },
  {
    q: "Are third-party tool and software fees included?",
    a: "Third-party software subscriptions (e.g. Twilio, Make, n8n hosting, CRM, domains, paid themes) are paid directly by the client. We set them up in your own accounts.",
  },
  {
    q: "What happens if our needs require a custom build?",
    a: "Complex requirements receive a transparent custom quote after your initial audit, rather than silently expanding package scope.",
  },
  {
    q: "How does the audit credit work?",
    a: "If you start a qualifying website, automation, or flagship implementation within 14 days of your Lead Flow & Website Audit, the full paid audit amount ($250 early customer rate) is credited directly toward your project total.",
  },
];

export default function WorkWithMePage() {
  const auditPrice = getDisplayedPrice("leadFlowAudit");

  return (
    <div className="flex flex-col w-full">
      {/* Section 1: Hero */}
      <section className="section-shell">
        <div className="container-shell max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest muted-copy">
            WORK WITH ME
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.1]">
            Build the inbound system your service business is missing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg muted-copy leading-relaxed">
            Start with a conversion-focused website, fix one broken workflow, or implement the full lead-response and booking system. Every project is fixed-scope, built on the tools that fit, and handed over with documentation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold muted-copy">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(45,106,143,0.08)] text-[var(--color-ocean)]">
              ✓ Delivery 3 to 25 business days
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(45,106,143,0.08)] text-[var(--color-ocean)]">
              ✓ Fixed-scope transparent pricing
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(45,106,143,0.08)] text-[var(--color-ocean)]">
              ✓ 50% Early-Customer Rates Active
            </span>
          </div>
        </div>
      </section>

      {/* Section 2: Flagship Highlighted Offer */}
      <section className="container-shell mb-16">
        <div className="mb-6 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)]">
            FLAGSHIP IMPLEMENTATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">Complete Lead Response & Booking</h2>
        </div>
        <OfferCard offerKey="aiLeadResponseBookingSystem" flagship={true} />
      </section>

      {/* Video Walkthrough Embed */}
      <section className="container-shell mb-20">
        <LoomEmbed
          eyebrow="SYSTEM WALKTHROUGH"
          heading="A 90-second walkthrough of the inbound system"
        />
      </section>

      {/* Section 3: Website Packages */}
      <section className="container-shell mb-20">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)]">
            SERVICE BUSINESS WEBSITES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">Websites Built for Inbound Growth</h2>
          <p className="text-sm muted-copy mt-2 max-w-2xl">
            Modern, conversion-focused websites that turn traffic and local searches into calls and booked jobs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OfferCard offerKey="conversionLandingPage" />
          <OfferCard offerKey="essentialServiceWebsite" />
          <OfferCard offerKey="modernLeadGenerationWebsite" />
          <OfferCard offerKey="websiteInboundFlowSystem" />
        </div>
      </section>

      {/* Section 4: Automation Quick Wins */}
      <section className="container-shell mb-20">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)]">
            WORKFLOW AUTOMATION BUILDS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">Focused Automation Offers</h2>
          <p className="text-sm muted-copy mt-2 max-w-2xl">
            Fix specific lead leaks or operational bottlenecks without committing to a full system rebuild.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <OfferCard offerKey="missedCallTextBack" compact={true} />
          <OfferCard offerKey="formToCrmFastLane" compact={true} />
          <OfferCard offerKey="aiLeadQualificationRouting" compact={true} />
          <OfferCard offerKey="automatedFollowUpRescue" compact={true} />
          <OfferCard offerKey="crmWorkflowCleanup" compact={true} />
          <OfferCard offerKey="operationsWorkflowBuild" compact={true} />
        </div>
      </section>

      {/* Section 5: System Care Plans */}
      <section className="container-shell mb-20">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)]">
            POST-LAUNCH MAINTENANCE & OPTIMIZATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">System Care Plans</h2>
          <p className="text-sm muted-copy mt-2 max-w-2xl">
            Available after a bajwaa.dev implementation or paid takeover audit to keep your systems running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OfferCard offerKey="systemCare" />
          <OfferCard offerKey="growthOptimization" />
        </div>
      </section>

      {/* Strategy & Audit Entry Offer Banner */}
      <section className="container-shell mb-20">
        <div className="glass-card rounded-2xl p-8 md:p-10 border-2 border-[var(--color-ocean)] bg-[rgba(45,106,143,0.03)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)] bg-[rgba(45,106,143,0.1)] px-3 py-1 rounded-full">
              Entry & Strategy Audit
            </span>
            <h3 className="text-xl md:text-2xl font-bold mt-3 mb-2">Lead Flow & Website Audit</h3>
            <p className="text-sm muted-copy leading-relaxed">
              Unsure where leads are dropping? Get a complete intake review, landing page audit, lead journey map, and prioritized recommendations in 2 business days.
            </p>
            <p className="text-xs font-semibold text-[var(--color-ocean)] mt-2">
              ★ Paid audit fee ($250 early rate) is 100% credited toward any qualifying implementation started within 14 days.
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-end shrink-0 text-center sm:text-right">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-sm line-through text-gray-400 font-medium">
                {auditPrice.formattedStandard}
              </span>
              <span className="text-3xl font-bold text-[var(--color-site-text)]">
                {auditPrice.formattedCurrent}
              </span>
            </div>
            <Link
              href="/contact?offer=lead-flow-audit"
              className="btn-primary min-h-[48px] px-8 text-sm inline-flex items-center justify-center whitespace-nowrap"
            >
              Book an Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="section-shell bg-[rgba(17,17,17,0.02)] dark:bg-[rgba(255,255,255,0.01)] border-y border-[var(--color-site-border)]">
        <div className="container-shell max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest muted-copy">
              DELIVERY PROCESS
            </div>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight">
              From initial audit to live implementation
            </h2>
            <p className="text-sm muted-copy mt-2">Delivery timelines range from 3 to 25 business days depending on project scope.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-[#2D6A8F] to-transparent opacity-50" />
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(45,106,143,0.1)] mb-4">
                  <step.Icon className="h-5 w-5 text-[var(--color-ocean)]" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)] mb-1">
                  Step {i + 1}
                </p>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm muted-copy leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Pricing Notes & FAQs */}
      <section className="section-shell">
        <div className="container-shell max-w-4xl">
          <div className="mb-10 text-center">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(45,106,143,0.1)] mb-3">
              <HelpCircle className="h-5 w-5 text-[var(--color-ocean)]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
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

      {/* Section 8: Final Contact CTA */}
      <section className="container-shell pb-20 text-center">
        <div className="glass-card rounded-3xl p-10 md:p-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to stop losing inbound leads?</h2>
          <p className="mt-3 mb-8 muted-copy max-w-xl">
            Tell me about your current intake flow, forms, and tools. You&apos;ll get a response within one business day with fit questions or next steps.
          </p>
          <Link
            href="/contact"
            className="btn-primary min-h-[52px] px-10 text-base pulse-glow inline-flex items-center justify-center"
          >
            Book a Free Lead-Response Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
