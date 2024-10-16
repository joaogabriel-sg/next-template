import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  // Pick a locale that is representative of the app
  const locale = "en";

  const t = await getTranslations({ locale, namespace: "manifest" });

  return {
    description: t("description"),
    name: t("name"),
    short_name: t("shortName"),
    start_url: "/",
    theme_color: "#101E33",
  };
}
