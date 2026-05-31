import { motion } from "framer-motion";

const words = ["Cinematic", "Luxurious", "Performant", "Immersive", "Interactive", "Modern", "Award-winning"];

export function Marquee() {
  return (
    <div className="relative -my-8 overflow-hidden py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span
            key={i}
            className="font-display text-5xl font-bold tracking-tight text-foreground/10 sm:text-7xl"
          >
            {w} <span className="text-gradient">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
