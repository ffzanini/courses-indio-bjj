import { Instrument_Serif } from "next/font/google";
import { getLocale, getTranslations } from "next-intl/server";

import { AcademyLinksSection } from "@/components/AcademyLinksSection";
import { CourseCard } from "@/components/CourseCard";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { SiteFooter } from "@/components/SiteFooter";
import { listedCourses } from "@/data/courses";

const fontDisplay = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

function Emphasis({ text, phrase }: { text: string; phrase: string }) {
  const index = text.indexOf(phrase);
  if (index < 0) return text;
  return (
    <>
      {text.slice(0, index)}
      <em className="text-primary-ja italic">{phrase}</em>
      {text.slice(index + phrase.length)}
    </>
  );
}

export async function HomePage() {
  const locale = await getLocale();
  const t = await getTranslations("home");
  const tLocale = await getTranslations("localeSwitcher");
  const localeLabel =
    locale === "pt" ? tLocale("switchToEn") : tLocale("switchToPt");

  return (
    <div
      className={`${fontDisplay.variable} flex min-h-screen flex-col bg-dark-theme text-white-theme`}
    >
      <div className="flex justify-end px-4 pt-5 sm:px-6">
        <LocaleSwitcher locale={locale} label={localeLabel} tone="plain" />
      </div>

      <main className="flex-1">
        <section className="px-4 pt-16 pb-14 sm:px-6 sm:pt-24 sm:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bf-display text-4xl leading-tight font-normal sm:text-6xl">
              <Emphasis text={t("heroTitle")} phrase="Fabiano Índio" />
            </h1>
            <div
              className="mx-auto mt-6 h-1 w-16 bg-secondary"
              aria-hidden
            />
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              {t("heroSubtitle")}
            </p>
          </div>
        </section>

        <section id="cursos" className="border-t border-primary-ja bg-white-theme text-dark-theme">
          <div className="mx-auto max-w-6xl space-y-10 px-4 py-16 sm:px-6 lg:space-y-14 lg:py-20">
          <a
            href="/blackfriday"
            className="group flex flex-col items-start justify-between gap-5 rounded-3xl border-2 border-primary-ja bg-dark-theme px-6 py-6 text-white-theme shadow-[0_18px_50px_rgba(209,255,0,0.16)] sm:flex-row sm:items-center sm:px-8 sm:py-8"
          >
            <span className="bf-display text-2xl leading-tight font-normal sm:text-4xl">
              <Emphasis text={t("blackfridayBanner")} phrase="Ultra Black Friday" />
            </span>
            <span className="shrink-0 rounded-full bg-primary-ja px-6 py-3.5 text-sm font-bold tracking-wide text-dark-theme uppercase shadow-[0_8px_24px_rgba(209,255,0,0.35)] transition group-hover:brightness-110">
              {t("blackfridayBannerCta")}
            </span>
          </a>

          <div>
            <h2 className="bf-display text-center text-3xl font-normal sm:text-4xl">
              {t("coursesSectionTitle")}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-dark-theme/60">
              {t("coursesSectionSubtitle")}
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {listedCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          </div>
          </div>
        </section>

        <AcademyLinksSection />
      </main>

      <SiteFooter />
    </div>
  );
}
