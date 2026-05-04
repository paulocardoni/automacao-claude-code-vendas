import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import Pillars from "@/components/Pillars";
import Showcase from "@/components/Showcase";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import Pricing from "@/components/Pricing";
import Requirements from "@/components/Requirements";
import ObjectionKiller from "@/components/ObjectionKiller";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

/**
 * Landing Page - Automação com Claude Code para Gestores de Tráfego
 * 
 * Design Philosophy:
 * - Dark Mode (background: oklch(0.08 0.01 270)) + Orange/Coral accent (oklch(0.65 0.25 30))
 * - Tipografia: Poppins (display) + Inter (body)
 * - Elementos: Barra de urgência, cards com ícones, trust icons, comparativo visual
 * - Interações: Transições fluidas, hover effects, scroll animations
 * 
 * Seções:
 * 1. TopBar - Urgência e oferta especial
 * 2. Hero - Headline, subheadline, vídeo, CTA principal
 * 3. Comparison - Gestão Tradicional vs Agêntica
 * 4. Pillars - Os 3 Pilares da Soberania Operacional
 * 5. Showcase - Demonstração do que você vai comandar
 * 6. WhatYouWillLearn - Os 8 aprendizados principais (SEO)
 * 7. Pricing - Preço, formas de pagamento, CTA
 * 8. Requirements - Os 10 requisitos para o curso (SEO)
 * 9. ObjectionKiller - Matadores de objeção principais
 * 10. FAQ - Perguntas frequentes
 * 11. About - Bio do Paulo Cardoni
 * 12. Footer - Links legais e informações
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Automacao com Claude Code para Gestores de Trafego",
          "description": "Domine a gestao de trafego pago com Claude Code. Aprenda a automatizar processos e escalar resultados de forma eficiente.",
          "url": "https://automacao-claude-code-vendas.vercel.app",
          "author": {
            "@type": "Person",
            "name": "Paulo Cardoni"
          },
          "price": "63.90",
          "priceCurrency": "BRL",
          "offers": {
            "@type": "Offer",
            "price": "63.90",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock"
          }
        }`}
      </script>
      <TopBar />
      <Hero />
      <Comparison />
      <Pillars />
      <Showcase />
      <WhatYouWillLearn />
      <Pricing />
      <Requirements />
      <ObjectionKiller />
      <FAQ />
      <About />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
