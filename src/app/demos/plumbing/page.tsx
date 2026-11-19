import type { Metadata } from "next";
import localFont from "next/font/local";
import ClearFlow from "./Client";

const grotesk = localFont({
  variable: "--f-grotesk",
  preload: false,
  src: [
    { path: "../../../fonts/space-grotesk-normal-400-700.woff2", weight: "400 700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "ClearFlow Plumbing — Plumbing Concept Demo",
  description: "Concept plumbing website by bajwaa.dev: emergency vs. routine dispatch, upfront price list, service-area radius checker.",
  robots: { index: false },
};

export default function Page() {
  return (
    <div className={grotesk.variable}>
      <ClearFlow />
    </div>
  );
}
