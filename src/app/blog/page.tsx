import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";

export const metadata: Metadata = {
    title: "Field Notes & Blog | Bajwaa Dev",
    description: "Thoughts, experiments, and practical breakdowns on architecting autonomous AI systems for the enterprise.",
};

export default function BlogPage() {
    // Only show the 3 latest posts as per the user's requirement for the blog index
    const posts = getAllPosts().slice(0, 3);

    return (
        <div className="py-20 flex flex-col w-full max-w-[720px] mx-auto px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8">Blog</h1>
            <p className="text-muted-foreground mb-12 text-base">
                Thoughts, experiments, and practical breakdowns on architecting autonomous AI systems for the enterprise.
            </p>

            <div className="flex flex-col gap-8">
                {posts.length === 0 ? (
                    <p className="text-muted-foreground">No posts found.</p>
                ) : (
                    posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group block p-6 -mx-6 rounded-2xl hover:bg-[var(--color-muted)] transition-colors border border-transparent hover:border-[var(--color-border)]"
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
