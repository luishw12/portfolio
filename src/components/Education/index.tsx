import { certifications, educationItems, languages } from "@/lib/content";

export default function Education() {
  return (
    <section id="formacao" aria-labelledby="formacao-titulo" className="section-rule">
      <div className="page-wrap py-10 md:py-12">
        <h2
          id="formacao-titulo"
          className="font-display text-2xl font-semibold text-tinta"
        >
          Formação
        </h2>

        <ul className="mt-8 flex flex-col">
          {educationItems.map((edu) => (
            <li key={edu.degree} className="section-rule py-6 first:border-t-0 first:pt-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="text-base font-medium text-tinta">{edu.degree}</p>
                  <p className="text-sm text-mudo">{edu.institution}</p>
                </div>
                <p className="font-mono-meta text-[0.8125rem] text-mudo">
                  {edu.period} · {edu.status}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="font-mono-meta text-[0.8125rem] uppercase tracking-widest text-mudo">
              Idiomas
            </h3>
            <ul className="mt-4 flex flex-col">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="section-rule flex justify-between py-2 text-sm first:border-t-0"
                >
                  <span className="text-tinta">{lang.name}</span>
                  <span className="font-mono-meta text-[0.8125rem] text-mudo">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono-meta text-[0.8125rem] uppercase tracking-widest text-mudo">
              Certificações
            </h3>
            <ul className="mt-4 flex flex-col">
              {certifications.map((cert) => (
                <li key={cert.name} className="section-rule py-2 text-sm text-tinta first:border-t-0">
                  {cert.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
