"use client";

/**
 * The /components/ui folder is used for reusable UI primitives and design system components.
 * Keeping them here maintains a consistent design system and makes components easier to reuse.
 */

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { QuoteIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  image: string;
  name: string;
  username: string;
  text: string;
  social: string;
}

interface TestimonialsProps {
  testimonials: TestimonialItem[];
  title: string;
  description?: string;
  className?: string;
  initialCount?: number;
  /** When false, render content only (no outer section) for use inside a parent section */
  wrapInSection?: boolean;
}

export function Testimonials({
  testimonials,
  title,
  description,
  className,
  initialCount = 6,
  wrapInSection = true,
}: TestimonialsProps) {
  const [visibleCount, setVisibleCount] = useState(
    Math.min(initialCount, testimonials.length)
  );
  const visible = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;

  const content = (
    <>
      <header className="mb-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl mx-auto text-base text-gray-600 sm:text-lg">
            {description}
          </p>
        )}
      </header>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, index) => (
          <Card
            key={`${item.name}-${index}`}
            className={cn(
              "w-full max-w-80 mx-auto sm:mx-0 flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            )}
          >
            <CardHeader className="pb-2">
              <QuoteIcon className="mb-2" aria-hidden />
              <p className="text-gray-700 leading-relaxed">{item.text}</p>
            </CardHeader>
            <CardContent className="flex-1 pt-0" />
            <CardFooter className="flex items-center gap-4 border-t border-gray-100 pt-4 mt-auto">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="object-cover h-full w-full"
                  unoptimized
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-900 truncate">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500 truncate">{item.username}</p>
              </div>
              {item.social && (
                <a
                  href={item.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={`${item.name} on Twitter`}
                >
                  @
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              setVisibleCount((n) =>
                Math.min(n + 3, testimonials.length)
              )
            }
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );

  if (!wrapInSection) {
    return <div className={cn("w-full", className)}>{content}</div>;
  }

  return (
    <section
      className={cn("w-full py-12 md:py-16", className)}
      aria-label="Testimonials"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {content}
      </div>
    </section>
  );
}
