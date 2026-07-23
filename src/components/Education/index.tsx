"use client";

import Image, { type StaticImageData } from "next/image";
import { Calendar, CheckCircle2, Languages, Award } from "lucide-react";
import { BrandTextReveal } from "@/components/ui/brand-text-reveal";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";

import AnhangueraLogo from "@/img/education/anhanguera.png";
import CsaLogo from "@/img/education/csa.png";

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  status: "Em andamento" | "Concluído";
  description: string;
  logo: StaticImageData;
  logoBg: string;
  gradientFrom: string;
  gradientTo: string;
};

const education: EducationItem[] = [
  {
    degree: "Bacharelado em Engenharia de Software",
    institution: "Anhanguera Educacional",
    period: "jul 2024 — dez 2027",
    status: "Em andamento",
    description:
      "Formação em engenharia de software com foco em sistemas robustos, arquitetura e desenvolvimento de ponta a ponta.",
    logo: AnhangueraLogo,
    logoBg: "bg-[#FF4D00]",
    gradientFrom: "#FF4D00",
    gradientTo: "#FF8A3D",
  },
  {
    degree: "Ensino Médio",
    institution: "Colégio Santo Antônio (CSA)",
    period: "fev 2020 — dez 2023",
    status: "Concluído",
    description:
      "Ensino médio completo, com base em ciências exatas e preparação para o ensino superior.",
    logo: CsaLogo,
    logoBg: "bg-[#0B1F4A]",
    gradientFrom: "#0B1F4A",
    gradientTo: "#3B82F6",
  },
];

const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Profissional" },
  { name: "Alemão", level: "Elementar" },
];

const certifications = [
  { name: "Introdução ao C#" },
  { name: "Curso de Inglês" },
];

export default function Education() {
  return (
    <section id="formacao" aria-labelledby="formacao-titulo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/15 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto flex flex-col gap-14">
          <BlurFade delay={0.1} inView className="flex flex-col gap-3 max-w-2xl">
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Formação
            </p>
            <h2 id="formacao-titulo" className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Trajetória <BrandTextReveal text="Acadêmica" />
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              Da base no ensino médio à graduação em Engenharia de Software —
              o caminho que sustenta o que construo no dia a dia.
            </p>
          </BlurFade>

          {/* Timeline */}
          <div className="relative flex flex-col gap-0">
            <div className="absolute left-[27px] top-6 bottom-6 w-px bg-border/80 hidden sm:block" />

            {education.map((edu, index) => {
              const isCurrent = edu.status === "Em andamento";

              return (
                <BlurFade
                  key={edu.degree}
                  delay={0.12 + index * 0.1}
                  inView
                  className="relative sm:pl-20 pb-10 last:pb-0"
                >
                  {/* Dot */}
                  <div
                    className={cn(
                      "absolute left-[19px] top-8 size-4 rounded-full border-2 border-background hidden sm:block z-10",
                      isCurrent
                        ? "shadow-lg"
                        : "opacity-70"
                    )}
                    style={{
                      backgroundColor: edu.gradientFrom,
                      boxShadow: isCurrent
                        ? `0 0 16px ${edu.gradientFrom}66`
                        : undefined,
                    }}
                  />

                  <MagicCard
                    className="rounded-2xl"
                    gradientFrom={edu.gradientFrom}
                    gradientTo={edu.gradientTo}
                    gradientColor="#0f172a"
                  >
                    <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-5 p-5 sm:p-6">
                      <div
                        className={cn(
                          "size-14 sm:size-16 shrink-0 rounded-xl overflow-hidden border border-border/40 flex items-center justify-center",
                          edu.logoBg
                        )}
                      >
                        <Image
                          src={edu.logo}
                          alt={`Logo ${edu.institution}`}
                          width={64}
                          height={64}
                          className="size-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col gap-3">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
                              {edu.degree}
                            </h3>
                            <p className="text-sm font-medium text-muted-foreground mt-0.5">
                              {edu.institution}
                            </p>
                          </div>

                          {isCurrent ? (
                            <div className="w-fit rounded-full border border-primary/20 bg-primary/5">
                              <AnimatedShinyText className="inline-flex items-center gap-1.5 px-3 py-1 text-xs text-primary">
                                <span className="relative flex size-1.5">
                                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                                  <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                                </span>
                                Em andamento
                              </AnimatedShinyText>
                            </div>
                          ) : (
                            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
                              <CheckCircle2 className="size-3" />
                              Concluído
                            </span>
                          )}
                        </div>

                        <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="size-3.5" />
                          {edu.period}
                        </p>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </MagicCard>
                </BlurFade>
              );
            })}
          </div>

          {/* Idiomas + Certificações — sem cards pesados */}
          <BlurFade delay={0.25} inView>
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 border-t border-border/60 pt-10">
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-2">
                  <Languages className="size-4" />
                  Idiomas
                </h3>
                <ul className="flex flex-col gap-3">
                  {languages.map((lang) => (
                    <li
                      key={lang.name}
                      className="flex items-baseline justify-between gap-4 border-b border-border/40 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {lang.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {lang.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-2">
                  <Award className="size-4" />
                  Certificações
                </h3>
                <ul className="flex flex-col gap-3">
                  {certifications.map((cert) => (
                    <li
                      key={cert.name}
                      className="flex items-center gap-2.5 border-b border-border/40 pb-3 last:border-0 last:pb-0"
                    >
                      <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {cert.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
