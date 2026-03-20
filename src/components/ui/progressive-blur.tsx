"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ProgressiveBlurProps {
  children: ReactNode;
  className?: string;
  leftWidth?: number;
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
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10"
        style={{
          width: leftWidth,
          background: `linear-gradient(to right, var(--color-site-bg), transparent)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10"
        style={{
          width: rightWidth,
          background: `linear-gradient(to left, var(--color-site-bg), transparent)`,
        }}
        aria-hidden
      />
    </div>
  );
}
