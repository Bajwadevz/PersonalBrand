import CountUp from "./motion/CountUp";
import type { CaseStudy } from "@/lib/case-studies";

/**
 * The lead figure for a case study card, or — when the client hasn't shared
 * figures — its first outcome in words. Never invents a number.
 */
export default function CaseHeadline({ study, valueClass, labelClass }: { study: CaseStudy; valueClass: string; labelClass: string }) {
  const m = study.metrics[0];
  if (m) {
    return <>
      <span className={valueClass}><CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} /></span>
      <span className={labelClass}>{m.label}</span>
    </>;
  }
  return <span className={`${labelClass} case-outcome-line`}>{study.outcomes?.[0] ?? study.summary}</span>;
}
