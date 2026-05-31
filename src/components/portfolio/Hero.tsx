import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { MagneticButton } from "./MagneticButton";
import { ParticlesBg } from "./ParticlesBg";

const socials = [
  { icon: FiGithub, href: "https://github.com" },
  { icon: FiLinkedin, href: "https://linkedin.com" },
  { icon: FiTwitter, href: "https://twitter.com" },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <ParticlesBg />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[oklch(0.82_0.18_165)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.82_0.18_165)]" />
            </span>
            Available for select engagements — 2026
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
          >
            <span className="block text-foreground/90">Designing</span>
            <span className="block text-gradient-aurora">cinematic</span>
            <span className="block text-foreground/90">digital worlds.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
          >
            I&apos;m <span className="text-foreground">Nova Vale</span> — a full-stack engineer &amp;
            interaction designer crafting luxurious, performant, and immersive
            interfaces for ambitious brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton href="#projects">View selected work →</MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Start a project
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 flex items-center gap-4"
          >
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:text-foreground hover:shadow-neon"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-xs"
        >
          <span className="tracking-widest">SCROLL</span>
          <FiArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
