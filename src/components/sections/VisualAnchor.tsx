import Image from "next/image";

export default function VisualAnchor() {
    return (
        <section className="py-24 bg-[#F9FAFB] w-full">
            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-xl p-10 grid md:grid-cols-2 gap-10 items-center">

                    {/* Left Side Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A]">
                            Building with AI Is a Skill.
                        </h2>
                        <p className="mt-4 text-[#4B5563] leading-relaxed">
                            AI doesn’t replace engineers — it amplifies them. The difference is structure. I focus on teaching how to build with AI intentionally: faster iteration, clearer thinking, and smarter execution.
                        </p>
                        <ul className="mt-6 space-y-3">
                            {[
                                "AI-first development workflows",
                                "Vibe coding methodologies",
                                "Prompt engineering for builders",
                                "Turning AI ideas into shipped products"
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
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
