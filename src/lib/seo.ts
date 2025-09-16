// Dados estruturados para SEO
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Luís Henrique Wendt",
  "jobTitle": "Desenvolvedor Full Stack",
  "description": "Desenvolvedor Full Stack especializado em migração de sistemas legados para tecnologias modernas",
  "url": "https://luishw.dev",
  "image": "https://luishw.dev/og-image.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/luishw/",
    "https://github.com/luishw"
  ],
  "knowsAbout": [
    "React",
    "Next.js", 
    "TypeScript",
    "JavaScript",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Desenvolvimento Web",
    "Arquitetura de Software",
    "Migração de Sistemas Legados"
  ],
  "worksFor": [
    {
      "@type": "Organization",
      "name": "Refatorize",
      "url": "https://refatorize.com.br"
    },
    {
      "@type": "Organization", 
      "name": "Tricon",
      "url": "https://tricon.com.br"
    }
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Universidade do Vale do Taquari - UNIVATES"
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
  "copyrightYear": "2025",
  "genre": "Portfolio",
  "keywords": "desenvolvedor full stack, react, next.js, java, spring boot, portfólio"
};

// Dados estruturados para Professional Service
export const professionalServiceStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Luís Henrique Wendt - Desenvolvimento Full Stack",
  "description": "Serviços de desenvolvimento full stack, migração de sistemas legados e consultoria em tecnologia",
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
          "description": "APIs robustas com Java, Spring Boot e PostgreSQL"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Migração de Sistemas Legados",
          "description": "Modernização de sistemas antigos para tecnologias atuais"
        }
      }
    ]
  }
};
