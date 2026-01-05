# Brainstorming de Design - Portfólio de Móveis Planejados

## Abordagem 1: Minimalismo Moderno com Foco Fotográfico
**Design Movement:** Contemporary Minimalism
**Probabilidade:** 0.08

### Core Principles
- **Fotografia como protagonista:** As imagens dos projetos ocupam espaço generoso, sem competição visual
- **Tipografia clara e hierárquica:** Apenas 2 fontes, muita respiração entre elementos
- **Paleta neutra com destaque:** Tons de cinza, branco e um acento em verde-musgo ou azul profundo
- **Grid assimétrico:** Galeria com tamanhos variados de cards para criar dinamismo sem poluição

### Color Philosophy
- **Background:** Branco puro (ou off-white #f8f8f8) para máxima clareza
- **Texto principal:** Cinza escuro (#1a1a1a)
- **Acento:** Verde-musgo (#4a6741) para botões e destaques - transmite natureza, sofisticação
- **Bordas/Separadores:** Cinza muito claro (#e5e5e5)

### Layout Paradigm
- Hero com imagem full-width + overlay de texto à esquerda
- Galeria em masonry grid (não uniforme) para quebrar monotonia
- Seções com alinhamento assimétrico: conteúdo à esquerda, imagem à direita (alternando)
- Muito espaço em branco entre seções

### Signature Elements
- Linhas verticais finas como divisores entre seções
- Cards com hover sutil (apenas mudança de sombra, sem zoom)
- Tipografia em maiúsculas para títulos de seção (impacto visual)

### Interaction Philosophy
- Transições suaves (300ms) em hover
- Sem animações excessivas - foco em clareza
- Botões com underline que aparece no hover

### Animation
- Fade-in suave ao scroll (opacity 0 → 1, 600ms)
- Hover em imagens: brightness ligeiramente reduzido (95%) com transição suave
- Botões: underline desliza da esquerda para direita no hover

### Typography System
- **Display:** Playfair Display (serif, bold) para títulos principais
- **Body:** Inter (sans-serif, regular/medium) para textos
- **Hierarchy:** Títulos em 48px, subtítulos em 24px, corpo em 16px

---

## Abordagem 2: Elegância Contemporânea com Gradientes Sutis
**Design Movement:** Contemporary Luxury
**Probabilidade:** 0.07

### Core Principles
- **Sofisticação através de gradientes:** Gradientes suaves (não vibrantes) como pano de fundo
- **Tipografia em contraste:** Fontes modernas com pesos variados para criar ritmo
- **Profundidade com sombras:** Sombras mais pronunciadas para criar camadas visuais
- **Espaçamento generoso:** Muito ar entre elementos, criando sensação de luxo

### Color Philosophy
- **Background base:** Gradiente sutil de branco para cinza muito claro (quase imperceptível)
- **Texto:** Preto profundo (#0f0f0f) com cinza médio (#666) para secundário
- **Acento primário:** Dourado/ouro (#d4a574) para elementos premium
- **Acento secundário:** Azul-marinho (#1a3a52) para contraste
- **Gradientes decorativos:** Gradientes suaves em cards (branco → cinza claro)

### Layout Paradigm
- Hero com imagem grande + texto overlay com fundo semi-transparente
- Cards em grid 3 colunas com sombras pronunciadas
- Seções alternadas: fundo claro/escuro para criar ritmo
- Sidebar decorativa com padrão geométrico sutil

### Signature Elements
- Pequenos ícones geométricos (círculos, linhas) como decoração
- Cards com canto superior com acento em ouro
- Separadores com gradiente suave

### Interaction Philosophy
- Hover em cards: elevação (box-shadow aumenta) + cor de fundo muda
- Botões com gradiente sutil que muda no hover
- Transições mais longas (400ms) para sensação de luxo

### Animation
- Fade-in com slide suave ao scroll (entrada pela esquerda/direita)
- Hover em cards: elevação com sombra mais pronunciada (transform: translateY(-4px))
- Botões: gradiente desliza no hover (background-position)

### Typography System
- **Display:** Montserrat (sans-serif, bold/700) para títulos
- **Body:** Lato (sans-serif, regular/400) para textos
- **Accent:** Playfair Display (serif) para destaques especiais
- **Hierarchy:** Títulos em 52px, subtítulos em 28px, corpo em 16px

---

## Abordagem 3: Design Artesanal com Toque Orgânico
**Design Movement:** Organic Modernism
**Probabilidade:** 0.06

### Core Principles
- **Formas orgânicas e naturais:** Bordas arredondadas generosas, shapes irregulares
- **Paleta terrosa e natural:** Tons de terra, verde, marrom - remetendo à natureza e sustentabilidade
- **Tipografia warm e acessível:** Fontes com personalidade, menos corporativa
- **Texturas visuais:** Padrões sutis, ruído, texturas que remetem a materiais naturais

### Color Philosophy
- **Background:** Bege quente (#faf6f1) ou creme (#f5f1eb)
- **Texto:** Marrom profundo (#3d2817)
- **Acento primário:** Verde-terra (#6b8e5f) para botões e destaques
- **Acento secundário:** Terracota (#c85a3a) para ênfase
- **Detalhes:** Tons de ouro suave (#c9a961)

### Layout Paradigm
- Hero com imagem + overlay com forma orgânica (não retangular)
- Cards com bordas arredondadas (border-radius: 32px+)
- Seções com formas onduladas como divisores (SVG waves)
- Layout assimétrico com elementos flutuantes

### Signature Elements
- Formas blob/orgânicas como decoração
- Padrão de folhas ou linhas onduladas como background sutil
- Cards com pequena ilustração ou ícone orgânico no canto

### Interaction Philosophy
- Hover em cards: rotação leve (2-3 graus) + elevação suave
- Botões com forma orgânica (não retangular)
- Transições naturais e fluidas (500ms+)

### Animation
- Fade-in com scale suave ao scroll (começando em 95%, indo para 100%)
- Hover em cards: rotação leve + elevação (transform: rotate(1deg) translateY(-6px))
- Elementos flutuam levemente (animation: float 3s ease-in-out infinite)

### Typography System
- **Display:** Poppins (sans-serif, bold/600) para títulos - mais amigável
- **Body:** Nunito (sans-serif, regular/400) - warm e acessível
- **Accent:** Playfair Display (serif) para destaques
- **Hierarchy:** Títulos em 48px, subtítulos em 24px, corpo em 16px

---

## Decisão Final
Vou seguir com a **Abordagem 1: Minimalismo Moderno com Foco Fotográfico** porque:
- Maximiza o impacto visual das imagens dos projetos (o ativo principal)
- Transmite profissionalismo e sofisticação
- Mantém foco no conteúdo (móveis) sem distrações
- Escalável e fácil de manter
- Verde-musgo é uma cor elegante e diferenciada que não é genérica
