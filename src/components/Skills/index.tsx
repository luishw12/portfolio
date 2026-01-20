"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe,
  Server,
  Zap,
  Star,
  TrendingUp,
  Award,
  Sparkles,
  Cpu,
  Layers
} from "lucide-react";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: any;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React", level: 95, color: "bg-cyan-500" },
      { name: "Next.js", level: 90, color: "bg-gray-500" },
      { name: "TypeScript", level: 88, color: "bg-blue-600" },
      { name: "JavaScript", level: 92, color: "bg-yellow-500" },
      { name: "Tailwind CSS", level: 95, color: "bg-teal-500" },
    ]
  },
  {
    title: "Backend", 
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Java", level: 85, color: "bg-orange-600" },
      { name: "Spring Boot", level: 80, color: "bg-green-600" },
      { name: ".NET Core", level: 75, color: "bg-purple-600" },
      { name: "Node.js", level: 78, color: "bg-green-500" },
      { name: "REST APIs", level: 90, color: "bg-blue-500" },
    ]
  },
  {
    title: "Database",
    icon: Database,
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "PostgreSQL", level: 88, color: "bg-blue-700" },
      { name: "MySQL", level: 82, color: "bg-cyan-700" },
      { name: "MongoDB", level: 70, color: "bg-green-700" },
      { name: "Redis", level: 65, color: "bg-red-600" },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-purple-500 to-violet-500",
    skills: [
      { name: "AWS", level: 80, color: "bg-orange-500" },
      { name: "Docker", level: 85, color: "bg-blue-500" },
      { name: "Git", level: 95, color: "bg-orange-600" },
      { name: "Linux", level: 78, color: "bg-yellow-600" },
      { name: "CI/CD", level: 82, color: "bg-green-500" },
    ]
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "React Native", level: 75, color: "bg-cyan-500" },
      { name: "Expo", level: 78, color: "bg-gray-600" },
    ]
  },
  {
    title: "Tools",
    icon: Zap,
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "VS Code", level: 95, color: "bg-blue-600" },
      { name: "IntelliJ IDEA", level: 88, color: "bg-red-600" },
      { name: "Postman", level: 90, color: "bg-orange-500" },
      { name: "Figma", level: 70, color: "bg-purple-500" },
    ]
  }
];

const methodologies = [
  { name: "Agile/Scrum", icon: TrendingUp, description: "Metodologias ágeis" },
  { name: "Clean Code", icon: Code, description: "Código limpo e legível" },
  { name: "SOLID", icon: Layers, description: "Princípios de design" },
  { name: "TDD", icon: Star, description: "Test Driven Development" },
  { name: "CI/CD", icon: Zap, description: "Deploy contínuo" },
  { name: "Microservices", icon: Server, description: "Arquitetura distribuída" },
  { name: "Clean Architecture", icon: Cpu, description: "Separação de responsabilidades" },
  { name: "Design Patterns", icon: Award, description: "Padrões de projeto" }
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      className="space-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <motion.span
          className="text-xs text-muted-foreground"
          animate={{ opacity: isHovered ? 1 : 0.6 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${skill.color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="group"
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ y: -5 }}
      >
        {/* Gradient top border */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`} />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <category.icon className="h-7 w-7 text-white" />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-foreground">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.skills.length} tecnologias
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            {category.skills.map((skill, skillIndex) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                delay={index * 0.1 + skillIndex * 0.05}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

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
              <Cpu className="w-3 h-3 mr-2" />
              Tech Stack
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Minhas{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Habilidades
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologias e ferramentas que utilizo para criar soluções incríveis
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <SkillCard key={category.title} category={category} index={index} />
            ))}
          </motion.div>

          {/* Methodologies */}
          <motion.div 
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center justify-center gap-3">
              <Sparkles className="h-6 w-6 text-primary" />
              Metodologias & Práticas
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
              {methodologies.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <motion.div 
                    className="group flex items-center gap-3 bg-card border border-border hover:border-primary/50 rounded-xl px-5 py-3 transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <method.icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div className="text-left">
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">
                        {method.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {method.description}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
