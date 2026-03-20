"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgprbwd";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                setIsSuccess(true);
                // Fire-and-forget Kit subscription — failure must not affect form UX
                const emailVal = formData.get("email");
                if (typeof emailVal === "string" && emailVal) {
                    fetch("/api/subscribe", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: emailVal }),
                    }).catch(() => {});
                }
                (e.target as HTMLFormElement).reset();
            } else {
                const result = await response.json();
                if (Object.hasOwn(result, "errors")) {
                    setErrorMsg(result["errors"].map((err: { message?: string }) => err.message).join(", "));
                } else {
                    setErrorMsg("Oops! There was a problem submitting your form.");
                }
            }
        } catch {
            setErrorMsg("Oops! There was a problem submitting your form. Please check your network connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="glass-card border rounded-2xl p-10 text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-[rgba(45,106,143,0.12)] text-[#2D6A8F] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent</h3>
                <p className="text-[#2D6A8F] font-medium text-lg">
                    Thanks! Your project details have been sent. I will get back to you shortly.
                </p>
            </div>
        );
    }

    return (
        <form
            method="POST"
            action={FORMSPREE_ENDPOINT}
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl border p-8 md:p-12 w-full"
        >
            {errorMsg && (
                <div className="mb-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium">
                    {errorMsg}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="fullName" className="text-sm font-semibold muted-copy">Full Name</label>
                    <input
                        required
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="John Doe"
                        className="px-4 py-3 rounded-xl border border-[var(--color-site-border)] focus:border-[#2D6A8F] focus:ring-1 focus:ring-[#2D6A8F] outline-none transition-all placeholder:text-gray-400 bg-transparent"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold muted-copy">Email Address</label>
                    <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john@company.com"
                        className="px-4 py-3 rounded-xl border border-[var(--color-site-border)] focus:border-[#2D6A8F] focus:ring-1 focus:ring-[#2D6A8F] outline-none transition-all placeholder:text-gray-400 bg-transparent"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-semibold muted-copy">Company (Optional)</label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        placeholder="Acme Corp"
                        className="px-4 py-3 rounded-xl border border-[var(--color-site-border)] focus:border-[#2D6A8F] focus:ring-1 focus:ring-[#2D6A8F] outline-none transition-all placeholder:text-gray-400 bg-transparent"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="text-sm font-semibold muted-copy">Budget Range</label>
                    <select
                        required
                        name="budget"
                        id="budget"
                        className="px-4 py-3 rounded-xl border border-[var(--color-site-border)] focus:border-[#2D6A8F] focus:ring-1 focus:ring-[#2D6A8F] outline-none transition-all text-[var(--color-site-text)] bg-transparent cursor-pointer appearance-none"
                    >
                        <option value="" disabled selected>Select a range...</option>
                        <option value="$1k - $3k">$1,000 - $3,000 (AI Automation / MVP)</option>
                        <option value="$3k - $5k">$3,000 - $5,000 (Custom AI System Build)</option>
                        <option value="$5k+">$5,000+ (Advanced Systems / Long-Term)</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col gap-2 mb-6">
                    <label htmlFor="timeline" className="text-sm font-semibold muted-copy">Timeline</label>
                <select
                    required
                    name="timeline"
                    id="timeline"
                    className="px-4 py-3 rounded-xl border border-[var(--color-site-border)] focus:border-[#2D6A8F] focus:ring-1 focus:ring-[#2D6A8F] outline-none transition-all text-[var(--color-site-text)] bg-transparent cursor-pointer appearance-none"
                >
                    <option value="" disabled selected>Select a timeline...</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-2 Months">1–2 Months</option>
                    <option value="3+ Months">3+ Months</option>
                    <option value="Exploring Options">Exploring Options</option>
                </select>
            </div>

            <div className="flex flex-col gap-2 mb-8">
                <label htmlFor="projectDescription" className="text-sm font-semibold muted-copy">Project Description</label>
                <textarea
                    required
                    name="projectDescription"
                    id="projectDescription"
                    rows={5}
                    placeholder="Briefly describe your current bottlenecks and what you're looking to build..."
                    className="px-4 py-3 rounded-xl border border-[var(--color-site-border)] focus:border-[#2D6A8F] focus:ring-1 focus:ring-[#2D6A8F] outline-none transition-all placeholder:text-gray-400 bg-transparent resize-none"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2D6A8F] text-white px-8 py-4 min-h-[44px] rounded-xl font-medium hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(45,106,143,0.35)] active:translate-y-[0px] active:shadow-none transition-all duration-300 ease-out shadow-[0_4px_14px_rgba(45,106,143,0.25)] text-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed tracking-[-0.01em]"
            >
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Transmitting...
                    </span>
                ) : (
                    "Send Project Details"
                )}
            </button>
        </form >
    );
}
