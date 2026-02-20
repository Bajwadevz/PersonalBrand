import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product | Bajwa Dev",
    description: "A playbook and system for developers. Launching soon.",
};

export default function ProductPage() {
    return (
        <div className="py-12 sm:py-24 flex flex-col items-center w-full text-center">
            <div className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full mb-6">
                Coming Soon
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
                The Developer Playbook
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
                A comprehensive system and mental models for AI-first engineers who want to execute faster,
                build better architectures, and scale their impact.
            </p>

            <div className="w-full max-w-sm mx-auto flex flex-col gap-3">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-md border border-muted bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all text-sm"
                />
                <button
                    type="button"
                    className="w-full px-6 py-3 border border-transparent text-sm font-medium rounded-md text-background bg-foreground hover:bg-foreground/90 transition-colors"
                >
                    Join the Waitlist
                </button>
            </div>

            <p className="mt-4 text-xs text-muted-foreground/70">
                No spam. Unsubscribe anytime. (Stripe integration coming upon launch)
            </p>
        </div>
    );
}
