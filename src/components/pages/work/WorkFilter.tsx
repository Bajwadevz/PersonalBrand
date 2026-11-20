"use client";

import { useState, type ReactNode } from "react";

export type WorkKind = "client" | "demo" | "example";
const chips: { id: "all" | WorkKind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "client", label: "Client work" },
  { id: "demo", label: "Demo" },
  { id: "example", label: "Example workflow" },
];

/**
 * Filter chips for the /work page. Children are sections tagged with
 * data-kind; CSS hides the non-matching ones. Without JS everything shows.
 */
export default function WorkFilter({ counts, children }: { counts: Record<WorkKind, number>; children: ReactNode }) {
  const [filter, setFilter] = useState<"all" | WorkKind>("all");
  const total = counts.client + counts.demo + counts.example;
  const shown = filter === "all" ? total : counts[filter];
  return (
    <div className="work-filter" data-filter={filter}>
      <div className="work-chips-bar">
        <div className="agency-wrap work-chips" role="group" aria-label="Filter work by type">
          {chips.map(c => (
            <button key={c.id} type="button" className="work-chip" aria-pressed={filter === c.id} onClick={() => setFilter(c.id)}>
              {c.label} <span className="work-chip-count">{c.id === "all" ? total : counts[c.id]}</span>
            </button>
          ))}
          <span className="sr-only" aria-live="polite">{`Showing ${shown} item${shown === 1 ? "" : "s"}`}</span>
        </div>
      </div>
      {children}
    </div>
  );
}
