import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

import { DEFAULT_LANGUAGE } from "@/shared/constants/language";
import { STORAGE_KEYS } from "@/shared/constants/storage-keys";

export default getRequestConfig(async () => {
  const locale =
    (await cookies()).get(STORAGE_KEYS.LANGUAGE)?.value ?? DEFAULT_LANGUAGE;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
