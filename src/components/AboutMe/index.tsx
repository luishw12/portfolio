import Link from "next/link";
import { CAREER_SINCE, PHILOSOPHY } from "@/lib/content";
import { getYearsOfExperience } from "@/lib/utils";

export default function AboutMe() {
  const years = getYearsOfExperience();

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="section-rule">
      <div className="page-wrap py-10 md:py-12">
        <h2
          id="sobre-titulo"
          className="font-display text-2xl font-semibold text-tinta"
        >
          Sobre
        </h2>

        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-mudo">
          <p>
            Sou desenvolvedor Full Stack desde {CAREER_SINCE} — {years} anos construindo
            aplicações web, sistemas corporativos e produtos SaaS. Hoje sou Pleno II na{" "}
            <span className="text-tinta">Q2F Sistemas de Gestão</span> e fundador da{" "}
            <Link
              href="https://refatorize.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tinta underline decoration-linha underline-offset-2 hover:decoration-cobre"
            >
              Refatorize
            </Link>
            .
          </p>
          <p>
            Trabalho com .NET, Java Spring Boot, React, Next.js, TypeScript e PostgreSQL —
            do desenho da solução ao deploy em AWS. Uso Cursor, Claude Code e Codex no dia a
            dia para acelerar entregas sem abrir mão de arquitetura.
          </p>
          <p className="font-display text-lg italic text-tinta">{PHILOSOPHY}</p>
        </div>
      </div>
    </section>
  );
}
