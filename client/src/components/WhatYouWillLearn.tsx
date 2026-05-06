import { CheckCircle2, Zap } from "lucide-react";

const HOTMART_URL = "https://pay.hotmart.com/P105267357Y?off=skjyhsxd&hotfeature=51";

const learnings = [
  {
    title: "Relatórios automáticos em minutos",
    description: "O que Você faz em 3 horas no Excel, o Claude faz em 3 minutos. Dashboards de performance prontos para o cliente sem tocar numa planilha."
  },
  {
    title: "Campanhas no piloto automático",
    description: "Pausas, ajustes de lance e duplicações sem abrir o Ads Manager. Use MCP conectado direto nas APIs do Google e Meta."
  },
  {
    title: "páginas e ferramentas sem dev",
    description: "Crie landing pages, scripts e ferramentas internas com Claude Code. Sem contratar ninguém, sem esperar dias de aprovação."
  },
  {
    title: "Auditoria de contas com IA",
    description: "Detecte automaticamente onde o orçamento está vazando — palavras-chave ineficientes, lances fora de meta, públicos saturados."
  },
  {
    title: "Agentes rodando 24/7 na nuvem",
    description: "Suba seus agentes em VPS e deixe a automação rodando mesmo com o computador desligado. Operação sem parar."
  },
  {
    title: "Planejamento e organização com IA",
    description: "Monte planos de mídia, priorize tarefas e organize a Operação da agência com agentes que entendem o contexto do seu negócio."
  },
];

export default function WhatYouWillLearn() {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            O que Você vai <span className="text-orange-400">conseguir fazer</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            não e lista de aulas. É o que muda na sua rotina na semana que Você começar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {learnings.map((item, i) => (
            <div key={i} className="group p-4 sm:p-5 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-orange-500/40 hover:bg-gray-900/80 transition-all duration-300">
              <CheckCircle2 className="h-5 w-5 text-orange-400 mb-3 flex-shrink-0" />
              <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-lg transition-all duration-200">
              <Zap className="h-4 w-4" />
              QUERO APRENDER ISSO AGORA
            </button>
          </a>
          <p className="text-xs text-gray-500 mt-2">77 vagas com preço de lançamento — R$42,90</p>
        </div>
      </div>
    </section>
  );
}
