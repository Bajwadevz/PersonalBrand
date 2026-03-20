import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, GraduationCap, Target, Wrench, Cpu, Workflow, Zap } from "lucide-react";


export const metadata: Metadata = {
    title: "About Shahzeb Bajwa | AI Systems Builder & Educator",
    description: "Shahzeb Bajwa is an AI systems builder and practical AI educator helping professionals, business owners, and builders leverage AI for real-world impact.",
    keywords: ["AI systems builder", "Practical AI educator", "AI implementation thinker", "AI expert", "AI consultant", "AI automation", "AI for business", "AI for professionals", "AI learning without coding"],
};

export default function AboutPage() {
    return (
        <div className="section-shell relative w-full overflow-hidden">
            <section className="container-shell max-w-5xl text-center">
                <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight">Shahzeb Bajwa</h1>
                <p className="mt-2 text-lg muted-copy">AI Systems Builder & Educator</p>
                <p className="mx-auto mt-8 max-w-3xl muted-copy">
                    I help professionals, builders, and business owners integrate practical AI systems into their workflows.
                    My focus: systems thinking over prompt hacking. Build once, compound forever.
                </p>
            </section>
            <section className="container-shell mt-16 grid gap-6 md:grid-cols-3">
                {[
                    ["AI Agents", "Autonomous systems that execute reliable tasks."],
                    ["Prompt Systems", "Production-ready prompt structures for teams."],
                    ["Workflow Automation", "Connected tools, APIs, and AI for execution."]
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
                        { title: "Professionals", icon: Briefcase, copy: "Automate repetitive work and recover strategic time." },
                        { title: "Builders", icon: Wrench, copy: "Ship systems faster with practical AI architecture." },
                        { title: "Students", icon: GraduationCap, copy: "Learn execution-focused AI skills that compound." },
                        { title: "Business Owners", icon: Target, copy: "Scale operations without scaling headcount linearly." }
                    ].map(({ title, icon: Icon, copy }) => (
                        <article key={title} className="glass-card card-hover rounded-2xl p-6">
                            <Icon className="h-5 w-5 text-[var(--color-ocean)]" />
                            <h4 className="mt-3 text-lg font-bold">{title}</h4>
                            <p className="mt-2 text-sm muted-copy">{copy}</p>
                        </article>
                    ))}
                </div>
                <div className="mt-10">
                    <Link href="/product" className="btn-primary inline-flex min-h-[48px] items-center px-8">Get the Playbook</Link>
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
                <Image src="/icons/cursor.svg" alt="" width={44} height={44} className="object-contain" />
            </div>
        </div>
    );
}
