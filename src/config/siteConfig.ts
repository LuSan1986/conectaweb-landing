// =============================================================================
// CONFIGURAÇÃO CENTRAL DO SITE — ConectaWeb
// Edite este arquivo para atualizar textos, contatos, portfólio, depoimentos
// e oferta. A maior parte do site é renderizada a partir daqui.
// =============================================================================

export const company = {
  name: 'ConectaWeb',
  tagline: 'Sites profissionais para o seu negócio',
  domain: 'conectawebbr.com.br',
  email: 'contato@conectawebbr.com.br',
  /** Número real, formato internacional sem símbolos (DDI+DDD+número). */
  whatsappNumber: '5511989955653',
  whatsappDefaultMessage:
    'Olá! Gostaria de saber mais sobre a criação de um site para minha empresa.',
}

/** URL canônica do site — usada em SEO, sitemap e compartilhamento social. */
export const SITE_URL = `https://${company.domain}`

/**
 * Redes sociais — placeholders. Preencha com as URLs reais antes de publicar.
 * Um item com href vazio não é renderizado no rodapé.
 */
export const social = {
  instagram: '',
  facebook: '',
  tiktok: '',
  linkedin: '',
}

/** Gera um link wa.me com mensagem pré-definida por CTA. */
export function waLink(message: string = company.whatsappDefaultMessage) {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const whatsappMessages = {
  default: company.whatsappDefaultMessage,
  hero: 'Olá! Vi o site da ConectaWeb e quero criar um site para o meu negócio.',
  portfolio:
    'Olá! Vi os projetos da ConectaWeb e quero um site parecido para o meu negócio.',
  offer:
    'Olá! Quero saber mais sobre o que está incluso na criação do meu site.',
  finalCta:
    'Olá! Quero começar a criar o site do meu negócio com a ConectaWeb.',
  specialist: 'Olá! Gostaria de falar com um especialista da ConectaWeb.',
}

// -----------------------------------------------------------------------------
// NAVEGAÇÃO
// -----------------------------------------------------------------------------
export const navLinks = [
  { label: 'Serviços', href: '#solucao' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
]

// -----------------------------------------------------------------------------
// PORTFÓLIO
// O projeto "salao-premium" é um exemplo real construído pela ConectaWeb.
// Os demais são placeholders — substitua "demoUrl" e a imagem quando os
// projetos desses segmentos forem construídos.
// -----------------------------------------------------------------------------
export type PortfolioCategory =
  | 'beleza'
  | 'saude'
  | 'alimentacao'
  | 'servicos'
  | 'negocios'

export interface PortfolioProject {
  id: string
  title: string
  segment: string
  category: PortfolioCategory
  description: string
  demoUrl?: string
  image?: string
  placeholder: boolean
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'salao-premium',
    title: 'Salão de beleza — modelo premium',
    segment: 'Salão de beleza',
    category: 'beleza',
    description:
      'Site institucional com galeria, serviços, tabela de preços e WhatsApp integrado.',
    demoUrl: 'https://claude.ai/code/artifact/6118f2b2-3a56-4213-9359-2fae18c27943',
    image: '/images/portfolio-salao.jpg',
    placeholder: false,
  },
  {
    id: 'clinica',
    title: '[ PROJETO — CLÍNICA / ESTÉTICA ]',
    segment: 'Clínica / estética',
    category: 'saude',
    description: 'Em breve: modelo para clínicas, consultórios e espaços de estética.',
    placeholder: true,
  },
  {
    id: 'restaurante',
    title: '[ PROJETO — RESTAURANTE ]',
    segment: 'Restaurante',
    category: 'alimentacao',
    description: 'Em breve: modelo com cardápio, reservas e delivery via WhatsApp.',
    placeholder: true,
  },
  {
    id: 'academia',
    title: '[ PROJETO — ACADEMIA / ESTÚDIO ]',
    segment: 'Academia / estúdio',
    category: 'saude',
    description: 'Em breve: modelo com planos, horários de aula e matrícula.',
    placeholder: true,
  },
  {
    id: 'autonomo',
    title: '[ PROJETO — PROFISSIONAL AUTÔNOMO ]',
    segment: 'Profissional autônomo',
    category: 'servicos',
    description: 'Em breve: modelo para advogados, contadores, consultores e fotógrafos.',
    placeholder: true,
  },
  {
    id: 'empresa-local',
    title: '[ PROJETO — EMPRESA LOCAL ]',
    segment: 'Empresa local',
    category: 'negocios',
    description: 'Em breve: modelo institucional para lojas e prestadores de serviço.',
    placeholder: true,
  },
]

export const portfolioFilters: { label: string; value: 'todos' | PortfolioCategory }[] = [
  { label: 'Todos', value: 'todos' },
  { label: 'Negócios', value: 'negocios' },
  { label: 'Serviços', value: 'servicos' },
  { label: 'Beleza', value: 'beleza' },
  { label: 'Saúde', value: 'saude' },
  { label: 'Alimentação', value: 'alimentacao' },
]

// -----------------------------------------------------------------------------
// BENEFÍCIOS
// -----------------------------------------------------------------------------
export const benefits = [
  {
    title: 'Mais credibilidade',
    description: 'Seu negócio passa uma imagem mais profissional.',
  },
  {
    title: 'Mais visibilidade',
    description: 'Tenha uma presença própria na internet.',
  },
  {
    title: 'Mais contatos',
    description: 'Facilite o contato através do WhatsApp.',
  },
  {
    title: 'Mais conversões',
    description: 'Estruturamos a página pensando na jornada do cliente.',
  },
  {
    title: 'Funciona 24 horas',
    description: 'Seu negócio continua se apresentando mesmo fora do horário comercial.',
  },
  {
    title: 'Sua marca',
    description: 'Tenha um espaço digital próprio e profissional.',
  },
]

// -----------------------------------------------------------------------------
// COMO FUNCIONA
// -----------------------------------------------------------------------------
export const processSteps = [
  {
    number: '01',
    title: 'Conversa',
    description: 'Entendemos seu negócio e seus objetivos.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description: 'Definimos estrutura, conteúdo e experiência.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Criamos a identidade visual e o layout.',
  },
  {
    number: '04',
    title: 'Desenvolvimento',
    description: 'Transformamos o projeto em um site rápido e responsivo.',
  },
  {
    number: '05',
    title: 'Publicação',
    description: 'Colocamos seu site no ar.',
  },
]

// -----------------------------------------------------------------------------
// DIFERENCIAIS
// -----------------------------------------------------------------------------
export const differentiators = [
  'Design personalizado',
  'Foco em conversão',
  'Experiência mobile',
  'SEO',
  'Performance',
  'Integração com WhatsApp',
  'Integração com redes sociais',
  'Estrutura preparada para crescimento',
]

// -----------------------------------------------------------------------------
// DEPOIMENTOS — placeholders claramente identificados. Substitua por
// avaliações reais de clientes assim que existirem.
// -----------------------------------------------------------------------------
export interface Testimonial {
  quote: string
  name: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    quote: '[ Depoimento do cliente — substitua por uma avaliação real ]',
    name: '[ Nome ]',
    company: '[ Empresa ]',
  },
  {
    quote: '[ Depoimento do cliente — substitua por uma avaliação real ]',
    name: '[ Nome ]',
    company: '[ Empresa ]',
  },
  {
    quote: '[ Depoimento do cliente — substitua por uma avaliação real ]',
    name: '[ Nome ]',
    company: '[ Empresa ]',
  },
]

// -----------------------------------------------------------------------------
// FAQ
// -----------------------------------------------------------------------------
export const faq = [
  {
    question: 'O site funciona no celular?',
    answer: 'Sim. O projeto é desenvolvido pensando em computadores, tablets e smartphones.',
  },
  {
    question: 'Vocês registram o domínio?',
    answer:
      '[ Explique aqui conforme o serviço oferecido — se o registro do domínio está incluso, é opcional, ou fica por conta do cliente. ]',
  },
  {
    question: 'O site aparece no Google?',
    answer:
      'O site é estruturado com boas práticas de SEO (título, descrição, dados estruturados, performance), mas o posicionamento no Google depende de diversos fatores, incluindo tempo, concorrência e conteúdo.',
  },
  {
    question: 'Posso integrar WhatsApp?',
    answer: 'Sim, o WhatsApp é o canal principal de contato em todos os projetos.',
  },
  {
    question: 'Posso colocar Instagram?',
    answer: 'Sim, os links das suas redes sociais ficam integrados ao site.',
  },
  {
    question: 'Posso alterar o conteúdo depois?',
    answer:
      '[ Explique aqui conforme o modelo de manutenção oferecido — se há suporte para alterações, planos de manutenção, etc. ]',
  },
  {
    question: 'Quanto custa um site?',
    answer:
      'O investimento varia conforme as necessidades do seu negócio. Fale conosco para receber uma proposta personalizada.',
    cta: true,
  },
  {
    question: 'Quanto tempo leva para criar?',
    answer:
      '[ Defina aqui o prazo médio de entrega, que pode variar conforme a complexidade do projeto. ]',
  },
]

// -----------------------------------------------------------------------------
// OFERTA — o que está incluso
// -----------------------------------------------------------------------------
export const offerItems = [
  'Design profissional',
  'Site responsivo',
  'Integração com WhatsApp',
  'Links para redes sociais',
  'Galeria de imagens',
  'Google Maps',
  'SEO básico',
  'Otimização de velocidade',
  'Publicação',
]

// -----------------------------------------------------------------------------
// TECNOLOGIA
// -----------------------------------------------------------------------------
export const techStack = [
  'React',
  'TypeScript',
  'Performance otimizada',
  'SEO técnico',
  'IA como ferramenta de produção',
]
