import Header from "@/components/Header";
import Profile from "@/components/Profile";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Degrees";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Highlights from "@/components/Highlights";
import FloatingHireButton from "@/components/FloatingHireButton";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Meteors } from "@/components/ui/meteors";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <main id="conteudo-principal" className="min-h-screen relative overflow-hidden">
        <ScrollProgress className="h-1" />

        {/* Resumo semântico para crawlers e leitores de tela */}
        <div className="sr-only">
          <h1>
            {profile.name} — {profile.jobTitle}
          </h1>
          <p>{profile.summary}</p>
          <p>{profile.availability}</p>
          <nav aria-label="Seções do portfólio">
            <ul>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#experiencia">Experiência profissional</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#habilidades">Habilidades técnicas</a>
              </li>
              <li>
                <a href="#formacao">Formação acadêmica</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Global ambient background */}
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
          <Profile />
          <AboutMe />
          <Highlights />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <Footer />
          <FloatingHireButton />
        </div>
      </main>
    </>
  );
}
