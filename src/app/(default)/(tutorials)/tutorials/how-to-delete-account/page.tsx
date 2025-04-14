import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment supprimer votre compte | Kinaru",
  description:
    "Guide étape par étape sur la suppression de votre compte locataire ou propriétaire sur Kinaru",
};

// Reusable components
const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center mb-6">
    <div className="bg-purple-600 h-8 w-1 mr-3 rounded-full"></div>
    <h2 className="text-2xl font-bold">{title}</h2>
  </div>
);

const TutorialStep = ({
  step,
  title,
  description,
  imageSrc,
  imageAlt,
  warning,
}: {
  step: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  warning?: string;
}) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 last:mb-0">
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-4">
        Étape {step}: {title}
      </h3>
      <p className="mb-4">{description}</p>

      {warning && (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
          <p className="text-amber-800 font-medium">⚠️ {warning}</p>
        </div>
      )}

      <div className="bg-gray-100 p-4 rounded-lg mb-4 flex justify-center">
        <div className="relative h-64 w-full max-w-md">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            objectFit="cover"
            className="object-contain rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
);

// Data for tutorial steps
const tenantSteps = [
  {
    title: "Trouver la gestion de compte",
    description:
      'Faites défiler vers le bas pour trouver la section "Gestion du compte" en bas de la page.',
    imageSrc: "/assets/images/tutorials/delete-account/tenant/1.jpg",
    imageAlt: "Capture d'écran montrant la section de gestion du compte",
  },
  {
    title: "Accéder aux paramètres du compte",
    description:
      "Connectez-vous à votre compte Kinaru et accédez aux paramètres de votre profil en cliquant sur votre avatar dans le coin supérieur droit.",
    imageSrc: "/assets/images/tutorials/delete-account/tenant/2.jpg",
    imageAlt:
      "Capture d'écran montrant comment accéder aux paramètres du compte",
  },
  {
    title: "Supprimer le compte",
    description:
      'Cliquez sur "Supprimer le compte", consultez les informations et confirmez en saisissant votre mot de passe.',
    imageSrc: "/assets/images/tutorials/delete-account/tenant/3.jpg",
    imageAlt:
      "Capture d'écran montrant la confirmation de suppression de compte",
    warning:
      "Attention : Cette action est irréversible. Toutes vos données seront définitivement supprimées.",
  },
  {
    title: "Confirmer la suppression",
    description:
      'Cliquez sur "Supprimer le compte", consultez les informations et confirmez en saisissant votre mot de passe.',
    imageSrc: "/assets/images/tutorials/delete-account/tenant/4.jpg",
    imageAlt:
      "Capture d'écran montrant la confirmation de suppression de compte",
    warning:
      "Attention : Cette action est irréversible. Toutes vos données seront définitivement supprimées.",
  },
];

const ownerSteps = [
  {
    title: "Accéder aux paramètres du tableau de bord",
    description:
      'Connectez-vous à votre tableau de bord de propriétaire et cliquez sur "Paramètres" dans le menu de navigation à gauche.',
    imageSrc: "/assets/images/tutorials/delete-account/owner/2.jpg",
    imageAlt:
      "Capture d'écran montrant comment accéder aux paramètres du tableau de bord du propriétaire",
  },
  {
    title: "Supprimer le compte",
    description:
      'Cliquez sur "Supprimer le compte", consultez les informations et confirmez en saisissant votre mot de passe.',
    imageSrc: "/assets/images/tutorials/delete-account/tenant/3.jpg",
    imageAlt:
      "Capture d'écran montrant la confirmation de suppression de compte",
    warning:
      "Attention : Cette action est irréversible. Toutes vos données seront définitivement supprimées.",
  },
  {
    title: "Confirmer la suppression",
    description:
      'Cliquez sur "Supprimer le compte", consultez les informations et confirmez en saisissant votre mot de passe.',
    imageSrc: "/assets/images/tutorials/delete-account/tenant/4.jpg",
    imageAlt:
      "Capture d'écran montrant la confirmation de suppression de compte",
    warning:
      "Attention : Cette action est irréversible. Toutes vos données seront définitivement supprimées.",
  },
];

export default function HowToDeleteAccountScreen() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Comment supprimer votre compte Kinaru
        </h1>
        <p className="text-lg text-gray-600">
          Un guide complet pour les locataires et les propriétaires
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="prose max-w-none">
          <p className="text-lg">
            Nous sommes désolés de vous voir partir. Ce guide vous expliquera
            comment supprimer votre compte Kinaru, que vous soyez locataire ou
            propriétaire.
          </p>
        </div>
      </div>

      {/* Tenant Section */}
      <div className="mb-12">
        <SectionHeader title="Pour les locataires" />

        {tenantSteps.map((step, index) => (
          <TutorialStep
            key={`tenant-step-${index + 1}`}
            step={index + 1}
            title={step.title}
            description={step.description}
            imageSrc={step.imageSrc}
            imageAlt={step.imageAlt}
            warning={step.warning}
          />
        ))}
      </div>

      {/* Property Owner Section */}
      <div className="mb-12">
        <SectionHeader title="Pour les propriétaires" />

        {ownerSteps.map((step, index) => (
          <TutorialStep
            key={`owner-step-${index + 1}`}
            step={index + 1}
            title={step.title}
            description={step.description}
            imageSrc={step.imageSrc}
            imageAlt={step.imageAlt}
            warning={step.warning}
          />
        ))}
      </div>

      {/* Help Section */}
      <div className="bg-purple-50 rounded-xl shadow-md overflow-hidden p-6">
        <h2 className="text-xl font-bold mb-4">
          Besoin d'aide supplémentaire ?
        </h2>
        <p className="mb-4">
          Si vous rencontrez des difficultés pour supprimer votre compte, notre
          équipe d'assistance est là pour vous aider.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Contacter le support
        </Link>
      </div>
    </div>
  );
}
