import { motion } from "framer-motion";
<<<<<<< HEAD
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiArrowRight,
} from "react-icons/fi";

=======
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
>>>>>>> 2094b62ab4ca7fe386c4ddd6c03e33ad8e80f8f8
import { Section } from "./Section";
import { MagneticButton } from "./MagneticButton";

export function Contact() {
<<<<<<< HEAD
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

=======
>>>>>>> 2094b62ab4ca7fe386c4ddd6c03e33ad8e80f8f8
  return (
    <Section
      id="contact"
      eyebrow="05 — Contact"
<<<<<<< HEAD
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
        {/* Background Glow */}
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

            <MagneticButton
              href="https://cal.com"
              variant="ghost"
            >
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
=======
      title={<span className="text-gradient-aurora">Let&apos;s build something unforgettable.</span>}
      description="Booking selected projects for Q3 2026. Tell me about your idea — I reply within 48 hours."
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-strong relative mx-auto max-w-3xl overflow-hidden rounded-3xl p-10 text-center"
      >
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          style={{ background: "var(--gradient-aurora)" }}
        />
        <div className="relative">
          <a
            href="mailto:hello@novavale.studio"
            className="font-display text-3xl font-semibold tracking-tight text-gradient sm:text-5xl"
          >
            hello@novavale.studio
          </a>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="mailto:hello@novavale.studio">
              <FiMail /> Send an email
            </MagneticButton>
            <MagneticButton href="https://cal.com" variant="ghost">
              Book a call
            </MagneticButton>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            {[FiGithub, FiLinkedin, FiTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:text-foreground hover:shadow-neon"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
>>>>>>> 2094b62ab4ca7fe386c4ddd6c03e33ad8e80f8f8
          </div>
        </div>
      </motion.div>
    </Section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 2094b62ab4ca7fe386c4ddd6c03e33ad8e80f8f8
