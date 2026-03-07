export default function PortfolioGrid() {
    const caseStudies = [
        {
            title: "Automated Research",
            description: "Instant company dossiers, public data scraping, and executive summaries pushed directly into your CRM before every sales call.",
            outcome: "Saving 5+ hours per week per rep."
        },
        {
            title: "Intelligent Routing",
            description: "Inbound leads are analyzed for intent and automatically escalated or nurtured without human triage via Make and OpenAI.",
            outcome: "Zero-friction response times."
        },
        {
            title: "Data Synthesis",
            description: "Weekly reports generated automatically from Notion, Airtable, or internal dashboards, summarized and formatted without manual compilation.",
            outcome: "Fully automated operations."
        }
    ];

    return (
        <section className="bg-white relative z-10 py-24 md:py-32 w-full">
            <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="mb-12">
                    <div className="mb-6 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50">
                        WHAT THIS LOOKS LIKE IN PRACTICE
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-4">
                        Real workflows. Real leverage.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {caseStudies.map((study, index) => (
                        <div key={index} className="flex flex-col">
                            <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                                {study.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base mb-6 flex-grow">
                                {study.description}
                            </p>
                            <div className="pt-4 border-t border-gray-100 flex text-sm text-gray-400">
                                {study.outcome}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
