import Link from "next/link";
import { TrendingUp, Zap, BookOpen } from "lucide-react";

type Offer = {
    title: string;
    tagline: string;
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
        title: "AI Lead Response & Pipeline Automation",
        tagline: "Every inbound lead answered, qualified, and in your CRM within minutes.",
        price: "From $1,500",
        priceNote: "Founding client rate — 2 spots",
        ctaLabel: "Book a Free Lead-Response Audit",
        ctaHref: "/contact",
        ctaStyle: "primary",
        badge: "Start Here",
        flagship: true,
        Icon: TrendingUp,
    },
    {
        title: "Operations Workflow Build",
        tagline: "Eliminate your biggest manual bottleneck.",
        price: "From $3,000",
        priceNote: "Custom scope, fixed quote",
        ctaLabel: "Scope My Workflow",
        ctaHref: "/contact",
        ctaStyle: "secondary",
        Icon: Zap,
    },
    {
        title: "The AI Automation Playbook",
        tagline: "Build it yourself, with the frameworks I use.",
        price: "Free",
        priceNote: "Waitlist open",
        ctaLabel: "Join the Waitlist",
        ctaHref: "/product",
        ctaStyle: "secondary",
        Icon: BookOpen,
    },
];

export default function WorkWithMe() {
    const [flagship, ...secondary] = offers;

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
                        One flagship build, plus two other ways in.
                    </p>
                </div>

                {/* Flagship — visually dominant, first position */}
                <div className="glass-card card-hover relative flex flex-col rounded-2xl p-8 md:p-10 overflow-hidden border-2 border-[var(--color-ocean)] bg-[rgba(45,106,143,0.04)]">
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-[var(--color-ocean)]" />
                    {flagship.badge && (
                        <span className="absolute right-6 top-6 inline-flex items-center rounded-full bg-[var(--color-ocean)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                            {flagship.badge}
                        </span>
                    )}
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(45,106,143,0.12)] mb-4">
                        <flagship.Icon className="h-5 w-5 text-[var(--color-ocean)]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 pr-24">{flagship.title}</h3>
                    <p className="text-sm font-semibold text-[var(--color-ocean)] mb-6">{flagship.tagline}</p>
                    <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-5 border-t border-[var(--color-site-border)]">
                        <div>
                            <p className="text-xl font-bold">{flagship.price}</p>
                            <p className="text-xs muted-copy mt-1">{flagship.priceNote}</p>
                        </div>
                        <Link
                            href={flagship.ctaHref}
                            className="btn-primary pulse-glow min-h-[48px] px-8 text-sm inline-flex items-center justify-center w-full sm:w-auto"
                        >
                            {flagship.ctaLabel}
                        </Link>
                    </div>
                </div>

                {/* Secondary offers — lighter, smaller */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 items-stretch">
                    {secondary.map((offer) => (
                        <div key={offer.title} className="glass-card relative flex flex-col rounded-2xl p-5 overflow-hidden">
                            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(45,106,143,0.08)] mb-3">
                                <offer.Icon className="h-4 w-4 text-[var(--color-ocean)]" />
                            </div>
                            <h3 className="text-base font-bold mb-1">{offer.title}</h3>
                            <p className="text-xs font-semibold text-[var(--color-ocean)] mb-4">{offer.tagline}</p>
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
            </div>
        </section>
    );
}
