import { useEffect, useState } from "react";
import { Zap, Shield } from "lucide-react";

const HOTMART_URL = "https://pay.hotmart.com/P105267357Y?off=skjyhsxd&hotfeature=51";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
        <div className="bg-gray-950 border-t border-orange-500/40 px-4 py-3">
          <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
            <button className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-sm py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200">
              <Zap className="h-4 w-4" />
              COMPRAR POR R$42,90
            </button>
          </a>
          <div className="flex items-center justify-center gap-1.5 mt-1.5">
            <Shield className="h-3 w-3 text-green-400" />
            <span className="text-xs text-green-400">7 dias de garantia total</span>
          </div>
        </div>
      </div>
      <div className="hidden sm:block fixed bottom-6 right-6 z-50">
        <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer">
          <button className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-sm px-6 py-4 rounded-xl shadow-2xl flex items-center gap-2 transition-all duration-200 animate-bounce">
            <Zap className="h-4 w-4" />
            COMPRAR AGORA - R$42,90
          </button>
        </a>
      </div>
    </>
  );
}
