import { Metadata } from "next";
import DownloadPageContent from ".";
import { getAbsoluteUrl } from "@/constants";

export const metadata: Metadata = {
  title: "Télécharger Kinaru | Application disponible sur iOS et Android",
  description:
    "Téléchargez l'application Kinaru sur votre smartphone iOS ou Android et profitez de toutes ses fonctionnalités innovantes dès maintenant. Gérez facilement vos biens immobiliers au Cameroun.",
  keywords:
    "Kinaru, téléchargement app, application mobile, iOS, Android, App Store, Google Play, appli immobilière, télécharger Kinaru Cameroun",
  openGraph: {
    title: "Télécharger l'application Kinaru pour iOS et Android",
    description: "Accédez à la plateforme immobilière révolutionnaire du Cameroun. Téléchargez Kinaru dès maintenant et simplifiez votre expérience immobilière.",
    url: getAbsoluteUrl('download'),
    siteName: "Kinaru",
    images: [
      {
        url: getAbsoluteUrl('images/download-og.jpg'),
        width: 1200,
        height: 630,
        alt: "Télécharger Kinaru",
      }
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Télécharger l'application Kinaru pour iOS et Android",
    description: "Accédez à la plateforme immobilière révolutionnaire du Cameroun. Téléchargez Kinaru dès maintenant et simplifiez votre expérience immobilière.",
    images: [getAbsoluteUrl('images/download-twitter.jpg')],
    creator: "@KinaruApp",
    site: "@KinaruApp"
  }
};

export default function DownloadPage() {
  return <DownloadPageContent />;
}
