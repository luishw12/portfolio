"use client";

import Link from "next/link";
import Image from "next/image";
import ProfilePhoto from "@/img/foto-perfil.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { BrandTextReveal } from "@/components/ui/brand-text-reveal";
import { MagicCard } from "@/components/ui/magic-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Highlighter } from "@/components/ui/highlighter";
import { getYearsOfExperience } from "@/lib/utils";
import {
  coreSkills,
  featuredProjects,
  languages,
  profile,
  workExperience,
} from "@/lib/seo";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5551995608647";

const quickFacts = [
  {
    icon: Briefcase,
    label: "Senioridade",
    value: "Pleno II",
    detail: `${getYearsOfExperience()}+ anos desde ${profile.careerStartYear}`,
  },
  {
    icon: Globe,
    label: "Modalidade",
    value: "Remoto",
    detail: "Híbrido também aceito",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Lajeado, RS",
    detail: "Brasil · UTC-3",
  },
  {
    icon: Clock,
    label: "Disponibilidade",
    value: "Aberto",
    detail: "Novos projetos e vagas",
  },
];

const idealRoles = [
  {
    icon: Building2,
    title: "Produtos SaaS",
    description: "Plataformas B2B/B2C com arquitetura escalável, do backend ao deploy.",
    tags: ["Next.js", ".NET", "PostgreSQL", "AWS"],
  },
  {
    icon: Zap,
    title: "Modernização de legado",
    description: "Migração de sistemas Delphi/PHP para stacks modernas com entrega incremental.",
    tags: ["Java", "Spring Boot", "React", "Docker"],
  },
  {
    icon: Users,
    title: "Times de produto",
    description: "Squads que valorizam ownership, qualidade de código e entrega contínua.",
    tags: ["Agile", "CI/CD", "Clean Architecture"],
  },
  {
    icon: Sparkles,
    title: "Times que adotam IA",
    description: "Ambientes que incentivam produtividade com Cursor, Claude Code e engenharia de contexto.",
    tags: ["AI-Assisted Dev", "Cursor", "Claude Code"],
  },
];

const hireFaq = [
  {
    question: "Qual o modelo de contratação aceito?",
    answer:
      "CLT, PJ e projetos pontuais. Aberto a conversar sobre o formato que fizer mais sentido para a empresa e o escopo.",
  },
  {
    question: "Trabalha remoto para empresas de qualquer lugar do Brasil?",
    answer:
      "Sim. Já atuo remotamente na Refatorize e tenho experiência com times distribuídos. Híbrido na região de Lajeado/RS também é viável.",
  },
  {
    question: "Qual o tempo de experiência com a stack principal?",
    answer:
      "React e TypeScript há 4 anos, Next.js e Java/Spring há 3 anos, .NET e AWS há 2 anos. Detalhes completos na seção de habilidades abaixo.",
  },
  {
    question: "Tem experiência com sistemas em produção e escala?",
    answer:
      "Sim. Atuei em plataformas usadas por milhares de usuários na Q2F e Tricon, com investigação de incidentes em produção, logs AWS e otimização de banco.",
  },
  {
    question: "Como é o processo para iniciar uma conversa?",
    answer:
      "Envie uma mensagem por LinkedIn, email ou WhatsApp com contexto da vaga/projeto. Respondo com disponibilidade e alinho expectativas antes de uma call.",
  },
];

const hireSteps = [
  { step: "01", title: "Primeiro contato", description: "Me conte sobre a vaga, o time e o desafio técnico." },
  { step: "02", title: "Alinhamento", description: "Conversamos sobre stack, senioridade, prazo e modelo de contratação." },
  { step: "03", title: "Aprofundamento", description: "Apresento cases relevantes e discutimos como posso agregar ao time." },
  { step: "04", title: "Decisão", description: "Retorno rápido para seguir com proposta ou próximos passos do processo." },
];

export default function Hire() {
  const careerYears = getYearsOfExperience();

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero */}
      <section aria-labelledby="hire-hero" className="pt-28 lg:pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div className="flex flex-col gap-8">
              <BlurFade delay={0.1}>
                <div className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/5">
                  <AnimatedShinyText className="inline-flex items-center px-4 py-1.5 text-sm">
                    <span className="relative flex size-2 mr-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    Disponível para contratação
                  </AnimatedShinyText>
                </div>
              </BlurFade>

              <BlurFade delay={0.15}>
                <h1 id="hire-hero" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Contrate um{" "}
                  <BrandTextReveal text="Desenvolvedor Full Stack Pleno" delay={0.2} duration={1.6} />
                </h1>
              </BlurFade>

              <BlurFade delay={0.25}>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  {profile.name} — {profile.summary.split(".")[0]}.
                  Especialista em{" "}
                  <Highlighter action="underline" color="#3b82f6" isView>
                    <span className="text-foreground font-medium">
                      .NET, React, Next.js, Java, Spring Boot, PostgreSQL e AWS
                    </span>
                  </Highlighter>
                  , com histórico em SaaS, ERP e produtos digitais de ponta a ponta.
                </p>
              </BlurFade>

              <BlurFade delay={0.35}>
                <div className="flex flex-wrap gap-4">
                  <a href={`mailto:${profile.email}?subject=Oportunidade%20-%20Desenvolvedor%20Full%20Stack`}>
                    <ShimmerButton
                      background="linear-gradient(135deg, #3b82f6, #9333ea)"
                      shimmerColor="#ffffff"
                      className="shadow-lg"
                    >
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <Mail className="size-4" />
                        Enviar proposta
                      </span>
                    </ShimmerButton>
                  </a>

                  <Button size="lg" variant="outline" className="rounded-full border-primary/30" asChild>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="size-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>

                  <Button size="lg" variant="outline" className="rounded-full" asChild>
                    <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="size-4 mr-2" />
                      Currículo PDF
                    </a>
                  </Button>
                </div>
              </BlurFade>
            </div>

            <BlurFade delay={0.2} className="hidden lg:block">
              <div className="relative rounded-3xl">
                <MagicCard className="rounded-3xl p-6" gradientFrom="#3b82f6" gradientTo="#a855f7" gradientColor="#0f172a">
                  <div className="relative flex flex-col items-center gap-4 text-center">
                    <div className="relative size-36 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                      <Image
                        src={ProfilePhoto}
                        alt={profile.name}
                        fill
                        className="object-cover object-center"
                        priority
                      />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-foreground">{profile.name}</p>
                      <p className="text-sm text-muted-foreground">{profile.jobTitle}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 w-full pt-2">
                      <div className="rounded-xl bg-muted/30 px-3 py-2">
                        <NumberTicker value={careerYears} className="text-2xl font-bold" />
                        <span className="text-2xl font-bold">+</span>
                        <p className="text-[10px] text-muted-foreground mt-0.5">anos de experiência</p>
                      </div>
                      <div className="rounded-xl bg-muted/30 px-3 py-2">
                        <p className="text-2xl font-bold">15+</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">projetos entregues</p>
                      </div>
                    </div>
                  </div>
                </MagicCard>
                <BorderBeam
                  className="z-50"
                  size={80}
                  borderRadius={24}
                  duration={10}
                  colorFrom="#3b82f6"
                  colorTo="#a855f7"
                  borderWidth={1.5}
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section aria-labelledby="hire-facts" className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={0.1} inView className="mb-8">
            <h2 id="hire-facts" className="text-2xl lg:text-3xl font-bold text-foreground">
              Resumo para <BrandTextReveal text="recrutadores" />
            </h2>
            <p className="text-muted-foreground mt-2">Informações essenciais em um relance.</p>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFacts.map((fact, index) => (
              <BlurFade key={fact.label} delay={0.1 + index * 0.06} inView>
                <MagicCard className="rounded-2xl h-full" gradientFrom="#60a5fa" gradientTo="#c084fc" gradientColor="#0f172a">
                  <div className="p-5 flex flex-col gap-3 h-full">
                    <fact.icon className="size-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{fact.label}</p>
                      <p className="text-xl font-bold text-foreground">{fact.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{fact.detail}</p>
                    </div>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal roles */}
      <section aria-labelledby="hire-roles" className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <BlurFade delay={0.1} inView className="text-center max-w-2xl mx-auto">
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <Target className="size-3 mr-2" />
              Fit ideal
            </Badge>
            <h2 id="hire-roles" className="text-3xl lg:text-4xl font-bold text-foreground">
              Onde eu <BrandTextReveal text="agrego valor" />
            </h2>
            <p className="text-muted-foreground mt-3">
              Perfis de vaga e projetos onde minha experiência gera impacto mais rápido.
            </p>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-5">
            {idealRoles.map((role, index) => (
              <BlurFade key={role.title} delay={0.1 + index * 0.08} inView>
                <MagicCard className="rounded-2xl h-full" gradientFrom="#3b82f6" gradientTo="#22d3ee" gradientColor="#0f172a">
                  <div className="p-6 flex flex-col gap-4 h-full">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <role.icon className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{role.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{role.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {role.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Stack match */}
      <section aria-labelledby="hire-stack" className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <BlurFade delay={0.1} inView>
            <h2 id="hire-stack" className="text-3xl lg:text-4xl font-bold text-foreground">
              Stack & <BrandTextReveal text="match técnico" />
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Tempo real de experiência com cada tecnologia — útil para cruzar com a vaga.
            </p>
          </BlurFade>

          <BlurFade delay={0.15} inView>
            <MagicCard className="rounded-2xl overflow-hidden" gradientFrom="#22c55e" gradientTo="#10b981" gradientColor="#0f172a">
              <div className="p-6 md:p-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {coreSkills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between gap-4 border-b border-border/40 pb-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{skill.name}</p>
                        <p className="text-[10px] text-muted-foreground">{skill.category}</p>
                      </div>
                      <span className="text-xs tabular-nums text-primary font-medium shrink-0">
                        {skill.years}a
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </MagicCard>
          </BlurFade>

          <BlurFade delay={0.2} inView className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <Badge key={lang.name} variant="outline" className="px-3 py-1.5">
                {lang.name}: <span className="text-muted-foreground ml-1">{lang.level}</span>
              </Badge>
            ))}
          </BlurFade>
        </div>
      </section>

      {/* Experience snapshot */}
      <section aria-labelledby="hire-experience" className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <BlurFade delay={0.1} inView className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 id="hire-experience" className="text-3xl lg:text-4xl font-bold text-foreground">
                Experiência <BrandTextReveal text="relevante" />
              </h2>
              <p className="text-muted-foreground mt-2">Histórico profissional condensado.</p>
            </div>
            <Button variant="outline" className="rounded-full w-fit" asChild>
              <Link href="/#experiencia">
                Ver detalhes no portfólio
                <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </BlurFade>

          <div className="flex flex-col gap-4">
            {workExperience.map((job, index) => (
              <BlurFade key={job.company} delay={0.1 + index * 0.06} inView>
                <div className="rounded-2xl border border-border/60 bg-card/40 p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-foreground">{job.company}</h3>
                      {!job.endDate && (
                        <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[10px]">
                          Atual
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-[10px]">{job.employmentType}</Badge>
                    </div>
                    <p className="text-sm font-medium text-foreground/90 mt-1">{job.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{job.location}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{job.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:max-w-xs md:justify-end">
                    {job.technologies.slice(0, 5).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Projects proof */}
      <section aria-labelledby="hire-projects" className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <BlurFade delay={0.1} inView>
            <h2 id="hire-projects" className="text-3xl lg:text-4xl font-bold text-foreground">
              Prova de <BrandTextReveal text="entrega" />
            </h2>
            <p className="text-muted-foreground mt-2">Produtos reais em produção, não só código de estudo.</p>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-5">
            {featuredProjects.map((project, index) => (
              <BlurFade key={project.name} delay={0.1 + index * 0.06} inView>
                <MagicCard className="rounded-2xl h-full" gradientFrom="#8b5cf6" gradientTo="#6366f1" gradientColor="#0f172a">
                  <div className="p-6 flex flex-col gap-4 h-full">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{project.description}</p>
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 shrink-0"
                        aria-label={`Visitar ${project.name}`}
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-[10px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* How to hire */}
      <section aria-labelledby="hire-process" className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={0.1} inView className="text-center mb-12">
            <h2 id="hire-process" className="text-3xl lg:text-4xl font-bold text-foreground">
              Como <BrandTextReveal text="contratar" />
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Processo simples e direto — sem burocracia desnecessária.
            </p>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hireSteps.map((item, index) => (
              <BlurFade key={item.step} delay={0.1 + index * 0.08} inView>
                <div className="relative rounded-2xl border border-border/60 bg-card/30 p-5 h-full">
                  <span className="text-3xl font-bold text-primary/30">{item.step}</span>
                  <h3 className="text-base font-bold text-foreground mt-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="hire-faq" className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          <BlurFade delay={0.1} inView className="text-center">
            <h2 id="hire-faq" className="text-3xl lg:text-4xl font-bold text-foreground">
              Perguntas <BrandTextReveal text="frequentes" />
            </h2>
          </BlurFade>

          <div className="flex flex-col gap-4">
            {hireFaq.map((item, index) => (
              <BlurFade key={item.question} delay={0.1 + index * 0.06} inView>
                <div className="rounded-2xl border border-border/60 bg-card/30 p-5 md:p-6">
                  <h3 className="text-sm font-bold text-foreground flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                    {item.question}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 ml-6 leading-relaxed">{item.answer}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section aria-labelledby="hire-cta" className="container mx-auto px-6">
        <BlurFade delay={0.1} inView>
          <div className="relative rounded-3xl">
            <MagicCard className="rounded-3xl" gradientFrom="#3b82f6" gradientTo="#a855f7" gradientColor="#0f172a">
              <div className="relative p-8 md:p-12 text-center flex flex-col items-center gap-6">
              <h2 id="hire-cta" className="text-3xl lg:text-4xl font-bold text-foreground max-w-2xl">
                Vamos conversar sobre a <BrandTextReveal text="oportunidade" />?
              </h2>
              <p className="text-muted-foreground max-w-lg">
                Respondo em até 24h. Envie contexto da vaga, stack do time e modelo de contratação.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={`mailto:${profile.email}?subject=Oportunidade%20-%20Desenvolvedor%20Full%20Stack`}>
                  <ShimmerButton background="linear-gradient(135deg, #3b82f6, #9333ea)" shimmerColor="#ffffff">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <Mail className="size-4" />
                      {profile.email}
                    </span>
                  </ShimmerButton>
                </a>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Ou explore o{" "}
                <Link href="/" className="text-primary hover:underline">
                  portfólio completo
                </Link>
              </p>
              </div>
            </MagicCard>
            <BorderBeam
              className="z-50"
              size={100}
              borderRadius={24}
              duration={12}
              colorFrom="#3b82f6"
              colorTo="#a855f7"
              borderWidth={2}
            />
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
