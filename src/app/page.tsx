import Hero from "@/components/Hero";
import { StackSlider } from "@/components/stack-slider";
import DigitalProduct from "@/components/DigitalProduct";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import WhatIBuild from "@/components/sections/WhatIBuild";
import { Testimonials } from "@/components/ui/testimonials";
import type { TestimonialItem } from "@/components/ui/testimonials";

const testimonials: TestimonialItem[] = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Daniel K.",
    username: "Startup Operator",
    text: "Shahzaib's breakdowns on AI systems completely changed how we approach automation. Instead of random tools and prompts, we now build structured workflows that actually scale.",
    social: "https://twitter.com",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Elena R.",
    username: "SaaS Founder",
    text: "Most people talk about AI. Shahzaib actually explains how to build systems with it. His frameworks helped us automate research, content production, and lead qualification.",
    social: "https://twitter.com",
  },
  {
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    name: "Marcus T.",
    username: "Cloud Architect",
    text: "The rare thing about Shahzaib's work is the balance between architecture and execution. It's not hype — it's real systems thinking applied to AI workflows.",
    social: "https://twitter.com",
  },
  {
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    name: "Priya S.",
    username: "Product Lead",
    text: "The way Shahzaib explains AI orchestration finally made it click for our team. We rebuilt multiple internal processes using his system-first approach.",
    social: "https://twitter.com",
  },
  {
    image: "https://randomuser.me/api/portraits/men/73.jpg",
    name: "Kevin M.",
    username: "Technical Founder",
    text: "The content here isn't surface level. It connects AI tooling with real architecture decisions — which is exactly what builders actually need.",
    social: "https://twitter.com",
  },
  {
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    name: "Laura D.",
    username: "Growth Operator",
    text: "Following Shahzaib's frameworks helped us automate large parts of our outbound and research workflows. The leverage from these systems is huge.",
    social: "https://twitter.com",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-transparent overflow-hidden">
      <Hero />
      <StackSlider />
      <WhatIBuild />
      <PortfolioGrid />
      <DigitalProduct />
      <Testimonials
        testimonials={testimonials}
        title="Trusted by Operators"
        description="Builders, founders, and operators using system-first AI workflows."
        className="py-24 md:py-32"
      />
    </div>
  );
}
