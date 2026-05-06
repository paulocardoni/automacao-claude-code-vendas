import { Button } from "@/components/ui/button";
import { CheckCircle, Lock, Zap } from "lucide-react";

const HOTMART_URL = "https://pay.hotmart.com/P105267357Y?off=skjyhsxd&hotfeature=51";

export default function Hero() {
  return (
    <section className="relative pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-16 md:pb-16 px-4 sm:px-6 md:px-8 overflow-hidden" role="region" aria-label="Secao principal">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">

          <div className="animate-slide-in-up order-2 md:order-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500/10 border border-orange-500/30 rounded-full w-fit">
              <span className="text-orange-400 font-bold text-xs sm:text-sm">FORMACAO AGENTICA</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Pare de trabalhar <span className="text-orange-400">10 horas</span> no que o Claude Code faz em 10 minutos
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Relatórios, análises e otimizações de campanha no automático — sem saber programar, sem assinar mais uma ferramenta cara.
            </p>

            <div className="flex flex-col gap-2 mb-3 sm:mb-4">
              <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base md:text-lg px-6 py-4 sm:py-5 md:py-6 rounded-lg animate-glow"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  QUERO MINHAS 10 HORAS DE VOLTA
                </Button>
              </a>
            </div>

            <div className="flex justify-start mb-3">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                <span className="text-xs text-green-400 font-semibold">Compra 100% Segura</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                <span>7 dias de garantia total</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                <span>Acesso imediato apos a compra</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in order-1 md:order-2">
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl border border-orange-500/20">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/GVkxdiH29vQ?si=A0Ul21VVpSenRFWE"
                  title="Automacao com Claude Code"
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
