/**
 * Footer Component
 * Design: Minimalist Modern - Clean footer with essential information
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-bold">PP</span>
              </div>
              <span className="font-semibold">Pri Projetista</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformando ambientes com design, qualidade e excelência em cada projeto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="tel:+5548984650120" className="hover:text-primary transition-colors">
                  (48) 98465-0120
                </a>
              </li>
              <li>
                <a
                  href="mailto:priprojetista@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  PriProjetista@gmail.com
                </a>
              </li>
              <li className="text-gray-400">Balneário Piçarras, SC</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>&copy; {currentYear} Pri Projetos. Desenvolvido por Adriano melo.</p>
          <p>Desenvolvido com ❤️ para transformar espaços</p>
        </div>
      </div>
    </footer>
  );
}
