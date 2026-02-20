import Link from "next/link";

export default function DigitalProduct() {
    return (
        <section className="py-32 flex flex-col items-center w-full border-t border-gray-200/50 bg-[#F9FAFB]">
            <div className="w-full max-w-3xl flex flex-col items-center text-center px-6">
                <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-4">Learn How I Build</h3>
                <p className="text-gray-500 mb-10 text-lg">
                    The exact frameworks, system prompts, and architectures I use to execute in production.
                </p>

                <Link
                    href="/product"
                    className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-900 transition-all shadow-md inline-flex items-center"
                >
                    View the Playbooks
                </Link>
            </div>
        </section>
    );
}
