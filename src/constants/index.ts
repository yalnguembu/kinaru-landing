export const PHONE = "+237 681 41 86 74";

export const CONTACT_MAIL = "sprinteragenceit@gmail.com";

export const LOCATION = "Douala, Cameroun";

export const APPLINK_IOS =
  process.env.NEXT_PUBLIC_APPSTORE_URL ?? "https://apps.apple.com/app/#";

export const APPLINK_ANDROID =
  process.env.NEXT_PUBLIC_PLAYSTORE_URL ??
  "https://play.google.com/store/apps/details?id=com.sprinteragence.kinaru";

export const APP_URL = process.env.APP_URL ?? "http://localhost:3000";

// Helper function to generate absolute URLs
export const getAbsoluteUrl = (path: string): string => {
  // Remove trailing slash from APP_URL and leading slash from path if they exist
  const baseUrl = APP_URL.endsWith("/") ? APP_URL.slice(0, -1) : APP_URL;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};
