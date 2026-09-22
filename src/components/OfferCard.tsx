import Link from "next/link";
import { Check, LucideIcon } from "lucide-react";
import { CommercialOffer, commercialConfig, getDisplayedPrice } from "@/lib/commercialConfig";

interface OfferCardProps {
  offerKey: keyof typeof commercialConfig.offers;
  badge?: string;
  flagship?: boolean;
  Icon?: LucideIcon;
  ctaHrefOverride?: string;
  compact?: boolean;
}

export default function OfferCard({
  offerKey,
  badge,
  flagship,
  Icon,
  ctaHrefOverride,
  compact = false,
}: OfferCardProps) {
  const offer = commercialConfig.offers[offerKey] as CommercialOffer;
  const pricing = getDisplayedPrice(offerKey);
  const isFlagship = flagship ?? offer.flagship;

  const ctaHref = ctaHrefOverride || `/contact?offer=${offer.id}`;

  if (compact) {
    return (
      <div
        className={`glass-card relative flex flex-col rounded-2xl p-5 md:p-6 overflow-hidden ${
          isFlagship ? "border-2 border-[var(--color-ocean)] bg-[rgba(45,106,143,0.04)]" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-2 mb-3">
          {Icon && (
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(45,106,143,0.1)]">
              <Icon className="h-5 w-5 text-[var(--color-ocean)]" />
            </div>
          )}
          {(badge || offer.badge) && (
            <span className="inline-flex items-center rounded-full bg-[var(--color-ocean)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
              {badge || offer.badge}
            </span>
          )}
        </div>

        <h3 className="text-base font-bold mb-1">{offer.name}</h3>
        <p className="text-xs font-semibold text-[var(--color-ocean)] mb-3">{offer.tagline}</p>

        <div className="mt-auto pt-3 border-t border-[var(--color-site-border)]">
          <div className="flex items-baseline gap-2 mb-1">
            {pricing.isFounding && (
              <span className="text-xs line-through text-gray-400 font-medium">
                {pricing.formattedStandard}
              </span>
            )}
            <span className="text-lg font-bold text-[var(--color-site-text)]">
              {pricing.formattedCurrent}
            </span>
            {pricing.isFounding && (
              <span className="text-[10px] font-bold uppercase text-[var(--color-ocean)] bg-[rgba(45,106,143,0.1)] px-1.5 py-0.5 rounded">
                50% OFF
              </span>
            )}
          </div>
          <p className="text-[11px] muted-copy mb-3">Delivery: {offer.delivery}</p>

          <Link
            href={ctaHref}
            className={`w-full min-h-[40px] text-xs inline-flex items-center justify-center rounded-xl font-semibold transition-all ${
              isFlagship ? "btn-primary pulse-glow" : "btn-secondary"
            }`}
          >
            Get Started →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`glass-card card-hover relative flex flex-col rounded-2xl p-6 md:p-8 overflow-hidden ${
        isFlagship
          ? "border-2 border-[var(--color-ocean)] bg-[rgba(45,106,143,0.04)] shadow-[0_12px_36px_rgba(45,106,143,0.12)]"
          : ""
      }`}
    >
      {isFlagship && <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-[var(--color-ocean)]" />}

      <div className="flex items-start justify-between gap-4 mb-4">
        {Icon && (
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(45,106,143,0.12)]">
            <Icon className="h-6 w-6 text-[var(--color-ocean)]" />
          </div>
        )}
        {(badge || offer.badge) && (
          <span className="inline-flex items-center rounded-full bg-[var(--color-ocean)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
            {badge || offer.badge}
          </span>
        )}
      </div>

      <h3 className="text-xl md:text-2xl font-bold mb-2">{offer.name}</h3>
      <p className="text-sm font-semibold text-[var(--color-ocean)] mb-3">{offer.tagline}</p>
      <p className="text-sm leading-relaxed muted-copy mb-6">{offer.description}</p>

      {offer.deliverables && offer.deliverables.length > 0 && (
        <ul className="grid gap-2.5 mb-6 sm:grid-cols-1">
          {offer.deliverables.map((item) => (
            <li key={item} className="flex items-start text-xs sm:text-sm muted-copy leading-relaxed">
              <Check className="h-4 w-4 text-[var(--color-ocean)] mr-2 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-5 border-t border-[var(--color-site-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-2">
            {pricing.isFounding && (
              <span className="text-sm line-through text-gray-400 font-medium">
                {pricing.formattedStandard}
              </span>
            )}
            <span className="text-2xl font-bold text-[var(--color-site-text)]">
              {pricing.formattedCurrent}
            </span>
            {pricing.isFounding && (
              <span className="text-xs font-bold text-[var(--color-ocean)] bg-[rgba(45,106,143,0.1)] px-2 py-0.5 rounded-full">
                50% Early Customer
              </span>
            )}
          </div>
          <p className="text-xs muted-copy mt-1">Delivery: {offer.delivery}</p>
          {pricing.isFounding && (
            <p className="text-[11px] text-[var(--color-ocean)] font-medium mt-1">
              50% early-customer rate. Limited capacity; subject to fit.
            </p>
          )}
        </div>

        <Link
          href={ctaHref}
          className={`min-h-[48px] px-6 text-sm inline-flex items-center justify-center w-full sm:w-auto rounded-xl font-semibold ${
            isFlagship ? "btn-primary pulse-glow" : "btn-secondary"
          }`}
        >
          Select Package →
        </Link>
      </div>
    </div>
  );
}
