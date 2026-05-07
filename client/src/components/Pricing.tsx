import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Users } from "lucide-react";

const HOTMART_URL = "https://pay.hotmart.com/P105267357Y?off=skjyhsxd&hotfeature=51";
const STORAGE_KEY = "fa_vagas_restantes";
const INITIAL_VAGAS = 73;

export default function Pricing() {
  const [vagas, setVagas] = useState(INITIAL_VAGAS);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const savedNum = parseInt(saved);
      if (savedNum > 0 && savedNum <= INITIAL_VAGAS) {
        setVagas(savedNum);
      } else {
        localStorage.setItem(STORAGE_KEY, String(INITIAL_VAGAS));
        setVagas(INITIAL_VAGAS);
      }
    }

    const decrement = () => {
      setVagas(prev => {
        if (prev <= 1) return 1;
        const next = prev - 1;
        localStorage.setItem(STORAGE_KEY, String(next));
        return next;
      });
    };

    const randomInterval = Math.floor(Math.random() * (20 - 8 + 1) + 8) * 60 * 1000;
    const timer = setInterval(decrement, randomInterval);
    return () => clearInterval(timer);
  }, []);

  const porcentagem = Math.round(((100 - vagas) / 100) * 100);
  const vagasTexto = vagas === 1 ? "1 vaga restante" : `${vagas} vagas restantes`;

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-transparent to-orange-500/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Oferta de <span className="text-orange-400">Lançamento</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-gray-400">Somente para os primeiros 100 — depois o preço sobe para R$127,90</p>
        </div>

        <div className="relative rounded-lg border border-orange-500/30 bg-gradient-to-br from-gray-900 to-gray-950 p-4 sm:p-6 md:p-10 shadow-2xl">
          <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-orange-500 text-white font-bold rounded-full text-xs">
              <Zap className="h-3 w-3" />
              OFERTA ESPECIAL
            </div>
          </div>

          <div className="mb-5 p-3 sm:p-4 rounded-lg bg-red-500/10 border border-red-500/30">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-red-400" />
                <span className="text-xs sm:text-sm font-bold text-red-400">VAGAS RESTANTES</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white">{vagas}<span className="text-gray-500 text-sm font-normal">/100</span></span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-700"
                style={{ width: `${porcentagem}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1.5">
              {porcentagem}% das vagas com preço de lançamento já foram preenchidas
            </p>
          </div>

          <div className="text-center mb-4 sm:mb-6">
            <div className="flex items-center justify-center gap-3 mb-1">
              <span className="text-gray-500 text-sm line-through">R$127,90</span>
              <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-0.5 rounded-full">-66% OFF</span>
            </div>
            <div className="text-3xl sm:text-4xl md:text-6xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <span className="text-white">R$ </span>
              <span className="text-orange-400">42,90</span>
            </div>
            <div className="text-xs sm:text-sm md:text-lg text-gray-400 mb-2">
              ou <span className="font-semibold text-white">6x de R$ 8,05</span>
            </div>
          </div>

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

          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
              <Check className="h-3 w-3 text-green-400" />
              <span className="text-xs text-green-400 font-semibold">Compra 100% Segura</span>
            </div>
          </div>

          <div className="mb-4">
            <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-base px-3 sm:px-6 py-3 sm:py-5 rounded-lg animate-glow"
              >
                <Zap className="mr-2 h-3 sm:h-4 w-3 sm:w-4" />
                GARANTIR MINHA VAGA POR R$42,90
              </Button>
            </a>
          </div>

          <p className="text-center text-xs text-red-400 mb-4 font-medium">
            Depois {vagasTexto === "1 vaga restante" ? "da" : "das"} {vagasTexto} o valor sobe para R$127,90
          </p>

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
