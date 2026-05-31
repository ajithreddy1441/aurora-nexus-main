export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-display text-gradient">Nova Vale</span>
          <span>© {new Date().getFullYear()} — Crafted with obsession.</span>
        </div>
        <div className="font-mono uppercase tracking-[0.25em]">Lisbon ⇄ Tokyo</div>
      </div>
    </footer>
  );
}
