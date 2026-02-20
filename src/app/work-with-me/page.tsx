import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work With Me | Bajwa Dev",
    description: "I design and implement practical AI systems, automation workflows, and scalable infrastructure for professionals and growing businesses.",
};

const services = [
    {
        title: "AI System Architecture",
        iconPath: "M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z",
        features: [
            "Designing LLM-powered systems",
            "AI workflow automation",
            "Tool integration",
            "Infrastructure setup"
        ]
    },
    {
        title: "Business Process Automation",
        iconPath: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
        features: [
            "Internal automation",
            "CRM + AI integrations",
            "Operational systems",
            "Efficiency scaling"
        ]
    },
    {
        title: "AI Strategy & Implementation",
        iconPath: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
        features: [
            "Practical AI adoption",
            "Execution roadmap",
            "Workflow modernization",
            "Team enablement"
        ]
    }
];

export default function WorkWithMe() {
    return (
        <div className="flex flex-col w-full bg-[#F9FAFB] min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 lg:pt-40 pb-20 px-6 max-w-4xl mx-auto w-full text-center">
                <div className="mb-8 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50 shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 opacity-80 animate-pulse"></span>
                    Accepting New Projects
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-8">
                    Work With Me
                </h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-600 font-medium leading-relaxed">
                    I design and implement practical AI systems, automation workflows, and scalable infrastructure for professionals and growing businesses.
                </p>
            </section>

            {/* Service Categories Section */}
            <section className="py-20 max-w-6xl mx-auto px-6 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 p-8 flex flex-col hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#F8FAFC] flex items-center justify-center text-[#0B2545] border border-gray-200/50 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                                {service.title}
                            </h3>
                            <ul className="space-y-4 mt-auto">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-600 font-medium leading-relaxed">
                                        <svg className="w-5 h-5 text-[#0F172A] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 max-w-4xl mx-auto w-full text-center">
                <div className="bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] border border-gray-100 p-12 md:p-16 flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] mb-6">
                        Ready to scale your operations?
                    </h2>
                    <p className="text-lg text-gray-500 mb-10 max-w-xl">
                        Let's discuss your current bottlenecks and map out a practical system architecture.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-900 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-black/10 text-lg"
                    >
                        Book a Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
