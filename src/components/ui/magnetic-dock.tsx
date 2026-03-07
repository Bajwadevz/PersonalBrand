"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const DOCK_ITEMS = [
  { href: "https://github.com/shahzo", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/shahzaibahmad", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com/shahzo", label: "Twitter", icon: MessageCircle },
  { href: "mailto:shahzaibahmad@gmail.com", label: "Email", icon: Mail },
] as const;

const MAGNETIC_STRENGTH = 0.35;
const MAGNETIC_RADIUS = 120;

function DockIcon({
  icon: Icon,
  label,
  href,
  mousePosition,
}: {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  label: string;
  href: string;
  mousePosition: { x: number; y: number } | null;
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = useCallback(() => {
    if (!ref.current || !mousePosition) {
      setPosition({ x: 0, y: 0 });
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = mousePosition.x - centerX;
    const distanceY = mousePosition.y - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (distance < MAGNETIC_RADIUS) {
      const factor = (1 - distance / MAGNETIC_RADIUS) * MAGNETIC_STRENGTH;
      setPosition({
        x: distanceX * factor,
        y: distanceY * factor,
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  }, [mousePosition]);

  useEffect(() => {
    const id = requestAnimationFrame(() => updatePosition());
    return () => cancelAnimationFrame(id);
  }, [updatePosition]);

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      aria-label={label}
      className="aspect-square w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-neutral-200 grid place-items-center text-neutral-800 cursor-pointer shadow-sm hover:shadow-md transition-shadow touch-manipulation"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-700" aria-hidden />
    </motion.a>
  );
}

export default function MagneticDock() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top - 80 &&
        e.clientY <= rect.bottom + 80
      ) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      } else {
        setMousePosition(null);
      }
    },
    []
  );

  const handleMouseLeave = useCallback(() => setMousePosition(null), []);

  return (
    <div
      className="flex w-full items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <div className="flex h-20 items-end gap-3 sm:gap-4 rounded-xl bg-white/60 backdrop-blur px-4 pb-4 pt-4 border border-neutral-200 shadow-sm">
        {DOCK_ITEMS.map((item, index) => (
          <DockIcon
            key={item.label}
            icon={item.icon}
            label={item.label}
            href={item.href}
            mousePosition={mousePosition}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
