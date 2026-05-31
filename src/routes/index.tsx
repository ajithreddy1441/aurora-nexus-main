<<<<<<< HEAD
import { useVisitorTracker } from "@/hooks/useVisitorTracker";
=======
>>>>>>> 2094b62ab4ca7fe386c4ddd6c03e33ad8e80f8f8
import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { AuroraBg } from "@/components/portfolio/AuroraBg";
import { MouseGlow } from "@/components/portfolio/MouseGlow";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Marquee } from "@/components/portfolio/Marquee";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova Vale — Cinematic Design Engineer & Interaction Designer" },
      {
        name: "description",
        content:
          "Independent design engineer crafting luxurious, immersive, award-winning interfaces for ambitious brands.",
      },
      { property: "og:title", content: "Nova Vale — Cinematic Design Engineer" },
      {
        property: "og:description",
        content:
          "Luxurious, futuristic, award-winning interfaces. Available for select engagements in 2026.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
<<<<<<< HEAD
  useVisitorTracker();
=======
>>>>>>> 2094b62ab4ca7fe386c4ddd6c03e33ad8e80f8f8
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SmoothScroll />
      <AuroraBg />
      <MouseGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Marquee />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
