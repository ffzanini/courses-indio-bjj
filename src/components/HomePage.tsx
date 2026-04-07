"use client";

import { useTranslations } from "next-intl";

import { AcademyLinksSection } from "@/components/AcademyLinksSection";
import { BundleFeaturedCard } from "@/components/BundleFeaturedCard";
import { CourseCard } from "@/components/CourseCard";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { SiteFooter } from "@/components/SiteFooter";
import { getBundleLearnMorePath, listedCourses } from "@/data/courses";

export function HomePage({
  bundleCheckoutHref,
}: {
  bundleCheckoutHref: string | null;
}) {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-foreground/10 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {tCommon("onlineCourses")}
          </span>
          <div className="flex items-center gap-3">
            <LocaleSwitcher />
            <span className="text-right text-sm font-bold text-foreground">
              {tCommon("brand")}
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:pt-24">
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-b from-guard-passing-theme/15 via-transparent to-transparent"
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              {t("heroSubtitle")}
            </p>
          </div>
        </section>

        <section
          id="cursos"
          className="mx-auto max-w-6xl space-y-10 px-4 pb-16 sm:px-6 lg:space-y-14 lg:pb-24"
        >
          <BundleFeaturedCard
            bundleCheckoutHref={bundleCheckoutHref}
            learnMoreHref={getBundleLearnMorePath()}
          />

          <div>
            <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
              {t("coursesSectionTitle")}
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
              {t("coursesSectionSubtitle")}
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {listedCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          </div>
        </section>

        <AcademyLinksSection />
      </main>

      <SiteFooter />
    </div>
  );
}
