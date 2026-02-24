import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="absolute inset-0 w-[100vw] left-1/2 -ml-[50vw] overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.06)_0%,transparent_70%)] pointer-events-none max-w-screen overflow-hidden"></div>
            </div>
            <section className="relative pt-32 pb-32 flex flex-col items-center justify-center w-full text-center max-w-6xl mx-auto px-6 overflow-visible">

                <div className="max-w-4xl mx-auto w-full px-4 sm:px-0 relative z-10 flex flex-col items-center">
                    <div className="mb-8 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50">
                        <span className="flex h-2 w-2 rounded-full bg-[#0B2545] mr-2 opacity-80"></span>
                        PRACTICAL AI FOR OPERATORS
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.05]">
                        AI Workflow Automation for Operators.
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mt-8 text-gray-600 mx-auto font-medium">
                        I teach operators, founders, and sales professionals how to build AI systems that reduce manual tasks and scale output without writing a single line of code.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                        <Link
                            href="/product"
                            className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-900 transition-colors duration-200 ease-out inline-flex items-center justify-center min-h-[44px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                        >
                            Get the Playbook
                        </Link>
                        <Link
                            href="/blog"
                            className="text-gray-600 font-medium hover:text-gray-900 underline-offset-4 hover:underline transition-colors duration-200 ease-out min-h-[44px] inline-flex items-center"
                        >
                            Read the Blog
                        </Link>
                    </div>
                </div>

                <div className="mt-20 w-full flex justify-center relative z-10 px-0 overflow-hidden">
                    <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)]">
                        <Image
                            src="/hero-ai-as-leverage-final.png"
                            alt="AI as Leverage - Bajwaa Dev"
                            width={1600}
                            height={900}
                            priority
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                <div className="max-w-3xl mx-auto w-full px-6 mt-32 text-left relative z-10">
                    <div className="prose prose-lg prose-gray text-gray-600">
                        <p>
                            Most operators don’t need more tools. They need better systems. AI workflow automation isn’t about prompts. It’s about building connected processes that run automatically.
                        </p>
                        <p>
                            I focus on no-code AI automation using tools like Make, Zapier, and n8n so operators can build AI systems without coding.
                        </p>
                        <p>
                            Whether you’re in sales, consulting, or running a startup, AI productivity systems can help you automate research, outreach, reporting, and customer communication.
                        </p>
                        <p className="font-medium text-gray-900">
                            Focus on leverage.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
