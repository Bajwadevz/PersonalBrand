"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  const message =
    error && typeof error === "object" && typeof (error as Error).message === "string"
      ? (error as Error).message
      : "An error occurred while loading this page.";

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 text-center font-sans">
      <h1 className="text-2xl font-bold text-[#0F172A] mb-2">Something went wrong</h1>
      <p className="text-gray-500 mb-6 max-w-md">{message}</p>
      <div className="flex gap-4 justify-center flex-wrap">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-[#0F172A] text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-gray-200 text-gray-700 px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
