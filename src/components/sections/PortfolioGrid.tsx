import Image from "next/image";
import Link from "next/link";
import { Zap, GitBranch, BarChart3, ArrowUpRight } from "lucide-react";

export default function PortfolioGrid() {
    const caseStudies = [
        {
            title: "Instant Lead Response",
            description: "Every form fill, missed call, and after-hours inquiry gets a text back in under 60 seconds. It asks the questions your best CSR would ask, then hands off to a person the moment one is free.",
            Icon: Zap,
        },
        {
            title: "Automatic Booking",
            description: "The system qualifies the job, offers your next open slot, and books it straight onto your schedule. Emergencies route to your on-call phone instead of sitting in an inbox until morning.",
            Icon: GitBranch,
        },
        {
            title: "Follow-Up That Doesn't Quit",
            description: "Most leads with weak follow-up never convert. Every lead that goes quiet gets chased automatically across text and email, and the whole thread logs into your CRM or a simple sheet.",
            Icon: BarChart3,
        }
    ];

    return (
        <section id="portfolio" className="section-shell relative z-10 w-full">
            <div className="container-shell w-full">
                <div className="mb-12">
                    <div className="mb-6 inline-flex items-center rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest muted-copy">
                        SYSTEMS I BUILD
                    </div>
                    <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-tight mb-4">
                        What I Build
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                    {caseStudies.map((study, index) => (
                        <div key={index} className="glass-card card-hover flex flex-col rounded-2xl p-6 md:p-8 relative overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-[#2D6A8F] to-transparent opacity-60" />
                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(45,106,143,0.1)] mb-4">
                                <study.Icon className="h-5 w-5 text-[var(--color-ocean)]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                {study.title}
                            </h3>
                            <p className="text-sm leading-relaxed muted-copy flex-1">
                                {study.description}
                            </p>
                        </div>
                    ))}
                </div>

                <Link href="/work/small-business-sales-os" className="glass-card card-hover mt-8 grid overflow-hidden rounded-2xl lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="flex flex-col justify-center p-6 md:p-8">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-ocean)]">Featured product build · Notion CRM</p>
                        <h3 className="mt-4 text-2xl font-bold tracking-tight">Small Business Sales OS</h3>
                        <p className="mt-3 text-sm leading-relaxed muted-copy">A next step for every open deal. Contacts, pipeline, follow-ups and quote recovery in one practical sales workspace.</p>
                        <p className="mt-4 text-xs muted-copy">Built by bajwaa.dev · internal product with fictional demo data</p>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ocean)]">Explore the build <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span>
                    </div>
                    <div className="flex items-center bg-[#191919]">
                        <Image src="/work/sales-os/command-center.jpg" alt="Small Business Sales OS command center with overdue follow-ups and connected contacts" width={1512} height={805} sizes="(max-width: 1024px) 100vw, 640px" className="h-auto w-full" />
                    </div>
                </Link>
            </div>
        </section>
    );
}
