import GooglePlayButton from "@/components/Buttons/GooglePlayButton";
import AppleStoreButton from "@/components/Buttons/AppleStoreButton";

export default function DownloadColumn() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold mb-2">Téléchargez l&apos;Appli</h2>
      <p className="text-gray-300 mb-4">
        Découvrez l'expérience Kinaru sur votre mobile.
      </p>
      <div className="flex flex-col items-center sm:items-start gap-4">
        <GooglePlayButton />
        <AppleStoreButton />
      </div>
    </div>
  );
}
