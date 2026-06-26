import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Section, Container } from "@/components/site/Section";
import ScrollReveal from "@/components/anim/ScrollReveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cta, contato, nav } from "@/lib/content";

export default function Contato() {
  return (
    <Section id="contato" ground="ink" className="pt-28 md:pt-40">
      <Container>
        <p className="eyebrow eyebrow-on-dark">{cta.sheet}</p>

        <ScrollReveal stagger={0.1}>
          <h2 className="mt-8 max-w-[16ch] font-display text-display font-normal leading-[1.02] text-paper">
            {cta.heading}
          </h2>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-stone-dark">
            {cta.subhead}
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <a
              href={contato.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "primary" }))}
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> Chamar no WhatsApp
            </a>
            <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-stone-dark">
              {contato.whatsapp.label}
            </p>
          </div>

          <dl className="grid gap-px border-y border-paper/15 bg-paper/10 sm:grid-cols-1">
            <ContactRow icon={<Phone className="h-4 w-4" />} label="Telefone" value={contato.phone.label} href={contato.phone.href} />
            <ContactRow icon={<Mail className="h-4 w-4" />} label="E-mail" value={contato.email.label} href={contato.email.href} />
            <ContactRow icon={<MapPin className="h-4 w-4" />} label="Escritório" value={contato.address} />
          </dl>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-stone-dark">
          {contato.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-paper"
            >
              {s.label} {s.handle}
            </a>
          ))}
        </div>
      </Container>

      <footer className="mt-24 border-t border-paper/15">
        <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
          <div className="relative h-6 w-[120px]">
            <Image src="/logo/logo-white.png" alt="JL Arquitetura" fill sizes="120px" className="object-contain object-left" />
          </div>
          <nav aria-label="Rodapé" className="flex flex-wrap gap-x-7 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-stone-dark">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-paper">
                {n.label}
              </a>
            ))}
          </nav>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-stone-dark/70">
            © {new Date().getFullYear()} JL Arquitetura e Engenharia · CAU A39962-5
          </p>
        </Container>
      </footer>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const body = (
    <div className="flex items-start gap-4 bg-ink px-1 py-5 sm:px-4">
      <span className="mt-0.5 text-stone-dark">{icon}</span>
      <span className="flex flex-col gap-1">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-stone-dark">
          {label}
        </span>
        <span className="font-mono text-sm tracking-[0.03em] text-paper">{value}</span>
      </span>
    </div>
  );
  return href ? (
    <a href={href} className="transition-colors hover:bg-paper/5">
      {body}
    </a>
  ) : (
    body
  );
}
