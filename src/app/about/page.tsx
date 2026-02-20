import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Bajwaa Dev teaches AI-first engineering, vibe coding, and practical AI workflows for modern builders.",
};

export default function AboutPage() {
    return (
        <section className="py-20 flex flex-col w-full max-w-5xl mx-auto px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-10">About Bajwaa Dev</h1>

            <div className="space-y-6 text-base leading-relaxed text-foreground max-w-[720px] w-full">
                <p>
                    I&apos;m Shahzeb Bajwa — building publicly under Bajwaa Dev.
                </p>
                <p>
                    My focus is simple:<br />
                    Teaching developers and builders how to use AI properly.
                </p>
                <p>
                    Not shortcuts. Not hype.<br />
                    Real workflows. Real experiments. Real shipped systems.
                </p>

                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-heading)] mt-8 mb-4">I explore:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-8">
                    <li>AI-first development</li>
                    <li>Vibe coding practices</li>
                    <li>Prompt engineering</li>
                    <li>Educational content around AI tools</li>
                </ul>

                <p className="font-medium text-[var(--color-heading)] pt-4">
                    The future belongs to builders who understand how to collaborate with AI — not compete with it.
                </p>

                <p className="text-foreground pt-4">
                    This platform is for builders who want clarity over noise, structure over shortcuts, and real execution over hype.
                </p>

                <div className="pt-12">
                    <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-heading)] mb-6">Connect</h2>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <a href="mailto:hello@bajwaa.dev" className="text-[var(--color-link)] hover:text-[var(--color-link-hover)] hover:underline underline-offset-4 transition-all max-w-max">
                                Email: hello@bajwaa.dev
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/shahzebbajwa/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-link)] hover:text-[var(--color-link-hover)] hover:underline underline-offset-4 transition-all max-w-max" aria-label="LinkedIn">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/shahzo_12" target="_blank" rel="noopener noreferrer" className="text-[var(--color-link)] hover:text-[var(--color-link-hover)] hover:underline underline-offset-4 transition-all max-w-max" aria-label="Twitter">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Bajwadevz" target="_blank" rel="noopener noreferrer" className="text-[var(--color-link)] hover:text-[var(--color-link-hover)] hover:underline underline-offset-4 transition-all max-w-max" aria-label="GitHub">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/bajwaa.dev/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-link)] hover:text-[var(--color-link-hover)] hover:underline underline-offset-4 transition-all max-w-max" aria-label="Instagram">
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
