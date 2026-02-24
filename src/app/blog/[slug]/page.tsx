import { getPostBySlug, getAllPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";

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

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.og_image || "https://bajwaa.dev/opengraph-image",
        datePublished: post.date,
        author: {
            "@type": "Person",
            name: "Shahzaib Bajwa",
            url: "https://bajwaa.dev"
        },
        publisher: {
            "@type": "Organization",
            name: "Bajwa Dev",
            logo: {
                "@type": "ImageObject",
                url: "https://bajwaa.dev/icon.png"
            }
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://bajwaa.dev/blog/${post.slug}`
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
                                h1: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-12 mb-4 tracking-tight" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-12 mb-4 tracking-tight" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-8 mb-3 tracking-tight" {...props} />,
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </div>
            </article>
        </>
    );
}
