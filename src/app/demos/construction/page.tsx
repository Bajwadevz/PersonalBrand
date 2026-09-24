import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Ridgeform from "./Client";

const condensed = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--f-barlow-c" });
const barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--f-barlow" });

export const metadata: Metadata = {
  title: "Ridgeform Builders — Construction Concept Demo",
  description: "Concept general-contractor website by bajwaa.dev: live budget estimator, project portfolio, fixed-price process.",
  robots: { index: false },
};

export default function Page() {
  return (
    <div className={`${condensed.variable} ${barlow.variable}`}>
      <Ridgeform />
    </div>
  );
}
