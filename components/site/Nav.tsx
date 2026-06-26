"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > window.innerHeight * 0.7);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "bg-paper/90 text-ink backdrop-blur-md border-b border-stone/60"
          : "bg-transparent text-paper",
      )}
    >
      <nav aria-label="Principal" className="mx-auto flex max-w-[88rem] items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <a href="#top" aria-label="JL Arquitetura — início" className="relative block h-6 w-[104px]">
          <Image
            src="/logo/logo-white.png"
            alt="JL Arquitetura"
            fill
            sizes="104px"
            className={cn(
              "object-contain object-left transition-opacity duration-500",
              scrolled ? "opacity-0" : "opacity-100",
            )}
          />
          <Image
            src="/logo/logo.png"
            alt=""
            fill
            sizes="104px"
            className={cn(
              "object-contain object-left transition-opacity duration-500",
              scrolled ? "opacity-100" : "opacity-0",
            )}
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[0.7rem] uppercase tracking-[0.16em] opacity-80 transition-opacity hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
        >
          Falar com a JL
        </a>
      </nav>
    </header>
  );
}
