"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              LHW
            </Link>
          </motion.div>
          <nav className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://www.linkedin.com/in/luishw/" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com/luishw12" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="sm" asChild>
                <Link href="/curriculo.pdf" target="_blank">
                  <FileText className="h-4 w-4 mr-2" />
                  Currículo
                </Link>
              </Button>
            </motion.div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}