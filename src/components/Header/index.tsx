"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Menu, X, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  trackMobileMenu,
  trackNavigation,
  trackResumeDownload,
  trackSocialClick,
} from "@/lib/analytics";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#habilidades", label: "Stack" },
  { href: "/hire", label: "Contratar" },
  { href: "#contato", label: "Contato" },
];

function resolveNavHref(href: string, pathname: string) {
  if (href.startsWith("#") && pathname !== "/") {
    return `/${href}`;
  }
  return href;
}

function isHashNavLink(href: string) {
  return href.startsWith("#");
}

export default function Header() {
  const pathname = usePathname();
  const isHirePage = pathname === "/hire";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks
      .filter((link) => isHashNavLink(link.href))
      .map((link) => link.href.slice(1));
    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size === 0) {
          if (window.scrollY < 100) setActiveSection("");
          return;
        }

        let topSection = "";
        let topDistance = Infinity;

        visibleSections.forEach((_, id) => {
          const el = document.getElementById(id);
          if (!el) return;
          const distance = Math.abs(el.getBoundingClientRect().top - 88);
          if (distance < topDistance) {
            topDistance = distance;
            topSection = `#${id}`;
          }
        });

        if (topSection) setActiveSection(topSection);
      },
      {
        rootMargin: "-88px 0px -50% 0px",
        threshold: [0, 0.2, 0.5],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
    device: "desktop" | "mobile"
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(targetId);
    trackNavigation(
      targetId.replace("#", ""),
      device === "mobile" ? "header_mobile" : "header_desktop",
      device
    );

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = 72;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full border-b transition-colors duration-200",
          isScrolled
            ? "border-border bg-background/92 backdrop-blur-sm"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-[4.5rem] items-center justify-between gap-4 px-6">
          <Link
            href="/"
            className="font-display text-lg font-medium tracking-tight text-foreground"
            onClick={() => trackNavigation("home", "header_desktop")}
          >
            Luís Henrique Wendt
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => {
              const isActive = !isHirePage && activeSection === link.href;
              const href = resolveNavHref(link.href, pathname);

              return (
                <a
                  key={link.href}
                  href={href}
                  onClick={(e) => {
                    if (isHashNavLink(link.href) && !isHirePage) {
                      handleSmoothScroll(e, link.href, "desktop");
                    } else if (link.href === "/hire") {
                      trackNavigation("hire", "header_desktop");
                    }
                  }}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "section-label px-3 py-2 transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://www.linkedin.com/in/luishw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Luís Henrique Wendt"
              className="p-2 text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => trackSocialClick("linkedin", "header_desktop")}
            >
              <Linkedin className="size-[1.125rem]" aria-hidden />
            </a>
            <a
              href="https://github.com/luishw12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Luís Henrique Wendt"
              className="p-2 text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => trackSocialClick("github", "header_desktop")}
            >
              <Github className="size-[1.125rem]" aria-hidden />
            </a>
            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
              onClick={() => trackResumeDownload("header_desktop")}
            >
              <Download className="size-3.5" aria-hidden />
              CV
            </a>
          </div>

          <button
            type="button"
            className="p-2 text-foreground md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => {
              const nextOpen = !mobileMenuOpen;
              setMobileMenuOpen(nextOpen);
              trackMobileMenu(nextOpen ? "open" : "close");
            }}
          >
            {mobileMenuOpen ? (
              <X className="size-6" aria-hidden />
            ) : (
              <Menu className="size-6" aria-hidden />
            )}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 bg-background/98 pt-[4.5rem] md:hidden"
        >
          <nav
            className="container mx-auto flex flex-col gap-1 px-6 py-8"
            aria-label="Navegação mobile"
          >
            {navLinks.map((link) => {
              const isActive = !isHirePage && activeSection === link.href;
              const href = resolveNavHref(link.href, pathname);

              return (
                <a
                  key={link.href}
                  href={href}
                  onClick={(e) => {
                    if (isHashNavLink(link.href) && !isHirePage) {
                      handleSmoothScroll(e, link.href, "mobile");
                    } else {
                      setMobileMenuOpen(false);
                      if (link.href === "/hire") {
                        trackNavigation("hire", "header_mobile", "mobile");
                      }
                    }
                  }}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "border-b border-border py-4 font-display text-2xl font-medium",
                    isActive ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                onClick={() => trackResumeDownload("header_mobile")}
              >
                <Download className="size-4" aria-hidden />
                Baixar currículo
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
