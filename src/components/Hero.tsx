import Link from "next/link";
import BackgroundGrid from "./BackgroundGrid";

export default function Hero() {
    return (
        <section className="relative py-32 md:py-40 flex flex-col items-center justify-center w-full text-center">
            <BackgroundGrid />
            <div className="max-w-4xl mx-auto w-full px-4 sm:px-0">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A]">
                    Bajwaa Dev
                </h1>
                <h2 className="text-xl text-[#6B7280] mt-6 max-w-2xl mx-auto font-medium">
                    AI. Education. Vibe Coding.
                </h2>
                <p className="text-base sm:text-lg max-w-2xl leading-relaxed mt-6 text-[#374151] mx-auto">
                    I teach builders how to use AI as leverage — not a shortcut. Exploring AI-first workflows, vibe coding, and practical systems that turn ideas into working software.
                </p>
                <p className="text-sm text-[#6B7280] mt-4">
                    For developers, builders, and curious operators learning to build with AI intentionally.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                    <Link
                        href="/blog"
                        className="bg-[#0B2545] text-white px-6 py-3 rounded-full font-medium hover:bg-[#133B6C] transition-all duration-200 hover:scale-[1.02] inline-flex items-center justify-center"
                    >
                        Explore the Blog
                    </Link>
                    <Link
                        href="/product"
                        className="border border-[#D1D5DB] text-[#0F172A] px-6 py-3 rounded-full hover:bg-[#F3F4F6] transition-all duration-200 font-medium inline-flex items-center justify-center"
                    >
                        Join the AI Builder List
                    </Link>
                </div>
            </div>
        </section>
    );
}
