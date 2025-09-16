"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Instagram,
  MessageCircle,
  Download,
  ArrowRight,
  Send
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

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    subtitle: "luishw08@gmail.com",
    description: "Para projetos e oportunidades",
    action: "Enviar email",
    link: "mailto:luishw08@gmail.com",
    color: "from-blue-500/10 to-blue-600/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Phone,
    title: "WhatsApp",
    subtitle: "(51) 99560-8647",
    description: "Conversas e reuniões",
    action: "Enviar mensagem",
    link: "https://wa.me/5551995608647",
    color: "from-green-500/10 to-green-600/10",
    iconColor: "text-green-600"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    subtitle: "luishw",
    description: "Networking profissional",
    action: "Conectar",
    link: "https://www.linkedin.com/in/luishw/",
    color: "from-blue-700/10 to-blue-800/10",
    iconColor: "text-blue-700"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    link: "https://github.com/luishw12",
    followers: "15+ repos"
  },
  {
    icon: Instagram,
    label: "Instagram",
    link: "https://www.instagram.com/luis.wendt/",
    followers: "Pessoal"
  }
];

export default function Contact() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-6 relative">
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
              Vamos Conversar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Escolha a forma que preferir para entrar em contato.
            </p>
            
            {/* Status */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-600">Disponível para projetos</span>
            </motion.div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer bg-gradient-to-br from-background to-background/50">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <method.icon className={`h-8 w-8 ${method.iconColor}`} />
                    </motion.div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {method.subtitle}
                    </p>
                    <p className="text-xs text-muted-foreground mb-6">
                      {method.description}
                    </p>
                    
                    <motion.a
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {method.action}
                      <ArrowRight className="h-4 w-4" />
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="group px-8"
                asChild
              >
                <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  Baixar Currículo
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="group px-8"
                asChild
              >
                <a href="mailto:luishw08@gmail.com">
                  <Send className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Enviar Email
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm text-muted-foreground mb-4">
              Ou me encontre nas redes sociais
            </p>
            
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-muted rounded-lg transition-colors"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{social.label}</span>
                  <span className="text-xs text-muted-foreground/70">• {social.followers}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            className="mt-12 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-full">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Montanha, Lajeado, RS • Aberto para trabalho remoto
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
