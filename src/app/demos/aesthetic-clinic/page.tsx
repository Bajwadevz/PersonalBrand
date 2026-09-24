import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import Lumiere from "./Client";

const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--f-bodoni" });
const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--f-jost" });

export const metadata: Metadata = {
  title: "Lumière — Aesthetic Clinic Concept Demo",
  description: "Concept aesthetic-clinic website by bajwaa.dev: treatment menu, recovery timeline, consultation booking.",
  robots: { index: false },
};

export default function Page() {
  return (
    <div className={`${bodoni.variable} ${jost.variable}`}>
      <Lumiere />
    </div>
  );
}
