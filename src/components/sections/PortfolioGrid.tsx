import { Zap, GitBranch, BarChart3 } from "lucide-react";

export default function PortfolioGrid() {
    const caseStudies = [
        {
            title: "Sales Follow-Up on Autopilot",
            description: "A small SaaS team was manually following up on every inbound lead. Reps spent hours a day on tasks that didn't need a human. We built an AI-assisted sequence that routes, scores, and follows up automatically.",
            outcome: "14 hours/week recovered",
            Icon: Zap,
        },
        {
            title: "CRM That Updates Itself",
            description: "Deals were falling through because reps weren't logging calls. We connected their call tool to their CRM with an AI layer that extracts key info and updates the pipeline. No manual entry.",
            outcome: "Zero missed pipeline updates",
            Icon: GitBranch,
        },
        {
            title: "Weekly Reports in 4 Minutes",
            description: "An ops lead was spending Friday afternoons pulling numbers from four different tools to format a weekly report. We automated the entire pipeline. Data pulled, formatted, and sent on schedule.",
            outcome: "3 hours saved every week",
            Icon: BarChart3,
        }
    ];

    return (
        <section id="portfolio" className="section-shell relative z-10 w-full">
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
