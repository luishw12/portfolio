import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luís Henrique Wendt - Desenvolvedor Full Stack | React, Next.js, Java, Spring Boot",
  description: "Desenvolvedor Full Stack especializado em migração de sistemas legados para tecnologias modernas. Experiência com React, Next.js, Java, Spring Boot, PostgreSQL e AWS. Disponível para projetos remotos.",
  keywords: [
    "desenvolvedor full stack",
    "react developer",
    "next.js developer", 
    "java developer",
    "spring boot developer",
    "typescript developer",
    "postgresql developer",
    "aws developer",
    "desenvolvedor remoto",
    "migração de sistemas legados",
    "arquitetura de software",
    "desenvolvimento web",
    "desenvolvimento backend",
    "desenvolvimento frontend",
    "portfólio desenvolvedor",
    "freelancer desenvolvedor",
    "consultor de tecnologia"
  ],
  authors: [{ name: "Luís Henrique Wendt" }],
  creator: "Luís Henrique Wendt",
  publisher: "Luís Henrique Wendt",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://luishw.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luís Henrique Wendt - Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack especializado em migração de sistemas legados para tecnologias modernas. Experiência com React, Next.js, Java, Spring Boot, PostgreSQL e AWS.",
    url: "https://luishw.dev",
    siteName: "Luís Henrique Wendt - Portfólio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luís Henrique Wendt - Desenvolvedor Full Stack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luís Henrique Wendt - Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack especializado em migração de sistemas legados para tecnologias modernas. React, Next.js, Java, Spring Boot.",
    images: ["/og-image.jpg"],
    creator: "@luishw",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
