"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Send,
  Sparkles,
  ExternalLink,
  Copy,
  Check
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

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    subtitle: "luishw08@gmail.com",
    description: "Para projetos e oportunidades",
    action: "Enviar email",
    link: "mailto:luishw08@gmail.com",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "(51) 99560-8647",
    description: "Resposta mais rápida",
    action: "Enviar mensagem",
    link: "https://wa.me/5551995608647",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    textColor: "text-green-500"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    subtitle: "in/luishw",
    description: "Networking profissional",
    action: "Conectar",
    link: "https://www.linkedin.com/in/luishw/",
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-600/10",
    textColor: "text-blue-600"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    username: "@luishw12",
    link: "https://github.com/luishw12",
    color: "hover:bg-gray-800 hover:text-white"
  },
  {
    icon: Instagram,
    label: "Instagram",
    username: "@luis.wendt",
    link: "https://www.instagram.com/luis.wendt/",
    color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white"
  }
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-muted-foreground" />
      )}
    </motion.button>
  );
}

export default function Contact() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <MessageCircle className="w-3 h-3 mr-2" />
              Vamos conversar
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Entre em{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Contato
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Escolha a forma que preferir para entrar em contato!
            </p>
            
            {/* Availability Status */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-medium text-green-600">Disponível para novos projetos</span>
              <Sparkles className="w-4 h-4 text-green-500" />
            </motion.div>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-[1px] bg-card rounded-lg" />

                  <CardContent className="relative p-5 md:p-6">
                    <div className="flex flex-col items-center text-center h-full">
                      {/* Icon */}
                      <motion.div
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-3 md:mb-4 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <method.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                      </motion.div>

                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                        {method.title}
                      </h3>

                      <div className="flex items-center gap-2 mb-2">
                        <p className={`text-xs md:text-sm font-medium ${method.textColor} truncate max-w-[150px] md:max-w-none`}>
                          {method.subtitle}
                        </p>
                        <CopyButton text={method.subtitle} />
                      </div>

                      <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 flex-grow">
                        {method.description}
                      </p>

                      <motion.a
                        href={method.link}
                        target={method.link.startsWith('http') ? '_blank' : undefined}
                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`w-full inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r ${method.color} text-white rounded-lg md:rounded-xl font-medium text-sm md:text-base transition-all hover:shadow-lg`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {method.action}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg" 
                className="group px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg"
                asChild
              >
                <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  Baixar Currículo
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg" 
                variant="outline"
                className="group px-8 border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="mailto:luishw08@gmail.com">
                  <Send className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Enviar Email Direto
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
            <p className="text-sm text-muted-foreground mb-6">
              Ou me encontre nas redes sociais
            </p>
            
            <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 bg-muted/30 border border-border rounded-xl transition-all duration-300 ${social.color}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                  <div className="text-left">
                    <span className="text-xs md:text-sm font-medium block">{social.label}</span>
                    <span className="text-[10px] md:text-xs text-muted-foreground hidden sm:block">{social.username}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4 opacity-50 hidden sm:block" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            className="mt-16 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-2xl shadow-lg">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Lajeado, RS - Brasil</p>
                <p className="text-sm text-muted-foreground">Disponível para trabalho remoto mundial 🌍</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
