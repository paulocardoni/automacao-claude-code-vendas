import { useState } from "react";
import { Shield, Zap, Lock, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY as string;
const LIST_ID = 2;

export default function Pricing() {
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
    <section id="pricing" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-transparent to-orange-500/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Carrinho <span className="text-orange-400">Fechado</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-gray-400">As vagas do Volume 1 foram preenchidas. O Volume 2 está em produção.</p>
        </div>

        <div className="relative rounded-lg border border-orange-500/30 bg-gradient-to-br from-gray-900 to-gray-950 p-4 sm:p-6 md:p-10 shadow-2xl">
          <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-800 text-orange-400 font-bold rounded-full text-xs border border-orange-500/30">
              <Lock className="h-3 w-3" />
              VAGAS ESGOTADAS — VOLUME 2 EM BREVE
            </div>
          </div>

          {status === "success" ? (
            <div className="py-10 text-center">
              <CheckCircle className="h-14 w-14 text-green-400 mx-auto mb-4" />
              <p className="text-green-400 font-bold text-xl mb-2">Você está na lista VIP!</p>
              <p className="text-gray-400 text-sm max-w-sm mx-auto">Avisaremos você em primeira mão quando o Volume 2 abrir — com condições exclusivas para quem está na lista.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6 mt-4">
                <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                  O <span className="text-white font-semibold">Formação Agêntica Volume 1</span> teve suas vagas preenchidas. O Volume 2 está sendo preparado com conteúdo ainda mais avançado.
                </p>
                <p className="text-orange-400 font-semibold mt-3 text-sm sm:text-base">
                  Quem está na lista VIP recebe oferta exclusiva antes da abertura ao público.
                </p>
              </div>

              <div className="flex flex-col gap-3 mb-6">
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
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-base py-3 sm:py-5 rounded-lg"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  {status === "loading" ? "ENVIANDO..." : "ENTRAR NA LISTA VIP DO VOLUME 2"}
                </Button>
                <p className="text-xs text-gray-500 text-center">Sem spam. Apenas o aviso de abertura com condições exclusivas.</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 py-4 border-t border-gray-800">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  <span>Lista 100% privada</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  <span>Oferta exclusiva para inscritos</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  <span>Cancele quando quiser</span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-800/30 border border-gray-700">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">Já tem o Volume 1?</h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Acesse sua conta na <span className="text-orange-400 font-semibold">Hotmart</span> para continuar seus estudos. O Volume 2 será uma formação complementar e avançada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
