import Link from "next/link";
import Image from "next/image";
import HeroShutterText from "@/components/ui/hero-shutter-text";
import { Cpu, Workflow, Rocket } from "lucide-react";

/** Floating text-chip labels — decorative, desktop only */
const FLOAT_CHIPS = [
    { text: "AI Systems Builder & Educator", top: "12%", left: "3%", delay: "0s", dot: true },
    { text: "Practical Automation", top: "10%", right: "4%", delay: "1.2s", dot: false },
    { text: "No-Code First", top: "42%", left: "1.5%", delay: "2.1s", dot: false },
    { text: "Implementation Strategy", bottom: "28%", left: "2%", delay: "3.5s", dot: false },
    { text: "Systems, Not Prompts", top: "55%", right: "2%", delay: "0.8s", dot: false },
] as const;

/** Ghost brand icons floating in the background */
const FLOAT_ICONS = [
    { src: "/icons/claude.svg",   size: 52, top: "16%",  right: "10%", delay: "0s",   rotate: "8deg"  },
    { src: "/icons/cursor.svg",   size: 44, top: "68%",  right: "7%",  delay: "2.5s", rotate: "-5deg" },
    { src: "/icons/n8n.svg",      size: 56, top: "28%",  left: "6%",   delay: "1.8s", rotate: "4deg"  },
    { src: "/icons/make.svg",     size: 40, bottom: "22%", left: "8%", delay: "4s",   rotate: "-7deg" },
    { src: "/icons/supabase.svg", size: 38, top: "20%",  left: "13%",  delay: "1s",   rotate: "10deg" },
] as const;

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full px-6 pt-36 pb-24 overflow-hidden">

            {/* ── Floating chip labels (desktop only) ── */}
            {FLOAT_CHIPS.map((chip) => (
                <div
                    key={chip.text}
                    aria-hidden="true"
                    className="pointer-events-none select-none hidden lg:block absolute z-0 subtle-float"
                    style={{
                        top: "top" in chip ? chip.top : undefined,
                        bottom: "bottom" in chip ? chip.bottom : undefined,
                        left: "left" in chip ? chip.left : undefined,
                        right: "right" in chip ? chip.right : undefined,
                        animationDelay: chip.delay,
                    }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-bg)] backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium text-[var(--color-site-text-secondary)] shadow-sm whitespace-nowrap">
                        {chip.dot && <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ocean)]" />}
                        {chip.text}
                    </span>
                </div>
            ))}

            {/* ── Ghost brand icons (desktop only) ── */}
            {FLOAT_ICONS.map((icon) => (
                <div
                    key={icon.src + icon.delay}
                    aria-hidden="true"
                    className="pointer-events-none select-none hidden lg:block absolute z-0 subtle-float"
                    style={{
                        top: "top" in icon ? icon.top : undefined,
                        bottom: "bottom" in icon ? icon.bottom : undefined,
                        left: "left" in icon ? icon.left : undefined,
                        right: "right" in icon ? icon.right : undefined,
                        animationDelay: icon.delay,
                        transform: `rotate(${icon.rotate})`,
                        opacity: 0.12,
                    }}
                >
                    <Image src={icon.src} alt="" width={icon.size} height={icon.size} className="object-contain" />
                </div>
            ))}

            {/* ── Main hero content ── */}
            <div className="container-shell relative z-10 flex min-h-[70vh] flex-col items-center justify-center text-center">
                <HeroShutterText text="PRACTICAL AI FOR OPERATORS" />
                <p className="mt-8 max-w-2xl text-center text-base md:text-lg muted-copy">
                    I build AI systems that reduce manual tasks and scale output — no code required.
                </p>
                <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link href="/product" className="btn-primary min-h-[48px] w-full sm:w-auto px-8 text-center">
                        Get the Playbook
                    </Link>
                    <Link href="/blog" className="btn-secondary min-h-[48px] w-full sm:w-auto px-8 text-center">
                        Read the Blog
                    </Link>
                </div>
            </div>

            {/* ── Systems Not Prompts section ── */}
            <section className="container-shell relative z-10 pb-8 pt-10">
                <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start">
                    <div className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] muted-copy">Systems, Not Prompts</p>
                        <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-tight">Systems, Not Prompts</h2>
                        <p className="max-w-xl muted-copy">I design AI workflows that help teams scale output without scaling headcount.</p>
                        <p className="max-w-xl muted-copy">Instead of chasing prompts, I build systems that compound leverage.</p>
                        <Link href="/product" className="btn-primary inline-flex min-h-[46px] items-center px-8">
                            Get the Playbook
                        </Link>
                    </div>
                    <div className="grid gap-4">
                        {[
                            { title: "AI Systems", desc: "Custom AI productivity systems", Icon: Cpu },
                            { title: "Process Automation", desc: "Automated workflows and tool integration", Icon: Workflow },
                            { title: "Implementation", desc: "Lightweight scalable setups", Icon: Rocket }
                        ].map((item) => (
                            <div key={item.title} className="glass-card card-hover rounded-2xl p-6 md:p-7 relative overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-[#2D6A8F] to-transparent opacity-50" />
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(45,106,143,0.1)] mb-3">
                                    <item.Icon className="h-5 w-5 text-[var(--color-ocean)]" />
                                </div>
                                <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                                <p className="mt-2 text-sm muted-copy">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}
