import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImg from '@/image/icon.jpeg';

/**
 * Header Component
 * Design: Minimalist Modern - Clean navigation with green-moss accent
 * Features: Responsive mobile menu, smooth transitions
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logo = (
    <img
      src={logoImg}
      alt="Pri Projetista Logo"
      className="h-10 w-10 object-cover scale-150"
    />
  )

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Sobre', href: '#about' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
            {logo}
          </div>
          <span className="text-lg font-semibold text-foreground hidden sm:inline">
            Pri Projetos
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <Button
          className="hidden md:flex bg-primary hover:bg-primary/90 text-white"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Solicitar Orçamento
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white mt-2"
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Solicitar Orçamento
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
