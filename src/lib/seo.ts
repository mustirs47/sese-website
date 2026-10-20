export const BASE_URL = "https://www.sentinel-services.de";
export const SITE_NAME = "Sentinel Services";

export const buildCanonical = (path: string) => {
  const clean = path.split("?")[0].split("#")[0];
  if (clean === "/") return BASE_URL + "/";
  // Trim trailing slash for consistency
  const trimmed = clean.endsWith("/") ? clean.slice(0, -1) : clean;
  return BASE_URL + trimmed;
};

export const DEFAULT_OG_IMAGE =
  "https://www.sentinel-services.de/og-image.jpg";