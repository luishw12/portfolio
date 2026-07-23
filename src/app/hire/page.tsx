import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hire from "@/components/Hire";
import HireStructuredData from "@/components/Hire/HireStructuredData";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Meteors } from "@/components/ui/meteors";
import { cn } from "@/lib/utils";
import { hirePageMetadata, profile, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: hirePageMetadata.title,
  description: hirePageMetadata.description,
  keywords: [...hirePageMetadata.keywords],
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
  },
};

export default function HirePage() {
  return (
    <>
      <HireStructuredData />

      <main id="conteudo-principal" className="min-h-screen relative overflow-hidden">
        <ScrollProgress className="h-1" />

        <div className="sr-only">
          <h1>
            Contratar {profile.name} — {profile.jobTitle}
          </h1>
          <p>{hirePageMetadata.description}</p>
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
          <Hire />
          <Footer />
        </div>
      </main>
    </>
  );
}
