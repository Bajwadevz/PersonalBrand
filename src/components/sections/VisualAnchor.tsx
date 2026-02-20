import Image from "next/image";

export default function VisualAnchor() {
    return (
        <section className="py-24 bg-[#F9FAFB] w-full">
            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-xl p-10 grid md:grid-cols-2 gap-10 items-center">

                    {/* Left Side Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A]">
                            The Automation Advantage.
                        </h2>
                        <p className="mt-4 text-[#4B5563] leading-relaxed">
                            AI doesn’t replace professionals — it amplifies them. The true differentiator is structure. I build and document the frameworks required to orchestrate Large Language Models into reliable, self-healing execution pipelines.
                        </p>
                        <ul className="mt-6 space-y-3">
                            {[
                                "Building deterministic AI workflows",
                                "Zero-Inbox & operational automation",
                                "Deploying custom RAG architectures",
                                "Scaling human output via agentic systems"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#0B2545] flex-shrink-0" />
                                    <span className="text-[#374151] font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side Content */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-full aspect-[4/3] max-w-[800px]">
                            <Image
                                src="/system-preview.svg"
                                alt="System Architecture Preview"
                                fill
                                className="rounded-xl shadow-lg border border-[#E5E7EB] object-cover"
                                sizes="(max-w-768px) 100vw, 50vw"
                                quality={85}
                                loading="lazy"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
