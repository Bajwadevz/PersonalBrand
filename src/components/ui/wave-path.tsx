"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

/**
 * The /components/ui folder stores reusable UI components and animations used across the site.
 */

interface WavePathProps {
  className?: string;
  /** Width of the SVG viewBox */
  width?: number;
  /** Height of the SVG viewBox */
  height?: number;
  /** Stroke color */
  stroke?: string;
  /** Stroke width */
  strokeWidth?: number;
}

export function WavePath({
  className,
  width = 600,
  height = 120,
  stroke = "rgba(15, 23, 42, 0.12)",
  strokeWidth = 1.5,
}: WavePathProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0.5, y: 0.5 });
  }, []);

  // Wave path: smooth curve that responds to mouse (subtle bend toward cursor)
  const amplitude = 24;
  const frequency = 2;
  const bend = (mousePos.x - 0.5) * 30;
  const points: string[] = [];
  const steps = 80;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = t * width;
    const baseY = height / 2 + Math.sin(t * Math.PI * frequency) * amplitude;
    const influence = Math.exp(-Math.pow((t - mousePos.x) * 4, 2));
    const y = baseY + bend * influence * (1 - Math.abs(t - 0.5) * 2);
    points.push(`${x},${y}`);
  }
  const pathD = `M ${points.join(" L ")}`;

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${height}`}
      className={cn("w-full max-w-2xl overflow-visible", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden
    >
      <path
        d={pathD}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-150 ease-out"
      />
    </svg>
  );
}
