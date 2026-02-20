import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "src/content/posts");

export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    content: string;
    keywords?: string;
    og_image?: string;
};

export function getPostSlugs() {
    if (!fs.existsSync(postsDirectory)) return [];
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Truncate logic ensuring excerpt is precisely restricted around 160 characters
    const rawDescription = data.description || content.slice(0, 160);
    const excerpt = rawDescription.length > 160
        ? rawDescription.substring(0, 157) + "..."
        : rawDescription;

    return {
        slug: realSlug,
        title: data.title || "Untitled",
        date: data.date ? new Date(data.date).toISOString() : "",
        description: data.description || "",
        excerpt,
        content,
        keywords: data.keywords || "",
        og_image: data.og_image || "",
    };
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
