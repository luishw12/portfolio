// Dados estruturados para SEO
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Luís Henrique Wendt",
  "jobTitle": "Desenvolvedor Full Stack",
  "description": "Desenvolvedor Full Stack desde 2022 — aplicações web, sistemas corporativos e produtos SaaS com .NET, React, Next.js, TypeScript, PostgreSQL e AWS",
  "url": "https://luishw.dev",
  "image": "https://luishw.dev/og-image.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/luishw/",
    "https://github.com/luishw12"
  ],
  "knowsAbout": [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "C#",
    ".NET",
    "Java",
    "Spring Boot",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Linux",
    "Desenvolvimento Web",
    "Arquitetura de Software",
    "Produtos SaaS"
  ],
  "worksFor": [
    {
      "@type": "Organization",
      "name": "Q2F Sistemas de Gestão"
    },
    {
      "@type": "Organization",
      "name": "Refatorize",
      "url": "https://refatorize.com.br"
    }
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Anhanguera Educacional"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lajeado",
    "addressRegion": "RS",
    "addressCountry": "BR"
  }
};

// Dados estruturados para Website
export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Luís Henrique Wendt - Portfólio",
  "description": "Portfólio de Luís Henrique Wendt, Desenvolvedor Full Stack",
  "url": "https://luishw.dev",
  "author": {
    "@type": "Person",
    "name": "Luís Henrique Wendt"
  },
  "inLanguage": "pt-BR",
  "copyrightYear": "2026",
  "genre": "Portfolio",
  "keywords": "desenvolvedor full stack, react, next.js, csharp, dotnet, java, spring boot, aws, portfólio"
};

// Dados estruturados para Professional Service
export const professionalServiceStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Luís Henrique Wendt - Desenvolvimento Full Stack",
  "description": "Serviços de desenvolvimento full stack, produtos SaaS e modernização de sistemas",
  "url": "https://luishw.dev",
  "provider": {
    "@type": "Person",
    "name": "Luís Henrique Wendt"
  },
  "serviceType": "Desenvolvimento de Software",
  "areaServed": {
    "@type": "Country",
    "name": "Brasil"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Desenvolvimento",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Desenvolvimento Frontend",
          "description": "Desenvolvimento de interfaces modernas com React e Next.js"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Desenvolvimento Backend",
          "description": "APIs e sistemas com .NET, Java, Spring Boot e PostgreSQL"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Produtos SaaS",
          "description": "Arquitetura e desenvolvimento de produtos digitais do zero à produção"
        }
      }
    ]
  }
};
