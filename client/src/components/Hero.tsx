import { useState } from "react";
import { CheckCircle, Lock, Zap, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY as string;
const LIST_ID = 2;

export default function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) {
      setMsg("Preencha nome e email.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          email: email.trim(),
          attributes: { FIRSTNAME: name.trim() },
          listIds: [LIST_ID],
          updateEnabled: true,
        }),
      });
      if (res.ok || res.status === 204) {
        setStatus("success");
        setMsg("");
      } else {
        const data = await res.json();
        if (data?.code === "duplicate_parameter") {
          setStatus("success");
        } else {
          setStatus("error");
          setMsg("Erro ao cadastrar. Tente novamente.");
        }
      }
    } catch {
      setStatus("error");
      setMsg("Erro de conexão. Tente novamente.");
    }
  };

  return (
    <section className="relative pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-16 md:pb-16 px-4 sm:px-6 md:px-8 overflow-hidden" role="region" aria-label="Secao principal">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">

          <div className="animate-slide-in-up order-2 md:order-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500/10 border border-orange-500/30 rounded-full w-fit">
              <span className="text-orange-400 font-bold text-xs sm:text-sm">FORMAÇÃO AGÊNTICA</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Pare de trabalhar <span className="text-orange-400">10 horas</span> no que o Claude Code faz em 10 minutos
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Relatórios, análises e otimizações de campanha no automático — sem saber programar, sem assinar mais uma ferramenta cara.
            </p>

            {status === "success" ? (
              <div className="p-5 rounded-xl bg-green-500/10 border border-green-500/30 text-center">
                <CheckCircle className="h-10 w-10 text-green-400 mx-auto mb-3" />
                <p className="text-green-400 font-bold text-lg mb-1">Você está na lista VIP!</p>
                <p className="text-gray-400 text-sm">Avisaremos você em primeira mão quando o Volume 2 abrir.</p>
              </div>
            ) : (
              <div id="lista-vip" className="flex flex-col gap-3 p-5 rounded-xl bg-gray-900/60 border border-orange-500/20">
                <p className="text-white font-bold text-sm sm:text-base flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-400" />
                  Entre na lista VIP do Volume 2
                </p>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
                {msg && <p className="text-red-400 text-xs">{msg}</p>}
                <Button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  {status === "loading" ? "ENVIANDO..." : "QUERO SER AVISADO PRIMEIRO"}
                </Button>
                <p className="text-xs text-gray-500 text-center">Sem spam. Apenas o aviso de abertura.</p>
              </div>
            )}

            <div className="flex flex-col gap-2 mt-4 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                <span>Lista 100% privada — seus dados não são compartilhados</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                <span>Acesso antecipado com condições exclusivas para a lista</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in order-1 md:order-2">
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl border border-orange-500/20">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/GVkxdiH29vQ?si=A0Ul21VVpSenRFWE"
                  title="Automacao com Claude Code"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
