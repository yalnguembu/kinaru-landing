import {Metadata} from "next";
import ContactContent from "@/app/(default)/contact/contact";

export const metadata: Metadata = {
    title: 'Contact | Kinaru - Assistance et Support Client',
    description: 'Contactez l\'équipe Kinaru pour toute question, suggestion ou assistance technique. Nous sommes à votre disposition pour vous aider avec notre plateforme immobilière.',
    keywords: 'contact Kinaru, support client, assistance technique, aide Kinaru, service client immobilier, contacter Kinaru Cameroun, numéro support',
    openGraph: {
        title: 'Contactez l\'équipe Kinaru',
        description: 'Besoin d\'aide ou d\'informations ? Notre équipe est à votre disposition pour répondre à toutes vos questions sur notre plateforme immobilière.',
        url: 'https://www.kinaru.app/contact',
        siteName: 'Kinaru',
        images: [
            {
                url: 'https://www.kinaru.app/images/contact-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Contact Kinaru',
            }
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contactez l\'équipe Kinaru',
        description: 'Besoin d\'aide ou d\'informations ? Notre équipe est à votre disposition pour répondre à toutes vos questions sur notre plateforme immobilière.',
        images: ['https://www.kinaru.app/images/contact-twitter.jpg'],
        creator: '@KinaruApp',
        site: '@KinaruApp'
    }
}

export default function Contact() {
  return (
      <ContactContent />
  )
}
