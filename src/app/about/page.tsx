import type { Metadata } from "next";
import BackgroundGrid from "@/components/BackgroundGrid";
import GlassPanel from "@/components/GlassPanel";
import FloatingChip from "@/components/FloatingChip";

export const metadata: Metadata = {
    title: "About Shahzeb Bajwa | AI Systems Builder & Educator",
    description: "Shahzeb Bajwa is an AI systems builder and practical AI educator helping professionals, business owners, and builders leverage AI for real-world impact.",
    keywords: ["AI systems builder", "Practical AI educator", "AI implementation thinker", "AI expert", "AI consultant", "AI automation", "AI for business", "AI for professionals", "AI learning without coding"],
};

export default function AboutPage() {
    const faqData = [
        {
            q: "What is practical AI?",
            a: "Practical AI centers on moving beyond the novelty of conversational chatbots and fundamentally integrating artificial intelligence into structured, repeatable workflows. While the broader industry focuses on the hypothetical future capabilities of artificial general intelligence, practical AI is rooted entirely in present-day execution. It is the discipline of mapping out existing operational bottlenecks, identifying where a generative model can reliably process unstructured data, and writing the deterministic logic necessary to bridge those systems together. When implemented correctly, practical AI forms an invisible layer of digital leverage that handles administrative overhead, data routing, and preliminary analysis without manual human intervention. This approach demystifies the technology, removing the necessity of complex machine learning degrees and instead prioritizing systems thinking and relentless operational efficiency."
        },
        {
            q: "How can professionals use AI?",
            a: "Professionals across all knowledge-work sectors can drastically multiply their productivity by treating AI as an eager, highly capable junior analyst rather than a simple search engine. Instead of manually drafting initial reports, analyzing long transcripts, or sorting complex spreadsheet data, modern professionals can design bespoke AI workflows to automate these tasks. By mastering prompt architecture and understanding how to chain together multiple AI commands, operators can effectively reduce their daily administrative burden by hours. Furthermore, adopting AI allows professionals to rapidly skill up in tertiary domains—such as generating VBA scripts, drafting legal summaries, or compiling technical documentation—without needing formal backgrounds in those subjects. The ultimate goal for any professional is to utilize AI to automate mundane execution, thereby freeing up mental bandwidth to focus entirely on high-level strategy, relationship building, and deeply creative problem-solving."
        },
        {
            q: "How do I implement AI in my business?",
            a: "Implementing AI in a business environment requires a methodical, systems-first approach, starting with a rigorous audit of current operational bottlenecks. Business owners must avoid the temptation to adopt \"AI\" broadly, as this usually results in team confusion and abandoned software subscriptions. Instead, the implementation process should begin by identifying one specific, high-frequency, low-variance task—such as customer support triage, invoice processing, or initial lead qualification. Once a target is selected, operators can build a deterministic pipeline using automation tools connected to an LLM API to handle that specific edge case. By successfully automating a single micro-workflow, the business gains immediate operational leverage and the confidence to scale the architecture. True implementation is about incremental, un-breakable compounding systems that securely integrate into existing enterprise infrastructure without requiring a massive overhaul."
        },
        {
            q: "Is AI only for developers?",
            a: "Historically, leveraging artificial intelligence required a deep background in mathematics, machine learning, and advanced computer science. Today, that barrier to entry has completely evaporated. The modern AI landscape is built upon natural language processing, meaning that human language is the new primary programming syntax. While software developers will always have an advantage in building the underlying infrastructural models, everyday professionals, creatives, and non-technical founders possess a distinct advantage in domain expertise. A marketing director or operations manager who deeply understands their business logic can now use conversational tools to scaffold code, automate their CRM, and orchestrate complex workflows without writing a single line of traditional code. AI has fundamentally democratized software creation, transforming anyone with clear logic and systems thinking into a builder capable of deploying highly sophisticated technical solutions."
        },
        {
            q: "What are AI systems?",
            a: "AI systems represent the architectural evolution from single-prompt interactions to multi-agent, autonomous workflows. A standard AI interaction involves a user typing a prompt and reading a response. An AI system, however, removes the human from the center of the execution loop. It is a structured environment where specific triggers—such as receiving an email, updating a database row, or a scheduled daily cron job—automatically initiate an LLM to perform a task. The model evaluates the incoming data, applies predefined logic, and dynamically routes the output to another software application via API. These systems are designed with deterministic constraints, error-handling fallbacks, and strict operating parameters to ensure enterprise-grade reliability. By interlinking these logic chains, individuals and businesses can construct a network of digital employees that operate continuously, compounding productivity and executing complex operations with near-zero latency."
        },
        {
            q: "How do I learn AI without coding?",
            a: "Learning AI without a traditional computer science background requires a fundamental shift in how you view technology: you must transition from seeing yourself as a passive software user to an active systems architect. The optimal starting point is to deeply study prompt engineering, not as a collection of \"hacks,\" but as the structural science of providing rich context, clear constraints, and distinct operating directives to an LLM. Once you have mastered communicating with the model, the next phase is mastering visual automation platforms like Zapier, Make, or n8n. These tools allow you to visually design logic flows, connecting the cognitive power of AI models to your daily applications like Gmail, Notion, or Stripe. By combining strong natural language directives with visual API routing, non-technical individuals can single-handedly deploy complex software architectures, fully bypassing the traditional requirement of knowing Python or JavaScript."
        },
        {
            q: "What are the best AI tools for productivity?",
            a: "While the ecosystem expands daily, the most effective AI tools for productivity are those that seamlessly integrate into existing workflows rather than requiring entirely new platforms. For foundational generative tasks, models like OpenAI's ChatGPT Plus, Anthropic's Claude, and Google's Gemini Advanced provide the core conversational and reasoning engines. Claude, in particular, excels at coding, deep analytical writing, and maintaining strict adherence to complex instructions. For workflow automation, Make.com and Zapier are indispensable, acting as the nervous system that connects these AI brains to your operational endpoints. When it comes to developers and technical builders, AI-integrated IDEs such as Cursor and GitHub Copilot are mandatory tools that exponentially accelerate code generation. Alternatively, for completely non-technical enterprise deployment, platforms like MindOS or custom integrations provide encapsulated environments to execute specific, predefined productivity routines securely."
        },
        {
            q: "How does AI improve business operations?",
            a: "The integration of AI fundamentally rewires business operations by decoupling output from human time constraints. Traditionally, scaling a business required a linear increase in headcount to handle growing administrative, customer service, and data processing demands. AI breaks this paradigm by allowing a static team size to manage an exponentially increasing volume of work. For instance, customer inquiries can be instantly triaged, categorized, and intelligently drafted by a retrieval-augmented generation (RAG) system trained exclusively on the company's internal documentation. Financial reporting, supply chain auditing, and daily operational summaries can be autonomously generated and distributed before the leadership team even wakes up. By eliminating the necessity for humans to process low-tier data, AI empowers the workforce to focus strictly on strategic alignment, empathy-driven client interactions, and high-margin creative initiatives, ultimately driving massive operational profitability."
        },
        {
            q: "How do startups use AI?",
            a: "Modern startups are leveraging AI not simply as a feature to sell, but as the foundational architecture of their internal operations. Lean, bootstrapped teams utilize generative models to instantly draft marketing copy, scaffold landing pages, and rapidly prototype application user interfaces, reducing the time to market from months to mere days. Furthermore, non-technical founders are utilizing AI-integrated IDEs to rapidly code entire minimal viable products (MVPs), allowing them to test market hypotheses without requiring hundreds of thousands of dollars in initial engineering payroll. Beyond product development, startups use AI to automate their entire backend: from structuring cold-email outreach campaigns and tracking user retention metrics, to autonomously responding to tier-1 customer support tickets. This aggressive adoption allows micro-teams to execute with the velocity, operational polish, and output volume of a late-stage enterprise."
        },
        {
            q: "What is AI automation?",
            a: "AI automation is the strategic fusion of generative artificial intelligence with traditional robotic process automation (RPA). Historically, automation was strictly rules-based. However, legacy automation systems would instantly break if the input data was slightly unstructured or unexpected. AI automation introduces a layer of cognitive flexibility into the workflow. By utilizing a Large Language Model as a reasoning engine within the automation sequence, the system can parse unstructured data—such as a poorly formatted email, an image of a receipt, or a complex PDF contract—extract the necessary JSON variables, and route them correctly to the subsequent software pipeline. This means workflows are no longer rigid; they become dynamic, self-healing, and capable of understanding human context. From a practical standpoint, this allows businesses to fully automate complex human tasks that previously required manual interpretation and reading."
        },
        {
            q: "How can students use AI effectively?",
            a: "Students who wield AI effectively treat it as a boundless, personalized academic tutor rather than an outsourced essay writer. The lowest-value use case for AI in academia is simply having it generate answers—this bypasses the cognitive struggle realistically required for actual learning. Instead, students should utilize LLMs to break down wildly complex topics into digestible analogies, quiz them on historical timelines, or translate dense, poorly written academic papers into standard prose. Furthermore, students can leverage AI to selectively audit their own writing, asking the model to critique their thesis strength, identify logical fallacies, or suggest structural improvements. By utilizing voice-to-text AI tools during lengthy lectures, students can automatically generate perfectly organized study guides and flashcards. Ultimately, the students who will dominate the future economy view AI as a rapid acceleration engine for their own deep skill acquisition."
        },
        {
            q: "How do I avoid AI hype?",
            a: "The technology industry is heavily incentivized to continuously generate hype, making it difficult to separate theoretical breakthroughs from practical realities. To avoid this noise, individuals must adopt an intensely pragmatic, execution-first filter. When evaluating a new model, shiny tool, or wildly popularized \"revolutionary\" feature, immediately ask: \"How does this directly improve my specific, daily workflow right now?\" Ignore exaggerated benchmark scores, futuristic timelines, and generalized inspirational content on social media. Instead, focus strictly on systems builders and reliable practitioners who are transparently documenting their architectures, workflow failures, and actual production deployments in the real world. Ground yourself in building micro-automations using established, highly stable APIs rather than constantly migrating to the newest alpha-stage platform. By prioritizing personal operational leverage over industry narratives, you insulate yourself from the hype cycle."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="relative w-full overflow-hidden pb-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Global Grid Context */}
            <div className="absolute inset-0 z-[-1] flex items-start justify-center pt-20">
                <BackgroundGrid />
            </div>

            {/* Hero Positioning Section */}
            <section className="py-32 flex flex-col items-center text-center w-full max-w-6xl mx-auto px-6 relative z-10">
                <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
                    <FloatingChip className="top-12 left-[8%]" animationClass="animate-[float_9s_ease-in-out_infinite]">AI Systems Builder</FloatingChip>
                    <FloatingChip className="top-40 right-[10%] rotate-2" animationClass="animate-[float_11s_ease-in-out_infinite_1s]">Practical Automation</FloatingChip>
                    <FloatingChip className="top-[60%] left-[5%] -rotate-2" animationClass="animate-[float_10s_ease-in-out_infinite_2s]">Implementation Strategy</FloatingChip>
                    <FloatingChip className="top-[75%] right-[12%] rotate-1" animationClass="animate-[float_12s_ease-in-out_infinite_0.5s]">Global Execute</FloatingChip>
                </div>

                <div className="mb-8 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200/50 relative z-20">
                    <span className="flex h-2 w-2 rounded-full bg-[#0B2545] mr-2 opacity-80"></span>
                    AI Systems Builder & Educator
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6 max-w-4xl relative z-20">
                    Bridging the Gap Between<br />Technology & Execution
                </h1>

                <p className="text-xl max-w-2xl leading-relaxed text-gray-600 font-medium mb-12 relative z-20">
                    I am Shahzeb Bajwa. I help professionals, builders, students, and global business owners integrate practical AI systems into their workflows to drive unparalleled leverage.
                </p>
            </section>

            {/* The Personal Story Section */}
            <section className="max-w-4xl mx-auto px-6 w-full relative z-10 mb-20 scroll-mt-20">
                <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-8">The Origin & The Shift</h2>
                <div className="prose prose-lg prose-gray max-w-none text-gray-600 space-y-6">
                    <p>
                        My journey into artificial intelligence didn&apos;t start with a desire to build sentient software or chase the futuristic promise of general intelligence. It began with an intense frustration regarding how modern work is fundamentally executed. Early in my career, I found myself constantly surrounded by incredibly brilliant individuals who were chronically bottlenecked by administrative friction, redundant data entry, and deeply legacy digital workflows.
                    </p>
                    <p>
                        When Generative AI firmly permeated the mainstream, the global industry immediately splintered into two distinct extremes. On one side, academics and researchers focused entirely on the theoretical mathematics of scaling models toward advanced cognition. On the other side, social media marketers utilized the technology to generate generic content, flooding networks with superficial hype, clickbait prompts, and empty operational promises.
                    </p>
                    <p>
                        I realized very quickly that the overwhelming majority of people were completely missing the actual, present-day utility of this technology. Artificial intelligence is not merely a conversational toy for brainstorming, nor is it a magic bullet to instant operational scale. <strong className="text-gray-900 font-bold">It is a raw, logic-based utility layer.</strong> It is cognitive horsepower that, when structured and constrained correctly, can execute highly precise tasks continuously without fatigue or variance.
                    </p>
                    <p>
                        This profound realization shifted my entire engineering focus toward <strong className="text-gray-900 font-bold">Systems Thinking</strong>. I recognized that the individuals and businesses that will thrive in the coming decade are not the ones merely collecting the highest number of new AI apps; they are the ones architecting the most robust, self-healing execution pipelines. Today, my mission is inherently grounded in bridging the technical and non-technical worlds. I build, document, and teach the exact frameworks required to orchestrate AI models into reliable autonomous systems, empowering everyday professionals and operators worldwide to scale their impact efficiently.
                    </p>
                </div>
            </section>

            {/* Expand Authority Section */}
            <section className="max-w-4xl mx-auto px-6 w-full relative z-10 mb-20 scroll-mt-20">
                <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-8">My Approach to AI Implementation</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <GlassPanel className="p-8 border-l-4 border-l-[#0B2545]">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Practical Systems Over Prompts</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Prompt engineering is merely a prerequisite, never the final destination. My focus is exclusively on systems architecture: linking disparate APIs, commanding deterministic data extractions, and orchestrating entirely autonomous agent logic loops that survive in production environments.
                        </p>
                    </GlassPanel>
                    <GlassPanel className="p-8 border-l-4 border-l-[#0F172A]">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">AI as Leverage, Not a Shortcut</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            True execution requires immense discipline. AI doesn&apos;t replace the underlying necessity for deep structural thought; it amplifies clear human directives. I advocate for an implementation strategy that demands extreme focus on workflow auditing, precise delegation, and compounding operational gains.
                        </p>
                    </GlassPanel>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-[#0F172A] mb-8 border-b border-gray-200 pb-4">Who I Build For</h3>
                <div className="space-y-10">
                    <div className="flex gap-5 items-start">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F8FAFC] text-[#0F172A] font-bold text-base shrink-0 mt-1 shadow-sm border border-gray-200">1</div>
                        <div>
                            <h4 className="text-xl font-bold text-[#0F172A] m-0">AI for Professionals</h4>
                            <p className="text-gray-600 text-base mt-2 leading-relaxed">Modern knowledge workers require massive operational leverage to maintain their competitive edge. I architect playbooks that allow corporate managers, analysts, and operators to automate away the mundane hours of their day, allowing them to shift their focus purely to high-level strategic alignment and relationship building.</p>
                        </div>
                    </div>

                    <div className="flex gap-5 items-start">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F8FAFC] text-[#0F172A] font-bold text-base shrink-0 mt-1 shadow-sm border border-gray-200">2</div>
                        <div>
                            <h4 className="text-xl font-bold text-[#0F172A] m-0">AI for Builders</h4>
                            <p className="text-gray-600 text-base mt-2 leading-relaxed">Software engineers, product creators, and non-technical founders alike need to ship products aggressively. I deploy deep technical architectures mapping out how to utilize deterministic LLM routing, unstructured data extraction, and rapid MVP prototyping to significantly reduce the time required to bring impactful software to market.</p>
                        </div>
                    </div>

                    <div className="flex gap-5 items-start">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F8FAFC] text-[#0F172A] font-bold text-base shrink-0 mt-1 shadow-sm border border-gray-200">3</div>
                        <div>
                            <h4 className="text-xl font-bold text-[#0F172A] m-0">AI for Students</h4>
                            <p className="text-gray-600 text-base mt-2 leading-relaxed">The global future economy heavily rewards those who command intelligence systems. I break down elite implementation strategies so dedicated students can transform LLMs from simple shortcut generators into highly personalized, infinitely patient academic tutors—accelerating their holistic velocity of deep skill acquisition.</p>
                        </div>
                    </div>

                    <div className="flex gap-5 items-start">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F8FAFC] text-[#0F172A] font-bold text-base shrink-0 mt-1 shadow-sm border border-gray-200">4</div>
                        <div>
                            <h4 className="text-xl font-bold text-[#0F172A] m-0">AI for Business Owners</h4>
                            <p className="text-gray-600 text-base mt-2 leading-relaxed">Growing a business should not intrinsically demand linear headcount scaling alongside it. I design lean, self-healing automation loops that empower enterprise founders to intelligently manage customer triage, internal data communications, and execution logistics entirely through orchestrating intelligent software agents.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto px-6 w-full relative z-10 mb-20 scroll-mt-20">
                <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <details key={index} className="group border border-gray-200 bg-white shadow-sm rounded-lg [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-5 text-gray-900 font-semibold text-lg hover:text-[#0B2545] transition-colors">
                                {faq.q}
                                <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-5 pb-5 leading-relaxed text-gray-600 text-base border-t border-gray-100 pt-4">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* Connection Grid */}
            <div className="mt-10 w-full max-w-4xl border-t border-gray-200/60 pt-16 mx-auto px-6 relative z-10">
                <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] mb-8 text-center">Execute the Transition</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <a href="mailto:hello@bajwaa.dev" className="flex items-center justify-center bg-white shadow-sm border border-gray-200 hover:border-gray-300 transition-colors rounded-xl py-4 text-sm font-medium text-gray-800">
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/shahzebbajwa/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white shadow-sm border border-gray-200 hover:border-gray-300 transition-colors rounded-xl py-4 text-sm font-medium text-gray-800">
                        LinkedIn
                    </a>
                    <a href="https://x.com/shahzo_12" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white shadow-sm border border-gray-200 hover:border-gray-300 transition-colors rounded-xl py-4 text-sm font-medium text-gray-800">
                        Twitter
                    </a>
                    <a href="https://github.com/Bajwadevz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white shadow-sm border border-gray-200 hover:border-gray-300 transition-colors rounded-xl py-4 text-sm font-medium text-gray-800">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
