"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import type { Project } from "@/lib/projects";
import { blur } from "@/lib/blur";

/**
 * The ONE fully-annotated moment: the flagship case with a real measuring cota
 * drawn over the facade. Scarcity is the point — no other photo gets this.
 */
export default function ProjectFlagship({ project }: { project: Project }) {
  const root = useRef<HTMLDivElement>(null);
  const imgWrap = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(imgWrap.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.5 },
        });
        gsap.fromTo(
          "[data-draw]",
          { strokeDashoffset: (i, t) => (t as SVGGeometryElement).getTotalLength?.() ?? 900 },
          {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.inOut",
            stagger: 0.12,
            scrollTrigger: { trigger: el, start: "top 70%", once: true },
          },
        );
        gsap.from("[data-cota-label]", {
          opacity: 0,
          duration: 0.6,
          scrollTrigger: { trigger: el, start: "top 55%", once: true },
        });
        gsap.from("[data-meta]", {
          opacity: 0,
          y: 20,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 65%", once: true },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-draw]", { strokeDashoffset: 0 });
        gsap.set("[data-cota-label],[data-meta]", { opacity: 1, y: 0 });
      });
    },
    { scope: root },
  );

  return (
    // Full-bleed: relies on body{overflow-x:hidden} (globals.css) to avoid a
    // horizontal scrollbar from w-screen/100vw on classic-scrollbar desktops.
    <div
      ref={root}
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-ink"
    >
      <div className="relative h-[68svh] min-h-[460px] w-full md:h-[80svh]">
        <div ref={imgWrap} className="absolute inset-0 scale-[1.12]">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.location}`}
            fill
            placeholder="blur"
            blurDataURL={blur[project.image]}
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10" />

        {/* honest measuring cota */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-[18%] mx-auto h-24 w-[78%]"
          viewBox="0 0 1000 80"
          preserveAspectRatio="xMidYMid meet"
        >
          <g stroke="var(--color-blueprint-dark)" strokeWidth="1.4" fill="none">
            <line data-draw x1="20" y1="58" x2="20" y2="20" strokeDasharray="40" />
            <line data-draw x1="980" y1="58" x2="980" y2="20" strokeDasharray="40" />
            <line data-draw x1="20" y1="40" x2="980" y2="40" strokeDasharray="960" />
            <path data-draw d="M20 40 l12 -5 v10 z" fill="var(--color-blueprint-dark)" strokeDasharray="48" />
            <path data-draw d="M980 40 l-12 -5 v10 z" fill="var(--color-blueprint-dark)" strokeDasharray="48" />
          </g>
          <text
            data-cota-label
            x="500"
            y="30"
            textAnchor="middle"
            fill="var(--color-blueprint-dark)"
            className="font-mono"
            style={{ fontSize: 15, letterSpacing: "0.14em" }}
          >
            FACHADA · [confirmar] m
          </text>
        </svg>

        {/* catalog number */}
        <div className="tabular absolute left-6 top-6 font-mono text-xs uppercase tracking-[0.18em] text-paper/70 md:left-12">
          {project.id}
          {project.flagship && <span className="ml-3 text-blueprint-dark">FLAGSHIP</span>}
        </div>

        {/* metadata plate */}
        <div
          data-meta
          className="absolute inset-x-0 bottom-0 mx-auto max-w-[88rem] px-6 pb-10 text-paper md:px-12 lg:px-20"
        >
          <h3 className="max-w-[20ch] font-display text-h2 font-normal leading-tight">
            {project.title}
          </h3>
          <p className="mt-4 max-w-[60ch] text-sm text-paper/75 md:text-base">
            {project.blurb}
          </p>
          <dl className="tabular mt-6 flex flex-wrap gap-x-10 gap-y-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-paper/70">
            <Meta k="Cliente" v={project.client} />
            <Meta k="Local" v={`${project.location} · ${project.uf}`} />
            <Meta k="Ano" v={project.year} confirm={project.year.includes("confirmar")} />
            <Meta k="Área" v={project.area} confirm={project.area.includes("confirmar")} />
            <Meta k="Tipologia" v={project.typology} />
          </dl>
        </div>
      </div>
    </div>
  );
}

function Meta({ k, v, confirm }: { k: string; v: string; confirm?: boolean }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-paper/45">{k}</dt>
      <dd className="text-paper/85 normal-case tracking-normal">
        {confirm ? <span className="confirm-tag">confirmar</span> : v}
      </dd>
    </div>
  );
}
