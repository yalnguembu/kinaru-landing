import { Metadata } from "next";
import DownloadPageContent from ".";

export const metadata: Metadata = {
  title: "Télécharger Kinaru | Application disponible sur iOS et Android",
  description:
    "Téléchargez l'application Kinaru sur votre smartphone iOS ou Android et profitez de toutes ses fonctionnalités innovantes dès maintenant.",
  keywords:
    "Kinaru, téléchargement app, application mobile, iOS, Android, App Store, Google Play",
};

export default function DownloadPage() {
  return <DownloadPageContent />;
}
