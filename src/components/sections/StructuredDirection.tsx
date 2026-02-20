export default function StructuredDirection() {
    const cards = [
        {
            title: "AI-First Thinking",
            description: "Design workflows where AI assists reasoning and execution instead of replacing it.",
        },
        {
            title: "Vibe Coding",
            description: "Build fluidly with AI tools while maintaining structure and clarity.",
        },
        {
            title: "Shipping Fast",
            description: "Move from idea to working product using AI-accelerated development.",
        },
        {
            title: "Teaching in Public",
            description: "Real experiments, real results, documented transparently.",
        },
    ];

    return (
        <section className="py-24 bg-white w-full">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A]">
                    What I Teach
                </h2>
                <p className="mt-4 text-[#6B7280] max-w-2xl mx-auto text-base sm:text-lg">
                    Core pillars of my engineering philosophy.
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
