"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { CONTACT, HIRE_MAILTO } from "@/lib/contact";
import {
  trackContactClick,
  trackNavigation,
  trackProjectClick,
  trackRecruiterCta,
  trackResumeDownload,
  trackSocialClick,
} from "@/lib/analytics";

type HireTrackEvent =
  | { type: "recruiter-email" }
  | { type: "linkedin" }
  | { type: "whatsapp" }
  | { type: "resume" }
  | { type: "nav"; target: "experiencia" | "home" }
  | { type: "project"; name: string };

function trackHireEvent(event: HireTrackEvent) {
  switch (event.type) {
    case "recruiter-email":
      trackRecruiterCta("email_proposal", "hire_page");
      break;
    case "linkedin":
      trackSocialClick("linkedin", "hire_page");
      break;
    case "whatsapp":
      trackContactClick("whatsapp", "hire_page");
      break;
    case "resume":
      trackResumeDownload("hire_page");
      break;
    case "nav":
      trackNavigation(event.target, "hire_page");
      break;
    case "project":
      trackProjectClick("visit_site", event.name, "hire_page");
      break;
  }
}

export function HireTrackedLink({
  href,
  className,
  children,
  event,
  external = false,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  event: HireTrackEvent;
  external?: boolean;
}) {
  const onClick = () => trackHireEvent(event);
  const isExternal =
    external || href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function HireContactNav({ variant }: { variant: "header" | "cta" }) {
  if (variant === "header") {
    return (
      <nav
        aria-label="Contato para recrutadores"
        className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2"
      >
        <HireTrackedLink
          href={HIRE_MAILTO}
          className="link-cobre text-base font-medium"
          event={{ type: "recruiter-email" }}
        >
          {CONTACT.email}
        </HireTrackedLink>
        <HireTrackedLink
          href={CONTACT.linkedin}
          className="link-text text-base"
          event={{ type: "linkedin" }}
          external
        >
          LinkedIn
        </HireTrackedLink>
        <HireTrackedLink
          href={CONTACT.whatsappLink}
          className="link-text text-base"
          event={{ type: "whatsapp" }}
          external
        >
          WhatsApp
        </HireTrackedLink>
        <HireTrackedLink
          href={CONTACT.resumeUrl}
          className="link-text text-base"
          event={{ type: "resume" }}
          external
        >
          Currículo PDF
        </HireTrackedLink>
      </nav>
    );
  }

  return (
    <nav
      aria-label="Contato final"
      className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2"
    >
      <HireTrackedLink
        href={HIRE_MAILTO}
        className="link-cobre text-base font-medium"
        event={{ type: "recruiter-email" }}
      >
        {CONTACT.email}
      </HireTrackedLink>
      <HireTrackedLink
        href={CONTACT.whatsappLink}
        className="link-text text-base"
        event={{ type: "whatsapp" }}
        external
      >
        WhatsApp
      </HireTrackedLink>
      <HireTrackedLink
        href="/"
        className="link-text text-base"
        event={{ type: "nav", target: "home" }}
      >
        Portfólio completo
      </HireTrackedLink>
    </nav>
  );
}
