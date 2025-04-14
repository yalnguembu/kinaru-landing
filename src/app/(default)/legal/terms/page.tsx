export default function TermsScreen() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Conditions d'Utilisation</h2>
        <p className="text-sm text-gray-600">Dernière mise à jour: 11 avril 2025</p>
        
        <div>
          <p>
            Bienvenue sur Kinaru. Ces conditions d'utilisation constituent un accord juridique entre vous 
            et Sprinter IT concernant l'utilisation de notre application mobile Kinaru et des services associés.
            En utilisant notre Service, vous acceptez ces conditions dans leur intégralité.
          </p>
        </div>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Utilisation du Service</h3>
          <div>
            <p>En utilisant Kinaru, vous acceptez de :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fournir des informations exactes, complètes et à jour lors de la création de votre compte.</li>
              <li>Maintenir la confidentialité de vos identifiants de connexion et assumer l'entière responsabilité des activités effectuées sous votre compte.</li>
              <li>Utiliser le Service conformément aux lois et réglementations applicables au Cameroun et dans votre pays de résidence.</li>
              <li>Ne pas utiliser le Service à des fins illégales ou non autorisées.</li>
              <li>Ne pas tenter d'accéder à des parties du Service auxquelles vous n'êtes pas autorisé à accéder.</li>
            </ul>
          </div>
        </section>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Comptes et Authentification</h3>
          <div>
            <p>Pour utiliser certaines fonctionnalités de Kinaru, vous devez créer un compte et compléter le processus d'authentification:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>L'authentification peut nécessiter la vérification de votre identité via des documents officiels.</li>
              <li>Vous êtes responsable de maintenir la confidentialité de vos informations d'identification.</li>
              <li>Vous acceptez de nous notifier immédiatement en cas d'utilisation non autorisée de votre compte.</li>
              <li>Nous nous réservons le droit de refuser l'accès, de suspendre ou de résilier des comptes sans préavis.</li>
            </ul>
          </div>
        </section>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Propriété Intellectuelle</h3>
          <div>
            <p>
              Tous les droits de propriété intellectuelle relatifs au Service sont la propriété de Sprinter IT ou de ses concédants de licence.
              Aucune disposition des présentes Conditions ne vous confère de droits d'utilisation des marques commerciales, logos, 
              noms de domaine ou autres caractéristiques distinctives de la marque Kinaru.
            </p>
          </div>
        </section>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Limitation de Responsabilité</h3>
          <div>
            <p>
              Dans toute la mesure permise par la loi applicable, Sprinter IT ne pourra être tenu responsable des dommages 
              indirects, accessoires, spéciaux, consécutifs ou punitifs, ni des pertes de bénéfices ou de revenus, 
              qu'ils soient encourus directement ou indirectement, ni de toute perte de données, d'utilisation, 
              de fonds de commerce ou d'autres pertes intangibles.
            </p>
          </div>
        </section>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Modifications des Conditions</h3>
          <div>
            <p>
              Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications substantielles 
              seront notifiées par email ou via une notification dans l'application. Votre utilisation continue du Service 
              après ces modifications constitue votre acceptation des nouvelles conditions.
            </p>
          </div>
        </section>
        
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Contact</h3>
          <div>
            <p>Pour toute question concernant ces conditions d'utilisation :</p>
            <ul className="list-none space-y-1">
              <li>Email : <a href="mailto:sprinteragenceit@gmail.com" className="text-blue-600">sprinteragenceit@gmail.com</a></li>
              <li>Site web : <a href="https://www.kinaru.app/contact" className="text-blue-600">https://www.kinaru.app/contact</a></li>
            </ul>
          </div>
        </section>
      </div>
    );
  }