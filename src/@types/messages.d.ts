import messages from "@/i18n/translations/en.json";

declare module "next-intl" {
  interface AppConfig {
    Messages: typeof messages;
  }
}
