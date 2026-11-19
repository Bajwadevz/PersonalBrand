import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";

const origin = "https://bajwaa.dev";
const paths = [
  "/", "/ai-implementation", "/ai-operations-audit", "/how-it-works", "/work",
  "/about", "/contact", "/ai-implementation-perth", "/solutions/crm-automation",
  "/solutions/business-process-automation", "/work/small-business-sales-os",
  "/services/websites", "/ai-implementation-os", "/blog", "/tools", "/workflows",
  "/privacy", "/terms",
];
const tools = [
  "discovery-question-bank", "email-openers", "lead-enrichment-script", "prompt-library",
  "readiness-quiz", "roi-calculator", "routing-logic-builder", "stack-builder", "workflow-finder",
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.VERCEL_ENV === "preview") return [];
  return [
    ...paths.map(path => ({ url: origin + path })),
    ...tools.map(slug => ({ url: origin + "/tools/" + slug })),
    ...getAllPosts().map(post => ({ url: origin + "/blog/" + post.slug })),
  ];
}
