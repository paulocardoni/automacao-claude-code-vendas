import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import ForWhom from "@/components/ForWhom";
import About from "@/components/About";
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
      <ForWhom />
      <Comparison />
      <WhatYouWillLearn />
      <About />
      <Pricing />
      <ObjectionKiller />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
