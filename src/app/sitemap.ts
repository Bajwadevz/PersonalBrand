import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";
import { caseStudies } from "@/lib/case-studies";

const origin = "https://bajwaa.dev";
// Date of the last substantive content change for the commercial pages.
const updated = "2026-11-20";

const pages: [string, number][] = [
  ["/", 1], ["/ai-implementation", 0.9], ["/ai-operations-audit", 0.9], ["/how-it-works", 0.8],
  ["/work", 0.8], ["/ai-implementation-perth", 0.8], ["/solutions/crm-automation", 0.8],
  ["/solutions/business-process-automation", 0.8], ["/about", 0.6], ["/contact", 0.7],
  ["/work/small-business-sales-os", 0.5], ["/blog", 0.7], ["/tools", 0.4], ["/workflows", 0.3],
  ["/privacy", 0.2], ["/terms", 0.2],
];
// Legacy free tools keep their URLs and stay indexable, but sit outside the agency journey.
const tools = [
  "discovery-question-bank", "email-openers", "lead-enrichment-script", "prompt-library",
  "readiness-quiz", "roi-calculator", "routing-logic-builder", "stack-builder", "workflow-finder",
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.VERCEL_ENV === "preview") return [];
  return [
    ...pages.map(([path, priority]) => ({ url: origin + path, lastModified: updated, priority })),
    ...caseStudies.map(c => ({ url: `${origin}/work/${c.slug}`, lastModified: updated, priority: 0.7 })),
    ...tools.map(slug => ({ url: `${origin}/tools/${slug}`, priority: 0.3 })),
    ...getAllPosts().map(post => ({ url: `${origin}/blog/${post.slug}`, lastModified: post.date || undefined, priority: 0.6 })),
  ];
}
