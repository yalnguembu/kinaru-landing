import PricingContent from "@/app/(default)/pricing/pricing";
import {Metadata} from "next";
import { getAbsoluteUrl } from "@/constants";

export const metadata: Metadata = {
    title: 'Tarifs et Abonnements | Kinaru - Plans Gratuit, Standard et Premium',
    description: 'Découvrez nos offres tarifaires adaptées à tous les besoins : plan Gratuit, Standard ou Premium. Solutions pour locataires, propriétaires et agences immobilières au Cameroun.',
    keywords: 'tarifs Kinaru, prix application immobilière, abonnement Kinaru, forfaits immobilier, plan gratuit, plan premium, coûts gestion locative',
    openGraph: {
        title: 'Tarifs et Abonnements Kinaru - Solutions immobilières pour tous',
        description: 'Des plans tarifaires adaptés à tous les budgets et besoins : Gratuit, Standard et Premium. Trouvez la solution idéale pour votre activité immobilière.',
        url: getAbsoluteUrl('pricing'),
        siteName: 'Kinaru',
        images: [
            {
                url: getAbsoluteUrl('images/pricing-og.jpg'),
                width: 1200,
                height: 630,
                alt: 'Plans tarifaires Kinaru',
            }
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tarifs et Abonnements Kinaru - Solutions immobilières pour tous',
        description: 'Des plans tarifaires adaptés à tous les budgets et besoins : Gratuit, Standard et Premium. Trouvez la solution idéale pour votre activité immobilière.',
        images: [getAbsoluteUrl('images/pricing-twitter.jpg')],
        creator: '@KinaruApp',
        site: '@KinaruApp'
    }
}

export default function Pricing() {
    return (
        <PricingContent />
    )
}
