import { CheckCircle2 } from "lucide-react";

/**
 * WhatYouWillLearn Component
 * Seção que destaca os 8 principais aprendizados do curso
 * Otimizado para SEO e conversão
 * Design: Dark Mode + Laranja/Coral
 */
export default function WhatYouWillLearn() {
  const learnings = [
    {
      title: "Domine o Claude Code e Agentes de IA",
      description: "Gerir Google e Meta Ads com precisão industrial, garantindo previsibilidade de resultados e ROI executivo."
    },
    {
      title: "Protocolo MCP e Queries GAQL",
      description: "Conecte o Claude às APIs oficiais, extraindo dados em tempo real para automações de alta performance e escala."
    },
    {
      title: "Scripts e Agentes em VPS na Nuvem",
      description: "Rode operações 24/7, garantindo que sua gestão de tráfego nunca pare, mesmo com seu computador desligado."
    },
    {
      title: "Elimine o Operacional Braçal",
      description: "Orquestre estratégias de Growth que escalam o faturamento e reduzem o CPA de forma automatizada."
    },
    {
      title: "Scripts Python para Auditoria",
      description: "Crie ferramentas personalizadas para detectar anomalias e erros que drenam o orçamento dos seus clientes."
    },
    {
      title: "Relatórios C-Level Automatizados",
      description: "Gere dashboards complexos de performance, economizando horas semanais e impressionando clientes com dados."
    },
    {
      title: "Fluxos de FinOps em Tráfego Pago",
      description: "Monitore gastos e otimize lances automaticamente com base em metas de lucro real (LTV/CAC)."
    },
    {
      title: "Segurança e Engenharia de Automação",
      description: "Blindar sua operação com boas práticas de segurança de dados, tokens e .claudeignore em AdTech."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-background to-background/80">
      <div className="container">
        {/* Header */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            O Que Você Aprenderá
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl">
            Domine as ferramentas e estratégias que estão redefinindo o futuro da automação em marketing digital.
          </p>
        </div>

        {/* Grid de Aprendizados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {learnings.map((learning, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
            >
              {/* Ícone */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 text-orange-500 flex-shrink-0" />
                </div>

                {/* Conteúdo */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-orange-500 transition-colors">
                    {learning.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {learning.description}
                  </p>
                </div>
              </div>

              {/* Gradient Background (hover effect) */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Pronto para transformar sua gestão de tráfego?
          </p>
          <a
            href="https://pay.hotmart.com/P105267357Y?off=skjyhsxd&hotfeature=51"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
          >
            Garantir Minha Autonomia
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
