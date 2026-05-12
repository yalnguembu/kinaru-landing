import {Review} from "@/types";

export async function fetchReviews(): Promise<Review[]>
{
    return Promise.resolve([
        {
            user: {
                name: "Chancelle Mbarga",
                role: "Locataire · Douala, Bonapriso",
                image_url: '/assets/images/logos/MOBI/108x108.png'
            },
            review: "J'ai trouvé mon appartement en moins de 48h après mon inscription sur Kinaru. Le processus était clair, sans intermédiaire louche et les photos correspondaient exactement à la réalité. J'ai pu visiter, signer et emménager en une semaine. Je recommande vivement à toute personne qui cherche un logement à Douala.",
            stars: 5
        },
        {
            user: {
                name: "Patrick Essomba",
                role: "Propriétaire bailleur · Yaoundé, Bastos",
                image_url: '/assets/images/logos/MOBI/108x108.png'
            },
            review: "Avec Kinaru Pro, je gère mes 6 appartements depuis mon téléphone. Je reçois les demandes de visite en temps réel, je signe les contrats en ligne et je suis mes paiements chaque mois. C'est un gain de temps considérable. Mon taux d'occupation est passé de 60% à 95% en 3 mois.",
            stars: 5
        },
        {
            user: {
                name: "Nadège Talla",
                role: "Étudiante · Douala, Logbaba",
                image_url: '/assets/images/logos/MOBI/108x108.png'
            },
            review: "En tant qu'étudiante avec un petit budget, j'avais du mal à trouver une chambre décente. Kinaru m'a permis de filtrer par prix, quartier et type de bien. J'ai visité 2 chambres et pris ma décision le même jour. Simple, rapide et sans frais cachés.",
            stars: 5
        },
        {
            user: {
                name: "Rodrigue Nkeng",
                role: "Agent immobilier · Agence ImmoPlus, Douala",
                image_url: '/assets/images/logos/MOBI/108x108.png'
            },
            review: "Kinaru Pro a transformé la façon dont notre agence travaille. On publie nos annonces en quelques minutes, les clients nous contactent directement via l'appli et on conclut plus de baux qu'avant. L'interface est professionnelle et nos clients apprécient la transparence des informations.",
            stars: 5
        },
        {
            user: {
                name: "Aurore Djomo",
                role: "Locataire · Douala, Akwa",
                image_url: '/assets/images/logos/MOBI/108x108.png'
            },
            review: "Ce qui m'a conquis, c'est la possibilité de voir les avis des anciens locataires avant de prendre une décision. J'ai évité un propriétaire peu sérieux grâce à ça. Kinaru, c'est comme avoir un ami de confiance dans l'immobilier. Je ne cherche plus autrement.",
            stars: 5
        },
        {
            user: {
                name: "Jean-Baptiste Fouda",
                role: "Directeur · Agence Résidence Plus, Yaoundé",
                image_url: '/assets/images/logos/MOBI/108x108.png'
            },
            review: "Nous avons intégré Kinaru Pro dans notre agence il y a 4 mois. Le tableau de bord est clair, les statistiques nous aident à mieux comprendre la demande et nos agents passent moins de temps à répondre aux appels. Une vraie révolution pour notre secteur au Cameroun.",
            stars: 5
        },
        {
            user: {
                name: "Merveille Atangana",
                role: "Locataire · Yaoundé, Omnisports",
                image_url: '/assets/images/logos/MOBI/108x108.png'
            },
            review: "J'ai déménagé de Bafoussam à Yaoundé pour le travail et je ne connaissais personne. Grâce à Kinaru, j'ai pu rechercher un logement à distance, discuter avec le propriétaire via la messagerie et arriver directement dans mon nouveau studio. Tout était comme prévu. Excellent service.",
            stars: 4
        },
        {
            user: {
                name: "Sylvie Kouam",
                role: "Propriétaire · Douala, Bonamoussadi",
                image_url: '/assets/images/logos/MOBI/108x108.png'
            },
            review: "Je gérais mes biens seule et c'était épuisant — appels à toute heure, visites mal organisées, loyers impayés. Depuis que j'utilise Kinaru Pro, tout est centralisé. Les rappels de paiement sont automatiques et je n'ai plus à courir après mes locataires. Je me sens enfin sereine.",
            stars: 5
        },
    ] as Review[])
}