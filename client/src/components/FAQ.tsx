import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "1",
    question: "Serve para iniciante?",
    answer:
      "Não. Este curso é para gestores de tráfego com experiência. Você precisa entender Google Ads e Meta Ads antes de automatizar. Se é iniciante, recomendo consolidar sua base primeiro.",
  },
  {
    id: "2",
    question: "O Google bane quem automatiza?",
    answer:
      "Não. Usamos as APIs oficiais do Google e Meta. Não violamos nenhum termo de serviço. Você está apenas automatizando o que já pode fazer manualmente.",
  },
  {
    id: "3",
    question: "O acesso é vitalício?",
    answer:
      "Sim. Uma vez comprado, você tem acesso vitalício ao material. Sem assinatura, sem renovação. Paga uma vez e é seu para sempre.",
  },
  {
    id: "4",
    question: "Tem suporte?",
    answer:
      "Sim. Você tem suporte por email durante 30 dias após a compra. Além disso, o material é bem estruturado e fácil de seguir. Qualquer dúvida, estou aqui.",
  },
  {
    id: "5",
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "Depende de você. Se seguir o curso corretamente, você começa a automatizar suas campanhas no primeiro módulo. Os resultados de performance aparecem em 2-4 semanas, dependendo do volume de tráfego.",
  },
  {
    id: "6",
    question: "Posso pedir reembolso?",
    answer:
      "Sim. Se não gostar, você tem 7 dias para pedir reembolso total, sem perguntas. Queremos que você tenha 100% de confiança na sua decisão.",
  },
];

export default function FAQ() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Dúvidas <span className="text-orange-400">Frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-gray-700 rounded px-3 sm:px-4 bg-gray-900/50 hover:bg-gray-900/80 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-white hover:text-orange-400 transition-colors py-2 sm:py-3 text-xs sm:text-sm">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed pt-1 pb-2 sm:pb-3 text-xs">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
