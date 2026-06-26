import Image from "next/image";
import { Section, Container } from "@/components/site/Section";
import ScrollReveal from "@/components/anim/ScrollReveal";
import ProjectFlagship from "@/components/sections/ProjectFlagship";
import { projetos } from "@/lib/content";
import { projects, type Project } from "@/lib/projects";
import { blur } from "@/lib/blur";

export default function Projetos() {
  const [flagship, ...rest] = projects;

  return (
    <Section id="projetos" ground="paper" className="pt-28 md:pt-40">
      <Container className="mb-14 md:mb-20">
        <p className="eyebrow">{projetos.sheet}</p>
        <ScrollReveal>
          <h2 className="mt-8 max-w-[20ch] font-display text-h2 font-normal text-ink">
            {projetos.heading}
          </h2>
        </ScrollReveal>
      </Container>

      <ProjectFlagship project={flagship} />

      <Container className="py-20 md:py-28">
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const needsImg = project.imageConfirm;
  return (
    <ScrollReveal className="group">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.location}`}
          fill
          placeholder="blur"
          blurDataURL={blur[project.image]}
          sizes="(max-width: 768px) 100vw, 44vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="tabular absolute left-4 top-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-paper/80">
          {project.id}
        </div>
        <div className="absolute right-4 top-4 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-paper/70">
          {project.typology}
        </div>
        {needsImg && (
          <div className="absolute bottom-3 right-3">
            <span className="confirm-tag bg-ink !text-blueprint-dark">foto confirmar</span>
          </div>
        )}
      </div>

      <div className="mt-5 border-t border-stone pt-4">
        <h3 className="font-display text-h3 font-normal text-ink">{project.title}</h3>
        <div className="tabular mt-3 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-stone-text">
          <span>
            {project.location} · {project.uf}
          </span>
          <span>
            Ano{" "}
            {project.year.includes("confirmar") ? (
              <span className="confirm-tag">confirmar</span>
            ) : (
              project.year
            )}
          </span>
          <span>
            {project.area.includes("confirmar") ? (
              <span className="confirm-tag">m² confirmar</span>
            ) : (
              `${project.area} m²`
            )}
          </span>
        </div>
        <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-stone-text">
          {project.blurb}
        </p>
      </div>
    </ScrollReveal>
  );
}
