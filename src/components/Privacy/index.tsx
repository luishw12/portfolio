import Link from "next/link";
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

function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 section-rule py-8 first:border-t-0 first:pt-0">
      <h2 className="font-display text-xl font-semibold text-tinta">{title}</h2>
      <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-mudo md:text-base">
        {children}
      </div>
    </section>
  );
}

export default function Privacy() {
  return (
    <div className="pb-8">
      <header className="page-wrap pb-8 pt-12 md:pt-16">
        <Link href="/" className="link-text text-sm">
          ← Início
        </Link>
        <p className="mt-6 font-mono-meta text-[0.8125rem] text-mudo">
          LGPD · Lei nº 13.709/2018
        </p>
        <h1
          id="privacidade-titulo"
          className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-tinta"
        >
          Política de Privacidade
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-mudo md:text-[1.0625rem]">
          Como o portfólio de {profile.name} trata dados pessoais, quais ferramentas de
          analytics são utilizadas e quais são os seus direitos como visitante.
        </p>
        <p className="mt-4 font-mono-meta text-[0.8125rem] text-mudo">
          Última atualização: {LAST_UPDATED}
        </p>
        <div className="section-rule mt-8" aria-hidden />
      </header>

      <div className="page-wrap pb-10 md:pb-14">
        <div className="grid items-start gap-10 lg:grid-cols-[14rem_1fr] lg:gap-14">
          <nav
            aria-label="Índice da política de privacidade"
            className="lg:sticky lg:top-8"
          >
            <p className="font-mono-meta text-[0.8125rem] uppercase tracking-widest text-mudo">
              Nesta página
            </p>
            <ul className="mt-4 flex flex-col gap-1">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="link-text block py-1 text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <LegalSection id="introducao" title="1. Introdução">
              <p>
                Ao navegar neste site, alguns dados podem ser coletados automaticamente para
                entender como o portfólio é utilizado, melhorar a experiência e medir o interesse
                em conteúdos como projetos, currículo e página de contratação.
              </p>
              <p>
                Não vendemos dados pessoais. Não exigimos cadastro para navegar. Os dados
                tratados são, em geral, técnicos e de navegação, sem coleta intencional de
                informações sensíveis.
              </p>
            </LegalSection>

            <LegalSection id="controlador" title="2. Quem é o responsável">
              <p>
                <strong className="text-tinta">Controlador:</strong> {profile.name}
              </p>
              <p>
                <strong className="text-tinta">E-mail para privacidade:</strong>{" "}
                <a
                  href={`mailto:${profile.email}?subject=Privacidade%20-%20Portfólio`}
                  className="link-cobre"
                >
                  {profile.email}
                </a>
              </p>
              <p>
                <strong className="text-tinta">Localização:</strong> {profile.location.city},{" "}
                {profile.location.region}, {profile.location.country}
              </p>
            </LegalSection>

            <LegalSection id="dados-coletados" title="3. Dados coletados">
              <p>Podemos tratar, de forma automática, os seguintes tipos de informação:</p>
              <ul className="list-disc space-y-2 pl-5">
                {collectedData.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Eventos customizados registram interações como cliques em contato, download de
                currículo, navegação entre seções, visualização de projetos e uso da página{" "}
                <Link href="/hire" className="link-cobre">
                  /hire
                </Link>
                . Nenhum formulário deste site armazena mensagens em banco de dados próprio.
              </p>
            </LegalSection>

            <LegalSection id="cookies-analytics" title="4. Cookies e Google Analytics">
              <p>
                Utilizamos o <strong className="text-tinta">Google Analytics 4 (GA4)</strong>{" "}
                para medir audiência e comportamento. O serviço pode definir cookies como{" "}
                <code className="bg-elevado px-1.5 py-0.5 font-mono-meta text-[0.8125rem]">
                  _ga
                </code>{" "}
                e{" "}
                <code className="bg-elevado px-1.5 py-0.5 font-mono-meta text-[0.8125rem]">
                  _ga_*
                </code>{" "}
                no seu navegador.
              </p>
              <p>
                O Google pode processar dados nos Estados Unidos ou em outros países onde mantém
                infraestrutura. Consulte a política do Google para detalhes sobre transferência
                internacional e salvaguardas.
              </p>
              <p>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-cobre"
                >
                  Política de Privacidade do Google →
                </a>
              </p>
            </LegalSection>

            <LegalSection id="finalidade" title="5. Finalidade e base legal">
              <p>Tratamos dados para:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Medir visitas, engajamento e desempenho das páginas</li>
                <li>Entender quais seções e projetos geram mais interesse</li>
                <li>Melhorar conteúdo, navegação e experiência do visitante</li>
                <li>Avaliar interesse profissional (ex.: downloads de currículo)</li>
              </ul>
              <p>
                A base legal, nos termos da LGPD, é o legítimo interesse do controlador em
                analisar o uso de um portfólio profissional, equilibrado com medidas de
                transparência (esta política) e possibilidade de oposição/opt-out.
              </p>
            </LegalSection>

            <LegalSection id="terceiros" title="6. Compartilhamento com terceiros">
              <p>
                Os dados de navegação analíticos são compartilhados com a{" "}
                <strong className="text-tinta">Google LLC</strong> na qualidade de operadora
                da ferramenta Google Analytics.
              </p>
              <p>
                Links externos (LinkedIn, GitHub, WhatsApp, sites de projetos e empresas) possuem
                políticas próprias. Ao clicar neles, você passa a estar sujeito às regras de cada
                serviço.
              </p>
            </LegalSection>

            <LegalSection id="retencao" title="7. Retenção">
              <p>
                Os dados no Google Analytics seguem os prazos de retenção configurados na
                propriedade GA4 (padrão comum: 2 a 14 meses, conforme configuração da conta).
              </p>
              <p>
                Esta política pode ser atualizada; a data da versão vigente consta no topo desta
                página.
              </p>
            </LegalSection>

            <LegalSection id="direitos" title="8. Seus direitos (LGPD)">
              <p>Você pode exercer, a qualquer momento, os direitos previstos na LGPD:</p>
              <ul className="list-disc space-y-2 pl-5">
                {userRights.map((right) => (
                  <li key={right}>{right}</li>
                ))}
              </ul>
              <p>
                Para exercer esses direitos, envie um e-mail para{" "}
                <a
                  href={`mailto:${profile.email}?subject=LGPD%20-%20Solicitação`}
                  className="link-cobre"
                >
                  {profile.email}
                </a>{" "}
                com o assunto &quot;LGPD&quot;. Responderei em prazo razoável.
              </p>
            </LegalSection>

            <LegalSection id="opt-out" title="9. Como desativar o rastreamento">
              <p>Você pode limitar ou impedir a coleta de analytics das seguintes formas:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Instalar o{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-cobre"
                  >
                    complemento de opt-out do Google Analytics
                  </a>
                </li>
                <li>Bloquear cookies de terceiros nas configurações do navegador</li>
                <li>Usar extensões de bloqueio de rastreadores ou modo de navegação restrita</li>
              </ul>
              <p>
                A desativação pode afetar apenas este dispositivo/navegador e não remove dados já
                processados anteriormente.
              </p>
            </LegalSection>

            <LegalSection id="seguranca" title="10. Segurança">
              <p>
                O site é servido com conexão criptografada (HTTPS). Adotamos boas práticas de
                desenvolvimento para reduzir riscos, mas nenhum sistema na internet é 100% isento
                de incidentes.
              </p>
            </LegalSection>

            <LegalSection id="alteracoes" title="11. Alterações nesta política">
              <p>
                Esta política pode ser atualizada para refletir mudanças legais, técnicas ou no
                uso de ferramentas de analytics. A data da última revisão será sempre indicada no
                início da página.
              </p>
            </LegalSection>

            <LegalSection id="contato" title="12. Contato">
              <p>Dúvidas sobre privacidade, cookies ou tratamento de dados? Fale comigo:</p>
              <p>
                <a
                  href={`mailto:${profile.email}?subject=Privacidade%20-%20Portfólio`}
                  className="link-cobre font-medium"
                >
                  {profile.email}
                </a>
              </p>
              <p>
                Ou volte ao{" "}
                <Link href="/" className="link-cobre">
                  portfólio principal
                </Link>
                .
              </p>
            </LegalSection>
          </div>
        </div>
      </div>
    </div>
  );
}
