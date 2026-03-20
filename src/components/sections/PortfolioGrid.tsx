import { Search, GitBranch, BarChart3 } from "lucide-react";

export default function PortfolioGrid() {
    const caseStudies = [
        {
            title: "Automated Research",
            description: "Automated company research lands in CRM before every sales call.",
            outcome: "5+ hours saved per rep per week",
            Icon: Search,
        },
        {
            title: "Intelligent Routing",
            description: "Inbound leads are scored and routed instantly across teams.",
            outcome: "87% faster first response",
            Icon: GitBranch,
        },
        {
            title: "Data Synthesis",
            description: "Weekly KPI summaries generate from your stack without manual work.",
            outcome: "10+ reporting hours recovered weekly",
            Icon: BarChart3,
        }
    ];

    return (
        <section className="section-shell relative z-10 w-full">
            <div className="container-shell w-full">
                <div className="mb-12">
                    <div className="mb-6 inline-flex items-center rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest muted-copy">
                        WHAT THIS LOOKS LIKE IN PRACTICE
                    </div>
                    <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-tight mb-4">
                        Real Workflows. Real Leverage.
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                    {caseStudies.map((study, index) => (
                        <div key={index} className="glass-card card-hover flex flex-col rounded-2xl p-6 md:p-8 relative overflow-hidden">
                            {/* Accent top line */}
                            <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-[#2D6A8F] to-transparent opacity-60" />
                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(45,106,143,0.1)] mb-4">
                                <study.Icon className="h-5 w-5 text-[var(--color-ocean)]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                {study.title}
                            </h3>
                            <p className="text-sm leading-relaxed muted-copy mb-6 flex-1">
                                {study.description}
                            </p>
                            <div className="pt-4 border-t border-[var(--color-site-border)]">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(45,106,143,0.1)] px-3 py-1.5 text-xs font-bold text-[var(--color-ocean)]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ocean)]" />
                                    {study.outcome}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
