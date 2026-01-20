import Header from "@/components/Header";
import Profile from "@/components/Profile";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import GitHubStats from "@/components/GitHubStats";
import RecentActivity from "@/components/RecentActivity";
import Skills from "@/components/Skills";
import Projects from "@/components/Degrees";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Highlights from "@/components/Highlights";
import { FloatingOrbs, GridPattern } from "@/components/ui/animated-background";
import ScrollProgress from "@/components/ui/scroll-progress";
import { DevMetricsWrapper } from "@/components/DevMode";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Animated background elements */}
      <FloatingOrbs />
      <GridPattern />

      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 noise" />

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <DevMetricsWrapper name="Profile">
          <Profile />
        </DevMetricsWrapper>
        <DevMetricsWrapper name="AboutMe">
          <AboutMe />
        </DevMetricsWrapper>
        <DevMetricsWrapper name="Highlights">
          <Highlights />
        </DevMetricsWrapper>
        <DevMetricsWrapper name="Experience">
          <Experience />
        </DevMetricsWrapper>
        <DevMetricsWrapper name="Projects">
          <Projects />
        </DevMetricsWrapper>
        <DevMetricsWrapper name="Skills">
          <Skills />
        </DevMetricsWrapper>
        <DevMetricsWrapper name="GitHubStats">
          <GitHubStats />
        </DevMetricsWrapper>
        <DevMetricsWrapper name="RecentActivity">
          <RecentActivity />
        </DevMetricsWrapper>
        <DevMetricsWrapper name="Education">
          <Education />
        </DevMetricsWrapper>
        <DevMetricsWrapper name="Contact">
          <Contact />
        </DevMetricsWrapper>
        <Footer />
      </div>
    </main>
  );
}
