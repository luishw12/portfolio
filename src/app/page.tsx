import Masthead from "@/components/Masthead";
import Work from "@/components/Work";
import Career from "@/components/Career";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Colophon from "@/components/Colophon";

export default function Home() {
  return (
    <main id="conteudo-principal" className="min-h-screen bg-papel pb-8">
      <Masthead />
      <Work />
      <Career />
      <AboutMe />
      <Skills />
      <Education />
      <Colophon />
    </main>
  );
}
