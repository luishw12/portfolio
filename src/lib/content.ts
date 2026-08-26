import type { StaticImageData } from "next/image";
import toshyroLogo from "@/img/companies/toshyro.png";
import triconLogo from "@/img/companies/tricon.png";
import q2fLogo from "@/img/companies/q2f.png";
import refatorizeLogo from "@/img/companies/refatorize.png";
import FeriadosCalendario from "@/img/feriados-brasil-calendario.png";
import FeriadosArtigo from "@/img/feriados-brasil-artigo.png";
import BoltSkinsLP from "@/img/BoltSkins LP.jpeg";
import BoltSkinsTroca from "@/img/BoltSkins Tela Troca.jpeg";
import BoltSkinsVender from "@/img/BoltSkins Tela Vender Skin.jpeg";
import BoltSkinsAfiliado from "@/img/BoltSkins Tela Afiliado.jpeg";
import BoltSkinsHistorico from "@/img/BoltSkins Tela Historico Troca.jpeg";
import CsInvestDashboard from "@/img/CSINVEST dashboard.png";
import CsInvestItem from "@/img/CSINVEST item.png";
import CsInvestCalcJuros from "@/img/CSINVEST calculadora juros.png";
import CsInvestCalcLucro from "@/img/CSINVEST calculadora lucro.png";
import SkinsManagerModules from "@/img/SkinsManager modules.png";
import SkinsManagerDashboardClientes from "@/img/SkinsManager dashboard clientes.png";
import SkinsManagerDashboardTrocas from "@/img/SkinsManager dashboard trocas.png";
import SkinsManagerTrocas from "@/img/SkinsManager trocas.png";
import SkinsManagerInventario from "@/img/SkinsManager inventario.png";
import SkinsManagerPagamentos from "@/img/SkinsManager pagamentos.png";
import SkinsManagerWhatsapp from "@/img/SkinsManager whatsapp.png";
import AnhangueraLogo from "@/img/education/anhanguera.png";
import CsaLogo from "@/img/education/csa.png";
import { CAREER_START_YEAR, getYearsOfExperience } from "@/lib/utils";

export const HERO_STATS = {
  years: getYearsOfExperience(),
  projects: 4,
  companies: 4,
} as const;

export const PHILOSOPHY =
  "Entender o problema antes da tecnologia — e criar soluções simples de manter, intuitivas e escaláveis.";

export type Role = {
  title: string;
  period: string;
  achievements: string[];
};

export type ExperienceItem = {
  company: string;
  period: string;
  location: string;
  companyUrl: string;
  type: string;
  description: string;
  roles: Role[];
  technologies: string[];
  logo: StaticImageData;
  logoBg: string;
  current?: boolean;
};

export const experiences: ExperienceItem[] = [
  {
    company: "Q2F Sistemas de Gestão",
    period: "fev 2026 — presente",
    location: "Lajeado, RS",
    companyUrl: "https://q2f.com.br",
    type: "CLT",
    description:
      "Plataforma SaaS para food service — operação, compras, custos, produção, indicadores e fidelidade.",
    roles: [
      {
        title: "Desenvolvedor Full Stack Pleno II",
        period: "mai 2026 — presente",
        achievements: [
          "Participação ativa nas decisões técnicas da equipe, colaborando na definição de soluções de arquitetura e evolução contínua dos produtos junto ao Tech Lead.",
          "Desenvolvimento e evolução de módulos de Operação, Gerência, Suprimentos, Custos e Fidelidade, modernizando a plataforma baseada em Next.js e .NET.",
          "Adoção diária de AI-Assisted Development (Cursor, Claude Code e Trae) para acelerar escrita de código, refatoração, automação e otimização do fluxo da equipe.",
          "Contato frequente com usuários finais e clientes, transformando feedbacks operacionais em melhorias de produto e experiência.",
          "Desenvolvimento de padrões reutilizáveis no frontend, aumentando consistência visual, manutenibilidade e produtividade da equipe.",
          "Investigação de problemas em produção com AWS, análise de logs, consultas em banco e reprodução local dos cenários.",
        ],
      },
      {
        title: "Desenvolvedor Full Stack Pleno",
        period: "fev 2026 — mai 2026",
        achievements: [
          "Participação na modernização do ecossistema web, contribuindo para a migração gradual de React para Next.js.",
          "Uso de ferramentas de IA (Cursor e Claude Code) para acelerar a conversão de componentes React/Next.js e automatizar testes de integração.",
          "Desenvolvimento de funcionalidades para redes de franquias e restaurantes: pedidos, checklists, controle sanitário, etiquetas e fidelidade.",
          "Funcionalidade de descoberta automática de impressoras na rede local, eliminando praticamente todos os chamados de configuração manual.",
        ],
      },
    ],
    technologies: [".NET", "Next.js", "React", "TypeScript", "PostgreSQL", "AWS", "Cursor", "Claude Code"],
    logo: q2fLogo,
    logoBg: "bg-[#1e2b58]",
    current: true,
  },
  {
    company: "Refatorize",
    period: "mar 2025 — presente",
    location: "Remoto",
    companyUrl: "https://refatorize.com.br",
    type: "Fundador",
    description:
      "Produtos próprios e experimentos SaaS — da modelagem do negócio à aplicação completa em produção.",
    roles: [
      {
        title: "Fundador",
        period: "mar 2025 — presente",
        achievements: [
          "Atuação em todas as etapas do desenvolvimento Full Stack: arquitetura, backend, frontend, banco, autenticação, infraestrutura e deploy.",
          "Utilização intensiva de IA (Cursor IDE, Claude Code, Antigravity, Trae e Codex) para prototipagem rápida, geração de código, refatoração e otimização arquitetural.",
          "Desenvolvimento de aplicações com Java, Spring Boot, React, Next.js, TypeScript e PostgreSQL.",
          "Gerenciamento de infraestrutura com Linux, Docker, VPS, AWS e Vercel.",
        ],
      },
    ],
    technologies: ["Java", "Spring Boot", ".NET", "Next.js", "PostgreSQL", "Docker", "Cursor", "Claude Code"],
    logo: refatorizeLogo,
    logoBg: "bg-white",
    current: true,
  },
  {
    company: "Tricon - Softwares de Gestão",
    period: "nov 2024 — fev 2026",
    location: "Lajeado, RS",
    companyUrl: "https://tricon.inf.br",
    type: "CLT",
    description:
      "Evolução do ERP web, migração do legado Delphi para Java Spring Boot e soluções de importação fiscal.",
    roles: [
      {
        title: "Desenvolvedor Full Stack Pleno",
        period: "ago 2025 — fev 2026",
        achievements: [
          "Uma das principais referências técnicas da equipe: prioridades, padronização, apoio aos desenvolvedores e arquitetura do novo ERP web.",
          "Uso de desenvolvimento assistido por IA (Cursor, Antigravity e Codex) para investigação de bugs, refatoração e modernização de rotinas legadas.",
          "Desenvolvimento completo de solução comercializada para importação automatizada de documentos fiscais.",
          "Mecanismos de sincronização incremental entre o legado Delphi e o ERP web em Java.",
          "Otimização de consultas SQL e relatórios JasperReports, reduzindo significativamente o tempo médio de processamento.",
        ],
      },
      {
        title: "Desenvolvedor Full Stack Júnior",
        period: "nov 2024 — ago 2025",
        achievements: [
          "Evolução do ERP web em Java Spring Boot, participando da migração gradual do sistema legado em Delphi.",
          "Uso de ferramentas de IA (Cursor e Codex) para entendimento e refatoração de código legado e escrita de queries SQL mais eficientes.",
          "Componentização de telas e padronização de elementos reutilizáveis.",
          "Integração entre Firebird e PostgreSQL para migração de dados entre legado e novo ERP.",
        ],
      },
    ],
    technologies: ["Java", "Spring Boot", "Delphi", "PostgreSQL", "Docker", "AWS", "Cursor", "Codex"],
    logo: triconLogo,
    logoBg: "bg-[#0a1628]",
  },
  {
    company: "Toshyro Inovação e Tecnologia",
    period: "abr 2022 — nov 2024",
    location: "Lajeado, RS",
    companyUrl: "https://www.toshyro.com.br/",
    type: "CLT",
    description:
      "Início da trajetória em produtos corporativos, evoluindo de assistente a Full Stack Júnior.",
    roles: [
      {
        title: "Desenvolvedor Full Stack Júnior",
        period: "dez 2023 — nov 2024",
        achievements: [
          "Desenvolvimento de aplicações web com React, Next.js, TypeScript e .NET para produtos corporativos.",
          "Criação e evolução de Design System interno com ~15 componentes reutilizáveis via npm e Storybook.",
          "Participação na migração de partes do ERP de PHP para Next.js e .NET.",
        ],
      },
      {
        title: "Assistente de Desenvolvimento Full Stack",
        period: "abr 2022 — dez 2023",
        achievements: [
          "Início da carreira em meio período enquanto concluía o ensino médio.",
          "Correções e novas funcionalidades em aplicações web com React e Next.js.",
          "Primeiros contatos com .NET, PostgreSQL, Docker e Git.",
        ],
      },
    ],
    technologies: ["React", "Next.js", "TypeScript", ".NET", "PostgreSQL", "Storybook"],
    logo: toshyroLogo,
    logoBg: "bg-white",
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  images: StaticImageData[];
  link: string | null;
  github: string | null;
  technologies: string[];
};

export const projects: Project[] = [
  {
    title: "SkinsManager",
    subtitle: "Gestão de operação de skins CS2",
    description:
      "SaaS multi-tenant para traders e times: inventário, trades, clientes, fórmulas de preço e dashboards.",
    longDescription:
      "Evolução do CS Invest voltada a operação completa — organizações com RBAC (Owner/Admin/Member), preenchimento automático de valores via fórmulas (Buff, YouPin, CsFloat, Steam), CRM de clientes, despesas recorrentes, pagamentos com Google Agenda, WhatsApp em massa (Evolution + SignalR) e dashboards de trades/clientes.",
    images: [
      SkinsManagerModules,
      SkinsManagerDashboardClientes,
      SkinsManagerDashboardTrocas,
      SkinsManagerTrocas,
      SkinsManagerInventario,
      SkinsManagerPagamentos,
      SkinsManagerWhatsapp,
    ],
    link: "https://skinsmanager.com.br",
    github: null,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "ASP.NET Core",
      "PostgreSQL",
      "NextAuth",
      "SignalR",
      "Tailwind CSS",
      "Recharts",
    ],
  },
  {
    title: "BoltSkins",
    subtitle: "Marketplace de Skins CS2",
    description:
      "Plataforma completa para compra, venda e troca de skins de CS2 com sistema de afiliados integrado.",
    longDescription:
      "Uma marketplace moderna e segura para negociação de skins de Counter-Strike 2. O projeto conta com sistema de trocas automatizado, painel de afiliados com comissões, histórico detalhado de transações e integração com a API da Steam para autenticação e inventário.",
    images: [
      BoltSkinsLP,
      BoltSkinsTroca,
      BoltSkinsVender,
      BoltSkinsAfiliado,
      BoltSkinsHistorico,
    ],
    link: "https://boltskins.com.br",
    github: null,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Steam API",
    ],
  },
  {
    title: "CS Invest",
    subtitle: "Análise de Investimentos",
    description:
      "Aplicação web focada na análise de rentabilidade de compra e venda de itens em marketplaces.",
    longDescription:
      "Plataforma completa para investidores de skins que desejam maximizar seus lucros. Oferece calculadoras de rentabilidade, análise de juros compostos, dashboard com métricas em tempo real e acompanhamento individual de cada item do portfólio.",
    images: [
      CsInvestDashboard,
      CsInvestItem,
      CsInvestCalcJuros,
      CsInvestCalcLucro,
    ],
    link: "https://www.csinvest.site/",
    github: null,
    technologies: [
      "Next.js",
      "Java Spring Boot",
      "AWS",
      "PostgreSQL",
      "TailwindCSS",
      "TypeScript",
    ],
  },
  {
    title: "Feriados Brasil",
    subtitle: "Calendário nacional e regional",
    description:
      "Calendário interativo com feriados nacionais, estaduais e municipais em mais de 5.500 cidades — com busca, guias e artigos.",
    longDescription:
      "Produto próprio em produção com foco em SEO e utilidade pública: calendário anual com filtros por tema (religioso, cívico, cultural), detecção de localização, contador regressivo para o próximo feriado, páginas de artigo por data comemorativa, guias temáticos e índice para assistentes de IA (llms.txt). Site 100% estático gerado com Astro, deploy na Vercel.",
    images: [FeriadosCalendario, FeriadosArtigo],
    link: "https://feriados.luishw.com.br",
    github: "https://github.com/luishw12/feriados-app",
    technologies: ["Astro", "React", "TypeScript", "Tailwind CSS", "Vercel", "SEO"],
  },
];

export type SkillEntry = {
  name: string;
  years: number;
  category: string;
};

export const coreSkills: SkillEntry[] = [
  { name: "JavaScript", years: 4, category: "Frontend" },
  { name: "TypeScript", years: 4, category: "Frontend" },
  { name: "React", years: 4, category: "Frontend" },
  { name: "Next.js", years: 3, category: "Frontend" },
  { name: "Java", years: 3, category: "Backend" },
  { name: "Spring Boot", years: 3, category: "Backend" },
  { name: ".NET", years: 2, category: "Backend" },
  { name: "C#", years: 2, category: "Backend" },
  { name: "Node.js", years: 3, category: "Backend" },
  { name: "PostgreSQL", years: 3, category: "Dados" },
  { name: "Docker", years: 2, category: "DevOps" },
  { name: "AWS", years: 2, category: "Cloud" },
  { name: "Python", years: 1, category: "Backend" },
  { name: "Linux", years: 2, category: "DevOps" },
  { name: "Cursor IDE", years: 2, category: "IA assistida" },
  { name: "Claude Code", years: 2, category: "IA assistida" },
  { name: "Codex", years: 2, category: "IA assistida" },
  { name: "Trae", years: 1, category: "IA assistida" },
  { name: "Antigravity", years: 1, category: "IA assistida" },
];

export const methodologies = [
  "Agile / Kanban",
  "Clean Code",
  "SOLID",
  "TDD",
  "CI/CD",
  "Microservices",
  "Clean Architecture",
  "Design Patterns",
  "AI-Assisted Development",
] as const;

export const educationItems = [
  {
    degree: "Bacharelado em Engenharia de Software",
    institution: "Anhanguera Educacional",
    period: "jul 2024 — dez 2027",
    status: "Em andamento" as const,
    description:
      "Formação em engenharia de software com foco em sistemas robustos, arquitetura e desenvolvimento de ponta a ponta.",
    logo: AnhangueraLogo,
    logoBg: "bg-[#FF4D00]",
  },
  {
    degree: "Ensino Médio",
    institution: "Colégio Santo Antônio (CSA)",
    period: "fev 2020 — dez 2023",
    status: "Concluído" as const,
    description:
      "Ensino médio completo, com base em ciências exatas e preparação para o ensino superior.",
    logo: CsaLogo,
    logoBg: "bg-[#0B1F4A]",
  },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Profissional" },
  { name: "Alemão", level: "Elementar" },
] as const;

export const certifications = [
  { name: "Introdução ao C#" },
  { name: "Curso de Inglês" },
] as const;

export { CONTACT } from "./contact";

export const CAREER_SINCE = CAREER_START_YEAR;
