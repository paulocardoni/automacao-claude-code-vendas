import { Button } from "@/components/ui/button";
import { CheckCircle, Lock, Zap } from "lucide-react";

const HOTMART_URL = "https://pay.hotmart.com/P105267357Y?off=skjyhsxd&hotfeature=51";

export default function Hero() {
  return (
    <section className="relative pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-16 md:pb-16 px-4 sm:px-6 md:px-8 overflow-hidden" role="region" aria-label="Seção principal da formação agêntica">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="animate-slide-in-up order-2 md:order-1 min-h-auto flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
              <span className="text-orange-400 font-bold text-xs sm:text-sm">FORMAÇÃO AGÊNTICA</span>
            </div>

            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Como gestores de tráfego estão eliminando <span className="text-orange-400">12h de trabalho manual</span> por semana — sem saber programar
            </h1>

            <p className="text-xs sm:text-base md:text-lg text-gray-300 mb-3 sm:mb-4 leading-relaxed">
              Relatórios automáticos, análises de campanhas, otimizações em lote. Tudo que você faz no braço hoje, o Claude Code faz por você — em minutos.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col gap-2 mb-3 sm:mb-4">
              <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button 
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-base md:text-lg px-3 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-lg animate-glow"
                >
                  <Zap className="mr-2 h-3 sm:h-4 w-3 sm:w-4" />
                  QUERO ECONOMIZAR 12H/SEMANA →
                </Button>
              </a>
            </div>

            {/* Security Badge */}
            <div className="flex justify-start mb-2 sm:mb-3">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                <span className="text-xs text-green-400 font-semibold">Compra 100% Segura</span>
              </div>
            </div>

            {/* Trust Icons */}
            <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                <span>7 dias de garantia</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>

          {/* Right: Video */}
          <div className="animate-fade-in order-1 md:order-2">
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl border border-orange-500/20">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/GVkxdiH29vQ?si=A0Ul21VVpSenRFWE"
                  title="Automação com Claude Code"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}