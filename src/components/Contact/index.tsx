"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { CONTACT } from "@/lib/content";
import {
  trackContactClick,
  trackContactCopy,
  trackResumeDownload,
  trackSocialClick,
} from "@/lib/analytics";

const channels = [
  {
    label: "Email",
    value: CONTACT.email,
    copyValue: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
    hint: "Propostas e oportunidades",
    analyticsKey: "email" as const,
  },
  {
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    copyValue: "5551995608647",
    href: CONTACT.whatsappLink,
    icon: MessageCircle,
    hint: "Resposta mais rápida",
    analyticsKey: "whatsapp" as const,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/luishw",
    copyValue: CONTACT.linkedin,
    href: CONTACT.linkedin,
    icon: Linkedin,
    hint: "Networking",
    analyticsKey: "linkedin" as const,
  },
];

function CopyButton({
  text,
  channel,
}: {
  text: string;
  channel: "email" | "whatsapp" | "linkedin";
}) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async (e) => {
        e.preventDefault();
        e.stopPropagation();
        await navigator.clipboard.writeText(text);
        trackContactCopy(channel, "contact_section");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="p-2 text-muted-foreground transition-colors hover:text-foreground"
      aria-label={copied ? "Copiado" : "Copiar"}
    >
      {copied ? (
        <Check className="size-4 text-primary" aria-hidden />
      ) : (
        <Copy className="size-4" aria-hidden />
      )}
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-titulo">
      <div className="container mx-auto px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
          <header>
            <p className="section-label mb-3">Contato</p>
            <h2
              id="contato-titulo"
              className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-tight tracking-tight"
            >
              Vamos conversar sobre a próxima oportunidade
            </h2>
            <p className="mt-4 text-muted-foreground">
              Prefiro conversa direta. WhatsApp costuma ser o caminho mais rápido — email e
              LinkedIn também funcionam bem.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[hsl(14,63%,38%)]"
                onClick={() => trackContactClick("whatsapp", "contact_section")}
              >
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp
              </a>
              <a
                href="/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary"
                onClick={() => trackResumeDownload("contact_section")}
              >
                <Download className="size-4" aria-hidden />
                Currículo PDF
              </a>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0" aria-hidden />
              {CONTACT.location} · remoto ou híbrido ·{" "}
              <span className="font-medium text-primary">disponível</span>
            </p>
          </header>

          <div>
            <ul className="border border-border bg-card">
              {channels.map((channel) => (
                <li key={channel.label} className="border-b border-border last:border-b-0">
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="group flex items-center gap-4 p-4 transition-colors hover:bg-[hsl(var(--paper-deep))]/50"
                    onClick={() =>
                      trackContactClick(channel.analyticsKey, "contact_section")
                    }
                  >
                    <channel.icon className="size-5 shrink-0 text-foreground" aria-hidden />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{channel.label}</span>
                        <span className="hidden text-xs text-muted-foreground sm:inline">
                          {channel.hint}
                        </span>
                      </div>
                      <p className="truncate text-sm text-muted-foreground">{channel.value}</p>
                    </div>
                    <CopyButton text={channel.copyValue} channel={channel.analyticsKey} />
                    <ArrowUpRight
                      className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>

            <nav
              className="mt-6 flex gap-5"
              aria-label="Redes sociais"
            >
              {[
                { href: CONTACT.github, label: "GitHub", icon: Github, platform: "github" as const },
                { href: CONTACT.linkedin, label: "LinkedIn", icon: Linkedin, platform: "linkedin" as const },
                { href: CONTACT.instagram, label: "Instagram", icon: Instagram, platform: "instagram" as const },
                { href: `mailto:${CONTACT.email}`, label: "Email", icon: Mail, platform: "email" as const },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => trackSocialClick(social.platform, "contact_section")}
                >
                  <social.icon className="size-5" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
