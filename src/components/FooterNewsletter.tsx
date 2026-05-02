"use client";

import { useState } from "react";

export default function FooterNewsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, tags: ["footer-newsletter"] }),
            });
            if (!res.ok) throw new Error();
            setStatus("success");
            setEmail("");
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <p className="text-sm font-medium text-[var(--color-ocean)]">You&apos;re in. See you Sunday.</p>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
            <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="flex-1 px-4 py-2.5 rounded-lg border border-[var(--color-site-border)] text-sm bg-transparent placeholder:muted-copy focus:outline-none focus:border-[var(--color-ocean)] focus:ring-1 focus:ring-[var(--color-ocean)] disabled:opacity-50"
            />
            <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary px-5 text-sm whitespace-nowrap disabled:opacity-50 min-h-[44px]"
            >
                {status === "loading" ? "..." : "Subscribe"}
            </button>
            {status === "error" && (
                <p className="text-red-500 text-xs mt-1 sm:col-span-2">Something went wrong. Try again.</p>
            )}
        </form>
    );
}
