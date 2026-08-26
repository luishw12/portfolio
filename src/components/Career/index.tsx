import Link from "next/link";
import { experiences } from "@/lib/content";

export default function Career() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-titulo" className="section-rule">
      <div className="page-wrap py-10 md:py-12">
        <h2
          id="experiencia-titulo"
          className="font-display text-2xl font-semibold text-tinta"
        >
          Experiência
        </h2>

        <ul className="mt-8 flex flex-col">
          {experiences.map((exp) => (
            <li key={exp.company} className="section-rule py-6 first:border-t-0 first:pt-0">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="text-base font-medium text-tinta">
                    <Link
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {exp.company}
                    </Link>
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {exp.roles.map((role) => (
                      <li key={`${role.title}-${role.period}`}>
                        <p className="text-sm text-tinta">
                          <span className="font-medium">{role.title}</span>
                          <span className="font-mono-meta text-[0.8125rem] text-mudo">
                            {" "}
                            · {role.period}
                          </span>
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mudo">
                    {exp.description}
                  </p>
                  <p className="mt-2 font-mono-meta text-[0.8125rem] text-mudo">
                    {exp.technologies.join(" · ")}
                  </p>
                </div>
                <p className="shrink-0 font-mono-meta text-[0.8125rem] text-mudo sm:text-right">
                  {exp.period}
                  <span className="block">{exp.location}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
