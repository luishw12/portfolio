import Header from "@/components/Header";
import Profile from "@/components/Profile";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Projects from "@/components/Degrees";

export default function Home() {
  return (
    <main>
      <Header />
      <Profile />
      <AboutMe />
      <Projects />
      <Footer />
    </main>
  );
}
