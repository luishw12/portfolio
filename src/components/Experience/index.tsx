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
    period: "2024 - Presente",
    location: "Remoto",
    companyUrl: "https://refatorize.com.br",
    description: "Desenvolvimento de soluções completas utilizando tecnologias modernas para clientes diversos.",
    achievements: [
      "Desenvolvimento de aplicações web responsivas com React e Next.js",
      "Implementação de APIs robustas com Java e Spring Boot",
      "Migração de sistemas legados para arquiteturas modernas",
      "Colaboração em projetos de grande escala com metodologias ágeis"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Docker", "AWS"],
    icon: Code,
    type: "CLT"
  },
  {
    company: "Tricon",
    role: "Desenvolvedor Full Stack",
    period: "2024 - Presente",
    location: "Lajeado, RS, Brasil",
    companyUrl: "https://tricon.com.br",
    description: "Desenvolvimento de sistemas corporativos e soluções de automação utilizando principalmente Java e Spring Boot.",
    achievements: [
      "Desenvolvimento de sistemas de gestão empresarial com Java e Spring Boot",
      "Criação de APIs REST robustas e escaláveis",
      "Implementação de soluções de automação de processos",
      "Manutenção e evolução de sistemas legados",
      "Desenvolvimento de aplicações web com React e integração com backend Java"
    ],
    technologies: ["Java", "Spring Boot", "Spring Framework", "React", "PostgreSQL", "Delphi", "Git", "Docker"],
    icon: Users,
    type: "CLT"
  },
  {
    company: "Toshyro Inovação e Tecnologia",
    role: "Desenvolvedor Full Stack",
    period: "2022 - 2024",
    location: "Lajeado, RS, Brasil",
    companyUrl: "https://www.toshyro.com.br/",
    description: "Desenvolvimento de soluções inovadoras e tecnológicas, focando em parcerias estratégicas para grandes descobertas no setor de tecnologia.",
    achievements: [
      "Desenvolvimento de sistemas inovadores com foco em tecnologia",
      "Implementação de soluções personalizadas para diversos clientes",
      "Criação de aplicações web modernas e responsivas",
      "Colaboração em projetos de inovação tecnológica",
      "Desenvolvimento de integrações com APIs terceiras"
    ],
    technologies: ["React", "Next.js", "JavaScript", "TypeScript", ".NET", "PostgreSQL", "Docker", "Git"],
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
