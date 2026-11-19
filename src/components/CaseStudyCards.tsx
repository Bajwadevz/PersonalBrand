import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import CountUp from "./motion/CountUp";

export default function CaseStudyCards({ limit = 3, headingLevel = 3 }: { limit?: number; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="case-grid">
      {caseStudies.slice(0, limit).map((c, i) => {
        const m = c.metrics[0];
        return (
          <Link key={c.slug} href={`/work/${c.slug}`} className="case-card glass" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
            <span className="case-tag">Client work · anonymised</span>
            <span className="case-metric"><CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} /></span>
            <span className="case-metric-label">{m.label}</span>
            <H>{c.shortTitle}</H>
            <span className="case-client">{c.client}</span>
            <span className="case-arrow" aria-hidden="true">↗</span>
          </Link>
        );
      })}
    </div>
  );
}
