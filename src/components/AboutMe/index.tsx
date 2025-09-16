"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const skillCardVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

const skills = [
  { icon: Code, title: "Frontend", tech: "React, Next.js" },
  { icon: Database, title: "Backend", tech: "Java, .NET" },
  { icon: Cloud, title: "Cloud", tech: "AWS, DevOps" },
  { icon: GitBranch, title: "DevOps", tech: "Docker, Git" }
];

export default function AboutMe() {
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
              Sobre Mim
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedor apaixonado por tecnologia e soluções inovadoras
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div 
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div className="space-y-4" variants={itemVariants}>
                      <h3 className="text-2xl font-semibold text-foreground">
                        Olá, me chamo Luís. Prazer em conhecê-lo.
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Sou Desenvolvedor Full Stack com 2+ anos de experiência em projetos robustos. 
                        Atualmente trabalho na <a href="https://refatorize.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Refatorize</a> e na <a href="https://tricon.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tricon</a>, 
                        onde combino habilidades em Java, React, .NET e Next.js com expertise em arquitetura 
                        cloud (AWS), DevOps (Docker, Git) e bancos de dados (PostgreSQL).
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Especializo-me em migração de sistemas legados para tecnologias modernas, 
                        garantindo escalabilidade e performance em todas as soluções que desenvolvo. 
                        Minha experiência abrange desde desenvolvimento de interfaces modernas até 
                        arquitetura de sistemas robustos e seguros.
                      </p>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="grid grid-cols-2 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.title}
                        className="space-y-3"
                        variants={containerVariants}
                      >
                        <motion.div 
                          className="flex items-center gap-3 p-4 rounded-lg bg-background border group cursor-pointer"
                          variants={skillCardVariants}
                          whileHover={{ 
                            scale: 1.05,
                            y: -5,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <skill.icon className="h-6 w-6 text-primary" />
                          </motion.div>
                          <div>
                            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {skill.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{skill.tech}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}