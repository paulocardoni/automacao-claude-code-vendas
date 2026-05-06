import { Award, Briefcase, TrendingUp, Code } from "lucide-react";

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Quem criou este <span className="text-orange-400">curso</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Este curso nao foi criado por um programador. Foi criado por um gestor de trafego — que sentiu as mesmas dores que voce sente hoje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Paulo Cardoni
            </h3>
            <p className="text-orange-400 font-semibold mb-5 text-sm sm:text-base">
              Head de Performance e Growth | Especialista em Automacao com IA
            </p>

            <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
              18 anos gerenciando midia paga para marcas como <span className="text-white font-semibold">Ortobom</span> e <span className="text-white font-semibold">Elsevier EMEA</span>. Ja gerenciei budgets de ate <span className="text-orange-400 font-bold">R$7 milhoes por mes</span> e liderei equipes de 12 profissionais de performance.
            </p>

            <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
              Durante anos, fiz o que todo gestor faz: gastei horas montando relatorios no Excel, subindo campanhas manualmente, pedindo paginas para desenvolvedores e esperando dias para ter uma analise pronta.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Quando comecei a usar o Claude Code, percebi que conseguia fazer em minutos o que antes levava um dia inteiro. <span className="text-white font-semibold">Este curso foi construido inteiramente com as mesmas tecnicas que ensino</span> — a pagina que voce esta lendo agora foi criada com Claude Code, sem contratar um dev.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-lg bg-gray-900/50 border border-gray-800 text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-400 mb-1">18+</div>
                <div className="text-xs text-gray-400">Anos em Performance</div>
              </div>
              <div className="p-3 sm:p-4 rounded-lg bg-gray-900/50 border border-gray-800 text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-400 mb-1">R$7M</div>
                <div className="text-xs text-gray-400">Budget/mes gerenciado</div>
              </div>
              <div className="p-3 sm:p-4 rounded-lg bg-gray-900/50 border border-gray-800 text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-400 mb-1">500%</div>
                <div className="text-xs text-gray-400">Crescimento e-commerce</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-xl border border-orange-500/20 bg-orange-500/5">
              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1 text-sm sm:text-base">Ortobom — 4 anos como Head de Performance</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Crescimento de 500% no e-commerce. Escala de R$250k para R$7M/mes em budget com ROAS e CAC saudaveis.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border border-blue-500/20 bg-blue-500/5">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1 text-sm sm:text-base">Elsevier EMEA — Operacao Internacional</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Interface entre Rio de Janeiro, Amsterda e Londres. +500% no e-commerce em 5 anos com Inbound, CRM e midia paga.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border border-green-500/20 bg-green-500/5">
              <div className="flex items-start gap-3">
                <Code className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1 text-sm sm:text-base">Este curso foi feito com Claude Code</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    A pagina que voce esta lendo, o blog, os scripts de automacao — tudo criado com as mesmas tecnicas que voce vai aprender. Sem contratar dev, sem saber programar.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border border-purple-500/20 bg-purple-500/5">
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1 text-sm sm:text-base">Certificado Claude Code 101 — Anthropic</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Certificacoes em GA4, GTM, Google AI Essentials e Growth Marketing. Mais de 40 clientes simultaneos ao longo da carreira.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
