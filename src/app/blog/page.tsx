import type { Metadata } from "next";
import { getAllPosts } from "@/lib/api";
import { BlogWithFilter } from "./BlogClient";

export const metadata: Metadata = {
    title: "AI Automation Blog for Operators | bajwaa.dev",
    description:
        "Practical guides on AI workflow automation, no-code systems, and operator leverage. Built for founders, sales pros, and operators who want to move fast.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="py-32 flex flex-col w-full max-w-[720px] mx-auto px-6 relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 relative z-10">
                AI Automation Guides for Operators
            </h1>
            <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                Practical guides on AI workflow automation, no-code systems, and operator leverage.
            </p>

            <BlogWithFilter posts={posts} />
        </div>
    );
}
