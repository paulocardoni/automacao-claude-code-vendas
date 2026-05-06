import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HOTMART_URL = "https://pay.hotmart.com/P105267357Y?off=skjyhsxd&hotfeature=51";

const faqs = [
  {
    id: "1",
    question: "Preciso saber programar para fazer o curso?",
    answer: "Nao. Este curso foi criado por um gestor de trafego, para gestores de trafego. Voce recebe os comandos prontos — e aprender a usar o Claude Code e parte do conteudo. Se voce sabe abrir um terminal e copiar um texto, voce consegue.",
  },
  {
    id: "2",
    question: "Serve para iniciante em trafego pago?",
    answer: "Nao. Voce precisa ja operar campanhas no dia a dia — seja Google Ads, Meta Ads ou ambos. O curso ensina a automatizar o que voce ja faz, nao a comecar do zero em midia paga.",
  },
  {
    id: "3",
    question: "O Google ou Meta podem banir minha conta por usar automacao?",
    answer: "Nao. Usamos exclusivamente as APIs oficiais do Google e do Meta — as mesmas que ferramentas como Optmyzr e Adveronix usam. Voce nao viola nenhum termo de servico. Voce esta apenas automatizando o que ja pode fazer manualmente.",
  },
  {
    id: "4",
    question: "Em quanto tempo vejo resultado?",
    answer: "No primeiro modulo voce ja consegue rodar sua primeira automacao. Resultados praticos de economia de tempo aparecem na primeira semana. Impacto em performance de campanha varia conforme volume, mas gestores relatam de 2 a 4 semanas para sentir diferenca.",
  },
  {
    id: "5",
    question: "O acesso e vitalicio?",
    answer: "Sim. Paga uma vez e o conteudo e seu para sempre. Sem mensalidade, sem renovacao, sem surpresa na fatura.",
  },
  {
    id: "6",
    question: "Tem suporte se eu travar em algo?",
    answer: "Sim. Voce tem suporte por email por 30 dias apos a compra. O material foi estruturado para ser autoexplicativo, mas se travar em qualquer etapa, estou disponivel para ajudar.",
  },
  {
    id: "7",
    question: "E se eu nao gostar?",
    answer: "7 dias de garantia total sem perguntas. E politica da Hotmart — voce solicita o reembolso direto pela plataforma e recebe de volta. Sem burocracia, sem precisar justificar.",
  },
  {
    id: "8",
    question: "Por que o preco vai subir?",
    answer: "Este e o preco de lancamento para os primeiros 100 alunos. Quando essas vagas acabarem, o valor passa para R$127,90 — que e o preco definitivo do curso. Nao e gatilho falso: e a forma que escolhi de recompensar quem entra cedo.",
  },
];

export default function FAQ() {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Ainda tem <span className="text-orange-400">duvidas?</span>
          </h2>
          <p className="text-sm text-gray-400">As perguntas que mais chegam antes da compra</p>
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
          <p className="text-white font-bold text-base sm:text-lg mb-1">
            Ainda ficou alguma duvida?
          </p>
          <p className="text-gray-400 text-sm mb-4">
            Manda um email antes de comprar — respondo pessoalmente.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="mailto:atendimento.claudetrafego@gmail.com"
              className="text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors"
            >
              atendimento.claudetrafego@gmail.com
            </a>
            <span className="hidden sm:block text-gray-600">·</span>
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-3 rounded-lg transition-all duration-200 active:scale-95"
            >
              GARANTIR MINHA VAGA AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
