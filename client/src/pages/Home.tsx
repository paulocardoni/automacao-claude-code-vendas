import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import Pricing from "@/components/Pricing";
import ObjectionKiller from "@/components/ObjectionKiller";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <TopBar />
      <Hero />
      <Comparison />
      <WhatYouWillLearn />
      <Pricing />
      <ObjectionKiller />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
