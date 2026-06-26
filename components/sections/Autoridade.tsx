import Image from "next/image";
import { Section, Container } from "@/components/site/Section";
import ScrollReveal from "@/components/anim/ScrollReveal";
import { autoridade } from "@/lib/content";
import { blur } from "@/lib/blur";

export default function Autoridade() {
  return (
    <Section id="escritorio" ground="paper" className="py-28 md:py-40">
      <Container>
        <p className="eyebrow">{autoridade.sheet} · O ESCRITÓRIO</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
          <ScrollReveal>
            <figure className="relative">
              <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden bg-stone">
                <Image
                  src="/time/foto_joao.jpg"
                  alt={autoridade.name}
                  fill
                  placeholder="blur"
                  blurDataURL={blur["/time/foto_joao.jpg"]}
                  sizes="(max-width: 1024px) 80vw, 32vw"
                  className="object-cover object-top"
                />
                {/* blueprint corner registration */}
                <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-blueprint-dark/80" />
                <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-blueprint-dark/80" />
              </div>
              <figcaption className="mt-4 max-w-sm font-mono text-[0.65rem] uppercase tracking-[0.14em] text-stone-text">
                {autoridade.name} · CAU A39962-5{" "}
                <span className="confirm-tag">foto confirmar</span>
              </figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal stagger={0.1}>
            <h2 className="max-w-[18ch] font-display text-h2 font-normal text-ink">
              {autoridade.heading}
            </h2>
            <p className="mt-8 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-stone-text">
              {autoridade.name} — {autoridade.role}
            </p>
            {autoridade.bio.map((p) => (
              <p
                key={p.slice(0, 20)}
                className="mt-5 max-w-[58ch] text-base leading-relaxed text-stone-text"
              >
                {p}
              </p>
            ))}
            <p className="mt-8 max-w-[44ch] font-display text-h3 font-normal italic text-ink">
              {autoridade.closer}
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
