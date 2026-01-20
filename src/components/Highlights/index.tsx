"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Rocket, Target, Zap } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Inovação Constante",
    description: "Sempre buscando as melhores tecnologias e práticas para entregar soluções de ponta.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Comprometido com a entrega de valor real, superando expectativas a cada projeto.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Performance Máxima",
    description: "Código otimizado e eficiente, garantindo a melhor experiência para os usuários.",
    color: "from-amber-500 to-orange-500",
  },
];

export default function Highlights() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Quote section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Quote className="w-12 h-12 mx-auto mb-6 text-primary/30" />
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed max-w-4xl mx-auto">
              &ldquo;O código é poesia que{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                transforma ideias em realidade
              </span>
              . Cada linha escrita é uma oportunidade de criar algo extraordinário.&rdquo;
            </blockquote>
            <p className="mt-6 text-muted-foreground">— Minha filosofia de desenvolvimento</p>
          </motion.div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="relative p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Gradient border effect on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-[1px] rounded-3xl bg-card" />

                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <highlight.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {highlight.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
