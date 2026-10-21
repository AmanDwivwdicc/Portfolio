import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Lightfall } from "@/components/portfolio/Lightfall";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aman Dwivedi — Full Stack & Computer Vision Developer" },
      {
        name: "description",
        content:
          "Portfolio of Aman Dwivedi, B.Tech IT student at JEC Jabalpur — full stack web, machine learning and OpenCV projects.",
      },
      { property: "og:title", content: "Aman Dwivedi — Full Stack & Computer Vision Developer" },
      {
        property: "og:description",
        content:
          "Projects, skills and certifications of Aman Dwivedi — full stack web, ML and OpenCV.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Shader colours (hex is required by the WebGL shader, not used as UI classes).
const LIGHT_COLORS = ["#22d3ee", "#3b82f6", "#a855f7"];

function Index() {
  return (
    <div className="relative overflow-x-hidden text-foreground">
      {/* Global animated background */}
      <div className="fixed inset-0 -z-20 bg-background" />
      <Lightfall
        className="fixed inset-0 -z-10 h-svh w-full"
        colors={LIGHT_COLORS}
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
      <div className="pointer-events-none fixed inset-0 -z-10 bg-background/40" />

      <Navbar />

      <main>
        <section id="about">
          <Hero />
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
      </main>
    </div>
  );
}
