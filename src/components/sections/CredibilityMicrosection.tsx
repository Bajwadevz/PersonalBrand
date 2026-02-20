export default function CredibilityMicrosection() {
    return (
        <section className="py-32 bg-white w-full border-t border-gray-200/50">
            <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] mb-2">
                        Trusted by Operators
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Card 1 */}
                    <div className="flex flex-col">
                        <p className="text-gray-600 font-medium leading-relaxed italic mb-6">
                            &quot;Shahzaib&apos;s insights on AI-first systems completely reshaped how we structure our internal workflows. It&apos;s not just theory; it&apos;s pure execution.&quot;
                        </p>
                        <div className="mt-auto">
                            <h4 className="font-semibold text-gray-900 text-sm">James S.</h4>
                            <p className="text-gray-500 text-xs">Senior Backend Engineer</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-12">
                        <p className="text-gray-600 font-medium leading-relaxed italic mb-6">
                            &quot;Agentic orchestration sounded like a buzzword until I read the breakdowns here. This is the playbook for actually moving fast without shipping garbage.&quot;
                        </p>
                        <div className="mt-auto">
                            <h4 className="font-semibold text-gray-900 text-sm">Elena L.</h4>
                            <p className="text-gray-500 text-xs">SaaS Founder</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-12">
                        <p className="text-gray-600 font-medium leading-relaxed italic mb-6">
                            &quot;The exact right balance of high-level architecture mapped down to deep technical implementation syntax. Phenomenal resource.&quot;
                        </p>
                        <div className="mt-auto">
                            <h4 className="font-semibold text-gray-900 text-sm">Marcus T.</h4>
                            <p className="text-gray-500 text-xs">Cloud Architect</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
