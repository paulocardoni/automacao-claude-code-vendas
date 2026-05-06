export default function TopBar() {
  const handleScroll = () => {
    const el = document.getElementById("pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2.5 px-4 text-center">
      <button
        onClick={handleScroll}
        className="inline-flex items-center gap-2 font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity"
      >
        <span>⚡</span>
        <span>
          <span className="hidden sm:inline">Oferta de lancamento — </span>
          <span className="font-bold">77 vagas por R$42,90</span>
          <span className="hidden sm:inline"> · depois sobe para R$127,90</span>
        </span>
        <span className="bg-white text-orange-600 font-bold text-xs px-2 py-0.5 rounded-full ml-1">
          GARANTIR →
        </span>
      </button>
    </div>
  );
}
