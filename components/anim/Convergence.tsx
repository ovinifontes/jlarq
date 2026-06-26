"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * THE SIGNATURE. Four discipline drawings (ARQ / EST / ELE / HID) arrive
 * misregistered — like uncoordinated sheets — and converge into one crisp,
 * compatibilizado drawing. Integration made literal; cooperativism as a verb.
 *
 * mode="enter"  → plays once when it scrolls in (Tese echo + Processo climax)
 * mode="scrub"  → progress maps to scroll
 */

const LAYERS = [
  { key: "ARQ", dx: -34, dy: -22, rot: -2.6, color: "var(--color-blueprint-dark)" },
  { key: "EST", dx: 30, dy: -12, rot: 1.8, color: "var(--color-disc-est)" },
  { key: "ELE", dx: -18, dy: 26, rot: 2.8, color: "var(--color-stone-dark)" },
  { key: "HID", dx: 24, dy: 20, rot: -1.6, color: "var(--color-disc-hid)" },
];

function PlanFragment({ color }: { color: string }) {
  return (
    <g stroke={color} strokeWidth="1.25" fill="none" vectorEffect="non-scaling-stroke">
      <path d="M10 10 H250 V160 H10 Z" />
      <path d="M150 10 V160" />
      <path d="M150 92 H250" />
      <path d="M10 92 H150" />
      <path d="M150 132 A22 22 0 0 1 172 154" />
      <circle cx="80" cy="50" r="2.4" />
      <circle cx="210" cy="50" r="2.4" />
      <circle cx="80" cy="125" r="2.4" />
    </g>
  );
}

export default function Convergence({
  mode = "enter",
  className,
}: {
  mode?: "enter" | "scrub";
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      // Scope to THIS instance only (global selector would cross-animate the
      // second Convergence on the page).
      const layers = gsap.utils.toArray<HTMLElement>(
        el.querySelectorAll("[data-layer]"),
      );
      const merged = el.querySelector("[data-merged]");
      const discLabels = el.querySelectorAll("[data-disc]");

      const setMisregistered = () => {
        layers.forEach((layer, i) => {
          gsap.set(layer, {
            x: LAYERS[i].dx,
            y: LAYERS[i].dy,
            rotate: LAYERS[i].rot,
            opacity: 0.55,
            transformOrigin: "center center",
          });
        });
        gsap.set(merged, { opacity: 0 });
        gsap.set(discLabels, { opacity: 1 });
      };

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        setMisregistered();

        const build = (tl: gsap.core.Timeline) => {
          tl.to(layers, {
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 0.85,
            duration: 1,
            ease: "power3.inOut",
            stagger: 0.06,
          })
            .to(discLabels, { opacity: 0.25, duration: 0.4 }, "-=0.4")
            .to(merged, { opacity: 1, duration: 0.5 }, "-=0.2");
        };

        if (mode === "scrub") {
          build(
            gsap.timeline({
              scrollTrigger: { trigger: el, start: "top 80%", end: "top 30%", scrub: 0.5 },
            }),
          );
        } else {
          build(
            gsap.timeline({
              scrollTrigger: { trigger: el, start: "top 75%", once: true },
            }),
          );
        }
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(layers, { x: 0, y: 0, rotate: 0, opacity: 0.85 });
        gsap.set(merged, { opacity: 1 });
        gsap.set(discLabels, { opacity: 0.25 });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className={cn("relative aspect-[4/3] w-full", className)} aria-hidden>
      <svg viewBox="0 0 260 170" className="absolute inset-0 h-full w-full overflow-visible">
        {LAYERS.map((l) => (
          <g data-layer key={l.key}>
            <PlanFragment color={l.color} />
          </g>
        ))}
        <g data-merged>
          <PlanFragment color="var(--color-blueprint-dark)" />
          <line x1="10" y1="172" x2="250" y2="172" stroke="var(--color-blueprint-dark)" strokeWidth="1" />
        </g>
      </svg>

      <span data-disc className="absolute left-[6%] top-[8%] font-mono text-[0.6rem] tracking-[0.18em] text-stone-dark">
        ARQ
      </span>
      <span data-disc className="absolute right-[6%] top-[12%] font-mono text-[0.6rem] tracking-[0.18em] text-stone-dark">
        EST
      </span>
      <span data-disc className="absolute left-[8%] bottom-[10%] font-mono text-[0.6rem] tracking-[0.18em] text-stone-dark">
        ELE
      </span>
      <span data-disc className="absolute right-[8%] bottom-[8%] font-mono text-[0.6rem] tracking-[0.18em] text-stone-dark">
        HID
      </span>

      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[0.6rem] uppercase tracking-[0.22em] text-blueprint-dark">
        Compatibilizado
      </span>
    </div>
  );
}
