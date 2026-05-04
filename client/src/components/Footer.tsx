import { Twitter, Instagram, Music } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Automação <span className="text-orange-400">Claude Code</span>
            </h3>
            <p className="text-gray-400 text-sm">
              A primeira formação em Inteligência Agêntica para Gestores de Performance no Brasil.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/blog" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="mailto:atendimento.claudetrafego@gmail.com" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Informações</h4>
            <p className="text-gray-400 text-sm mb-2">
              CNPJ: 14.355.238/0001-44
            </p>
            <p className="text-gray-400 text-sm">
              Este produto não garante resultados. O sucesso depende da aplicação das estratégias.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://x.com/IA_para_GDT" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://www.instagram.com/claudecodegtt/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@claudecodegtt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
              <Music size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm text-center">
            Copyright © {currentYear} Automação com Claude Code. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
