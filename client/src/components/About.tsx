import { Check } from 'lucide-react';

/**
 * About Component
 * Design: Minimalist Modern - Asymmetric layout with image and text
 * Features: Professional presentation, key highlights, process overview
 */

export default function About() {
  const highlights = [
    'Projetos personalizados com design exclusivo',
    'Materiais de alta qualidade',
    'Atendimento dedicado do início ao fim',
    'Prazos respeitados e garantia de satisfação',
    'Consultoria gratuita de design',
  ];

  const process = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Entendemos suas necessidades, espaço e preferências estéticas',
    },

    {
      step: '02',
      title: 'Produção',
      description: 'Fabricação com materiais premium e acabamento perfeito',
    },
    {
      step: '03',
      title: 'Instalação',
      description: 'Montagem profissional e ajustes finais no seu espaço',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        {/* Main About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-lg"></div>
              <img
                src="/images/bedroom-wardrobe.jpg"
                alt="Projeto de móvel planejado"
                className="relative w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              Sobre Nós
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transformando Espaços em Soluções
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Com mais de uma década de experiência em design de interiores e móveis planejados,
              nossa missão é criar espaços funcionais e belos que refletem a personalidade e
              necessidades de cada cliente.
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20 pt-20 border-t border-border">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              Nosso Processo
            </p>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground">
              Do Conceito à Realidade
            </h3>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="mb-6">
                  <span className="text-6xl font-bold text-primary/10">{item.step}</span>
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
