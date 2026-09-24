import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import NorthlineAir from "./Client";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--f-archivo" });

export const metadata: Metadata = {
  title: "Northline Air — HVAC Concept Demo",
  description: "Concept HVAC website by bajwaa.dev: same-day booking flow, flat-rate services, comfort plans.",
  robots: { index: false },
};

export default function Page() {
  return (
    <div className={archivo.variable}>
      <NorthlineAir />
    </div>
  );
}
