import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Image
          alt={t("nextjsLogoAlt")}
          className="dark:invert"
          height={38}
          priority
          src="https://nextjs.org/icons/next.svg"
          width={180}
        />
        <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
          <li className="mb-2">
            {t("steps.step-001")}{" "}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>{t("steps.step-002")}</li>
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            className="bg-foreground text-background flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent px-4 text-sm transition-colors hover:bg-[#383838] sm:h-12 sm:px-5 sm:text-base dark:hover:bg-[#ccc]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt={t("vercelLogoAlt")}
              className="dark:invert"
              height={20}
              src="https://nextjs.org/icons/vercel.svg"
              width={20}
            />
            {t("buttons.deployNow")}
          </a>
          <a
            className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("buttons.readOurDocs")}
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt={t("footer.learn.iconAlt")}
            aria-hidden
            height={16}
            src="https://nextjs.org/icons/file.svg"
            width={16}
          />
          {t("footer.learn.title")}
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt={t("footer.examples.iconAlt")}
            aria-hidden
            height={16}
            src="https://nextjs.org/icons/window.svg"
            width={16}
          />
          {t("footer.examples.title")}
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt={t("footer.goToNextjsOrg.iconAlt")}
            aria-hidden
            height={16}
            src="https://nextjs.org/icons/globe.svg"
            width={16}
          />
          {t("footer.goToNextjsOrg.title")}
        </a>
      </footer>
    </div>
  );
}
