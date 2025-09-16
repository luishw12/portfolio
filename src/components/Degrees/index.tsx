"use client";

import Image from "next/image";
import AppMoviesImg from "@/img/app-movies-logo.png";
import CsInvestImg from "@/img/cs-invest-logo.png";
import DesignSystemImg from "@/img/design-system-logo.png";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

export default function Projects() {
  const projects = [
    {
      title: "CS Invest",
      description: "Aplicação web focada na análise de rentabilidade de compra e venda de itens em marketplaces como Steam, com automação de cálculos e controle financeiro individual.",
      image: CsInvestImg,
      link: "https://csinvest.site/",
      github: null,
      technologies: ["Next.js", "Java Spring Boot", "AWS", "PostgreSQL"],
      featured: true
    },
    {
      title: "App Movies",
      description: "Projeto mobile feito com React Native e Expo, consumindo API pública TMDB para descoberta e busca de filmes.",
      image: AppMoviesImg,
      link: null,
      github: "https://github.com/luishw12/AppMovies",
      technologies: ["React Native", "Expo", "TMDB API"],
      featured: false
    },
    {
      title: "Design System",
      description: "Biblioteca NPM com componentes reutilizáveis desenvolvida com Storybook, React.js e Tailwind CSS.",
      image: DesignSystemImg,
      link: "https://www.npmjs.com/package/design-system-toshyro",
      github: null,
      technologies: ["React", "Storybook", "Tailwind CSS", "NPM"],
      featured: false
    }
  ];

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meus Projetos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Projetos que demonstram minha paixão por tecnologia e desenvolvimento
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-border">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300"
                      />
                    </motion.div>
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "backOut" }}
                      >
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                          Destaque
                        </Badge>
                      </motion.div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.3, 
                              delay: techIndex * 0.1,
                              ease: "backOut"
                            }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            <Badge variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      <div className="flex gap-2 pt-2">
                        {project.link && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button size="sm" asChild>
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Ver Projeto
                              </a>
                            </Button>
                          </motion.div>
                        )}
                        {project.github && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button size="sm" variant="outline" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                Código
                              </a>
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}