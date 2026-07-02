"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type Variant = "up" | "scale" | "slideLeft" | "slideRight" | "blur";

const VARIANT_STYLES: Record<Variant, { hidden: string; visible: string }> = {
  up: { hidden: "translate-y-10 opacity-0", visible: "translate-y-0 opacity-100" },
  scale: { hidden: "scale-90 opacity-0", visible: "scale-100 opacity-100" },
  slideLeft: { hidden: "-translate-x-16 opacity-0", visible: "translate-x-0 opacity-100" },
  slideRight: { hidden: "translate-x-16 opacity-0", visible: "translate-x-0 opacity-100" },
  blur: { hidden: "opacity-0 blur-md scale-105", visible: "opacity-100 blur-0 scale-100" },
};

export default function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const styles = VARIANT_STYLES[variant];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={clsx(
        "transition-all duration-[1000ms] ease-signature",
        visible ? styles.visible : styles.hidden,
        className
      )}
    >
      {children}
    </div>
  );
}
