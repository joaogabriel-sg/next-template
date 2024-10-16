import { env } from "@/env/server";
import { routing } from "@/i18n/routing";
import { MetadataRoute } from "next";

const defaultLocale = routing.defaultLocale;
const locales = routing.locales;

export default function sitemap(): MetadataRoute.Sitemap {
  return [getEntry("/")];
}

function getEntry(pathname: string) {
  return {
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, getUrl(pathname, locale)]),
      ),
    },
    lastModified: new Date(),
    url: getUrl(pathname, defaultLocale),
  };
}

function getUrl(pathname: string, locale: string) {
  return `${env.APP_URL}/${locale}${pathname === "/" ? "" : pathname}`;
}
