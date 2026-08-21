import Hero from "@/components/Hero";
import { StackSlider } from "@/components/stack-slider";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import WorkWithMe from "@/components/sections/WorkWithMe";
import FoundingClientCallout from "@/components/sections/FoundingClientCallout";
import InlineOptIn from "@/components/InlineOptIn";
import LoomEmbed from "@/components/LoomEmbed";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-transparent overflow-hidden">
      <Hero />
      <section className="py-16">
        <div className="container-shell">
          <LoomEmbed
            eyebrow="90-SECOND WALKTHROUGH"
            heading="See how it works"
          />
        </div>
      </section>
      <StackSlider />
      <PortfolioGrid />
      <FoundingClientCallout />
      <WorkWithMe />
      <InlineOptIn />
    </div>
  );
}
