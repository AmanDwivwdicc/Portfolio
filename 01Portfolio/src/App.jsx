import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Lightfall from "./components/Lightfall";

function App() {
  return (
    <div className="relative text-white overflow-x-hidden">

      {/* Global Background */}
<div className="fixed inset-0 bg-black/40 -z-10"></div>
<div className="fixed inset-0 -z-10">
  <Lightfall
    colors={['#22d3ee', '#3b82f6', '#a855f7']}
    backgroundColor="#000000"
    speed={0.5}
    streakCount={2}
    streakWidth={1}
    streakLength={1}
    glow={0.2}
    density={0.6}
    twinkle={1}
    zoom={3}
    backgroundGlow={0}
    opacity={0.8}
    mouseInteraction
    mouseStrength={0.5}
    mouseRadius={1}
  />
</div>
      <Navbar />

      <section id="about">
        <About />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="skills">
  <Skills />
</section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;