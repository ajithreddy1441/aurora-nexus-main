export function AuroraBg() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 mask-fade-radial" />
      <div
        className="absolute -top-40 -left-40 h-[55vw] w-[55vw] rounded-full opacity-50 mix-blend-screen blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.18 200 / 0.55), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[50vw] w-[50vw] rounded-full opacity-50 mix-blend-screen blur-3xl animate-blob"
        style={{
          animationDelay: "-4s",
          background: "radial-gradient(circle, oklch(0.72 0.27 330 / 0.5), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[45vw] w-[45vw] rounded-full opacity-50 mix-blend-screen blur-3xl animate-blob"
        style={{
          animationDelay: "-8s",
          background: "radial-gradient(circle, oklch(0.68 0.22 290 / 0.55), transparent 70%)",
        }}
      />
    </div>
  );
}
