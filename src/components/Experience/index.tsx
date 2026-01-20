"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink,
  Code,
  Users,
  Zap,
  Shield,
  Database,
  Globe,
  ChevronRight,
  Building2
} from "lucide-react";

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

const experiences = [
  {
      company: "Refatorize",
      role: "Desenvolvedor Full Stack",
      period: "2025 - Presente",
      location: "Remoto",
      companyUrl: "https://refatorize.com.br",
      description: "Desenvolvi e mantive uma plataforma SaaS de pagamentos, com foco em segurança e automação fiscal, além de criar dashboards analíticos e pipelines de CI/CD.",
      achievements: [
          "Desenvolvi uma plataforma SaaS de pagamentos com arquitetura escalável, integrando Pix e automatizando a emissão de NF-e.",
          "Criei um dashboard analítico interativo e responsivo com Next.js para visualizações de métricas financeiras em tempo real.",
          "Construí um backend robusto com Spring Boot hospedado na AWS, garantindo alta resiliência e segurança.",
          "Automatizei fluxos de CI/CD com GitHub Actions, assegurando entregas contínuas e versionamento confiável.",
          "Configurei o disparo automático de e-mails transacionais usando AWS SES, garantindo alta confiabilidade na comunicação com usuários."
      ],
      technologies: ["React", "Next.js", "Spring Boot", "AWS", "GitHub Actions", "AWS SES", "Pix", "TypeScript", "PostgreSQL", "Docker"],
      icon: Code,
      type: "Autônomo",
      color: "from-blue-500 to-cyan-500"
  },
  {
      company: "Tricon",
      role: "Desenvolvedor Full Stack",
      period: "2024 - Presente",
      location: "Lajeado, RS, Brasil",
      companyUrl: "https://tricon.inf.br",
      description: "Condução da migração de sistemas legados, projetando microsserviços escaláveis na AWS e implementando pipelines de CI/CD para otimizar o ciclo de desenvolvimento.",
      achievements: [
          "Conduzi a migração de sistemas legados em Delphi para uma arquitetura moderna com Java Spring Boot, utilizando Thymeleaf e JasperReports.",
          "Projetei e implementei microsserviços distribuídos e escaláveis na AWS (EC2 e RDS) para garantir resiliência e segurança.",
          "Gerenciei containers com Docker, padronizando ambientes entre desenvolvimento, homologação e produção.",
          "Implementei pipelines CI/CD automatizados com GitHub Actions e GitLab CI, reduzindo o tempo de entrega em 30%.",
          "Desenvolvi APIs RESTful seguras com Spring Boot, aplicando autenticação JWT e boas práticas de arquitetura limpa."
      ],
      technologies: ["Java", "Spring Boot", "Thymeleaf", "JasperReports", "AWS", "Docker", "Git", "GitHub Actions", "GitLab CI", "Delphi", "PostgreSQL"],
      icon: Users,
      type: "CLT",
      color: "from-green-500 to-emerald-500"
  },
  {
      company: "Toshyro Inovação e Tecnologia",
      role: "Desenvolvedor Front-end",
      period: "2022 - 2024",
      location: "Lajeado, RS, Brasil",
      companyUrl: "https://www.toshyro.com.br/",
      description: "Desenvolvimento de interfaces modernas e responsivas com React.js e Next.js, focando em usabilidade, acessibilidade e integração com APIs.",
      achievements: [
          "Desenvolvi interfaces modernas e responsivas com React.js, TailwindCSS e Next.js, garantindo usabilidade e acessibilidade.",
          "Atuei na construção de aplicações Next.js escaláveis, promovendo integração eficiente com APIs REST em .NET e otimizando o carregamento.",
          "Implementei documentação interativa de APIs com Swagger e padronização visual com Storybook para acelerar o desenvolvimento.",
          "Participei de sprints semanais, entregando funcionalidades críticas como autenticação com JWT, dashboards dinâmicos e componentes reutilizáveis."
      ],
      technologies: ["React.js", "Next.js", "TailwindCSS", "JavaScript", "TypeScript", "HTML", "CSS", ".NET", "Swagger", "Storybook", "JWT"],
      icon: Zap,
      type: "CLT",
      color: "from-purple-500 to-pink-500"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "CLT":
      return "bg-green-500/10 text-green-500 border-green-500/20";
    case "Freelance":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    case "Autônomo":
      return "bg-amber-500/10 text-amber-500 border-amber-500/20";
    default:
      return "bg-gray-500/10 text-gray-500 border-gray-500/20";
  }
};

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <Briefcase className="w-3 h-3 mr-2" />
              Carreira
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Experiência{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Profissional
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Minha jornada desenvolvendo soluções inovadoras e escaláveis
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent transform md:-translate-x-1/2 hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 -translate-y-1 hidden md:block shadow-lg shadow-primary/50 z-10" />

                {/* Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Gradient top border */}
                    <div className={`h-1 bg-gradient-to-r ${exp.color}`} />

                    <CardContent className="p-8">
                      <div className="flex flex-col gap-6">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <motion.div
                              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <exp.icon className="h-7 w-7 text-white" />
                            </motion.div>

                            <div>
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <h3 className="text-xl font-bold text-foreground">
                                  {exp.role}
                                </h3>
                                <Badge className={`${getTypeColor(exp.type)} border`} variant="outline">
                                  {exp.type}
                                </Badge>
                              </div>

                              <div className="flex items-center gap-2 text-primary">
                                <Building2 className="h-4 w-4" />
                                {exp.companyUrl !== "#" ? (
                                  <a 
                                    href={exp.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold hover:underline flex items-center gap-1"
                                  >
                                    {exp.company}
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                ) : (
                                  <span className="font-semibold">{exp.company}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                        
                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-primary" />
                            Principais Conquistas
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.slice(0, 3).map((achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                                className="text-sm text-muted-foreground flex items-start gap-3 group/item"
                              >
                                <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Database className="h-5 w-5 text-primary" />
                            Stack Tecnológico
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.2, delay: techIndex * 0.03 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="px-3 py-1 text-xs hover:bg-primary/10 transition-colors cursor-default"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-20 grid md:grid-cols-3 gap-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { icon: Calendar, value: "2+", label: "Anos de Experiência", color: "from-blue-500 to-cyan-500" },
              { icon: Globe, value: "15+", label: "Projetos Desenvolvidos", color: "from-green-500 to-emerald-500" },
              { icon: Users, value: "3", label: "Empresas Trabalhadas", color: "from-purple-500 to-pink-500" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-xl overflow-hidden group">
                  <div className={`h-1 bg-gradient-to-r ${stat.color}`} />
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <stat.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
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
