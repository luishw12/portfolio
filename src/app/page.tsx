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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Profile />
      <AboutMe />
      <Experience />
      <GitHubStats />
      <RecentActivity />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
