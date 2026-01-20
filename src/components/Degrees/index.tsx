"use client";

import Image, { StaticImageData } from "next/image";
import AppMoviesImg from "@/img/app-movies-logo.png";
import DesignSystemImg from "@/img/design-system-logo.png";
import BoltSkinsLP from "@/img/BoltSkins LP.jpeg";
import BoltSkinsTroca from "@/img/BoltSkins Tela Troca.jpeg";
import BoltSkinsVender from "@/img/BoltSkins Tela Vender Skin.jpeg";
import BoltSkinsAfiliado from "@/img/BoltSkins Tela Afiliado.jpeg";
import BoltSkinsHistorico from "@/img/BoltSkins Tela Historico Troca.jpeg";
import CsInvestDashboard from "@/img/CSINVEST dashboard.png";
import CsInvestItem from "@/img/CSINVEST item.png";
import CsInvestCalcJuros from "@/img/CSINVEST calculadora juros.png";
import CsInvestCalcLucro from "@/img/CSINVEST calculadora lucro.png";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight, X, Maximize2, Star, Users, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  images: StaticImageData[];
  link: string | null;
  github: string | null;
  technologies: string[];
  featured: boolean;
  color: string;
  stats?: { label: string; value: string; icon: any }[];
}

const projects: Project[] = [
  {
    title: "BoltSkins",
    subtitle: "Marketplace de Skins CS2",
    description: "Plataforma completa para compra, venda e troca de skins de CS2 com sistema de afiliados integrado.",
    longDescription: "Uma marketplace moderna e segura para negociação de skins de Counter-Strike 2. O projeto conta com sistema de trocas automatizado, painel de afiliados com comissões, histórico detalhado de transações e integração com a API da Steam para autenticação e inventário.",
    images: [BoltSkinsLP, BoltSkinsTroca, BoltSkinsVender, BoltSkinsAfiliado, BoltSkinsHistorico],
    link: "https://boltskins.com.br",
    github: null,
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Steam API"],
    featured: true,
    color: "from-amber-500 to-orange-600",
    stats: [
      { label: "Usuários", value: "500+", icon: Users },
      { label: "Transações", value: "1000+", icon: TrendingUp },
      { label: "Avaliação", value: "4.9", icon: Star },
    ]
  },
  {
    title: "CS Invest",
    subtitle: "Análise de Investimentos",
    description: "Aplicação web focada na análise de rentabilidade de compra e venda de itens em marketplaces.",
    longDescription: "Plataforma completa para investidores de skins que desejam maximizar seus lucros. Oferece calculadoras de rentabilidade, análise de juros compostos, dashboard com métricas em tempo real e acompanhamento individual de cada item do portfólio.",
    images: [CsInvestDashboard, CsInvestItem, CsInvestCalcJuros, CsInvestCalcLucro],
    link: "https://csinvest.app.br",
    github: null,
    technologies: ["Next.js", "Java Spring Boot", "AWS", "PostgreSQL", "TailwindCSS", "TypeScript"],
    featured: true,
    color: "from-blue-500 to-cyan-500",
    stats: [
      { label: "Itens", value: "10K+", icon: TrendingUp },
      { label: "Precisão", value: "99.5%", icon: Star },
      { label: "Usuários", value: "200+", icon: Users },
    ]
  },
  {
    title: "App Movies",
    subtitle: "Descoberta de Filmes",
    description: "Projeto mobile feito com React Native e Expo, consumindo API pública TMDB para descoberta e busca de filmes.",
    longDescription: "Aplicativo mobile que permite aos usuários descobrir novos filmes, ver detalhes completos, trailers e avaliações.",
    images: [AppMoviesImg],
    link: null,
    github: "https://github.com/luishw12/AppMovies",
    technologies: ["React Native", "Expo", "TMDB API", "TypeScript"],
    featured: false,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Design System",
    subtitle: "Biblioteca de Componentes",
    description: "Biblioteca NPM com componentes reutilizáveis desenvolvida com Storybook, React.js e Tailwind CSS.",
    longDescription: "Design system completo publicado no NPM, com componentes acessíveis e customizáveis.",
    images: [DesignSystemImg],
    link: "https://www.npmjs.com/package/design-system-toshyro",
    github: null,
    technologies: ["React", "Storybook", "Tailwind CSS", "NPM", "TypeScript"],
    featured: false,
    color: "from-green-500 to-emerald-500",
  }
];

// Image Gallery Modal Component
function ImageGallery({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
  title
}: {
  images: StaticImageData[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  title: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  if (!isOpen) return null;

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
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Title */}
          <h3 className="text-white text-xl font-semibold mb-4 text-center">{title}</h3>

          {/* Main image - aspect ratio for horizontal screenshots */}
          <div className="relative w-full aspect-[16/9] bg-black/50 rounded-xl overflow-hidden">
            <Image
              src={images[currentIndex]}
              alt={`${title} - Imagem ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          {/* Navigation arrows */}
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

          {/* Thumbnails - horizontal scroll on mobile */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-20 h-12 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentIndex 
                      ? "border-primary scale-105" 
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Counter */}
          <p className="text-white/60 text-center mt-2 text-sm">
            {currentIndex + 1} / {images.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Featured Project Card - vertical layout with large horizontal image
function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="col-span-full"
      >
        <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
          {/* Gradient border effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          <div className="absolute inset-[1px] bg-card rounded-lg" />

          <CardContent className="relative p-0">
            {/* Image section - horizontal aspect ratio */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-t-lg">
              <Image
                src={project.images[currentImage]}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1400px"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Featured badge */}
              <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${project.color} text-white border-0 shadow-lg`}>
                <Star className="w-3 h-3 mr-1" />
                Destaque
              </Badge>

              {/* Expand button */}
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setGalleryOpen(true)}
                className="absolute top-4 right-4 gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Maximize2 className="w-4 h-4" />
                {project.images.length} fotos
              </Button>

              {/* Image navigation dots */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentImage 
                          ? "bg-white w-6" 
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content section */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                {/* Left side - Info */}
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{project.subtitle}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Right side - Stats and Actions */}
                <div className="flex flex-col gap-4 md:items-end">
                  {/* Stats */}
                  {project.stats && (
                    <div className="flex gap-4">
                      {project.stats.map((stat, idx) => (
                        <div key={idx} className="text-center px-4 py-2 bg-muted/50 rounded-lg">
                          <stat.icon className="w-4 h-4 mx-auto mb-1 text-primary" />
                          <p className="text-lg font-bold text-foreground">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.link && (
                      <Button className={`bg-gradient-to-r ${project.color} text-white border-0 hover:opacity-90`} asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visitar Site
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Código
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Image Gallery Modal */}
      <ImageGallery
        images={project.images}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialIndex={currentImage}
        title={project.title}
      />
    </>
  );
}

// Regular Project Card
function RegularProjectCard({ project, index }: { project: Project; index: number }) {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
          {/* Gradient border effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          <div className="absolute inset-[1px] bg-card rounded-lg" />

          <CardContent className="relative p-0 h-full flex flex-col">
            {/* Image */}
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <p className="text-xs text-muted-foreground mb-1">{project.subtitle}</p>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-0.5">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="outline" className="text-xs px-2 py-0.5">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                {project.link && (
                  <Button size="sm" className={`flex-1 bg-gradient-to-r ${project.color} text-white border-0`} asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                      Ver
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5 mr-1.5" />
                      Código
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Image Gallery Modal */}
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
  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section id="projetos" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <Star className="w-3 h-3 mr-2" />
              Portfólio
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Projetos em{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Destaque
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos projetos que demonstram minha paixão por criar
              soluções inovadoras e experiências digitais incríveis
            </p>
          </motion.div>

          {/* Featured Projects - full width */}
          <div className="space-y-8 mb-12">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* Regular Projects - grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {regularProjects.map((project, index) => (
              <RegularProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-muted-foreground mb-4">
              Quer ver mais projetos ou discutir uma colaboração?
            </p>
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="https://github.com/luishw12" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Ver mais no GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}