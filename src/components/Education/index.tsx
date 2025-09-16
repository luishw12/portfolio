"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";
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
    icon: GraduationCap
  },
  {
    degree: "Ensino Médio",
    institution: "Colégio Santo Antônio (CSA)",
    period: "2020 - 2023",
    status: "Concluído",
    description: "Ensino médio completo com foco em ciências exatas e preparação para o ensino superior.",
    projects: [],
    icon: BookOpen
  }
];

export default function Education() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Formação Acadêmica
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Minha jornada educacional e projetos desenvolvidos
            </p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <motion.div
                          className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <edu.icon className="h-8 w-8 text-primary" />
                        </motion.div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">
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
                              variant={edu.status === "Concluído" ? "default" : "secondary"}
                              className="w-fit"
                            >
                              {edu.status}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {edu.description}
                        </p>
                        
                        {edu.projects.length > 0 && (
                          <div>
                            <h4 className="font-medium text-foreground mb-2">
                              Projetos Desenvolvidos:
                            </h4>
                            <ul className="space-y-1">
                              {edu.projects.map((project, projectIndex) => (
                                <li key={projectIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                  {project}
                                </li>
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

          <motion.div 
            className="text-center mt-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Minha formação acadêmica me proporciona uma base sólida em engenharia de software, 
              combinando teoria e prática para desenvolver soluções inovadoras e eficientes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
