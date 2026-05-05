import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, X } from "lucide-react";

const HOTMART_URL = "https://pay.hotmart.com/P105267357Y?off=skjyhsxd&hotfeature=51";

/**
 * FloatingCTA Component
 * Botão flutuante que acompanha o usuário enquanto desce a página
 * Aparece após scroll de 500px
 * Design: Orange com animação de entrada
 */
export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o botão após 500px de scroll
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-slide-in-up">
      <div className="flex flex-col gap-2">
        <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className="block">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-subtle"
          >
            <Zap className="mr-2 h-4 w-4" />
            Comprar Agora
          </Button>
        </a>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-xs text-gray-400 hover:text-gray-300 transition-colors text-center"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
