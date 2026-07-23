"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  MessageCircle,
  Download,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import { BrandTextReveal } from "@/components/ui/brand-text-reveal";
import { BlurFade } from "@/components/ui/blur-fade";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { BorderBeam } from "@/components/ui/border-beam";

const EMAIL = "luishw08@gmail.com";
const WHATSAPP_DISPLAY = "+55 51 99560-8647";
const WHATSAPP_LINK = "https://wa.me/5551995608647";
const LINKEDIN = "https://www.linkedin.com/in/luishw/";
const GITHUB = "https://github.com/luishw12";
const INSTAGRAM = "https://www.instagram.com/luis.wendt/";

const channels = [
  {
    label: "Email",
    value: EMAIL,
    copyValue: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
    hint: "Propostas e oportunidades",
  },
  {
    label: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    copyValue: "5551995608647",
    href: WHATSAPP_LINK,
    icon: MessageCircle,
    hint: "Resposta mais rápida",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/luishw",
    copyValue: LINKEDIN,
    href: LINKEDIN,
    icon: Linkedin,
    hint: "Networking",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
      type="button"
      aria-label="Copiar"
    >
      {copied ? (
        <Check className="size-3.5 text-emerald-500" />
      ) : (
        <Copy className="size-3.5" />
      )}
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/15 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
            {/* Coluna editorial */}
            <BlurFade delay={0.1} inView className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                  Contato
                </p>
                <h2 id="contato-titulo" className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                  Tem um projeto em mente?{" "}
                  <BrandTextReveal text="Fala comigo." />
                </h2>
                <p className="text-muted-foreground text-base lg:text-lg max-w-md leading-relaxed">
                  Prefiro conversa direta. WhatsApp costuma ser o caminho mais
                  rápido — email e LinkedIn também funcionam bem.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <InteractiveHoverButton
                  onClick={() =>
                    window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer")
                  }
                >
                  Falar no WhatsApp
                </InteractiveHoverButton>

                <a
                  href="/curriculo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
                >
                  <Download className="size-4" />
                  Currículo
                </a>
              </div>

              <div className="flex flex-col border-y border-border/70">
                {channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 py-4 hover:bg-muted/30 -mx-2 px-2 rounded-lg transition-colors"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted/50 text-foreground">
                      <channel.icon className="size-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-foreground">
                          {channel.label}
                        </span>
                        <span className="text-xs text-muted-foreground hidden sm:inline">
                          {channel.hint}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {channel.value}
                      </p>
                    </div>
                    <CopyButton text={channel.copyValue} />
                    <ArrowUpRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-3.5" />
                  Lajeado, RS · remoto
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  Disponível para novos projetos
                </span>
              </div>

              <div className="flex items-center gap-4 pt-1">
                {[
                  { href: GITHUB, label: "GitHub", icon: Github },
                  { href: LINKEDIN, label: "LinkedIn", icon: Linkedin },
                  { href: INSTAGRAM, label: "Instagram", icon: Instagram },
                  { href: `mailto:${EMAIL}`, label: "Email", icon: Mail },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <social.icon className="size-5" />
                  </Link>
                ))}
              </div>
            </BlurFade>

            {/* Terminal — identidade de dev */}
            <BlurFade delay={0.2} inView className="relative lg:pt-4">
              <div className="relative overflow-hidden rounded-xl border border-border bg-background">
                <Terminal className="max-w-none w-full h-auto max-h-none border-0 rounded-xl">
                  <TypingAnimation className="text-muted-foreground">
                    {"> whoami"}
                  </TypingAnimation>

                  <AnimatedSpan className="text-foreground">
                    Luís Henrique Wendt — Full Stack
                  </AnimatedSpan>

                  <TypingAnimation className="text-muted-foreground">
                    {"> cat ./contact.md"}
                  </TypingAnimation>

                  <AnimatedSpan className="text-emerald-500">
                    email: {EMAIL}
                  </AnimatedSpan>
                  <AnimatedSpan className="text-emerald-500">
                    whatsapp: {WHATSAPP_DISPLAY}
                  </AnimatedSpan>
                  <AnimatedSpan className="text-emerald-500">
                    linkedin: /in/luishw
                  </AnimatedSpan>

                  <TypingAnimation className="text-muted-foreground">
                    {"> status --availability"}
                  </TypingAnimation>

                  <AnimatedSpan className="text-sky-400">
                    open_to_work: true
                  </AnimatedSpan>
                  <AnimatedSpan className="text-sky-400">
                    location: Lajeado/RS · remote worldwide
                  </AnimatedSpan>

                  <TypingAnimation className="text-muted-foreground">
                    {"> echo $NEXT_STEP"}
                  </TypingAnimation>

                  <AnimatedSpan className="text-amber-400">
                    &quot;Manda uma mensagem. Vamos conversar.&quot;
                  </AnimatedSpan>
                </Terminal>

                <BorderBeam
                  className="z-50"
                  size={120}
                  borderRadius={12}
                  duration={10}
                  colorFrom="#3b82f6"
                  colorTo="#06b6d4"
                  borderWidth={1.5}
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
