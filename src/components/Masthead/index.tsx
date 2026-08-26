import Link from "next/link";
import { CONTACT } from "@/lib/content";
import { getYearsOfExperience } from "@/lib/utils";

export default function Masthead() {
  const years = getYearsOfExperience();

  return (
    <header className="page-wrap pb-8 pt-12 md:pt-16">
      <div className="flex items-start justify-between gap-6">
        <h1
          id="hero-title"
          className="font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.05] tracking-tight text-tinta"
        >
          Luís Henrique Wendt — Desenvolvedor Full Stack Pleno
        </h1>
        <Link
          href="/curriculo.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link-text shrink-0 pt-2 text-sm font-medium"
        >
          CV
        </Link>
      </div>
      <p className="mt-3 text-base text-mudo md:text-[1.0625rem]">
        Desenvolvedor Full Stack · {CONTACT.location}
      </p>
      <p className="mt-2 font-mono-meta text-[0.8125rem] text-mudo">
        Desde 2022 · {years}+ anos · remoto ou híbrido · disponível
      </p>
      <div className="section-rule mt-8" aria-hidden />
    </header>
  );
}
