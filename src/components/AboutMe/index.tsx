"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, GitBranch, Heart, Coffee, Lightbulb, Target } from "lucide-react";
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

const skills = [
  {
    icon: Code,
    title: "Frontend",
    tech: "React, Next.js, TypeScript",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Database,
    title: "Backend",
    tech: "Java, .NET, Node.js",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Cloud,
    title: "Cloud",
    tech: "AWS, Docker, CI/CD",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: GitBranch,
    title: "DevOps",
    tech: "Git, GitHub Actions",
    color: "from-orange-500 to-red-500",
  }
];

const values = [
  { icon: Heart, label: "Paixão por código" },
  { icon: Coffee, label: "Sempre aprendendo" },
  { icon: Lightbulb, label: "Soluções criativas" },
  { icon: Target, label: "Foco em resultados" },
];

export default function AboutMe() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

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
              <Heart className="w-3 h-3 mr-2 text-red-500" />
              Conheça-me melhor
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sobre{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Mim
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedor apaixonado por criar soluções que fazem a diferença
            </p>
          </motion.div>
          
          {/* Main content - stacked on mobile, side by side on desktop */}
          <div className="flex flex-col gap-8">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/50 overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <span className="text-3xl md:text-4xl">👋</span>
                        Olá! Prazer em conhecê-lo
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                        Sou <span className="text-foreground font-medium">Desenvolvedor Full Stack</span> com
                        mais de 2 anos de experiência construindo aplicações web e mobile robustas.
                        Atualmente trabalho na{" "}
                        <a href="https://refatorize.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                          Refatorize
                        </a>{" "}
                        e na{" "}
                        <a href="https://tricon.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                          Tricon
                        </a>.
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      Minha especialidade está em <span className="text-foreground font-medium">migração de sistemas legados</span> para
                      arquiteturas modernas, garantindo escalabilidade, segurança e performance.
                      Combino expertise em <span className="text-foreground font-medium">Java, React, .NET e Next.js</span> com
                      profundo conhecimento em cloud computing (AWS), DevOps e bancos de dados.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Acredito que o melhor código é aquele que resolve problemas reais de forma elegante e sustentável.
                      Estou sempre em busca de novos desafios e oportunidades para criar impacto positivo através da tecnologia.
                    </p>

                    {/* Values */}
                    <div className="flex flex-wrap gap-2 md:gap-3 pt-4">
                      {values.map((value, index) => (
                        <motion.div
                          key={value.label}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <Badge variant="secondary" className="px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm">
                            <value.icon className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-primary" />
                            {value.label}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills cards - 2x2 grid on mobile, 4 columns on desktop */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.title}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                    {/* Gradient border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="absolute inset-[1px] bg-card rounded-lg" />

                    <CardContent className="relative p-4 md:p-5 flex flex-col items-center text-center h-full justify-center">
                      <motion.div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <skill.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                      </motion.div>

                      <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors text-sm md:text-base">
                        {skill.title}
                      </h4>
                      <p className="text-xs md:text-sm text-primary font-medium">
                        {skill.tech}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}