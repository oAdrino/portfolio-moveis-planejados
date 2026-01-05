export type ProjectCategory =
  | "Cozinhas"
  | "Quartos"
  | "Salas"
  | "Escritórios"
  | "Banheiros";

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  coverImage: string;
  images: string[];
  description: string;

  // opcionais (pra ficha técnica)
  location?: string;
  year?: number;
  materials?: string[];
  measures?: string[];
  tags?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "cozinha-moderna",
    title: "Cozinha Moderna",
    category: "Cozinhas",
    coverImage: "/images/hero-modern-kitchen.jpg",
    images: [
      "/images/hero-modern-kitchen.jpg",
      "/images/living-room-shelving.jpg",
      "/images/bedroom-wardrobe.jpg",
    ],
    description: "Cozinha integrada com móveis planejados em madeira natural",
    location: "Palhoça/SC",
    year: 2025,
    materials: ["MDF amadeirado", "Ferragens soft-close", "Puxador perfil"],
    measures: ["Aéreos alinhados", "Nicho micro-ondas", "Bancada funcional"],
    tags: ["Moderno", "Funcional"],
    featured: true,
  },
  {
    id: 2,
    slug: "guarda-roupa-elegante",
    title: "Guarda-Roupa Elegante",
    category: "Quartos",
    coverImage: "/images/bedroom-wardrobe.jpg",
    images: ["/images/bedroom-wardrobe.jpg"],
    description: "Guarda-roupa personalizado com design minimalista",
    year: 2024,
    featured: false,
  },
  {
    id: 3,
    slug: "estante-sala",
    title: "Estante Sala",
    category: "Salas",
    coverImage: "/images/living-room-shelving.jpg",
    images: ["/images/living-room-shelving.jpg"],
    description: "Estante de parede com design contemporâneo",
  },
  {
    id: 4,
    slug: "home-office",
    title: "Home Office",
    category: "Escritórios",
    coverImage: "/images/home-office-desk.jpg",
    images: ["/images/home-office-desk.jpg"],
    description: "Espaço de trabalho funcional e elegante",
  },
  {
    id: 5,
    slug: "banheiro-luxo",
    title: "Banheiro Luxo",
    category: "Banheiros",
    coverImage: "/images/bathroom-vanity.jpg",
    images: ["/images/bathroom-vanity.jpg"],
    description: "Móvel de banheiro com acabamento premium",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))];
