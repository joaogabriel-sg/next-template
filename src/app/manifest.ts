import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

import { DEFAULT_LANGUAGE } from "~/shared/constants/language";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  // Pick a locale that is representative of the app
  const locale = DEFAULT_LANGUAGE;

  const tManifest = await getTranslations({ locale, namespace: "manifest" });

  return {
    description: tManifest("description"),
    name: tManifest("name"),
    short_name: tManifest("shortName"),
    start_url: "/",
    theme_color: "#101E33",
  };
}
