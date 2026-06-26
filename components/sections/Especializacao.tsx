import { Section, Container } from "@/components/site/Section";
import ScrollReveal from "@/components/anim/ScrollReveal";
import { especializacao } from "@/lib/content";

export default function Especializacao() {
  return (
    <Section id="especializacao" ground="paper" className="py-28 md:py-40">
      <Container>
        <p className="eyebrow">{especializacao.sheet}</p>

        <ScrollReveal>
          <h2 className="mt-8 max-w-[20ch] font-display text-h2 font-normal text-ink">
            {especializacao.heading}
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
          <ScrollReveal stagger={0.12} className="space-y-6">
            {especializacao.body.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="max-w-[58ch] text-base leading-relaxed text-stone-text md:text-lg"
              >
                {p}
              </p>
            ))}
          </ScrollReveal>

          <div>
            <p className="eyebrow mb-5">Setores atendidos</p>
            <ScrollReveal
              stagger={0.08}
              className="grid grid-cols-1 gap-px border-y border-stone bg-stone sm:grid-cols-2"
            >
              {especializacao.sectors.map((s, i) => (
                <div
                  key={s}
                  className="flex items-baseline gap-3 bg-paper px-1 py-4 sm:px-4"
                >
                  <span className="font-mono text-[0.65rem] text-blueprint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-ink">{s}</span>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
