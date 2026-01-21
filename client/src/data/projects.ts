export type ProjectCategory =
  | "Cozinhas"
  | "Quartos"
  | "Salas"
  | "Comerciais"
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
    slug: "cozinhas-1",
    title: "Cozinha Moderna",
    category: "Cozinhas",
    coverImage: "/images/cozinhas/cozinha (1).jpeg",
    images: [
      "/images/cozinhas/cozinha (1).jpeg",
      "/images/cozinhas/cozinha (2).jpeg",
      "/images/cozinhas/cozinha (3).jpeg",
      "/images/cozinhas/cozinha (4).jpeg",
      "/images/cozinhas/cozinha (5).jpeg",
      "/images/cozinhas/cozinha (6).jpeg",
      "/images/cozinhas/cozinha (7).jpeg",
      "/images/cozinhas/cozinha (8).jpeg",
      "/images/cozinhas/cozinha (9).jpeg",
    ],
    description: "Cozinha integrada com móveis planejados",
    featured: true,
  },
  {
    id: 2,
    slug: "quartos-1",
    title: "Quartos Elegantes",
    category: "Quartos",
    coverImage: "/images/quartos/quartos (1).jpeg",
    images: [
      "/images/quartos/quartos (1).jpeg",
      "/images/quartos/quartos (2).jpeg",
      "/images/quartos/quartos (3).jpeg",
      "/images/quartos/quartos (4).jpeg",
      "/images/quartos/quartos (5).jpeg",
      "/images/quartos/quartos (6).jpeg",
      "/images/quartos/quartos (7).jpeg",
    ],
    description: "Quartos personalizados com designs minimalistas",
    featured: true,
  },
  {
    id: 3,
    slug: "salas-1",
    title: "Estante Sala",
    category: "Salas",
    coverImage: "/images/salas/salas (1).jpeg",
    images: [
      "/images/salas/salas (1).jpeg",
      "/images/salas/salas (2).jpeg",
      "/images/salas/salas (3).jpeg",
    ],
    description: "Estante de parede com design contemporâneo",
  },
  {
    id: 4,
    slug: "comerciais-1",
    title: "Móveis Comerciais",
    category: "Comerciais",
    coverImage: "/images/comerciais/comerciais (1).jpeg",
    images: [
      "/images/comerciais/comerciais (1).jpeg",
      "/images/comerciais/comerciais (2).jpeg",
      "/images/comerciais/comerciais (3).jpeg",
      "/images/comerciais/comerciais (4).jpeg",
      "/images/comerciais/comerciais (5).jpeg",
      "/images/comerciais/comerciais (6).jpeg",
      "/images/comerciais/comerciais (7).jpeg",
      "/images/comerciais/comerciais (8).jpeg",
      "/images/comerciais/comerciais (9).jpeg",
      "/images/comerciais/comerciais.jpeg",
    ],
    description: "Soluções em móveis planejados para ambientes comerciais",
  },
  {
    id: 5,
    slug: "banheiros-1",
    title: "Banheiro Luxo",
    category: "Banheiros",
    coverImage: "/images/banheiros/banheiros (1).jpeg",
    images: [
      "/images/banheiros/banheiros (1).jpeg",
      "/images/banheiros/banheiros (2).jpeg",
      "/images/banheiros/banheiros (3).jpeg",
      "/images/banheiros/banheiros (4).jpeg",
      "/images/banheiros/banheiros (5).jpeg",
      "/images/banheiros/banheiros (6).jpeg",
      "/images/banheiros/banheiros (7).jpeg",
    ],
    description: "Móvel de banheiro com acabamento premium",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))];
