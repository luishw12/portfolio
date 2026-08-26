import { coreSkills } from "@/lib/content";

export default function Skills() {
  const sorted = [...coreSkills].sort((a, b) => b.years - a.years);

  return (
    <section id="habilidades" aria-labelledby="habilidades-titulo" className="section-rule">
      <div className="page-wrap py-10 md:py-12">
        <h2
          id="habilidades-titulo"
          className="font-display text-2xl font-semibold text-tinta"
        >
          Stack
        </h2>
        <p className="mt-2 max-w-xl text-sm text-mudo">
          Tempo de convivência com cada tecnologia — sem porcentagens inventadas.
        </p>

        <ul className="mt-8 flex flex-col">
          {sorted.map((skill) => (
            <li
              key={skill.name}
              className="section-rule flex items-baseline justify-between gap-4 py-3 first:border-t-0"
            >
              <span className="text-sm text-tinta">{skill.name}</span>
              <span className="shrink-0 font-mono-meta text-[0.8125rem] text-mudo">
                {skill.years} {skill.years === 1 ? "ano" : "anos"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
