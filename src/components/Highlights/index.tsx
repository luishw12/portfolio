"use client";

import { Quote, Rocket, Target, Zap } from "lucide-react";
import { BrandTextReveal } from "@/components/ui/brand-text-reveal";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Highlighter } from "@/components/ui/highlighter";

const highlights = [
  {
    icon: Rocket,
    title: "Produtos Digitais",
    description:
      "Do problema à produção — arquitetura, implementação e impacto real para empresas e usuários.",
    from: "#3b82f6",
    to: "#22d3ee",
  },
  {
    icon: Target,
    title: "Entender Antes",
    description:
      "Gosto de entender o problema antes da tecnologia e propor melhorias que geram valor.",
    from: "#a855f7",
    to: "#ec4899",
  },
  {
    icon: Zap,
    title: "Código Sustentável",
    description:
      "Aplicações simples de manter, intuitivas para o usuário e escaláveis com o negócio.",
    from: "#f59e0b",
    to: "#f97316",
  },
];

export default function Highlights() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <BlurFade delay={0.1} inView className="text-center">
            <Quote className="size-12 mx-auto mb-6 text-primary/30" />
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed max-w-4xl mx-auto">
              &ldquo;Entender o problema antes da tecnologia — e criar soluções que{" "}
              <Highlighter action="underline" color="#a855f7" isView>
                <BrandTextReveal text="gerem impacto real" />
              </Highlighter>{" "}
              para empresas e usuários.&rdquo;
            </blockquote>
            <p className="mt-6 text-muted-foreground flex items-center justify-center gap-2">
              — Minha{" "}
              <SparklesText className="text-base font-medium" sparklesCount={4}>
                filosofia
              </SparklesText>{" "}
              de desenvolvimento
            </p>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <BlurFade key={highlight.title} delay={0.15 + index * 0.1} inView>
                <MagicCard
                  className="rounded-3xl h-full"
                  gradientFrom={highlight.from}
                  gradientTo={highlight.to}
                  gradientColor="#0f172a"
                >
                  <div className="relative p-8 h-full flex flex-col gap-4">
                    <div
                      className="size-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${highlight.from}, ${highlight.to})`,
                      }}
                    >
                      <highlight.icon className="size-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{highlight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
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
