import { AlertCircle } from "lucide-react";

/**
 * Requirements Component
 * Seção que lista os 10 requisitos para fazer o curso
 * Otimizado para SEO e qualificação de leads
 * Design: Dark Mode + Laranja/Coral
 */
export default function Requirements() {
  const requirements = [
    {
      category: "Experiência em Mídia",
      title: "Domínio de Gestão de Mídia (Google/Meta Ads)",
      description: "Você deve entender a lógica de leilão, métricas (CPA, ROAS, LTV) e estrutura de campanhas. Não ensinamos a 'fazer anúncios', ensinamos a automatizá-los."
    },
    {
      category: "Perfil Profissional",
      title: "Gestor de Tráfego Sênior ou Dono de Agência",
      description: "Este curso é desenhado para quem gerencia verbas que justificam a automação e busca escalar a operação sem aumentar o head-count."
    },
    {
      category: "Mentalidade",
      title: "Mentalidade Code-First",
      description: "Disposição para sair da interface visual (o 'clica-clica' do gerenciador) e entrar no Terminal para ganhar velocidade industrial."
    },
    {
      category: "Conhecimento Técnico",
      title: "Não é Necessário Ser Programador",
      description: "Teremos suporte do Claude Code para gerar os scripts, mas você deve ter curiosidade técnica para configurar ferramentas e orquestrar fluxos lógicos."
    },
    {
      category: "Infraestrutura",
      title: "Infraestrutura Básica",
      description: "Um computador (Windows, Mac ou Linux) e acesso à internet. Ensinamos a instalação do Node.js e do ambiente de trabalho do zero no Módulo 1."
    },
    {
      category: "Contas e Acessos",
      title: "Conta Ativa na Anthropic (Claude)",
      description: "Necessário para utilizar o Claude Code e os modelos agênticos mais avançados do mercado."
    },
    {
      category: "Contas e Acessos",
      title: "Acesso a Contas de Anúncios (API)",
      description: "Para aplicar a Soberania Operacional, é ideal que você tenha acesso a contas onde possa gerar tokens de desenvolvedor (Developer Tokens)."
    },
    {
      category: "Objetivo",
      title: "Busca por Soberania de Performance",
      description: "Desejo de parar de 'vender horas' de trabalho manual e começar a vender Tecnologia de Performance e consultoria de AdTech de alto valor."
    },
    {
      category: "Interesse Técnico",
      title: "Interesse em Python e Engenharia de Dados",
      description: "Vontade de aprender como scripts Python podem auditar contas e gerar relatórios executivos de forma 100% autônoma."
    },
    {
      category: "Foco",
      title: "Foco em FinOps e Eficiência",
      description: "Mentalidade voltada para a proteção do orçamento do cliente e otimização de lances baseada em dados reais, não em intuição."
    }
  ];

  // Agrupar requisitos por categoria
  const groupedRequirements = requirements.reduce((acc, req) => {
    if (!acc[req.category]) {
      acc[req.category] = [];
    }
    acc[req.category].push(req);
    return acc;
  }, {} as Record<string, typeof requirements>);

  const categories = Object.keys(groupedRequirements);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-background border-t border-border">
      <div className="container">
        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
            <AlertCircle className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground">
                Requisitos Para o Curso
              </h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-3xl ml-0 sm:ml-8">
            Verifique se você atende aos critérios abaixo.
          </p>
        </div>

        {/* Requisitos em Grid Compacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="group relative bg-card/50 border border-border rounded p-3 sm:p-4 hover:border-orange-500/30 hover:bg-card transition-all duration-300"
            >
              {/* Categoria Badge */}
              <div className="inline-block mb-2 px-2 py-0.5 bg-orange-500/10 border border-orange-500/30 rounded text-xs font-semibold text-orange-500 uppercase tracking-wide">
                {req.category}
              </div>

              {/* Título */}
              <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-1 group-hover:text-orange-500 transition-colors line-clamp-2">
                {req.title}
              </h4>

              {/* Descrição */}
              <p className="text-xs text-muted-foreground leading-tight line-clamp-3">
                {req.description}
              </p>

              {/* Checkmark */}
              <div className="absolute top-3 right-3 h-4 w-4 rounded-full border-2 border-orange-500/30 group-hover:border-orange-500 group-hover:bg-orange-500/10 transition-all duration-300 flex items-center justify-center">
                <div className="h-1.5 w-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Warning Box */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-orange-500/5 border border-orange-500/20 rounded">
          <h4 className="text-base sm:text-lg font-semibold text-orange-500 mb-2 sm:mb-3">
            ⚠️ Importante
          </h4>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Curso avançado para profissionais. Se não atende aos requisitos, consolide sua base primeiro.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            Pronto para começar?
          </p>
          <a
            href="https://paulocardoni.hotmart.host/automacao-claude-code-trafego"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm rounded transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50"
          >
            Garantir Autonomia
            <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
