import ReviewsPage from "@/app/(default)/reviews/reviews";
import {Metadata} from "next";
import { getAbsoluteUrl } from "@/constants";

export const metadata: Metadata = {
    title: 'Avis et Témoignages | Kinaru - Expériences des utilisateurs',
    description: 'Découvrez les avis et témoignages des utilisateurs de Kinaru. Locataires, propriétaires et agences immobilières partagent leur expérience avec notre plateforme.',
    keywords: 'avis Kinaru, témoignages immobilier, reviews application immobilière, expérience utilisateur Kinaru, avis clients, témoignages Cameroun',
    openGraph: {
        title: 'Avis et Témoignages des utilisateurs Kinaru',
        description: 'Découvrez comment Kinaru transforme l\'expérience immobilière au Cameroun à travers les témoignages de nos utilisateurs.',
        url: getAbsoluteUrl('reviews'),
        siteName: 'Kinaru',
        images: [
            {
                url: getAbsoluteUrl('images/reviews-og.jpg'),
                width: 1200,
                height: 630,
                alt: 'Témoignages Kinaru',
            }
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Avis et Témoignages des utilisateurs Kinaru',
        description: 'Découvrez comment Kinaru transforme l\'expérience immobilière au Cameroun à travers les témoignages de nos utilisateurs.',
        images: [getAbsoluteUrl('images/reviews-twitter.jpg')],
        creator: '@KinaruApp',
        site: '@KinaruApp'
    }
}

export default function Reviews() {
  return (
    <ReviewsPage />
  )
}
