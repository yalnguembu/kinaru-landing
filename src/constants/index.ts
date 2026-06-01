export const PHONE = "+237 681 41 86 74";
export const CONTACT_MAIL = "kinaruofficiel@gmail.com";
export const LOCATION = "Douala, Cameroun";

// ── Kinaru (visiteurs & locataires) ──────────────────────────────────────────
export const APPLINK_IOS =
  process.env.NEXT_PUBLIC_APPSTORE_URL ?? "https://apps.apple.com/app/#";

export const APPLINK_ANDROID = "https://play.google.com/store/apps/details?id=com.bmd.kinaruFree";

// ── Kinaru Pr0s (bailleurs, agences, agents) ───────────────────────────────────
export const APPLINK_PRO_IOS =
  process.env.NEXT_PUBLIC_PRO_APPSTORE_URL ?? "https://apps.apple.com/app/#";

export const APPLINK_PRO_ANDROID = "https://play.google.com/store/apps/details?id=com.bmd.kinarupro";

// ── Misc ──────────────────────────────────────────────────────────────────────
export const APP_URL = process.env.APP_URL ?? "http://localhost:3000";

/** Helper — génère une URL absolue */
export const getAbsoluteUrl = (path: string): string => {
  const baseUrl = APP_URL.endsWith("/") ? APP_URL.slice(0, -1) : APP_URL;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};