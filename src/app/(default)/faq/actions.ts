import {Faq} from "@/types";

export function fetchQuestions(): Promise<Faq[]>
{
    return Promise.resolve([
        {
            question: "Quelle est la différence entre Kinaru et Kinaru Pro ?",
            answer: "Kinaru est l'application destinée aux visiteurs et locataires : elle permet de rechercher des biens, contacter des propriétaires, planifier des visites et gérer ses réservations. Kinaru Pro est conçue pour les bailleurs, agences immobilières et agents : elle offre des outils de publication d'annonces, de gestion multi-biens, de suivi des paiements et de signature électronique de contrats."
        },
        {
            question: "Comment créer mon compte sur Kinaru ?",
            answer: "Téléchargez l'application Kinaru (pour locataires) ou Kinaru Pro (pour bailleurs/agences) depuis le Play Store. Ouvrez l'app, appuyez sur « Créer un compte », renseignez votre nom, numéro de téléphone et un mot de passe. Vous recevrez un code de vérification par SMS pour valider votre compte. L'inscription est gratuite et prend moins de 2 minutes."
        },
        {
            question: "Kinaru est-il disponible sur iPhone (iOS) ?",
            answer: "Kinaru et Kinaru Pro sont actuellement disponibles sur Android via le Play Store. Les versions iOS sont en cours de développement et seront disponibles prochainement sur l'App Store. Vous pouvez suivre nos réseaux sociaux pour être informé dès leur sortie."
        },
        {
            question: "Comment publier une annonce en tant que bailleur ?",
            answer: "Avec Kinaru Pro, publiez une annonce en quelques étapes : connectez-vous à votre compte, appuyez sur « Ajouter un bien », renseignez les informations (type de bien, superficie, prix, localisation, équipements), ajoutez des photos de qualité et validez. Votre annonce est visible par des milliers de locataires potentiels en quelques minutes."
        },
        {
            question: "Est-ce que Kinaru est gratuit ?",
            answer: "Le téléchargement et la création de compte sont totalement gratuits pour les locataires. Pour les bailleurs et agences, Kinaru Pro propose une offre de base gratuite ainsi que des abonnements premium donnant accès à des fonctionnalités avancées comme les statistiques détaillées, la mise en avant des annonces et la signature électronique."
        },
        {
            question: "Comment fonctionne la messagerie entre locataire et bailleur ?",
            answer: "Kinaru intègre une messagerie directe sécurisée. Depuis la fiche d'un bien, le locataire peut envoyer un message ou une demande de visite au bailleur. Le bailleur reçoit une notification instantanée et peut répondre depuis Kinaru Pro. Tous les échanges sont conservés dans l'historique de la conversation."
        },
        {
            question: "Mes données personnelles sont-elles protégées ?",
            answer: "Oui. Kinaru applique des mesures de sécurité strictes : vos données sont chiffrées, jamais revendues à des tiers et accessibles uniquement par vous et les parties directement impliquées dans une transaction. Nous respectons les bonnes pratiques de confidentialité en vigueur pour garantir votre vie privée."
        },
        {
            question: "Que faire si j'ai un problème avec un bailleur ou un locataire ?",
            answer: "Kinaru dispose d'un système de signalement intégré. Depuis le profil concerné ou la conversation, appuyez sur « Signaler » et décrivez le problème. Notre équipe examine chaque signalement sous 48h. En cas d'urgence, vous pouvez aussi nous contacter directement par email à kinaruofficiel@gmail.com ou par téléphone au +237 681 41 86 74."
        },
        {
            question: "Puis-je utiliser Kinaru depuis une autre ville que Douala ?",
            answer: "Oui, Kinaru couvre progressivement l'ensemble du Cameroun. Douala et Yaoundé sont les villes les mieux couvertes actuellement, mais des biens sont également disponibles dans d'autres villes comme Bafoussam, Buea, Kribi et Limbé. La couverture s'étend à mesure que de nouveaux bailleurs rejoignent la plateforme."
        },
    ] as Faq[])
}