"use client";

import { useState } from "react";
import Link from "next/link";
import InlineOptIn from "@/components/InlineOptIn";

const automationTypes = [
    { label: "Lead research & CRM enrichment", efficiency: 0.70 },
    { label: "Outbound outreach & follow-ups", efficiency: 0.75 },
    { label: "Reporting & data synthesis", efficiency: 0.80 },
    { label: "Client onboarding workflows", efficiency: 0.65 },
    { label: "Internal ops & task routing", efficiency: 0.60 },
    { label: "Content creation pipelines", efficiency: 0.55 },
];

export default function ROICalculatorClient() {
    // Calculator State
    const [teamSize, setTeamSize] = useState<number>(3);
    const [hourlyRate, setHourlyRate] = useState<number>(75);
    const [manualHoursPerWeek, setManualHoursPerWeek] = useState<number>(10);
    const [selectedTypeIdx, setSelectedTypeIdx] = useState<number>(0);
    const [monthlyToolCost, setMonthlyToolCost] = useState<number>(200);

    // Calculations
    const efficiency = automationTypes[selectedTypeIdx].efficiency;
    const hoursSavedPerWeek = teamSize * manualHoursPerWeek * efficiency;
    const monthlyHoursSaved = hoursSavedPerWeek * 4.33;
    const monthlyValueRecovered = monthlyHoursSaved * hourlyRate;
    const annualROI = (monthlyValueRecovered * 12) - (monthlyToolCost * 12);

    const paybackMonths = monthlyToolCost > 0 ? (monthlyToolCost / monthlyValueRecovered) : 0;
    const formattedPayback = paybackMonths < 1 ? "< 1" : paybackMonths.toFixed(1);

    const returnRatio = monthlyToolCost > 0 ? (monthlyValueRecovered / monthlyToolCost) : 0;
    const formattedReturn = Math.round(returnRatio);

    return (
        <div className="relative w-full overflow-hidden pb-32">
            {/* Header / Intro */}
            <section className="pt-32 lg:pt-40 pb-12 px-6 max-w-4xl mx-auto w-full relative z-10">
                <div className="mb-8 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50">
                    <span className="flex h-2 w-2 rounded-full bg-[#0B2545] mr-2 opacity-80"></span>
                    Free tool · no sign-up required
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
                    AI Automation ROI Calculator
                </h1>
                <p className="text-xl max-w-2xl text-gray-600 font-medium leading-relaxed">
                    See the exact ROI of AI workflow automation before you build a single workflow. Enter your team details below for an instant breakdown.
                </p>
            </section>

            {/* Calculator interactive area */}
            <section className="pb-20 px-6 max-w-4xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Inputs Column */}
                    <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-8 flex flex-col gap-6">

                        {/* Team Size */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#0F172A] font-bold text-sm uppercase tracking-wider">
                                People on this workflow
                            </label>
                            <input
                                type="number"
                                min="1"
                                value={teamSize}
                                onChange={(e) => setTeamSize(Number(e.target.value) || 0)}
                                className="border border-gray-200 bg-[#F8FAFC] rounded-lg px-4 py-3 text-[#0F172A] font-medium focus:outline-none focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545] transition-colors"
                            />
                        </div>

                        {/* Hourly Rate */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#0F172A] font-bold text-sm uppercase tracking-wider">
                                Average hourly rate
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                                <input
                                    type="number"
                                    min="1"
                                    value={hourlyRate}
                                    onChange={(e) => setHourlyRate(Number(e.target.value) || 0)}
                                    className="border border-gray-200 bg-[#F8FAFC] rounded-lg pl-8 pr-4 py-3 w-full text-[#0F172A] font-medium focus:outline-none focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Range Slider for Manual Hours */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-end">
                                <label className="text-[#0F172A] font-bold text-sm uppercase tracking-wider">
                                    Hours/week on manual tasks
                                </label>
                                <span className="text-[#0B2545] font-bold text-lg">{manualHoursPerWeek} hrs</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="40"
                                value={manualHoursPerWeek}
                                onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0B2545]"
                            />
                        </div>

                        {/* Automation Type Select */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#0F172A] font-bold text-sm uppercase tracking-wider">
                                Automation type
                            </label>
                            <select
                                value={selectedTypeIdx}
                                onChange={(e) => setSelectedTypeIdx(Number(e.target.value))}
                                className="border border-gray-200 bg-[#F8FAFC] rounded-lg px-4 py-3 text-[#0F172A] font-medium focus:outline-none focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545] transition-colors appearance-none"
                            >
                                {automationTypes.map((type, idx) => (
                                    <option key={idx} value={idx}>
                                        {type.label} ({Math.round(type.efficiency * 100)}% efficiency)
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Tool Cost */}
                        <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                            <label className="text-[#0F172A] font-bold text-sm uppercase tracking-wider flex justify-between">
                                <span>Monthly automation cost</span>
                                <span className="text-gray-400 text-xs normal-case tracking-normal self-end">Tools + setup</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                                <input
                                    type="number"
                                    min="0"
                                    value={monthlyToolCost}
                                    onChange={(e) => setMonthlyToolCost(Number(e.target.value) || 0)}
                                    className="border border-gray-200 bg-[#F8FAFC] rounded-lg pl-8 pr-4 py-3 w-full text-[#0F172A] font-medium focus:outline-none focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545] transition-colors"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Outputs Column (Dark Card) */}
                    <div className="bg-[#0F172A] rounded-2xl p-8 shadow-xl flex flex-col gap-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B2545]/30 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col gap-2">
                            <span className="text-white/60 text-sm font-bold uppercase tracking-widest">
                                Hours saved per week (team)
                            </span>
                            <span className="text-4xl sm:text-5xl font-bold text-white">
                                {hoursSavedPerWeek.toFixed(1)} <span className="text-2xl text-white/40">hrs</span>
                            </span>
                        </div>

                        <div className="relative z-10 grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                            <div className="flex flex-col gap-1">
                                <span className="text-white/50 text-xs font-bold uppercase tracking-wider">
                                    Monthly Hours
                                </span>
                                <span className="text-2xl font-bold text-white">
                                    {Math.round(monthlyHoursSaved)}
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-white/50 text-xs font-bold uppercase tracking-wider">
                                    Monthly Value
                                </span>
                                <span className="text-2xl font-bold text-emerald-400">
                                    ${Math.round(monthlyValueRecovered).toLocaleString()}
                                </span>
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-col gap-1 pt-6 border-t border-white/10">
                            <span className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">
                                Annual ROI (Net after tools)
                            </span>
                            <span className="text-4xl font-bold text-white">
                                ${Math.round(annualROI).toLocaleString()}
                            </span>
                        </div>

                        {/* Payback Badge */}
                        <div className="relative z-10 mt-auto pt-6">
                            <div className="inline-flex items-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 w-full">
                                <div className="h-2 w-2 rounded-full bg-emerald-500 mr-3 shrink-0"></div>
                                <p className="text-emerald-100 text-sm font-medium leading-tight">
                                    Payback in {formattedPayback} {paybackMonths === 1 ? 'month' : 'months'}.
                                    Every $1 of tool cost returns ${formattedReturn} in recovered time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Opt-in */}
            <section className="pb-12 px-6 max-w-4xl mx-auto w-full relative z-10">
                <InlineOptIn />
            </section>

            {/* SEO Content Block */}
            <section className="py-24 px-6 max-w-4xl mx-auto w-full prose prose-lg prose-gray relative z-10">
                <h2 className="text-2xl font-bold mb-6 text-[#0F172A]">What is AI workflow automation ROI?</h2>
                <p className="mb-6 leading-relaxed text-gray-600">
                    AI workflow automation ROI measures the value recovered from replacing manual, repetitive tasks with automated systems. For most operators and small teams, the biggest gains come from processes that involve data movement, decision routing, and repetitive communication — think lead research, CRM updates, report generation, and outbound follow-ups.
                </p>
                <p className="mb-6 leading-relaxed text-gray-600">
                    This calculator uses your team size, hourly rate, and hours spent on manual tasks to estimate the dollar value of time your team would recover. The automation efficiency percentage is based on real-world observations across Make.com, n8n, and OpenAI-powered workflows. Most teams save 55–80% of the time they currently spend on automatable tasks.
                </p>
                <p className="leading-relaxed text-gray-600">
                    For a deeper breakdown of what to automate first, see the <Link href="/blog/how-to-audit-your-workflow-for-ai-automation" className="text-[#0B2545] font-medium hover:underline underline-offset-4">Workflow Automation Audit Guide →</Link> or the <Link href="/blog/ai-automation-stack-operators-2025" className="text-[#0B2545] font-medium hover:underline underline-offset-4">AI Automation Stack for Operators →</Link>.
                </p>
            </section>
        </div>
    );
}
