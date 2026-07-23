"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "motion/react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { BrandTextReveal } from "@/components/ui/brand-text-reveal";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import { getYearsOfExperience, cn } from "@/lib/utils";
import toshyroLogo from "@/img/companies/toshyro.png";
import triconLogo from "@/img/companies/tricon.png";
import q2fLogo from "@/img/companies/q2f.png";
import refatorizeLogo from "@/img/companies/refatorize.png";

type Role = {
  title: string;
  period: string;
  achievements: string[];
};

type Experience = {
  company: string;
  period: string;
  location: string;
  companyUrl: string;
  type: string;
  description: string;
  roles: Role[];
  technologies: string[];
  logo: StaticImageData;
  logoBg: string;
  gradientFrom: string;
  gradientTo: string;
  current?: boolean;
};

const experiences: Experience[] = [
  {
    company: "Q2F Sistemas de Gestão",
    period: "fev 2026 - Presente",
    location: "Lajeado, RS",
    companyUrl: "https://q2f.com.br",
    type: "CLT",
    description:
      "Plataforma SaaS para food service — operação, compras, custos, produção, indicadores e fidelidade.",
    roles: [
      {
        title: "Desenvolvedor Full Stack Pleno II",
        period: "mai 2026 - Presente",
        achievements: [
          "Participação ativa nas decisões técnicas da equipe, colaborando na definição de soluções de arquitetura e evolução contínua dos produtos junto ao Tech Lead.",
          "Desenvolvimento e evolução de módulos de Operação, Gerência, Suprimentos, Custos e Fidelidade, modernizando a plataforma baseada em Next.js e .NET.",
          "Adoção diária de AI-Assisted Development (Cursor, Claude Code e Trae) para acelerar escrita de código, refatoração, automação e otimização do fluxo da equipe.",
          "Contato frequente com usuários finais e clientes, transformando feedbacks operacionais em melhorias de produto e experiência.",
          "Desenvolvimento de padrões reutilizáveis no frontend, aumentando consistência visual, manutenibilidade e produtividade da equipe.",
          "Investigação de problemas em produção com AWS, análise de logs, consultas em banco e reprodução local dos cenários.",
        ],
      },
      {
        title: "Desenvolvedor Full Stack Pleno",
        period: "fev 2026 - mai 2026",
        achievements: [
          "Participação na modernização do ecossistema web, contribuindo para a migração gradual de React para Next.js.",
          "Uso de ferramentas de IA (Cursor e Claude Code) para acelerar a conversão de componentes React/Next.js e automatizar testes de integração.",
          "Desenvolvimento de funcionalidades para redes de franquias e restaurantes: pedidos, checklists, controle sanitário, etiquetas e fidelidade.",
          "Funcionalidade de descoberta automática de impressoras na rede local, eliminando praticamente todos os chamados de configuração manual.",
        ],
      },
    ],
    technologies: [".NET", "Next.js", "React", "TypeScript", "PostgreSQL", "AWS", "Cursor", "Claude Code"],
    logo: q2fLogo,
    logoBg: "bg-[#1e2b58]",
    gradientFrom: "#f97316",
    gradientTo: "#f59e0b",
    current: true,
  },
  {
    company: "Refatorize",
    period: "mar 2025 - Presente",
    location: "Remoto",
    companyUrl: "https://refatorize.com.br",
    type: "Fundador",
    description:
      "Produtos próprios e experimentos SaaS — da modelagem do negócio à aplicação completa em produção.",
    roles: [
      {
        title: "Fundador",
        period: "mar 2025 - Presente",
        achievements: [
          "Atuação em todas as etapas do desenvolvimento Full Stack: arquitetura, backend, frontend, banco, autenticação, infraestrutura e deploy.",
          "Utilização intensiva de IA (Cursor IDE, Claude Code, Antigravity, Trae e Codex) para prototipagem rápida, geração de código, refatoração e otimização arquitetural.",
          "Desenvolvimento de aplicações com Java, Spring Boot, React, Next.js, TypeScript e PostgreSQL.",
          "Gerenciamento de infraestrutura com Linux, Docker, VPS, AWS e Vercel.",
        ],
      },
    ],
    technologies: ["Java", "Spring Boot", ".NET", "Next.js", "PostgreSQL", "Docker", "Cursor", "Claude Code"],
    logo: refatorizeLogo,
    logoBg: "bg-white",
    gradientFrom: "#3b82f6",
    gradientTo: "#22d3ee",
    current: true,
  },
  {
    company: "Tricon - Softwares de Gestão",
    period: "nov 2024 - fev 2026",
    location: "Lajeado, RS",
    companyUrl: "https://tricon.inf.br",
    type: "CLT",
    description:
      "Evolução do ERP web, migração do legado Delphi para Java Spring Boot e soluções de importação fiscal.",
    roles: [
      {
        title: "Desenvolvedor Full Stack Pleno",
        period: "ago 2025 - fev 2026",
        achievements: [
          "Uma das principais referências técnicas da equipe: prioridades, padronização, apoio aos desenvolvedores e arquitetura do novo ERP web.",
          "Uso de desenvolvimento assistido por IA (Cursor, Antigravity e Codex) para investigação de bugs, refatoração e modernização de rotinas legadas.",
          "Desenvolvimento completo de solução comercializada para importação automatizada de documentos fiscais.",
          "Mecanismos de sincronização incremental entre o legado Delphi e o ERP web em Java.",
          "Otimização de consultas SQL e relatórios JasperReports, reduzindo significativamente o tempo médio de processamento.",
        ],
      },
      {
        title: "Desenvolvedor Full Stack Júnior",
        period: "nov 2024 - ago 2025",
        achievements: [
          "Evolução do ERP web em Java Spring Boot, participando da migração gradual do sistema legado em Delphi.",
          "Uso de ferramentas de IA (Cursor e Codex) para entendimento e refatoração de código legado e escrita de queries SQL mais eficientes.",
          "Componentização de telas e padronização de elementos reutilizáveis.",
          "Integração entre Firebird e PostgreSQL para migração de dados entre legado e novo ERP.",
        ],
      },
    ],
    technologies: ["Java", "Spring Boot", "Delphi", "PostgreSQL", "Docker", "AWS", "Cursor", "Codex"],
    logo: triconLogo,
    logoBg: "bg-[#0a1628]",
    gradientFrom: "#22c55e",
    gradientTo: "#10b981",
  },
  {
    company: "Toshyro Inovação e Tecnologia",
    period: "abr 2022 - nov 2024",
    location: "Lajeado, RS",
    companyUrl: "https://www.toshyro.com.br/",
    type: "CLT",
    description:
      "Início da trajetória em produtos corporativos, evoluindo de assistente a Full Stack Júnior.",
    roles: [
      {
        title: "Desenvolvedor Full Stack Júnior",
        period: "dez 2023 - nov 2024",
        achievements: [
          "Desenvolvimento de aplicações web com React, Next.js, TypeScript e .NET para produtos corporativos.",
          "Criação e evolução de Design System interno com ~15 componentes reutilizáveis via npm e Storybook.",
          "Participação na migração de partes do ERP de PHP para Next.js e .NET.",
        ],
      },
      {
        title: "Assistente de Desenvolvimento Full Stack",
        period: "abr 2022 - dez 2023",
        achievements: [
          "Início da carreira em meio período enquanto concluía o ensino médio.",
          "Correções e novas funcionalidades em aplicações web com React e Next.js.",
          "Primeiros contatos com .NET, PostgreSQL, Docker e Git.",
        ],
      },
    ],
    technologies: ["React", "Next.js", "TypeScript", ".NET", "PostgreSQL", "Storybook"],
    logo: toshyroLogo,
    logoBg: "bg-white",
    gradientFrom: "#a855f7",
    gradientTo: "#ec4899",
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "CLT":
      return "bg-green-500/10 text-green-500 border-green-500/20";
    case "Fundador":
      return "bg-amber-500/10 text-amber-500 border-amber-500/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

function ExperienceCard({
  exp,
  index,
}: {
  exp: Experience;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const currentRole = exp.roles[0];

  return (
    <BlurFade delay={0.1 + index * 0.08} inView className="relative pl-8 md:pl-10">
      <div className="absolute left-0 top-6 size-3 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/40 z-10" />

      <div className="relative rounded-2xl">
      <MagicCard
        className="relative rounded-2xl overflow-hidden"
        gradientFrom={exp.gradientFrom}
        gradientTo={exp.gradientTo}
        gradientColor="#0f172a"
      >
        <div className="p-4 sm:p-5 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <div
              className={cn(
                "size-12 sm:size-14 rounded-xl overflow-hidden flex-shrink-0 border border-border/50 flex items-center justify-center",
                exp.logoBg
              )}
            >
              <Image
                src={exp.logo}
                alt={`Logo ${exp.company}`}
                width={56}
                height={56}
                className="size-full object-contain p-1"
              />
            </div>

            <div className="flex-1 min-w-0 flex flex-col gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                {exp.companyUrl !== "#" ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-foreground hover:text-primary transition-colors flex items-center gap-1 text-base sm:text-lg truncate"
                  >
                    {exp.company}
                    <ExternalLink className="size-3.5 flex-shrink-0 opacity-60" />
                  </a>
                ) : (
                  <span className="font-bold text-foreground text-base sm:text-lg truncate">
                    {exp.company}
                  </span>
                )}
                <Badge
                  className={cn(getTypeColor(exp.type), "border text-[10px] px-1.5 py-0")}
                  variant="outline"
                >
                  {exp.type}
                </Badge>
              </div>

              <p className="text-sm font-medium text-foreground/90">
                {currentRole.title}
                {exp.roles.length > 1 && (
                  <span className="text-muted-foreground font-normal">
                    {" "}
                    · {exp.roles.length} cargos
                  </span>
                )}
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="size-3" />
                  {exp.location}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {exp.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-2 py-0 text-[10px] font-normal"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors self-start mt-0.5"
            aria-expanded={open}
          >
            <ChevronDown
              className={cn(
                "size-3.5 transition-transform duration-200",
                open && "rotate-180"
              )}
            />
            {open ? "Ocultar conquistas" : "Ver conquistas"}
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-4 pt-1 pb-1">
                  {exp.roles.map((role) => (
                    <div key={role.title} className="flex flex-col gap-2">
                      {exp.roles.length > 1 && (
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5">
                          <h4 className="text-sm font-semibold text-foreground">
                            {role.title}
                          </h4>
                          <span className="text-xs text-muted-foreground">
                            {role.period}
                          </span>
                        </div>
                      )}
                      <ul className="flex flex-col gap-1.5">
                        {role.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed"
                          >
                            <ChevronRight className="size-3 text-primary mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </MagicCard>
      {exp.current && (
        <BorderBeam
          className="z-50"
          size={80}
          borderRadius={16}
          duration={8}
          colorFrom={exp.gradientFrom}
          colorTo={exp.gradientTo}
          borderWidth={1.5}
        />
      )}
      </div>
    </BlurFade>
  );
}

export default function Experience() {
  const years = getYearsOfExperience();

  return (
    <section id="experiencia" aria-labelledby="experiencia-titulo" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <BlurFade delay={0.05} inView className="text-center">
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <Briefcase className="size-3 mr-2" />
              Carreira
            </Badge>
            <h2 id="experiencia-titulo" className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Experiência <BrandTextReveal text="Profissional" />
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Minha jornada desenvolvendo soluções inovadoras e escaláveis
            </p>
          </BlurFade>

          <BlurFade delay={0.1} inView>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: years, suffix: "+", label: "Anos" },
                { value: 15, suffix: "+", label: "Projetos" },
                { value: 4, suffix: "", label: "Empresas" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm px-3 py-3 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-foreground tabular-nums">
                    <NumberTicker value={stat.value} className="text-foreground" />
                    {stat.suffix}
                  </div>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>

          <div className="relative flex flex-col gap-4">
            <div className="absolute left-[5px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.company} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
