import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBg() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;
  return (
    <Particles
      id="tsparticles"
      className="pointer-events-none absolute inset-0 -z-10"
      options={{
        fpsLimit: 60,
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 70, density: { enable: true } },
          color: { value: ["#7dd3fc", "#e879f9", "#a78bfa"] },
          shape: { type: "circle" },
          opacity: { value: { min: 0.15, max: 0.7 } },
          size: { value: { min: 0.6, max: 2.2 } },
          links: {
            enable: true,
            color: "#7dd3fc",
            distance: 130,
            opacity: 0.18,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.45,
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
