import Link from "next/link";
import { type Post } from "@/lib/api";

type Props = {
    posts: Post[];
};

export default function BlogPreview({ posts }: Props) {
    return (
        <section className="py-12 w-full border-t border-muted">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                    <h3 className="text-2xl font-semibold tracking-tight">Latest Writing on AI & Vibe Coding</h3>
                    <p className="text-muted-foreground mt-2">Breakdowns, experiments, and practical lessons from building with AI in public.</p>
                </div>
                <Link
                    href="/blog"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    View all →
                </Link>
            </div>

            <div className="flex flex-col gap-6">
                {posts.length === 0 ? (
                    <p className="text-muted-foreground">No posts found.</p>
                ) : (
                    posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group block p-6 -mx-6 rounded-2xl hover:bg-muted/50 transition-colors"
                        >
                            <article>
                                <time className="text-sm text-muted-foreground mb-2 block">
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                                <h4 className="text-lg font-medium text-foreground group-hover:underline underline-offset-4 decoration-muted-foreground/30 mb-2">
                                    {post.title}
                                </h4>
                                <p className="text-muted-foreground text-base line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </article>
                        </Link>
                    ))
                )}
            </div>
        </section>
    );
}
