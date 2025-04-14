import {Metadata} from "next";
import { getAbsoluteUrl } from "@/constants";

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Kinaru - Protection de vos données',
  description: 'Découvrez comment Kinaru protège vos données personnelles. Notre politique de confidentialité détaille la collecte, l\'utilisation et la protection de vos informations.',
  keywords: 'politique confidentialité Kinaru, protection données, RGPD Cameroun, vie privée application, sécurité données personnelles, confidentialité immobilier',
  openGraph: {
    title: 'Politique de Confidentialité Kinaru',
    description: 'Comment Kinaru protège vos données personnelles et respecte votre vie privée lors de l\'utilisation de notre plateforme immobilière.',
    url: getAbsoluteUrl('legal/privacy'),
    siteName: 'Kinaru',
    images: [
      {
        url: getAbsoluteUrl('images/privacy-og.jpg'),
        width: 1200,
        height: 630,
        alt: 'Politique de confidentialité Kinaru',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Politique de Confidentialité Kinaru',
    description: 'Comment Kinaru protège vos données personnelles et respecte votre vie privée lors de l\'utilisation de notre plateforme immobilière.',
    images: [getAbsoluteUrl('images/privacy-twitter.jpg')],
    creator: '@KinaruApp',
    site: '@KinaruApp'
  }
}

export default function PrivacyScreen() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Politique de confidentialité de Kinaru</h2>
      <p className="text-sm text-gray-600">Dernière mise à jour : 11 avril 2025</p>
      
      <div>
        <p>
          Chez Sprinter IT, nous nous engageons à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez notre application mobile Kinaru (ci-après dénommée "Service"). Elle vous informe également de vos droits en matière de confidentialité et de la manière dont la loi vous protège. En utilisant le Service, vous acceptez les pratiques décrites dans cette politique.
        </p>
      </div>
      
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Interprétation et définitions</h3>
        <div>
          <h4 className="font-medium">Interprétation</h4>
          <p>Les mots commençant par une majuscule ont des significations spécifiques définies ci-dessous. Ces définitions s'appliquent au singulier comme au pluriel.</p>
          
          <h4 className="font-medium mt-4">Définitions</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Compte</strong> : Un compte unique créé pour vous permettre d'accéder à notre Service ou à certaines de ses fonctionnalités.</li>
            <li><strong>Société</strong> (également appelée "Nous", "Notre", "Nos") : Sprinter IT, basée à Douala, Cameroun.</li>
            <li><strong>Application</strong> : Kinaru, le logiciel mobile fourni par la Société.</li>
            <li><strong>Pays</strong> : Cameroun.</li>
            <li><strong>Appareil</strong> : Tout dispositif utilisé pour accéder au Service (smartphone, tablette, etc.).</li>
            <li><strong>Données personnelles</strong> : Toute information permettant d'identifier une personne physique.</li>
            <li><strong>Service</strong> : L'application Kinaru.</li>
            <li><strong>Prestataire de services</strong> : Toute entité ou personne traitant des données pour le compte de la Société.</li>
            <li><strong>Données d'utilisation</strong> : Données collectées automatiquement lors de l'utilisation du Service (par exemple, durée de visite, adresse IP).</li>
            <li><strong>Vous</strong> : L'utilisateur individuel ou l'entité au nom de laquelle le Service est utilisé.</li>
          </ul>
        </div>
      </section>
      
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Collecte et utilisation de vos données personnelles</h3>
        <div>
          <h4 className="font-medium">Types de données collectées</h4>
          
          <h5 className="font-medium mt-3">Données personnelles</h5>
          <p>Lorsque vous utilisez Kinaru, nous pouvons collecter les informations suivantes avec votre consentement explicite :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identifiants personnels</strong> : Prénom, nom, adresse e-mail, numéro de téléphone (fournis lors de la création ou de la mise à jour de votre profil).</li>
            <li><strong>Adresse physique</strong> : Adresse complète (rue, ville, province, code postal) pour associer votre profil ou vos certificats de propriété à une localisation.</li>
            <li><strong>Documents d'identification</strong> :
              <ul className="list-disc pl-6 mt-1">
                <li>Photos de votre carte nationale d'identité (recto et verso) pour vérifier votre identité.</li>
                <li>Photo de profil pour personnaliser votre compte.</li>
                <li>Certificats de propriété (images ou fichiers PDF) pour associer des biens à votre compte.</li>
              </ul>
            </li>
            <li><strong>Localisation</strong> : Coordonnées GPS (latitude et longitude) pour valider votre adresse ou associer une position géographique à vos certificats (optionnel).</li>
          </ul>
          
          <h5 className="font-medium mt-3">Données d'utilisation</h5>
          <p>Nous collectons automatiquement :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Adresse IP, type et version du système d'exploitation, identifiants uniques de l'appareil (par exemple, identifiant publicitaire).</li>
            <li>Pages visitées, heure et date des visites, durée d'utilisation.</li>
          </ul>
          
          <h5 className="font-medium mt-3">Données spécifiques à l'application</h5>
          <p>Avec votre autorisation préalable via les paramètres de votre appareil :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Caméra</strong> : Pour capturer des photos de votre carte d'identité, de votre profil ou de certificats de propriété.</li>
            <li><strong>Images et photos (galerie)</strong> : Pour vous permettre de sélectionner des photos ou certificats depuis votre appareil.</li>
            <li><strong>Localisation</strong> : Pour associer une position géographique à votre adresse ou à vos certificats (uniquement en avant-plan).</li>
          </ul>
          <p>Ces données sont soit stockées localement sur votre appareil, soit téléchargées sur nos serveurs sécurisés (Firebase) pour fournir les fonctionnalités du Service. Vous pouvez révoquer ces autorisations à tout moment dans les paramètres de votre appareil.</p>
        </div>
      </section>
      
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Utilisation de vos données personnelles</h3>
        <div>
          <p>Nous utilisons vos données pour :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Fournir et maintenir le Service</strong> :
              <ul className="list-disc pl-6 mt-1">
                <li>Vérifier votre identité via vos photos et documents.</li>
                <li>Associer des certificats de propriété à votre compte.</li>
                <li>Assurer la stabilité et la sécurité via la surveillance de l'utilisation.</li>
              </ul>
            </li>
            <li><strong>Gérer votre compte</strong> : Permettre l'inscription et l'accès aux fonctionnalités réservées aux utilisateurs enregistrés.</li>
            <li><strong>Exécuter un contrat</strong> : Traiter vos demandes (par exemple, validation de profil ou ajout de certificats).</li>
            <li><strong>Vous contacter</strong> : Par e-mail, SMS ou notifications push pour des mises à jour, alertes de sécurité ou informations sur le Service.</li>
            <li><strong>Améliorer le Service</strong> : Analyser les tendances d'utilisation pour optimiser les fonctionnalités et l'expérience utilisateur.</li>
            <li><strong>Respecter les obligations légales</strong> : Conserver les données nécessaires pour se conformer aux lois applicables au Cameroun ou dans d'autres juridictions où le Service est utilisé.</li>
          </ul>
          <p className="font-medium mt-2">Nous ne vendons pas vos données personnelles à des tiers.</p>
        </div>
      </section>
      
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Partage de vos données personnelles</h3>
        <div>
          <p>Nous pouvons partager vos données dans les cas suivants :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Avec des prestataires de services</strong> :
              <ul className="list-disc pl-6 mt-1">
                <li>Hébergement des données sur Firebase (Google Cloud), basé aux États-Unis.</li>
                <li>Analyse des performances via Firebase Analytics.</li>
              </ul>
              <p className="mt-1">Ces prestataires sont contractuellement tenus de protéger vos données et de respecter les lois applicables.</p>
            </li>
            <li><strong>Avec des partenaires commerciaux</strong> : Pour des fonctionnalités spécifiques (par exemple, validation de documents par des tiers), uniquement avec votre consentement explicite.</li>
            <li><strong>En cas de transfert d'entreprise</strong> : Lors d'une fusion, acquisition ou vente d'actifs, vos données peuvent être transférées, avec notification préalable.</li>
            <li><strong>Pour des raisons légales</strong> : Si requis par la loi, une autorité judiciaire, ou pour protéger nos droits, notre propriété ou la sécurité des utilisateurs.</li>
          </ul>
        </div>
      </section>
      
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Conservation et transfert de vos données personnelles</h3>
        <div>
          <h4 className="font-medium">Conservation</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Les données personnelles (profil, documents) sont conservées tant que votre compte est actif ou aussi longtemps que nécessaire pour fournir le Service.</li>
            <li>En cas de suppression de compte, les données sont effacées dans un délai de 30 jours, sauf obligation légale contraire.</li>
            <li>Données d'utilisation : Conservées pour une durée maximale de 12 mois à des fins d'analyse, sauf si une conservation prolongée est requise pour la sécurité ou par la loi.</li>
          </ul>
          
          <h4 className="font-medium mt-3">Transfert</h4>
          <p>Vos données sont principalement traitées au Cameroun, mais peuvent être transférées vers des serveurs situés à l'étranger (par exemple, États-Unis via Firebase).</p>
          <p>Nous utilisons des mesures de sécurité conformes aux normes internationales :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cryptage SSL pour les transferts de données.</li>
            <li>Contrôle d'accès strict sur nos serveurs.</li>
          </ul>
          <p>Si vous utilisez Kinaru depuis l'Union européenne, nous respectons le Règlement Général sur la Protection des Données (RGPD) pour garantir vos droits.</p>
        </div>
      </section>
      
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Vos droits et sécurité</h3>
        <div>
          <h4 className="font-medium">Vos droits sur vos données personnelles</h4>
          <p>Vous avez les droits suivants :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Accès</strong> : Consulter les données que nous détenons sur vous via votre compte ou en nous contactant.</li>
            <li><strong>Rectification</strong> : Mettre à jour vos informations dans l'application ou en nous contactant.</li>
            <li><strong>Suppression</strong> : Demander la suppression de votre compte et de vos données (sauf obligations légales) via l'application ou par e-mail.</li>
            <li><strong>Restriction</strong> : Limiter l'utilisation de vos données dans certains cas (par exemple, pendant une vérification).</li>
            <li><strong>Portabilité</strong> : Obtenir une copie de vos données dans un format structuré (JSON ou CSV).</li>
            <li><strong>Opposition</strong> : Refuser certaines utilisations, comme les notifications marketing.</li>
          </ul>
          <p>Pour exercer ces droits, contactez-nous à : <a href="mailto:sprinteragenceit@gmail.com" className="text-blue-600">sprinteragenceit@gmail.com</a></p>
          
          <h4 className="font-medium mt-3">Sécurité de vos données personnelles</h4>
          <p>Nous utilisons des mesures techniques et organisationnelles :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cryptage des données en transit et au repos (via Firebase).</li>
            <li>Pare-feu et audits réguliers pour détecter les vulnérabilités.</li>
          </ul>
          <p>Cependant, aucune méthode n'est infaillible. En cas de violation de données, nous vous informerons dans les 72 heures, conformément aux lois applicables (ex. : RGPD), et prendrons des mesures pour limiter les risques.</p>
        </div>
      </section>
      
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Informations complémentaires</h3>
        <div>
          <h4 className="font-medium">Confidentialité des enfants</h4>
          <p>Kinaru n'est pas destiné aux enfants de moins de 13 ans.</p>
          <p>Nous ne collectons pas sciemment de données personnelles d'enfants sans le consentement parental vérifiable. Si vous êtes un parent et pensez que votre enfant nous a fourni des données, contactez-nous pour leur suppression immédiate.</p>
          
          <h4 className="font-medium mt-3">Cookies et technologies similaires</h4>
          <p>Kinaru n'utilise pas de cookies dans l'application mobile.</p>
          <p>Nous utilisons des technologies similaires :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Firebase Analytics : Pour collecter des données d'utilisation (pages visitées, erreurs d'application).</li>
            <li>Identifiants d'appareil : Pour assurer la sécurité et personnaliser votre expérience.</li>
          </ul>
          <p>Vous pouvez désactiver la collecte de données analytiques dans les paramètres de votre appareil ou via les options de l'application (si disponibles).</p>
          
          <h4 className="font-medium mt-3">Modifications de cette politique</h4>
          <p>Nous mettrons à jour cette politique si nécessaire. Les changements seront publiés ici avec une nouvelle date de "Dernière mise à jour".</p>
          <p>Pour les modifications importantes (ex. : nouvelle collecte de données), nous vous informerons par e-mail ou via une notification dans l'application au moins 7 jours avant leur entrée en vigueur.</p>
        </div>
      </section>
      
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Contactez-nous</h3>
        <div>
          <p>Pour toute question, demande ou préoccupation concernant cette politique ou vos données :</p>
          <ul className="list-none space-y-1">
            <li><strong>Email</strong> : <a href="mailto:sprinteragenceit@gmail.com" className="text-blue-600">sprinteragenceit@gmail.com</a></li>
            <li><strong>Site web</strong> : <a href="https://www.kinaru.app/contact" className="text-blue-600">https://www.kinaru.app/contact</a></li>
            <li><strong>Adresse physique</strong> : Sprinter IT, Douala, Cameroun</li>
          </ul>
        </div>
      </section>
    </div>
  );
}