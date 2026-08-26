"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/content";
import { trackProjectClick } from "@/lib/analytics";

export default function Projects() {
  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="border-b border-border bg-[hsl(var(--paper-deep))]/30">
      <div className="container mx-auto px-6 py-20 md:py-24">
        <header className="mx-auto mb-12 max-w-3xl">
          <p className="section-label mb-3">Projetos</p>
          <h2
            id="projetos-titulo"
            className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-tight tracking-tight"
          >
            Produtos em produção — não mockups
          </h2>
          <p className="mt-4 text-muted-foreground">
            SaaS e aplicações web que construí e mantenho, com stack real e usuários.
          </p>
        </header>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground">
          Mais repositórios em{" "}
          <a
            href="https://github.com/luishw12"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link"
            onClick={() => trackProjectClick("view_github_profile", "github_profile")}
          >
            github.com/luishw12
          </a>
        </p>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const cover = project.images[imageIndex] ?? project.images[0];
  const hasGallery = project.images.length > 1;

  return (
    <article
      className="group flex flex-col border border-border bg-card"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-[hsl(var(--paper-deep))]">
        <Image
          src={cover}
          alt={`Captura de tela do projeto ${project.title}`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {hasGallery && (
          <div className="absolute bottom-2 right-2 flex gap-1">
            {project.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Ver imagem ${idx + 1} de ${project.images.length}`}
                className={`size-2 border border-background ${
                  idx === imageIndex ? "bg-primary" : "bg-background/80"
                }`}
                onClick={() => {
                  setImageIndex(idx);
                  trackProjectClick("gallery_nav", project.title);
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <div>
          <p className="section-label mb-1">{project.subtitle}</p>
          <h3 className="font-display text-xl font-medium text-foreground">{project.title}</h3>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2" aria-label="Tecnologias do projeto">
          {project.technologies.slice(0, 5).map((tech) => (
            <li
              key={tech}
              className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground"
            >
              {tech}
            </li>
          ))}
          {project.technologies.length > 5 && (
            <li className="text-[11px] text-muted-foreground">
              +{project.technologies.length - 5}
            </li>
          )}
        </ul>

        <div className="flex flex-wrap gap-3 pt-1">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-[hsl(14,63%,38%)]"
              onClick={() => trackProjectClick("visit_site", project.title)}
            >
              Ver site
              <ExternalLink className="size-3.5" aria-hidden />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary"
              onClick={() => trackProjectClick("view_code", project.title)}
            >
              Código
              <Github className="size-3.5" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
