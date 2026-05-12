import GetAppStoreButton from "@/components/Buttons/GetAppStoreButton";
import { APPLINK_IOS } from "@/constants";

export type AppleStoreButtonProps = {
  className?: string;
  /** Passer un href custom pour surcharger le lien par défaut (ex: Kinaru Pro) */
  href?: string;
};

export default function AppleStoreButton({ className, href }: AppleStoreButtonProps) {
  return (
    <GetAppStoreButton
      src="/assets/images/appstore.png"
      alt="app-store"
      className={className}
      href={href ?? APPLINK_IOS}
    />
  );
}