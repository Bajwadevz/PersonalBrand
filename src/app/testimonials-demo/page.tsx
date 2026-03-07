import { Testimonials } from "@/components/ui/testimonials";

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    name: "Michael Carter",
    username: "CEO, GrowthLayer",
    text: "Working with Shahzaib completely transformed how we handle inbound leads. The AI qualification system he built automatically filters and routes prospects into our CRM.",
    social: "https://twitter.com",
  },
  {
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    name: "Sarah Williams",
    username: "Operations Director",
    text: "Our internal workflows used to require hours of manual work every day. The AI automation Shahzaib built now handles everything automatically.",
    social: "https://twitter.com",
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    name: "Daniel Kim",
    username: "Startup Founder",
    text: "The cloud infrastructure and backend systems he designed for us scaled effortlessly. Extremely strong technical understanding combined with business thinking.",
    social: "https://twitter.com",
  },
  {
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    name: "Jessica Martinez",
    username: "Head of Marketing",
    text: "The AI agent system he built for our marketing team saves us dozens of hours every week.",
    social: "https://twitter.com",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    name: "David Thompson",
    username: "Founder, SaaS Company",
    text: "Shahzaib understands both technology and revenue operations. The automation pipelines he built directly increased our sales productivity.",
    social: "https://twitter.com",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Emily Chen",
    username: "Product Manager",
    text: "The AI workflows he deployed integrated perfectly with our existing tools. Implementation was smooth and the results were immediate.",
    social: "https://twitter.com",
  },
];

export default function TestimonialsDemo() {
  return (
    <main className="bg-white min-h-screen py-20">
      <div className="container mx-auto">
        <Testimonials
          testimonials={testimonials}
          title="What Clients Say"
          description="Real feedback from companies using AI automation, backend systems, and cloud architecture solutions."
          initialCount={3}
        />
      </div>
    </main>
  );
}
