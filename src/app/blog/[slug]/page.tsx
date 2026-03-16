import { getPostBySlug, getAllPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";
import InlineOptIn from "@/components/InlineOptIn";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const defaultOgImage = "https://bajwaa.dev/opengraph-image";

    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.keywords ? post.keywords.split(',').map(k => k.trim()) : [],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://bajwaa.dev/blog/${post.slug}`,
            type: "article",
            publishedTime: post.date,
            images: [
                {
                    url: post.og_image || defaultOgImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.og_image || defaultOgImage],
        },
        alternates: {
            canonical: `https://bajwaa.dev/blog/${post.slug}`,
        }
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost(props: Props) {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        author: {
            "@type": "Person",
            name: "Shahzaib Bajwa",
            url: "https://bajwaa.dev/about"
        },
        publisher: {
            "@type": "Organization",
            name: "bajwaa.dev",
            url: "https://bajwaa.dev"
        },
        datePublished: post.date,
        description: post.excerpt
    };

    let faqJsonLd = null;

    if (post.slug === "n8n-vs-make-vs-zapier-ai-automation-2025") {
        faqJsonLd = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is n8n better than Make for AI automation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "n8n is better for technical teams who want full control, self-hosting, and complex branching logic. Make is better for non-technical operators who want fast setup and a visual interface. For AI-heavy workflows, n8n's native AI nodes give it an edge in 2025–2026."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is n8n free to use?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "n8n has a self-hosted open-source version that is free. The cloud version starts at $20/month. For most solo operators and small teams, the self-hosted version running on a $5/month VPS is the most cost-effective option."
                    } // Escaped internally by json.stringify
                },
                {
                    "@type": "Question",
                    "name": "Which is easier: Zapier or Make?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Zapier is easier for simple 2-step automations. Make is more capable for multi-step workflows with filters, iterators, and error handling — and significantly cheaper at scale."
                    }
                }
            ]
        };
    } else if (post.slug === "best-no-code-ai-tools-for-operators-2026") {
        faqJsonLd = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are the best no-code AI tools for small teams?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The highest-leverage no-code AI tools for small teams in 2026 are Make.com for workflow automation, n8n for complex AI pipelines, Clay for data enrichment, Notion AI for internal knowledge, and OpenAI's API via Make for LLM-powered automations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I automate workflows without coding?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Tools like Make.com, n8n, and Zapier allow full workflow automation without writing code. Most AI integrations — including GPT-4 and Claude — are available as native modules in these platforms."
                    }
                }
            ]
        };
    } else if (post.slug === "how-to-build-an-ai-workflow-without-coding") {
        faqJsonLd = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How long does it take to build an AI workflow?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A simple AI workflow — like automated lead research or report generation — takes 2–4 hours to build in Make.com or n8n with no prior experience. More complex multi-step workflows with error handling typically take 1–2 days."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What do I need to start building AI workflows?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You need three things: an automation platform (Make.com or n8n), an AI API key (OpenAI or Anthropic), and a clear definition of one manual task to automate. No coding required."
                    }
                }
            ]
        };
    }

    // Pre-process markdown to inject the opt-in form after the second paragraph.
    // A paragraph block is typically followed by a double newline \n\n.
    // We split the markdown by \n\n, increment index past the first two text blocks that don't look like headings.
    const blocks = post.content.split(/\n\n+/);
    let paragraphsCounted = 0;
    let injectionIndex = -1;

    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i].trim();
        // Naive check to skip headings, lists, or blockquotes when counting "paragraphs".
        // Actually, for maximum safety since the user explicitly said "after the second paragraph",
        // we will count plain text paragraphs (blocks that don't start with #).
        if (block && !block.startsWith('#') && !block.startsWith('-') && !block.startsWith('*') && !block.startsWith('>')) {
            paragraphsCounted++;
            if (paragraphsCounted === 2) {
                injectionIndex = i;
                break;
            }
        }
    }

    // If we found the 2nd paragraph, inject our custom marker string right after it.
    if (injectionIndex !== -1) {
        blocks.splice(injectionIndex + 1, 0, "<inline-opt-in-component />");
    }

    const processedContent = blocks.join("\n\n");

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}
            {/* Top of blog post (allows grid to show) */}
            <header className="pt-32 pb-12 w-full max-w-[720px] mx-auto px-6 relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 text-[#0F172A]">
                    {post.title}
                </h1>
                <time className="text-muted-foreground text-base" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
            </header>

            <article className="bg-white relative z-10 w-full">
                <div className="py-12 w-full max-w-[720px] mx-auto px-6">
                    <div className="prose prose-neutral prose-lg max-w-[65ch] prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl prose-p:mb-5 prose-a:text-[var(--color-link)] prose-a:underline-offset-4 hover:prose-a:text-[var(--color-link-hover)] prose-a:transition-colors prose-a:duration-200 w-full text-foreground leading-relaxed">
                        <ReactMarkdown
                            components={{
                                h1: (props) => <h2 className="text-2xl font-semibold mt-12 mb-4 tracking-tight" {...props} />,
                                h2: (props) => <h2 className="text-2xl font-semibold mt-12 mb-4 tracking-tight" {...props} />,
                                h3: (props) => <h3 className="text-xl font-semibold mt-8 mb-3 tracking-tight" {...props} />,
                                // Intercept our custom string format to map it to the React component.
                                // ReactMarkdown automatically wraps unknown HTML strings in <p> tags if rehypeRaw is not used.
                                // We check if the text node exactly matches our injected token.
                                p: ({ children, node, ...rest }) => {
                                    // If this paragraph's sole child is our literal string token, swap it for the component.
                                    if (
                                        Array.isArray(children) &&
                                        children.length === 1 &&
                                        typeof children[0] === 'string' &&
                                        children[0].includes("<inline-opt-in-component />")
                                    ) {
                                        return <InlineOptIn />;
                                    }
                                    if (typeof children === 'string' && children.includes("<inline-opt-in-component />")) {
                                        return <InlineOptIn />;
                                    }
                                    return <p className="mb-5 leading-relaxed" {...rest}>{children}</p>;
                                }
                            }}
                        >
                            {processedContent}
                        </ReactMarkdown>
                    </div>

                    {/* End-of-article opt-in */}
                    <InlineOptIn />
                </div>
            </article>
        </>
    );
}
