import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(96%,1100px)] items-center justify-between rounded-full px-5 py-3 transition-all",
        scrolled ? "glass-strong shadow-neon" : "glass",
      )}
    >
      <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold">
        <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-[image:var(--gradient-neon)]">
          <span className="absolute inset-[2px] rounded-full bg-background" />
          <span className="relative text-gradient">N</span>
        </span>
        <span className="text-gradient-aurora">Nova</span>
      </a>
      <nav className="hidden items-center gap-1 md:flex">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="group relative rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {l.label}
            <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-[image:var(--gradient-neon)] transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="relative overflow-hidden rounded-full px-4 py-2 text-xs font-medium text-primary-foreground shadow-neon"
        style={{ backgroundImage: "var(--gradient-neon)" }}
      >
        Let&apos;s talk
      </a>
    </motion.header>
  );
}
