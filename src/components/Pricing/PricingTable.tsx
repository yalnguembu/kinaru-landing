import { Pricing } from "@/types";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useMemo, useState } from "react";

export type PricingTableProps = {
  prices: Pricing[];
};

const pricingData = {
  locataire: [
    {
      name: "Gratuit",
      price: "0",
      features: {
        properties: "5 propriétés/mois",
        virtualVisits: "Accès limité",
        advanced: false,
        priority: false,
        support: "Standard",
      },
    },
    {
      name: "Standard",
      price: "800",
      trimestriel: "2 000",
      features: {
        properties: "Illimité",
        virtualVisits: "5 visites/mois",
        advanced: true,
        priority: false,
        support: "Prioritaire",
      },
    },
    {
      name: "Premium",
      price: "1 500",
      trimestriel: "4 000",
      features: {
        properties: "Illimité",
        virtualVisits: "Illimité (3D)",
        advanced: true,
        priority: true,
        support: "24/7",
      },
    },
  ],
  proprietaire: [
    {
      name: "Gratuit",
      price: "0",
      features: {
        properties: "1 bien",
        contracts: "Contrats simples",
        analytics: "Basique",
        ai: false,
        commission: "3%",
      },
    },
    {
      name: "Standard",
      price: "3 000",
      trimestriel: "8 000",
      features: {
        properties: "10 biens",
        contracts: "Personnalisés",
        analytics: "Détaillés",
        ai: false,
        commission: "3%",
      },
    },
    {
      name: "Premium",
      price: "7 000",
      trimestriel: "18 000",
      features: {
        properties: "Illimité",
        contracts: "Premium",
        analytics: "Avancés",
        ai: true,
        commission: "0%",
      },
    },
  ],
  agence: [
    {
      name: "Gratuit",
      price: "0",
      features: {
        properties: "2 biens",
        marketing: "Non",
        agents: "1 agent",
        analytics: "Limité",
        advanced: false,
      },
    },
    {
      name: "Standard",
      price: "8 000",
      trimestriel: "20 000",
      features: {
        properties: "50 biens",
        marketing: "1 campagne/mois",
        agents: "5 agents",
        analytics: "Détaillé",
        advanced: false,
      },
    },
    {
      name: "Premium",
      price: "20 000",
      trimestriel: "50 000",
      features: {
        properties: "Illimité",
        marketing: "Illimité",
        agents: "Illimité",
        analytics: "Avancé + CRM",
        advanced: true,
      },
    },
  ],
};

export default function PricingTable({ prices }: PricingTableProps) {
  const [userType, setUserType] = useState<
    "locataire" | "proprietaire" | "agence"
  >("locataire");

  const selectedPricing = useMemo(() => pricingData[userType], [userType]);

  // Rendu des caractéristiques selon le type d'utilisateur
  const renderFeatureRows = () => {
    if (userType === "locataire") {
      return (
        <>
          <tr>
            <th>Recherche de propriétés</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>{plan.features.properties}</td>
            ))}
          </tr>
          <tr>
            <th>Visites virtuelles</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>{plan.features.virtualVisits}</td>
            ))}
          </tr>
          <tr>
            <th>Filtres avancés</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>
                {plan.features.advanced ? (
                  <FaCheckCircle color="var(--primary-color)" />
                ) : (
                  <FaTimesCircle color="red" />
                )}
              </td>
            ))}
          </tr>
          <tr>
            <th>Priorité dans les recherches</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>
                {plan.features.priority ? (
                  <FaCheckCircle color="var(--primary-color)" />
                ) : (
                  <FaTimesCircle color="red" />
                )}
              </td>
            ))}
          </tr>
          <tr>
            <th>Support client</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>{plan.features.support}</td>
            ))}
          </tr>
        </>
      );
    } else if (userType === "proprietaire") {
      return (
        <>
          <tr>
            <th>Gestion des biens</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>{plan.features.properties}</td>
            ))}
          </tr>
          <tr>
            <th>Contrats</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>{plan.features.contracts}</td>
            ))}
          </tr>
          <tr>
            <th>Analyses et statistiques</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>{plan.features.analytics}</td>
            ))}
          </tr>
          <tr>
            <th>IA prédictive</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>
                {plan.features.ai ? (
                  <FaCheckCircle color="var(--primary-color)" />
                ) : (
                  <FaTimesCircle color="red" />
                )}
              </td>
            ))}
          </tr>
          <tr>
            <th>Commission sur loyers</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>{plan.features.commission}</td>
            ))}
          </tr>
        </>
      );
    } else {
      return (
        <>
          <tr>
            <th>Gestion des biens</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>{plan.features.properties}</td>
            ))}
          </tr>
          <tr>
            <th>Campagnes marketing</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>{plan.features.marketing}</td>
            ))}
          </tr>
          <tr>
            <th>Accès multi-agents</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>{plan.features.agents}</td>
            ))}
          </tr>
          <tr>
            <th>Statistiques</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>{plan.features.analytics}</td>
            ))}
          </tr>
          <tr>
            <th>Visibilité boostée</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>
                {plan.features.advanced ? (
                  <FaCheckCircle color="var(--primary-color)" />
                ) : (
                  <FaTimesCircle color="red" />
                )}
              </td>
            ))}
          </tr>
        </>
      );
    }
  };

  return (
    <div>
      <div className="flex justify-center mb-6 bg-gray-100 p-2 rounded-lg mx-auto">
        <button
          className={`px-4 py-2 rounded-lg ${
            userType === "locataire"
              ? "bg-primary text-white"
              : "bg-transparent"
          }`}
          onClick={() => setUserType("locataire")}
        >
          Locataires
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            userType === "proprietaire"
              ? "bg-primary text-white"
              : "bg-transparent"
          }`}
          onClick={() => setUserType("proprietaire")}
        >
          Propriétaires
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            userType === "agence" ? "bg-primary text-white" : "bg-transparent"
          }`}
          onClick={() => setUserType("agence")}
        >
          Agences
        </button>
      </div>

      <table className="table-horizontal w-full text-left">
        <tbody>
          <tr>
            <th>Forfait</th>
            {selectedPricing.map((plan, index) => (
              <td key={index}>
                <div className="flex flex-col mb-5">
                  <h3 className="text-xl">{plan.name}</h3>
                  <span className="text-primary my-3">
                    <span className="text-3xl font-bold">{plan.price}</span> XAF
                    <span className="block text-sm text-gray-600">
                      par mois
                    </span>
                  </span>
                  {plan.trimestriel && (
                    <span className="text-sm text-gray-600 mb-3">
                      ou {plan.trimestriel} XAF/trimestre
                    </span>
                  )}
                  {/* <a
                    href="#"
                    className={`btn-action ${
                      plan.name === "Premium"
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : ""
                    }`}
                  >
                    Souscrire
                  </a> */}
                </div>
              </td>
            ))}
          </tr>

          {renderFeatureRows()}

          <tr>
            <th>Paiement</th>
            <td colSpan={3} className="text-sm">
              Via MTN Mobile Money, Orange Money ou carte bancaire.
              Micro-paiements disponibles (ex: 100 XAF/jour pour le forfait
              Standard).
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
