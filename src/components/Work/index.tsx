import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";

function formatStack(technologies: string[], max = 4) {
  return technologies.slice(0, max).join(" · ");
}

export default function Work() {
  const [featured, ...rest] = projects;

  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="page-wrap py-10 md:py-12">
      <h2
        id="projetos-titulo"
        className="font-display text-2xl font-semibold text-tinta"
      >
        Projetos
      </h2>

      <article className="mt-8 flex flex-col gap-5">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-elevado">
          <Image
            src={featured.images[0]}
            alt={`Captura de tela do ${featured.title}`}
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-semibold text-tinta">
              {featured.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-mudo">{featured.description}</p>
            <p className="mt-3 font-mono-meta text-[0.8125rem] text-mudo">
              {formatStack(featured.technologies)}
            </p>
          </div>
          {featured.link && (
            <Link
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-cobre shrink-0 text-sm font-medium"
            >
              Ver
            </Link>
          )}
        </div>
      </article>

      <ul className="mt-10 flex flex-col">
        {rest.map((project) => (
          <li key={project.title} className="section-rule py-6 first:border-t-0 first:pt-0">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-tinta">
                  {project.title}
                </h3>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-mudo">
                  {project.description}
                </p>
                <p className="mt-2 font-mono-meta text-[0.8125rem] text-mudo">
                  {formatStack(project.technologies, 5)}
                </p>
              </div>
              <div className="mt-2 flex shrink-0 gap-4 sm:mt-0">
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-cobre text-sm font-medium"
                  >
                    Ver
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-text text-sm font-medium"
                  >
                    Código
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
