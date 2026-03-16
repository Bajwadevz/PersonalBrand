import Link from "next/link";
import { WavePath } from "@/components/ui/wave-path";
import HeroText from "@/components/ui/hero-shutter-text";

export default function Hero() {
    return (
        <>
            <div className="absolute inset-0 w-[100vw] left-1/2 -ml-[50vw] overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.06)_0%,transparent_70%)] pointer-events-none max-w-screen overflow-hidden"></div>
            </div>
            <section className="relative pt-32 pb-32 flex flex-col items-center justify-center min-h-screen w-full text-center max-w-6xl mx-auto px-6 overflow-visible">

                <div className="max-w-[100vw] w-full px-4 sm:px-2 relative z-10 flex flex-col items-center overflow-visible">
                    <div className="mb-8 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50">
                        <span className="flex h-2 w-2 rounded-full bg-[#0B2545] mr-2 opacity-80"></span>
                        PRACTICAL AI FOR OPERATORS
                    </div>

                    <HeroText text="AUTOMATE EVERYTHING" className="mb-0" />

                    <p className="text-base sm:text-lg md:text-xl max-w-3xl leading-[1.7] mt-8 text-gray-600 mx-auto font-medium">
                        I teach operators, founders, and sales professionals how to build AI systems that reduce manual tasks and scale output without writing a single line of code.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                        <Link
                            href="/product"
                            className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:-translate-y-[1px] hover:shadow-[0_4px_14px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)_inset] active:translate-y-[0px] active:shadow-none transition-all duration-300 ease-out inline-flex items-center justify-center min-h-[44px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] tracking-[-0.01em]"
                        >
                            Get the Playbook
                        </Link>
                        <Link
                            href="/blog"
                            className="text-gray-600 font-medium hover:text-gray-900 hover:opacity-80 transition-all duration-300 ease-out underline-offset-4 hover:underline min-h-[44px] inline-flex items-center"
                        >
                            Read the Blog
                        </Link>
                    </div>
                </div>

                <section className="w-full flex flex-col items-center mt-20 mb-24 relative z-10">
                    <WavePath className="mb-12" />
                    <p className="text-sm uppercase tracking-wide text-[var(--color-muted-foreground)] mb-4">
                        Systems, Not Prompts
                    </p>
                    <p className="max-w-4xl mx-auto text-center text-xl md:text-2xl leading-[1.7] text-[var(--color-muted-foreground)] px-4">
                        I design AI workflows and automation systems that help teams scale output without scaling headcount.
                    </p>
                    <p className="max-w-4xl mx-auto text-center text-xl md:text-2xl leading-[1.7] text-[var(--color-muted-foreground)] px-4 mt-4">
                        Instead of chasing prompts or tools, I build systems that compound leverage across sales, operations, and product.
                    </p>
                </section>
            </section>
        </>
    );
}
