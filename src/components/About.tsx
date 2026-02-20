export default function About() {
    return (
        <section className="py-20 flex flex-col items-start w-full border-t border-[var(--color-border)]">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">About Bajwa Dev</h2>
            <div className="space-y-4 text-base leading-relaxed text-foreground max-w-[720px]">
                <p>
                    I&apos;m Shahzaib (Bajwa Dev) — a computer science student and SaaS operator building toward AI-first engineering.
                </p>
                <p>
                    My focus is systems: how software is structured, deployed, monetized, and scaled.
                </p>
                <p>
                    I write about cloud architecture, backend engineering, AI workflows, and the intersection of technical execution and commercial awareness.
                </p>
                <p className="font-medium text-[var(--color-heading)]">
                    Software isn&apos;t just code — it&apos;s leverage.
                </p>
            </div>
        </section>
    );
}
