import { Metadata } from "next";
import { getAbsoluteUrl } from "@/constants";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Kinaru - Protection de vos données",
  description:
    "Découvrez comment Kinaru protège vos données personnelles. Notre politique de confidentialité détaille la collecte, l'utilisation et la protection de vos informations.",
  keywords:
    "politique confidentialité Kinaru, protection données, RGPD Cameroun, vie privée application, sécurité données personnelles, confidentialité immobilier",
  openGraph: {
    title: "Politique de Confidentialité Kinaru",
    description:
      "Comment Kinaru protège vos données personnelles et respecte votre vie privée lors de l'utilisation de notre plateforme immobilière.",
    url: getAbsoluteUrl("legal/privacy"),
    siteName: "Kinaru",
    images: [
      {
        url: getAbsoluteUrl("images/privacy-og.jpg"),
        width: 1200,
        height: 630,
        alt: "Politique de confidentialité Kinaru",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de Confidentialité Kinaru",
    description:
      "Comment Kinaru protège vos données personnelles et respecte votre vie privée lors de l'utilisation de notre plateforme immobilière.",
    images: [getAbsoluteUrl("images/privacy-twitter.jpg")],
    creator: "@KinaruApp",
    site: "@KinaruApp",
  },
};

export default function PrivacyScreen() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        Politique de confidentialité de Kinaru
      </h2>

      <p className="text-sm text-gray-600">
        Dernière mise à jour : 16 mai 2026
      </p>

      <div>
        <p>
          Chez Kinaru, nous nous engageons à protéger votre vie privée. Cette
          politique de confidentialité explique comment nous collectons,
          utilisons, partageons et protégeons vos informations lorsque vous
          utilisez notre application mobile Kinaru et notre plateforme
          immobilière, ci-après dénommées le “Service”. Elle vous informe
          également de vos droits en matière de confidentialité et de la manière
          dont la loi vous protège. En utilisant le Service, vous acceptez les
          pratiques décrites dans cette politique.
        </p>
      </div>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Interprétation et définitions</h3>

        <div>
          <h4 className="font-medium">Interprétation</h4>
          <p>
            Les mots commençant par une majuscule ont des significations
            spécifiques définies ci-dessous. Ces définitions s'appliquent au
            singulier comme au pluriel.
          </p>

          <h4 className="font-medium mt-4">Définitions</h4>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Compte</strong> : Un compte unique créé pour vous
              permettre d'accéder à notre Service ou à certaines de ses
              fonctionnalités.
            </li>

            <li>
              <strong>Société</strong> également appelée “Nous”, “Notre” ou
              “Nos” : Kinaru, plateforme immobilière numérique basée à Douala,
              Cameroun.
            </li>

            <li>
              <strong>Application</strong> : Kinaru, plateforme immobilière
              numérique permettant la publication, la recherche, la gestion et
              la mise en relation autour de biens immobiliers.
            </li>

            <li>
              <strong>Pays</strong> : Cameroun.
            </li>

            <li>
              <strong>Appareil</strong> : Tout dispositif utilisé pour accéder
              au Service, notamment smartphone, tablette ou ordinateur.
            </li>

            <li>
              <strong>Données personnelles</strong> : Toute information
              permettant d'identifier directement ou indirectement une personne
              physique.
            </li>

            <li>
              <strong>Service</strong> : L'application mobile Kinaru, le site
              web Kinaru et les services associés.
            </li>

            <li>
              <strong>Prestataire de services</strong> : Toute entité ou
              personne traitant des données pour le compte de Kinaru.
            </li>

            <li>
              <strong>Données d'utilisation</strong> : Données collectées
              automatiquement lors de l'utilisation du Service.
            </li>

            <li>
              <strong>Vous</strong> : L'utilisateur individuel ou l'entité au
              nom de laquelle le Service est utilisé.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">
          Collecte et utilisation de vos données personnelles
        </h3>

        <div>
          <h4 className="font-medium">Types de données collectées</h4>

          <h5 className="font-medium mt-3">Données personnelles</h5>

          <p>
            Lorsque vous utilisez Kinaru, nous pouvons collecter les
            informations suivantes avec votre consentement :
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Identifiants personnels</strong> : prénom, nom, adresse
              e-mail, numéro de téléphone.
            </li>

            <li>
              <strong>Adresse physique</strong> : ville, quartier, localisation
              ou adresse complète pour associer votre profil ou vos biens à une
              zone géographique.
            </li>

            <li>
              <strong>Documents d'identification</strong> :
              <ul className="list-disc pl-6 mt-1">
                <li>
                  Photos de votre carte nationale d'identité, recto et verso,
                  pour vérifier votre identité.
                </li>
                <li>Photo de profil pour personnaliser votre compte.</li>
                <li>
                  Documents liés aux biens immobiliers, notamment certificats de
                  propriété, justificatifs ou documents commerciaux lorsque cela
                  est nécessaire.
                </li>
              </ul>
            </li>

            <li>
              <strong>Informations immobilières</strong> : titres, descriptions,
              images, prix, localisation, type de logement, disponibilité,
              statut de validation et autres informations liées aux biens
              publiés.
            </li>

            <li>
              <strong>Données de parrainage</strong> : code de parrainage,
              relation entre parrain et filleul, gains, commissions et
              historique des récompenses lorsque vous participez au programme
              Agent Kinaru.
            </li>

            <li>
              <strong>Localisation</strong> : coordonnées GPS, latitude et
              longitude, utilisées pour associer un bien ou une adresse à une
              position géographique.
            </li>
          </ul>

          <h5 className="font-medium mt-3">Données d'utilisation</h5>

          <p>Nous pouvons collecter automatiquement :</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Adresse IP, type d'appareil, version du système d'exploitation et
              identifiants techniques.
            </li>
            <li>
              Pages visitées, actions effectuées, heure et date des visites,
              durée d'utilisation et erreurs techniques.
            </li>
          </ul>

          <h5 className="font-medium mt-3">
            Données spécifiques à l'application
          </h5>

          <p>
            Avec votre autorisation préalable via les paramètres de votre
            appareil, Kinaru peut accéder à :
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Caméra</strong> : pour capturer des photos de profil,
              documents d'identité, certificats ou images de biens immobiliers.
            </li>
            <li>
              <strong>Images et galerie</strong> : pour sélectionner des photos
              ou documents depuis votre appareil.
            </li>
            <li>
              <strong>Localisation</strong> : pour associer une position
              géographique à une propriété ou à un profil.
            </li>
          </ul>

          <p>
            Ces données peuvent être stockées localement sur votre appareil ou
            téléchargées sur nos serveurs sécurisés afin de fournir les
            fonctionnalités du Service. Vous pouvez révoquer ces autorisations à
            tout moment dans les paramètres de votre appareil.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">
          Utilisation de vos données personnelles
        </h3>

        <div>
          <p>Nous utilisons vos données pour :</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Fournir et maintenir le Service</strong> :
              <ul className="list-disc pl-6 mt-1">
                <li>Créer et gérer votre compte utilisateur.</li>
                <li>Vérifier votre identité et vos documents.</li>
                <li>Publier, vérifier et gérer les biens immobiliers.</li>
                <li>Faciliter la mise en relation entre utilisateurs.</li>
              </ul>
            </li>

            <li>
              <strong>Gérer les validations</strong> : permettre à l'équipe
              Kinaru de valider ou refuser les profils, documents et propriétés
              soumis sur la plateforme.
            </li>

            <li>
              <strong>Gérer le programme Agent Kinaru</strong> : suivre les
              filleuls, commissions, récompenses, gains et paiements liés au
              système de parrainage.
            </li>

            <li>
              <strong>Vous contacter</strong> : par e-mail, téléphone,
              notifications push ou messages liés à votre compte, vos annonces,
              vos validations ou vos paiements.
            </li>

            <li>
              <strong>Améliorer le Service</strong> : analyser l'utilisation de
              la plateforme afin d'améliorer les fonctionnalités, la sécurité et
              l'expérience utilisateur.
            </li>

            <li>
              <strong>Respecter nos obligations légales</strong> : conserver
              certaines informations lorsque cela est nécessaire pour des raisons
              légales, fiscales, administratives ou de sécurité.
            </li>
          </ul>

          <p className="font-medium mt-2">
            Nous ne vendons pas vos données personnelles à des tiers.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">
          Vérification des profils et des propriétés
        </h3>

        <div>
          <p>
            Kinaru peut demander des documents d'identification, des justificatifs
            ou des informations complémentaires afin de vérifier l'authenticité
            des utilisateurs, agences, bailleurs, agents immobiliers et biens
            publiés sur la plateforme.
          </p>

          <p>Kinaru se réserve le droit de :</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>refuser une annonce ou une propriété non conforme ;</li>
            <li>suspendre ou désactiver un compte suspect ;</li>
            <li>supprimer un contenu frauduleux ou trompeur ;</li>
            <li>demander des informations complémentaires ;</li>
            <li>
              bloquer temporairement certaines fonctionnalités en cas d'activité
              suspecte.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">
          Programme Agent Kinaru, parrainage et commissions
        </h3>

        <div>
          <p>
            Kinaru peut proposer un programme de parrainage permettant à certains
            utilisateurs ou Agents Kinaru d'inviter des bailleurs, agences ou
            agents immobiliers à rejoindre la plateforme.
          </p>

          <p>
            Dans ce cadre, nous pouvons collecter et traiter les informations
            suivantes :
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>code de parrainage ;</li>
            <li>identité du parrain ;</li>
            <li>identité du filleul ;</li>
            <li>statut de validation du filleul ;</li>
            <li>propriétés ajoutées par le filleul ;</li>
            <li>gains générés ;</li>
            <li>commissions en attente, payées ou annulées ;</li>
            <li>historique des paiements.</li>
          </ul>

          <p>
            Les commissions ne sont générées que selon les conditions définies
            par Kinaru, notamment après validation du compte ou validation d'une
            propriété par l'administration.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">
          Partage de vos données personnelles
        </h3>

        <div>
          <p>Nous pouvons partager vos données dans les cas suivants :</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Avec des prestataires de services</strong> :
              <ul className="list-disc pl-6 mt-1">
                <li>
                  Hébergement et base de données via Firebase et Google Cloud.
                </li>
                <li>
                  Analyse des performances et stabilité de l'application via des
                  outils techniques.
                </li>
              </ul>
            </li>

            <li>
              <strong>Avec des partenaires opérationnels</strong> : lorsque cela
              est nécessaire pour vérifier certains documents, traiter une
              demande ou assurer le bon fonctionnement du Service.
            </li>

            <li>
              <strong>En cas de transfert d'activité</strong> : lors d'une
              fusion, acquisition, réorganisation ou transfert d'actifs.
            </li>

            <li>
              <strong>Pour des raisons légales</strong> : si la loi, une
              autorité compétente ou une procédure légale l'exige.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">
          Conservation et transfert de vos données personnelles
        </h3>

        <div>
          <h4 className="font-medium">Conservation</h4>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Les données liées au profil, aux documents et aux propriétés sont
              conservées tant que votre compte est actif ou aussi longtemps que
              nécessaire pour fournir le Service.
            </li>
            <li>
              En cas de suppression de compte, les données sont supprimées dans
              un délai raisonnable, sauf obligation légale ou motif légitime de
              conservation.
            </li>
            <li>
              Les données liées aux transactions, commissions ou paiements
              peuvent être conservées plus longtemps pour des raisons
              comptables, fiscales ou de sécurité.
            </li>
            <li>
              Les données d'utilisation peuvent être conservées à des fins
              d'analyse, de sécurité et d'amélioration du Service.
            </li>
          </ul>

          <h4 className="font-medium mt-3">Transfert</h4>

          <p>
            Vos données peuvent être traitées au Cameroun ou sur des serveurs
            situés à l'étranger, notamment via Firebase et Google Cloud.
          </p>

          <p>
            Nous mettons en place des mesures raisonnables pour protéger vos
            informations, notamment :
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>cryptage des données en transit ;</li>
            <li>contrôle d'accès aux services internes ;</li>
            <li>restriction des accès aux données sensibles ;</li>
            <li>surveillance technique et amélioration continue de la sécurité.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Vos droits et sécurité</h3>

        <div>
          <h4 className="font-medium">Vos droits sur vos données personnelles</h4>

          <p>Vous pouvez demander :</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>l'accès à vos données personnelles ;</li>
            <li>la correction de vos informations ;</li>
            <li>la suppression de votre compte ;</li>
            <li>la limitation de certains traitements ;</li>
            <li>une copie de vos données lorsque cela est possible ;</li>
            <li>l'opposition à certaines utilisations non essentielles.</li>
          </ul>

          <p>
            Pour exercer ces droits, contactez-nous à :{" "}
            <a href="mailto:contact@kinaru.app" className="text-blue-600">
              contact@kinaru.app
            </a>
          </p>

          <h4 className="font-medium mt-3">
            Sécurité de vos données personnelles
          </h4>

          <p>
            Nous utilisons des mesures techniques et organisationnelles pour
            protéger vos informations contre l'accès non autorisé, la perte, la
            modification ou la divulgation.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>cryptage des données en transit ;</li>
            <li>authentification sécurisée ;</li>
            <li>contrôle des accès administratifs ;</li>
            <li>surveillance des activités suspectes ;</li>
            <li>sécurisation des documents sensibles.</li>
          </ul>

          <p>
            Toutefois, aucune méthode de transmission ou de stockage électronique
            n'est totalement infaillible. En cas d'incident majeur de sécurité,
            nous prendrons les mesures nécessaires pour limiter les risques et
            informer les utilisateurs concernés lorsque cela est requis.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Informations complémentaires</h3>

        <div>
          <h4 className="font-medium">Confidentialité des enfants</h4>

          <p>
            Kinaru n'est pas destiné aux enfants de moins de 13 ans. Nous ne
            collectons pas sciemment de données personnelles d'enfants sans le
            consentement parental vérifiable.
          </p>

          <h4 className="font-medium mt-3">Cookies et technologies similaires</h4>

          <p>
            L'application mobile Kinaru n'utilise pas de cookies classiques comme
            un navigateur web. Toutefois, nous pouvons utiliser des technologies
            similaires pour :
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>analyser l'utilisation de l'application ;</li>
            <li>améliorer la performance ;</li>
            <li>détecter les erreurs ;</li>
            <li>renforcer la sécurité.</li>
          </ul>

          <h4 className="font-medium mt-3">
            Modifications de cette politique
          </h4>

          <p>
            Nous pouvons mettre à jour cette politique de confidentialité lorsque
            cela est nécessaire. Les changements seront publiés sur cette page
            avec une nouvelle date de mise à jour.
          </p>

          <p>
            En cas de modification importante, nous pourrons vous informer par
            notification, e-mail ou message dans l'application.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Contactez-nous</h3>

        <div>
          <p>
            Pour toute question, demande ou préoccupation concernant cette
            politique ou vos données :
          </p>

          <ul className="list-none space-y-1">
            <li>
              <strong>Email</strong> :{" "}
              <a href="mailto:contact@kinaru.app" className="text-blue-600">
                contact@kinaru.app
              </a>
            </li>

            <li>
              <strong>Site web</strong> :{" "}
              <a
                href="https://www.kinaru.app/contact"
                className="text-blue-600"
              >
                https://www.kinaru.app/contact
              </a>
            </li>

            <li>
              <strong>Adresse physique</strong> : Kinaru, Douala, Cameroun
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}