import Link from "next/link";
import { Metadata } from "next";
import { TrendingUp, Zap, BookOpen, Check, MessageSquare, Hammer, Rocket } from "lucide-react";
import LoomEmbed from "@/components/LoomEmbed";

export const metadata: Metadata = {
    title: "Work With Me",
    description: "AI lead response and booking systems for service businesses, an ongoing retainer, or the self-serve playbook. Fixed scope, fixed price, live in 10 business days.",
    alternates: {
        canonical: "https://bajwaa.dev/work-with-me",
    },
    openGraph: {
        title: "Work With Me | Bajwaa Dev",
        description: "AI lead response and booking systems for service businesses, an ongoing retainer, or the self-serve playbook. Fixed scope, fixed price, live in 10 business days.",
        url: "https://bajwaa.dev/work-with-me",
    },
    twitter: {
        title: "Work With Me | Bajwaa Dev",
        description: "AI lead response and booking systems for service businesses, an ongoing retainer, or the self-serve playbook. Fixed scope, fixed price, live in 10 business days.",
    },
};

const offers = [
    {
        title: "AI Lead Response & Booking System",
        tagline: "Every inbound lead answered in under 60 seconds, qualified, and booked to your calendar.",
        description:
            "Most service businesses lose the job in the gap between the form fill and the callback. I build the system that closes that gap: every form fill, missed call, and after-hours inquiry gets a response in under 60 seconds, gets qualified, and gets booked straight to your calendar. Nights and weekends included. Built on your existing forms, phone, and calendar in 10 business days.",
        deliverables: [
            "Instant text-back on every form fill and missed call",
            "AI qualification + automatic booking to your calendar",
            "Follow-up chase for leads that go quiet",
            "Loom walkthrough + 30 days of support",
        ],
        price: "$3,000–$6,000",
        priceNote: "Fixed quote after your audit",
        ctaLabel: "Book a Free Lead-Response Audit",
        ctaHref: "/contact",
        ctaStyle: "primary" as const,
        badge: "Start Here",
        flagship: true,
        Icon: TrendingUp,
    },
    {
        title: "Response System Retainer",
        tagline: "Ongoing monitoring, monthly reporting, and new automations as you grow.",
        description:
            "For businesses running the system who want it improved every month: ongoing monitoring, a monthly performance report, and new automations added as your needs change.",
        deliverables: [
            "Ongoing monitoring & fixes",
            "Monthly performance report",
            "1-3 new automations per month",
            "Priority support",
        ],
        price: "$750/mo",
        priceNote: "After your build",
        ctaLabel: "Ask About Retainers",
        ctaHref: "/contact",
        ctaStyle: "secondary" as const,
        Icon: Zap,
    },
    {
        title: "The AI Automation Playbook",
        tagline: "Build it yourself, with the frameworks I use.",
        description:
            "For founders and operators who want to automate their own workflows without hiring anyone.",
        deliverables: [
            "Workflow automation blueprints",
            "AI prompt systems for sales & ops",
            "CRM setup templates",
            "Step-by-step implementation guides",
        ],
        price: "Free",
        priceNote: "Waitlist open",
        ctaLabel: "Join the Waitlist",
        ctaHref: "/product",
        ctaStyle: "secondary" as const,
        Icon: BookOpen,
    },
];

const steps = [
    {
        title: "Lead-Response Audit",
        desc: "I test your real intake flow, form, phone, after-hours, and follow-up, then record exactly where leads are leaking. Free for qualified businesses.",
        Icon: MessageSquare,
    },
    {
        title: "10-Day Build",
        desc: "I build your response and booking system in 10 business days on your existing forms, phone, and calendar. Daily updates. No disappearing.",
        Icon: Hammer,
    },
    {
        title: "Handoff & Support",
        desc: "Full Loom walkthrough, documentation, and 30 days of support so it actually sticks and keeps booking.",
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
                        One flagship build, plus two ways in.
                    </p>
                </div>
            </section>

            {/* Offer Cards */}
            <section className="container-shell mt-4">
                {/* Flagship: visually dominant, first position */}
                {(() => {
                    const offer = offers[0];
                    return (
                        <div
                            key={offer.title}
                            className="glass-card card-hover relative flex flex-col rounded-2xl p-8 md:p-12 overflow-hidden border-2 border-[var(--color-ocean)] bg-[rgba(45,106,143,0.04)]"
                        >
                            <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-[var(--color-ocean)]" />
                            {offer.badge && (
                                <span className="absolute right-6 top-6 inline-flex items-center rounded-full bg-[var(--color-ocean)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                                    {offer.badge}
                                </span>
                            )}
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(45,106,143,0.12)] mb-5">
                                <offer.Icon className="h-6 w-6 text-[var(--color-ocean)]" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2 pr-28">{offer.title}</h3>
                            <p className="text-base font-semibold text-[var(--color-ocean)] mb-4">{offer.tagline}</p>
                            <p className="text-base leading-relaxed muted-copy mb-6 max-w-2xl">{offer.description}</p>
                            <ul className="grid gap-3 mb-8 sm:grid-cols-2">
                                {offer.deliverables.map((item) => (
                                    <li key={item} className="flex items-start text-sm muted-copy leading-relaxed">
                                        <Check className="h-4 w-4 text-[var(--color-ocean)] mr-2 mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-[var(--color-site-border)]">
                                <div>
                                    <p className="text-2xl font-bold">{offer.price}</p>
                                    <p className="text-sm muted-copy mt-1">{offer.priceNote}</p>
                                </div>
                                <Link
                                    href={offer.ctaHref}
                                    className="btn-primary pulse-glow min-h-[48px] px-8 text-sm inline-flex items-center justify-center w-full sm:w-auto"
                                >
                                    {offer.ctaLabel}
                                </Link>
                            </div>
                        </div>
                    );
                })()}

                <div className="mt-10">
                    <LoomEmbed
                        eyebrow="WHAT YOU'RE BUYING"
                        heading="A 90-second walkthrough of the build"
                    />
                </div>

                {/* Secondary offers, lighter and smaller */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 items-stretch">
                    {offers.slice(1).map((offer) => (
                        <div
                            key={offer.title}
                            className="glass-card relative flex flex-col rounded-2xl p-5 md:p-6 overflow-hidden"
                        >
                            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(45,106,143,0.08)] mb-3">
                                <offer.Icon className="h-4 w-4 text-[var(--color-ocean)]" />
                            </div>
                            <h3 className="text-base font-bold mb-1">{offer.title}</h3>
                            <p className="text-xs font-semibold text-[var(--color-ocean)] mb-2">{offer.tagline}</p>
                            <p className="text-xs leading-relaxed muted-copy mb-4 line-clamp-2">{offer.description}</p>
                            <ul className="space-y-1.5 mb-4">
                                {offer.deliverables.map((item) => (
                                    <li key={item} className="flex items-start text-xs muted-copy leading-relaxed">
                                        <Check className="h-3 w-3 text-[var(--color-ocean)] mr-1.5 mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto">
                                <div className="pt-3 mb-4 border-t border-[var(--color-site-border)]">
                                    <p className="text-sm font-bold">{offer.price}</p>
                                    <p className="text-[11px] muted-copy mt-0.5">{offer.priceNote}</p>
                                </div>
                                <Link
                                    href={offer.ctaHref}
                                    className="btn-secondary w-full min-h-[40px] text-xs inline-flex items-center justify-center"
                                >
                                    {offer.ctaLabel}
                                </Link>
                            </div>
                        </div>
                    ))}
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
                            From missed leads to booked jobs in 10 days
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to stop losing leads?</h2>
                    <p className="mt-3 mb-8 muted-copy">Tell me how leads currently come in and I&apos;ll respond within 24 hours.</p>
                    <Link href="/contact" className="btn-primary min-h-[52px] px-10 text-base pulse-glow inline-flex items-center justify-center">
                        Book a Free Lead-Response Audit
                    </Link>
                </div>
            </section>
        </div>
    );
}
