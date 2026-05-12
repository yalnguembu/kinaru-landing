import GetAppStoreButton from "@/components/Buttons/GetAppStoreButton";
import { APPLINK_ANDROID } from "@/constants";

export type GooglePlayButtonProps = {
  className?: string;
  /** Passer un href custom pour surcharger le lien par défaut (ex: Kinaru Pro) */
  href?: string;
};

export default function GooglePlayButton({ className, href }: GooglePlayButtonProps) {
  return (
    <GetAppStoreButton
      src="/assets/images/googleplay.png"
      alt="google-play"
      className={className}
      href={href ?? APPLINK_ANDROID}
    />
  );
}