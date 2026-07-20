"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Instagram, Heart, ArrowUp, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Dock, DockIcon } from "@/components/ui/dock";
import { BlurFade } from "@/components/ui/blur-fade";

const quickLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <BlurFade delay={0.1} inView className="flex flex-col gap-4">
            <Link href="/" className="inline-block w-fit">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                LHW
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Desenvolvedor Full Stack — aplicações web, sistemas corporativos e produtos SaaS com
              .NET, React, Next.js e AWS.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Code2 className="size-4" />
              <span>Movido a código e curiosidade</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView className="flex flex-col gap-4">
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
          </BlurFade>

          <BlurFade delay={0.3} inView className="flex flex-col gap-4 items-start">
            <h4 className="font-semibold text-foreground">Redes Sociais</h4>
            <Dock direction="middle" className="mt-1 self-start">
              <DockIcon>
                <Link
                  href="https://www.linkedin.com/in/luishw/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="flex size-full items-center justify-center"
                >
                  <Linkedin className="size-4" />
                </Link>
              </DockIcon>
              <DockIcon>
                <Link
                  href="https://github.com/luishw12"
                  target="_blank"
                  aria-label="GitHub"
                  className="flex size-full items-center justify-center"
                >
                  <Github className="size-4" />
                </Link>
              </DockIcon>
              <DockIcon>
                <Link
                  href="https://www.instagram.com/luis.wendt/"
                  target="_blank"
                  aria-label="Instagram"
                  className="flex size-full items-center justify-center"
                >
                  <Instagram className="size-4" />
                </Link>
              </DockIcon>
              <DockIcon>
                <a
                  href="mailto:luishw08@gmail.com"
                  aria-label="Email"
                  className="flex size-full items-center justify-center"
                >
                  <Mail className="size-4" />
                </a>
              </DockIcon>
            </Dock>
            <p className="text-sm text-muted-foreground">
              Vamos nos conectar e criar algo incrível juntos!
            </p>
          </BlurFade>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {currentYear} Luís Henrique Wendt. Feito com
            <Heart className="size-4 text-red-500 fill-red-500 animate-pulse" />
            no Brasil
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground bg-muted/30 hover:bg-muted/50 rounded-full transition-all"
            type="button"
          >
            <ArrowUp className="size-4" />
            Voltar ao topo
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
