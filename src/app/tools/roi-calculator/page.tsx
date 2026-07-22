import type { Metadata } from 'next';
import ROICalculatorClient from './ROICalculatorClient';

export const metadata: Metadata = {
    title: "AI Automation ROI Calculator: Free Tool",
    description: "Calculate exactly how many hours and dollars AI workflow automation saves your team. Free calculator. Enter team size, hourly rate, and manual task time.",
    alternates: {
        canonical: "https://bajwaa.dev/tools/roi-calculator",
    },
};

export default function Page() {
    return <ROICalculatorClient />;
}
