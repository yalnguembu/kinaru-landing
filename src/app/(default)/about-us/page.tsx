import {Metadata} from "next";
import './about.scss'
import AboutContent from "@/app/(default)/about-us/about";
import { getAbsoluteUrl } from "@/constants";

export const metadata: Metadata = {
    title: 'À Propos | Kinaru - Notre Mission et Vision pour l\'Immobilier',
    description: 'Découvrez l\'histoire de Kinaru, notre mission de transformation du secteur immobilier au Cameroun et en Afrique Centrale. Rencontrez l\'équipe derrière l\'innovation.',
    keywords: 'à propos Kinaru, histoire startup, équipe Kinaru, mission immobilier, innovation CEMAC, technologie immobilière Cameroun',
    openGraph: {
        title: 'À Propos de Kinaru - Révolutionner l\'immobilier en Afrique Centrale',
        description: 'Découvrez notre histoire, notre mission et notre équipe dévouée à transformer l\'expérience immobilière au Cameroun et dans la CEMAC.',
        url: getAbsoluteUrl('about-us'),
        siteName: 'Kinaru',
        images: [
            {
                url: getAbsoluteUrl('images/about-og.jpg'),
                width: 1200,
                height: 630,
                alt: 'À propos de Kinaru',
            }
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'À Propos de Kinaru - Révolutionner l\'immobilier en Afrique Centrale',
        description: 'Découvrez notre histoire, notre mission et notre équipe dévouée à transformer l\'expérience immobilière au Cameroun et dans la CEMAC.',
        images: [getAbsoluteUrl('images/about-twitter.jpg')],
        creator: '@KinaruApp',
        site: '@KinaruApp'
    }
}

export default function About() {
  return (
      <AboutContent />
  );
}