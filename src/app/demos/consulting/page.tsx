import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import Halden from "./Client";

const sans = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-inst-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--f-inst-serif" });

export const metadata: Metadata = {
  title: "Halden Advisory — Consulting Concept Demo",
  description: "Concept advisory-firm website by bajwaa.dev: editorial restraint, case carousel, three-step call booking.",
  robots: { index: false },
};

export default function Page() {
  return (
    <div className={`${sans.variable} ${serif.variable}`}>
      <Halden />
    </div>
  );
}
