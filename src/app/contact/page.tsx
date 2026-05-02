import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Book a Workflow Audit Call | Bajwaa Dev",
    description: "Tell me about your workflow, stack, and biggest manual bottleneck. I'll scope a solution and get back to you within 24 hours.",
};

export default function ContactPage() {
    return (
        <div className="section-shell flex flex-col w-full min-h-screen">
            <section className="container-shell max-w-4xl w-full text-center">
                <div className="mb-8 w-16 h-16 rounded-full bg-[rgba(45,106,143,0.12)] flex items-center justify-center text-[#2D6A8F] border border-[rgba(45,106,143,0.25)] mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </div>
                <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight leading-[1.1] mb-6">
                    Book a Workflow Audit Call
                </h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto muted-copy font-medium leading-relaxed">
                    Tell me what your team does manually that shouldn&apos;t be. I&apos;ll map it, scope it, and quote it — within 24 hours.
                </p>
            </section>

            <section className="container-shell pb-20 max-w-5xl w-full grid gap-8 lg:grid-cols-[1fr_1.2fr]">
                <div className="glass-card p-8 rounded-2xl h-fit">
                    <div>
                        <h3 className="font-bold mb-2">What Happens Next</h3>
                        <p className="text-sm muted-copy">Fixed scope, fixed price, no surprises.</p>
                    </div>
                    <ul className="space-y-2 mt-6">
                        {[
                            "30-minute scoping call — I learn your stack and bottlenecks",
                            "Written scope + fixed price quote within 24hrs",
                            "5–7 day build on your existing tools",
                            "Loom handoff + 30 days of async support",
                        ].map((item) => (
                            <li key={item} className="flex items-center text-sm font-medium muted-copy">
                                <svg className="w-4 h-4 text-[#2D6A8F] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <ContactForm />
            </section>
        </div>
    );
}
