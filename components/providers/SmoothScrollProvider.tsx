"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const NAV_OFFSET = 80; // mirrors scroll-mt-20 on sections

/**
 * Single source of truth for smooth scroll + the GSAP ticker.
 * - Lenis driven from gsap.ticker (one rAF) so scrub/pin never desync.
 * - prefers-reduced-motion: skip Lenis (native scroll).
 * - Anchor nav always moves focus (a11y) in BOTH motion modes; scrolls via
 *   Lenis when present, native scrollIntoView otherwise.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let lenis: Lenis | null = null;
    let raf: ((time: number) => void) | null = null;
    let cancelled = false;

    if (!prefersReduced) {
      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      });
      lenis.on("scroll", ScrollTrigger.update);
      raf = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }

    // Recompute trigger positions once fonts swap in (text height changes).
    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });

    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id) as HTMLElement | null;
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, { offset: -NAV_OFFSET, duration: 1.2 });
      else el.scrollIntoView({ behavior: "auto", block: "start" });
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelled = true;
      document.removeEventListener("click", onAnchorClick);
      if (raf) gsap.ticker.remove(raf);
      if (lenis) lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
