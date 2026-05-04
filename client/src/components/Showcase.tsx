export default function Showcase() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            O que você vai <span className="text-orange-400">comandar</span>
          </h2>
          <p className="text-xl text-gray-400">Veja a IA analisando 500 grupos de anúncios em 4 segundos</p>
        </div>

        <div className="relative rounded-xl overflow-hidden border border-blue-500/30 bg-gradient-to-b from-gray-900 to-gray-950 shadow-2xl">
          {/* Terminal-like header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-950 border-b border-gray-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-gray-500 ml-4">claude-code-automation.sh</span>
          </div>

          {/* Terminal content */}
          <div className="p-8 font-mono text-sm">
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-green-400">$</span>
                <span className="text-blue-400">claude-code</span>
                <span className="text-gray-400">--analyze-ads --accounts 500 --optimize</span>
              </div>

              <div className="mt-6 text-xs text-gray-500">
                <div className="mb-2">[Status] Connected to Google Ads API & Meta Marketing API (v5)</div>
                <div className="mb-2">[Status] Analyzing Google Ads Accounts: 123-456-789... [DONE]</div>
                <div className="mb-2">[Status] Analyzing Meta Ads Accounts: 987-654-321... [DONE]</div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="text-green-400">✓ Auditorias de 500 Ad Sets: Processadas em 4 segundos</div>
                <div className="text-green-400">✓ Padrões de desperdício identificados: 247 oportunidades</div>
                <div className="text-green-400">✓ Ajustes de lance recomendados: 1,234 ações</div>
                <div className="text-green-400">✓ Criativos com baixo desempenho: 89 para pausar</div>
              </div>

              <div className="mt-6 text-orange-400">
                <div className="mb-2">[Execution] Aplicando otimizações automáticas...</div>
                <div className="mb-2">[Success] 1,234 ajustes executados com sucesso</div>
                <div className="mb-2">[Result] ROI estimado: +23% em 48 horas</div>
              </div>

              <div className="mt-6 text-blue-400">
                <div>Próxima execução: Em 6 horas (ou quando gatilhos forem acionados)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {[
            { label: "Grupos de Anúncios Analisados", value: "500+" },
            { label: "Tempo de Processamento", value: "4 seg" },
            { label: "Oportunidades Identificadas", value: "247" },
            { label: "Aumento de ROI", value: "+23%" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-lg bg-gray-900/50 border border-gray-800">
              <div className="text-3xl font-bold text-orange-400 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
