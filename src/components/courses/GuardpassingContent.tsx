"use client";
import { RiWhatsappLine } from "react-icons/ri";

import { CourseOffer } from "@/components/courses/CourseOffer";
import { MethodStrip } from "@/components/courses/MethodStrip";
import { ProblemPanel } from "@/components/courses/ProblemPanel";
import { TopicGrid } from "@/components/courses/TopicGrid";
import { OtherCoursesSection } from "@/components/courses/OtherCoursesSection";
import { ProfessorSection } from "@/components/courses/ProfessorSection";
import { FaqSection } from "@/components/courses/FaqSection";
import { VideoPlayer } from "@/components/courses/VideoPlayer";
import { useCourseCopy } from "@/components/courses/use-course-copy";
import { trackEvent } from "@/libs/facebook-pixel";

export default function GuardPassingPage() {
  const { translations: t } = useCourseCopy();

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5553981372378?text=Olá!%20Tenho%20dúvidas%20sobre%20o%20curso%20de%20Passagens%20de%20Guarda",
      "_blank",
    );
  };

  return (
    <main className="min-h-screen bg-background">
      <section
        id="hero"
        className="bg-dark-theme pt-10 pb-12 text-white-theme lg:pb-20"
      >
        <div className="w-full flex justify-center items-center">
          <div className="mx-auto flex w-full max-w-[120rem] flex-col-reverse items-center gap-4 px-4 sm:gap-6 sm:px-6 lg:grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-10 lg:px-8">
            <div className="text-center lg:text-left">
              <p className="mb-4 text-sm font-semibold tracking-wide text-primary-ja sm:text-base">
                {t.common.credibility}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {t.guardpassing.hero.title}
              </h1>
              <p className="text-xl text-white/80 mb-8">
                {t.guardpassing.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mx-2 lg:mx-auto">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-primary-ja px-8 py-4 text-sm sm:text-base font-bold tracking-wide text-dark-theme uppercase shadow-[0_10px_30px_rgba(209,255,0,0.28)] transition hover:brightness-110"
                  href="https://pay.kiwify.com.br/X4gDESY"
                  onClick={() =>
                    trackEvent("ButtonClick", { button: "paymentButton" })
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.guardpassing.hero.cta}
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center text-primary-ja mr-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-white/80">
                    {t.guardpassing.hero.students}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center text-primary-ja mr-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-white/80">
                    {t.guardpassing.hero.lifetime}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center text-primary-ja mr-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-white/80">
                    {t.guardpassing.hero.guarantee}
                  </span>
                </div>
              </div>
            </div>

            <VideoPlayer
              thumbnailUrl="/images/courses/passagens-de-guarda.jpg"
              videoUrl="https://www.youtube.com/watch?v=l6rMJQcK1-s"
              videoTitle={t.guardpassing.hero.videoTitle}
              videoDescription={t.guardpassing.hero.videoDescription}
            />
          </div>
        </div>
      </section>

      <ProblemPanel
        title={t.guardpassing.problems.title}
        items={t.guardpassing.problems.items}
        punchline={t.guardpassing.problems.key}
        description={t.guardpassing.problems.description}
      />

      <MethodStrip title={t.guardpassing.method.title} items={t.guardpassing.method.items} />

      <section id="benefits" className="py-8 lg:py-16 bg-background">
        <div>
          <h2 className="text-3xl text-dark-theme text-center font-semibold">
            {t.guardpassing.benefits.title}
          </h2>
          {t.guardpassing.benefits.subtitle ? (
            <p className="mx-auto mt-3 mb-6 max-w-3xl px-4 text-center text-lg text-muted-foreground">
              {t.guardpassing.benefits.subtitle}
            </p>
          ) : (
            <div className="mb-6" />
          )}
          <TopicGrid items={t.guardpassing.benefits.items} />
        </div>
      </section>

      <section id="beneficios-diretos" className="bg-foreground/5 py-8 lg:py-16">
        <h2 className="mb-6 px-4 text-center text-3xl font-semibold text-dark-theme">
          {t.guardpassing.directBenefits.title}
        </h2>
        <TopicGrid items={t.guardpassing.directBenefits.items} />
      </section>

      <CourseOffer
        copy={t.guardpassing.cta}
        guarantee={t.guardpassing.guarantee}
        href="https://pay.kiwify.com.br/X4gDESY"
      />

      <section id="faq" className="py-8 lg:py-16 bg-background">
        <div>
          <div className="max-w-3xl mx-4 lg:mx-auto">
            <h2 className="text-3xl text-dark-theme font-semibold text-center mb-8">
              {t.guardpassing.faq.title}
            </h2>

            <FaqSection items={t.guardpassing.faq.items} />

            <div className="text-center mt-8">
              <h3 className="text-xl text-dark-theme font-bold mb-2">
                {t.guardpassing.faq.stillDoubts}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t.guardpassing.faq.description}
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="cursor-pointer px-12 py-4 rounded-full bg-primary-ja font-bold text-dark-theme tracking-widest uppercase transition hover:brightness-110"
              >
                <div className="flex flex-row items-center gap-2">
                  <RiWhatsappLine size={22} />
                  <span className="text-foreground">
                    {t.guardpassing.faq.whatsapp}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <ProfessorSection type="guardPassing" />
      <OtherCoursesSection currentCourse="guardpassing" />
    </main>
  );
}
