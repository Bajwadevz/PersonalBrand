import Link from "next/link";
import { Metadata } from "next";
import { Layout, Check, ShieldCheck, HelpCircle } from "lucide-react";
import OfferCard from "@/components/OfferCard";
import DemoShowcase from "@/components/DemoShowcase";

export const metadata: Metadata = {
  title: "Conversion-Focused Websites for Service Businesses | Bajwaa Dev",
  description:
    "High-converting service business websites built for mobile, clear positioning, lead-source tracking, and immediate form/call capture.",
  alternates: {
    canonical: "https://bajwaa.dev/services/websites",
  },
  openGraph: {
    title: "Conversion-Focused Websites for Service Businesses | Bajwaa Dev",
    description:
      "High-converting service business websites built for mobile, clear positioning, lead-source tracking, and immediate form/call capture.",
    url: "https://bajwaa.dev/services/websites",
  },
};

const inclusions = [
  "Brand adaptation matching your existing visual identity",
  "Responsive desktop, tablet & mobile implementation",
  "Accessible semantic HTML & clean structure",
  "Page speed & mobile performance optimization",
  "Form & booking CTA integration",
  "Basic page metadata & Open Graph fields",
  "One primary revision round and one polish round",
  "Loom video walkthrough handoff + 14 days bug-fix support",
];

const faqs = [
  {
    q: "Is copywriting included in the website packages?",
    a: "We adapt and refine your existing service positioning and key selling points into high-converting copy. Full brand copywriting or custom scriptwriting can be added if needed.",
  },
  {
    q: "Can my existing website be redesigned?",
    a: "Yes. We can rebuild your existing site on modern Next.js/Tailwind stack while preserving your domain, SEO equity, and URL structure.",
  },
  {
    q: "Which platform will be used?",
    a: "We build custom, fast Next.js applications hosted on Vercel or your preferred cloud host, ensuring zero slow plugin bloat and maximum Google Lighthouse performance.",
  },
  {
    q: "Who owns the website and code?",
    a: "You own 100% of the website code, domain, assets, and third-party accounts upon project completion.",
  },
];

export default function WebsiteServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="section-shell">
        <div className="container-shell max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest muted-copy">
            WEBSITES FOR SERVICE BUSINESSES
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.1]">
            A website should produce conversations, not just compliments
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg muted-copy leading-relaxed">
            Clear positioning, fast mobile pages, strong calls to action, and connected lead capture—built to turn local traffic and referrals into measurable inquiries.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?offer=conversion-landing-page"
              className="btn-primary pulse-glow min-h-[48px] px-8 text-sm inline-flex items-center justify-center w-full sm:w-auto"
            >
              Request a website quote
            </Link>
            <Link
              href="#demos"
              className="btn-secondary min-h-[48px] px-8 text-sm inline-flex items-center justify-center w-full sm:w-auto"
            >
              View service-business demos
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container-shell mb-20">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-[var(--color-card-border)]">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
            Why typical service business websites leak revenue
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-[rgba(17,17,17,0.03)] dark:bg-[rgba(255,255,255,0.02)] border border-[var(--color-site-border)]">
              <span className="text-xl font-bold text-red-500 mb-2 block">01</span>
              <h3 className="font-bold text-sm mb-1">Unclear Service Offers</h3>
              <p className="text-xs muted-copy">Visitors leave because they cannot quickly tell what you do or where you operate.</p>
            </div>
            <div className="p-4 rounded-xl bg-[rgba(17,17,17,0.03)] dark:bg-[rgba(255,255,255,0.02)] border border-[var(--color-site-border)]">
              <span className="text-xl font-bold text-red-500 mb-2 block">02</span>
              <h3 className="font-bold text-sm mb-1">Weak Mobile Call-to-Action</h3>
              <p className="text-xs muted-copy">Over 70% of local service traffic is on mobile. Small buttons and hidden phone numbers lose calls.</p>
            </div>
            <div className="p-4 rounded-xl bg-[rgba(17,17,17,0.03)] dark:bg-[rgba(255,255,255,0.02)] border border-[var(--color-site-border)]">
              <span className="text-xl font-bold text-red-500 mb-2 block">03</span>
              <h3 className="font-bold text-sm mb-1">Slow Form Response</h3>
              <p className="text-xs muted-copy">Forms sit in an unmonitored email inbox instead of triggering immediate SMS or CRM alerts.</p>
            </div>
            <div className="p-4 rounded-xl bg-[rgba(17,17,17,0.03)] dark:bg-[rgba(255,255,255,0.02)] border border-[var(--color-site-border)]">
              <span className="text-xl font-bold text-red-500 mb-2 block">04</span>
              <h3 className="font-bold text-sm mb-1">No Lead Tracking</h3>
              <p className="text-xs muted-copy">You cannot tell which ads, local listings, or search terms produced your best clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="container-shell mb-24">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ocean)]">
            WEBSITE PACKAGES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">Select the scope for your business</h2>
          <p className="text-sm muted-copy mt-2">All prices feature 50% early-customer launch rates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OfferCard offerKey="conversionLandingPage" Icon={Layout} />
          <OfferCard offerKey="essentialServiceWebsite" Icon={Layout} />
          <OfferCard offerKey="modernLeadGenerationWebsite" Icon={Layout} />
          <OfferCard offerKey="websiteInboundFlowSystem" Icon={Layout} flagship={true} />
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="container-shell mb-24">
        <div className="glass-card rounded-2xl p-6 md:p-10 overflow-x-auto">
          <h2 className="text-xl font-bold mb-6">Website Package Comparison</h2>
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-[var(--color-site-border)] muted-copy">
                <th className="py-3 pr-4 font-semibold">Feature</th>
                <th className="py-3 px-3 font-semibold text-center">Landing Page</th>
                <th className="py-3 px-3 font-semibold text-center">Essential (5 Pg)</th>
                <th className="py-3 px-3 font-semibold text-center">Lead-Gen (8 Pg)</th>
                <th className="py-3 px-3 font-semibold text-center text-[var(--color-ocean)]">Website + Inbound System</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-site-border)]">
              <tr>
                <td className="py-3 pr-4 font-medium">Page Count</td>
                <td className="py-3 px-3 text-center">1 Page</td>
                <td className="py-3 px-3 text-center">Up to 5</td>
                <td className="py-3 px-3 text-center">Up to 8</td>
                <td className="py-3 px-3 text-center font-bold">Custom Multi-Page</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium">Mobile-First Build</td>
                <td className="py-3 px-3 text-center">✓</td>
                <td className="py-3 px-3 text-center">✓</td>
                <td className="py-3 px-3 text-center">✓</td>
                <td className="py-3 px-3 text-center">✓</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium">Service-Area Structure</td>
                <td className="py-3 px-3 text-center">—</td>
                <td className="py-3 px-3 text-center">Basic</td>
                <td className="py-3 px-3 text-center">Advanced</td>
                <td className="py-3 px-3 text-center">Advanced</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium">Inbound Lead Flow</td>
                <td className="py-3 px-3 text-center">Form Only</td>
                <td className="py-3 px-3 text-center">Form + Booking</td>
                <td className="py-3 px-3 text-center">Form + CRM</td>
                <td className="py-3 px-3 text-center font-bold text-[var(--color-ocean)]">Full Instant Lead Response System</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium">Delivery Timeline</td>
                <td className="py-3 px-3 text-center">5–7 days</td>
                <td className="py-3 px-3 text-center">10–14 days</td>
                <td className="py-3 px-3 text-center">15–20 days</td>
                <td className="py-3 px-3 text-center font-bold">20–25 days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Demo Showcase */}
      <div id="demos">
        <DemoShowcase />
      </div>

      {/* Inclusions */}
      <section className="container-shell mb-24">
        <div className="glass-card rounded-2xl p-8 md:p-10 border border-[var(--color-card-border)]">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="h-6 w-6 text-[var(--color-ocean)]" />
            <h2 className="text-xl font-bold">Every Website Build Includes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inclusions.map((item) => (
              <div key={item} className="flex items-start text-sm muted-copy">
                <Check className="h-4 w-4 text-[var(--color-ocean)] mr-2.5 mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
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
            <h2 className="text-2xl md:text-3xl font-bold">Website Services FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready for a website that books jobs?</h2>
          <p className="mt-3 mb-8 muted-copy max-w-xl">
            Get a fixed quote tailored to your service business scope within one business day.
          </p>
          <Link
            href="/contact?offer=conversion-landing-page"
            className="btn-primary min-h-[52px] px-10 text-base pulse-glow inline-flex items-center justify-center"
          >
            Request a Website Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
