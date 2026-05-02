import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Workflow, BookOpen, Check, MessageSquare, Hammer, Rocket } from "lucide-react";

export const metadata: Metadata = {
    title: "Work With Me | Bajwa Dev",
    description: "Book a HubSpot + AI workflow build. Fixed price, fixed timeline, 5-day delivery for B2B SaaS teams.",
};

const offers = [
    {
        title: "HubSpot + AI Sales Workflow Build",
        tagline: "Your revenue stack, fully wired in 5 days.",
        description:
            "I design and build your HubSpot pipeline, AI-assisted sequences, and automation layer — from scratch or on top of what you have. Fixed price, fixed timeline, no ambiguity.",
        deliverables: [
            "HubSpot pipeline architecture & configuration",
            "AI-powered outreach sequences",
            "Lead routing & automation workflows",
            "Loom walkthrough + 30-day async support",
        ],
        price: "Starting at $500",
        priceNote: "Testimonial rate — limited spots",
        ctaLabel: "Book a Discovery Call",
        ctaHref: "/contact",
        ctaStyle: "primary" as const,
        badge: "Most Popular",
        flagship: true,
        Icon: Sparkles,
    },
    {
        title: "Custom AI Workflow Build",
        tagline: "Beyond HubSpot. Any workflow, any stack.",
        description:
            "For teams that need more than CRM automation — n8n pipelines, AI agents, Make integrations, or full sales infrastructure. Scoped per project.",
        deliverables: [
            "n8n / Make workflow architecture",
            "AI agent design & implementation",
            "Multi-tool integration & data routing",
            "Full documentation + handoff",
        ],
        price: "From $1,500",
        priceNote: "Custom scope, fixed quote",
        ctaLabel: "Let's Scope It",
        ctaHref: "/contact",
        ctaStyle: "secondary" as const,
        Icon: Workflow,
    },
    {
        title: "The AI Sales Playbook",
        tagline: "Build it yourself. With the exact framework I use.",
        description:
            "A practical playbook for operators and founders who want to build AI-assisted sales systems without hiring anyone. Templates, workflows, and step-by-step guides included.",
        deliverables: [
            "HubSpot setup templates",
            "Proven outreach frameworks",
            "AI prompt library for sales",
            "Workflow automation blueprints",
        ],
        price: "Self-paced",
        priceNote: "No budget required",
        ctaLabel: "Get the Playbook",
        ctaHref: "/product",
        ctaStyle: "secondary" as const,
        Icon: BookOpen,
    },
];

const steps = [
    {
        title: "Discovery Call",
        desc: "20 minutes. I scope your HubSpot setup and automation needs.",
        Icon: MessageSquare,
    },
    {
        title: "5-Day Build",
        desc: "I build your pipeline, sequences, and automation layer. You get daily updates.",
        Icon: Hammer,
    },
    {
        title: "Review & Launch",
        desc: "Loom walkthrough, 30-day async support, and full documentation.",
        Icon: Rocket,
    },
];

export default function WorkWithMePage() {
    return (
        <div className="flex flex-col w-full">
            {/* Hero */}
            <section className="section-shell">
                <div className="container-shell max-w-5xl text-center">
                    <div className="mb-6 inline-flex items-center rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest muted-copy">
                        WORK WITH ME
                    </div>
                    <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight">
                        Three Ways to Work Together
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg muted-copy">
                        Done-for-you, custom-scoped, or self-serve — pick the path that fits where you are right now.
                    </p>
                </div>
            </section>

            {/* Offer Cards */}
            <section className="container-shell mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
                    {offers.map((offer) => {
                        const ringClass = offer.flagship
                            ? "ring-2 ring-[var(--color-ocean)] md:scale-[1.02]"
                            : "";
                        return (
                            <div
                                key={offer.title}
                                className={`glass-card card-hover relative flex flex-col rounded-2xl p-6 md:p-8 overflow-hidden ${ringClass}`}
                            >
                                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-[#2D6A8F] to-transparent opacity-60" />
                                {offer.badge && (
                                    <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-[var(--color-ocean)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                                        {offer.badge}
                                    </span>
                                )}
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(45,106,143,0.1)] mb-4">
                                    <offer.Icon className="h-5 w-5 text-[var(--color-ocean)]" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 pr-24">{offer.title}</h3>
                                <p className="text-sm font-semibold text-[var(--color-ocean)] mb-3">{offer.tagline}</p>
                                <p className="text-sm leading-relaxed muted-copy mb-6">{offer.description}</p>
                                <ul className="space-y-3 mb-6">
                                    {offer.deliverables.map((item) => (
                                        <li key={item} className="flex items-start text-sm muted-copy leading-relaxed">
                                            <Check className="h-4 w-4 text-[var(--color-ocean)] mr-2 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto">
                                    <div className="pt-4 mb-5 border-t border-[var(--color-site-border)]">
                                        <p className="text-base font-bold">{offer.price}</p>
                                        <p className="text-xs muted-copy mt-1">{offer.priceNote}</p>
                                    </div>
                                    <Link
                                        href={offer.ctaHref}
                                        className={`${
                                            offer.ctaStyle === "primary" ? "btn-primary pulse-glow" : "btn-secondary"
                                        } w-full min-h-[48px] text-sm inline-flex items-center justify-center`}
                                    >
                                        {offer.ctaLabel}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* How It Works */}
            <section className="section-shell">
                <div className="container-shell max-w-4xl">
                    <div className="mb-10 text-center">
                        <div className="mb-4 inline-flex items-center rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest muted-copy">
                            HOW IT WORKS
                        </div>
                        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight">
                            From Call to Live in 5 Days
                        </h2>
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
                                <p className="text-sm muted-copy">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-shell pb-20 text-center">
                <div className="glass-card rounded-3xl p-12 md:p-16 flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to build?</h2>
                    <p className="mt-3 mb-8 muted-copy">Tell me about your pipeline and I&apos;ll respond within 24 hours.</p>
                    <Link href="/contact" className="btn-primary min-h-[52px] px-10 text-base pulse-glow inline-flex items-center justify-center">
                        Book a Discovery Call
                    </Link>
                </div>
            </section>
        </div>
    );
}
