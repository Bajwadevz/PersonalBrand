import Link from "next/link";
import Image from "next/image";
import BackgroundGrid from "./BackgroundGrid";
import FloatingChip from "./FloatingChip";

export default function Hero() {
    return (
        <section className="relative pt-32 lg:pt-40 pb-24 flex flex-col items-center justify-center w-full text-center max-w-6xl mx-auto px-6 overflow-hidden">
            <BackgroundGrid />

            {/* Floating Tags (Subtle Desktop Only) */}
            <div className="absolute inset-0 pointer-events-none hidden md:block overflow-hidden">
                <FloatingChip className="top-24 left-[10%]" animationClass="animate-[float_8s_ease-in-out_infinite]">
                    AI Strategy
                </FloatingChip>
                <FloatingChip className="top-48 right-[15%]" animationClass="animate-[float_10s_ease-in-out_infinite_1s]">
                    Enterprise Automation
                </FloatingChip>
                <FloatingChip className="top-[35%] left-[5%]" animationClass="animate-[float_9s_ease-in-out_infinite_2s]">
                    Practical Implementations
                </FloatingChip>
                <FloatingChip className="top-[45%] right-[8%]" animationClass="animate-[float_11s_ease-in-out_infinite_1.5s]">
                    System Architecture
                </FloatingChip>
                <FloatingChip className="top-16 right-[30%]" animationClass="animate-[float_12s_ease-in-out_infinite_0.5s]">
                    Modern Workflows
                </FloatingChip>
            </div>

            <div className="max-w-4xl mx-auto w-full px-4 sm:px-0 relative z-10 flex flex-col items-center">

                {/* 1. Small Badge */}
                <div className="mb-8 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50">
                    <span className="flex h-2 w-2 rounded-full bg-[#0B2545] mr-2 opacity-80"></span>
                    Practical AI & Systems Thinking
                </div>

                {/* 2. Large H1 */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.1]">
                    Intelligence, Architected.
                </h1>

                {/* 3. Supporting Paragraph */}
                <p className="text-lg sm:text-xl max-w-2xl leading-relaxed mt-8 text-gray-600 mx-auto font-medium">
                    I architect and implement autonomous AI workflows for professionals, businesses, and modern builders. No hype—just practical systems and deep execution to scale your operational output globally.
                </p>

                {/* 4. CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                    <Link
                        href="/blog"
                        className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-900 transition-all duration-200 hover:scale-[1.02] inline-flex items-center justify-center shadow-lg shadow-black/10"
                    >
                        Read the Field Notes
                    </Link>
                    <Link
                        href="/product"
                        className="bg-white border text-gray-700 px-8 py-3.5 rounded-full hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 font-medium inline-flex items-center justify-center shadow-sm"
                    >
                        Get the Playbooks
                    </Link>
                </div>
            </div>

            {/* 5. Hero Visual Card */}
            <div className="mt-20 w-full flex justify-center relative z-10">
                <Image
                    src="/hero-bg-4k.png"
                    alt="AI-First Systems Infrastructure Visual"
                    width={1376}
                    height={768}
                    priority={true}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    className="max-w-full h-auto rounded-xl shadow-2xl hover:-translate-y-[2px] transition-transform duration-500 border border-gray-200/50"
                />
            </div>
        </section>
    );
}
