import { env } from "@/env/server";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      userAgent: "*",
    },
    sitemap: `${env.APP_URL}/sitemap.xml`,
  };
}
