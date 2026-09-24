import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import FosterStone from "./Client";

const syne = Syne({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--f-syne" });
const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--f-dm" });

export const metadata: Metadata = {
  title: "Foster & Stone — Architecture & Interiors Concept Demo",
  description: "Concept architecture and interiors studio website by bajwaa.dev: project index, before/after, material library, project inquiry.",
  robots: { index: false },
};

export default function Page() {
  return (
    <div className={`${syne.variable} ${dm.variable}`}>
      <FosterStone />
    </div>
  );
}
