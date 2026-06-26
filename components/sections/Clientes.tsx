import Image from "next/image";
import { Section, Container } from "@/components/site/Section";
import ScrollReveal from "@/components/anim/ScrollReveal";
import { clientes } from "@/lib/content";
import { clients } from "@/lib/clients";

export default function Clientes() {
  return (
    <Section id="clientes" ground="paper" className="py-28 md:py-36">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <ScrollReveal>
            <p className="eyebrow">{clientes.sheet}</p>
            <h2 className="mt-6 max-w-[18ch] font-display text-h2 font-normal text-ink">
              {clientes.heading}
            </h2>
          </ScrollReveal>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-stone-text">
            uso de marca <span className="confirm-tag">confirmar</span>
          </p>
        </div>

        <ScrollReveal
          stagger={0.04}
          className="mt-16 grid grid-cols-2 gap-px border border-stone bg-stone sm:grid-cols-3 lg:grid-cols-6"
        >
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex aspect-[3/2] items-center justify-center bg-paper p-6"
            >
              <div className="relative h-8 w-full opacity-80 transition-opacity duration-300 hover:opacity-100">
                <Image
                  src={c.file}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 40vw, 15vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </ScrollReveal>
      </Container>
    </Section>
  );
}
