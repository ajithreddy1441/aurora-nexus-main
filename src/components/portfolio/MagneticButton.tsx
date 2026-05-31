import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  href?: string;
};

export function MagneticButton({ children, className, onClick, variant = "primary", href }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.35);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const styles =
    variant === "primary"
      ? "text-primary-foreground shadow-neon"
      : "glass text-foreground";

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      <motion.button
        type="button"
        onClick={onClick}
        whileTap={{ scale: 0.96 }}
        className={cn(
          "group relative overflow-hidden rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors",
          styles,
          className,
        )}
        style={
          variant === "primary"
            ? { backgroundImage: "var(--gradient-neon)" }
            : undefined
        }
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
      </motion.button>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  }
  return inner;
}
