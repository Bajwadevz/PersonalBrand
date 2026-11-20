"use client";

import { useEffect, useRef, useState } from "react";
import { SecondaryLink } from "@/components/Agency";

const statements = [
  ["Inbox", "An enquiry lands in the inbox. Someone copies it into the CRM — eventually.", ["Inbox", "CRM"], "copied by hand"],
  ["Quote → job → accounts", "A quote is approved. The same details are typed again into job management and Xero.", ["Quote", "Job system", "Xero"], "typed twice"],
  ["Friday report", "Friday arrives. Someone rebuilds the weekly report from four different tabs.", ["4 tabs", "Weekly report"], "rebuilt weekly"],
] as const;

/**
 * Pinned on wide screens when motion is allowed: three handoff statements
 * crossfade as the visitor scrolls. Otherwise they render as a plain list.
 */
export default function PinnedProblems() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      if (travel <= 0) return;
      const p = Math.min(1, Math.max(0, -rect.top / travel));
      setProgress(p);
      setActive(Math.min(statements.length - 1, Math.floor(p * statements.length)));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={ref} className="pin-band home-pin" aria-labelledby="handoff-heading">
      <div className="pin-sticky">
        <div className="agency-wrap pin-inner">
          <div>
            <p className="kicker">The problem</p>
            <h2 id="handoff-heading">Too much work happens between your systems.</h2>
            <p className="section-lead">Each handoff is small. Together they add up — and when one breaks, nobody can see where.</p>
            <div className="pin-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
            <p className="home-pin-count" aria-hidden="true"><span>{String(active + 1).padStart(2, "0")}</span> / {String(statements.length).padStart(2, "0")}</p>
            <div className="home-pin-cta"><SecondaryLink href="/contact#book">Recognise one? Talk it through on a free call</SecondaryLink></div>
          </div>
          <ol className="pin-statements">
            {statements.map(([label, text, flow, note], i) => (
              <li key={label} className={i === active ? "is-active" : i < active ? "is-past" : undefined}>
                <span className="pin-label">{String(i + 1).padStart(2, "0")} · {label}</span>
                <p>{text}</p>
                <span className="home-pin-flow" aria-hidden="true">
                  {flow.map((chip, ci) => (
                    <span key={chip} className="home-pin-step">
                      {ci > 0 && <span className="home-pin-gap"><span className="home-pin-dash" />{ci === 1 && <span className="home-pin-note">{note}</span>}</span>}
                      <span className="home-pin-chip">{chip}</span>
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
