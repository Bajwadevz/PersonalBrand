export default function StructuredDirection() {
    const cards = [
        {
            title: "Systems Architecture",
            description: "Designing workflows where generative AI acts as a reliable logic engine, not an unpredictable novelty.",
        },
        {
            title: "Deterministic Execution",
            description: "Forcing strict outputs and structured data from LLMs to ensure enterprise-grade reliability in production.",
        },
        {
            title: "Autonomous Workflows",
            description: "Building self-healing loops that reduce manual administrative overhead and scale human output.",
        },
        {
            title: "Radical Transparency",
            description: "Documenting exact implementation playbooks, architectures, and cost-analyses from real-world deployments.",
        },
    ];

    return (
        <section className="py-24 bg-white w-full">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A]">
                    The Implementation Pillars
                </h2>
                <p className="mt-4 text-[#6B7280] max-w-2xl mx-auto text-base sm:text-lg">
                    Core principles separating hype from practical enterprise execution.
                </p>

                <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="border border-[#E5E7EB] rounded-xl p-8 hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="w-10 h-10 bg-[#F3F4F6] rounded-full flex items-center justify-center mb-4">
                                <div className="w-3 h-3 bg-[#0B2545] rounded-full" />
                            </div>
                            <h3 className="mt-4 font-medium text-lg text-[#0F172A]">
                                {card.title}
                            </h3>
                            <p className="mt-2 text-[#6B7280] leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
