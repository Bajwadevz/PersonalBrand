"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The /components/ui folder is used to store reusable UI primitives and animated
 * components so they can be reused across the project.
 */

interface ProgressiveBlurProps {
  children: ReactNode;
  className?: string;
  /** Width of the left fade in px */
  leftWidth?: number;
  /** Width of the right fade in px */
  rightWidth?: number;
}

export function ProgressiveBlur({
  children,
  className,
  leftWidth = 200,
  rightWidth = 200,
}: ProgressiveBlurProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {children}
      {/* Left edge fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10"
        style={{
          width: leftWidth,
          background: `linear-gradient(to right, white, transparent)`,
        }}
        aria-hidden
      />
      {/* Right edge fade */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10"
        style={{
          width: rightWidth,
          background: `linear-gradient(to left, white, transparent)`,
        }}
        aria-hidden
      />
    </div>
  );
}
