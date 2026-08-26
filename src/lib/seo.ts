import { CAREER_START_YEAR } from "@/lib/utils";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.luishw.com.br";
export const SITE_NAME = "Luís Henrique Wendt — Portfólio";

export const profile = {
  name: "Luís Henrique Wendt",
  givenName: "Luís Henrique",
  familyName: "Wendt",
  jobTitle: "Desenvolvedor Full Stack Pleno",
  alternateJobTitles: [
    "Desenvolvedor Full Stack",
    "Full Stack Developer",
    "Desenvolvedor .NET",
    "Desenvolvedor React",
    "Desenvolvedor Next.js",
    "Desenvolvedor Java Spring Boot",
  ],
  email: "luishw08@gmail.com",
  phone: "+5551995608647",
  location: {
    city: "Lajeado",
    region: "RS",
    country: "Brasil",
    countryCode: "BR",
    remote: true,
  },
  careerStartYear: CAREER_START_YEAR,
  availability: "Disponível para novos projetos e oportunidades (remoto ou híbrido)",
  summary:
    "Desenvolvedor Full Stack desde 2022 com experiência em aplicações web, sistemas corporativos e produtos SaaS. Atua com .NET, C#, Java, Spring Boot, React, Next.js, TypeScript, PostgreSQL, Docker, AWS e desenvolvimento assistido por IA (Cursor, Claude Code). Full Stack Pleno II na Q2F Sistemas de Gestão e fundador da Refatorize.",
  linkedin: "https://www.linkedin.com/in/luishw/",
  github: "https://github.com/luishw12",
  instagram: "https://www.instagram.com/luis.wendt/",
  resumeUrl: `${SITE_URL}/curriculo.pdf`,
  imageUrl: `${SITE_URL}/og-image.jpg`,
} as const;

export const coreSkills = [
  { name: "React", years: 4, category: "Frontend" },
  { name: "TypeScript", years: 4, category: "Frontend" },
  { name: "JavaScript", years: 4, category: "Frontend" },
  { name: "Next.js", years: 3, category: "Frontend" },
  { name: "Tailwind CSS", years: 4, category: "Frontend" },
  { name: "Java", years: 3, category: "Backend" },
  { name: "Spring Boot", years: 3, category: "Backend" },
  { name: ".NET", years: 2, category: "Backend" },
  { name: "C#", years: 2, category: "Backend" },
  { name: "Node.js", years: 3, category: "Backend" },
  { name: "PostgreSQL", years: 3, category: "Database" },
  { name: "Docker", years: 2, category: "DevOps" },
  { name: "AWS", years: 2, category: "Cloud" },
  { name: "Linux", years: 2, category: "DevOps" },
  { name: "Python", years: 1, category: "Backend" },
  { name: "Git", years: 4, category: "Tools" },
  { name: "Cursor IDE", years: 2, category: "AI-Assisted Development" },
  { name: "Claude Code", years: 2, category: "AI-Assisted Development" },
] as const;

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

export const workExperience = [
  {
    company: "Q2F Sistemas de Gestão",
    url: "https://q2f.com.br",
    role: "Desenvolvedor Full Stack Pleno II",
    startDate: "2026-02",
    endDate: null,
    location: "Lajeado, RS, Brasil",
    employmentType: "CLT",
    description:
      "Plataforma SaaS para food service — operação, compras, custos, produção, indicadores e fidelidade.",
    technologies: [".NET", "Next.js", "React", "TypeScript", "PostgreSQL", "AWS", "Supabase"],
  },
  {
    company: "Refatorize",
    url: "https://refatorize.com.br",
    role: "Fundador",
    startDate: "2025-03",
    endDate: null,
    location: "Remoto, Brasil",
    employmentType: "Fundador",
    description: "Produtos SaaS próprios — arquitetura completa do zero à produção.",
    technologies: ["Java", "Spring Boot", ".NET", "Next.js", "PostgreSQL", "Docker", "AWS", "Vercel"],
  },
  {
    company: "Tricon - Softwares de Gestão",
    url: "https://tricon.inf.br",
    role: "Desenvolvedor Full Stack Pleno",
    startDate: "2024-11",
    endDate: "2026-02",
    location: "Lajeado, RS, Brasil",
    employmentType: "CLT",
    description: "ERP web, migração de legado Delphi para Java Spring Boot e importação fiscal.",
    technologies: ["Java", "Spring Boot", "Delphi", "PostgreSQL", "Docker", "AWS"],
  },
  {
    company: "Toshyro Inovação e Tecnologia",
    url: "https://www.toshyro.com.br/",
    role: "Desenvolvedor Full Stack Júnior",
    startDate: "2022-04",
    endDate: "2024-11",
    location: "Lajeado, RS, Brasil",
    employmentType: "CLT",
    description: "Produtos corporativos, Design System interno e migração de ERP legado.",
    technologies: ["React", "Next.js", "TypeScript", ".NET", "PostgreSQL", "Storybook"],
  },
] as const;

export const featuredProjects = [
  {
    name: "SkinsManager",
    url: "https://skinsmanager.com.br",
    description:
      "SaaS multi-tenant para traders de skins CS2: inventário, trades, CRM, RBAC e dashboards.",
    technologies: ["Next.js", "React", "TypeScript", "ASP.NET Core", "PostgreSQL", "SignalR"],
  },
  {
    name: "BoltSkins",
    url: "https://boltskins.com.br",
    description: "Marketplace de skins CS2 com trocas automatizadas e sistema de afiliados.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Steam API"],
  },
  {
    name: "CS Invest",
    url: "https://www.csinvest.site/",
    description: "Plataforma de análise de rentabilidade para investimento em skins.",
    technologies: ["Next.js", "Java Spring Boot", "AWS", "PostgreSQL", "TypeScript"],
  },
  {
    name: "Feriados Brasil",
    url: "https://feriados.luishw.com.br",
    description:
      "Calendário interativo de feriados nacionais, estaduais e municipais em mais de 5.500 cidades brasileiras.",
    technologies: ["Astro", "React", "TypeScript", "Tailwind CSS", "Vercel"],
  },
] as const;

export const education = [
  {
    degree: "Bacharelado em Engenharia de Software",
    institution: "Anhanguera Educacional",
    startDate: "2024-07",
    endDate: "2027-12",
    status: "Em andamento",
  },
  {
    degree: "Ensino Médio",
    institution: "Colégio Santo Antônio (CSA)",
    startDate: "2020-02",
    endDate: "2023-12",
    status: "Concluído",
  },
] as const;

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Profissional" },
  { name: "Alemão", level: "Elementar" },
] as const;

export const recruiterKeywords = [
  "desenvolvedor full stack",
  "desenvolvedor full stack pleno",
  "desenvolvedor react",
  "desenvolvedor next.js",
  "desenvolvedor dotnet",
  "desenvolvedor csharp",
  "desenvolvedor java",
  "desenvolvedor spring boot",
  "desenvolvedor typescript",
  "desenvolvedor postgresql",
  "desenvolvedor aws",
  "desenvolvedor remoto brasil",
  "desenvolvedor saas",
  "desenvolvimento assistido por ia",
  "ai-assisted development",
  "cursor ide",
  "claude code",
  "portfólio desenvolvedor",
  "contratação desenvolvedor full stack",
  "Luís Henrique Wendt",
] as const;

export const pageMetadata = {
  title:
    "Luís Henrique Wendt | Full Stack Pleno · .NET · React · Next.js · AWS · Remoto",
  description:
    "Full Stack Pleno (.NET, React, Next.js, AWS). Desde 2022. Pleno II na Q2F, fundador da Refatorize. Remoto/híbrido, Brasil.",
};

export const hirePageMetadata = {
  title:
    "Contratar Luís Henrique Wendt | Full Stack Pleno · .NET · React · Remoto",
  description:
    "Recrutadores: Full Stack Pleno, .NET/React/Next/Java/AWS. Remoto, CLT ou PJ. Lajeado/RS.",
} as const;

export const privacyPageMetadata = {
  title: "Política de Privacidade",
  description:
    "Como este portfólio coleta, usa e protege dados pessoais — cookies, Google Analytics 4, eventos de navegação e seus direitos sob a LGPD.",
} as const;

const personKnowsAbout = [
  ".NET",
  "C#",
  "React",
  "Next.js",
  "AWS",
  "Java",
  "Spring Boot",
  "TypeScript",
  "PostgreSQL",
  "SaaS",
  "Cursor",
  "Claude Code",
] as const;

export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: profile.name,
  givenName: profile.givenName,
  familyName: profile.familyName,
  jobTitle: profile.jobTitle,
  description: pageMetadata.description,
  url: SITE_URL,
  image: profile.imageUrl,
  email: profile.email,
  telephone: profile.phone,
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: [...personKnowsAbout],
  worksFor: [
    {
      "@type": "Organization",
      name: "Q2F Sistemas de Gestão",
      url: "https://q2f.com.br",
    },
    {
      "@type": "Organization",
      name: "Refatorize",
      url: "https://refatorize.com.br",
    },
  ],
  alumniOf: education.map((edu) => ({
    "@type": "EducationalOrganization",
    name: edu.institution,
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location.city,
    addressRegion: profile.location.region,
    addressCountry: profile.location.countryCode,
  },
  seeks: {
    "@type": "Demand",
    name: "Oportunidades como Desenvolvedor Full Stack Pleno",
    description: "Remoto ou híbrido no Brasil",
    areaServed: {
      "@type": "Country",
      name: profile.location.country,
    },
  },
  hasOccupation: {
    "@type": "Occupation",
    name: profile.jobTitle,
    occupationalCategory: "15-1252.00",
    skills: personKnowsAbout.join(", "),
    experienceRequirements: `Desde ${profile.careerStartYear}`,
  },
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  description: pageMetadata.description,
  url: SITE_URL,
  inLanguage: "pt-BR",
  copyrightYear: new Date().getFullYear(),
  author: { "@id": `${SITE_URL}/#person` },
  publisher: { "@id": `${SITE_URL}/#person` },
};

export const profilePageStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: pageMetadata.title,
  description: pageMetadata.description,
  inLanguage: "pt-BR",
  dateModified: new Date().toISOString().split("T")[0],
  mainEntity: { "@id": `${SITE_URL}/#person` },
  about: { "@id": `${SITE_URL}/#person` },
};

export const workExperienceStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/#experience`,
  name: "Experiência Profissional",
  description: "Histórico profissional de Luís Henrique Wendt",
  itemListElement: workExperience.map((job, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "OrganizationRole",
      roleName: job.role,
      startDate: job.startDate,
      ...(job.endDate ? { endDate: job.endDate } : {}),
      description: job.description,
      occupationalCategory: "Desenvolvimento de Software",
      skills: job.technologies.join(", "),
      worksFor: {
        "@type": "Organization",
        name: job.company,
        url: job.url,
      },
      location: {
        "@type": "Place",
        name: job.location,
      },
    },
  })),
};

export const skillsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/#skills`,
  name: "Habilidades Técnicas",
  description: "Stack e tempo de experiência com cada tecnologia",
  itemListElement: coreSkills.map((skill, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "DefinedTerm",
      name: skill.name,
      description: `${skill.years} ${skill.years === 1 ? "ano" : "anos"} de experiência em ${skill.category}`,
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: skill.category,
      },
    },
  })),
};

export const projectsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/#projects`,
  name: "Projetos em Destaque",
  itemListElement: featuredProjects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: project.name,
      description: project.description,
      url: project.url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      author: { "@id": `${SITE_URL}/#person` },
      keywords: project.technologies.join(", "),
    },
  })),
};

export const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
  ],
};

export const homeWebPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: pageMetadata.title,
  description: pageMetadata.description,
  inLanguage: "pt-BR",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  mainEntity: { "@id": `${SITE_URL}/#person` },
  dateModified: new Date().toISOString().split("T")[0],
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#conteudo-principal h1", "#conteudo-principal p"],
  },
};

export const professionalServiceStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: `${profile.name} — Desenvolvimento Full Stack`,
  description: pageMetadata.description,
  url: SITE_URL,
  image: profile.imageUrl,
  areaServed: {
    "@type": "Country",
    name: profile.location.country,
  },
  serviceType: [
    "Desenvolvimento Web",
    "Desenvolvimento Full Stack",
    "Desenvolvimento de SaaS",
  ],
  provider: { "@id": `${SITE_URL}/#person` },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `mailto:${profile.email}`,
    servicePhone: profile.phone,
    serviceSmsNumber: profile.phone,
  },
};

export const allStructuredData = [
  personStructuredData,
  websiteStructuredData,
  profilePageStructuredData,
  homeWebPageStructuredData,
  professionalServiceStructuredData,
  workExperienceStructuredData,
  skillsStructuredData,
  projectsStructuredData,
  breadcrumbStructuredData,
];

export const hireBreadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/hire#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contratar", item: `${SITE_URL}/hire` },
  ],
};

export const hireWebPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/hire#webpage`,
  url: `${SITE_URL}/hire`,
  name: hirePageMetadata.title,
  description: hirePageMetadata.description,
  inLanguage: "pt-BR",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  mainEntity: { "@id": `${SITE_URL}/#person` },
  dateModified: new Date().toISOString().split("T")[0],
  specialty: "Recrutamento de Desenvolvedor Full Stack",
};

export const hireFaqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/hire#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual o modelo de contratação aceito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CLT, PJ e projetos pontuais. Aberto a conversar sobre o formato que fizer mais sentido para a empresa e o escopo.",
      },
    },
    {
      "@type": "Question",
      name: "Luís Henrique trabalha remoto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Atua remotamente e aceita oportunidades de qualquer lugar do Brasil. Híbrido na região de Lajeado/RS também é viável.",
      },
    },
    {
      "@type": "Question",
      name: "Como contratar Luís Henrique Wendt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Entre em contato por email (${profile.email}), LinkedIn (${profile.linkedin}) ou WhatsApp. Envie contexto da vaga, stack do time e modelo de contratação.`,
      },
    },
  ],
};

export const hireStructuredData = [
  hireWebPageStructuredData,
  hireBreadcrumbStructuredData,
  hireFaqStructuredData,
];
