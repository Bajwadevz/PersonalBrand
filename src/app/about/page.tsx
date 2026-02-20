import type { Metadata } from "next";
import BackgroundGrid from "@/components/BackgroundGrid";
import GlassPanel from "@/components/GlassPanel";

export const metadata: Metadata = {
    title: "About",
    description: "Bajwaa Dev teaches AI-first engineering, vibe coding, and practical AI workflows for modern builders.",
};

export default function AboutPage() {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Global Grid Context */}
            <div className="absolute inset-0 z-[-1] flex items-start justify-center pt-20">
                <BackgroundGrid />
            </div>

            <section className="py-24 flex flex-col items-center text-center w-full max-w-6xl mx-auto px-6 relative z-10">
                <div className="mb-8 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50">
                    <span className="flex h-2 w-2 rounded-full bg-[#0B2545] mr-2 opacity-80"></span>
                    The Operator
                </div>

                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
                    Shahzeb Bajwa
                </h1>

                <p className="text-xl max-w-2xl leading-relaxed text-gray-600 font-medium">
                    I teach developers and builders how to use AI as exponential leverage. Not shortcuts. Not hype. Real shipped systems.
                </p>

                {/* Visual Storytelling: Stacked Architecture Cards */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
                    <GlassPanel hoverEffect className="p-8">
                        <div className="h-12 w-12 rounded-lg bg-gray-100/80 flex items-center justify-center mb-6 border border-gray-200">
                            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-3">AI-First Infrastructure</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Building software architectures that treat LLMs and intelligent agents as core components, not just wrappers.
                        </p>
                    </GlassPanel>

                    <GlassPanel hoverEffect className="p-8 md:-translate-y-4">
                        <div className="h-12 w-12 rounded-lg bg-gray-100/80 flex items-center justify-center mb-6 border border-gray-200">
                            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-3">Vibe Coding Mastery</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Executing rapid iteration loops using AI to write, refactor, and deploy code without breaking flow states.
                        </p>
                    </GlassPanel>

                    <GlassPanel hoverEffect className="p-8">
                        <div className="h-12 w-12 rounded-lg bg-gray-100/80 flex items-center justify-center mb-6 border border-gray-200">
                            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-3">System Scalability</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Designing highly cohesive, loosely coupled systems that scale efficiently with modern cloud platforms.
                        </p>
                    </GlassPanel>
                </div>

                {/* Connection Grid */}
                <div className="mt-32 w-full max-w-3xl border-t border-gray-200/60 pt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] mb-8">Establish Connection</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <a href="mailto:hello@bajwaa.dev" className="flex items-center justify-center bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors rounded-xl py-3 text-sm font-medium text-gray-700">
                            Email
                        </a>
                        <a href="https://www.linkedin.com/in/shahzebbajwa/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors rounded-xl py-3 text-sm font-medium text-gray-700">
                            LinkedIn
                        </a>
                        <a href="https://x.com/shahzo_12" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors rounded-xl py-3 text-sm font-medium text-gray-700">
                            Twitter
                        </a>
                        <a href="https://github.com/Bajwadevz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors rounded-xl py-3 text-sm font-medium text-gray-700">
                            GitHub
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
