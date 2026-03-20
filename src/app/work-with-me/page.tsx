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
            "Custom LLM-powered internal tools",
            "AI-powered dashboards",
            "Workflow automation systems",
            "Direct execution mapping"
        ]
    },
    {
        title: "Process Automation",
        iconPath: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
        features: [
            "CRM + AI integrations",
            "Operational process automation",
            "Tool integration & syncing",
            "Efficiency scaling"
        ]
    },
    {
        title: "Implementation",
        iconPath: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
        features: [
            "Lightweight scalable setups",
            "Practical API routing",
            "Direct execution support",
            "No unnecessary complexity"
        ]
    }
];

export default function WorkWithMe() {
    return (
        <div className="section-shell flex flex-col w-full">
            <section className="container-shell max-w-5xl text-center">
                <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight">Work With Me</h1>
                <p className="mx-auto mt-4 max-w-3xl text-lg muted-copy">
                    I build practical AI systems and workflow automations for growing businesses.
                </p>
            </section>

            <section className="container-shell mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="glass-card card-hover rounded-2xl p-8 flex flex-col"
                        >
                            <div className="w-12 h-12 rounded-full bg-[rgba(45,106,143,0.12)] flex items-center justify-center text-[#2D6A8F] border border-[rgba(45,106,143,0.25)] mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-6">
                                {service.title}
                            </h3>
                            <ul className="space-y-4 mt-auto">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm muted-copy font-medium leading-relaxed">
                                        <svg className="w-5 h-5 text-[#2D6A8F] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

            <section className="container-shell mt-20 text-center">
                <div className="glass-card rounded-3xl p-12 md:p-16 flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to automate?</h2>
                    <Link href="/contact" className="btn-primary mt-8 min-h-[52px] text-lg inline-flex items-center justify-center">
                        Book a Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
