import Link from "next/link";

interface FooterLinkProps {
  href: string;
  label: string;
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} className="hover:text-primary transition-colors">
        {label}
      </Link>
    </li>
  );
}

export function UsefulLinksColumn() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold mb-2">Liens Utiles</h2>
      <ul className="flex flex-col gap-3 text-gray-300">
        <FooterLink href="/" label="Accueil" />
        <FooterLink href="/#services" label="Nos Services" />
        <FooterLink href="/about" label="À Propos" />
        <FooterLink href="/faq" label="FAQ" />
        <FooterLink href="/contact" label="Contactez-nous" />
      </ul>
    </div>
  );
}

export function LegalLinksColumn() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold mb-2">Informations Légales</h2>
      <ul className="flex flex-col gap-3 text-gray-300">
        <FooterLink href="/legal/privacy" label="Politique de Confidentialité" />
        <FooterLink href="/legal/terms" label="Conditions d'Utilisation" />
        <FooterLink href="/cookies" label="Politique de Cookies" />
        <FooterLink href="/legal/notice" label="Mentions Légales" />
      </ul>
    </div>
  );
}
