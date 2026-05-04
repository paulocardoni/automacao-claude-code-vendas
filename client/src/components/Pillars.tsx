import { Zap, Code, BarChart3 } from "lucide-react";

export default function Pillars() {
  const pillars = [
    {
      icon: Zap,
      title: "IA Trabalhando 24/7",
      description: "Agentes de IA executam otimizações enquanto você dorme.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Code,
      title: "Scripts Prontos em Segundos",
      description: "Sem saber programar, você gera scripts complexos com um comando.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: BarChart3,
      title: "Relatórios Automáticos",
      description: "Dashboards que mostram o que funciona e o que não funciona.",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Os 3 Pilares Para <span className="text-orange-400">Ganhar Tempo</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">Tudo o que você precisa para automatizar e escalar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-lg sm:rounded-xl border border-gray-700 bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 rounded-lg sm:rounded-xl transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className={`inline-flex p-2 sm:p-3 rounded-lg bg-gradient-to-br ${pillar.color} mb-3 sm:mb-4`}>
                    <Icon className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {pillar.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {pillar.description}
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
