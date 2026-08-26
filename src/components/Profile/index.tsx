"use client";

import ProfilePhoto from "@/img/foto-perfil.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Download, Mail } from "lucide-react";
import { HERO_STATS, PHILOSOPHY, CAREER_SINCE } from "@/lib/content";
import { trackRecruiterCta, trackResumeDownload } from "@/lib/analytics";

export default function Profile() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="border-b border-border pt-[4.5rem]"
    >
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-8 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 border border-primary/30 bg-[hsl(var(--accent-soft))] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                Disponível — remoto ou híbrido
              </span>
              <span className="section-label">Desde {CAREER_SINCE}</span>
            </div>

            <div className="flex flex-col gap-4">
              <h1
                id="hero-title"
                className="font-display text-[clamp(2.5rem,6vw,4rem)] font-medium leading-[1.05] tracking-tight text-foreground"
              >
                Luís Henrique Wendt
              </h1>
              <p className="max-w-xl text-xl font-medium text-foreground md:text-2xl">
                Desenvolvedor Full Stack Pleno
              </p>
              <p className="max-w-xl text-base text-muted-foreground md:text-lg">
                .NET · React · Next.js · Java · Spring Boot · PostgreSQL · AWS
              </p>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
              Construo aplicações web, sistemas corporativos e produtos SaaS — do
              entendimento do problema até implementação, infraestrutura e produção.
              Praticante de{" "}
              <span className="font-medium text-foreground">
                desenvolvimento assistido por IA
              </span>{" "}
              com Cursor, Claude Code e Codex no fluxo diário.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[hsl(14,63%,38%)]"
                onClick={() => trackRecruiterCta("contact", "hero_section")}
              >
                <Mail className="size-4" aria-hidden />
                Entrar em contato
              </a>
              <a
                href="/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary"
                onClick={() => trackResumeDownload("hero_section")}
              >
                <Download className="size-4" aria-hidden />
                Download CV
              </a>
            </div>

            <dl className="grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <dt className="section-label mb-1">Experiência</dt>
                <dd className="font-display text-3xl font-medium tabular-nums text-foreground">
                  {HERO_STATS.years}+
                  <span className="sr-only"> anos</span>
                </dd>
                <dd className="mt-0.5 text-xs text-muted-foreground" aria-hidden>
                  anos
                </dd>
              </div>
              <div>
                <dt className="section-label mb-1">Projetos</dt>
                <dd className="font-display text-3xl font-medium tabular-nums text-foreground">
                  {HERO_STATS.projects}
                </dd>
                <dd className="mt-0.5 text-xs text-muted-foreground" aria-hidden>
                  em produção
                </dd>
              </div>
              <div>
                <dt className="section-label mb-1">Empresas</dt>
                <dd className="font-display text-3xl font-medium tabular-nums text-foreground">
                  {HERO_STATS.companies}
                </dd>
                <dd className="mt-0.5 text-xs text-muted-foreground" aria-hidden>
                  CLT + fundador
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <figure className="relative">
              <div className="absolute -left-3 top-6 hidden h-[calc(100%-3rem)] w-px bg-primary md:block" aria-hidden />
              <div className="relative aspect-[4/5] max-w-md overflow-hidden border border-border bg-[hsl(var(--paper-deep))]">
                <Image
                  src={ProfilePhoto}
                  alt="Luís Henrique Wendt — Desenvolvedor Full Stack Pleno"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                {PHILOSOPHY}
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-16 hidden justify-center md:flex">
          <Link
            href="#sobre"
            className="section-label inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Rolar para a seção Sobre"
          >
            Sobre mim
            <ArrowDown className="size-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
