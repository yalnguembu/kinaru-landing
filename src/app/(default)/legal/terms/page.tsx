import { Metadata } from "next";
import { getAbsoluteUrl } from "@/constants";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation | Kinaru - Cadre légal et contractuel",
  description:
    "Consultez les conditions d'utilisation de Kinaru, plateforme immobilière permettant aux bailleurs, agences, agents immobiliers et locataires d'utiliser nos services au Cameroun.",
  keywords:
    "conditions utilisation Kinaru, CGU Kinaru, immobilier Cameroun, bailleurs, agences immobilières, agents immobiliers, logements, parrainage Kinaru",
  openGraph: {
    title: "Conditions d'Utilisation de Kinaru",
    description:
      "Cadre légal régissant l'utilisation de la plateforme immobilière Kinaru au Cameroun.",
    url: getAbsoluteUrl("legal/terms"),
    siteName: "Kinaru",
    images: [
      {
        url: getAbsoluteUrl("images/legal-og.jpg"),
        width: 1200,
        height: 630,
        alt: "Conditions d'utilisation Kinaru",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conditions d'Utilisation de Kinaru",
    description:
      "Cadre légal régissant l'utilisation de la plateforme immobilière Kinaru.",
    images: [getAbsoluteUrl("images/legal-twitter.jpg")],
    creator: "@KinaruApp",
    site: "@KinaruApp",
  },
};

export default function TermsScreen() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Conditions d'Utilisation de Kinaru</h2>

      <p className="text-sm text-gray-600">
        Dernière mise à jour : 16 mai 2026
      </p>

      <div>
        <p>
          Bienvenue sur Kinaru, une plateforme immobilière numérique basée au
          Cameroun, conçue pour faciliter la publication, la recherche et la
          gestion de biens immobiliers. En accédant à Kinaru, en créant un
          compte ou en utilisant nos services, vous acceptez les présentes
          Conditions d'Utilisation. Si vous n'acceptez pas ces Conditions, vous
          ne devez pas utiliser la plateforme.
        </p>
      </div>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">1. Définitions</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Kinaru</strong> : la plateforme immobilière numérique
            comprenant l'application mobile, le site web, le système
            d'administration et les services associés.
          </li>

          <li>
            <strong>Utilisateur</strong> : toute personne utilisant Kinaru,
            notamment les locataires, bailleurs, agences immobilières, agents
            immobiliers et Agents Kinaru.
          </li>

          <li>
            <strong>Bailleur</strong> : personne physique ou morale publiant ou
            gérant un ou plusieurs biens immobiliers.
          </li>

          <li>
            <strong>Agence immobilière</strong> : structure professionnelle
            utilisant Kinaru pour publier ou gérer des logements.
          </li>

          <li>
            <strong>Agent immobilier</strong> : professionnel indépendant ou
            rattaché à une agence, utilisant Kinaru pour publier ou promouvoir
            des biens.
          </li>

          <li>
            <strong>Agent Kinaru</strong> : personne recrutée ou autorisée par
            Kinaru pour inviter des bailleurs, agences ou agents immobiliers à
            rejoindre la plateforme via un code de parrainage.
          </li>

          <li>
            <strong>Bien immobilier</strong> : logement, maison, appartement,
            chambre, studio, terrain, local commercial ou tout autre bien publié
            sur la plateforme.
          </li>

          <li>
            <strong>Contenu</strong> : textes, images, documents, descriptions,
            prix, localisations, certificats, informations personnelles ou toute
            donnée transmise par un utilisateur.
          </li>

          <li>
            <strong>Service</strong> : l'ensemble des fonctionnalités proposées
            par Kinaru.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">2. Acceptation des Conditions</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            En créant un compte ou en utilisant Kinaru, vous reconnaissez avoir
            lu, compris et accepté les présentes Conditions d'Utilisation.
          </li>

          <li>
            Vous acceptez également notre Politique de Confidentialité, qui
            explique comment vos données sont collectées, utilisées et protégées.
          </li>

          <li>
            Vous devez fournir des informations exactes, complètes et à jour.
          </li>

          <li>
            Kinaru peut modifier ces Conditions lorsque cela est nécessaire. Les
            utilisateurs seront informés en cas de changement important.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">3. Description des Services</h3>

        <p>Kinaru permet notamment :</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>la création de comptes utilisateurs ;</li>
          <li>la publication de biens immobiliers ;</li>
          <li>la recherche de logements disponibles ;</li>
          <li>la mise en relation entre utilisateurs ;</li>
          <li>la gestion des profils bailleurs, agences et agents ;</li>
          <li>la validation des comptes et documents ;</li>
          <li>la validation ou le refus des propriétés publiées ;</li>
          <li>la gestion des favoris, notifications et messages ;</li>
          <li>la gestion du programme de parrainage Agent Kinaru.</li>
        </ul>

        <p>
          Certaines fonctionnalités peuvent être ajoutées, modifiées, limitées ou
          supprimées afin d'améliorer la qualité du service.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">4. Création et gestion du compte</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            L'utilisateur est responsable des informations fournies lors de son
            inscription.
          </li>

          <li>
            Kinaru peut demander des documents supplémentaires afin de vérifier
            l'identité ou l'activité d'un utilisateur.
          </li>

          <li>
            Un compte peut être refusé, suspendu ou désactivé en cas
            d'informations fausses, incomplètes ou suspectes.
          </li>

          <li>
            L'utilisateur est responsable de la sécurité de son compte et de
            toute activité réalisée depuis celui-ci.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">
          5. Validation des comptes et documents
        </h3>

        <p>
          Afin de protéger les utilisateurs et de limiter les fraudes, Kinaru
          peut mettre en place un système de validation des comptes.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>validation de l'identité ;</li>
          <li>validation des documents fournis ;</li>
          <li>validation des agences immobilières ;</li>
          <li>validation des bailleurs ;</li>
          <li>validation des agents immobiliers ;</li>
          <li>contrôle des informations transmises.</li>
        </ul>

        <p>
          Kinaru se réserve le droit de refuser ou suspendre un compte si les
          informations transmises ne sont pas conformes ou semblent frauduleuses.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">6. Publication des biens immobiliers</h3>

        <p>
          Les utilisateurs autorisés peuvent publier des biens immobiliers sur
          Kinaru.
        </p>

        <p>Chaque annonce doit contenir des informations exactes :</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>titre clair ;</li>
          <li>description correcte ;</li>
          <li>prix réel ;</li>
          <li>localisation approximative ou précise ;</li>
          <li>images authentiques ;</li>
          <li>statut réel du bien ;</li>
          <li>informations de contact valides.</li>
        </ul>

        <p>
          Il est interdit de publier de fausses annonces, des images trompeuses
          ou des biens inexistants.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">7. Validation des propriétés</h3>

        <p>
          Kinaru peut vérifier les propriétés publiées avant ou après leur mise
          en visibilité.
        </p>

        <p>Kinaru peut :</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>valider une propriété ;</li>
          <li>refuser une propriété ;</li>
          <li>demander des corrections ;</li>
          <li>archiver une propriété ;</li>
          <li>retirer une annonce frauduleuse ou non conforme.</li>
        </ul>

        <p>
          La validation d'une propriété ne constitue pas une garantie absolue de
          disponibilité, de propriété légale ou d'absence de litige. Les
          utilisateurs doivent effectuer leurs propres vérifications avant toute
          transaction.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">8. Programme Agent Kinaru</h3>

        <p>
          Kinaru peut recruter ou autoriser des Agents Kinaru chargés d'inviter
          des bailleurs, agences et agents immobiliers à rejoindre la plateforme.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Chaque Agent Kinaru peut recevoir un code de parrainage unique.</li>
          <li>
            Un utilisateur inscrit avec ce code peut être associé à l'Agent
            Kinaru correspondant.
          </li>
          <li>
            Les récompenses ne sont accordées que si les conditions définies par
            Kinaru sont respectées.
          </li>
          <li>
            Kinaru peut suspendre un Agent Kinaru en cas de fraude, abus,
            manipulation ou comportement contraire aux règles.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">
          9. Parrainage, gains et commissions
        </h3>

        <p>
          Le système de parrainage permet à un Agent Kinaru de recevoir des
          gains lorsque ses filleuls réalisent certaines actions validées.
        </p>

        <p>À titre indicatif, Kinaru peut attribuer :</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>un gain lorsqu'un filleul est validé ;</li>
          <li>
            un gain lorsqu'une propriété ajoutée par un filleul est validée par
            l'administration ;
          </li>
          <li>des bonus ponctuels selon les campagnes ou objectifs internes.</li>
        </ul>

        <p>
          Les montants, conditions, délais et modalités de paiement peuvent être
          modifiés par Kinaru selon sa politique commerciale.
        </p>

        <p>
          Aucun gain n'est dû en cas de compte frauduleux, filleul non validé,
          propriété refusée, doublon, fausse annonce ou activité suspecte.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">10. Paiements et retraits</h3>

        <p>
          Les gains ou commissions peuvent être suivis dans le système interne
          de Kinaru.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Certains gains peuvent être en attente de validation.</li>
          <li>Les paiements peuvent être traités manuellement ou automatiquement.</li>
          <li>
            Kinaru peut vérifier l'identité du bénéficiaire avant tout paiement.
          </li>
          <li>
            Kinaru peut annuler un gain en cas d'erreur, fraude, doublon ou non
            respect des conditions.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">11. Obligations des utilisateurs</h3>

        <p>En utilisant Kinaru, vous vous engagez à :</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>fournir des informations exactes ;</li>
          <li>respecter les autres utilisateurs ;</li>
          <li>ne pas publier de fausses annonces ;</li>
          <li>ne pas utiliser de documents falsifiés ;</li>
          <li>ne pas créer plusieurs comptes pour contourner le système ;</li>
          <li>ne pas manipuler le système de parrainage ;</li>
          <li>respecter les lois applicables au Cameroun ;</li>
          <li>signaler toute activité suspecte à l'équipe Kinaru.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">12. Contenus interdits</h3>

        <p>Il est interdit de publier ou transmettre :</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>des informations fausses ou trompeuses ;</li>
          <li>des images volées ou non autorisées ;</li>
          <li>des annonces frauduleuses ;</li>
          <li>des documents falsifiés ;</li>
          <li>des contenus injurieux, haineux ou discriminatoires ;</li>
          <li>des contenus portant atteinte aux droits d'un tiers ;</li>
          <li>des contenus contraires aux lois camerounaises.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">
          13. Droits et responsabilités de Kinaru
        </h3>

        <p>Kinaru se réserve le droit de :</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>modérer les contenus publiés ;</li>
          <li>valider ou refuser un compte ;</li>
          <li>valider ou refuser une propriété ;</li>
          <li>suspendre un utilisateur ;</li>
          <li>supprimer une annonce non conforme ;</li>
          <li>corriger une erreur technique ;</li>
          <li>modifier certaines fonctionnalités ;</li>
          <li>limiter l'accès à certains services en cas d'abus.</li>
        </ul>

        <p>
          Kinaru fait des efforts raisonnables pour assurer la disponibilité et
          la sécurité du service, mais ne garantit pas une disponibilité
          permanente sans interruption.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">14. Responsabilité des transactions</h3>

        <p>
          Kinaru facilite la mise en relation entre utilisateurs, mais n'est pas
          automatiquement partie aux transactions conclues entre bailleurs,
          agences, agents immobiliers et locataires.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Les utilisateurs doivent vérifier les informations avant tout
            paiement ou engagement.
          </li>
          <li>
            Kinaru ne garantit pas la conclusion d'un bail, d'une vente ou d'un
            accord entre utilisateurs.
          </li>
          <li>
            Les litiges entre utilisateurs doivent d'abord être réglés entre les
            parties concernées.
          </li>
          <li>
            Kinaru peut assister à la médiation lorsque cela est possible, sans
            obligation de résultat.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">15. Données personnelles</h3>

        <p>
          Le traitement des données personnelles est encadré par notre Politique
          de Confidentialité.
        </p>

        <p>
          En utilisant Kinaru, vous acceptez que certaines données soient
          utilisées pour :
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>créer et gérer votre compte ;</li>
          <li>vérifier votre identité ;</li>
          <li>valider vos propriétés ;</li>
          <li>gérer les notifications ;</li>
          <li>sécuriser la plateforme ;</li>
          <li>gérer le programme Agent Kinaru et les commissions.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">16. Propriété intellectuelle</h3>

        <p>
          Le nom Kinaru, le logo, l'identité visuelle, les interfaces, textes,
          éléments graphiques et fonctionnalités appartiennent à Kinaru ou à ses
          ayants droit.
        </p>

        <p>
          Il est interdit de copier, reproduire, modifier ou exploiter ces
          éléments sans autorisation écrite préalable.
        </p>

        <p>
          Les utilisateurs conservent leurs droits sur les contenus qu'ils
          publient, mais accordent à Kinaru une autorisation d'utilisation
          nécessaire à l'affichage, la promotion et le fonctionnement du service.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">17. Suspension et résiliation</h3>

        <p>
          Kinaru peut suspendre ou désactiver un compte en cas de violation des
          présentes Conditions.
        </p>

        <p>Les motifs peuvent inclure :</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>fausse identité ;</li>
          <li>fausses annonces ;</li>
          <li>documents falsifiés ;</li>
          <li>fraude au parrainage ;</li>
          <li>comportement abusif ;</li>
          <li>activité suspecte ;</li>
          <li>non-respect des règles de la plateforme.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">
          18. Modification des Conditions
        </h3>

        <p>
          Kinaru peut modifier les présentes Conditions afin de tenir compte de
          l'évolution du service, de la réglementation ou de sa politique
          commerciale.
        </p>

        <p>
          La date de mise à jour sera modifiée en conséquence. L'utilisation
          continue de Kinaru après modification vaut acceptation des nouvelles
          Conditions.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">19. Droit applicable</h3>

        <p>
          Les présentes Conditions sont régies par les lois applicables au
          Cameroun.
        </p>

        <p>
          En cas de litige, les parties chercheront d'abord une résolution
          amiable. À défaut, le litige pourra être porté devant les juridictions
          compétentes.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">20. Contact</h3>

        <p>
          Pour toute question relative aux présentes Conditions d'Utilisation,
          vous pouvez contacter Kinaru :
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
            <a href="https://www.kinaru.app/contact" className="text-blue-600">
              https://www.kinaru.app/contact
            </a>
          </li>

          <li>
            <strong>Adresse</strong> : Kinaru, Douala, Cameroun
          </li>
        </ul>
      </section>
    </div>
  );
}