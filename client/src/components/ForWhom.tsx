import { CheckCircle, XCircle } from "lucide-react";

const HOTMART_URL = "https://pay.hotmart.com/P105267357Y?off=skjyhsxd&hotfeature=51";

export default function ForWhom() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Este curso e <span className="text-orange-400">para voce</span> se...
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Reconhece alguma dessas situacoes no seu dia a dia?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14">
          {/* Para quem E */}
          <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5 sm:p-7">
            <h3 className="text-base sm:text-lg font-bold text-green-400 mb-5 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              E para voce se...
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base">
                  Voce passa horas montando relatorios de campanha que deveriam levar minutos
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base">
                  Voce depende de webdesigner ou dev para subir uma landing page — e espera dias
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base">
                  Voce sobe campanhas no braco — pausas, ajustes de lance, duplicacoes — e sabe que da para automatizar
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base">
                  Voce quer usar IA no trabalho mas nao sabe por onde comecar sem virar programador
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base">
                  Voce gerencia Google Ads ou Meta Ads e sente que perde tempo em tarefas operacionais que nao geram estrategia
                </p>
              </li>
            </ul>
          </div>

          {/* Para quem NAO E */}
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 sm:p-7">
            <h3 className="text-base sm:text-lg font-bold text-red-400 mb-5 flex items-center gap-2">
              <XCircle className="h-5 w-5" />
              Nao e para voce se...
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm sm:text-base">
                  Voce e iniciante em trafego pago e ainda nao opera campanhas no dia a dia
                </p>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm sm:text-base">
                  Voce quer uma solucao magica sem dedicar tempo para aprender e aplicar
                </p>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm sm:text-base">
                  Voce ja domina automacao com IA e trabalha com MCPs integrados as plataformas de midia
                </p>
              </li>
            </ul>

            <div className="mt-6 p-3 sm:p-4 rounded-lg bg-gray-900/60 border border-gray-700">
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                <span className="text-white font-semibold">Requisito minimo:</span> ter experiencia pratica com Google Ads ou Meta Ads. Voce nao precisa saber programar — precisa conhecer o mercado que vai automatizar.
              </p>
            </div>
          </div>
        </div>

        {/* CTA de reforco */}
        <div className="text-center">
          <p className="text-gray-400 text-sm sm:text-base mb-4">
            Se voce se reconheceu no lado verde, o proximo passo e garantir sua vaga enquanto o preco de lancamento ainda esta ativo.
          </p>
          <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-lg transition-all duration-200">
              QUERO MINHAS 10 HORAS DE VOLTA
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
