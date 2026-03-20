"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The /components/ui folder is used to store reusable UI primitives and animated
 * components so they can be reused across the project.
 */

interface InfiniteSliderProps {
  children: ReactNode;
  className?: string;
  /** Duration for one full cycle in seconds */
  duration?: number;
}

export function InfiniteSlider({
  children,
  className,
  duration = 30,
}: InfiniteSliderProps) {
  return (
    <div className={cn("group overflow-hidden", className)} aria-hidden>
      <div
        className="marquee-track flex w-max items-center gap-16 md:gap-24 group-hover:[animation-play-state:paused]"
        style={{
          animationName: "infinite-slide",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDuration: `${duration}s`,
          width: "max-content",
        }}
      >
        <div className="flex w-max items-center gap-16 md:gap-24 flex-shrink-0">
          {children}
        </div>
        <div className="flex w-max items-center gap-16 md:gap-24 flex-shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
}
