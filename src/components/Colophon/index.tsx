import Link from "next/link";
import { CONTACT } from "@/lib/content";

export default function Colophon() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" aria-labelledby="contato-titulo" className="section-rule">
      <div className="page-wrap py-10 md:py-14">
        <h2
          id="contato-titulo"
          className="font-display text-2xl font-semibold text-tinta"
        >
          Contato
        </h2>

        <nav aria-label="Contato" className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
          <a href={`mailto:${CONTACT.email}`} className="link-cobre text-base font-medium">
            {CONTACT.email}
          </a>
          <Link
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-text text-base"
          >
            WhatsApp
          </Link>
          <Link
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-cobre text-base font-medium"
          >
            LinkedIn
          </Link>
          <Link
            href="/hire"
            className="link-text text-base"
          >
            Contratar
          </Link>
          <Link href="/privacidade" className="link-text text-base">
            Privacidade
          </Link>
        </nav>

        <p className="mt-10 font-mono-meta text-[0.8125rem] text-mudo">
          © {currentYear} Luís Henrique Wendt · Lajeado, RS · github.com/luishw12
        </p>
      </div>
    </footer>
  );
}
