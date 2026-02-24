import Hero from "@/components/Hero";
import DigitalProduct from "@/components/DigitalProduct";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import CredibilityMicrosection from "@/components/sections/CredibilityMicrosection";
import WhatIBuild from "@/components/sections/WhatIBuild";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-transparent">
      <Hero />
      <div className="max-w-6xl mx-auto w-full px-6 py-24">
        <WhatIBuild />
      </div>
      <div className="py-24">
        <PortfolioGrid />
      </div>
      <div className="py-24">
        <DigitalProduct />
      </div>
      <div className="py-24">
        <CredibilityMicrosection />
      </div>
    </div>
  );
}
