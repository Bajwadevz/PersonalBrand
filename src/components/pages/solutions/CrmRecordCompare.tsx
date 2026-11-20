"use client";

import { useEffect, useRef, useState } from "react";

type Row = { label: string; before: string; after: string };

const rows: Row[] = [
  { label: "Contact", before: "jane smith (+2 similar records)", after: "Jane Smith · duplicates merged" },
  { label: "Company", before: "harbour plumbing pty", after: "Harbour Plumbing Pty Ltd" },
  { label: "Source", before: "Unknown", after: "Website form · 3 Mar" },
  { label: "Owner", before: "Unassigned", after: "Sam K. · Sales" },
  { label: "Stage", before: "New?", after: "Quote requested" },
  { label: "Next step", before: "None", after: "Call back · Thu 10:00" },
  { label: "Last activity", before: "23 days ago", after: "Today · logged automatically" },
];

/**
 * Fictional CRM record shown before and after a CRM clean-up. Starts on
 * "Before"; when motion is allowed it flips to "After" once, shortly after it
 * scrolls into view, unless the visitor has already chosen a view.
 */
export default function CrmRecordCompare() {
  const [view, setView] = useState<"before" | "after">("before");
  const touched = useRef(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.classList.contains("motion-ok")) return;
    let timer = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      timer = window.setTimeout(() => { if (!touched.current) setView("after"); }, 1800);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); window.clearTimeout(timer); };
  }, []);

  const choose = (v: "before" | "after") => { touched.current = true; setView(v); };
  const after = view === "after";

  return (
    <figure ref={ref} className="sol-record glass" data-view={view}>
      <div className="sol-record-top">
        <span className="sol-tag">Illustrative · fictional record</span>
        <div className="sol-toggle" role="group" aria-label="Show the CRM record">
          <button type="button" aria-pressed={!after} onClick={() => choose("before")}>Before</button>
          <button type="button" aria-pressed={after} onClick={() => choose("after")}>After</button>
        </div>
      </div>
      <dl className="sol-record-rows" aria-live="polite">
        {rows.map((r, i) => (
          <div key={r.label} className="sol-record-row" style={{ ["--i" as string]: i }}>
            <dt>{r.label}</dt>
            <dd>
              <span className={after ? "sol-flag sol-flag-ok" : "sol-flag sol-flag-bad"} aria-hidden="true">{after ? "✓" : "!"}</span>
              <span className="sol-record-value" key={view}>{after ? r.after : r.before}</span>
            </dd>
          </div>
        ))}
      </dl>
      <figcaption className="sol-record-cap">
        {after ? "One trusted record with an owner, a source and a dated next step." : "Duplicates, no owner, no source and nothing scheduled."}
      </figcaption>
    </figure>
  );
}
