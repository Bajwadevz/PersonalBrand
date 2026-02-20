export default function CredibilityMicrosection() {
    return (
        <section className="py-24 bg-[#F9FAFB] w-full border-t border-[#E5E7EB]">
            <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] mb-4">
                        Professionals & Operators Following Bajwaa Dev
                    </h2>
                    <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                        Join an elite network of operators scaling intelligent systems, automating workflows, and building leverage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                        <div className="mb-6">
                            <div className="flex gap-1 mb-4 text-[#0B2545]">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 font-medium leading-relaxed">
                                "Shahzaib's insights on AI-first systems completely reshaped how we structure our internal workflows. It's not just theory; it's pure execution."
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-sm">JS</div>
                            <div>
                                <h4 className="font-semibold text-gray-900 text-sm">James S.</h4>
                                <p className="text-gray-500 text-xs">Senior Backend Engineer</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                        <div className="mb-6">
                            <div className="flex gap-1 mb-4 text-[#0B2545]">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 font-medium leading-relaxed">
                                "Agentic orchestration sounded like a buzzword until I read the breakdowns here. This is the playbook for actually moving fast without shipping garbage."
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-sm">EL</div>
                            <div>
                                <h4 className="font-semibold text-gray-900 text-sm">Elena L.</h4>
                                <p className="text-gray-500 text-xs">SaaS Founder</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                        <div className="mb-6">
                            <div className="flex gap-1 mb-4 text-[#0B2545]">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 font-medium leading-relaxed">
                                "The exact right balance of high-level architecture mapped down to deep technical implementation syntax. Phenomenal resource."
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-sm">MT</div>
                            <div>
                                <h4 className="font-semibold text-gray-900 text-sm">Marcus T.</h4>
                                <p className="text-gray-500 text-xs">Cloud Architect</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
