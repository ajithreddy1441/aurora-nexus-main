import { motion } from "framer-motion";
import { Section } from "./Section";

const stats = [
  { k: "7+", v: "Years crafting interfaces" },
  { k: "60+", v: "Shipped products" },
  { k: "12", v: "Awwwards & FWA" },
  { k: "∞", v: "Cups of espresso" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={<span className="text-gradient-aurora">A designer who codes, an engineer who dreams.</span>}
      description="I bridge the gap between brand, motion, and engineering — building products that feel alive in the hand and unforgettable in the mind."
    >
      <div className="grid items-start gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong relative overflow-hidden rounded-3xl p-8"
        >
          <div
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-60 blur-3xl animate-pulse-glow"
            style={{ background: "var(--gradient-aurora)" }}
          />
          <p className="relative text-lg leading-relaxed text-foreground/85">
            Based between Lisbon and Tokyo, I partner with founders, studios,
            and creative directors to ship work that wins both hearts and
            conversions. My toolkit spans React, TypeScript, WebGL, motion
            design, and a deep love for the details that make digital products
            feel inevitable.
          </p>
          <p className="relative mt-4 text-muted-foreground">
            When I&apos;m not pushing pixels, I&apos;m writing about interaction
            craft, mentoring young designers, and DJing ambient sets.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:shadow-neon"
            >
              <div className="font-display text-4xl font-bold text-gradient">
                {s.k}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[image:var(--gradient-neon)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
