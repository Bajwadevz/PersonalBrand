import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Workflow, Zap, Cpu } from "lucide-react";

export const metadata: Metadata = {
    title: { absolute: "About Shahzeb Bajwa | AI Automation for Sales Teams" },
    description: "Shahzeb Bajwa spent 6+ years in B2B SaaS sales before building automation systems. He builds the tools he wished existed while selling.",
    alternates: {
        canonical: "https://bajwaa.dev/about",
    },
    openGraph: {
        title: "About Shahzeb Bajwa | AI Automation for Sales Teams",
        description: "Shahzeb Bajwa spent 6+ years in B2B SaaS sales before building automation systems. He builds the tools he wished existed while selling.",
        url: "https://bajwaa.dev/about",
    },
    twitter: {
        title: "About Shahzeb Bajwa | AI Automation for Sales Teams",
        description: "Shahzeb Bajwa spent 6+ years in B2B SaaS sales before building automation systems. He builds the tools he wished existed while selling.",
    },
};

export default function AboutPage() {
    return (
        <div className="section-shell relative w-full overflow-hidden">
            <section className="container-shell max-w-3xl text-center">
                <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight">About Shahzeb Bajwa</h1>
                <div className="mx-auto mt-8 max-w-2xl space-y-6 text-left muted-copy">
                    <p>
                        I spent 6+ years in B2B SaaS sales — currently as an Account Executive at Motive — before I started building the systems I kept wishing existed while I was selling.
                    </p>
                    <p>
                        Every sales team I&apos;ve worked in had the same two leaks: inbound leads went cold waiting for a human, and the context that mattered never made it into the CRM. Most people who can fix that technically have never carried a number. Most people who&apos;ve carried a number can&apos;t build.
                    </p>
                    <p>
                        I do both. I&apos;m also completing a CS degree, and I build on n8n, Make, HubSpot, and the Claude and OpenAI APIs.
                    </p>
                    <p>
                        I work with a small number of clients at a time so builds actually ship in days, not quarters.
                    </p>
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
