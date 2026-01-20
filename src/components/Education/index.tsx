"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Calendar, Award, CheckCircle, Clock } from "lucide-react";
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

const education = [
  {
    degree: "Engenharia de Software",
    institution: "Anhanguera",
    period: "2024 - 2027",
    status: "Em andamento",
    description: "Formação em engenharia de software com foco em desenvolvimento de sistemas robustos e escaláveis.",
    projects: ["Sistema de conversão de moedas via API"],
    icon: GraduationCap,
    color: "from-blue-500 to-purple-500",
    progress: 35
  },
  {
    degree: "Ensino Médio",
    institution: "Colégio Santo Antônio (CSA)",
    period: "2020 - 2023",
    status: "Concluído",
    description: "Ensino médio completo com foco em ciências exatas e preparação para o ensino superior.",
    projects: [],
    icon: BookOpen,
    color: "from-green-500 to-emerald-500",
    progress: 100
  }
];

export default function Education() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <GraduationCap className="w-3 h-3 mr-2" />
              Educação
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Formação{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Acadêmica
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Minha jornada educacional construindo uma base sólida para a carreira
            </p>
          </motion.div>

          {/* Education Cards */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Gradient top border */}
                  <div className={`h-1 bg-gradient-to-r ${edu.color}`} />

                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <motion.div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <edu.icon className="h-8 w-8 text-white" />
                        </motion.div>
                      </div>
                      
                      <div className="flex-1">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                              {edu.degree}
                            </h3>
                            <p className="text-muted-foreground font-medium">
                              {edu.institution}
                            </p>
                          </div>
                          
                          <div className="flex flex-col lg:items-end gap-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {edu.period}
                            </div>
                            <Badge 
                              className={`w-fit ${
                                edu.status === "Concluído" 
                                  ? "bg-green-500/10 text-green-500 border-green-500/20" 
                                  : "bg-blue-500/10 text-blue-500 border-blue-500/20"
                              }`}
                              variant="outline"
                            >
                              {edu.status === "Concluído" ? (
                                <CheckCircle className="w-3 h-3 mr-1" />
                              ) : (
                                <Clock className="w-3 h-3 mr-1" />
                              )}
                              {edu.status}
                            </Badge>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {edu.description}
                        </p>
                        
                        {/* Progress bar for ongoing */}
                        {edu.status === "Em andamento" && (
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-muted-foreground">Progresso</span>
                              <span className="text-sm font-medium text-foreground">{edu.progress}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${edu.color} rounded-full`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${edu.progress}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                              />
                            </div>
                          </div>
                        )}

                        {/* Projects */}
                        {edu.projects.length > 0 && (
                          <div className="bg-muted/30 rounded-xl p-4">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Award className="h-4 w-4 text-primary" />
                              Projetos Desenvolvidos
                            </h4>
                            <ul className="space-y-2">
                              {edu.projects.map((project, projectIndex) => (
                                <motion.li
                                  key={projectIndex}
                                  className="text-sm text-muted-foreground flex items-center gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.2 + projectIndex * 0.1 }}
                                >
                                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color}`}></span>
                                  {project}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom message */}
          <motion.div
            className="text-center mt-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Acredito que o aprendizado é uma jornada contínua. Além da formação acadêmica,
              invisto constantemente em cursos e certificações para me manter atualizado com as últimas tendências.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
