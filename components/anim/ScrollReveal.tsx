"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  /** translate distance in px */
  y?: number;
  delay?: number;
  /** stagger direct children instead of revealing as one block */
  stagger?: number;
};

/**
 * The single entrance primitive every section uses. One place to honor
 * prefers-reduced-motion: full motion = fade+rise; reduced = instant.
 */
export default function ScrollReveal({
  children,
  className,
  y = 28,
  delay = 0,
  stagger,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets =
        stagger != null ? Array.from(el.children) : el;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(targets, {
          opacity: 0,
          y,
          duration: 0.9,
          delay,
          ease: "power3.out",
          stagger: stagger ?? 0,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(targets, { opacity: 1, y: 0 });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
