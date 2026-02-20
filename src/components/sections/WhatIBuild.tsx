export default function WhatIBuild() {
    return (
        <section className="py-32 w-full border-t border-gray-200/50">
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] mb-4">
                    What I Build
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl">
                    Building practical tools and automating workflows to eliminate operational bottlenecks.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                {/* Column 1 */}
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                            </svg>
                        </div>
                        AI Architecture
                    </h3>
                    <ul className="space-y-4">
                        <li className="text-gray-600 font-medium">Custom LLM-powered internal tools</li>
                        <li className="text-gray-600 font-medium">AI-powered dashboards</li>
                        <li className="text-gray-600 font-medium">Workflow automation systems</li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        </div>
                        Process Automation
                    </h3>
                    <ul className="space-y-4">
                        <li className="text-gray-600 font-medium">CRM + AI integrations</li>
                        <li className="text-gray-600 font-medium">Operational process automation</li>
                        <li className="text-gray-600 font-medium">Tool integration & syncing</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                            </svg>
                        </div>
                        Implementation
                    </h3>
                    <ul className="space-y-4">
                        <li className="text-gray-600 font-medium">Lightweight scalable setups</li>
                        <li className="text-gray-600 font-medium">Practical API routing</li>
                        <li className="text-gray-600 font-medium">Direct execution support</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
