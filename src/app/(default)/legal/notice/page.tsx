import { CONTACT_MAIL } from "@/constants";
import { Metadata } from "next";
import { getAbsoluteUrl } from "@/constants";

export const metadata: Metadata = {
  title: 'Mentions Légales | Kinaru - Informations juridiques',
  description: 'Consultez les mentions légales de Kinaru. Informations sur l\'éditeur, l\'hébergement et les droits de propriété intellectuelle de notre plateforme immobilière.',
  keywords: 'mentions légales Kinaru, informations juridiques, éditeur Kinaru, hébergement application, propriété intellectuelle, droits auteur Kinaru',
  openGraph: {
    title: 'Mentions Légales Kinaru',
    description: 'Informations juridiques concernant l\'éditeur, l\'hébergement et les droits de propriété intellectuelle de la plateforme Kinaru.',
    url: getAbsoluteUrl('legal/notice'),
    siteName: 'Kinaru',
    images: [
      {
        url: getAbsoluteUrl('images/legal-og.jpg'),
        width: 1200,
        height: 630,
        alt: 'Mentions légales Kinaru',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentions Légales Kinaru',
    description: 'Informations juridiques concernant l\'éditeur, l\'hébergement et les droits de propriété intellectuelle de la plateforme Kinaru.',
    images: [getAbsoluteUrl('images/legal-twitter.jpg')],
    creator: '@KinaruApp',
    site: '@KinaruApp'
  }
}

export default function LegalNoticeScreen() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Mentions Légales</h2>
        <p className="text-sm text-gray-600">Dernière mise à jour: 11 avril 2025</p>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Éditeur du Service</h3>
          <div>
            <p>Le Service Kinaru est édité par :</p>
            <ul className="list-none space-y-1">
              <li><strong>Société :</strong> Sprinter IT</li>
              <li><strong>Adresse :</strong> Douala, Cameroun</li>
              <li><strong>Email :</strong> <a href={`mailto:${CONTACT_MAIL}`} className="text-blue-600">sprinteragenceit@gmail.com</a></li>
              <li><strong>Site web :</strong> <a href="https://www.kinaru.app" className="text-blue-600">https://www.kinaru.app</a></li>
            </ul>
          </div>
        </section>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Hébergement</h3>
          <div>
            <p>Le Service est hébergé par :</p>
            <ul className="list-none space-y-1">
              <li><strong>Prestataire :</strong> Firebase (Google Cloud Platform)</li>
              <li><strong>Adresse :</strong> Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, États-Unis</li>
            </ul>
          </div>
        </section>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Conditions d'utilisation</h3>
          <div>
            <p>
              L'utilisation du Service Kinaru est soumise aux <a href="/legal/terms" className="text-blue-600">Conditions d'Utilisation</a> et 
              à notre <a href="/legal/privacy" className="text-blue-600">Politique de Confidentialité</a>.
            </p>
          </div>
        </section>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Propriété intellectuelle</h3>
          <div>
            <p>
              Le contenu du Service Kinaru (textes, images, logos, etc.) est protégé par le droit d'auteur 
              et autres droits de propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, 
              du Service ou de l'un quelconque des éléments qui le composent, par quelque procédé que ce soit, 
              sans l'autorisation expresse de Sprinter IT, est interdite et constituerait une contrefaçon.
            </p>
            <p className="mt-2">
              Les marques et logos figurant sur le Service sont des marques déposées de Sprinter IT ou de ses partenaires.
              Toute reproduction ou représentation, totale ou partielle, seule ou intégrée à d'autres éléments, 
              sans l'autorisation préalable et écrite de Sprinter IT est strictement interdite.
            </p>
          </div>
        </section>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Données personnelles</h3>
          <div>
            <p>
              Conformément à la réglementation en vigueur sur la protection des données personnelles, 
              vous disposez de droits concernant vos données personnelles. Pour plus d'informations, 
              veuillez consulter notre <a href="/legal/privacy" className="text-blue-600">Politique de Confidentialité</a>.
            </p>
          </div>
        </section>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Loi applicable et juridiction</h3>
          <div>
            <p>
              Les présentes mentions légales sont régies par la loi camerounaise. En cas de litige, 
              les tribunaux de Douala seront seuls compétents.
            </p>
          </div>
        </section>
      </div>
    );
  }