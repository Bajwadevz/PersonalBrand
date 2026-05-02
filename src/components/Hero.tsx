import Link from "next/link";
import Image from "next/image";
import HeroShutterText from "@/components/ui/hero-shutter-text";
import { MessageSquare, Hammer, Rocket } from "lucide-react";

/** Floating text-chip labels — decorative, desktop only */
const FLOAT_CHIPS = [
    { text: "Manual work eliminated", top: "12%", left: "3%", delay: "0s", dot: true },
    { text: "Any CRM. Any stack.", top: "10%", right: "4%", delay: "1.2s", dot: false },
    { text: "5–7 day delivery", top: "42%", left: "1.5%", delay: "2.1s", dot: false },
    { text: "Former B2B AE — I speak founder", bottom: "28%", left: "2%", delay: "3.5s", dot: false },
    { text: "Fixed price. No surprises.", top: "55%", right: "2%", delay: "0.8s", dot: false },
] as const;

/** Ghost brand icons floating in the background */
const FLOAT_ICONS = [
    { src: "/icons/claude.svg",   size: 52, top: "16%",  right: "10%", delay: "0s",   rotate: "8deg"  },
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
                <HeroShutterText text="YOUR BUSINESS. AUTOMATED." />
                <p className="mt-8 max-w-2xl text-center text-base md:text-lg muted-copy">
                    I build AI-powered workflows that eliminate manual work, connect your tools, and help growing teams operate like a company twice their size.
                </p>
                <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link href="/contact" className="btn-primary min-h-[48px] w-full sm:w-auto px-8 text-center">
                        Book a Discovery Call
                    </Link>
                    <Link href="/#work-with-me" className="btn-secondary min-h-[48px] w-full sm:w-auto px-8 text-center">
                        See How It Works
                    </Link>
                </div>
            </div>

            {/* ── How It Works section ── */}
            <section className="container-shell relative z-10 pb-8 pt-10">
                <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start">
                    <div className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] muted-copy">How It Works</p>
                        <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-tight">From bottleneck to automated in days</h2>
                        <p className="max-w-xl muted-copy">I scope it, build it, and hand it off — with documentation so it keeps running.</p>
                    </div>
                    <div className="grid gap-4">
                        {[
                            {
                                title: "Workflow Audit Call",
                                desc: "30 minutes. I map your biggest manual bottleneck and scope a system to eliminate it.",
                                Icon: MessageSquare,
                            },
                            {
                                title: "Rapid Build",
                                desc: "I build your automation in 5–7 days on your existing stack. Daily updates. No disappearing.",
                                Icon: Hammer,
                            },
                            {
                                title: "Handoff & Support",
                                desc: "Full Loom walkthrough, documentation, and 30 days of async support so it actually sticks.",
                                Icon: Rocket,
                            },
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
