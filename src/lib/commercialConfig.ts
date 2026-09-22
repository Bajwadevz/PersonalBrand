export type BillingType = "one-time" | "monthly";

export type OfferCategory = "strategy" | "website" | "automation" | "flagship" | "system-care" | "product";

export interface CommercialOffer {
  id: string;
  category: OfferCategory;
  name: string;
  shortName?: string;
  tagline: string;
  description: string;
  standardPrice: number;
  foundingPrice: number;
  billing: BillingType;
  delivery: string;
  deliverables: string[];
  contactValue: string;
  badge?: string;
  flagship?: boolean;
}

export const commercialConfig = {
  currency: "USD",
  currencySymbol: "$",
  foundingOfferActive: true,
  foundingDiscountPercent: 50,
  foundingNotice: "50% early-customer rate. Limited implementation capacity; subject to fit and scope.",
  whop: {
    productUrl: process.env.NEXT_PUBLIC_WHOP_PRODUCT_URL || "",
    salesOpen: process.env.NEXT_PUBLIC_AI_OS_SALES_OPEN === "true",
  },
  offers: {
    // Strategy & Entry
    leadFlowAudit: {
      id: "lead-flow-audit",
      category: "strategy" as OfferCategory,
      name: "Lead Flow & Website Audit",
      tagline: "Uncover where inbound leads slip through the cracks in your site and intake workflow.",
      description: "Complete review of your intake flow, landing page, lead journey map, highest-priority fixes, and custom implementation recommendations.",
      standardPrice: 500,
      foundingPrice: 250,
      billing: "one-time" as BillingType,
      delivery: "2 business days",
      deliverables: [
        "Full intake flow & form audit",
        "Page & call-to-action review",
        "Visual lead journey map",
        "Top priority leak fixes",
        "100% credited toward qualifying project within 14 days",
      ],
      contactValue: "lead-flow-audit",
    },

    // Websites
    conversionLandingPage: {
      id: "conversion-landing-page",
      category: "website" as OfferCategory,
      name: "Conversion Landing Page",
      tagline: "One high-converting page built to turn local traffic into inquiries.",
      description: "Single conversion-focused page with responsive build, service positioning, form integration, and basic on-page SEO.",
      standardPrice: 1500,
      foundingPrice: 750,
      billing: "one-time" as BillingType,
      delivery: "5–7 business days",
      deliverables: [
        "One conversion-focused page",
        "Responsive desktop, tablet & mobile build",
        "Service positioning & copy alignment",
        "Form & CTA integration",
        "Basic on-page SEO & analytics-ready CTA events",
        "Loom handoff & 14 days bug-fix support",
      ],
      contactValue: "conversion-landing-page",
    },
    essentialServiceWebsite: {
      id: "essential-service-website",
      category: "website" as OfferCategory,
      name: "Essential Service Website",
      tagline: "Complete mobile-first website for established service businesses.",
      description: "Up to 5 pages covering your services, about, contact/booking, with responsive layout, basic local SEO structure, and analytics.",
      standardPrice: 3000,
      foundingPrice: 1500,
      billing: "one-time" as BillingType,
      delivery: "10–14 business days",
      deliverables: [
        "Up to 5 custom pages (Home, Services, About, Contact, Booking)",
        "Mobile-first responsive build",
        "Local SEO structure & page metadata",
        "Connected forms & booking CTA links",
        "Analytics event tracking setup",
        "Loom handoff & 14 days bug-fix support",
      ],
      contactValue: "essential-service-website",
    },
    modernLeadGenerationWebsite: {
      id: "modern-lead-generation-website",
      category: "website" as OfferCategory,
      name: "Modern Lead-Generation Website",
      tagline: "Expanded multi-page site designed to capture and route local lead volume.",
      description: "Up to 8 pages with custom conversion sections, service area pages, CMS-ready content, lead-source tracking, and CRM integration.",
      standardPrice: 5000,
      foundingPrice: 2500,
      billing: "one-time" as BillingType,
      delivery: "15–20 business days",
      deliverables: [
        "Up to 8 custom pages with service-area structure",
        "Custom conversion sections & trust elements",
        "CMS-ready content areas",
        "Lead-source tracking & CRM/form connection",
        "Performance baseline optimization",
        "Loom handoff & 14 days bug-fix support",
      ],
      contactValue: "modern-lead-generation-website",
    },
    websiteInboundFlowSystem: {
      id: "website-inbound-flow-system",
      category: "website" as OfferCategory,
      name: "Website + Inbound Flow System",
      tagline: "Modern website paired with an automated immediate-response lead flow.",
      description: "Comprehensive website plus one form or missed-call lead flow, CRM logging, routing, immediate response, and booking handoff.",
      standardPrice: 8000,
      foundingPrice: 4000,
      billing: "one-time" as BillingType,
      delivery: "20–25 business days",
      deliverables: [
        "Modern multi-page website build",
        "One complete inbound lead response flow",
        "CRM logging, routing & immediate notifications",
        "Automated booking handoff",
        "Full integration testing & documentation",
        "Loom handoff & 14 days bug-fix support",
      ],
      contactValue: "website-inbound-flow-system",
    },

    // Automations
    missedCallTextBack: {
      id: "missed-call-text-back",
      category: "automation" as OfferCategory,
      name: "Missed-Call Text-Back",
      tagline: "Never lose a phone lead when you're on a job or after hours.",
      description: "Immediate text message sent whenever a call is missed, capturing lead intent and notifying the owner.",
      standardPrice: 1500,
      foundingPrice: 750,
      billing: "one-time" as BillingType,
      delivery: "3–5 business days",
      deliverables: [
        "One phone number source connection",
        "Under 60-second automated SMS reply",
        "Instant owner alert (SMS/Email)",
        "Basic reply handling path",
        "Lead logging sheet/CRM record",
      ],
      contactValue: "missed-call-text-back",
    },
    formToCrmFastLane: {
      id: "form-to-crm-fast-lane",
      category: "automation" as OfferCategory,
      name: "Form-to-CRM Fast Lane",
      tagline: "Instant form sync with source tagging, owner alert, and zero delay.",
      description: "Connect your web forms directly to your CRM with field mapping, source tracking, assignment, and immediate alerts.",
      standardPrice: 1800,
      foundingPrice: 900,
      billing: "one-time" as BillingType,
      delivery: "3–5 business days",
      deliverables: [
        "One form source to CRM integration",
        "Custom field mapping & source tagging",
        "Owner assignment rules",
        "Instant notification dispatch",
        "Error handling & failure alerts",
      ],
      contactValue: "form-to-crm-fast-lane",
    },
    aiLeadQualificationRouting: {
      id: "ai-lead-qualification-routing",
      category: "automation" as OfferCategory,
      name: "AI Lead Qualification & Routing",
      tagline: "AI-evaluated inbound leads categorized by project value and urgency.",
      description: "Intake source with agreed qualification rubric, structured scoring, priority routing, CRM updates, and human fallbacks.",
      standardPrice: 2500,
      foundingPrice: 1250,
      billing: "one-time" as BillingType,
      delivery: "5–7 business days",
      deliverables: [
        "One intake source (form/email)",
        "Agreed qualification rubric & prompt logic",
        "Structured score & categorization",
        "Urgency-based notification & routing",
        "Human fallback logic for uncertain leads",
      ],
      contactValue: "ai-lead-qualification-routing",
    },
    automatedFollowUpRescue: {
      id: "automated-follow-up-rescue",
      category: "automation" as OfferCategory,
      name: "Automated Follow-Up Rescue",
      tagline: "Re-engage quiet prospects without manual nagging.",
      description: "Automated sequence that follows up with leads who stopped responding, with clear stop conditions and human takeover.",
      standardPrice: 2500,
      foundingPrice: 1250,
      billing: "one-time" as BillingType,
      delivery: "5–7 business days",
      deliverables: [
        "One pipeline stage target",
        "Agreed multi-touch follow-up sequence",
        "Automatic stop condition upon reply",
        "Handoff alert to team member",
        "Activity logging & status reporting",
      ],
      contactValue: "automated-follow-up-rescue",
    },
    crmWorkflowCleanup: {
      id: "crm-workflow-cleanup",
      category: "automation" as OfferCategory,
      name: "CRM Workflow Cleanup",
      tagline: "Repair broken triggers, property clutter, and duplicate automation loops.",
      description: "Audit and repair of one pipeline or workflow group, property cleanup, duplicate check, and runbook documentation.",
      standardPrice: 2000,
      foundingPrice: 1000,
      billing: "one-time" as BillingType,
      delivery: "5–7 business days",
      deliverables: [
        "Pipeline/workflow group audit & repair",
        "Field & custom property cleanup",
        "Duplicate enrollment prevention checks",
        "Workflow logic optimization",
        "One-page operational documentation",
      ],
      contactValue: "crm-workflow-cleanup",
    },
    operationsWorkflowBuild: {
      id: "operations-workflow-build",
      category: "automation" as OfferCategory,
      name: "Operations Workflow Build",
      tagline: "Automate a custom internal ops process across up to 4 software tools.",
      description: "Custom operational workflow mapping and build connecting up to 4 tools with notifications, error alerts, and handoff docs.",
      standardPrice: 4000,
      foundingPrice: 2000,
      billing: "one-time" as BillingType,
      delivery: "10–15 business days",
      deliverables: [
        "Defined operations process architecture",
        "Up to 4 connected software tools",
        "Error handling & automated failure alerts",
        "Logging & traceability sheet",
        "Runbook documentation & Loom walkthrough",
      ],
      contactValue: "operations-workflow-build",
    },

    // Flagship
    aiLeadResponseBookingSystem: {
      id: "ai-lead-response-booking-system",
      category: "flagship" as OfferCategory,
      name: "AI Lead Response & Booking System",
      tagline: "Every inbound lead answered, qualified, routed, and moved toward booking—24/7.",
      description: "Our flagship 10-business-day implementation connecting your web forms, phone sources, calendar, and CRM for instant lead response.",
      standardPrice: 6000,
      foundingPrice: 3000,
      billing: "one-time" as BillingType,
      delivery: "10 business days",
      deliverables: [
        "Up to 3 lead intake sources (forms, calls, after-hours)",
        "Under 60-second automated response path",
        "AI qualification based on your business rules",
        "Urgency routing & instant team notifications",
        "Automatic booking handoff to your calendar",
        "CRM & sheet logging with fail-safe error alerts",
        "Loom walkthrough + 30 days of post-launch support",
      ],
      contactValue: "ai-lead-response-booking-system",
      badge: "Flagship Offer",
      flagship: true,
    },

    // Post-Launch Care
    systemCare: {
      id: "system-care",
      category: "system-care" as OfferCategory,
      name: "System Care",
      tagline: "Peace of mind for your deployed website and workflow automations.",
      description: "Ongoing monitoring, incident review, monthly health reports, minor fixes, and one small monthly workflow tweak.",
      standardPrice: 500,
      foundingPrice: 250,
      billing: "monthly" as BillingType,
      delivery: "Ongoing monthly support",
      deliverables: [
        "Continuous monitoring & incident review",
        "Monthly system health report",
        "Minor error fixes & prompt tuning",
        "One small monthly feature tweak",
        "Priority email support",
      ],
      contactValue: "system-care",
    },
    growthOptimization: {
      id: "growth-optimization",
      category: "system-care" as OfferCategory,
      name: "Growth Optimization",
      tagline: "Active monthly refinement of your conversion paths and lead response.",
      description: "Everything in System Care plus conversion reviews, two controlled improvements per month, routing tuning, and monthly strategy call.",
      standardPrice: 1000,
      foundingPrice: 500,
      billing: "monthly" as BillingType,
      delivery: "Ongoing monthly optimization",
      deliverables: [
        "Everything in System Care",
        "Monthly conversion path review",
        "Two controlled system improvements/month",
        "Prompt & lead-routing optimization",
        "30-minute monthly strategy call",
      ],
      contactValue: "growth-optimization",
    },

    // Digital Product
    aiImplementationOs: {
      id: "ai-implementation-os",
      category: "product" as OfferCategory,
      name: "AI Implementation OS for Small Business",
      shortName: "AI Implementation OS",
      tagline: "Implement one useful AI workflow in 30 days—without hiring a developer.",
      description: "A practical 30-day system for small-business owners to select one valuable workflow, build it safely, test it, and operate it daily.",
      standardPrice: 200,
      foundingPrice: 100,
      billing: "one-time" as BillingType,
      delivery: "Instant / Self-paced 30-day curriculum",
      deliverables: [
        "4-week step-by-step curriculum",
        "AI workflow opportunity scorecard & ROI calculator",
        "Trigger/Logic/AI/Action architecture canvas",
        "Production-ready prompt design templates",
        "Test-case library & human handoff rules",
        "One-page runbook template",
      ],
      contactValue: "ai-implementation-os",
    },
  },
};

export const ALLOWED_OFFER_IDS = Object.values(commercialConfig.offers).map((o) => o.id);

/**
 * Returns formatted price string depending on founding rate status
 */
export function getDisplayedPrice(offerKey: keyof typeof commercialConfig.offers): {
  formattedStandard: string;
  formattedFounding: string;
  formattedCurrent: string;
  isFounding: boolean;
  rawCurrent: number;
} {
  const offer = commercialConfig.offers[offerKey];
  const isFounding = commercialConfig.foundingOfferActive;

  const fmt = (num: number) => `${commercialConfig.currencySymbol}${num.toLocaleString()}`;

  const suffix = offer.billing === "monthly" ? "/mo" : "";

  return {
    formattedStandard: `${fmt(offer.standardPrice)}${suffix}`,
    formattedFounding: `${fmt(offer.foundingPrice)}${suffix}`,
    formattedCurrent: `${fmt(isFounding ? offer.foundingPrice : offer.standardPrice)}${suffix}`,
    isFounding,
    rawCurrent: isFounding ? offer.foundingPrice : offer.standardPrice,
  };
}

/**
 * Programmatic verification that every founding rate equals exactly 50% of standard price
 */
export function verifyFoundingPrices(): { valid: boolean; mismatches: string[] } {
  const mismatches: string[] = [];

  for (const [key, offer] of Object.entries(commercialConfig.offers)) {
    const expectedFounding = offer.standardPrice * (1 - commercialConfig.foundingDiscountPercent / 100);
    if (offer.foundingPrice !== expectedFounding) {
      mismatches.push(`${key}: standard=${offer.standardPrice}, founding=${offer.foundingPrice}, expected=${expectedFounding}`);
    }
  }

  return {
    valid: mismatches.length === 0,
    mismatches,
  };
}
