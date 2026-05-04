import { Code2, ShieldCheck } from "lucide-react";

/**
 * ObjectionKiller Component
 * Seção que elimina as principais objeções de compra
 * Design: Dark Mode + Verde para confiança
 */
export default function ObjectionKiller() {
  const objections = [
    {
      icon: Code2,
      title: "Não precisa saber programar",
      description: "Eu te dou os comandos prontos. Você só copia e cola no terminal.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: ShieldCheck,
      title: "Google não bane",
      description: "Usamos APIs oficiais. Sem risco, sem violação de termos.",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-orange-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            As Dúvidas Que Mais <span className="text-orange-400">Travam a Venda</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">Respondidas de forma clara</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {objections.map((objection, index) => {
            const Icon = objection.icon;
            return (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-lg sm:rounded-xl border border-gray-700 bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${objection.color} opacity-0 group-hover:opacity-5 rounded-lg sm:rounded-xl transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className={`inline-flex p-2 sm:p-3 rounded-lg bg-gradient-to-br ${objection.color} mb-3 sm:mb-4`}>
                    <Icon className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {objection.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {objection.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
