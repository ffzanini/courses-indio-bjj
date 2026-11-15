"use client";
import React from "react";
import Image from "next/image";
import { RiStarLine } from "react-icons/ri";
import { useCourseCopy } from "@/components/courses/use-course-copy";

interface ProfessorSectionProps {
  type?:
    | "halfGuard"
    | "openGuard"
    | "drills"
    | "nogi"
    | "guardPassing"
    | "neutral";
}

export function ProfessorSection({ type = "neutral" }: ProfessorSectionProps) {
  const { translations: t } = useCourseCopy();
  const border = "border-primary-ja";
  const text = "text-dark-theme";

  return (
    <section id="instrutor" className="py-8 lg:py-16 bg-foreground/5">
      <div className="">
        <div className="mx-4 max-w-[90rem] text-center lg:mx-auto">
          <h2
            className={`text-3xl ${text} font-semibold mb-8`}
          >
            {t.professor.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center">
              <div className="relative inline-block">
                <div
                  className="relative overflow-hidden rounded-full border-4 border-background shadow-xl"
                  style={{ width: "250px", height: "250px" }}
                >
                  <Image
                    src={
                      type === "nogi"
                        ? "/images/profile/indio-sem-kimono.webp"
                        : "/images/profile/indio-kimono.webp"
                    }
                    alt="Professor de Jiu-Jitsu"
                    width={250}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div
                  className={`absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-foreground border-2 ${border} text-background px-4 py-2 rounded-full text-sm font-semibold`}
                >
                  {t.professor.belt}
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <div className="flex items-center justify-center font-semibold">
                  <RiStarLine className="w-6 h-6 mr-2 text-foreground" />
                  <span className="text-foreground">
                    {t.professor.experience}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h3
                className={`${text} font-semibold text-2xl mb-4`}
              >
                {t.professor.name}
              </h3>

              <div className="space-y-6">
                <p className="text-left text-foreground leading-relaxed mb-4">
                  {t.professor.bioBeforeLink}
                  <b className="text-muted-foreground">{t.professor.bioBold1}</b>
                  {t.professor.bioMiddle}
                  <b className="text-muted-foreground">{t.professor.bioBold2}</b>
                  {t.professor.bioLinkText}
                  <a
                    className="text-muted-foreground font-semibold"
                    href="https://www.instagram.com/indiodrills/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @indiodrills
                  </a>
                  {t.professor.bioAfterLink}
                </p>
                <p className="text-left text-foreground leading-relaxed">
                  {t.professor.bioClosing}
                </p>

                <div
                  className={`bg-card/50 rounded-xl shadow-lg p-6 border-l-8 ${border} text-3xl font-bold mb-4 dark:bg-card/80`}
                >
                  <p className="italic text-base text-foreground/80">
                    {t.professor.quote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
