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
        <article className="py-32 w-full max-w-[720px] mx-auto px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <header className="mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-[#0F172A]">
                    {post.title}
                </h1>
                <time className="text-muted-foreground text-base">
                    {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
            </header>

            <div className="prose prose-neutral prose-lg prose-headings:font-semibold prose-a:text-[var(--color-link)] prose-a:underline-offset-4 hover:prose-a:text-[var(--color-link-hover)] max-w-none w-full text-foreground">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </article>
    );
}
