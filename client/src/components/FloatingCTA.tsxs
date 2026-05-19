import { useEffect, useState } from "react";
import { Mail, Shield } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const el = document.getElementById("lista-vip") || document.getElementById("pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
        <div className="bg-gray-950 border-t border-orange-500/40 px-4 py-3">
          <button
            onClick={handleClick}
            className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-sm py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
          >
            <Mail className="h-4 w-4" />
            ENTRAR NA LISTA VIP DO VOLUME 2
          </button>
          <div className="flex items-center justify-center gap-1.5 mt-1.5">
            <Shield className="h-3 w-3 text-green-400" />
            <span className="text-xs text-green-400">Sem spam — apenas o aviso de abertura</span>
          </div>
        </div>
      </div>

      <div className="hidden sm:block fixed bottom-6 right-6 z-50">
        <button
          onClick={handleClick}
          className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-sm px-6 py-4 rounded-xl shadow-2xl flex items-center gap-2 transition-all duration-200"
        >
          <Mail className="h-4 w-4" />
          LISTA VIP — VOLUME 2
        </button>
      </div>
    </>
  );
}
