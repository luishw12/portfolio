import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import StructuredData from "@/components/StructuredData";
import { pageMetadata, profile, recruiterKeywords, SITE_URL } from "@/lib/seo";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: pageMetadata.title,
    template: "%s | Luís Henrique Wendt",
  },
  description: pageMetadata.description,
  keywords: [...recruiterKeywords],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  classification: "Portfolio / Developer Profile",
  applicationName: "Luís Henrique Wendt — Portfólio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    url: SITE_URL,
    siteName: "Luís Henrique Wendt — Portfólio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.jobTitle}`,
        type: "image/jpeg",
      },
    ],
    locale: "pt_BR",
    type: "profile",
    countryName: "Brasil",
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.title,
    description: pageMetadata.description,
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
  other: {
    "ai-content-declaration": "human-authored",
    "profile:first_name": profile.givenName,
    "profile:last_name": profile.familyName,
    "profile:username": "luishw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="author" href="/llms.txt" type="text/plain" title="LLM-readable profile" />
        <meta name="theme-color" content="#030712" />
        <meta name="geo.region" content="BR-RS" />
        <meta name="geo.placename" content="Lajeado" />
        <meta name="geo.position" content="-29.4669;-51.9614" />
        <meta name="ICBM" content="-29.4669, -51.9614" />
        <StructuredData />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
