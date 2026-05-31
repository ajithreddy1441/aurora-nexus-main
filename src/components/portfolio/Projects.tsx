import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Section } from "./Section";

const projects = [
  {
    title: "Aether Studio",
    tag: "Brand · WebGL",
    desc: "Immersive site for a motion studio with real-time fluid simulation hero.",
    tech: ["Next.js", "Three.js", "GLSL"],
    accent: "oklch(0.78 0.18 200 / 0.5)",
  },
  {
    title: "Lumen Finance",
    tag: "Product · Fintech",
    desc: "Award-winning trading dashboard with butter-smooth realtime charts.",
    tech: ["React", "D3", "WebSockets"],
    accent: "oklch(0.72 0.27 330 / 0.5)",
  },
  {
    title: "Orbit OS",
    tag: "SaaS · Platform",
    desc: "End-to-end design system & marketing site for a developer platform.",
    tech: ["Tailwind", "Figma", "Framer"],
    accent: "oklch(0.68 0.22 290 / 0.5)",
  },
  {
    title: "Kintsugi Wear",
    tag: "E-commerce · 3D",
    desc: "Couture e-commerce experience with 3D product configurator.",
    tech: ["Next.js", "R3F", "Stripe"],
    accent: "oklch(0.82 0.18 165 / 0.5)",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 — Selected work"
      title={<>Recent <span className="text-gradient-aurora">obsessions</span></>}
      description="A curated set of recent collaborations spanning brand, product, and experimental web."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href="#"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="group glass-strong relative overflow-hidden rounded-3xl p-1"
          >
            <div className="relative overflow-hidden rounded-[22px]">
              <div
                className="relative aspect-[16/10] w-full overflow-hidden"
                style={{
                  background: `radial-gradient(120% 100% at 0% 0%, ${p.accent}, transparent 60%), radial-gradient(120% 100% at 100% 100%, oklch(0.7 0.22 320 / 0.35), transparent 55%), oklch(0.16 0.035 270)`,
                }}
              >
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-6xl font-bold tracking-tight text-white/15 transition-all duration-700 group-hover:scale-110 group-hover:text-white/30 md:text-7xl">
                    {p.title}
                  </div>
                </div>
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full glass text-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-0 -rotate-45">
                  <FiArrowUpRight />
                </div>
              </div>

              <div className="flex items-start justify-between gap-6 p-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {p.tag}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold transition-colors group-hover:text-gradient">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <div className="hidden flex-wrap justify-end gap-1.5 sm:flex">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
