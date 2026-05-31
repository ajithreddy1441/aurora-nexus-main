import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  {
    year: "2024 — Now",
    role: "Independent Design Engineer",
    company: "Nova Studio",
    desc: "Partnering with venture-backed startups and creative agencies on flagship product launches.",
  },
  {
    year: "2022 — 2024",
    role: "Senior Product Designer",
    company: "Orbit Labs",
    desc: "Led the design system, marketing site, and onboarding for a Series-B developer platform.",
  },
  {
    year: "2020 — 2022",
    role: "Front-end Engineer",
    company: "Helios Interactive",
    desc: "Built award-winning campaign sites for global brands — featured on Awwwards & FWA.",
  },
  {
    year: "2018 — 2020",
    role: "Designer & Developer",
    company: "Freelance",
    desc: "Started my craft shipping interfaces for indie founders across Europe & Asia.",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 — Journey"
      title={<>Years of <span className="text-gradient">deliberate practice</span></>}
      description="A short timeline of the studios and teams I&apos;ve had the privilege to build alongside."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-[image:linear-gradient(to_bottom,transparent,oklch(0.78_0.18_200_/_0.5),oklch(0.72_0.27_330_/_0.5),transparent)] md:left-1/2" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-gradient">
                  {it.year}
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold">{it.role}</h3>
                <div className="text-sm text-muted-foreground">{it.company}</div>
              </div>
              <div className="absolute left-4 top-1.5 -translate-x-1/2 md:left-1/2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[oklch(0.78_0.18_200)] opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[image:var(--gradient-neon)] shadow-neon" />
                </span>
              </div>
              <div className="mt-3 pl-12 text-sm text-muted-foreground md:mt-0 md:pl-0">
                <p className="glass rounded-2xl p-4">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
