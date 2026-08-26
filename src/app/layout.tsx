import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import StructuredData from "@/components/StructuredData";
import SkipToContent from "@/components/SkipToContent";
import { pageMetadata, profile, SITE_URL } from "@/lib/seo";
import { GoogleAnalytics } from "@next/third-parties/google";
import SiteAnalytics from "@/components/Analytics/SiteAnalytics";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "600"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
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
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="author" href="/llms.txt" type="text/plain" title="LLM-readable profile" />
        <link rel="me" href={profile.github} />
        <link rel="me" href={profile.linkedin} />
        <meta name="theme-color" content="#F3EEE6" />
        <meta name="geo.region" content="BR-RS" />
        <meta name="geo.placename" content="Lajeado" />
        <meta name="geo.position" content="-29.4669;-51.9614" />
        <meta name="ICBM" content="-29.4669, -51.9614" />
        <StructuredData />
      </head>
      <body
        className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable} bg-papel`}
      >
        <SkipToContent />
        <div className="overflow-x-hidden">{children}</div>
        <SiteAnalytics />
        <GoogleAnalytics gaId="G-60MG1VH0EB" />
      </body>
    </html>
  );
}
