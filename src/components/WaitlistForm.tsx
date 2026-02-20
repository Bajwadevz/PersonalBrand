"use client";

import { useState } from "react";

export default function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) return;

        setStatus("loading");
        setMessage("");

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.status === 409) {
                setStatus("error");
                setMessage(data.error || "You're already on the list.");
                return;
            }

            if (!res.ok) {
                throw new Error(data.error || "Failed to subscribe");
            }

            setStatus("success");
            setMessage("You're on the AI Builder List.");
            setEmail("");
        } catch (err) {
            setStatus("error");
            setMessage(err instanceof Error ? err.message : "Something went wrong.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md border border-[var(--color-secondary-border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all text-base disabled:opacity-50"
            />
            <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full px-6 py-3 rounded-full font-medium transition duration-200 ease-in-out hover:scale-[1.02] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
                {status === "loading" ? "Joining..." : status === "success" ? "Subscribed ✓" : "Join the Waitlist"}
            </button>
            {message && (
                <p className={`mt-1 text-sm font-medium ${status === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                    {message}
                </p>
            )}
        </form>
    );
}
