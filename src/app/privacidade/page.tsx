import type { Metadata } from "next";
import Privacy from "@/components/Privacy";
import { privacyPageMetadata, profile, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: privacyPageMetadata.title,
  description: privacyPageMetadata.description,
  alternates: {
    canonical: "/privacidade",
  },
  openGraph: {
    title: privacyPageMetadata.title,
    description: privacyPageMetadata.description,
    url: `${SITE_URL}/privacidade`,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `Política de Privacidade — ${profile.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: privacyPageMetadata.title,
    description: privacyPageMetadata.description,
    images: ["/og-image.jpg"],
    creator: "@luishw",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main id="conteudo-principal" className="min-h-screen bg-papel">
      <Privacy />
    </main>
  );
}
