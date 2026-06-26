"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { hero } from "@/lib/content";
import { blur } from "@/lib/blur";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowVideo, setAllowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // Decide whether to load the institutional film: desktop, not reduced-motion,
  // not data-saver. The headline never waits on this.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const cheap = conn?.saveData || /(2g|3g)/.test(conn?.effectiveType ?? "");
    if (!reduced && desktop && !cheap) setAllowVideo(true);
  }, []);

  useEffect(() => {
    if (allowVideo && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [allowVideo]);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Load reveal — independent of the video.
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-hero-eyebrow]", { opacity: 0, y: 14, duration: 0.7, delay: 0.15 })
          .from(
            "[data-hero-line]",
            {
              clipPath: "inset(0 0 100% 0)",
              y: 24,
              duration: 1.05,
              stagger: 0.12,
            },
            "-=0.35",
          )
          .from("[data-hero-sub]", { opacity: 0, y: 18, duration: 0.8 }, "-=0.5")
          .from("[data-hero-cta]", { opacity: 0, y: 16, duration: 0.7, stagger: 0.1 }, "-=0.5")
          .from("[data-hero-foot]", { opacity: 0, duration: 0.8 }, "-=0.4");

        // Draw the registration crosshair.
        gsap.fromTo(
          "[data-draw]",
          { strokeDashoffset: (i, t) => (t as SVGGeometryElement).getTotalLength?.() ?? 80 },
          {
            strokeDashoffset: 0,
            duration: 1.1,
            ease: "power2.inOut",
            delay: 1,
            stagger: 0.12,
          },
        );

        // Subtle media parallax.
        gsap.to(mediaRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 0.5 },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          "[data-hero-eyebrow],[data-hero-line],[data-hero-sub],[data-hero-cta],[data-hero-foot]",
          { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" },
        );
        gsap.set("[data-draw]", { strokeDashoffset: 0 });
      });
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink text-paper"
    >
      {/* Media: optimized poster (LCP) + gated video over it */}
      <div ref={mediaRef} className="absolute inset-0 -z-0 scale-[1.12]">
        <Image
          src="/hero/poster.jpg"
          alt="Sede Sicredi projetada pela JL Arquitetura"
          fill
          priority
          placeholder="blur"
          blurDataURL={blur["/hero/poster.jpg"]}
          sizes="100vw"
          className="object-cover"
        />
        {allowVideo && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            onCanPlay={() => setVideoReady(true)}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
              videoReady ? "opacity-100" : "opacity-0",
            )}
            aria-hidden
          >
            <source src="/hero/hero.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* Scrim: bottom-left weighted for text legibility, kept sober */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/15" />
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />

      {/* Signature: a quiet blueprint registration mark — Cuiabá's real
          coordinates as the page's datum (specific, never generic decoration) */}
      <div
        data-hero-foot
        className="absolute right-6 top-24 z-10 hidden items-center gap-3 md:right-12 lg:right-20 lg:flex"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          aria-hidden
          stroke="var(--color-blueprint-dark)"
          strokeWidth="1.1"
        >
          <circle data-draw cx="18" cy="18" r="11" strokeDasharray="70" />
          <line data-draw x1="18" y1="1" x2="18" y2="35" strokeDasharray="34" />
          <line data-draw x1="1" y1="18" x2="35" y2="18" strokeDasharray="34" />
        </svg>
        <div className="text-right font-mono text-[0.6rem] uppercase leading-tight tracking-[0.18em] text-paper/55">
          <div>Cuiabá — MT</div>
          <div>15°36′ S · 56°06′ W</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[88rem] px-6 pb-20 pt-32 md:px-12 lg:px-20 lg:pb-28">
        <p data-hero-eyebrow className="eyebrow eyebrow-on-dark">
          {hero.eyebrowPre} <span className="confirm-tag">confirmar</span>{" "}
          {hero.eyebrowPost}
        </p>

        <h1 className="mt-7 max-w-[18ch] font-display text-display font-normal text-paper">
          <span data-hero-line className="block [clip-path:inset(0_0_0%_0)]">
            Arquitetura para o cooperativismo
          </span>
          <span data-hero-line className="block [clip-path:inset(0_0_0%_0)]">
            financeiro brasileiro.
          </span>
        </h1>

        <p
          data-hero-sub
          className="mt-8 max-w-[52ch] text-base leading-relaxed text-paper/80 md:text-lg"
        >
          {hero.subhead}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a data-hero-cta href="#contato" className={cn(buttonVariants({ variant: "primary" }))}>
            {hero.ctaPrimary}
          </a>
          <a
            data-hero-cta
            href="#projetos"
            className={cn(buttonVariants({ variant: "outline-dark" }))}
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Functional hero footer strip (not a bouncing arrow) */}
      <div
        data-hero-foot
        className="relative z-10 border-t border-paper/15"
      >
        <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-6 py-4 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-paper/60 md:px-12 lg:px-20">
          <span>Escritório de arquitetura e engenharia</span>
          <span className="hidden sm:inline">{hero.sheet}</span>
          <span>Role para o manifesto ↓</span>
        </div>
      </div>
    </section>
  );
}
