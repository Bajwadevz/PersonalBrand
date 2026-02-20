import Link from "next/link";
import Image from "next/image";
import BackgroundGrid from "./BackgroundGrid";
import FloatingChip from "./FloatingChip";

export default function Hero() {
    return (
        <section className="relative pt-40 lg:pt-48 pb-24 flex flex-col items-center justify-center w-full text-center max-w-6xl mx-auto px-6 overflow-hidden">
            <BackgroundGrid />



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
                    I build AI systems, create digital products, and teach practical implementations to help professionals and businesses scale their operational output. No hype—just strategic execution.
                </p>

                {/* 4. CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                    <Link
                        href="/work-with-me"
                        className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-900 transition-all duration-200 hover:scale-[1.02] inline-flex items-center justify-center shadow-lg shadow-black/10"
                    >
                        Work With Me
                    </Link>
                    <Link
                        href="/blog"
                        className="bg-white border text-gray-700 px-8 py-3.5 rounded-full hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 font-medium inline-flex items-center justify-center shadow-sm"
                    >
                        Explore My Systems
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
