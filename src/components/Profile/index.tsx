"use client";

import ProfilePhoto from "@/img/foto-perfil.jpg";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles, Code, Rocket, Zap } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import TerminalChallenge from "@/components/TerminalChallenge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const technologies = [
  { name: "Java", color: "from-orange-500 to-red-500" },
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", color: "from-gray-400 to-gray-600" },
  { name: ".NET", color: "from-purple-500 to-violet-600" },
  { name: "AWS", color: "from-amber-400 to-orange-500" },
  { name: "PostgreSQL", color: "from-blue-400 to-indigo-500" },
];

const stats = [
  { value: "2+", label: "Anos de Experiência", icon: Code },
  { value: "15+", label: "Projetos Entregues", icon: Rocket },
  { value: "100%", label: "Dedicação", icon: Zap },
];

// Typing effect hook
const useTypingEffect = (texts: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

export default function Profile() {
  const containerRef = useRef<HTMLElement>(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const typedText = useTypingEffect([
    "Desenvolvedor Full Stack",
    "Especialista em React & Next.js",
    "Arquiteto de Software",
    "Entusiasta de Cloud & DevOps",
  ]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        className="container mx-auto px-6 py-20 relative z-10"
        style={{ y, opacity }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-8">
              {/* Greeting badge */}
              <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm border-primary/30 bg-primary/5 backdrop-blur-sm"
                >
                  <Sparkles className="w-4 h-4 mr-2 text-primary animate-pulse" />
                  Disponível para novos projetos
                </Badge>
              </motion.div>

              {/* Name */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-foreground">Olá, eu sou</span>
                  <br />
                  <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Luís Henrique
                  </span>
                </h1>
              </motion.div>

              {/* Typed role */}
              <motion.div variants={itemVariants} className="h-12">
                <h2 className="text-2xl lg:text-3xl font-medium text-muted-foreground">
                  {typedText}
                  <span className="inline-block w-0.5 h-7 ml-1 bg-primary animate-pulse" />
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              >
                Transformo ideias em{" "}
                <span className="text-foreground font-medium">experiências digitais incríveis</span>.
                Especializado em migração de sistemas legados para tecnologias modernas,
                criando soluções escaláveis com foco em{" "}
                <span className="text-foreground font-medium">performance e UX</span>.
              </motion.p>

              {/* Tech stack */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Badge
                      className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white border-0 shadow-lg hover:shadow-xl transition-shadow cursor-default`}
                    >
                      {tech.name}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <a href="#contato">
                      <span className="relative z-10 flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        Entrar em Contato
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="group border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    onClick={() => setIsTerminalOpen(true)}
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download CV
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                      <stat.icon className="w-5 h-5 text-primary" />
                      <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Decorative ring */}
            <motion.div
              className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Image container */}
            <motion.div
              className="relative"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <Image
                  src={ProfilePhoto} 
                  alt="Luís Henrique Wendt" 
                  fill
                  priority
                  className="rounded-full object-cover border-4 border-background shadow-2xl"
                />

                {/* Floating badges around image */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-background/90 backdrop-blur-sm border border-border rounded-xl p-3 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Code className="w-6 h-6 text-blue-500" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-background/90 backdrop-blur-sm border border-border rounded-xl p-3 shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <Rocket className="w-6 h-6 text-purple-500" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-8 bg-background/90 backdrop-blur-sm border border-border rounded-xl p-3 shadow-lg"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  <Zap className="w-6 h-6 text-amber-500" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
          onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm">Scroll para explorar</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Terminal Challenge Modal */}
      <TerminalChallenge
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </section>
  );
}