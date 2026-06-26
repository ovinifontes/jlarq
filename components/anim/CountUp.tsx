"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const fmt = new Intl.NumberFormat("pt-BR");

export default function CountUp({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const obj = { v: 0 };
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        el.textContent = "0" + suffix;
        gsap.to(obj, {
          v: value,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate: () => {
            el.textContent = fmt.format(Math.round(obj.v)) + suffix;
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        el.textContent = fmt.format(value) + suffix;
      });
    },
    { scope: ref },
  );

  // SSR/no-JS fallback shows the real value.
  return (
    <span ref={ref} className={cn("tabular", className)}>
      {fmt.format(value)}
      {suffix}
    </span>
  );
}
