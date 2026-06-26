import { Section, Container } from "@/components/site/Section";
import ScrollReveal from "@/components/anim/ScrollReveal";
import Convergence from "@/components/anim/Convergence";
import { tese } from "@/lib/content";

export default function Tese() {
  return (
    <Section id="tese" ground="ink" className="py-28 md:py-40">
      <Container>
        <p className="eyebrow eyebrow-on-dark">{tese.sheet} · O PRINCÍPIO</p>

        <div className="mt-14 grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
          <ScrollReveal stagger={0.12}>
            <p className="text-base text-stone-dark">{tese.opener}</p>

            <h2 className="mt-5 max-w-[18ch] font-display text-h2 font-normal italic leading-[1.05] text-paper">
              {tese.principle}
            </h2>

            <p className="mt-10 text-lg text-paper">{tese.bridge}</p>

            <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-stone-dark">
              {tese.body}
            </p>

            <p className="mt-10 max-w-[40ch] font-display text-h3 font-normal text-paper">
              {tese.closer}
            </p>
          </ScrollReveal>

          <div className="flex items-center justify-center px-6 lg:px-0">
            <Convergence mode="enter" className="mx-auto max-w-md" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
