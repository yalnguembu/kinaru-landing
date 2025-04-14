import FaqContent from "@/app/(default)/faq/faq";
import {Metadata} from "next";
import { getAbsoluteUrl } from "@/constants";

export const metadata: Metadata = {
    title: 'Questions Fréquentes (FAQ) | Kinaru - Aide et Support',
    description: 'Trouvez des réponses à toutes vos questions sur Kinaru. Notre FAQ couvre l\'utilisation de l\'application, les abonnements, la gestion des biens et le support technique.',
    keywords: 'FAQ Kinaru, questions fréquentes, aide Kinaru, support application immobilière, guide utilisation, problèmes techniques, abonnements Kinaru',
    openGraph: {
        title: 'Questions Fréquentes (FAQ) Kinaru',
        description: 'Trouvez rapidement des réponses à vos questions sur l\'utilisation de la plateforme immobilière Kinaru au Cameroun.',
        url: getAbsoluteUrl('faq'),
        siteName: 'Kinaru',
        images: [
            {
                url: getAbsoluteUrl('images/faq-og.jpg'),
                width: 1200,
                height: 630,
                alt: 'FAQ Kinaru',
            }
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Questions Fréquentes (FAQ) Kinaru',
        description: 'Trouvez rapidement des réponses à vos questions sur l\'utilisation de la plateforme immobilière Kinaru.',
        images: [getAbsoluteUrl('images/faq-twitter.jpg')],
        creator: '@KinaruApp',
        site: '@KinaruApp'
    }
}

export default function Faq() {
    return (
        <FaqContent />
    )
}