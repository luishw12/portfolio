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
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Meteors } from "@/components/ui/meteors";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <ScrollProgress className="h-1" />

      {/* Global ambient background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
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

      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 noise" />

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
      </div>
    </main>
  );
}
