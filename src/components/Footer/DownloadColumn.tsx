import GooglePlayButton from "@/components/Buttons/GooglePlayButton";
import AppleStoreButton from "@/components/Buttons/AppleStoreButton";
import {
  APPLINK_ANDROID,
  APPLINK_IOS,
  APPLINK_PRO_ANDROID,
  APPLINK_PRO_IOS,
} from "@/constants";

export default function DownloadColumn() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold mb-2">Téléchargez l&apos;Appli</h2>

      {/* ── Kinaru (visiteurs & locataires) ──────────────────────────────── */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Kinaru
        </span>
        <p className="text-gray-400 text-sm">Pour les visiteurs &amp; locataires</p>
        <div className="flex flex-col items-center sm:items-start gap-3">
          <GooglePlayButton href={APPLINK_ANDROID} />
          {/* iOS bientôt disponible — décommenter quand publié */}
          {/* <AppleStoreButton href={APPLINK_IOS} /> */}
          <span className="text-xs text-gray-500 italic">Bientôt sur l'App Store</span>
        </div>
      </div>

      {/* Séparateur */}
      <div className="border-t border-white/10 my-1" />

      {/* ── Kinaru Pro (bailleurs, agences, agents) ───────────────────────── */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
          Kinaru Pro
        </span>
        <p className="text-gray-400 text-sm">Pour les bailleurs &amp; agences</p>
        <div className="flex flex-col items-center sm:items-start gap-3">
          <GooglePlayButton href={APPLINK_PRO_ANDROID} />
          {/* iOS bientôt disponible — décommenter quand publié */}
          {/* <AppleStoreButton href={APPLINK_PRO_IOS} /> */}
          <span className="text-xs text-gray-500 italic">Bientôt sur l'App Store</span>
        </div>
      </div>
    </div>
  );
}