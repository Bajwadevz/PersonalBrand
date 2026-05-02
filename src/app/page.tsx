import Hero from "@/components/Hero";
import { StackSlider } from "@/components/stack-slider";
import DigitalProduct from "@/components/DigitalProduct";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import WorkWithMe from "@/components/sections/WorkWithMe";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-transparent overflow-hidden">
      <Hero />
      <StackSlider />
      <PortfolioGrid />
      <WorkWithMe />
      <DigitalProduct />
    </div>
  );
}
