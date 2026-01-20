"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram, Heart, ArrowUp, Coffee } from "lucide-react";
import { motion } from "framer-motion";

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

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/luishw/", label: "LinkedIn", color: "hover:text-blue-500" },
  { icon: Github, href: "https://github.com/luishw12", label: "GitHub", color: "hover:text-gray-400" },
  { icon: Instagram, href: "https://www.instagram.com/luis.wendt/", label: "Instagram", color: "hover:text-pink-500" },
  { icon: Mail, href: "mailto:luishw08@gmail.com", label: "Email", color: "hover:text-cyan-500" }
];

const quickLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="relative border-t border-border bg-card/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <motion.div
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand & Description */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                LHW
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Desenvolvedor Full Stack apaixonado por criar soluções digitais
              inovadoras e experiências memoráveis.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Coffee className="w-4 h-4" />
              <span>Movido a café e código</span>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="font-semibold text-foreground">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="font-semibold text-foreground">Redes Sociais</h4>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-full border border-border ${social.color}`}
                    asChild
                  >
                    <Link
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                      rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Vamos nos conectar e criar algo incrível juntos!
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {currentYear} Luís Henrique Wendt. Feito com
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            no Brasil
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground bg-muted/30 hover:bg-muted/50 rounded-full transition-all"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-4 h-4" />
            Voltar ao topo
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
}