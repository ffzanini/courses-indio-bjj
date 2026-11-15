"use client";

import { RiWhatsappLine } from "react-icons/ri";

import { CourseOffer } from "@/components/courses/CourseOffer";
import { MethodStrip } from "@/components/courses/MethodStrip";
import { ProblemPanel } from "@/components/courses/ProblemPanel";
import { TopicGrid } from "@/components/courses/TopicGrid";
import { FaqSection } from "@/components/courses/FaqSection";
import { OtherCoursesSection } from "@/components/courses/OtherCoursesSection";
import { ProfessorSection } from "@/components/courses/ProfessorSection";
import { VideoPlayer } from "@/components/courses/VideoPlayer";
import { useCourseCopy } from "@/components/courses/use-course-copy";
import { trackEvent } from "@/libs/facebook-pixel";

const CHECKOUT_URL = "https://pay.kiwify.com.br/uXhtF8N";
const VIDEO_URL = "https://www.youtube.com/watch?v=6ztY_RM1iME";

function CheckItem({ label }: { label: string }) {
  return (
    <div className="flex items-center">
      <div className="mr-2 flex h-6 w-6 shrink-0 items-center justify-center text-primary-ja">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="text-white/80">{label}</span>
    </div>
  );
}

export default function EscapesPage() {
  const { translations: t } = useCourseCopy();
  const copy = t.escapes;

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5553981372378?text=Olá!%20Tenho%20dúvidas%20sobre%20o%20curso%20de%20Saídas%20e%20Escapadas",
      "_blank",
    );
  };

  const buy = () => trackEvent("ButtonClick", { button: "paymentButton" });

  return (
    <main className="min-h-screen bg-background">
      <section
        id="hero"
        className="bg-dark-theme pt-10 pb-12 text-white-theme lg:pb-20"
      >
        <div className="flex w-full items-center justify-center">
          <div className="mx-auto flex w-full max-w-[120rem] flex-col-reverse items-center gap-4 px-4 sm:gap-6 sm:px-6 lg:grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-10 lg:px-8">
            <div className="text-center lg:text-left">
              <p className="mb-4 text-sm font-semibold tracking-wide text-primary-ja sm:text-base">
                {t.common.credibility}
              </p>
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {copy.hero.title}
              </h1>
              <p className="mb-8 text-xl text-white/80">{copy.hero.subtitle}</p>
              <a
                className="inline-flex items-center justify-center rounded-full bg-primary-ja px-8 py-4 text-sm font-bold tracking-wide text-dark-theme uppercase shadow-[0_10px_30px_rgba(209,255,0,0.28)] transition hover:brightness-110 sm:text-base"
                href={CHECKOUT_URL}
                onClick={buy}
                target="_blank"
                rel="noreferrer"
              >
                {copy.hero.cta}
              </a>
              <div className="mt-8 flex flex-wrap justify-center gap-6 lg:justify-start">
                <CheckItem label={copy.hero.students} />
                <CheckItem label={copy.hero.lifetime} />
                <CheckItem label={copy.hero.guarantee} />
              </div>
            </div>
            <VideoPlayer
              thumbnailUrl="/images/courses/saidas-escapadas.webp"
              videoUrl={VIDEO_URL}
              videoTitle={copy.hero.videoTitle}
              videoDescription={copy.hero.videoDescription}
            />
          </div>
        </div>
      </section>

      <ProblemPanel
        title={copy.problems.title}
        items={copy.problems.items}
        punchline={copy.problems.key}
        description={copy.problems.description}
      />

      <MethodStrip title={copy.method.title} items={copy.method.items} />

      <section id="benefits" className="bg-background py-8 lg:py-16">
        <h2 className="text-center text-3xl font-semibold text-dark-theme">
          {copy.benefits.title}
        </h2>
        <p className="mx-auto mt-3 mb-6 max-w-3xl px-4 text-center text-lg text-muted-foreground">
          {copy.benefits.subtitle}
        </p>
        <TopicGrid items={copy.benefits.items} />
      </section>

      <section id="beneficios-diretos" className="bg-foreground/5 py-8 lg:py-16">
        <h2 className="mb-6 px-4 text-center text-3xl font-semibold text-dark-theme">
          {copy.directBenefits.title}
        </h2>
        <TopicGrid items={copy.directBenefits.items} />
      </section>

      <CourseOffer
        copy={copy.cta}
        guarantee={copy.guarantee}
        href={CHECKOUT_URL}
      />

      <section id="faq" className="bg-background py-8 lg:py-16">
        <div className="mx-4 max-w-3xl lg:mx-auto">
          <h2 className="mb-8 text-center text-3xl font-semibold text-dark-theme">
            {copy.faq.title}
          </h2>
          <FaqSection items={copy.faq.items} />
          <div className="mt-8 text-center">
            <h3 className="mb-2 text-xl font-bold text-dark-theme">
              {copy.faq.stillDoubts}
            </h3>
            <p className="mb-6 text-muted-foreground">{copy.faq.description}</p>
            <button
              onClick={handleWhatsAppClick}
              className="cursor-pointer rounded-full bg-primary-ja px-12 py-4 font-bold tracking-widest text-dark-theme uppercase transition hover:brightness-110"
              type="button"
            >
              <span className="flex flex-row items-center gap-2">
                <RiWhatsappLine size={22} />
                {copy.faq.whatsapp}
              </span>
            </button>
          </div>
        </div>
      </section>

      <ProfessorSection />
      <OtherCoursesSection currentCourse="escapes" />
    </main>
  );
}
