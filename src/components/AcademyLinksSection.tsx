"use client";

import { useTranslations } from "next-intl";
import { RiArrowRightLine } from "react-icons/ri";

import { MAIN_SITE } from "@/constants/site";

const linkKeys = [
  "about",
  "schedules",
  "programs",
  "testimonials",
  "contact",
] as const;

const paths: Record<(typeof linkKeys)[number], string> = {
  about: "/academy/about-us",
  schedules: "/academy/schedules",
  programs: "/academy/programs",
  testimonials: "/academy/testimonials",
  contact: "/contact",
};

export function AcademyLinksSection() {
  const t = useTranslations("academy");

  return (
    <section
      className="border-t border-foreground/10 bg-linear-to-b from-foreground/3 to-background py-16 lg:py-24"
      aria-labelledby="academy-cta-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="academy-cta-heading"
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          {t("subtitle")}
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {linkKeys.map((key) => {
            const href = `${MAIN_SITE}${paths[key]}`;
            return (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-foreground/12 border-l-4 border-l-guard-passing-theme bg-background p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md"
                >
                  <span className="text-lg font-semibold text-foreground transition-colors group-hover:text-guard-passing-theme-dark">
                    {t(`links.${key}.label`)}
                  </span>
                  <span className="mt-1 flex-1 text-sm text-muted-foreground">
                    {t(`links.${key}.description`)}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-guard-passing-theme-dark underline-offset-4 group-hover:underline">
                    {t("cta")}
                    <RiArrowRightLine
                      className="size-4 shrink-0 text-guard-passing-theme-dark transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-center">
          <a
            href={MAIN_SITE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-foreground/4 px-8 py-3 text-base font-semibold text-foreground shadow-sm transition-colors hover:border-guard-passing-theme hover:bg-guard-passing-theme hover:text-white"
          >
            {t("mainSite")}
          </a>
        </p>
      </div>
    </section>
  );
}
