"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { commercialConfig, getDisplayedPrice, CommercialOffer } from "@/lib/commercialConfig";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgprbwd";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const offerParam = searchParams.get("offer");
  const demoParam = searchParams.get("demo");

  const [selectedOfferKey, setSelectedOfferKey] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (offerParam) {
      // Find matching offer key from commercialConfig
      const match = Object.entries(commercialConfig.offers).find(
        ([, offer]) => offer.id === offerParam || offer.contactValue === offerParam
      );
      if (match) {
        setSelectedOfferKey(match[0]);
      }
    }
  }, [offerParam]);

  const selectedOffer = selectedOfferKey
    ? (commercialConfig.offers[selectedOfferKey as keyof typeof commercialConfig.offers] as CommercialOffer)
    : null;

  const selectedPriceInfo = selectedOfferKey
    ? getDisplayedPrice(selectedOfferKey as keyof typeof commercialConfig.offers)
    : null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Append plain-text structured commercial context to the project description field
    if (selectedOffer && selectedPriceInfo) {
      const contextSummary = `\n\n--- COMMERCIAL OFFER CONTEXT ---\nSelected Offer ID: ${selectedOffer.id}\nOffer Name: ${selectedOffer.name}\nStandard List Price: ${selectedPriceInfo.formattedStandard}\nCurrent Price: ${selectedPriceInfo.formattedCurrent}\nFounding 50% Active: ${selectedPriceInfo.isFounding ? "Yes" : "No"}\nReferring Demo: ${demoParam || "Direct / None"}\n---------------------------------`;
      data["projectDescription"] = `${data["projectDescription"] || ""}${contextSummary}`;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
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
        <h3 className="text-2xl font-bold mb-3">Request Received</h3>
        <p className="text-[#2D6A8F] font-medium text-lg leading-relaxed max-w-md mx-auto">
          Your request has been received. You&apos;ll get a response within one business day with fit questions or the next step.
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
      {selectedOffer && selectedPriceInfo && (
        <div className="mb-8 p-4 rounded-2xl bg-[rgba(45,106,143,0.06)] border border-[rgba(45,106,143,0.2)]">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-ocean)] mb-1">
            SELECTED OFFER INTEREST
          </div>
          <div className="text-base font-bold text-[var(--color-site-text)]">{selectedOffer.name}</div>
          <div className="text-xs muted-copy mt-1">{selectedOffer.tagline}</div>
          <div className="mt-2 flex items-baseline gap-2">
            {selectedPriceInfo.isFounding && (
              <span className="text-xs line-through text-gray-400 font-medium">
                {selectedPriceInfo.formattedStandard}
              </span>
            )}
            <span className="text-sm font-bold text-[var(--color-site-text)]">
              {selectedPriceInfo.formattedCurrent}
            </span>
            {selectedPriceInfo.isFounding && (
              <span className="text-[10px] font-bold text-[var(--color-ocean)] bg-[rgba(45,106,143,0.12)] px-2 py-0.5 rounded">
                50% Early Rate Active
              </span>
            )}
          </div>
          {demoParam && (
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1">
              Referring Concept Demo: {demoParam.toUpperCase()}
            </p>
          )}
        </div>
      )}

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
          <label htmlFor="offerSelect" className="text-sm font-semibold muted-copy">Selected Offer</label>
          <select
            name="selectedOfferId"
            id="offerSelect"
            value={selectedOfferKey}
            onChange={(e) => setSelectedOfferKey(e.target.value)}
            className="px-4 py-3 rounded-xl border border-[var(--color-site-border)] focus:border-[#2D6A8F] focus:ring-1 focus:ring-[#2D6A8F] outline-none transition-all text-[var(--color-site-text)] bg-transparent cursor-pointer"
          >
            <option value="">General Inquiry / Unsure</option>
            {Object.entries(commercialConfig.offers).map(([key, offer]) => {
              const price = getDisplayedPrice(key as keyof typeof commercialConfig.offers);
              return (
                <option key={offer.id} value={key}>
                  {offer.name} ({price.formattedCurrent})
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className="text-sm font-semibold muted-copy">Budget Range</label>
          <select
            required
            name="budget"
            id="budget"
            className="px-4 py-3 rounded-xl border border-[var(--color-site-border)] focus:border-[#2D6A8F] focus:ring-1 focus:ring-[#2D6A8F] outline-none transition-all text-[var(--color-site-text)] bg-transparent cursor-pointer"
          >
            <option value="" disabled selected>Select a range...</option>
            <option value="Under $1,000">Under $1,000</option>
            <option value="$1,000 - $3,000">$1,000 - $3,000</option>
            <option value="$3,000 - $6,000">$3,000 - $6,000</option>
            <option value="$6,000+">$6,000+</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="timeline" className="text-sm font-semibold muted-copy">Timeline</label>
          <select
            required
            name="timeline"
            id="timeline"
            className="px-4 py-3 rounded-xl border border-[var(--color-site-border)] focus:border-[#2D6A8F] focus:ring-1 focus:ring-[#2D6A8F] outline-none transition-all text-[var(--color-site-text)] bg-transparent cursor-pointer"
          >
            <option value="" disabled selected>Select a timeline...</option>
            <option value="ASAP">ASAP</option>
            <option value="1-2 Weeks">1–2 Weeks</option>
            <option value="1 Month">1 Month</option>
            <option value="Exploring Options">Exploring Options</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <label htmlFor="projectDescription" className="text-sm font-semibold muted-copy">Project Description</label>
        <textarea
          required
          name="projectDescription"
          id="projectDescription"
          rows={5}
          placeholder="Briefly describe your current business, leads intake flow, and what you're looking to build..."
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
          "Send Request Details"
        )}
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="glass-card rounded-3xl p-12 text-center muted-copy">Loading form...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
