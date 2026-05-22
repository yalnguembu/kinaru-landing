import {User} from "@/types";

export const firstCarouselImages: string[] = [
    '/assets/images/about/abt-1.jpg',
    '/assets/images/about/abt-2.jpg',
    '/assets/images/about/abt-3.jpg',
    '/assets/images/about/abt-4.jpg',
    '/assets/images/about/abt-5.jpg',
    '/assets/images/about/abt-4.jpg',
]

export const statsValues = [
    {number: 2300, start: 1500, time: 10, step: 3, name: 'Revues', letter: '+'},
    {number: 1, step: 3, name: 'Pays', letter: '+'},
    {number: 1, name: 'Téléchargements', letter: 'k+'},
    {number: 1, name: 'Abonnements', letter: 'k+'}
]

export const valuesItem = [
    {
        name: "Simplifier votre vie",
        content: "Simplifier la recherche et la gestion des location à travers une plateforme intuitive aussi bien pour les locataires que pour les propriétaires."
    },
    {
        name: "Votre sécurité",
        content: "Garantir des transactions de locations sécurisées et transparentes, tout en vous permettant de fournir moins d'effort pour le faire."
    },
    {
        name: "Aucune restriction",
        content: "Nous nous adressons aux particuliers, aux agences immobilières et à tout personnel cherchant une solution moderne et efficace pour la gestion de locations."
    },
]

export const teams: User[] = [
    {name: 'William Scott', role: 'CEO & Managing Director', image_url: '/assets/images/teams/user-1.png'},
    {name: 'Averill Rack', role: 'Team Lead', image_url: '/assets/images/teams/user-2.png'},
    {name: 'Geo Back', role: 'Product Manager', image_url: '/assets/images/teams/user-3.png'}
]

export const userRates = [
    {
        rate: 5,
        user: {
            name: 'Chancelle Mbarga',
            role: 'Locataire · Douala, Bonapriso',
            image_url: '/assets/images/logos/MOBI/108x108.png'
        } as User,
        comment: "J'ai trouvé mon appartement en moins de 48h après mon inscription sur Kinaru. Le processus était clair, sans intermédiaire louche et les photos correspondaient exactement à la réalité. Je recommande vivement à toute personne qui cherche un logement à Douala."
    },
    {
        rate: 5,
        user: {
            name: 'Patrick Essomba',
            role: 'Propriétaire bailleur · Yaoundé, Bastos',
            image_url: '/assets/images/logos/MOBI/108x108.png'
        } as User,
        comment: "Avec Kinaru Pro, je gère mes 6 appartements depuis mon téléphone. Je reçois les demandes de visite en temps réel, je signe les contrats en ligne et je suis mes paiements chaque mois. C'est un gain de temps considérable par rapport à ce que je faisais avant."
    },
    {
        rate: 5,
        user: {
            name: 'Nadège Talla',
            role: 'Étudiante · Douala, Logbaba',
            image_url: '/assets/images/logos/MOBI/108x108.png'
        } as User,
        comment: "En tant qu'étudiante avec un petit budget, j'avais du mal à trouver une chambre décente. Kinaru m'a permis de filtrer par prix, quartier et type de bien. J'ai visité 2 chambres et pris ma décision le même jour. Simple, rapide et sans frais cachés."
    },
    {
        rate: 4,
        user: {
            name: 'Rodrigue Nkeng',
            role: 'Agent immobilier · Agence ImmoPlus Douala',
            image_url: '/assets/images/logos/MOBI/108x108.png'
        } as User,
        comment: "Kinaru Pro a transformé la façon dont notre agence travaille. On publie nos annonces en quelques minutes, les clients nous contactent directement via l'appli et on conclut plus de baux qu'avant. L'interface est professionnelle et nos clients apprécient la transparence."
    },
    {
        rate: 5,
        user: {
            name: 'Aurore Djomo',
            role: 'Locataire · Douala, Akwa',
            image_url: '/assets/images/logos/MOBI/108x108.png'
        } as User,
        comment: "Ce qui m'a conquis, c'est la possibilité de voir les avis des anciens locataires avant de prendre une décision. J'ai évité un propriétaire peu sérieux grâce à ça. Kinaru, c'est comme avoir un ami de confiance dans l'immobilier."
    },
]

export const sponsors = [
    '/assets/images/sponsors/spotify.png',
    '/assets/images/sponsors/slack.png',
    '/assets/images/sponsors/woocommerce.png',
    '/assets/images/sponsors/themeforest.png',
    '/assets/images/sponsors/envato.png',
    '/assets/images/sponsors/jquery.png',
    '/assets/images/sponsors/shopbot.png',
    '/assets/images/sponsors/paypal.png',
]