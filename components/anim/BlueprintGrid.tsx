"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * The coordinate-grid spine: faint vertical guide lines + axis bubbles that the
 * whole page references — the shared datum every discipline aligns to.
 * Fixed, decorative (aria-hidden), drawn once on load.
 */
const AXES = [
  { left: "12%", label: "A" },
  { left: "31%", label: "B" },
  { left: "50%", label: "C" },
  { left: "69%", label: "D" },
  { left: "88%", label: "E" },
];

export default function BlueprintGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(el, { opacity: 1 });
        gsap.fromTo(
          el.querySelectorAll("[data-guide]"),
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            duration: 1.6,
            ease: "power2.inOut",
            stagger: 0.1,
            delay: 0.25,
          },
        );
        gsap.from(el.querySelectorAll("[data-axis]"), {
          opacity: 0,
          y: -4,
          duration: 0.6,
          delay: 1.3,
          stagger: 0.06,
        });
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(el, { opacity: 1 });
      });
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] opacity-0"
    >
      {AXES.map((a) => (
        <div
          key={a.label}
          className="absolute top-0 bottom-0"
          style={{ left: a.left }}
        >
          <div
            data-guide
            className="h-full w-px bg-stone/30"
          />
          <span
            data-axis
            className="font-mono text-[0.5rem] tracking-[0.2em] text-stone-text/70 absolute top-[68px] -left-1.5 leading-none"
          >
            {a.label}
          </span>
        </div>
      ))}
    </div>
  );
}
