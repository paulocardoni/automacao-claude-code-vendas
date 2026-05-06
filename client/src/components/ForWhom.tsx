import { CheckCircle } from "lucide-react";

export default function ForWhom() {
  const items = [
    "Você passa horas montando relatórios que deveriam levar minutos",
    "Você depende de dev ou webdesigner para subir uma página — e espera dias",
    "Você sobe campanhas no braço: pausas, ajustes de lance, duplicações",
    "Você quer usar IA no trabalho mas não sabe por onde começar sem virar programador",
    "Você gerencia Google Ads ou Meta Ads e perde tempo em tarefas que não geram estratégia",
    "Você quer ser o gestor que entrega mais — sem contratar mais pessoas",
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-transparent to-orange-500/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Este curso e para Você se <span className="text-orange-400">com algum desses pontos</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Um já é motivo suficiente para mudar sua rotina.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-orange-500/30 transition-colors">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300 text-sm sm:text-base leading-snug">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
          <p className="text-sm sm:text-base text-gray-300">
            <span className="text-white font-semibold">Requisito mínimo:</span> ter experiência prática com Google Ads ou Meta Ads. Você não precisa saber programar.
          </p>
        </div>
      </div>
    </section>
  );
}
