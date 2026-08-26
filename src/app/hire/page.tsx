import type { Metadata } from "next";
import Hire from "@/components/Hire";
import HireStructuredData from "@/components/Hire/HireStructuredData";
import { hirePageMetadata, profile, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: hirePageMetadata.title,
  description: hirePageMetadata.description,
  alternates: {
    canonical: "/hire",
  },
  openGraph: {
    title: hirePageMetadata.title,
    description: hirePageMetadata.description,
    url: `${SITE_URL}/hire`,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `Contratar ${profile.name} — ${profile.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: hirePageMetadata.title,
    description: hirePageMetadata.description,
    images: ["/og-image.jpg"],
    creator: "@luishw",
  },
};

export default function HirePage() {
  return (
    <>
      <HireStructuredData />
      <main id="conteudo-principal" className="min-h-screen bg-papel">
        <Hire />
      </main>
    </>
  );
}
