import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

import { MAIN_SITE } from "@/constants/site";
import { socialsAcademia, socialsIndio } from "@/constants/socials";
import { pathnameWithLocale } from "@/lib/locale-path";

const LOGO_URL = `${MAIN_SITE}/images/logos/ja-indio-logo.webp`;

export async function SiteFooter() {
  const yearNow = new Date().getFullYear();
  const locale = await getLocale();
  const t = await getTranslations("footer");

  return (
    <footer className="cv-auto fade-in bg-dark-theme px-4 sm:px-6 lg:px-8 xl:px-18">
      <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:items-center lg:justify-between">
        <div className="flex flex-col items-center">
          <Link
            href={pathnameWithLocale("/", locale)}
            prefetch={false}
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-2 text-sm font-normal text-white-theme"
          >
            <Image
              src={LOGO_URL}
              alt="JA Índio Jiu Jitsu"
              width={240}
              height={30}
              quality={75}
              className="h-auto w-[200px] max-w-full object-contain sm:w-[240px]"
              style={{ height: "auto" }}
            />
          </Link>
          <p className="text-xl font-semibold text-white-theme lg:pb-4">
            {t("motto")}
          </p>
          <div className="justify-start items-start pt-6 lg:pt-0">
            <div className="flex flex-col gap-4">
              <p className="text-xl text-white-theme">{t("address")}</p>
              <div>
                <p className="gap-2 text-lg text-white-theme">
                  <b className="text-lg">{t("phoneLabel")}</b> (53) 99188-6599
                </p>
                <p className="gap-2 text-lg text-white-theme">
                  <b className="text-lg">{t("emailLabel")}</b>{" "}
                  fabianoindio@hotmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-6 text-center text-white-theme md:gap-10 lg:pt-0">
          <div>
            <h3 className="mb-2 text-lg font-semibold">
              {t("academySocials")}
            </h3>
            <div className="flex justify-center gap-4 text-2xl">
              {socialsAcademia.map(({ href, icon: Icon, name }) => (
                <a
                  aria-label={name}
                  target="_blank"
                  key={href}
                  href={href}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 transition-all duration-300"
                >
                  <Icon size={32} className="hover:text-primary-ja" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 lg:pt-0">
            <h3 className="mb-2 text-lg font-semibold">{t("indioSocials")}</h3>
            <div className="flex justify-center gap-4 text-2xl">
              {socialsIndio.map(({ href, icon: Icon, name }) => (
                <a
                  aria-label={name}
                  target="_blank"
                  key={href}
                  href={href}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 transition-all duration-300"
                >
                  <Icon size={32} className="hover:text-primary-ja" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden xl:flex">
          <div className="mb-1 flex flex-col items-center justify-center">
            <p className="text-xl font-semibold text-white-theme">
              {t("lookingFor")}
            </p>
            <p className="text-white-theme">
              {t("officialBefore")}{" "}
              <a
                className="font-semibold text-primary-ja hover:underline"
                href="https://www.jajiujitsu.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("officialLink")}
              </a>{" "}
              {t("officialAfter")}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-white-theme/20 pt-6 lg:pt-2">
        <p className="pt-4 text-center text-white-theme">
          {t("copyright", { year: yearNow })}
        </p>
        <p className="flex flex-col justify-center gap-1 pb-4 text-center text-base text-white-theme">
          <span className="text-md">
            {t("developedBy")}{" "}
            <Link
              href="https://www.ffzanini.dev/"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
              className="text-md text-primary-ja hover:underline"
            >
              Felipe Frantz Zanini
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
