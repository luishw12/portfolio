"use client";

import { motion } from "framer-motion";
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
  Sparkles
} from "lucide-react";

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

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"]
  },
  {
    title: "Backend", 
    icon: Server,
    skills: ["Java", "Spring Boot", ".NET Core", "Node.js", "REST APIs"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Git", "Linux"]
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Expo", "Flutter"]
  },
  {
    title: "Tools",
    icon: Zap,
    skills: ["VS Code", "IntelliJ IDEA", "Postman", "Figma"]
  }
];

const methodologies = [
  { name: "Agile/Scrum", icon: TrendingUp },
  { name: "Clean Code", icon: Code },
  { name: "SOLID", icon: Award },
  { name: "TDD", icon: Star },
  { name: "CI/CD", icon: Zap },
  { name: "Microservices", icon: Server }
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principais tecnologias e ferramentas que utilizo no desenvolvimento
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <category.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Methodologies */}
          <motion.div 
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Metodologias e Práticas
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-3xl mx-auto">
              {methodologies.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-muted/30 hover:bg-muted/50 rounded-xl p-4 text-center transition-all duration-300 cursor-pointer">
                    <motion.div
                      className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <method.icon className="h-4 w-4 text-primary" />
                    </motion.div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {method.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
