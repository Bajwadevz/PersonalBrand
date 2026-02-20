export default function PortfolioGrid() {
    const caseStudies = [
        {
            title: "Autonomous RAG Customer Support",
            description: "Self-healing retrieval pipeline that resolves Tier-1 tickets with zero human intervention.",
            outcome: "-85% Response Time"
        },
        {
            title: "Deterministic LLM Data Routing",
            description: "Logic-based switching framework that routes incoming leads and triggers customized workflows.",
            outcome: "Automated Lead Funnel"
        },
        {
            title: "Dynamic Sales Playbook Generation",
            description: "AI module scraping prospect intelligence to generate bespoke outreach on enterprise outbound tools.",
            outcome: "Instant Prospecting"
        }
    ];

    return (
        <section className="py-32 bg-white w-full border-t border-gray-200/50">
            <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-4">
                        Selected Systems
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {caseStudies.map((study, index) => (
                        <div key={index} className="flex flex-col">
                            <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                                {study.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm mb-6 flex-grow">
                                {study.description}
                            </p>
                            <div className="pt-4 border-t border-gray-100 flex items-center text-sm font-medium text-[#0F172A]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                                {study.outcome}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
