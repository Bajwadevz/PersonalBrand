"use client";

import type { PointerEvent, ReactNode } from "react";

/**
 * Tracks the pointer over child cards marked `data-spot` and exposes its
 * position as --mx / --my so CSS can paint a soft spotlight and border glow.
 * Purely decorative: without JS or a fine pointer the cards look the same.
 */
export default function SpotlightGroup({ className, children }: { className?: string; children: ReactNode }) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const card = (e.target as Element).closest<HTMLElement>("[data-spot]");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return <div className={className} onPointerMove={onMove}>{children}</div>;
}
