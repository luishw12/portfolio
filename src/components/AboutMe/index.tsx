"use client";

import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, GitBranch, Heart, Coffee, Lightbulb, Target } from "lucide-react";
import { getYearsOfExperience } from "@/lib/utils";
import { BrandTextReveal } from "@/components/ui/brand-text-reveal";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { Highlighter } from "@/components/ui/highlighter";
import { BorderBeam } from "@/components/ui/border-beam";

const yearsOfExperience = getYearsOfExperience();

const skills = [
  {
    icon: Code,
    title: "Frontend",
    tech: "React, Next.js, TypeScript",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Database,
    title: "Backend",
    tech: ".NET, Java, Spring Boot",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Cloud,
    title: "Cloud",
    tech: "AWS, Docker, Linux",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: GitBranch,
    title: "Dados",
    tech: "PostgreSQL, REST APIs",
    color: "from-orange-500 to-red-500",
  },
];

const values = [
  { icon: Heart, label: "Entender o problema" },
  { icon: Coffee, label: "Sempre aprendendo" },
  { icon: Lightbulb, label: "Produtos digitais" },
  { icon: Target, label: "Impacto real" },
];

export default function AboutMe() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <BlurFade delay={0.1} inView className="text-center">
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <Heart className="size-3 mr-2 text-red-500" />
              Conheça-me melhor
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sobre <BrandTextReveal text="Mim" />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Arquitetura de software, produtos digitais e soluções com impacto real
            </p>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <MagicCard
              className="rounded-2xl"
              gradientFrom="#3b82f6"
              gradientTo="#a855f7"
              gradientColor="#1e293b"
            >
              <div className="relative p-6 md:p-8 flex flex-col gap-6">
                <BorderBeam
                  size={120}
                  duration={10}
                  colorFrom="#3b82f6"
                  colorTo="#a855f7"
                  borderWidth={1.5}
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    Olá! Prazer em conhecê-lo
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    Sou{" "}
                    <Highlighter action="highlight" color="#3b82f6" isView>
                      <span className="text-foreground font-medium">Desenvolvedor Full Stack</span>
                    </Highlighter>{" "}
                    desde 2022, com mais de {yearsOfExperience} anos atuando em aplicações web,
                    sistemas corporativos e produtos SaaS — da definição da solução e modelagem de
                    negócio até implementação, infraestrutura, deploy e sustentação. Atualmente sou
                    Full Stack Pleno II na{" "}
                    <span className="text-foreground font-medium">Q2F Sistemas de Gestão</span> e
                    fundador da{" "}
                    <a
                      href="https://refatorize.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      Refatorize
                    </a>
                    .
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Minha experiência envolve desenvolvimento e modernização de sistemas B2B e B2C com{" "}
                  <Highlighter action="underline" color="#22d3ee" isView>
                    <span className="text-foreground font-medium">
                      .NET, Java Spring Boot, React, Next.js, TypeScript e PostgreSQL
                    </span>
                  </Highlighter>
                  . Participei da evolução de sistemas usados por milhares de usuários, integração
                  com APIs de terceiros, aplicações mobile, migração de legados e melhoria contínua
                  da experiência.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Em projetos próprios sou responsável por toda a arquitetura — backend, frontend,
                  banco, autenticação, permissões, Linux, Docker, VPS, AWS, Cloudflare e deploy
                  contínuo. Gosto de entender o problema antes da tecnologia, automatizar processos e
                  criar soluções simples de manter, intuitivas e escaláveis.
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3 pt-2">
                  {values.map((value, index) => (
                    <BlurFade key={value.label} delay={0.3 + index * 0.08} inView>
                      <Badge variant="secondary" className="px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm">
                        <value.icon className="size-3 md:size-4 mr-1.5 md:mr-2 text-primary" />
                        {value.label}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </MagicCard>
          </BlurFade>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <BlurFade key={skill.title} delay={0.15 + index * 0.08} inView>
                <MagicCard
                  className="rounded-xl h-full"
                  gradientFrom="#60a5fa"
                  gradientTo="#c084fc"
                  gradientColor="#0f172a"
                >
                  <div className="p-4 md:p-5 flex flex-col items-center text-center h-full justify-center gap-3">
                    <div
                      className={`size-12 md:size-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}
                    >
                      <skill.icon className="size-6 md:size-7 text-white" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm md:text-base">{skill.title}</h4>
                    <p className="text-xs md:text-sm text-primary font-medium">{skill.tech}</p>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
