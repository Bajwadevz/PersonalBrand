import Link from "next/link";
import { TrendingUp, Zap, BookOpen, Check } from "lucide-react";

type Offer = {
    title: string;
    tagline: string;
    description: string;
    deliverables: string[];
    price: string;
    priceNote: string;
    ctaLabel: string;
    ctaHref: string;
    ctaStyle: "primary" | "secondary";
    badge?: string;
    flagship?: boolean;
    Icon: typeof TrendingUp;
};

const offers: Offer[] = [
    {
        title: "Revenue Pipeline Automation",
        tagline: "Leads in. Revenue out. Nothing manual in between.",
        description:
            "I map your sales process and build the automation layer on top of whatever CRM or outreach stack you use. Lead intake, qualification, follow-up sequences, routing — all running without manual work.",
        deliverables: [
            "CRM pipeline setup & architecture",
            "AI-powered follow-up sequences",
            "Lead routing & qualification logic",
            "Loom walkthrough + 30-day async support",
        ],
        price: "Starting at $500",
        priceNote: "Testimonial rate — limited spots",
        ctaLabel: "Book a Workflow Audit",
        ctaHref: "/contact",
        ctaStyle: "primary",
        badge: "Most Popular",
        flagship: true,
        Icon: TrendingUp,
    },
    {
        title: "Operations Workflow Build",
        tagline: "Eliminate your biggest manual bottleneck.",
        description:
            "For teams drowning in repetitive ops — reporting, data routing, onboarding, internal alerts. I design and build the n8n or Make workflow that makes it disappear. Scoped per project.",
        deliverables: [
            "Process mapping & bottleneck audit",
            "n8n / Make / Zapier workflow build",
            "Multi-tool integration & data sync",
            "Full documentation + handoff",
        ],
        price: "From $1,500",
        priceNote: "Custom scope, fixed quote",
        ctaLabel: "Scope My Workflow",
        ctaHref: "/contact",
        ctaStyle: "secondary",
        Icon: Zap,
    },
    {
        title: "The AI Automation Playbook",
        tagline: "Build it yourself. With the exact framework I use.",
        description:
            "A step-by-step playbook for founders and operators who want to automate their own workflows without hiring anyone. Templates, n8n blueprints, and AI prompt systems included.",
        deliverables: [
            "Workflow automation blueprints",
            "AI prompt systems for sales & ops",
            "CRM setup templates",
            "Step-by-step implementation guides",
        ],
        price: "Self-paced",
        priceNote: "No budget required",
        ctaLabel: "Get the Playbook",
        ctaHref: "/product",
        ctaStyle: "secondary",
        Icon: BookOpen,
    },
];

export default function WorkWithMe() {
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
                        Done-for-you, custom-scoped, or self-serve — pick the path that fits where you are right now.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 items-stretch">
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

                                <h3 className="text-xl font-bold mb-2 pr-24">
                                    {offer.title}
                                </h3>
                                <p className="text-sm font-semibold text-[var(--color-ocean)] mb-3">
                                    {offer.tagline}
                                </p>
                                <p className="text-sm leading-relaxed muted-copy mb-6">
                                    {offer.description}
                                </p>

                                <ul className="space-y-3 mb-6">
                                    {offer.deliverables.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start text-sm muted-copy leading-relaxed"
                                        >
                                            <Check className="h-4 w-4 text-[var(--color-ocean)] mr-2 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto">
                                    <div className="pt-4 mb-5 border-t border-[var(--color-site-border)]">
                                        <p className="text-base font-bold">
                                            {offer.price}
                                        </p>
                                        <p className="text-xs muted-copy mt-1">
                                            {offer.priceNote}
                                        </p>
                                    </div>

                                    <Link
                                        href={offer.ctaHref}
                                        className={`${
                                            offer.ctaStyle === "primary"
                                                ? "btn-primary pulse-glow"
                                                : "btn-secondary"
                                        } w-full min-h-[48px] text-sm inline-flex items-center justify-center`}
                                    >
                                        {offer.ctaLabel}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
