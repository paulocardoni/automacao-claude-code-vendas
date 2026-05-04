import { Award, Briefcase, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Conheça quem criou o <span className="text-orange-400">conteúdo</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio Text */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Paulo Cardoni
              </h3>
              <p className="text-orange-400 font-semibold mb-6">
                Especialista em Automação Agêntica e Performance Digital
              </p>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Com mais de <span className="font-semibold text-white">18 anos de experiência</span> liderando operações de performance para grandes marcas e agências, consolidei minha trajetória transformando dados em crescimento exponencial de receita.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Hoje, atuo na fronteira entre o marketing estratégico e a tecnologia, especializando-me na implementação de <span className="font-semibold text-white">IA-Agents</span> e automação avançada para o mercado de mídia online. Meu foco é a automação de alta performance, utilizando ferramentas como Claude Code e Manus AI para codificar eficiência operacional onde outros ainda utilizam processos manuais.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Como especialista em Growth, desenvolvo fluxos que unem inteligência artificial e compra de mídia, permitindo que gestores de tráfego e profissionais de TI escalem resultados com precisão técnica e previsibilidade financeira.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                <div className="text-2xl font-bold text-orange-400 mb-1">18+</div>
                <div className="text-sm text-gray-400">Anos de Experiência</div>
              </div>
              <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                <div className="text-2xl font-bold text-orange-400 mb-1">300+</div>
                <div className="text-sm text-gray-400">Projetos Entregues</div>
              </div>
              <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                <div className="text-2xl font-bold text-orange-400 mb-1">$100M+</div>
                <div className="text-sm text-gray-400">Em Receita Gerada</div>
              </div>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-orange-500/20 bg-orange-500/5">
              <div className="flex items-start gap-4">
                <Briefcase className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Experiência em Grandes Marcas</h4>
                  <p className="text-gray-400 text-sm">
                    Liderou operações de performance para empresas Fortune 500 e agências de performance em escala global.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-blue-500/20 bg-blue-500/5">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Especialista em Growth</h4>
                  <p className="text-gray-400 text-sm">
                    Desenvolveu metodologias de automação que aumentaram ROI em até 300% para seus clientes.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-green-500/20 bg-green-500/5">
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Pioneiro em IA-Agents</h4>
                  <p className="text-gray-400 text-sm">
                    Um dos primeiros no Brasil a implementar Claude Code e Manus em operações de tráfego pago em escala.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5">
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0 flex items-center justify-center">
                  <span className="text-lg">🎓</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Educador e Mentor</h4>
                  <p className="text-gray-400 text-sm">
                    Este curso é simplicidade na prática: soluções validadas para quem busca dominar as ferramentas que estão redefinindo o futuro do marketing digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
