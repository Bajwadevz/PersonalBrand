import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact | Bajwa Dev",
    description: "Tell me about your project. I design and implement practical AI systems and automation workflows.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col w-full bg-[#F9FAFB] min-h-screen">
            <section className="pt-32 lg:pt-40 pb-20 px-6 max-w-3xl mx-auto w-full text-center">
                <div className="mb-8 w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#0B2545] border border-gray-200/50 shadow-sm mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
                    Let&apos;s Build a Practical AI System.
                </h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-500 font-medium leading-relaxed">
                    Tell me what you&apos;re trying to automate, optimize, or build.<br className="hidden sm:block" />
                    I&apos;ll review your project personally and respond within 24–48 hours.
                </p>
            </section>

            <section className="pb-32 px-6 max-w-3xl mx-auto w-full">
                {/* Deliverable Framing */}
                <div className="mb-10 p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-6 md:items-center justify-between">
                    <div>
                        <h3 className="font-bold text-[#0F172A] mb-2">What You Can Expect</h3>
                        <p className="text-sm text-gray-500">I prioritize execution over long consulting cycles.</p>
                    </div>
                    <ul className="space-y-2">
                        <li className="flex items-center text-sm font-medium text-gray-700">
                            <svg className="w-4 h-4 text-emerald-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            Clear system scope
                        </li>
                        <li className="flex items-center text-sm font-medium text-gray-700">
                            <svg className="w-4 h-4 text-emerald-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            Implementation roadmap
                        </li>
                        <li className="flex items-center text-sm font-medium text-gray-700">
                            <svg className="w-4 h-4 text-emerald-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            Direct execution
                        </li>
                        <li className="flex items-center text-sm font-medium text-gray-700">
                            <svg className="w-4 h-4 text-emerald-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            No unnecessary complexity
                        </li>
                    </ul>
                </div>

                <ContactForm />
            </section>
        </div>
    );
}
