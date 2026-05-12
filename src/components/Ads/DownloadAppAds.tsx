"use client";

import Link from "next/link";
import GooglePlayButton from "@/components/Buttons/GooglePlayButton";
import AppleStoreButton from "@/components/Buttons/AppleStoreButton";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  APPLINK_ANDROID,
  APPLINK_IOS,
  APPLINK_PRO_ANDROID,
  APPLINK_PRO_IOS,
} from "@/constants";

// ─── App definitions ──────────────────────────────────────────────────────────

const APPS = {
  visitor: {
    key: "visitor",
    badge: "Kinaru",
    tagline: "Pour les visiteurs & locataires",
    headline: "Trouvez et réservez votre bien idéal",
    description:
      "Parcourez des milliers de propriétés, contactez les bailleurs et gérez vos réservations directement depuis votre téléphone.",
    features: ["Recherche avancée", "Messagerie intégrée", "Suivi des réservations"],
    androidUrl: APPLINK_ANDROID,
    iosUrl: APPLINK_IOS,
    iosAvailable: false, // passer à true quand l'app iOS est publiée
    phoneImage: "/assets/images/app/screen-visiteur.jpg",
    accentColor: "#FF5A1F",
  },
  pro: {
    key: "pro",
    badge: "Kinaru Pro",
    tagline: "Pour les bailleurs, agences & agents",
    headline: "Gérez et développez votre portefeuille immobilier",
    description:
      "Publiez vos annonces, recevez des demandes en temps réel et pilotez tous vos biens depuis un tableau de bord professionnel.",
    features: ["Gestion multi-biens", "Statistiques & revenus", "Signature électronique"],
    androidUrl: APPLINK_PRO_ANDROID,
    iosUrl: APPLINK_PRO_IOS,
    iosAvailable: false, // passer à true quand l'app iOS est publiée
    phoneImage: "/assets/images/app/screen-agence.jpg",
    accentColor: "#2563EB",
  },
} as const;

type AppKey = keyof typeof APPS;

// ─── Sub-components ───────────────────────────────────────────────────────────

function AppSwitcher({
  active,
  onChange,
}: {
  active: AppKey;
  onChange: (key: AppKey) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Choisir une application"
      className="inline-flex items-center rounded-full border border-white/20 bg-white/5 p-1 backdrop-blur-sm"
    >
      {(Object.values(APPS) as (typeof APPS)[AppKey][]).map((app) => {
        const isActive = active === app.key;
        return (
          <button
            key={app.key}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(app.key as AppKey)}
            className={[
              "relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 outline-none",
              isActive ? "text-white shadow-lg" : "text-white/50 hover:text-white/80",
            ].join(" ")}
            style={isActive ? { background: app.accentColor } : {}}
          >
            {app.badge}
          </button>
        );
      })}
    </div>
  );
}

function FeaturePills({
  features,
  accentColor,
}: {
  features: readonly string[];
  accentColor: string;
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {features.map((f) => (
        <li
          key={f}
          className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
        >
          <span
            className="block h-1.5 w-1.5 rounded-full flex-shrink-0"
            style={{ background: accentColor }}
          />
          {f}
        </li>
      ))}
    </ul>
  );
}

function IosComingSoonButton() {
  return (
    <div
      className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-white/40 text-sm cursor-not-allowed select-none"
      title="Bientôt disponible sur l'App Store"
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span>Bientôt sur iOS</span>
    </div>
  );
}

function DownloadButtons({ app }: { app: (typeof APPS)[AppKey] }) {
  return (
    <div className="flex flex-row flex-wrap w-fit items-center gap-3">
      <GooglePlayButton href={app.androidUrl} />
      {app.iosAvailable ? (
        <AppleStoreButton href={app.iosUrl} />
      ) : (
        <IosComingSoonButton />
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function DownloadAppAds() {
  const [activeKey, setActiveKey] = useState<AppKey>("visitor");
  const app = APPS[activeKey];

  const textExit = {
    exit: { opacity: 0, y: -12, transition: { duration: 0.18, ease: "easeIn" } },
  };

  const textEnter = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay, ease: "easeOut" },
    },
  });

  const phoneVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
    exit: { opacity: 0, x: -30, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <section className="mt-16 ads-container-rounded overflow-hidden">
      <div className="flex flex-col gap-10 md:flex-row justify-between md:justify-around items-center md:items-start pt-20 px-10 pb-10">

        {/* ── Left column ─────────────────────────────────────────────────── */}
        <div className="items-center md:items-start md:text-left text-center flex flex-col gap-5 text-white w-full md:max-w-[50%]">

          {/* App switcher */}
          <AppSwitcher active={activeKey} onChange={setActiveKey} />

          {/* Animated content block */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
              className="flex flex-col gap-4 items-center md:items-start text-center md:text-left"
              variants={textExit}
              exit="exit"
            >
              {/* Tagline chip */}
              <motion.span
                className="text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full border"
                style={{
                  color: app.accentColor,
                  borderColor: `${app.accentColor}55`,
                  background: `${app.accentColor}18`,
                }}
                variants={textEnter(0)}
                initial="hidden"
                animate="visible"
              >
                {app.tagline}
              </motion.span>

              {/* Headline */}
              <motion.h2
                className="text-5xl md:text-3xl font-bold leading-tight"
                variants={textEnter(0.1)}
                initial="hidden"
                animate="visible"
              >
                {app.headline}
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-white/70 max-w-sm"
                variants={textEnter(0.2)}
                initial="hidden"
                animate="visible"
              >
                {app.description}
              </motion.p>

              {/* Feature pills */}
              <motion.div
                variants={textEnter(0.3)}
                initial="hidden"
                animate="visible"
              >
                <FeaturePills features={app.features} accentColor={app.accentColor} />
              </motion.div>

              {/* Store buttons */}
              <motion.div
                variants={textEnter(0.4)}
                initial="hidden"
                animate="visible"
              >
                <DownloadButtons app={app} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Right column: phone mockup ───────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey + "-phone"}
            className="self-end mx-auto"
            variants={phoneVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="ads-phone">
              <Image
                src={app.phoneImage}
                alt={`Aperçu de ${app.badge}`}
                width={350}
                height={300}
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}