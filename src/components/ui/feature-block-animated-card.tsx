"use client";

/**
 * The /components/ui folder is used for reusable UI primitives and design system components.
 * feature-block-animated-card: Animated card for feature/approach sections with icon strip.
 * Icons are inline SVGs for reliable rendering (no external URLs).
 */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type FeatureIconSize = "sm" | "md" | "lg";

export type FeatureIconKey = "openai" | "claude" | "gemini" | "copilot" | "meta";

const sizeClasses: Record<FeatureIconSize, string> = {
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

/** Inline SVG icons — no external URLs, work in light/dark, no layout shift */
function OpenAIIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
      <path
        d="M12 2L3 7v10l9 5 9-5V7L12 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 6v12M7 9l5 3 5-3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClaudeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path d="M12 8v2M12 14v2M8 12h2M14 12h2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function GeminiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
      <path
        d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function CopilotIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
      <path
        d="M8 4l4 4-4 4M16 4l-4 4 4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="4" y="10" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function MetaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("shrink-0", className)} aria-hidden>
      <circle cx="9" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const ICON_COMPONENTS: Record<FeatureIconKey, React.ComponentType<{ className?: string }>> = {
  openai: OpenAIIcon,
  claude: ClaudeIcon,
  gemini: GeminiIcon,
  copilot: CopilotIcon,
  meta: MetaIcon,
} as const;

const ICON_LABELS: Record<FeatureIconKey, string> = {
  openai: "OpenAI",
  claude: "Claude",
  gemini: "Gemini",
  copilot: "Copilot",
  meta: "Meta",
};

export interface FeatureBlockIcon {
  key: FeatureIconKey;
  size?: FeatureIconSize;
}

export interface AnimatedCardProps {
  title: string;
  description: string;
  icons: FeatureBlockIcon[];
  className?: string;
}

export function AnimatedCard({
  title,
  description,
  icons,
  className,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className={cn(
        "rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:shadow-none overflow-hidden",
        className
      )}
    >
      <h3 className="text-xl font-bold text-[#0F172A] dark:text-gray-100 mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex flex-wrap items-center gap-3">
        {icons.map(({ key, size = "md" }, index) => {
          const IconComponent = ICON_COMPONENTS[key];
          if (!IconComponent) return null;
          return (
            <motion.div
              key={`${key}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              className={cn(
                "flex shrink-0 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-1.5",
                size === "sm" && "p-1",
                size === "lg" && "p-2"
              )}
              title={ICON_LABELS[key]}
            >
              <IconComponent className={sizeClasses[size]} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
