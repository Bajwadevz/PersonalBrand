import type { Metadata } from "next";
import BackgroundGrid from "@/components/BackgroundGrid";
import GlassPanel from "@/components/GlassPanel";
import FloatingChip from "@/components/FloatingChip";

export const metadata: Metadata = {
    title: "About Shahzeb Bajwa | AI Expert & Systems Consultant",
    description: "Shahzeb Bajwa is an AI systems expert helping U.S. professionals, entrepreneurs, and operators leverage practical AI automation and implement scalable AI strategies.",
    keywords: ["AI expert", "AI consultant", "AI systems", "AI automation", "AI for business", "AI for professionals", "AI implementation", "Practical AI workflows", "AI strategy", "AI transformation"],
};

export default function AboutPage() {

    // Injecting FAQ Schema for SEO Dominance
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is AI-first systems engineering?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-first systems engineering is the architectural approach of designing software, workflows, and business processes where Large Language Models (LLMs) and intelligent agents are treated as core routing and logic components, rather than aftermarket wrappers."
                }
            },
            {
                "@type": "Question",
                "name": "How can AI automation help my business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Practical AI automation eliminates redundant operational bottlenecks. By structuring generative AI into your existing workflows, small businesses and enterprise teams can drastically reduce manual execution time while scaling output consistency."
                }
            }
        ]
    };

    return (
        <div className="relative w-full overflow-hidden pb-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Global Grid Context */}
            <div className="absolute inset-0 z-[-1] flex items-start justify-center pt-20">
                <BackgroundGrid />
            </div>

            {/* Hero Positioning Section */}
            <section className="py-24 flex flex-col items-center text-center w-full max-w-6xl mx-auto px-6 relative z-10">

                {/* Floating Taxonomy Tags */}
                <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
                    <FloatingChip className="top-12 left-[8%]" animationClass="animate-[float_9s_ease-in-out_infinite]">AI Systems</FloatingChip>
                    <FloatingChip className="top-40 right-[10%]" animationClass="animate-[float_11s_ease-in-out_infinite_1s]">Automation</FloatingChip>
                    <FloatingChip className="top-[60%] left-[5%]" animationClass="animate-[float_10s_ease-in-out_infinite_2s]">AI Strategy</FloatingChip>
                    <FloatingChip className="top-[75%] right-[12%]" animationClass="animate-[float_12s_ease-in-out_infinite_0.5s]">Generative AI</FloatingChip>
                </div>

                <div className="mb-8 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50 relative z-20">
                    <span className="flex h-2 w-2 rounded-full bg-[#0B2545] mr-2 opacity-80"></span>
                    AI Systems Consultant & Educator
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6 max-w-4xl relative z-20">
                    Engineering Autonomous<br />Systems for the Modern Economy
                </h1>

                <p className="text-xl max-w-2xl leading-relaxed text-gray-600 font-medium mb-12 relative z-20">
                    I am Shahzeb Bajwa. I help U.S. professionals, operators, and corporate leaders integrate practical AI automation into their daily execution to drive unparalleled leverage.
                </p>
            </section>

            {/* Long-Form SEO Content Architecture */}
            <section className="max-w-4xl mx-auto px-6 w-full relative z-10">

                {/* Mission & Philosophy */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-6">The AI Philosophy</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        We are living through the most significant technological paradigm shift since the invention of the internet. However, the current landscape is saturated with hyperbole and superficial AI tools. My mission is to bridge the gap between theoretical AI capabilities and <strong className="text-gray-900">practical AI implementation</strong>.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        True leverage does not come from chatting with a bot; it comes from <strong className="text-gray-900">systems thinking</strong>. It comes from architecting reliable environments where autonomous agents execute discrete, high-value tasks perfectly, every single time.
                    </p>
                </div>

                {/* Categorical Messaging */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-8">Who I Help Build</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                        <GlassPanel className="p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">For U.S. Professionals</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The modern workforce is automating. I teach corporate leaders, managers, and everyday knowledge workers how to deploy generative AI applications to secure their career trajectory, automate administrative overhead, and become the AI-integration leader within their organization.
                            </p>
                        </GlassPanel>

                        <GlassPanel className="p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">For Business Owners</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Startups and small businesses cannot afford bloat. I design AI automation workflows that allow lean teams in the U.S. startup ecosystem to scale output dynamically without aggressively scaling headcount.
                            </p>
                        </GlassPanel>

                        <GlassPanel className="p-8 md:col-span-2">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">For Systems Integrators & Engineers</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The era of the &quot;AI Wrapper&quot; is dead. I construct deep technical architectures and playbooks teaching developers how to utilize <em className="text-gray-900 not-italic font-semibold">vibe coding</em>, deterministic LLM routing, and autonomous agent orchestration to ship actual, un-breakable products.
                            </p>
                        </GlassPanel>
                    </div>
                </div>

                {/* The Process Breakdown */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-6">The Implementation Framework</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        Transforming your operations requires a disciplined, systems-first methodology. We do not chase the latest models; we build infrastructure that survives them.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-bold text-sm shrink-0 mt-1 shadow-md">1</div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 m-0">Audit & Deconstruction</h4>
                                <p className="text-gray-600 text-sm mt-1">Breaking down complex U.S. business workflows into deterministic, automatable checkpoints.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-bold text-sm shrink-0 mt-1 shadow-md">2</div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 m-0">Strategic Integration</h4>
                                <p className="text-gray-600 text-sm mt-1">Deploying the optimal AI productivity tools or custom API bridges precisely where human execution bottlenecks exist.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-bold text-sm shrink-0 mt-1 shadow-md">3</div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 m-0">Orchestration & Scale</h4>
                                <p className="text-gray-600 text-sm mt-1">Connecting disparate systems into a cohesive, self-healing loop that compounds enterprise value over time without linear human effort.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="group border border-gray-200 bg-white rounded-lg [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                                What is AI-first systems engineering?
                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="px-4 pb-4 leading-relaxed text-gray-600 text-sm">
                                AI-first systems engineering is the architectural approach of designing software, workflows, and business processes where Large Language Models (LLMs) and intelligent agents are treated as core routing and logic components, rather than aftermarket wrappers.
                            </p>
                        </details>

                        <details className="group border border-gray-200 bg-white rounded-lg [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                                How can AI automation help my business?
                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="px-4 pb-4 leading-relaxed text-gray-600 text-sm">
                                Practical AI automation eliminates redundant operational bottlenecks. By structuring generative AI into your existing workflows, small businesses and enterprise teams can drastically reduce manual execution time while scaling output consistency.
                            </p>
                        </details>
                    </div>
                </div>

            </section>

            {/* Connection Grid */}
            <div className="mt-10 w-full max-w-4xl border-t border-gray-200/60 pt-16 mx-auto px-6 relative z-10">
                <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] mb-8 text-center">Execute the Transition</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <a href="mailto:hello@bajwaa.dev" className="flex items-center justify-center bg-white shadow-sm border border-gray-200 hover:border-gray-300 transition-colors rounded-xl py-4 text-sm font-medium text-gray-800">
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/shahzebbajwa/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white shadow-sm border border-gray-200 hover:border-gray-300 transition-colors rounded-xl py-4 text-sm font-medium text-gray-800">
                        LinkedIn
                    </a>
                    <a href="https://x.com/shahzo_12" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white shadow-sm border border-gray-200 hover:border-gray-300 transition-colors rounded-xl py-4 text-sm font-medium text-gray-800">
                        Twitter
                    </a>
                    <a href="https://github.com/Bajwadevz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white shadow-sm border border-gray-200 hover:border-gray-300 transition-colors rounded-xl py-4 text-sm font-medium text-gray-800">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
