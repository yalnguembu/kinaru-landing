export default function PrivacyScreen() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Politique de Confidentialité</h2>
        <p className="text-sm text-gray-600">Dernière mise à jour: 11 avril 2025</p>
        
        <div>
          <p>
            Chez Sprinter IT, nous nous engageons à protéger votre vie privée. Cette politique de confidentialité 
            explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous 
            utilisez notre application mobile Kinaru (ci-après dénommée "Service"). Elle vous informe également 
            de vos droits en matière de confidentialité et de la manière dont la loi vous protège.
          </p>
        </div>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Interprétation et définitions</h3>
          <div>
            <h4 className="font-medium">Définitions</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Compte :</strong> Un compte unique créé pour vous permettre d'accéder à notre Service.</li>
              <li><strong>Société :</strong> Sprinter IT, basée à Douala, Cameroun.</li>
              <li><strong>Application :</strong> Kinaru, le logiciel mobile fourni par la Société.</li>
              <li><strong>Pays :</strong> Cameroun.</li>
              <li><strong>Données personnelles :</strong> Toute information permettant d'identifier une personne physique.</li>
              <li><strong>Service :</strong> L'application Kinaru.</li>
              <li><strong>Vous :</strong> L'utilisateur individuel ou l'entité au nom de laquelle le Service est utilisé.</li>
            </ul>
          </div>
        </section>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Collecte et utilisation de vos données personnelles</h3>
          <div>
            <h4 className="font-medium">Types de données collectées</h4>
            <p className="font-medium mt-4">Données personnelles</p>
            <p>Lorsque vous utilisez Kinaru, nous pouvons collecter les informations suivantes avec votre consentement explicite :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identifiants personnels :</strong> Prénom, nom, adresse e-mail, numéro de téléphone.</li>
              <li><strong>Adresse physique :</strong> Adresse complète pour associer votre profil ou vos certificats de propriété.</li>
              <li><strong>Documents d'identification :</strong> Photos d'identité, photo de profil, certificats de propriété.</li>
              <li><strong>Localisation :</strong> Coordonnées GPS pour valider votre adresse (optionnel).</li>
            </ul>
            
            <p className="font-medium mt-4">Données d'utilisation</p>
            <p>Nous collectons automatiquement :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adresse IP, système d'exploitation, identifiants de l'appareil.</li>
              <li>Pages visitées, heure et date des visites, durée d'utilisation.</li>
            </ul>
          </div>
        </section>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Utilisation de vos données personnelles</h3>
          <div>
            <p>Nous utilisons vos données pour :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fournir et maintenir le Service (vérification d'identité, gestion des certificats).</li>
              <li>Gérer votre compte et exécuter nos obligations contractuelles.</li>
              <li>Vous contacter pour des mises à jour ou informations importantes.</li>
              <li>Améliorer le Service en analysant les tendances d'utilisation.</li>
              <li>Respecter nos obligations légales.</li>
            </ul>
            <p className="font-medium mt-2">Nous ne vendons pas vos données personnelles à des tiers.</p>
          </div>
        </section>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Contactez-nous</h3>
          <div>
            <p>Pour toute question concernant cette politique ou vos données :</p>
            <ul className="list-none space-y-1">
              <li>Email : <a href="mailto:sprinteragenceit@gmail.com" className="text-blue-600">sprinteragenceit@gmail.com</a></li>
              <li>Site web : <a href="https://www.kinaru.app/contact" className="text-blue-600">https://www.kinaru.app/contact</a></li>
              <li>Adresse : Sprinter IT, Douala, Cameroun</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }