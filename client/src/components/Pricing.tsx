import { Button } from "@/components/ui/button";
import { Check, Shield, Zap } from "lucide-react";

const HOTMART_URL = "https://pay.hotmart.com/P105267357Y?off=skjyhsxd&hotfeature=51";

export default function Pricing() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-transparent to-orange-500/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Oferta de <span className="text-orange-400">Lançamento</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-gray-400">Garanta sua autonomia por um preço especial</p>
        </div>

        <div className="relative rounded-lg border border-orange-500/30 bg-gradient-to-br from-gray-900 to-gray-950 p-4 sm:p-6 md:p-10 shadow-2xl">
          {/* Badge */}
          <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-orange-500 text-white font-bold rounded-full text-xs">
              <Zap className="h-3 w-3" />
              OFERTA ESPECIAL
            </div>
          </div>

          <div className="text-center mb-4 sm:mb-6">
            <div className="text-3xl sm:text-4xl md:text-6xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <span className="text-white">R$ </span>
              <span className="text-orange-400">42,90</span>
            </div>
            <div className="text-xs sm:text-sm md:text-lg text-gray-400 mb-2">
              ou <span className="font-semibold text-white">6x de R$ 8,05</span>
            </div>

          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-5 py-3 sm:py-4 border-y border-gray-800">
            <div className="flex items-center gap-1 text-gray-400 text-xs">
              <span>💳</span>
              <span>Cartão</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-xs">
              <span>📱</span>
              <span>Boleto</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-xs">
              <span>🔒</span>
              <span>PIX</span>
            </div>
          </div>

          {/* Security Badge */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
              <Check className="h-3 w-3 text-green-400" />
              <span className="text-xs text-green-400 font-semibold">Compra 100% Segura</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-4">
            <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button 
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-base px-3 sm:px-6 py-3 sm:py-5 rounded-lg animate-glow"
              >
                <Zap className="mr-2 h-3 sm:h-4 w-3 sm:w-4" />
                COMPRAR COM DESCONTO
              </Button>
            </a>
          </div>



          {/* Benefits */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
              <span>Acesso imediato</span>
            </div>

            <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
              <span>Certificado digital</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
              <span>Acesso vitalício</span>
            </div>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-lg bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">Garantia de 7 Dias</h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Seu dinheiro de volta <span className="font-semibold text-green-400">sem perguntas</span> até 7 dias após a compra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
