import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <h1 className="text-8xl font-bold">404</h1>
      <h2 className="text-4xl">{t("notFoundPage.title")}</h2>
      <p className="text-gray-400">{t("notFoundPage.message")}</p>
      <Link
        className="bg-foreground text-background flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent px-4 text-sm transition-colors hover:bg-[#383838] sm:h-12 sm:px-5 sm:text-base dark:hover:bg-[#ccc]"
        href="/"
      >
        {t("notFoundPage.goBackButton")}
      </Link>
    </div>
  );
}
