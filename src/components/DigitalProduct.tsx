import Link from "next/link";

export default function DigitalProduct() {
    return (
        <section className="section-shell relative z-10 w-full">
            <div className="container-shell">
                <div className="mx-auto flex w-full max-w-5xl flex-col items-center rounded-3xl border border-[var(--color-site-border)] bg-zinc-50 dark:bg-zinc-900 px-6 py-14 text-center md:px-10">
                    <h3 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-tight">Not ready to hire? Start here.</h3>
                    <p className="mt-3 mb-8 text-base muted-copy">
                        The exact AI automation frameworks I use in production — for founders and operators who want to build their own systems without hiring anyone.
                    </p>
                    <Link href="/product" className="btn-primary min-h-[52px] px-10 text-base pulse-glow">
                        Get the Playbook →
                    </Link>
                </div>
            </div>
        </section>
    );
}
