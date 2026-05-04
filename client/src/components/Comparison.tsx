import { AlertCircle, CheckCircle, Zap } from "lucide-react";

export default function Comparison() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Gestão Tradicional <span className="text-gray-500">vs</span> Gestão Agêntica
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-gray-400">Veja a diferença entre trabalhar manualmente e deixar a IA trabalhar para você</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Traditional */}
          <div className="p-4 sm:p-6 rounded-lg border border-red-500/20 bg-red-500/5">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <AlertCircle className="h-5 sm:h-6 w-5 sm:w-6 text-red-400 flex-shrink-0" />
              <h3 className="text-base sm:text-xl font-bold text-red-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Gestão Tradicional
              </h3>
            </div>
            <p className="text-gray-400 mb-3 sm:mb-4 text-xs">Interface e Clique</p>

            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-red-400 font-bold mt-0.5 sm:mt-1 flex-shrink-0">✕</span>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Lentidão</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Passa horas ajustando lances e subindo criativos manualmente</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-red-400 font-bold mt-0.5 sm:mt-1 flex-shrink-0">✕</span>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Erro Humano</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Esqueceu uma campanha ativada? Trocou um orçamento? Acontece</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-red-400 font-bold mt-0.5 sm:mt-1 flex-shrink-0">✕</span>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Teto de Escala</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Você só consegue gerenciar um número limitado de contas com qualidade</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-red-400 font-bold mt-0.5 sm:mt-1 flex-shrink-0">✕</span>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Dependência de Interface</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Se o Gerenciador travar ou mudar, sua operação para</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Agentic */}
          <div className="p-4 sm:p-6 rounded-lg border border-green-500/20 bg-green-500/5">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-green-400 flex-shrink-0" />
              <h3 className="text-base sm:text-xl font-bold text-green-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Gestão Agêntica
              </h3>
            </div>
            <p className="text-gray-400 mb-3 sm:mb-4 text-xs">Claude Code + IA</p>

            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-green-400 font-bold mt-0.5 sm:mt-1 flex-shrink-0">→</span>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Rápidez</p>
                  <p className="text-gray-400 text-xs sm:text-sm">O que sua agência leva dias, o sistema executa em segundos via API</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-green-400 font-bold mt-0.5 sm:mt-1 flex-shrink-0">→</span>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Precisão</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Código não erra. A otimização segue a regra estratégica exata</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-green-400 font-bold mt-0.5 sm:mt-1 flex-shrink-0">→</span>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Escala Infinita</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Gerencie 10, 100 ou 1000 contas com a mesma consistência</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-green-400 font-bold mt-0.5 sm:mt-1 flex-shrink-0">→</span>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Soberania</p>
                  <p className="text-gray-400 text-xs sm:text-sm">O sistema roda via VPS (nuvem), direto nos dados brutos</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 p-6 sm:p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 rounded-lg sm:rounded-xl border border-orange-500/20">
          <div className="flex items-start gap-3 sm:gap-4">
            <Zap className="h-5 sm:h-6 w-5 sm:w-6 text-orange-400 mt-0.5 sm:mt-1 flex-shrink-0" />
            <div>
              <p className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                Seu sistema trabalha para você, não o contrário.
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                Enquanto você dorme, a IA otimiza suas campanhas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
