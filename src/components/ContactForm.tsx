"use client";

import { useState } from "react";

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
            // Replace with actual Formspree endpoint ID mapped to shahzebahmed1000@gmail.com
            const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/YOUR_FORM_ID_HERE";

            if (endpoint.includes("YOUR_FORM_ID_HERE")) {
                setErrorMsg("Configuration Required: Please add your Formspree endpoint ID to the .env.local file to activate submissions.");
                setIsSubmitting(false);
                return;
            }

            const response = await fetch(endpoint, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                setIsSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                const result = await response.json();
                if (Object.hasOwn(result, "errors")) {
                    setErrorMsg(result["errors"].map((err: any) => err.message).join(", "));
                } else {
                    setErrorMsg("Oops! There was a problem submitting your form.");
                }
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setErrorMsg("Oops! There was a problem submitting your form. Please check your network connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-10 text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Transmission Successful</h3>
                <p className="text-emerald-700 font-medium text-lg">
                    Thank you. I'll review your project and respond within 24–48 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] border border-gray-100 p-8 md:p-12 w-full">
            {errorMsg && (
                <div className="mb-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium">
                    {errorMsg}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        placeholder="John Doe"
                        className="px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all placeholder:text-gray-400 bg-gray-50/50"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john@company.com"
                        className="px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all placeholder:text-gray-400 bg-gray-50/50"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-semibold text-gray-700">Company (Optional)</label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        placeholder="Acme Corp"
                        className="px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all placeholder:text-gray-400 bg-gray-50/50"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="text-sm font-semibold text-gray-700">Budget Range</label>
                    <select
                        required
                        name="budget"
                        id="budget"
                        className="px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all text-gray-700 bg-gray-50/50 cursor-pointer appearance-none"
                    >
                        <option value="" disabled selected>Select a range...</option>
                        <option value="$1k - $3k">$1,000 - $3,000 (AI Automation / MVP)</option>
                        <option value="$3k - $5k">$3,000 - $5,000 (Custom AI System Build)</option>
                        <option value="$5k+">$5,000+ (Advanced Systems / Long-Term)</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="timeline" className="text-sm font-semibold text-gray-700">Timeline</label>
                <select
                    required
                    name="timeline"
                    id="timeline"
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all text-gray-700 bg-gray-50/50 cursor-pointer appearance-none"
                >
                    <option value="" disabled selected>Select a timeline...</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-2 Months">1–2 Months</option>
                    <option value="3+ Months">3+ Months</option>
                    <option value="Exploring Options">Exploring Options</option>
                </select>
            </div>

            <div className="flex flex-col gap-2 mb-8">
                <label htmlFor="description" className="text-sm font-semibold text-gray-700">Project Description</label>
                <textarea
                    required
                    name="description"
                    id="description"
                    rows={5}
                    placeholder="Briefly describe your current bottlenecks and what you're looking to build..."
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all placeholder:text-gray-400 bg-gray-50/50 resize-none"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-900 transition-all duration-200 hover:scale-[1.01] shadow-lg shadow-black/10 text-lg flex items-center justify-center disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
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
