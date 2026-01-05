import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

/**
 * Hero Component
 * Design: Minimalist Modern - Full-width image with overlay text
 * Features: Large typography, call-to-action, smooth scroll indicator
 */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-start overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-modern-kitchen.jpg)',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container flex flex-col justify-center h-full max-w-2xl">
        <div className="space-y-6">
          {/* Subtitle */}
          <p className="text-primary font-semibold text-sm tracking-widest uppercase">
            Transformando Ambientes
          </p>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Móveis Planejados com Excelência
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-100 max-w-xl font-light leading-relaxed">
            Projetos personalizados que combinam funcionalidade, estética e qualidade. Cada detalhe pensado para transformar seu espaço.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-base font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
}
