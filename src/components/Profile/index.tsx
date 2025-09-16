"use client";

import ProfilePhoto from "@/img/foto-perfil.jpg";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

const glowVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

const badgeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

const technologies = ["Java", "React", "Next.js", ".NET", "AWS", "PostgreSQL"];

export default function Profile() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <motion.div variants={itemVariants}>
                  <Badge variant="secondary" className="w-fit">
                    2+ anos de experiência
                  </Badge>
                </motion.div>
                <motion.h1 
                  className="text-4xl lg:text-6xl font-bold text-foreground leading-tight"
                  variants={itemVariants}
                >
                  Luís Henrique Wendt
                </motion.h1>
                <motion.h2 
                  className="text-2xl lg:text-3xl font-medium text-muted-foreground"
                  variants={itemVariants}
                >
                  Desenvolvedor Full Stack
                </motion.h2>
              </div>
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                variants={itemVariants}
              >
                Especializo-me em migração de sistemas legados para tecnologias modernas, 
                criando soluções escaláveis e eficientes com foco em performance e experiência do usuário.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-2 pt-4"
                variants={containerVariants}
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge variant="outline">{tech}</Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-shrink-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl"
                variants={glowVariants}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -1, 1, -1, 0],
                  transition: { duration: 0.6 }
                }}
                variants={imageVariants}
              >
                <Image 
                  src={ProfilePhoto} 
                  alt="Luís Henrique Wendt" 
                  width={400} 
                  height={400}
                  className="relative rounded-full border-4 border-border shadow-2xl" 
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}