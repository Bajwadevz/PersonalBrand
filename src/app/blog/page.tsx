import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";

export const metadata: Metadata = {
    title: "Field Notes & Blog | Bajwaa Dev",
    description: "Practical breakdowns on AI workflows, automation, and systems for operators. Tactical, no fluff.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="py-32 flex flex-col w-full max-w-[720px] mx-auto px-6 relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 relative z-10">Blog</h1>
            <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                Practical breakdowns on AI workflows, automation, and systems for operators.
            </p>

            <div className="flex flex-col gap-8">
                {posts.length === 0 ? (
                    <p className="text-muted-foreground">No posts found.</p>
                ) : (
                    posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group block p-6 -mx-6 rounded-2xl hover:bg-[var(--color-muted)] transition-colors duration-200 ease-out border border-transparent hover:border-[var(--color-border)]"
                        >
                            <article>
                                <time className="text-sm text-muted-foreground mb-3 block">
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                                <h2 className="text-2xl font-semibold text-[var(--color-heading)] group-hover:underline underline-offset-4 decoration-muted-foreground/30 mb-3 tracking-tight">
                                    {post.title}
                                </h2>
                                <p className="text-foreground text-base line-clamp-2 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </article>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}
