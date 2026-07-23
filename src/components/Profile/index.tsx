"use client";

import ProfilePhoto from "@/img/foto-perfil.png";
import DotnetLogo from "@/img/stacks/dotnet.png";
import ReactLogo from "@/img/stacks/react.png";
import NextjsLogo from "@/img/stacks/nextjs.png";
import NodejsLogo from "@/img/stacks/nodejs.png";
import DockerLogo from "@/img/stacks/docker.png";
import PythonLogo from "@/img/stacks/python.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { Download, Mail, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Particles from "@/components/ui/Particles";
import { BrandTextReveal } from "@/components/ui/brand-text-reveal";
import { getYearsOfExperience } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Text3DFlipLoop } from "@/components/ui/text-3d-flip-loop";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackRecruiterCta, trackResumeDownload } from "@/lib/analytics";

const HERO_PARTICLE_COLORS = [
  "#60a5fa",
  "#a855f7",
  "#ec4899",
  "#22d3ee",
  "#38bdf8",
];

const orbitLogos: {
  name: string;
  logo: typeof DotnetLogo;
  fill?: boolean;
  wide?: boolean;
}[] = [
  { name: ".NET", logo: DotnetLogo, fill: true },
  { name: "React", logo: ReactLogo },
  { name: "Next.js", logo: NextjsLogo, wide: true },
  { name: "Node.js", logo: NodejsLogo },
  { name: "Docker", logo: DockerLogo },
  { name: "Python", logo: PythonLogo },
];

type HeroScrollRanges = {
  fadeStart: number;
  fadeMid: number;
  fadeEnd: number;
};

const DEFAULT_SCROLL_RANGES: HeroScrollRanges = {
  fadeStart: 0,
  fadeMid: 0.15,
  fadeEnd: 0.45,
};

function getHeroScrollRanges(sectionHeight: number, viewportHeight: number): HeroScrollRanges {
  const scrollRange = sectionHeight - viewportHeight;

  // Hero cabe em ~uma tela: mantém o efeito original de parallax + blur
  if (scrollRange <= viewportHeight * 0.2) {
    return DEFAULT_SCROLL_RANGES;
  }

  // Hero alta (mobile): blur só nos últimos ~55vh de scroll
  const fadeWindow = viewportHeight * 0.55;
  const fadeStart = Math.max(0, Math.min(0.82, 1 - fadeWindow / scrollRange));
  const remaining = 1 - fadeStart;

  return {
    fadeStart,
    fadeMid: fadeStart + remaining * 0.28,
    fadeEnd: fadeStart + remaining * 0.72,
  };
}

export default function Profile() {
  const containerRef = useRef<HTMLElement>(null);
  const [pixelRatio, setPixelRatio] = useState(1);
  const [scrollRanges, setScrollRanges] = useState<HeroScrollRanges>(DEFAULT_SCROLL_RANGES);

  useEffect(() => {
    setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScrollRanges = () => {
      setScrollRanges(getHeroScrollRanges(el.offsetHeight, window.innerHeight));
    };

    updateScrollRanges();

    const resizeObserver = new ResizeObserver(updateScrollRanges);
    resizeObserver.observe(el);
    window.addEventListener("resize", updateScrollRanges);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScrollRanges);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, scrollRanges.fadeStart, scrollRanges.fadeMid, scrollRanges.fadeEnd],
    [1, 1, 0.85, 0]
  );
  const contentBlur = useTransform(
    scrollYProgress,
    [0, scrollRanges.fadeStart, scrollRanges.fadeEnd],
    [0, 0, 6]
  );
  const contentFilter = useTransform(contentBlur, (b) => `blur(${b}px)`);

  return (
    <section
      ref={containerRef}
      id="inicio"
      aria-label="Apresentação"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-background pointer-events-none">
        <Particles
          particleColors={HERO_PARTICLE_COLORS}
          particleCount={140}
          particleSpread={8}
          speed={0.08}
          particleBaseSize={80}
          moveParticlesOnHover
          particleHoverFactor={0.6}
          alphaParticles
          sizeRandomness={0.8}
          pixelRatio={pixelRatio}
          interactionRef={containerRef}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, hsl(var(--background) / 0.4) 60%, hsl(var(--background) / 0.85) 100%)",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 py-20 relative z-10 pointer-events-none will-change-[opacity,transform,filter]"
        style={{
          y: contentY,
          opacity: contentOpacity,
          filter: contentFilter,
        }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left flex flex-col gap-8">
            <BlurFade delay={0.1}>
              <div className="flex justify-center lg:justify-start">
                <div
                  className={cn(
                    "group rounded-full border border-primary/20 bg-primary/5 text-base transition-all ease-in hover:cursor-pointer hover:bg-primary/10"
                  )}
                >
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1.5 transition ease-out hover:text-foreground text-sm">
                    <Sparkles className="mr-2 size-3.5 text-primary" />
                    Disponível para novos projetos
                  </AnimatedShinyText>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="text-5xl lg:text-7xl font-bold tracking-tight" role="doc-subtitle">
                <span className="text-foreground">Olá, eu sou</span>
                <br />
                <BrandTextReveal text="Luís Henrique" delay={0.35} duration={1.8} />
              </p>
              <p className="mt-3 text-lg lg:text-xl text-muted-foreground font-medium">
                Desenvolvedor Full Stack Pleno · .NET · React · Next.js · AWS
              </p>
            </BlurFade>

            <BlurFade delay={0.35}>
              <Text3DFlipLoop
                className="text-2xl lg:text-3xl font-medium text-muted-foreground"
                words={[
                  "Desenvolvedor Full Stack",
                  "C# · .NET · React · Next.js",
                  "Cursor · Claude Code · IA",
                  "Node.js · AWS · Docker · Python",
                  "Produtos SaaS & Arquitetura",
                ]}
                interval={3200}
                staggerDuration={0.03}
              />
            </BlurFade>

            <BlurFade delay={0.45}>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
                Desenvolvedor Full Stack desde 2022 — aplicações web, sistemas corporativos e
                produtos SaaS. Praticante de{" "}
                <span className="text-foreground font-medium">
                  AI-Assisted Development com Cursor e Claude Code
                </span>
                , atuo do entendimento do problema até implementação, infraestrutura e produção,
                com foco em soluções simples de manter, intuitivas e escaláveis.
              </p>
            </BlurFade>

            <BlurFade delay={0.55}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2 pointer-events-auto">
                <a
                  href="#contato"
                  onClick={() =>
                    trackRecruiterCta("contact", "hero_section")
                  }
                >
                  <ShimmerButton
                    className="shadow-lg"
                    background="linear-gradient(135deg, #3b82f6, #9333ea)"
                    shimmerColor="#ffffff"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <Mail className="size-4" />
                      Entrar em Contato
                    </span>
                  </ShimmerButton>
                </a>

                <Button
                  size="lg"
                  variant="outline"
                  className="group border-primary/30 hover:border-primary hover:bg-primary/10 rounded-full"
                  asChild
                >
                  <a
                    href="/curriculo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackResumeDownload("hero_section")}
                  >
                    <Download className="size-4 mr-2 group-hover:animate-bounce" />
                    Download CV
                  </a>
                </Button>
              </div>
            </BlurFade>

            <BlurFade delay={0.65}>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
                <div className="text-center lg:text-left">
                  <div className="flex items-baseline gap-1 justify-center lg:justify-start mb-1">
                    <NumberTicker
                      value={getYearsOfExperience()}
                      className="text-3xl font-bold text-foreground"
                    />
                    <span className="text-3xl font-bold text-foreground">+</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Anos de Experiência</span>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-baseline gap-1 justify-center lg:justify-start mb-1">
                    <NumberTicker value={15} className="text-3xl font-bold text-foreground" />
                    <span className="text-3xl font-bold text-foreground">+</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Projetos Entregues</span>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-baseline gap-1 justify-center lg:justify-start mb-1">
                    <NumberTicker value={100} className="text-3xl font-bold text-foreground" />
                    <span className="text-3xl font-bold text-foreground">%</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Dedicação</span>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Profile image with orbiting stacks */}
          <BlurFade delay={0.3} className="flex-shrink-0 relative">
            <div className="relative flex size-[320px] lg:size-[420px] items-center justify-center">
              <div className="relative z-10 size-52 lg:size-64 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src={ProfilePhoto}
                  alt="Luís Henrique Wendt — Desenvolvedor Full Stack Pleno especializado em .NET, React, Next.js e AWS"
                  fill
                  priority
                  sizes="(max-width: 1024px) 208px, 256px"
                  className="object-cover object-center"
                />
              </div>

              <OrbitingCircles
                radius={150}
                iconSize={44}
                duration={28}
                className="hidden sm:flex border border-border/60 bg-background/90 backdrop-blur-sm shadow-lg"
              >
                {orbitLogos.slice(0, 3).map((stack) => (
                  <Image
                    key={stack.name}
                    src={stack.logo}
                    alt={stack.name}
                    width={stack.fill ? 44 : stack.wide ? 40 : 28}
                    height={stack.fill ? 44 : 28}
                    className={
                      stack.fill
                        ? "size-full object-cover"
                        : "h-auto w-auto max-h-full max-w-full object-contain"
                    }
                    style={stack.fill ? undefined : { width: "auto", height: "auto" }}
                    title={stack.name}
                  />
                ))}
              </OrbitingCircles>

              <OrbitingCircles
                radius={200}
                iconSize={40}
                duration={36}
                reverse
                className="hidden lg:flex border border-border/60 bg-background/90 backdrop-blur-sm shadow-lg"
              >
                {orbitLogos.slice(3).map((stack) => (
                  <Image
                    key={stack.name}
                    src={stack.logo}
                    alt={stack.name}
                    width={28}
                    height={28}
                    className="h-auto w-auto max-h-full max-w-full object-contain"
                    style={{ width: "auto", height: "auto" }}
                    title={stack.name}
                  />
                ))}
              </OrbitingCircles>
            </div>
          </BlurFade>
        </div>
      </motion.div>
    </section>
  );
}
