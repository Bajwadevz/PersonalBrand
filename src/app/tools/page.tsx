import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Free Tools — AI Workflow Automation | bajwaa.dev",
    description: "Free tools for operators and founders building with AI. Calculate automation ROI, audit your workflows, and more. No sign-up required.",
    alternates: {
        canonical: "https://bajwaa.dev/tools",
    },
};

const tools = [
    {
        title: "AI Automation ROI Calculator",
        description: "Calculate exactly how many hours and dollars AI workflow automation saves your team. Enter team size, hourly rate, and manual task time for an instant breakdown.",
        href: "/tools/roi-calculator",
        badge: "Free",
        category: "Calculator",
        iconPath: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z",
        status: "live",
    },
    {
        title: "Workflow Automation Readiness Quiz",
        description: "Find out if your business is actually ready for automation. Answer 10 questions to get a custom readiness score and priority build plan.",
        href: "/tools/readiness-quiz",
        badge: "Free",
        category: "Quiz",
        iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        status: "live",
    },
    {
        title: "Automation Stack Builder",
        description: "Select your role, goals, and budget to get a custom n8n / Make architecture recommendation. Stop guessing which tools to use.",
        href: "/tools/stack-builder",
        badge: "Free",
        category: "Architecture",
        iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
        status: "live",
    },
    {
        title: "n8n Workflow Idea Finder",
        description: "Select your industry and existing saas tools. Get specific n8n workflow ideas curated from real operator deployments.",
        href: "/tools/workflow-finder",
        badge: "Free",
        category: "Ideas",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
        status: "live",
    },
    {
        title: "AI System Prompt Library",
        description: "Browse a library of production-ready system prompts organized by role and task. Copy and paste directly into your workflow.",
        href: "/tools/prompt-library",
        badge: "Free",
        category: "Prompts",
        iconPath: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
        status: "live",
    },
    {
        title: "Outbound Email Openers",
        description: "Stop writing generic emails. Access 30+ field-tested cold email hook frameworks categorized by prospect role and tactic.",
        href: "/tools/email-openers",
        badge: "Free",
        category: "Templates",
        iconPath: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
        status: "live",
    },
    {
        title: "Lead Enrichment Script Generator",
        description: "Generate custom JavaScript or Python snippets to parse data from Clearbit / Apollo before pushing to CRM.",
        href: "/tools/lead-enrichment-script",
        badge: "Free",
        category: "Scripts",
        iconPath: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
        status: "live",
    },
    {
        title: "Inbound Routing Logic Builder",
        description: "Map out routing rules for inbound leads. Generate a clean logic flow for scoring and assignment before building it.",
        href: "/tools/routing-logic-builder",
        badge: "Free",
        category: "Logic",
        iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        status: "live",
    },
    {
        title: "Sales Discovery Question Bank",
        description: "A curated bank of hard-hitting discovery questions organized by sales stage and persona. Uncover real pain.",
        href: "/tools/discovery-question-bank",
        badge: "Free",
        category: "Sales",
        iconPath: "M8.25 4.5l7.5 7.5-7.5 7.5",
        status: "live",
    }
];

export default function ToolsPage() {
    return (
        <div className="relative w-full overflow-hidden pb-32">
            {/* Hero */}
            <section className="pt-32 lg:pt-40 pb-20 px-6 max-w-4xl mx-auto w-full relative z-10">
                <div className="mb-8 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50">
                    <span className="flex h-2 w-2 rounded-full bg-[#0B2545] mr-2 opacity-80"></span>
                    {tools.filter(t => t.status === "live").length} tools available · always free
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
                    Free Tools
                </h1>
                <p className="text-xl max-w-2xl text-gray-600 font-medium leading-relaxed">
                    Practical calculators and frameworks for operators building with AI. No account, no paywall.
                </p>
            </section>

            {/* Tools Grid */}
            <section className="px-6 max-w-4xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool) => {
                        const isLive = tool.status === "live";
                        const CardWrapper = isLive ? Link : "div";

                        return (
                            <CardWrapper
                                key={tool.href}
                                href={tool.href}
                                className={`group bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-8 flex flex-col transition-all duration-200 ease-out ${
                                    isLive 
                                        ? "hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1 cursor-pointer" 
                                        : "opacity-60 cursor-not-allowed grayscale-[0.5]"
                                }`}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                                        isLive ? "bg-[#F8FAFC] text-[#0B2545] border-gray-200/50" : "bg-gray-50 text-gray-400 border-gray-100"
                                    }`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d={tool.iconPath} />
                                        </svg>
                                    </div>
                                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border ${
                                        isLive ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-gray-50 text-gray-500 border-gray-200"
                                    }`}>
                                        {isLive ? tool.badge : "Coming Soon"}
                                    </span>
                                </div>

                                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border self-start mb-4 ${
                                    isLive ? "bg-gray-100 text-gray-500 border-gray-200/50" : "bg-gray-50 text-gray-400 border-gray-100"
                                }`}>
                                    {tool.category}
                                </span>

                                <h2 className={`text-xl font-bold mb-3 transition-colors leading-snug ${
                                    isLive ? "text-[#0F172A] group-hover:text-[#0B2545]" : "text-gray-500"
                                }`}>
                                    {tool.title}
                                </h2>
                                <p className={`text-sm leading-relaxed flex-grow ${
                                    isLive ? "text-gray-600" : "text-gray-400"
                                }`}>
                                    {tool.description}
                                </p>

                                <div className={`mt-6 pt-6 border-t flex items-center text-sm font-semibold transition-colors ${
                                    isLive 
                                        ? "border-gray-100 text-[#0F172A] group-hover:text-[#0B2545]" 
                                        : "border-gray-50 text-gray-300"
                                }`}>
                                    {isLive ? "Open tool →" : "In development..."}
                                </div>
                            </CardWrapper>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
