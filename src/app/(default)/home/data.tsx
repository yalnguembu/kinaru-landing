import {FaCalendar, FaClock, FaDownload} from "react-icons/fa6";
import {FaHistory} from "react-icons/fa";

export const avatars = [
    '/assets/images/avatars/avatar-1.png',
    '/assets/images/avatars/avatar-2.png',
    '/assets/images/avatars/avatar-3.png'
]

export const services = [
    {
        tag: 'Recherche de biens',
        title: 'Recherche de biens immobiliers',
        image: "/assets/images/services/recherche_immobilieres.png",
        icon: <FaCalendar />,
        description: "Découvrez un large éventail de biens immobiliers disponibles " +
            "à la location ou à la vente, que ce soit un appartement " +
            "en centre-ville ou une maison de Campagne.",
        actionText: "Commencez l'essaie gratuit",
        actionUrl: "#",
        data: [

        ],
        className: "flex-col-reverse md:flex-row-reverse"
    },
    {
        tag: 'Gestion locative',
        title: 'Gerez facilement vos bien en ligne.',
        image: "/assets/images/services/gestion_immobiliere.png",
        icon: <FaClock />,
        description: "De la publication d'annonces à la gestion des demandes " +
            "des locataires, tout est centralisé sur une seule plateforme.",
        actionText: "Essayez Maintenant",
        actionUrl: "#",
        data: [

        ],
        className: "flex-col-reverse"
    },
    {
        tag: 'Prets bancaires et assurances',
        title: "Accedez a des services financiers.",
        image: "/assets/images/services/banque_assusrance.png",
        icon: <FaHistory />,
        description: "Comparez les offres de pres bancaires, realisez des simulations de credit et souscrivez" +
            " à des assurances de loyer impyé pour sécuriser vos investissements",
        actionText: "Commencez l'essaie gratuit",
        actionUrl: "#",
        data: [],
        className: "flex-col-reverse md:flex-row-reverse"
    },
    {
        tag: 'Maintenance et Conciergerie',
        title: "Une service d'assistance a votre écoute",
        image: "/assets/images/about/abtslide_2.png",
        icon: <FaHistory />,
        description: "Besoin d'une réparation rapide ou de conseils pour un aménagement ? " +
                    "Avec Kinaru, vous pouvez réserver des services de maintenance ou de " +
                    "conciergerie directement depuis la plateforme.",
        actionText: "Essayez Maintenant",
        actionUrl: "#",
        data: [],
        className: "flex-col-reverse md:flex-row"
    },
    {
        tag: 'Visite virtuelle',
        title: "Visites virtuelles en réalité augmentée",
        image: "/assets/images/services/visite_virtuelle.png",
        icon: <FaHistory />,
        description: "Plongez dans l'avenir de la recherche imobilière, explorez " +
            "les propriétés à 360 degré grace à nos visites virtuelles immersives." +
            "Visualisez également vos futurs meubles et décorations en réalité augmentéé " +
            "pour vous progeter plus facilement dans votre futur espace.",
        actionText: "Essayez Maintenant",
        actionUrl: "#",
        data: [],
        className: "flex-col-reverse md:flex-row-reverse"
    },
]

export const steps = [
    {
        icon: <FaDownload size={32} />,
        title: "Téléchargez l'appli",
        description: "Téléchargez l'application, disponible sur Android et IPhone"
    },
    {
        icon: <FaDownload size={32} />,
        title: 'Créez un compte',
        description: "Notre service est gratuit pour 14 jours, Inscrivez-vous pour tester."
    },
    {
        icon: <FaDownload size={32} />,
        title: 'Enjoy!',
        description: 'Enjoy notre application et partage ton experience.'
    },
]