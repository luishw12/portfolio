"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import {
  Shield,
  Cookie,
  BarChart3,
  Scale,
  Share2,
  Clock,
  UserCheck,
  Ban,
  Lock,
  RefreshCw,
  Mail,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { BrandTextReveal } from "@/components/ui/brand-text-reveal";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { Highlighter } from "@/components/ui/highlighter";
import { profile } from "@/lib/seo";

const LAST_UPDATED = "22 de julho de 2026";

const toc = [
  { id: "introducao", label: "Introdução" },
  { id: "controlador", label: "Quem é o responsável" },
  { id: "dados-coletados", label: "Dados coletados" },
  { id: "cookies-analytics", label: "Cookies e Analytics" },
  { id: "finalidade", label: "Finalidade e base legal" },
  { id: "terceiros", label: "Compartilhamento" },
  { id: "retencao", label: "Retenção" },
  { id: "direitos", label: "Seus direitos (LGPD)" },
  { id: "opt-out", label: "Como desativar" },
  { id: "seguranca", label: "Segurança" },
  { id: "alteracoes", label: "Alterações" },
  { id: "contato", label: "Contato" },
] as const;

const collectedData = [
  "Páginas visitadas, tempo de permanência e profundidade de rolagem",
  "Cliques em links, botões e seções do portfólio (navegação, contato, currículo, projetos)",
  "Tipo de dispositivo, navegador, sistema operacional e resolução de tela",
  "Localização aproximada (cidade/região, derivada do IP)",
  "Origem do tráfego (busca, rede social, link direto etc.)",
  "Identificadores de cookies do Google Analytics para distinguir visitantes e sessões",
] as const;

const userRights = [
  "Confirmar a existência de tratamento dos seus dados",
  "Acessar os dados que tratamos sobre você",
  "Corrigir dados incompletos, inexatos ou desatualizados",
  "Solicitar anonimização, bloqueio ou eliminação de dados desnecessários",
  "Solicitar portabilidade, quando aplicável",
  "Revogar consentimento ou se opor a tratamentos baseados em legítimo interesse",
  "Solicitar informações sobre compartilhamento com terceiros",
] as const;

function SectionCard({
  id,
  icon: Icon,
  title,
  children,
  delay = 0.1,
  gradientFrom = "#3b82f6",
  gradientTo = "#a855f7",
}: {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
  delay?: number;
  gradientFrom?: string;
  gradientTo?: string;
}) {
  return (
    <BlurFade delay={delay} inView>
      <section id={id} className="scroll-mt-28">
        <MagicCard
          className="rounded-2xl"
          gradientFrom={gradientFrom}
          gradientTo={gradientTo}
          gradientColor="#0f172a"
        >
        <article className="p-6 md:p-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">{title}</h2>
          </div>
          <div className="text-muted-foreground leading-relaxed text-sm md:text-base flex flex-col gap-3">
            {children}
          </div>
        </article>
        </MagicCard>
      </section>
    </BlurFade>
  );
}

export default function Privacy() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      {/* Hero */}
      <section aria-labelledby="privacidade-titulo" className="pt-28 lg:pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <BlurFade delay={0.1}>
              <div className="w-fit rounded-full border border-primary/20 bg-primary/5">
                <AnimatedShinyText className="inline-flex items-center px-4 py-1.5 text-sm">
                  <Shield className="size-3.5 mr-2 text-primary" />
                  Transparência e LGPD
                </AnimatedShinyText>
              </div>
            </BlurFade>

            <BlurFade delay={0.15}>
              <h1
                id="privacidade-titulo"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              >
                Política de <BrandTextReveal text="Privacidade" delay={0.2} duration={1.6} />
              </h1>
            </BlurFade>

            <BlurFade delay={0.25}>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Este documento explica como o portfólio de{" "}
                <span className="text-foreground font-medium">{profile.name}</span> trata dados
                pessoais, quais ferramentas de analytics são utilizadas e quais são os seus
                direitos como visitante.
              </p>
            </BlurFade>

            <BlurFade delay={0.35}>
              <div className="relative rounded-2xl">
                <MagicCard
                  className="rounded-2xl"
                  gradientFrom="#22c55e"
                  gradientTo="#10b981"
                  gradientColor="#0f172a"
                >
                  <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold text-foreground">Última atualização</p>
                      <p className="text-sm text-muted-foreground">{LAST_UPDATED}</p>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      Vigente no Brasil (LGPD — Lei nº 13.709/2018)
                    </Badge>
                  </div>
                </MagicCard>
                <BorderBeam
                  className="z-50"
                  size={80}
                  borderRadius={16}
                  duration={12}
                  colorFrom="#22c55e"
                  colorTo="#3b82f6"
                  borderWidth={1.5}
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-14 items-start">
          {/* TOC */}
          <BlurFade delay={0.1} inView className="lg:sticky lg:top-28">
            <nav
              aria-label="Índice da política de privacidade"
              className="rounded-2xl border border-border/60 bg-card/40 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                Nesta página
              </p>
              <ul className="flex flex-col gap-1">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                    >
                      <ChevronRight className="size-3 opacity-0 -ml-1 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </BlurFade>

          <div className="flex flex-col gap-6 min-w-0">
            <SectionCard id="introducao" icon={Shield} title="1. Introdução" delay={0.12}>
              <p>
                Ao navegar neste site, alguns dados podem ser coletados automaticamente para
                entender como o portfólio é utilizado, melhorar a experiência e medir o interesse
                em conteúdos como projetos, currículo e página de contratação.
              </p>
              <p>
                Não vendemos dados pessoais. Não exigimos cadastro para navegar. Os dados
                tratados são, em geral,{" "}
                <Highlighter action="underline" color="#3b82f6" isView>
                  <span className="text-foreground">técnicos e de navegação</span>
                </Highlighter>
                , sem coleta intencional de informações sensíveis.
              </p>
            </SectionCard>

            <SectionCard
              id="controlador"
              icon={UserCheck}
              title="2. Quem é o responsável"
              delay={0.14}
              gradientFrom="#8b5cf6"
              gradientTo="#6366f1"
            >
              <p>
                <strong className="text-foreground">Controlador:</strong> {profile.name}
              </p>
              <p>
                <strong className="text-foreground">E-mail para privacidade:</strong>{" "}
                <a
                  href={`mailto:${profile.email}?subject=Privacidade%20-%20Portfólio`}
                  className="text-primary hover:underline"
                >
                  {profile.email}
                </a>
              </p>
              <p>
                <strong className="text-foreground">Localização:</strong> {profile.location.city},{" "}
                {profile.location.region}, {profile.location.country}
              </p>
            </SectionCard>

            <SectionCard
              id="dados-coletados"
              icon={BarChart3}
              title="3. Dados coletados"
              delay={0.16}
              gradientFrom="#06b6d4"
              gradientTo="#3b82f6"
            >
              <p>Podemos tratar, de forma automática, os seguintes tipos de informação:</p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                {collectedData.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Eventos customizados registram interações como cliques em contato, download de
                currículo, navegação entre seções, visualização de projetos e uso da página{" "}
                <Link href="/hire" className="text-primary hover:underline">
                  /hire
                </Link>
                . Nenhum formulário deste site armazena mensagens em banco de dados próprio.
              </p>
            </SectionCard>

            <SectionCard
              id="cookies-analytics"
              icon={Cookie}
              title="4. Cookies e Google Analytics"
              delay={0.18}
              gradientFrom="#f59e0b"
              gradientTo="#ea580c"
            >
              <p>
                Utilizamos o{" "}
                <strong className="text-foreground">Google Analytics 4 (GA4)</strong> para medir
                audiência e comportamento. O serviço pode definir cookies como{" "}
                <code className="text-xs bg-muted px-1.5 py-0.5 rounded">_ga</code> e{" "}
                <code className="text-xs bg-muted px-1.5 py-0.5 rounded">_ga_*</code> no seu
                navegador.
              </p>
              <p>
                O Google pode processar dados nos Estados Unidos ou em outros países onde mantém
                infraestrutura. Consulte a política do Google para detalhes sobre transferência
                internacional e salvaguardas.
              </p>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:underline w-fit"
              >
                Política de Privacidade do Google
                <ExternalLink className="size-3.5" />
              </a>
            </SectionCard>

            <SectionCard
              id="finalidade"
              icon={Scale}
              title="5. Finalidade e base legal"
              delay={0.2}
            >
              <p>Tratamos dados para:</p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Medir visitas, engajamento e desempenho das páginas</li>
                <li>Entender quais seções e projetos geram mais interesse</li>
                <li>Melhorar conteúdo, navegação e experiência do visitante</li>
                <li>Avaliar interesse profissional (ex.: downloads de currículo)</li>
              </ul>
              <p>
                A base legal, nos termos da LGPD, é o{" "}
                <Highlighter action="highlight" color="#a855f7" isView>
                  <span className="text-foreground">legítimo interesse</span>
                </Highlighter>{" "}
                do controlador em analisar o uso de um portfólio profissional, equilibrado com
                medidas de transparência (esta política) e possibilidade de oposição/opt-out.
              </p>
            </SectionCard>

            <SectionCard
              id="terceiros"
              icon={Share2}
              title="6. Compartilhamento com terceiros"
              delay={0.22}
              gradientFrom="#ec4899"
              gradientTo="#a855f7"
            >
              <p>
                Os dados de navegação analíticos são compartilhados com a{" "}
                <strong className="text-foreground">Google LLC</strong> na qualidade de operadora
                da ferramenta Google Analytics.
              </p>
              <p>
                Links externos (LinkedIn, GitHub, WhatsApp, sites de projetos e empresas) possuem
                políticas próprias. Ao clicar neles, você passa a estar sujeito às regras de cada
                serviço.
              </p>
            </SectionCard>

            <SectionCard
              id="retencao"
              icon={Clock}
              title="7. Retenção"
              delay={0.24}
              gradientFrom="#64748b"
              gradientTo="#334155"
            >
              <p>
                Os dados no Google Analytics seguem os prazos de retenção configurados na
                propriedade GA4 (padrão comum: 2 a 14 meses, conforme configuração da conta).
              </p>
              <p>
                Esta política pode ser atualizada; a data da versão vigente consta no topo desta
                página.
              </p>
            </SectionCard>

            <SectionCard
              id="direitos"
              icon={UserCheck}
              title="8. Seus direitos (LGPD)"
              delay={0.26}
              gradientFrom="#22c55e"
              gradientTo="#16a34a"
            >
              <p>Você pode exercer, a qualquer momento, os direitos previstos na LGPD:</p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                {userRights.map((right) => (
                  <li key={right}>{right}</li>
                ))}
              </ul>
              <p>
                Para exercer esses direitos, envie um e-mail para{" "}
                <a
                  href={`mailto:${profile.email}?subject=LGPD%20-%20Solicitação`}
                  className="text-primary hover:underline"
                >
                  {profile.email}
                </a>{" "}
                com o assunto &quot;LGPD&quot;. Responderei em prazo razoável.
              </p>
            </SectionCard>

            <SectionCard
              id="opt-out"
              icon={Ban}
              title="9. Como desativar o rastreamento"
              delay={0.28}
              gradientFrom="#ef4444"
              gradientTo="#f97316"
            >
              <p>Você pode limitar ou impedir a coleta de analytics das seguintes formas:</p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>
                  Instalar o{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    complemento de opt-out do Google Analytics
                    <ExternalLink className="size-3" />
                  </a>
                </li>
                <li>Bloquear cookies de terceiros nas configurações do navegador</li>
                <li>Usar extensões de bloqueio de rastreadores ou modo de navegação restrita</li>
              </ul>
              <p>
                A desativação pode afetar apenas este dispositivo/navegador e não remove dados já
                processados anteriormente.
              </p>
            </SectionCard>

            <SectionCard id="seguranca" icon={Lock} title="10. Segurança" delay={0.3}>
              <p>
                O site é servido com conexão criptografada (HTTPS). Adotamos boas práticas de
                desenvolvimento para reduzir riscos, mas nenhum sistema na internet é 100% isento
                de incidentes.
              </p>
            </SectionCard>

            <SectionCard
              id="alteracoes"
              icon={RefreshCw}
              title="11. Alterações nesta política"
              delay={0.32}
              gradientFrom="#6366f1"
              gradientTo="#8b5cf6"
            >
              <p>
                Esta política pode ser atualizada para refletir mudanças legais, técnicas ou no
                uso de ferramentas de analytics. A data da última revisão será sempre indicada no
                início da página.
              </p>
            </SectionCard>

            <SectionCard
              id="contato"
              icon={Mail}
              title="12. Contato"
              delay={0.34}
              gradientFrom="#3b82f6"
              gradientTo="#06b6d4"
            >
              <p>
                Dúvidas sobre privacidade, cookies ou tratamento de dados? Fale comigo:
              </p>
              <p>
                <a
                  href={`mailto:${profile.email}?subject=Privacidade%20-%20Portfólio`}
                  className="text-primary hover:underline font-medium"
                >
                  {profile.email}
                </a>
              </p>
              <p className="text-sm">
                Ou volte ao{" "}
                <Link href="/" className="text-primary hover:underline">
                  portfólio principal
                </Link>
                .
              </p>
            </SectionCard>
          </div>
        </div>
      </section>
    </div>
  );
}
