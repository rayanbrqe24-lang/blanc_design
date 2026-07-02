"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/layout/Reveal";

const STATS = [
  { value: 14, suffix: "yrs", label: "In manufacturing & design" },
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 6, suffix: "", label: "Industry awards" },
  { value: 30, suffix: "+", label: "In-house craftspeople" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          setValue(Math.floor(p * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-display text-5xl text-cloud md:text-6xl">
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-void px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} variant="scale">
            <Counter target={s.value} suffix={s.suffix} />
            <p className="eyebrow mt-3 text-cloud/50">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
