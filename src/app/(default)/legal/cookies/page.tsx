import { CONTACT_MAIL, LOCATION } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Cookies | Kinaru - Suivi et technologies utilisées",
  description: "Informations sur l'utilisation des cookies et technologies similaires par l'application Kinaru. Découvrez comment nous utilisons ces technologies et comment les contrôler.",
  keywords: "cookies Kinaru, politique cookies, traceurs application, technologies suivi, préférences cookies, confidentialité mobile",
  openGraph: {
    title: "Politique de Cookies Kinaru",
    description: "Comment Kinaru utilise les cookies et technologies similaires pour améliorer votre expérience sur notre plateforme immobilière.",
    url: "https://www.kinaru.app/legal/cookies",
    siteName: "Kinaru",
    images: [
      {
        url: "https://www.kinaru.app/images/cookies-og.jpg",
        width: 1200,
        height: 630,
        alt: "Politique de cookies Kinaru",
      }
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de Cookies Kinaru",
    description: "Comment Kinaru utilise les cookies et technologies similaires pour améliorer votre expérience sur notre plateforme immobilière.",
    images: ["https://www.kinaru.app/images/cookies-twitter.jpg"],
    creator: "@KinaruApp",
    site: "@KinaruApp"
  }
};

export default function CookiesPolicyPage() {
  return (
    <div className="text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Politique de Cookies</h1>
      <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : 11 avril 2025</p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p>
            Cette politique explique comment Sprinter IT utilise les cookies et technologies similaires 
            dans le cadre de son application mobile Kinaru. Elle vise à vous informer sur les données 
            collectées automatiquement lors de l'utilisation de notre Service et sur vos droits concernant 
            ces technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Utilisation des cookies dans l'application mobile</h2>
          <p>
            <strong>Kinaru n'utilise pas de cookies traditionnels</strong> dans l'application mobile, 
            car ceux-ci sont principalement utilisés dans les navigateurs web.
          </p>
          <p className="mt-2">
            Cependant, notre application utilise des technologies similaires pour améliorer votre 
            expérience utilisateur et assurer le bon fonctionnement de nos services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Technologies de suivi utilisées</h2>
          <p>Nous utilisons les technologies suivantes dans notre application :</p>
          
          <div className="mt-3 space-y-4">
            <div>
              <h3 className="text-xl font-medium">Firebase Analytics</h3>
              <p className="mt-1">
                Nous utilisons Firebase Analytics pour collecter des données d'utilisation anonymes, 
                comme les pages visitées et les erreurs d'application. Ces données nous aident à 
                améliorer notre Service et à résoudre les problèmes techniques.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Identifiants d'appareil</h3>
              <p className="mt-1">
                Nous utilisons des identifiants d'appareil uniques pour assurer la sécurité de 
                votre compte et personnaliser votre expérience. Ces identifiants sont similaires 
                aux cookies persistants, mais sont spécifiques aux applications mobiles.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Stockage local</h3>
              <p className="mt-1">
                L'application peut stocker certaines informations localement sur votre appareil 
                pour améliorer les performances et permettre certaines fonctionnalités hors ligne.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Données collectées</h2>
          <p>Les technologies mentionnées ci-dessus peuvent collecter :</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Identifiants de l'appareil (comme l'identifiant publicitaire)</li>
            <li>Données d'utilisation (pages visitées, durée des sessions)</li>
            <li>Informations sur les performances de l'application (erreurs, temps de chargement)</li>
            <li>Version du système d'exploitation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Finalités du traitement</h2>
          <p>Nous utilisons ces technologies pour :</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Assurer la sécurité de votre compte</li>
            <li>Améliorer les performances de l'application</li>
            <li>Analyser l'utilisation pour mieux comprendre comment nos utilisateurs interagissent avec l'application</li>
            <li>Résoudre les problèmes techniques et améliorer la stabilité</li>
            <li>Personnaliser votre expérience utilisateur</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contrôle de vos préférences</h2>
          <p>
            Vous pouvez contrôler la collecte de certaines données en :
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Désactivant l'identifiant publicitaire</strong> : Vous pouvez réinitialiser ou 
              désactiver l'identifiant publicitaire de votre appareil dans les paramètres Android 
              (Paramètres &gt; Google &gt; Annonces) ou iOS (Paramètres &gt; Confidentialité &gt; Publicité).
            </li>
            <li>
              <strong>Ajustant les paramètres de l'application</strong> : Si disponible, nous proposons 
              des options dans les paramètres de l'application pour contrôler la collecte de données analytiques.
            </li>
            <li>
              <strong>Supprimant les données locales</strong> : Vous pouvez effacer les données stockées 
              localement en désinstallant l'application ou en utilisant les options de nettoyage disponibles 
              dans les paramètres de votre appareil.
            </li>
          </ul>
          <p className="mt-3">
            Notez que certaines fonctionnalités de l'application peuvent être limitées si vous désactivez 
            ces technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Cookies sur notre site web</h2>
          <p>
            Si vous visitez notre site web (<a href="https://www.kinaru.app" className="text-primary hover:underline">www.kinaru.app</a>), 
            nous pouvons utiliser des cookies traditionnels pour améliorer votre expérience de navigation. 
            Ces cookies peuvent être utilisés pour :
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Mémoriser vos préférences</li>
            <li>Analyser le trafic du site</li>
            <li>Personnaliser le contenu en fonction de vos intérêts</li>
            <li>Faciliter le partage sur les réseaux sociaux</li>
          </ul>
          <p className="mt-3">
            Vous pouvez gérer vos préférences concernant les cookies sur notre site web via la bannière 
            de consentement qui s'affiche lors de votre première visite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Durée de conservation</h2>
          <p>
            Les données collectées via ces technologies sont conservées pour une durée maximale de 12 mois, 
            sauf si une conservation prolongée est nécessaire pour des raisons de sécurité ou pour se conformer 
            à des obligations légales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Partage avec des tiers</h2>
          <p>
            Les données collectées via ces technologies peuvent être partagées avec les prestataires suivants :
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Google Firebase (pour l'hébergement et l'analyse)</li>
            <li>Des prestataires de services d'assistance technique</li>
          </ul>
          <p className="mt-3">
            Ces prestataires sont contractuellement tenus de protéger vos données et de respecter 
            les lois applicables en matière de protection des données.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Modifications de cette politique</h2>
          <p>
            Nous mettrons à jour cette politique si nécessaire pour refléter les changements dans nos pratiques 
            ou obligations légales. Les changements seront publiés sur cette page avec une nouvelle date de 
            "Dernière mise à jour".
          </p>
          <p className="mt-2">
            Pour les modifications importantes, nous vous informerons par e-mail ou via une notification 
            dans l'application au moins 7 jours avant leur entrée en vigueur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contactez-nous</h2>
          <p>
            Pour toute question concernant notre politique de cookies ou l'utilisation de technologies similaires, 
            n'hésitez pas à nous contacter :
          </p>
          <ul className="mt-3 space-y-2">
            <li><strong>Email</strong> : <a href={`mailto:${CONTACT_MAIL}`} className="text-primary hover:underline">sprinteragenceit@gmail.com</a></li>
            <li><strong>Site web</strong> : <a href="/contact" className="text-primary hover:underline">https://www.kinaru.app/contact</a></li>
            <li><strong>Adresse</strong> : Sprinter IT, {LOCATION}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}