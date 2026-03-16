"use client";

import { useState } from "react";
import { Syne, DM_Sans } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    variable: "--font-syne",
    display: "swap",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
    display: "swap",
});

export default function InlineOptIn() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, tags: ["blog-optin"] }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to submit");
            }

            setStatus("success");
            setEmail("");
        } catch (error: unknown) {
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
        }
    };

    if (status === "success") {
        return (
            <div className={`my-8 bg-[#E8F1F8] border border-[#D1E4F0] rounded-lg px-7 py-6 w-full ${syne.variable} ${dmSans.variable} font-sans flex items-center justify-center min-h-[140px]`}>
                <div className="flex items-center gap-3 text-[#0D1B2A]">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-bold font-syne text-lg">On its way. Check your inbox.</span>
                </div>
            </div>
        );
    }

    return (
        <div className={`my-8 bg-[#E8F1F8] border border-[#D1E4F0] rounded-lg px-7 py-6 w-full ${syne.variable} ${dmSans.variable} font-sans`}>
            <div className="flex flex-col gap-2 mb-5">
                <h3 className="text-[16px] font-bold text-[#0D1B2A] font-syne leading-tight m-0">
                    Get the AI Operator Playbook — free
                </h3>
                <p className="text-[13px] text-[#0D1B2A]/60 font-sans leading-relaxed m-0">
                    The exact frameworks, prompt chains, and system architectures I use to automate sales research, reporting, and outbound. Delivered to your inbox.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    className="flex-1 bg-white border border-[#D1E4F0] rounded-md px-4 py-2.5 text-[14px] text-[#0D1B2A] placeholder:text-[#0D1B2A]/40 font-medium focus:outline-none focus:border-[#2D6A8F] focus:ring-1 focus:ring-[#2D6A8F] disabled:opacity-50"
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-[#0D1B2A] text-white px-5 py-2.5 rounded-md font-medium hover:bg-[#0D1B2A]/90 transition-colors whitespace-nowrap disabled:bg-[#0D1B2A]/50 text-[13px] font-sans h-full shrink-0"
                >
                    {status === "loading" ? "Sending..." : "Send It →"}
                </button>
            </form>

            <div className="mt-3 text-[11px] text-[#0D1B2A]/40 font-sans">
                No spam. Unsubscribe anytime.
            </div>
            
            {errorMessage && (
                <p className="text-red-600 text-[12px] mt-2 font-medium m-0">{errorMessage}</p>
            )}
        </div>
    );
}
