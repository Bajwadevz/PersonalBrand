"use client";

import { useEffect, useRef, useState } from "react";
import { SecondaryLink } from "@/components/Agency";

const statements = [
  ["Busywork", "Your best people spend hours on work a system could do.", "We find the repetitive admin — data entry, chasing, copy-paste reporting — and automate the parts that don’t need judgement."],
  ["AI that didn’t stick", "You’ve tried AI tools, but nothing changed how the business runs.", "We build AI into real workflows with rules, approvals and logs, so it’s trusted and used every day — not another login."],
  ["Disconnected systems", "Your tools don’t talk, so the same details get typed twice.", "We connect the CRM, inbox, accounts and job tools you already pay for, so information moves once and stays correct."],
  ["Dependence", "You don’t want to rely on a consultant forever.", "We train your team, document every workflow and hand over the accounts, so you can run and extend it yourselves."],
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
            <p className="kicker">The problem we solve</p>
            <h2 id="handoff-heading">AI should take work off your plate — not add more.</h2>
            <p className="section-lead">Most growing businesses hit the same four walls. We implement the fix inside your business — and equip your team to own it.</p>
            <div className="pin-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
            <p className="home-pin-count" aria-hidden="true"><span>{String(active + 1).padStart(2, "0")}</span> / {String(statements.length).padStart(2, "0")}</p>
            <div className="home-pin-cta"><SecondaryLink href="/contact#book">Recognise one? Talk it through on a free call</SecondaryLink></div>
          </div>
          <ol className="pin-statements">
            {statements.map(([label, problem, fix], i) => (
              <li key={label} className={i === active ? "is-active" : i < active ? "is-past" : undefined}>
                <span className="pin-label">{String(i + 1).padStart(2, "0")} · {label}</span>
                <p>{problem}</p>
                <span className="home-pin-fix"><span className="home-pin-fix-label">How we help</span>{fix}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
