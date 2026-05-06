import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import ForWhom from "@/components/ForWhom";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-10">
      <TopBar />
      <Hero />
      <ForWhom />
      <WhatYouWillLearn />
      <div id="pricing">
        <Pricing />
      </div>
      <About />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
