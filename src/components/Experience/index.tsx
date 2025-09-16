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
  Globe
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
      type: "Autônomo"
  },
  {
      company: "Tricon",
      role: "Desenvolvedor Full Stack",
      period: "2024 - Presente",
      location: "Lajeado, RS, Brasil",
      companyUrl: "https://tricon.com.br",
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
      type: "CLT"
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
      type: "CLT"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "CLT":
      return "bg-green-500/10 text-green-600 border-green-500/20";
    case "Freelance":
      return "bg-blue-500/10 text-blue-600 border-blue-500/20";
    case "Estágio":
      return "bg-purple-500/10 text-purple-600 border-purple-500/20";
    default:
      return "bg-gray-500/10 text-gray-600 border-gray-500/20";
  }
};

export default function Experience() {
  return (
    <section id="experiencia" className="py-20">
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
              Experiência Profissional
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Minha jornada profissional desenvolvendo soluções inovadoras e escaláveis
            </p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Ícone da Empresa */}
                      <div className="flex-shrink-0">
                        <motion.div
                          className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <exp.icon className="h-8 w-8 text-primary" />
                        </motion.div>
                      </div>
                      
                      {/* Conteúdo Principal */}
                      <div className="flex-1">
                        {/* Header da Experiência */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold text-foreground">
                                {exp.role}
                              </h3>
                              <Badge 
                                className={`${getTypeColor(exp.type)} border`}
                                variant="outline"
                              >
                                {exp.type}
                              </Badge>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <div className="flex items-center gap-2 text-primary font-medium">
                                <Briefcase className="h-4 w-4" />
                                {exp.companyUrl !== "#" ? (
                                  <a 
                                    href={exp.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline flex items-center gap-1"
                                  >
                                    {exp.company}
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                ) : (
                                  exp.company
                                )}
                              </div>
                              
                              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <Calendar className="h-4 w-4" />
                                {exp.period}
                              </div>
                              
                              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <MapPin className="h-4 w-4" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Descrição */}
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        {/* Conquistas */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-primary" />
                            Principais Conquistas
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <motion.li 
                                key={achievementIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                                className="text-sm text-muted-foreground flex items-start gap-3"
                              >
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Tecnologias */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Database className="h-5 w-5 text-primary" />
                            Tecnologias Utilizadas
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                              >
                                <Badge 
                                  variant="secondary" 
                                  className="px-3 py-1 text-xs hover:bg-primary/10 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Estatísticas de Carreira */}
          <motion.div 
            className="mt-16 grid md:grid-cols-3 gap-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">2+</h3>
                <p className="text-muted-foreground">Anos de Experiência</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500/5 to-green-500/10">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">15+</h3>
                <p className="text-muted-foreground">Projetos Desenvolvidos</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500/5 to-blue-500/10">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">3</h3>
                <p className="text-muted-foreground">Empresas Trabalhadas</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
