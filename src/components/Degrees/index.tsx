"use client";

import Image, { StaticImageData } from "next/image";
import FeriadosCalendario from "@/img/feriados-brasil-calendario.png";
import FeriadosArtigo from "@/img/feriados-brasil-artigo.png";
import BoltSkinsLP from "@/img/BoltSkins LP.jpeg";
import BoltSkinsTroca from "@/img/BoltSkins Tela Troca.jpeg";
import BoltSkinsVender from "@/img/BoltSkins Tela Vender Skin.jpeg";
import BoltSkinsAfiliado from "@/img/BoltSkins Tela Afiliado.jpeg";
import BoltSkinsHistorico from "@/img/BoltSkins Tela Historico Troca.jpeg";
import CsInvestDashboard from "@/img/CSINVEST dashboard.png";
import CsInvestItem from "@/img/CSINVEST item.png";
import CsInvestCalcJuros from "@/img/CSINVEST calculadora juros.png";
import CsInvestCalcLucro from "@/img/CSINVEST calculadora lucro.png";
import SkinsManagerModules from "@/img/SkinsManager modules.png";
import SkinsManagerDashboardClientes from "@/img/SkinsManager dashboard clientes.png";
import SkinsManagerDashboardTrocas from "@/img/SkinsManager dashboard trocas.png";
import SkinsManagerTrocas from "@/img/SkinsManager trocas.png";
import SkinsManagerInventario from "@/img/SkinsManager inventario.png";
import SkinsManagerPagamentos from "@/img/SkinsManager pagamentos.png";
import SkinsManagerWhatsapp from "@/img/SkinsManager whatsapp.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { BrandTextReveal } from "@/components/ui/brand-text-reveal";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { GlareHover } from "@/components/ui/glare-hover";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  trackProjectClick,
  trackSocialClick,
} from "@/lib/analytics";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  images: StaticImageData[];
  link: string | null;
  github: string | null;
  technologies: string[];
  gradientFrom: string;
  gradientTo: string;
}

const projects: Project[] = [
  {
    title: "SkinsManager",
    subtitle: "Gestão de operação de skins CS2",
    description:
      "SaaS multi-tenant para traders e times: inventário, trades, clientes, fórmulas de preço e dashboards.",
    longDescription:
      "Evolução do CS Invest voltada a operação completa — organizações com RBAC (Owner/Admin/Member), preenchimento automático de valores via fórmulas (Buff, YouPin, CsFloat, Steam), CRM de clientes, despesas recorrentes, pagamentos com Google Agenda, WhatsApp em massa (Evolution + SignalR) e dashboards de trades/clientes.",
    images: [
      SkinsManagerModules,
      SkinsManagerDashboardClientes,
      SkinsManagerDashboardTrocas,
      SkinsManagerTrocas,
      SkinsManagerInventario,
      SkinsManagerPagamentos,
      SkinsManagerWhatsapp,
    ],
    link: "https://skinsmanager.com.br",
    github: null,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "ASP.NET Core",
      "PostgreSQL",
      "NextAuth",
      "SignalR",
      "Tailwind CSS",
      "Recharts",
    ],
    gradientFrom: "#8b5cf6",
    gradientTo: "#6366f1",
  },
  {
    title: "BoltSkins",
    subtitle: "Marketplace de Skins CS2",
    description:
      "Plataforma completa para compra, venda e troca de skins de CS2 com sistema de afiliados integrado.",
    longDescription:
      "Uma marketplace moderna e segura para negociação de skins de Counter-Strike 2. O projeto conta com sistema de trocas automatizado, painel de afiliados com comissões, histórico detalhado de transações e integração com a API da Steam para autenticação e inventário.",
    images: [
      BoltSkinsLP,
      BoltSkinsTroca,
      BoltSkinsVender,
      BoltSkinsAfiliado,
      BoltSkinsHistorico,
    ],
    link: "https://boltskins.com.br",
    github: null,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Steam API",
    ],
    gradientFrom: "#f59e0b",
    gradientTo: "#ea580c",
  },
  {
    title: "CS Invest",
    subtitle: "Análise de Investimentos",
    description:
      "Aplicação web focada na análise de rentabilidade de compra e venda de itens em marketplaces.",
    longDescription:
      "Plataforma completa para investidores de skins que desejam maximizar seus lucros. Oferece calculadoras de rentabilidade, análise de juros compostos, dashboard com métricas em tempo real e acompanhamento individual de cada item do portfólio.",
    images: [
      CsInvestDashboard,
      CsInvestItem,
      CsInvestCalcJuros,
      CsInvestCalcLucro,
    ],
    link: "https://www.csinvest.site/",
    github: null,
    technologies: [
      "Next.js",
      "Java Spring Boot",
      "AWS",
      "PostgreSQL",
      "TailwindCSS",
      "TypeScript",
    ],
    gradientFrom: "#3b82f6",
    gradientTo: "#06b6d4",
  },
  {
    title: "Feriados Brasil",
    subtitle: "Calendário nacional e regional",
    description:
      "Calendário interativo com feriados nacionais, estaduais e municipais em mais de 5.500 cidades — com busca, guias e artigos.",
    longDescription:
      "Produto próprio em produção com foco em SEO e utilidade pública: calendário anual com filtros por tema (religioso, cívico, cultural), detecção de localização, contador regressivo para o próximo feriado, páginas de artigo por data comemorativa, guias temáticos e índice para assistentes de IA (llms.txt). Site 100% estático gerado com Astro, deploy na Vercel.",
    images: [FeriadosCalendario, FeriadosArtigo],
    link: "https://feriados.luishw.com.br",
    github: "https://github.com/luishw12/feriados-app",
    technologies: [
      "Astro",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "SEO",
    ],
    gradientFrom: "#22c55e",
    gradientTo: "#059669",
  },
];

function ImageGallery({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
  title,
}: {
  images: StaticImageData[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  title: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % images.length;
      trackProjectClick("gallery_nav", title);
      return next;
    });
  }, [images.length, title]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev - 1 + images.length) % images.length;
      trackProjectClick("gallery_nav", title);
      return next;
    });
  }, [images.length, title]);

  if (!isOpen) return null;

  const current = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-5xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <h3 className="text-white text-xl font-semibold mb-4 text-center">
            {title}
          </h3>

          <div className="relative w-full aspect-[16/9] bg-black/50 rounded-xl overflow-hidden">
            <Image
              src={current}
              alt={`${title} - Imagem ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    trackProjectClick("gallery_nav", title);
                  }}
                  className={`relative w-20 h-12 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentIndex
                      ? "border-primary scale-105"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          <p className="text-white/60 text-center mt-2 text-sm">
            {currentIndex + 1} / {images.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const cover = project.images[0];
  const hasGallery = project.images.length > 1;

  return (
    <>
      <BlurFade delay={0.08 + index * 0.06} inView className="h-full">
        <GlareHover
          className="h-full w-full rounded-xl"
          background="transparent"
          color="#ffffff"
          opacity={0.2}
          duration={600}
          size={220}
        >
          <MagicCard
            className="group relative h-full w-full overflow-hidden rounded-xl border border-border/50 bg-card"
            gradientFrom={project.gradientFrom}
            gradientTo={project.gradientTo}
            gradientColor="#0f172a"
          >
            <div className="flex h-full flex-col">
              <button
                type="button"
                onClick={() => {
                  if (hasGallery) {
                    trackProjectClick("open_gallery", project.title);
                    setGalleryOpen(true);
                  }
                }}
                className={`relative aspect-video w-full overflow-hidden ${
                  hasGallery ? "cursor-zoom-in" : "cursor-default"
                }`}
              >
                <Image
                  src={cover}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {hasGallery && (
                  <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <Maximize2 className="h-3 w-3" />
                    {project.images.length}
                  </span>
                )}
              </button>

              <div className="flex flex-1 flex-col gap-3 p-4">
                <div>
                  <p className="mb-0.5 text-xs text-muted-foreground">
                    {project.subtitle}
                  </p>
                  <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                </div>

                <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-2 py-0.5 text-[10px]"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge
                      variant="outline"
                      className="px-2 py-0.5 text-[10px]"
                    >
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-1">
                  {project.link && (
                    <Button size="sm" className="h-8 flex-1 text-xs" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackProjectClick("visit_site", project.title)
                        }
                      >
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Ver site
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 flex-1 text-xs"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackProjectClick("view_code", project.title)
                        }
                      >
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        Código
                      </a>
                    </Button>
                  )}
                  {hasGallery && !project.link && !project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 flex-1 text-xs"
                      onClick={() => {
                        trackProjectClick("open_gallery", project.title);
                        setGalleryOpen(true);
                      }}
                    >
                      <Maximize2 className="mr-1.5 h-3.5 w-3.5" />
                      Galeria
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </MagicCard>
        </GlareHover>
      </BlurFade>

      <ImageGallery
        images={project.images}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialIndex={0}
        title={project.title}
      />
    </>
  );
}

export default function Projects() {
  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-10 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <Star className="mr-2 h-3 w-3" />
              Portfólio
            </Badge>
            <h2 id="projetos-titulo" className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">
              Projetos em <BrandTextReveal text="Destaque" />
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Conheça alguns dos projetos que demonstram minha paixão por criar
              soluções inovadoras e experiências digitais incríveis
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>

          <BlurFade
            delay={0.2}
            inView
            className="mt-12 flex flex-col items-center gap-4 text-center"
          >
            <p className="text-muted-foreground">
              Quer ver mais projetos ou discutir uma colaboração?
            </p>
            <a
              href="https://github.com/luishw12"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackProjectClick("view_github_profile", "github_profile")
              }
            >
              <ShimmerButton
                background="linear-gradient(135deg, #1f2937, #374151)"
                className="shadow-lg"
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  <Github className="size-4" />
                  Ver mais no GitHub
                </span>
              </ShimmerButton>
            </a>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
