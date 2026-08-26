import Link from "next/link";
import { CONTACT } from "@/lib/contact";
import { getYearsOfExperience } from "@/lib/utils";

export default function Masthead() {
  const years = getYearsOfExperience();

  return (
    <header className="page-wrap relative pb-8 pt-12 md:pt-16">
      <Link
        href={CONTACT.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="link-text absolute right-[clamp(1.25rem,4vw,3rem)] top-12 hidden text-sm font-medium sm:inline-block md:top-16"
      >
        CV
      </Link>

      <h1
        id="hero-title"
        className="w-full max-w-none font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.05] tracking-tight text-tinta"
      >
        Luís Henrique Wendt — Desenvolvedor Full Stack Pleno
      </h1>

      <p className="mt-3 text-base text-mudo md:text-[1.0625rem]">
        Desenvolvedor Full Stack · {CONTACT.location}
      </p>

      <Link
        href={CONTACT.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="link-text mt-3 inline-block text-sm font-medium sm:hidden"
      >
        CV
      </Link>

      <p className="mt-2 font-mono-meta text-[0.8125rem] text-mudo">
        Desde 2022 · {years}+ anos · remoto ou híbrido · disponível
      </p>

      <div className="section-rule mt-8" aria-hidden />
    </header>
  );
}
