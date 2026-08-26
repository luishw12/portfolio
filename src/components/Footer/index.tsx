"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { trackNavigation, trackScrollToTop } from "@/lib/analytics";

const quickLinks = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Experiência", href: "/#experiencia" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Stack", href: "/#habilidades" },
  { label: "Contratar", href: "/hire" },
  { label: "Contato", href: "/#contato" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[hsl(var(--paper-deep))]/50">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="font-display text-lg font-medium text-foreground">
              Luís Henrique Wendt
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              Desenvolvedor Full Stack Pleno — aplicações web, sistemas corporativos e produtos
              SaaS com .NET, React, Next.js e AWS. Lajeado/RS.
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <p className="section-label mb-3">Navegação</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    onClick={() =>
                      trackNavigation(
                        link.href.replace("/#", "").replace("/", "") || "home",
                        "footer"
                      )
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Luís Henrique Wendt ·{" "}
            <Link
              href="/privacidade"
              className="hover:text-primary"
              onClick={() => trackNavigation("privacidade", "footer")}
            >
              Privacidade
            </Link>
          </p>

          <button
            type="button"
            onClick={() => {
              trackScrollToTop("footer");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="section-label inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowUp className="size-3.5" aria-hidden />
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
}
