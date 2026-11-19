import { pageMetadata } from "@/lib/page-metadata";
import ROICalculatorClient from './ROICalculatorClient';

export const metadata = pageMetadata(
  "/tools/roi-calculator",
  "AI Automation ROI Calculator: Free Tool",
  "Estimate potential time and cost savings from a workflow using your own team size, hourly rate and manual processing time.",
);

export default function Page() {
    return <ROICalculatorClient />;
}
