import Link from "next/link";
import { type Post } from "@/lib/api";

type Props = {
    posts: Post[];
};

export default function BlogPreview({ posts }: Props) {
    return (
        <section className="py-32 w-full border-t border-gray-200/50">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                <div>
                    <h3 className="text-3xl font-semibold tracking-tight text-[#0F172A]">Latest Field Notes</h3>
                    <p className="text-gray-500 mt-2 text-lg">Breakdowns, experiments, and practical lessons from building with AI in public.</p>
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
                            className="group block p-8 rounded-3xl border border-transparent hover:border-gray-200/60 hover:bg-white hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <article>
                                <time className="text-sm text-gray-400 mb-3 block font-medium">
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
