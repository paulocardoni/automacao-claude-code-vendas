import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "1",
    question: "O curso ainda está disponível para compra?",
    answer: "As vagas do Volume 1 foram preenchidas e o carrinho está fechado. O Volume 2 está em desenvolvimento com conteúdo ainda mais avançado. Entre na lista VIP para ser avisado em primeira mão quando abrir.",
  },
  {
    id: "2",
    question: "Qual a diferença entre o Volume 1 e o Volume 2?",
    answer: "O Volume 1 cobre os fundamentos da automação com Claude Code para gestores de tráfego — relatórios, campanhas e análises. O Volume 2 será uma formação avançada focada em sistemas multiagentes, integração com MCPs e construção de ecossistemas de automação completos para agências.",
  },
  {
    id: "3",
    question: "Preciso ter feito o Volume 1 para fazer o Volume 2?",
    answer: "Recomendamos, mas não é obrigatório. O Volume 2 terá módulos introdutórios que permitem a gestores experientes iniciarem diretamente. Detalhes serão divulgados para quem está na lista VIP.",
  },
  {
    id: "4",
    question: "Preciso saber programar para fazer o curso?",
    answer: "Não. Este curso foi criado por um gestor de tráfego, para gestores de tráfego. Você recebe os comandos prontos e aprende a usar o Claude Code do zero — se sabe abrir um terminal e copiar um texto, consegue.",
  },
  {
    id: "5",
    question: "Qual o prazo para lançar o Volume 2?",
    answer: "Ainda não temos uma data definida. Quem está na lista VIP será avisado em primeira mão e terá acesso a condições exclusivas de lançamento antes da abertura ao público geral.",
  },
  {
    id: "6",
    question: "Já tenho o Volume 1. Como acesso?",
    answer: "Acesse sua conta na Hotmart com o email usado na compra. Seu acesso ao Volume 1 é vitalício — sem prazo de expiração.",
  },
  {
    id: "7",
    question: "Como entrar na lista VIP?",
    answer: "Basta preencher o formulário com seu nome e email nesta página. Você receberá um email de confirmação e será avisado assim que o Volume 2 abrir — com condições exclusivas para quem está na lista.",
  },
];

export default function FAQ() {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Ainda tem <span className="text-orange-400">dúvidas?</span>
          </h2>
          <p className="text-sm text-gray-400">As perguntas que mais chegam</p>
        </div>

        <Accordion type="single" collapsible className="space-y-2 sm:space-y-3 mb-10">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-gray-700 rounded-lg px-4 bg-gray-900/50 hover:bg-gray-900/80 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-white hover:text-orange-400 transition-colors py-3 text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed pb-3 text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center p-6 rounded-xl border border-orange-500/20 bg-orange-500/5">
          <p className="text-white font-bold text-base sm:text-lg mb-1">Ficou alguma dúvida?</p>
          <p className="text-gray-400 text-sm mb-3">Fala com a gente por email.</p>
          <a
            href="mailto:atendimento.claudetrafego@gmail.com"
            className="text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors"
          >
            atendimento.claudetrafego@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
