import HomeContent from "@/app/(default)/home/home";
import {Metadata} from "next";
import { getAbsoluteUrl } from "@/constants";

export const metadata: Metadata = {
  title: 'Accueil | Kinaru - La plateforme immobilière révolutionnaire au Cameroun',
  description: 'Kinaru simplifie la gestion, la location et la recherche de biens immobiliers au Cameroun et dans la sous-région CEMAC. Trouvez ou louez facilement votre habitation idéale.',
  keywords: 'Kinaru, immobilier Cameroun, location Douala, application immobilière, gestion locative, CEMAC, logement Cameroun',
  openGraph: {
    title: 'Kinaru - La plateforme immobilière révolutionnaire au Cameroun',
    description: 'Simplifiez votre expérience immobilière avec Kinaru. Location, gestion et recherche de biens immobiliers au Cameroun et dans la CEMAC.',
    url: getAbsoluteUrl(''),
    siteName: 'Kinaru',
    images: [
      {
        url: getAbsoluteUrl('images/og-image.jpg'),
        width: 1200,
        height: 630,
        alt: 'Kinaru - Plateforme immobilière',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kinaru - La plateforme immobilière révolutionnaire au Cameroun',
    description: 'Simplifiez votre expérience immobilière avec Kinaru. Location, gestion et recherche de biens immobiliers au Cameroun.',
    images: [getAbsoluteUrl('images/twitter-image.jpg')],
    creator: '@KinaruApp',
    site: '@KinaruApp'
  }
}

export default function Home() {
  return (
      <HomeContent />
  )
}
