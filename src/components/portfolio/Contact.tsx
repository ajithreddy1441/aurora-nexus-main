import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiArrowRight,
} from "react-icons/fi";

import { Section } from "./Section";
import { MagneticButton } from "./MagneticButton";

export function Contact() {
  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: FiTwitter,
      href: "https://x.com/yourusername",
      label: "Twitter",
    },
  ];

  return (
    <Section
      id="contact"
      eyebrow="05 — Contact"
      title={
        <span className="text-gradient-aurora">
          Let&apos;s build something unforgettable.
        </span>
      }
      description="Available for freelance projects, startup collaborations, and premium web experiences."
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-strong relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-8 md:p-12"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "linear-gradient(135deg, #00e5ff, #7c3aed, #00ffa3)",
          }}
        />

        <div className="relative z-10 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-display text-3xl font-bold md:text-5xl"
          >
            Have a project in mind?
          </motion.h3>

          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Whether you're launching a startup, redesigning your product,
            or building something entirely new, I'd love to hear about it.
          </p>

          <a
            href="mailto:ajithreddy@example.com"
            className="mt-10 inline-block text-2xl font-semibold text-gradient-aurora transition-all hover:scale-105 md:text-5xl"
          >
            ajithreddy@example.com
          </a>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="mailto:ajithreddy@example.com">
              <FiMail />
              <span>Send Email</span>
            </MagneticButton>

            <MagneticButton href="https://cal.com" variant="ghost">
              <span>Book a Call</span>
              <FiArrowRight />
            </MagneticButton>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    y: -4,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="glass flex h-12 w-12 items-center justify-center rounded-full transition-all hover:shadow-neon"
                  aria-label={item.label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}