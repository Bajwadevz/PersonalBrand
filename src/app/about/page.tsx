import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, Target, Workflow, Zap, Cpu } from "lucide-react";

export const metadata: Metadata = {
    title: "About Shahzeb Bajwa | AI Workflow Automation Specialist",
    description: "Shahzeb Bajwa is an AI workflow automation specialist and former B2B AE with 6 years of quota-carrying sales experience. He builds the systems he wished existed when he was selling.",
    keywords: ["AI workflow automation", "business process automation", "n8n freelancer", "Make automation", "sales automation", "CRM automation", "AI automation specialist"],
};

export default function AboutPage() {
    return (
        <div className="section-shell relative w-full overflow-hidden">
            <section className="container-shell max-w-5xl text-center">
                <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight">Shahzeb Bajwa</h1>
                <p className="mt-2 text-lg muted-copy">AI Workflow Automation Specialist</p>
                <p className="mx-auto mt-8 max-w-3xl muted-copy">
                    I build AI-powered workflows for small and mid-sized businesses. Before this, I spent 6 years as a quota-carrying B2B sales rep — which means I understand the business problem behind every automation request, not just the technical workflow. I don&apos;t just connect APIs. I build systems that actually change how a team operates.
                </p>
            </section>
            <section className="container-shell mt-16 grid gap-6 md:grid-cols-3">
                {[
                    ["Revenue Automation", "Sales pipelines, lead routing, and follow-up sequences that run without manual work."],
                    ["Ops Workflow Builds", "Reporting, onboarding, data sync, internal alerts — automated on your existing stack."],
                    ["AI Integration", "Claude, ChatGPT, and AI agents wired into your tools to eliminate repetitive decision-making."]
                ].map(([title, copy]) => (
                    <article key={title} className="glass-card card-hover rounded-2xl p-6">
                        <h2 className="text-xl font-bold">{title}</h2>
                        <p className="mt-2 text-sm muted-copy">{copy}</p>
                    </article>
                ))}
            </section>
            <section className="container-shell mt-14">
                <h3 className="mb-6 text-2xl font-bold">Who I Build For</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                    {[
                        { title: "Founders", icon: Target, copy: "You're wearing too many hats. Let's automate the ones that don't need you." },
                        { title: "Heads of Sales", icon: Briefcase, copy: "Your reps should be selling, not updating CRMs. Let's fix that." },
                        { title: "Ops Leads", icon: Workflow, copy: "You know exactly what's broken. I build the fix." },
                        { title: "Bootstrapped Teams", icon: Zap, copy: "No budget for a 10-person ops team? Build the systems instead." }
                    ].map(({ title, icon: Icon, copy }) => (
                        <article key={title} className="glass-card card-hover rounded-2xl p-6">
                            <Icon className="h-5 w-5 text-[var(--color-ocean)]" />
                            <h4 className="mt-3 text-lg font-bold">{title}</h4>
                            <p className="mt-2 text-sm muted-copy">{copy}</p>
                        </article>
                    ))}
                </div>
                <div className="mt-10">
                    <Link href="/contact" className="btn-primary inline-flex min-h-[48px] items-center px-8">Book a Workflow Audit</Link>
                </div>
            </section>

            {/* Decorative floating icons — purely visual, hidden on mobile */}
            <div aria-hidden="true" className="pointer-events-none select-none absolute top-20 right-10 opacity-[0.06] subtle-float hidden md:block" style={{ animationDelay: "0s" }}>
                <Cpu className="w-16 h-16" />
            </div>
            <div aria-hidden="true" className="pointer-events-none select-none absolute top-60 left-8 opacity-[0.06] subtle-float hidden md:block" style={{ animationDelay: "1.5s" }}>
                <Workflow className="w-12 h-12" />
            </div>
            <div aria-hidden="true" className="pointer-events-none select-none absolute bottom-40 right-16 opacity-[0.06] subtle-float hidden md:block" style={{ animationDelay: "3s" }}>
                <Zap className="w-14 h-14" />
            </div>
            <div aria-hidden="true" className="pointer-events-none select-none absolute top-32 left-20 opacity-[0.04] subtle-float font-mono text-xs rotate-[-8deg] hidden md:block" style={{ animationDelay: "4.5s" }}>
                system_prompt.ts
            </div>
            <div aria-hidden="true" className="pointer-events-none select-none absolute bottom-60 right-24 opacity-[0.04] subtle-float font-mono text-xs rotate-[5deg] hidden md:block" style={{ animationDelay: "2s" }}>
                workflow.execute()
            </div>
            {/* Ghost brand icons */}
            <div aria-hidden="true" className="pointer-events-none select-none absolute top-24 right-32 opacity-[0.12] subtle-float hidden lg:block" style={{ animationDelay: "0.6s", transform: "rotate(-8deg)" }}>
                <Image src="/icons/claude.svg" alt="" width={52} height={52} className="object-contain" />
            </div>
            <div aria-hidden="true" className="pointer-events-none select-none absolute bottom-32 left-24 opacity-[0.10] subtle-float hidden lg:block" style={{ animationDelay: "2.4s", transform: "rotate(5deg)" }}>
                <Image src="/icons/n8n.svg" alt="" width={44} height={44} className="object-contain" />
            </div>
        </div>
    );
}
