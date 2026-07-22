import type { Metadata } from "next";
import Link from "next/link";
import { Search, GitBranch, BarChart3, Mail, Bot, FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "Workflows",
    description: "Automation workflows and system architectures for sales and operations teams, built on n8n, Make, and HubSpot.",
    alternates: {
        canonical: "https://bajwaa.dev/workflows",
    },
    openGraph: {
        title: "Workflows | Bajwaa Dev",
        description: "Automation workflows and system architectures for sales and operations teams, built on n8n, Make, and HubSpot.",
        url: "https://bajwaa.dev/workflows",
    },
    twitter: {
        title: "Workflows | Bajwaa Dev",
        description: "Automation workflows and system architectures for sales and operations teams, built on n8n, Make, and HubSpot.",
    },
};

const workflows = [
    {
        Icon: Search,
        category: "Sales",
        title: "Automated Lead Research",
        description: "Company dossiers, exec summaries, and public data pushed into your CRM before every call.",
    },
    {
        Icon: GitBranch,
        category: "Operations",
        title: "Intelligent Lead Routing",
        description: "Inbound leads analyzed for intent, auto-escalated or nurtured without human triage.",
    },
    {
        Icon: BarChart3,
        category: "Reporting",
        title: "Automated Data Synthesis",
        description: "Weekly reports from Notion, Airtable, or dashboards, summarized and formatted automatically.",
    },
    {
        Icon: Mail,
        category: "Outreach",
        title: "AI-Powered Cold Outreach",
        description: "Personalized email sequences generated from enriched lead data. No templates, real personalization.",
    },
    {
        Icon: FileText,
        category: "Content",
        title: "Content Production Pipeline",
        description: "Research, draft, edit, and publish flow orchestrated across AI models and publishing tools.",
    },
    {
        Icon: Bot,
        category: "Support",
        title: "Customer Triage Agent",
        description: "Inbound tickets classified, prioritized, and draft-responded using internal knowledge base.",
    },
];

export default function WorkflowsPage() {
    return (
        <div className="section-shell relative w-full overflow-hidden">
            <section className="container-shell mb-16 max-w-4xl">
                <div className="mb-6 inline-flex items-center rounded-full border border-[var(--color-site-border)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest muted-copy">
                    Systems I Build
                </div>
                <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-bold tracking-tight">AI Workflows That Ship</h1>
                <p className="mt-4 text-lg muted-copy max-w-2xl">
                    These are the exact workflow architectures I build for operators.
                </p>
            </section>

            <section className="container-shell">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {workflows.map((workflow) => (
                        <div key={workflow.title} className="glass-card card-hover flex flex-col rounded-2xl p-6 md:p-8">
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-12 h-12 rounded-full bg-[rgba(45,106,143,0.12)] border border-[rgba(45,106,143,0.3)] flex items-center justify-center text-[#2D6A8F]">
                                    <workflow.Icon className="w-5 h-5" />
                                </div>
                                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest bg-[rgba(45,106,143,0.08)] text-[#2D6A8F] border border-[rgba(45,106,143,0.2)]">
                                    {workflow.category}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 leading-snug">{workflow.title}</h3>
                            <p className="text-sm leading-relaxed muted-copy flex-grow">{workflow.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container-shell mt-20">
                <div className="mx-auto max-w-4xl rounded-3xl border border-[var(--color-site-border)] bg-zinc-50 dark:bg-zinc-900 px-8 py-14 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] muted-copy mb-4">Ready to Build?</p>
                    <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight mb-4">
                        Want one of these built for your business?
                    </h2>
                    <p className="muted-copy max-w-xl mx-auto mb-10">
                        Get the exact frameworks and system architectures, or work directly with me to implement them.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/product" className="btn-primary min-h-[48px] w-full sm:w-auto px-8 pulse-glow">
                            Join the Waitlist
                        </Link>
                        <Link href="/work-with-me" className="btn-secondary min-h-[48px] w-full sm:w-auto px-8 text-center">
                            Work With Me →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
