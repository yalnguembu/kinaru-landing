import { PropsWithChildren } from "react";
import Link from "next/link";

export default function LegalSectionLayout({children}: PropsWithChildren) {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Informations Légales</h1>
        <div className="mt-4 flex flex-wrap gap-4 sm:gap-8">
          <Link href="/legal/privacy" className="text-primary hover:text-primary/80">Politique de Confidentialité</Link>
          <Link href="/legal/terms" className="text-primary hover:text-primary/80">Conditions d'Utilisation</Link>
          <Link href="/legal/cookies" className="text-primary hover:text-primary/80">Politique de Cookies</Link>
          <Link href="/legal/notice" className="text-primary hover:text-primary/80">Mentions Légales</Link>
        </div>
      </div>
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </div>
  );
}