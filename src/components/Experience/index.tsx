"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ExternalLink } from "lucide-react";
import { experiences, HERO_STATS } from "@/lib/content";
import { cn } from "@/lib/utils";
import { trackExperienceToggle, trackExternalLink } from "@/lib/analytics";

export default function Experience() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-titulo" className="border-b border-border">
      <div className="container mx-auto px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl">
          <header className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label mb-3">Experiência</p>
              <h2
                id="experiencia-titulo"
                className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-tight tracking-tight"
              >
                Onde construí software de verdade
              </h2>
            </div>

            <dl className="flex gap-8 border-t border-border pt-4 md:border-t-0 md:pt-0">
              <div>
                <dt className="section-label">Anos</dt>
                <dd className="font-display text-2xl tabular-nums">{HERO_STATS.years}+</dd>
              </div>
              <div>
                <dt className="section-label">Empresas</dt>
                <dd className="font-display text-2xl tabular-nums">{HERO_STATS.companies}</dd>
              </div>
            </dl>
          </header>

          <ol className="relative flex flex-col gap-0">
            <div
              className="absolute bottom-4 left-[11px] top-4 w-px bg-border"
              aria-hidden
            />

            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.company} exp={exp} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);
  const currentRole = exp.roles[0];

  return (
    <li className="relative pl-10 pb-10 last:pb-0">
      <span
        className={cn(
          "absolute left-0 top-1.5 size-[22px] border-2 border-background",
          exp.current ? "bg-primary" : "bg-muted-foreground/40"
        )}
        aria-hidden
      />

      <article className="border border-border bg-card p-5 md:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
          <div
            className={cn(
              "flex size-14 shrink-0 items-center justify-center overflow-hidden border border-border",
              exp.logoBg
            )}
          >
            <Image
              src={exp.logo}
              alt=""
              width={56}
              height={56}
              className="size-full object-contain p-1"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-lg font-medium text-foreground hover:text-primary"
                onClick={() => trackExternalLink(exp.company, "experience_section")}
              >
                {exp.company}
                <ExternalLink className="ml-1 inline size-3.5 opacity-50" aria-hidden />
              </a>
              <span className="section-label text-primary">{exp.type}</span>
              {exp.current && (
                <span className="text-xs font-medium text-primary">· Atual</span>
              )}
            </div>

            <p className="mt-1 font-medium text-foreground">{currentRole.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {exp.period} · {exp.location}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {exp.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias">
              {exp.technologies.map((tech) => (
                <li
                  key={tech}
                  className="border border-border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          type="button"
          className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          aria-expanded={open}
          onClick={() => {
            const next = !open;
            setOpen(next);
            trackExperienceToggle(exp.company, next ? "expand" : "collapse");
          }}
        >
          <ChevronDown
            className={cn("size-4 transition-transform", open && "rotate-180")}
            aria-hidden
          />
          {open ? "Ocultar detalhes" : "Ver conquistas"}
        </button>

        {open && (
          <div className="mt-4 space-y-6 border-t border-border pt-4">
            {exp.roles.map((role) => (
              <div key={role.title}>
                {exp.roles.length > 1 && (
                  <div className="mb-2 flex flex-col gap-0.5 sm:flex-row sm:justify-between">
                    <h3 className="text-sm font-semibold text-foreground">{role.title}</h3>
                    <span className="text-xs text-muted-foreground">{role.period}</span>
                  </div>
                )}
                <ul className="space-y-2">
                  {role.achievements.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 bg-primary" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </article>
    </li>
  );
}
