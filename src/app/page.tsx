import Hero from "@/components/Hero";
import About from "@/components/About";
import BlogPreview from "@/components/BlogPreview";
import DigitalProduct from "@/components/DigitalProduct";
import VisualAnchor from "@/components/sections/VisualAnchor";
import StructuredDirection from "@/components/sections/StructuredDirection";
import CredibilityMicrosection from "@/components/sections/CredibilityMicrosection";
import { getAllPosts } from "@/lib/api";

export default function Home() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3);

  return (
    <div className="flex flex-col w-full bg-white">
      <Hero />
      <VisualAnchor />
      <div className="max-w-5xl mx-auto w-full px-6">
        <About />
        <BlogPreview posts={recentPosts} />
      </div>
      <StructuredDirection />
      <div className="max-w-4xl mx-auto w-full px-6 pb-16">
        <DigitalProduct />
      </div>
      <CredibilityMicrosection />
    </div>
  );
}
