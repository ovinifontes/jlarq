import { Section, Container } from "@/components/site/Section";
import ScrollReveal from "@/components/anim/ScrollReveal";
import CountUp from "@/components/anim/CountUp";
import { numeros } from "@/lib/content";

export default function Numeros() {
  return (
    <Section id="numeros" ground="paper" className="py-24 md:py-32">
      <Container>
        <div className="flex items-end justify-between gap-6 border-b border-stone pb-6">
          <p className="max-w-[22ch] font-display text-h3 font-normal text-ink">
            {numeros.opener}
          </p>
          <span className="eyebrow hidden whitespace-nowrap sm:block">
            {numeros.sheet}
          </span>
        </div>

        {/* Title-block legend: hairline grid via gap-px over stone */}
        <ScrollReveal
          stagger={0.12}
          className="mt-px grid grid-cols-2 gap-px bg-stone lg:grid-cols-4"
        >
          {numeros.stats.map((s) => (
            <div key={s.label} className="bg-paper px-2 py-8 sm:px-6 sm:py-10">
              <div className="font-mono text-stat font-medium leading-none text-ink">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="eyebrow">{s.label}</span>
                {s.confirm && <span className="confirm-tag">confirmar</span>}
              </div>
            </div>
          ))}
        </ScrollReveal>
      </Container>
    </Section>
  );
}
