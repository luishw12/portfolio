"use client";

import Image, { type StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Layers,
  Server,
  Zap,
  Star,
  TrendingUp,
  Award,
  Cpu,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import { BrandTextReveal } from "@/components/ui/brand-text-reveal";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ShineBorder } from "@/components/ui/shine-border";
import { WordRotate } from "@/components/ui/word-rotate";
import { SparklesText } from "@/components/ui/sparkles-text";
import { MagicCard } from "@/components/ui/magic-card";
import { CAREER_START_YEAR, getYearsOfExperience, cn } from "@/lib/utils";

import DotnetLogo from "@/img/stacks/dotnet.png";
import ReactLogo from "@/img/stacks/react.png";
import NextjsLogo from "@/img/stacks/nextjs.png";
import NodejsLogo from "@/img/stacks/nodejs.png";
import DockerLogo from "@/img/stacks/docker.png";
import PythonLogo from "@/img/stacks/python.png";

type TechLogo = StaticImageData | string;

type Tech = {
  name: string;
  years: number;
  logo: TechLogo;
  fill?: boolean;
};

type ExperienceTier = {
  title: string;
  subtitle: string;
  years: number;
  accent: string;
  skills: Tech[];
};

const simpleIcon = (slug: string, color = "white") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

/** SVG inline — slug AWS foi removido do CDN simpleicons.org */
const AWS_LOGO =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FF9900" d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/></svg>`
  );

/** Stack principal — com logos reais */
const coreStack: Tech[] = [
  { name: ".NET", years: 2, logo: DotnetLogo, fill: true },
  { name: "React", years: 4, logo: ReactLogo },
  { name: "Next.js", years: 3, logo: NextjsLogo },
  { name: "TypeScript", years: 4, logo: simpleIcon("typescript", "3178C6") },
  { name: "Node.js", years: 3, logo: NodejsLogo },
  { name: "PostgreSQL", years: 3, logo: simpleIcon("postgresql", "4169E1") },
  { name: "Docker", years: 2, logo: DockerLogo },
  { name: "Java", years: 3, logo: simpleIcon("openjdk", "ED8B00") },
  { name: "Python", years: 1, logo: PythonLogo },
  { name: "AWS", years: 2, logo: AWS_LOGO },
];

const experienceTiers: ExperienceTier[] = [
  {
    title: "Base sólida",
    subtitle: "Convivência desde o início da carreira",
    years: 4,
    accent: "from-cyan-500/20 to-blue-500/5",
    skills: [
      { name: "JavaScript", years: 4, logo: simpleIcon("javascript", "F7DF1E") },
      { name: "React", years: 4, logo: ReactLogo },
      { name: "TypeScript", years: 4, logo: simpleIcon("typescript", "3178C6") },
      { name: "Tailwind", years: 4, logo: simpleIcon("tailwindcss", "06B6D4") },
      { name: "Git", years: 4, logo: simpleIcon("git", "F05032") },
    ],
  },
  {
    title: "Dia a dia",
    subtitle: "Uso constante em projetos reais",
    years: 3,
    accent: "from-emerald-500/20 to-teal-500/5",
    skills: [
      { name: "Next.js", years: 3, logo: NextjsLogo },
      { name: "Java", years: 3, logo: simpleIcon("openjdk", "ED8B00") },
      { name: "Spring", years: 3, logo: simpleIcon("springboot", "6DB33F") },
      { name: "PostgreSQL", years: 3, logo: simpleIcon("postgresql", "4169E1") },
      { name: "Node.js", years: 3, logo: NodejsLogo },
    ],
  },
  {
    title: "IA no fluxo",
    subtitle: "Desenvolvimento assistido por IA no dia a dia",
    years: 2,
    accent: "from-fuchsia-500/20 to-violet-500/5",
    skills: [
      { name: "Cursor IDE", years: 2, logo: simpleIcon("cursor", "ffffff") },
      { name: "Claude Code", years: 2, logo: simpleIcon("anthropic", "CC9B7A") },
      { name: "Codex", years: 2, logo: simpleIcon("openai", "412991") },
      { name: "Trae", years: 1, logo: simpleIcon("bytedance", "ffffff") },
      { name: "Antigravity", years: 1, logo: simpleIcon("google", "4285F4") },
    ],
  },
  {
    title: "Em evolução",
    subtitle: "Stack atual e expansões recentes",
    years: 2,
    accent: "from-violet-500/20 to-indigo-500/5",
    skills: [
      { name: ".NET", years: 2, logo: DotnetLogo, fill: true },
      { name: "Docker", years: 2, logo: DockerLogo },
      { name: "AWS", years: 2, logo: AWS_LOGO },
      { name: "Python", years: 1, logo: PythonLogo },
      { name: "Linux", years: 2, logo: simpleIcon("linux", "FCC624") },
    ],
  },
];

const methodologies = [
  {
    name: "Agile / Kanban",
    icon: TrendingUp,
    description: "Entrega contínua e priorização clara",
    from: "#3b82f6",
    to: "#06b6d4",
  },
  {
    name: "Clean Code",
    icon: Code,
    description: "Código legível e fácil de evoluir",
    from: "#22c55e",
    to: "#14b8a6",
  },
  {
    name: "SOLID",
    icon: Layers,
    description: "Princípios de design orientado a objetos",
    from: "#8b5cf6",
    to: "#6366f1",
  },
  {
    name: "TDD",
    icon: Star,
    description: "Testes que guiam a implementação",
    from: "#f59e0b",
    to: "#f97316",
  },
  {
    name: "CI/CD",
    icon: Zap,
    description: "Pipeline de build e deploy contínuo",
    from: "#eab308",
    to: "#84cc16",
  },
  {
    name: "Microservices",
    icon: Server,
    description: "Serviços independentes e escaláveis",
    from: "#06b6d4",
    to: "#0ea5e9",
  },
  {
    name: "Clean Architecture",
    icon: Cpu,
    description: "Domínio desacoplado da infraestrutura",
    from: "#ec4899",
    to: "#a855f7",
  },
  {
    name: "Design Patterns",
    icon: Award,
    description: "Soluções reutilizáveis e comprovadas",
    from: "#6366f1",
    to: "#3b82f6",
  },
  {
    name: "AI-Assisted Dev",
    icon: Sparkles,
    description: "Cursor, Claude Code e engenharia de contexto no fluxo",
    from: "#d946ef",
    to: "#a855f7",
  },
];

const methodNames = methodologies.map((m) => m.name);

const firstMarquee = methodologies.slice(0, 4);
const secondMarquee = methodologies.slice(4);

function TechLogoImage({
  tech,
  size = 28,
}: {
  tech: Pick<Tech, "name" | "logo" | "fill">;
  size?: number;
}) {
  const isRemote = typeof tech.logo === "string";

  return (
    <Image
      src={tech.logo}
      alt={tech.name}
      width={size}
      height={size}
      className={cn(
        tech.fill
          ? "size-full object-cover rounded-md"
          : "h-auto w-auto max-h-full max-w-full object-contain",
        isRemote && "dark:brightness-110"
      )}
      style={tech.fill ? undefined : { width: "auto", height: "auto" }}
      unoptimized={isRemote}
    />
  );
}

export default function Skills() {
  const careerYears = getYearsOfExperience();

  return (
    <section id="habilidades" aria-labelledby="habilidades-titulo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <BlurFade delay={0.1} inView className="text-center">
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <CalendarDays className="size-3 mr-2" />
              Tempo de convivência
            </Badge>
            <h2 id="habilidades-titulo" className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Minhas <BrandTextReveal text="Habilidades" />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Em vez de porcentagens subjetivas, mostro quanto tempo já vivo com cada
              tecnologia — desde {CAREER_START_YEAR},{" "}
              <span className="text-foreground font-medium inline-flex items-baseline gap-1">
                <NumberTicker value={careerYears} className="font-semibold" />
                anos
              </span>{" "}
              construindo software de ponta a ponta.
            </p>
          </BlurFade>

          {/* Stack principal: logo + nome + anos */}
          <BlurFade delay={0.15} inView className="flex flex-col items-center gap-6">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
              Stack principal
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-5 w-full">
              {coreStack.map((tech, index) => (
                <BlurFade key={tech.name} delay={0.04 * index} inView>
                  <div className="flex items-center gap-3 group">
                    <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted/40">
                      <TechLogoImage tech={tech} size={tech.fill ? 40 : 22} />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                        {tech.name}
                      </p>
                      <p className="text-xs tabular-nums text-muted-foreground">
                        {tech.years} {tech.years === 1 ? "ano" : "anos"}
                      </p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </BlurFade>

          {/* Faixas por tempo */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {experienceTiers.map((tier, index) => (
              <BlurFade key={tier.title} delay={0.1 + index * 0.08} inView>
                <div
                  className={cn(
                    "relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6",
                    "bg-gradient-to-br",
                    tier.accent
                  )}
                >
                  <ShineBorder
                    borderWidth={1}
                    duration={12 + index * 2}
                    shineColor={["#3b82f6", "#8b5cf6", "#06b6d4"]}
                  />
                  <div className="relative flex flex-col gap-5">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{tier.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{tier.subtitle}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="flex items-baseline justify-end gap-0.5">
                          <NumberTicker
                            value={tier.years}
                            className="text-3xl font-bold tabular-nums text-foreground"
                          />
                          <span className="text-sm text-muted-foreground">+</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          anos
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      {tier.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2.5"
                        >
                          <div className="flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted/40">
                            <TechLogoImage tech={skill} size={skill.fill ? 28 : 16} />
                          </div>
                          <span className="text-xs font-medium text-foreground flex-1 truncate">
                            {skill.name}
                          </span>
                          <span className="text-[10px] tabular-nums text-muted-foreground shrink-0">
                            {skill.years}a
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          <div className="relative flex overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s] [--gap:1.5rem]">
              {coreStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2.5 rounded-full border border-border/50 bg-card/60 px-4 py-2 backdrop-blur-sm"
                >
                  <div className="flex size-6 items-center justify-center overflow-hidden rounded-md">
                    <TechLogoImage tech={tech} size={tech.fill ? 24 : 18} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{tech.name}</span>
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {tech.years}a
                  </span>
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
          </div>

          <BlurFade delay={0.2} inView>
            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
              <div className="flex flex-col gap-5 text-left">
                <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                  Como eu trabalho
                </p>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                  <SparklesText
                    className="inline text-3xl lg:text-4xl"
                    sparklesCount={6}
                    colors={{ first: "#3b82f6", second: "#06b6d4" }}
                  >
                    Metodologias
                  </SparklesText>
                  <span className="block mt-1">& práticas no dia a dia</span>
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                  Além da stack, o que sustenta a qualidade do software é o jeito
                  de construir — princípios que aplico em cada entrega.
                </p>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-lg sm:text-xl font-semibold text-foreground">
                  <span className="text-muted-foreground font-normal">Foco em</span>
                  <WordRotate
                    words={methodNames}
                    className="text-primary font-bold"
                    duration={2200}
                  />
                </div>
              </div>

              <div className="relative flex h-[340px] w-full flex-row items-center justify-center gap-3 overflow-hidden">
                <Marquee
                  pauseOnHover
                  vertical
                  className="[--duration:28s] h-full"
                >
                  {firstMarquee.map((method) => (
                    <MagicCard
                      key={method.name}
                      className="rounded-2xl w-[240px]"
                      gradientFrom={method.from}
                      gradientTo={method.to}
                      gradientColor="#0f172a"
                    >
                      <div className="flex items-start gap-3 p-4">
                        <div
                          className="flex size-10 shrink-0 items-center justify-center rounded-xl text-white"
                          style={{
                            background: `linear-gradient(135deg, ${method.from}, ${method.to})`,
                          }}
                        >
                          <method.icon className="size-5" />
                        </div>
                        <div className="min-w-0 text-left">
                          <p className="text-sm font-semibold text-foreground">
                            {method.name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </MagicCard>
                  ))}
                </Marquee>

                <Marquee
                  reverse
                  pauseOnHover
                  vertical
                  className="[--duration:32s] h-full hidden sm:flex"
                >
                  {secondMarquee.map((method) => (
                    <MagicCard
                      key={method.name}
                      className="rounded-2xl w-[240px]"
                      gradientFrom={method.from}
                      gradientTo={method.to}
                      gradientColor="#0f172a"
                    >
                      <div className="flex items-start gap-3 p-4">
                        <div
                          className="flex size-10 shrink-0 items-center justify-center rounded-xl text-white"
                          style={{
                            background: `linear-gradient(135deg, ${method.from}, ${method.to})`,
                          }}
                        >
                          <method.icon className="size-5" />
                        </div>
                        <div className="min-w-0 text-left">
                          <p className="text-sm font-semibold text-foreground">
                            {method.name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </MagicCard>
                  ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
