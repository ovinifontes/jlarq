import { Section, Container } from "@/components/site/Section";
import ScrollReveal from "@/components/anim/ScrollReveal";
import Convergence from "@/components/anim/Convergence";
import { processo } from "@/lib/content";

export default function Processo() {
  return (
    <Section id="processo" ground="ink" className="py-28 md:py-40">
      <Container>
        <p className="eyebrow eyebrow-on-dark">{processo.sheet} · COMO TRABALHAMOS</p>
        <ScrollReveal>
          <h2 className="mt-8 max-w-[24ch] font-display text-h2 font-normal text-paper">
            {processo.heading}
          </h2>
        </ScrollReveal>

        <div className="mt-16 md:mt-24">
          {processo.steps.map((step) => {
            const isClimax = step.n === "03";
            return (
              <div
                key={step.n}
                className="grid gap-6 border-t border-paper/15 py-10 md:grid-cols-[6rem_1fr] md:gap-12 md:py-14"
              >
                <div className="font-mono text-stat font-medium leading-none text-blueprint-dark">
                  {step.n}
                </div>

                <div
                  className={
                    isClimax
                      ? "grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center"
                      : ""
                  }
                >
                  <ScrollReveal>
                    <h3 className="font-display text-h3 font-normal text-paper">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-stone-dark">
                      {step.body}
                    </p>
                  </ScrollReveal>

                  {isClimax && (
                    <div className="px-6 pt-6 lg:pt-0">
                      <Convergence mode="enter" className="mx-auto max-w-sm" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
