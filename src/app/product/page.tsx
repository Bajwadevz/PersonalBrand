import type { Metadata } from "next";
import BackgroundGrid from "@/components/BackgroundGrid";
import GlassPanel from "@/components/GlassPanel";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
    title: "Product | Bajwaa Dev",
    description: "A playbook and system for developers. Launching soon.",
};

export default function ProductPage() {
    return (
        <div className="relative w-full overflow-hidden pb-32">
            {/* Global Grid Context */}
            <div className="absolute inset-0 z-[-1] flex items-start justify-center pt-20">
                <BackgroundGrid />
            </div>

            <section className="pt-24 lg:pt-32 flex flex-col items-center w-full text-center max-w-6xl mx-auto px-6 relative z-10">

                {/* Animated Badge */}
                <div className="mb-8 inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-gray-700 border border-gray-200/60 shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                    Update: Chapter 4 Architecture Added
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6 max-w-4xl mx-auto">
                    The Complete Playbook for Build-Fast AI Engineers
                </h1>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                    A comprehensive system, mental models, and step-by-step code paths to execute faster,
                    build better architectures, and scale your impact without shipping garbage.
                </p>

                {/* Conversion Zone */}
                <div className="w-full max-w-md mx-auto flex flex-col gap-3 relative z-20">
                    <WaitlistForm />
                    <p className="mt-4 text-xs font-medium text-gray-500/80">
                        Join 1,000+ engineers waiting. No spam. Unsubscribe anytime.
                    </p>
                </div>

                {/* Layered UI Mockup Presentation */}
                <div className="mt-24 w-full relative max-w-5xl mx-auto flex flex-col items-center perspective-1000">

                    {/* Background Layer Card */}
                    <GlassPanel className="absolute top-12 md:top-24 w-[90%] md:w-[85%] h-64 md:h-96 -z-10 bg-white/40 blur-[1px] opacity-60 scale-95 border-gray-200" />
                    <GlassPanel className="absolute top-6 md:top-12 w-[95%] md:w-[92%] h-64 md:h-96 -z-5 bg-white/60 blur-[0.5px] opacity-80 scale-[0.98] border-gray-200" />

                    {/* Main Mockup Card */}
                    <div className="w-full bg-white rounded-2xl shadow-2xl border border-gray-200/60 p-2 overflow-hidden flex flex-col">

                        {/* Fake Mac Toolbar */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50/80 border-b border-gray-100 rounded-t-xl">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            <div className="mx-auto flex items-center bg-white px-3 py-1 text-xs text-gray-400 rounded-md shadow-sm border border-gray-100">
                                playbooks.bajwaa.dev
                            </div>
                        </div>

                        {/* Internal Mockup Content */}
                        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 bg-[#F9FAFB] flex-grow">

                            {/* Fake Sidebar */}
                            <div className="w-full md:w-1/3 flex flex-col gap-3">
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Modules</div>
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`h-10 w-full rounded-md flex items-center px-4 text-sm font-medium ${i === 1 ? 'bg-white shadow-sm border border-gray-200 text-[#0F172A]' : 'text-gray-500 hover:bg-gray-100'}`}>
                                        {i === 1 ? "1. Ground Truth Architecture" : `Module 0${i}`}
                                    </div>
                                ))}
                            </div>

                            {/* Fake Editor View */}
                            <div className="w-full md:w-2/3 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                                <div className="h-6 w-3/4 bg-gray-100 rounded-sm mb-6"></div>
                                <div className="space-y-3">
                                    <div className="h-4 w-full bg-gray-50 rounded-sm"></div>
                                    <div className="h-4 w-5/6 bg-gray-50 rounded-sm"></div>
                                    <div className="h-4 w-full bg-gray-50 rounded-sm"></div>
                                    <div className="h-4 w-4/6 bg-gray-50 rounded-sm"></div>
                                </div>

                                <div className="mt-8 p-4 bg-gray-900 rounded-lg">
                                    <div className="flex gap-2 items-center mb-2">
                                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                        <div className="text-xs text-gray-400 font-mono">system_prompt.ts</div>
                                    </div>
                                    <div className="h-3 w-1/2 bg-gray-700 rounded-sm mt-3"></div>
                                    <div className="h-3 w-3/4 bg-gray-700/80 rounded-sm mt-2"></div>
                                    <div className="h-3 w-2/3 bg-gray-700/60 rounded-sm mt-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
