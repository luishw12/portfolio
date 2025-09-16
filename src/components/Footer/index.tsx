"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
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
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/luishw/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/luishw12", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/luis.wendt/", label: "Instagram" },
    { icon: Mail, href: "mailto:luishw08@gmail.com", label: "Email" }
  ];

  return (
    <motion.footer 
      className="border-t border-border bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          className="flex flex-col items-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center space-y-4" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-foreground">Luís Henrique Wendt</h3>
            <p className="text-muted-foreground max-w-md">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes
            </p>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-4"
            variants={containerVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="sm" asChild>
                  <Link 
                    href={social.href} 
                    target={social.href.startsWith('mailto:') ? undefined : "_blank"} 
                    rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center text-sm text-muted-foreground pt-8 border-t border-border w-full"
            variants={itemVariants}
          >
            <p>&copy; 2025 Luís Henrique Wendt. Todos os direitos reservados.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}