import Link from "next/link";

export default function DigitalProduct() {
    return (
        <section className="bg-white relative z-10 py-32 flex flex-col items-center w-full">
            <div className="w-full max-w-3xl flex flex-col items-center text-center px-6">
                <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-4">Learn How I Build</h3>
                <p className="text-gray-500 mb-10 text-lg">
                    The exact frameworks, system prompts, and architectures I use to execute in production.
                </p>

                <Link
                    href="/product"
                    className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-900 transition-colors duration-200 ease-out min-h-[44px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] inline-flex items-center justify-center"
                >
                    View the Playbooks
                </Link>
            </div>
        </section>
    );
}
