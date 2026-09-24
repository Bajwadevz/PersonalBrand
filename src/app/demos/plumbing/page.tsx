import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import ClearFlow from "./Client";

const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--f-grotesk" });

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
