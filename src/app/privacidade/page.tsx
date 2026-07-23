import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Privacy from "@/components/Privacy";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Meteors } from "@/components/ui/meteors";
import { cn } from "@/lib/utils";
import { privacyPageMetadata, profile, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: privacyPageMetadata.title,
  description: privacyPageMetadata.description,
  keywords: [...privacyPageMetadata.keywords],
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
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main id="conteudo-principal" className="min-h-screen relative overflow-hidden">
      <ScrollProgress className="h-1" />

      <div className="sr-only">
        <h1>Política de Privacidade — {profile.name}</h1>
        <p>{privacyPageMetadata.description}</p>
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.12}
          duration={4}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]",
            "fill-primary/10 stroke-primary/10 inset-0 h-full w-full"
          )}
        />
        <Meteors number={12} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 noise" aria-hidden="true" />

      <div className="relative z-10">
        <Header />
        <Privacy />
        <Footer />
      </div>
    </main>
  );
}
