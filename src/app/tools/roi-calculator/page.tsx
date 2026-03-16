import type { Metadata } from 'next';
import ROICalculatorClient from './ROICalculatorClient';

export const metadata: Metadata = {
    title: "AI Automation ROI Calculator — Free Tool | bajwaa.dev",
    description: "Calculate exactly how many hours and dollars AI workflow automation saves your team. Free calculator. Enter team size, hourly rate, and manual task time."
};

export default function Page() {
    return <ROICalculatorClient />;
}
