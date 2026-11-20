import Link from "next/link";
import FlowDiagram from "@/components/FlowDiagram";
import CountUp from "@/components/motion/CountUp";
import CaseHeadline from "@/components/CaseHeadline";
import { caseStudies } from "@/lib/case-studies";

/** Featured case study (large) followed by the remaining ones as compact cards. */
export default function FeaturedCases() {
  const [lead, ...rest] = caseStudies;
  const m = lead.metrics[0];
  return (
    <div className="work-cases">
      <Link href={`/work/${lead.slug}`} className="work-case work-case-featured glass" data-reveal>
        <div className="work-case-main">
          <span className="work-tag">Client work · anonymised · featured</span>
          <h3>{lead.shortTitle}</h3>
          <p>{lead.summary}</p>
          <span className="work-case-client">{lead.client}</span>
        </div>
        <div className="work-case-side">
          <span className="work-case-metric"><CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} /></span>
          <span className="work-case-label">{m.label}</span>
          <ul className="work-case-mini">
            {lead.metrics.slice(1, 3).map(x => (
              <li key={x.label}><strong>{x.prefix}{x.value.toFixed(x.decimals ?? 0)}{x.suffix}</strong> {x.label}</li>
            ))}
          </ul>
        </div>
        <div className="work-case-flow"><FlowDiagram steps={lead.flow} label={`${lead.shortTitle} workflow`} /></div>
        <span className="work-case-go">Read the case study <span aria-hidden="true">↗</span></span>
      </Link>
      {rest.map((c, i) => {
        return (
          <Link key={c.slug} href={`/work/${c.slug}`} className="work-case glass" data-reveal style={{ ["--d" as string]: `${(i + 1) * 90}ms` }}>
            <span className="work-tag">Client work · anonymised</span>
            <CaseHeadline study={c} valueClass="work-case-metric" labelClass="work-case-label" />
            <h3>{c.shortTitle}</h3>
            <span className="work-case-client">{c.client}</span>
            <span className="work-case-go">Read the case study <span aria-hidden="true">↗</span></span>
          </Link>
        );
      })}
    </div>
  );
}
