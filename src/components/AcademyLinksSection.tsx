import { getTranslations } from "next-intl/server";
import { RiArrowRightLine } from "react-icons/ri";

import { MAIN_SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

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

export async function AcademyLinksSection() {
  const t = await getTranslations("academy");

  return (
    <section
      className="cv-auto border-t border-secondary bg-dark-theme py-16 lg:py-24"
      aria-labelledby="academy-cta-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="academy-cta-heading"
          className="bf-display text-center text-3xl font-normal tracking-tight sm:text-5xl"
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/65">
          {t("subtitle")}
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {linkKeys.map((key, index) => {
            const href = `${MAIN_SITE}${paths[key]}`;
            return (
              <li
                key={key}
                className={cn(
                  "lg:col-span-2",
                  index === 3 && "lg:col-start-2",
                )}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:border-secondary"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-semibold text-white-theme">
                      {t(`links.${key}.label`)}
                    </span>
                    <span className="mt-1 block text-sm text-white/60">
                      {t(`links.${key}.description`)}
                    </span>
                  </span>
                  <RiArrowRightLine
                    className="size-5 shrink-0 text-secondary transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
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
            className="inline-flex items-center justify-center rounded-full bg-primary-ja px-8 py-3 text-base font-bold text-dark-theme transition hover:brightness-110"
          >
            {t("mainSite")}
          </a>
        </p>
      </div>
    </section>
  );
}
