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
                    Let's Build Something Intelligent.
                </h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-500 font-medium leading-relaxed">
                    Tell me about your project. I'll personally review it.
                </p>
            </section>

            <section className="pb-32 px-6 max-w-3xl mx-auto w-full">
                <ContactForm />
            </section>
        </div>
    );
}
