import { getPostBySlug, getAllPosts } from "@/lib/api";
import { insightGuides } from "@/lib/insight-guides";
import { CallLink, SecondaryLink } from "@/components/Agency";
import ReadingProgress from "@/components/pages/insights/ReadingProgress";
import { extractToc, headingId, textOf } from "@/components/pages/insights/toc";
import "../insights.css";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";
import Link from "next/link";
import { existsSync } from "node:fs";
import { join } from "node:path";

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

    const socialImage = post.og_image?.startsWith("/") && existsSync(join(process.cwd(), "public", post.og_image))
        ? post.og_image
        : "https://bajwaa.dev/opengraph-image";

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://bajwaa.dev/blog/${post.slug}`,
            type: "article",
            publishedTime: post.date,
            images: [
                {
                    url: socialImage,
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
            images: [socialImage],
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

    const url = `https://bajwaa.dev/blog/${post.slug}`;
    const guide = insightGuides.find(item => item.slug === post.slug);
    const related = insightGuides.filter(item => item.slug !== post.slug).slice(0, 2);
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        mainEntityOfPage: url,
        url,
        inLanguage: "en-AU",
        author: post.author && post.author !== "bajwaa.dev"
            ? (post.author === "Shahzeb Bajwa" ? { "@type": "Person", "@id": "https://bajwaa.dev/about#founder", name: post.author } : { "@type": "Person", name: post.author })
            : { "@type": "Organization", "@id": "https://bajwaa.dev/#organisation", name: "bajwaa.dev" },
        publisher: {
            "@id": "https://bajwaa.dev/#organisation"
        },
        datePublished: post.date,
        dateModified: post.date,
        image: "https://bajwaa.dev/opengraph-image",
        description: post.excerpt
    };

    const toc = extractToc(post.content);
    const topic = post.tags?.[0] ?? guide?.label;
    const dateLabel = post.date
        ? new Date(post.date).toLocaleDateString("en-AU", { timeZone: "UTC", year: "numeric", month: "long", day: "numeric" })
        : "";

    return (
        <article className="agency insight-article ins-article" data-reading-root>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
            />
            <ReadingProgress />
            <header className="article-head ins-article-head">
                <Link className="work-link" href="/blog">← All insights</Link>
                {topic && <p className="kicker ins-article-kicker">{topic}</p>}
                <h1>{post.title}</h1>
                <p className="ins-article-meta">
                    <span>By {post.author || "bajwaa.dev"}</span>
                    {dateLabel && <time dateTime={post.date}>{dateLabel}</time>}
                    {post.readingTime && <span>{post.readingTime}</span>}
                </p>
            </header>

            <div className={`ins-article-layout${toc.length >= 3 ? " has-toc" : ""}`}>
                {toc.length >= 3 && (
                    <aside className="ins-toc" aria-label="On this page">
                        <details open>
                            <summary>On this page</summary>
                            <ol>
                                {toc.map(item => <li key={item.id}><a href={`#${item.id}`}>{item.text}</a></li>)}
                            </ol>
                        </details>
                    </aside>
                )}

                <div className="article-body ins-article-body">
                    <div className="prose prose-neutral dark:prose-invert prose-lg max-w-[65ch] prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl prose-p:mb-5 prose-a:text-[var(--color-link)] prose-a:underline-offset-4 hover:prose-a:text-[var(--color-link-hover)] prose-a:transition-colors prose-a:duration-200 w-full text-foreground leading-relaxed">
                        <ReactMarkdown
                            components={{
                                h1: ({ node, ...props }) => (void node, <h2 className="text-2xl font-semibold mt-12 mb-4 tracking-tight" {...props} />),
                                h2: ({ node, ...props }) => (void node, <h2 id={headingId(textOf(props.children))} className="text-2xl font-semibold mt-12 mb-4 tracking-tight" {...props} />),
                                h3: ({ node, ...props }) => (void node, <h3 className="text-xl font-semibold mt-8 mb-3 tracking-tight" {...props} />),
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>

                    <section className="ins-cta glass" aria-labelledby="ins-article-cta">
                        <div>
                            <p className="kicker">Next step</p>
                            <h2 id="ins-article-cta">Want this mapped for your business?</h2>
                            <p>On a free 20-minute call we’ll look at one process and tell you honestly whether it’s worth automating.</p>
                        </div>
                        <div className="ins-cta-actions">
                            <CallLink />
                            <SecondaryLink href="/ai-operations-audit">What the A$750 audit includes</SecondaryLink>
                        </div>
                    </section>

                    <nav className="article-related ins-related" aria-label="Related reading">
                        <h2>Related reading</h2>
                        <ul>
                            {guide && <li><Link href={guide.service}>{guide.serviceLabel} →</Link></li>}
                            {related.map(item => <li key={item.slug}><Link href={`/blog/${item.slug}`}>{item.shortTitle} →</Link></li>)}
                        </ul>
                    </nav>
                </div>
            </div>
        </article>
    );
}
