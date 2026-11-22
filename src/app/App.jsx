import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { Artifacts } from "./components/Artifacts.jsx";
import { Projects } from "./components/Projects.jsx";
import { Skills } from "./components/Skills.jsx";
import { Timeline } from "./components/Timeline.jsx";
import { Training } from "./components/Training.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="bg-white min-h-screen selection:bg-teal-700 selection:text-white">
      <Navbar />
      <Hero />
      <Artifacts />
      <Projects />
      <Skills />
      <Timeline />
      <Training />
      <Footer />
    </div>
  );
}
