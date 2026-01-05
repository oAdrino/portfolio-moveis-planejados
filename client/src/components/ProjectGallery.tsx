import { useState } from 'react';
import { Card } from '@/components/ui/card';

/**
 * ProjectGallery Component
 * Design: Minimalist Modern - Masonry grid with category filters
 * Features: Responsive grid, hover effects, filter functionality
 */

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Cozinha Moderna',
    category: 'Cozinhas',
    image: '/images/hero-modern-kitchen.jpg',
    description: 'Cozinha integrada com móveis planejados em madeira natural',
  },
  {
    id: 2,
    title: 'Guarda-Roupa Elegante',
    category: 'Quartos',
    image: '/images/bedroom-wardrobe.jpg',
    description: 'Guarda-roupa personalizado com design minimalista',
  },
  {
    id: 3,
    title: 'Estante Sala',
    category: 'Salas',
    image: '/images/living-room-shelving.jpg',
    description: 'Estante de parede com design contemporâneo',
  },
  {
    id: 4,
    title: 'Home Office',
    category: 'Escritórios',
    image: '/images/home-office-desk.jpg',
    description: 'Espaço de trabalho funcional e elegante',
  },
  {
    id: 5,
    title: 'Banheiro Luxo',
    category: 'Banheiros',
    image: '/images/bathroom-vanity.jpg',
    description: 'Móvel de banheiro com acabamento premium',
  },
];

const categories = ['Todos', 'Cozinhas', 'Quartos', 'Salas', 'Escritórios', 'Banheiros'];

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">
            Nosso Portfólio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Conheça alguns dos nossos melhores trabalhos. Cada projeto é único e personalizado
            conforme as necessidades e preferências de cada cliente.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${
                index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative overflow-hidden bg-muted aspect-square md:aspect-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:brightness-95 transition-all duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                    <div className="w-full p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-200">{project.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Quer ver mais projetos? Entre em contato conosco!
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
}
