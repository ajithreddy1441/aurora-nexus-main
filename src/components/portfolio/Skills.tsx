import { motion } from "framer-motion";
import {
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiFramer,
  SiGreensock, SiThreedotjs, SiNodedotjs, SiPostgresql, SiFigma,
  SiVercel, SiDocker,
} from "react-icons/si";
import { Section } from "./Section";

const skills = [
  { icon: SiReact, name: "React", color: "#61dafb" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38bdf8" },
  { icon: SiFramer, name: "Framer", color: "#e879f9" },
  { icon: SiGreensock, name: "GSAP", color: "#88ce02" },
  { icon: SiThreedotjs, name: "Three.js", color: "#ffffff" },
  { icon: SiNodedotjs, name: "Node.js", color: "#83cd29" },
  { icon: SiPostgresql, name: "Postgres", color: "#4ea8de" },
  { icon: SiFigma, name: "Figma", color: "#f24e1e" },
  { icon: SiVercel, name: "Vercel", color: "#ffffff" },
  { icon: SiDocker, name: "Docker", color: "#2496ed" },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Stack"
      title={<>Tools of the <span className="text-gradient">craft</span></>}
      description="A modern, battle-tested stack — chosen for performance, delight, and the kind of polish that wins awards."
    >
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            whileHover={{ y: -6, scale: 1.05 }}
            className="group glass relative flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl p-4 transition-all hover:shadow-neon"
          >
            <s.icon className="h-8 w-8 transition-colors" style={{ color: s.color }} />
            <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
              {s.name}
            </span>
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, oklch(0.78 0.18 200 / 0.15), transparent 70%)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
