import Hero from "@/components/Hero";
import { StackSlider } from "@/components/stack-slider";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import WorkWithMe from "@/components/sections/WorkWithMe";
import FoundingClientCallout from "@/components/sections/FoundingClientCallout";
import InlineOptIn from "@/components/InlineOptIn";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-transparent overflow-hidden">
      <Hero />
      <StackSlider />
      <PortfolioGrid />
      <FoundingClientCallout />
      <WorkWithMe />
      <InlineOptIn />
    </div>
  );
}
