"use client";

import { useMemo, useState } from "react";
import { pricingData } from "./data";

export default function PricingTable() {
  const [userType, setUserType] = useState<
    "locataire" | "proprietaire" | "agence"
  >("locataire");

  const [billingPeriod, setBillingPeriod] = useState<
    "monthly" | "quarterly" | "annual"
  >("monthly");

  const selectedPricing = useMemo(() => pricingData[userType], [userType]);

  const getPriceDisplay = (plan: any) => {
    switch (billingPeriod) {
      case "quarterly":
        return plan.quarterly;
      case "annual":
        return plan.annual;
      default:
        return plan.price;
    }
  };

  const getPeriodLabel = () => {
    switch (billingPeriod) {
      case "quarterly":
        return "par trimestre";
      case "annual":
        return "par an";
      default:
        return "par mois";
    }
  };

  // Configuration de la structure des fonctionnalités pour chaque type d'utilisateur
  const featureConfig = {
    locataire: [
      { key: "properties", label: "Propriétés" },
      { key: "chat", label: "Chat" },
      { key: "contracts", label: "Contrats" },
      { key: "virtualVisits", label: "Visites virtuelles" },
      { key: "physicalVisits", label: "Visites physiques" },
      { key: "assistance", label: "Assistance KIA" },
      { key: "forum", label: "Forum" },
    ],
    proprietaire: [
      { key: "properties", label: "Gestion des biens" },
      { key: "storage", label: "Stockage" },
      { key: "contracts", label: "Contrats" },
      { key: "reservations", label: "Réservations" },
      { key: "payments", label: "Gestion des paiements" },
      { key: "stats", label: "Statistiques" },
      { key: "ranking", label: "Référencement" },
    ],
    agence: [
      { key: "properties", label: "Gestion des biens" },
      { key: "storage", label: "Stockage" },
      { key: "team", label: "Équipe" },
      { key: "contracts", label: "Contrats" },
      { key: "reservations", label: "Réservations" },
      { key: "advertising", label: "Marketing" },
      { key: "stats", label: "Statistiques" },
      { key: "support", label: "Support" },
    ],
  };

  // Fonction générique pour créer une ligne du tableau
  const renderTableRow = (feature: { key: string; label: string }) => {
    return (
      <tr key={feature.key} className="border-b border-gray-100">
        <th className="py-3 px-4 text-left bg-gray-50 border-r border-gray-200 w-1/4 max-w-[250px]">
          {feature.label}
        </th>
        {selectedPricing.map((plan, index) => (
          <td
            key={index}
            className={`py-3 px-4 text-right ${
              index < 2 ? "border-r border-gray-200" : ""
            } w-1/4 max-w-[250px]`}
          >
            {plan.features[feature.key] || "-"}
          </td>
        ))}
      </tr>
    );
  };

  const renderFeatureRows = () => {
    const filteredFeatures = featureConfig[userType].filter((feature) =>
      selectedPricing.some((plan) => plan.features[feature.key])
    );

    return <>{filteredFeatures.map((feature) => renderTableRow(feature))}</>;
  };

  return (
    <div className="pricing-container">
      <div className="max-w-4xl mx-auto mb-10">
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-center text-lg font-medium text-gray-700">
              Choisissez votre profil
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { type: "locataire", label: "Locataires", icon: "🏠" },
                { type: "proprietaire", label: "Propriétaires", icon: "🔑" },
                { type: "agence", label: "Agences", icon: "🏢" },
              ].map((item) => (
                <button
                  key={item.type}
                  className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 transform ${
                    userType === item.type
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() =>
                    setUserType(
                      item.type as "locataire" | "proprietaire" | "agence"
                    )
                  }
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center text-lg font-medium text-gray-700 mb-4">
              Période de facturation
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { period: "monthly", label: "Mensuel" },
                { period: "quarterly", label: "Trimestriel", badge: "-10%" },
                { period: "annual", label: "Annuel", badge: "-20%" },
              ].map((item) => (
                <button
                  key={item.period}
                  className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 transform ${
                    billingPeriod === item.period
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() =>
                    setBillingPeriod(
                      item.period as "monthly" | "quarterly" | "annual"
                    )
                  }
                >
                  {item.label}
                  {item.badge && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table-horizontal w-full text-left border-collapse border border-gray-200 table-fixed">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="py-4 px-4 text-left w-1/4 border-r border-gray-200 max-w-[250px]">
                Forfait
              </th>
              {selectedPricing.map((plan, index) => (
                <td
                  key={index}
                  className={`py-4 px-4 text-left w-1/4 ${
                    index < 2 ? "border-r border-gray-200" : ""
                  } max-w-[250px]`}
                >
                  <div className="flex flex-col mb-4">
                    <h3 className="text-xl font-bold truncate">{plan.name}</h3>
                    <span className="text-primary my-2">
                      <span className="text-3xl font-bold">
                        {getPriceDisplay(plan)}
                      </span>{" "}
                      XAF
                      <span className="block text-sm text-gray-600 mt-1">
                        {getPeriodLabel()}
                      </span>
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>{renderFeatureRows()}</tbody>
          <tfoot>
            <tr className="border-t-2 border-gray-200">
              <th className="py-4 px-4 text-left border-r border-gray-200 max-w-[250px]">
                Paiement
              </th>
              <td colSpan={3} className="py-4 px-4 text-left text-sm">
                Via MTN Mobile Money, Orange Money ou carte bancaire.
                Micro-paiements disponibles pour certains forfaits.
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-4 text-sm text-gray-500 px-2">
        <p>* Tous les prix sont en Francs CFA (XAF)</p>
        <p>
          * Les offres trimestrielles et annuelles offrent des économies sur le
          prix mensuel
        </p>
      </div>
    </div>
  );
}
