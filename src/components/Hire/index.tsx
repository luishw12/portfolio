import Link from "next/link";
import {
  coreSkills,
  featuredProjects,
  languages,
  profile,
  workExperience,
} from "@/lib/seo";
import { getYearsOfExperience } from "@/lib/utils";
import { HireContactNav, HireTrackedLink } from "./HireTrackedLinks";

const idealRoles = [
  {
    title: "Produtos SaaS",
    description:
      "Plataformas B2B/B2C com arquitetura escalável, do backend ao deploy.",
    tags: ["Next.js", ".NET", "PostgreSQL", "AWS"],
  },
  {
    title: "Modernização de legado",
    description:
      "Migração de sistemas Delphi/PHP para stacks modernas com entrega incremental.",
    tags: ["Java", "Spring Boot", "React", "Docker"],
  },
  {
    title: "Times de produto",
    description:
      "Squads que valorizam ownership, qualidade de código e entrega contínua.",
    tags: ["Agile", "CI/CD", "Clean Architecture"],
  },
  {
    title: "Times que adotam IA",
    description:
      "Ambientes que incentivam produtividade com Cursor, Claude Code e engenharia de contexto.",
    tags: ["Cursor", "Claude Code", "AI-Assisted Dev"],
  },
];

const hireFaq = [
  {
    question: "Qual o modelo de contratação aceito?",
    answer:
      "CLT, PJ e projetos pontuais. Aberto a conversar sobre o formato que fizer mais sentido para a empresa e o escopo.",
  },
  {
    question: "Trabalha remoto para empresas de qualquer lugar do Brasil?",
    answer:
      "Sim. Já atuo remotamente na Refatorize e tenho experiência com times distribuídos. Híbrido na região de Lajeado/RS também é viável.",
  },
  {
    question: "Qual o tempo de experiência com a stack principal?",
    answer:
      "React e TypeScript há 4 anos, Next.js e Java/Spring há 3 anos, .NET e AWS há 2 anos. Detalhes na seção de stack abaixo.",
  },
  {
    question: "Tem experiência com sistemas em produção e escala?",
    answer:
      "Sim. Atuei em plataformas usadas por milhares de usuários na Q2F e Tricon, com investigação de incidentes em produção, logs AWS e otimização de banco.",
  },
  {
    question: "Como é o processo para iniciar uma conversa?",
    answer:
      "Envie uma mensagem por LinkedIn, email ou WhatsApp com contexto da vaga/projeto. Respondo com disponibilidade e alinho expectativas antes de uma call.",
  },
];

const hireSteps = [
  {
    step: "01",
    title: "Primeiro contato",
    description: "Me conte sobre a vaga, o time e o desafio técnico.",
  },
  {
    step: "02",
    title: "Alinhamento",
    description: "Conversamos sobre stack, senioridade, prazo e modelo de contratação.",
  },
  {
    step: "03",
    title: "Aprofundamento",
    description: "Apresento cases relevantes e discutimos como posso agregar ao time.",
  },
  {
    step: "04",
    title: "Decisão",
    description: "Retorno rápido para seguir com proposta ou próximos passos do processo.",
  },
];

export default function Hire() {
  const careerYears = getYearsOfExperience();
  const sortedSkills = [...coreSkills].sort((a, b) => b.years - a.years);

  const quickFacts = [
    {
      label: "Senioridade",
      value: "Pleno II",
      detail: `${careerYears}+ anos desde ${profile.careerStartYear}`,
    },
    {
      label: "Modalidade",
      value: "Remoto",
      detail: "Híbrido também aceito",
    },
    {
      label: "Localização",
      value: "Lajeado, RS",
      detail: "Brasil · UTC-3",
    },
    {
      label: "Contratação",
      value: "CLT ou PJ",
      detail: "Projetos pontuais",
    },
  ];

  return (
    <div className="pb-8">
      <header className="page-wrap pb-8 pt-12 md:pt-16">
        <Link href="/" className="link-text text-sm">
          ← Início
        </Link>
        <p className="mt-6 font-mono-meta text-[0.8125rem] text-mudo">
          Disponível · remoto ou híbrido · {careerYears}+ anos
        </p>
        <h1
          id="hire-hero"
          className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-tinta"
        >
          Contratar Luís Henrique Wendt — Desenvolvedor Full Stack Pleno
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-mudo md:text-[1.0625rem]">
          Full Stack Pleno (.NET, React, Next.js, Java, Spring Boot, PostgreSQL, AWS).
          Histórico em SaaS, ERP e produtos digitais de ponta a ponta — remoto no Brasil,
          CLT ou PJ.
        </p>
        <HireContactNav variant="header" />
        <div className="section-rule mt-8" aria-hidden />
      </header>

      <section aria-labelledby="hire-facts" className="section-rule">
        <div className="page-wrap py-10 md:py-12">
          <h2
            id="hire-facts"
            className="font-display text-2xl font-semibold text-tinta"
          >
            Resumo para recrutadores
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((fact) => (
              <li key={fact.label}>
                <p className="font-mono-meta text-[0.8125rem] uppercase tracking-widest text-mudo">
                  {fact.label}
                </p>
                <p className="mt-1 text-base font-medium text-tinta">{fact.value}</p>
                <p className="mt-1 text-sm text-mudo">{fact.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="hire-roles" className="section-rule">
        <div className="page-wrap py-10 md:py-12">
          <h2
            id="hire-roles"
            className="font-display text-2xl font-semibold text-tinta"
          >
            Onde agrego valor
          </h2>
          <ul className="mt-8 flex flex-col">
            {idealRoles.map((role) => (
              <li
                key={role.title}
                className="section-rule py-6 first:border-t-0 first:pt-0"
              >
                <h3 className="font-display text-xl font-semibold text-tinta">
                  {role.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mudo">
                  {role.description}
                </p>
                <p className="mt-2 font-mono-meta text-[0.8125rem] text-mudo">
                  {role.tags.join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="hire-stack" className="section-rule">
        <div className="page-wrap py-10 md:py-12">
          <h2
            id="hire-stack"
            className="font-display text-2xl font-semibold text-tinta"
          >
            Stack e match técnico
          </h2>
          <p className="mt-2 max-w-xl text-sm text-mudo">
            Tempo real de experiência — útil para cruzar com a vaga.
          </p>
          <ul className="mt-8 flex flex-col">
            {sortedSkills.map((skill) => (
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
          <p className="mt-6 font-mono-meta text-[0.8125rem] text-mudo">
            Idiomas:{" "}
            {languages.map((lang) => `${lang.name} (${lang.level})`).join(" · ")}
          </p>
        </div>
      </section>

      <section aria-labelledby="hire-experience" className="section-rule">
        <div className="page-wrap py-10 md:py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
            <h2
              id="hire-experience"
              className="font-display text-2xl font-semibold text-tinta"
            >
              Experiência relevante
            </h2>
            <HireTrackedLink
              href="/#experiencia"
              className="link-text shrink-0 text-sm"
              event={{ type: "nav", target: "experiencia" }}
            >
              Ver detalhes no portfólio →
            </HireTrackedLink>
          </div>
          <ul className="mt-8 flex flex-col">
            {workExperience.map((job) => (
              <li
                key={job.company}
                className="section-rule py-6 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-base font-medium text-tinta">
                      {job.company}
                      {!job.endDate && (
                        <span className="ml-2 font-mono-meta text-[0.8125rem] font-normal text-cobre">
                          atual
                        </span>
                      )}
                      <span className="text-mudo"> — {job.role}</span>
                    </p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mudo">
                      {job.description}
                    </p>
                    <p className="mt-2 font-mono-meta text-[0.8125rem] text-mudo">
                      {job.technologies.join(" · ")}
                    </p>
                  </div>
                  <p className="shrink-0 font-mono-meta text-[0.8125rem] text-mudo sm:text-right">
                    {job.location}
                    <span className="block">{job.employmentType}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="hire-projects" className="section-rule">
        <div className="page-wrap py-10 md:py-12">
          <h2
            id="hire-projects"
            className="font-display text-2xl font-semibold text-tinta"
          >
            Prova de entrega
          </h2>
          <p className="mt-2 text-sm text-mudo">
            Produtos reais em produção, não só código de estudo.
          </p>
          <ul className="mt-8 flex flex-col">
            {featuredProjects.map((project) => (
              <li
                key={project.name}
                className="section-rule py-6 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-tinta">
                      {project.name}
                    </h3>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-mudo">
                      {project.description}
                    </p>
                    <p className="mt-2 font-mono-meta text-[0.8125rem] text-mudo">
                      {project.technologies.join(" · ")}
                    </p>
                  </div>
                  <HireTrackedLink
                    href={project.url}
                    className="link-cobre shrink-0 text-sm font-medium"
                    event={{ type: "project", name: project.name }}
                    external
                  >
                    Ver
                  </HireTrackedLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="hire-process" className="section-rule">
        <div className="page-wrap py-10 md:py-12">
          <h2
            id="hire-process"
            className="font-display text-2xl font-semibold text-tinta"
          >
            Como contratar
          </h2>
          <ol className="mt-8 flex flex-col">
            {hireSteps.map((item) => (
              <li
                key={item.step}
                className="section-rule py-6 first:border-t-0 first:pt-0"
              >
                <p className="font-mono-meta text-[0.8125rem] text-mudo">{item.step}</p>
                <h3 className="mt-1 text-base font-medium text-tinta">{item.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-mudo">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="hire-faq" className="section-rule">
        <div className="page-wrap py-10 md:py-12">
          <h2
            id="hire-faq"
            className="font-display text-2xl font-semibold text-tinta"
          >
            Perguntas frequentes
          </h2>
          <dl className="mt-8 flex flex-col">
            {hireFaq.map((item) => (
              <div
                key={item.question}
                className="section-rule py-6 first:border-t-0 first:pt-0"
              >
                <dt className="text-base font-medium text-tinta">{item.question}</dt>
                <dd className="mt-2 max-w-2xl text-sm leading-relaxed text-mudo">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="hire-cta" className="section-rule">
        <div className="page-wrap py-10 md:py-14">
          <h2
            id="hire-cta"
            className="font-display text-2xl font-semibold text-tinta"
          >
            Vamos conversar?
          </h2>
          <p className="mt-3 max-w-xl text-base text-mudo">
            Respondo em até 24h. Envie contexto da vaga, stack do time e modelo de
            contratação.
          </p>
          <HireContactNav variant="cta" />
        </div>
      </section>
    </div>
  );
}
