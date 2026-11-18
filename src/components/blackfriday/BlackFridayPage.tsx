import { existsSync } from "node:fs";
import path from "node:path";

import Image from "next/image";
import Link from "next/link";

import { BlackFridayCta } from "@/components/blackfriday/BlackFridayCta";
import { StickyPurchaseBar } from "@/components/blackfriday/StickyPurchaseBar";
import { BlackFridayTracking } from "@/components/blackfriday/BlackFridayTracking";
import { TestimonialCarousel } from "@/components/blackfriday/TestimonialCarousel";
import { FaqSection } from "@/components/courses/FaqSection";
import {
  blackfridayAccess,
  blackfridayAudience,
  blackfridayBonusIntro,
  blackfridayBonuses,
  blackfridayCourses,
  blackfridayCoursesClose,
  blackfridayCtaLabel,
  blackfridayExtras,
  blackfridayFaq,
  blackfridayGifts,
  blackfridayGuarantee,
  blackfridayHero,
  blackfridayLogoPath,
  blackfridayMentorship,
  blackfridayOffer,
  blackfridayProof,
  blackfridayStack,
  blackfridaySupport,
} from "@/data/blackfriday";
import { cn } from "@/lib/utils";

const MARQUEE = Array.from({ length: 12 }, () => "ULTRA BLACK FRIDAY");
const SALES_PHOTO = "/images/background/sales.png";
const ACCENT = "text-primary-ja";

function Emphasis({ text, phrase }: { text: string; phrase: string }) {
  const index = text.toLowerCase().indexOf(phrase.toLowerCase());
  if (index < 0) return text;
  return (
    <>
      {text.slice(0, index)}
      <em className={`${ACCENT} italic`}>
        {text.slice(index, index + phrase.length)}
      </em>
      {text.slice(index + phrase.length)}
    </>
  );
}

function StepText({ text, highlight }: { text: string; highlight: string }) {
  if (!highlight) return text;
  const index = text.indexOf(highlight);
  if (index < 0) return text;
  return (
    <>
      {text.slice(0, index)}
      <strong className="font-semibold text-white">{highlight}</strong>
      {text.slice(index + highlight.length)}
    </>
  );
}

function publicAssetExists(publicPath: string) {
  return existsSync(
    path.join(process.cwd(), "public", publicPath.replace(/^\//, "")),
  );
}

function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("w-full border-t border-primary-ja", className)}
    >
      <div className="mx-auto w-[min(76rem,94vw)] py-20">{children}</div>
    </section>
  );
}

function OfferCard({
  eyebrow,
  name,
  note,
  description,
  price,
  highlighted = false,
}: {
  eyebrow: string;
  name: string;
  note?: string;
  description: string;
  price?: string;
  highlighted?: boolean;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl border p-6",
        highlighted
          ? "border-primary-ja bg-primary-ja/10 shadow-[0_0_48px_rgba(209,255,0,0.12)] sm:p-8"
          : "border-white/10 bg-[#111]",
      )}
    >
      <p
        className={cn(
          "w-fit rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase",
          highlighted
            ? "bg-primary-ja text-dark-theme"
            : "bg-white/10 text-primary-ja",
        )}
      >
        {eyebrow}
      </p>
      <h3
        className={cn(
          "bf-display mt-4 leading-tight font-normal",
          highlighted ? "text-3xl" : "min-h-14 text-2xl",
        )}
      >
        {name}
        {note ? (
          <span className="mt-2 block font-sans text-sm leading-snug font-normal text-white/70">
            {note}
          </span>
        ) : null}
      </h3>
      <p className="mt-3 min-h-24 flex-1 text-sm leading-relaxed text-white-theme/80">
        {description}
      </p>
      <p
        className={cn(
          `bf-display mt-6 border-t border-white/10 pt-4 font-normal ${ACCENT}`,
          highlighted ? "text-5xl tracking-tight" : "text-3xl",
        )}
      >
        {price ?? "Incluso na Black"}
      </p>
    </article>
  );
}

export function BlackFridayPage({
  checkoutHref,
}: {
  checkoutHref: string | null;
}) {
  const testimonials = blackfridayProof.testimonialImages.filter((item) =>
    publicAssetExists(item.src),
  );
  const supportContacts = blackfridaySupport.contacts;
  const guaranteeBody = blackfridayGuarantee.replace(
    /^7 dias de garantia incondicional\.\s*/i,
    "",
  );

  return (
    <main className="min-h-screen bg-dark-theme pb-24 text-white-theme md:pb-0">
      <BlackFridayTracking />

      <section className="relative flex h-svh flex-col overflow-hidden lg:block">
        <div className="relative min-h-0 flex-1 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[58%]">
          <Image
            src={SALES_PHOTO}
            alt="Fabiano Índio"
            fill
            priority
            quality={75}
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-[center_20%] lg:object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-dark-theme to-transparent lg:inset-y-0 lg:right-auto lg:left-0 lg:h-full lg:w-2/5 lg:bg-linear-to-r" />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-7xl shrink-0 flex-col px-4 pt-0 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 lg:grid lg:h-full lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:px-10 lg:py-6">
          <div>
            <Image
              src={blackfridayLogoPath}
              alt="Ultra Black do Índio"
              width={1080}
              height={1080}
              priority
              className="mx-auto -mt-[calc(0.5*clamp(7rem,32vw,11rem))] -mb-[calc(0.26*clamp(7rem,32vw,11rem))] h-auto w-[clamp(7rem,32vw,11rem)] lg:mx-0 lg:mt-0 lg:mb-[clamp(0.15rem,0.5vh,0.6rem)] lg:w-[12.5rem]"
            />
            <h1 className="bf-display text-[clamp(1.85rem,4.6vh,3.7rem)] leading-[1.08] font-normal tracking-tight">
              <Emphasis
                text={blackfridayHero.title}
                phrase="todos os meus cursos"
              />
            </h1>
            <p className="mt-[clamp(0.6rem,1.2vh,1.5rem)] max-w-xl text-[clamp(0.95rem,1.8vh,1.25rem)] leading-snug text-white/75">
              {blackfridayHero.subtitle}
            </p>
            <BlackFridayCta
              href="#checkout"
              button="hero"
              marker="inline"
              className="mt-[clamp(0.8rem,1.6vh,2rem)] w-full lg:w-fit"
            />
          </div>
        </div>
      </section>

      <div className="bf-marquee border-y border-primary-ja/40 bg-primary-ja py-3 text-black">
        <div className="bf-marquee-track">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className="px-4 text-sm font-bold tracking-[0.35em] uppercase"
            >
              {MARQUEE.join("  ✦  ")}
              {"  ✦  "}
            </p>
          ))}
        </div>
      </div>

      <Section>
        <h2 className="bf-display text-4xl leading-tight font-normal sm:text-5xl">
          <Emphasis text={blackfridayAudience.title} phrase="para você que" />
        </h2>
        <ul className="mt-10 space-y-5 text-lg leading-relaxed text-white/85">
          {blackfridayAudience.items.map((item) => (
            <li key={item.lead} className="flex gap-4">
              <span className={`shrink-0 ${ACCENT}`} aria-hidden>
                —
              </span>
              <span>
                <strong className="font-bold text-white">{item.lead}</strong>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="bf-display text-4xl leading-tight font-normal whitespace-normal md:text-[clamp(0.95rem,2.55vw,3rem)] md:whitespace-nowrap">
          <Emphasis text={blackfridayProof.stat} phrase="+ de 15 anos" />
        </h2>
        {testimonials.length > 0 ? (
          <div className="mt-12">
            <h2 className="bf-display text-center text-2xl font-normal md:text-4xl">
              <Emphasis
                text={blackfridayProof.testimonialsTitle}
                phrase="nossos cursos"
              />
            </h2>
            <TestimonialCarousel items={testimonials} />
          </div>
        ) : null}
      </Section>

      <Section>
        <h2 className="bf-display text-4xl leading-tight font-normal sm:text-5xl">
          <Emphasis text={blackfridayCourses.title} phrase="cursos" />
        </h2>
        <p className="mt-3 text-lg text-white/70">
          {blackfridayCourses.subtitle}
        </p>
        <ul className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
          {blackfridayCourses.items.map((course) => (
            <li
              key={course.id}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111]"
            >
              <div className="relative aspect-square bg-white/5">
                {course.imageUrl ? (
                  <Image
                    src={course.imageUrl}
                    alt={course.name}
                    fill
                    quality={75}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold tracking-wide text-white/40 uppercase">
                    Imagem em breve
                  </div>
                )}
              </div>
              <div className="h-0.5 bg-primary-ja" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="bf-display min-h-14 text-2xl leading-tight font-normal">
                  {course.name}
                </h3>
                <p className="mt-2 min-h-18 flex-1 text-sm leading-relaxed text-white/65">
                  {course.promise}
                </p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p
                    className={`text-[11px] font-semibold tracking-[0.2em] uppercase ${ACCENT}`}
                  >
                    {blackfridayCourses.priceLabel}
                  </p>
                  <p className={`bf-display text-3xl font-normal ${ACCENT}`}>
                    {blackfridayCourses.price}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold tracking-[0.18em] text-white/40 uppercase">
                    Acesso vitalício
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-14">
          <p className="rounded-xl border border-white/15 bg-white/[0.03] px-5 py-4 text-base text-white sm:px-6 sm:text-lg">
            {blackfridayCoursesClose.label}{" "}
            <span className={`font-semibold ${ACCENT}`}>
              {blackfridayCoursesClose.price}
            </span>
          </p>
          <BlackFridayCta
            href="#checkout"
            button="courses"
            marker="inline"
            label={`${blackfridayCtaLabel} ↓`}
            className="mt-6 rounded-lg"
          />
        </div>
        <h2 className="bf-display mt-16 text-4xl font-normal sm:text-5xl">
          <Emphasis
            text={blackfridayCoursesClose.bridge}
            phrase="não é só isso"
          />
        </h2>
      </Section>

      <Section>
        <p className="text-lg leading-relaxed text-white/75">
          {blackfridayBonusIntro}
        </p>
        <ul
          className={cn(
            "mt-8 grid items-stretch gap-4",
            blackfridayBonuses.length > 1 && "md:grid-cols-2",
          )}
        >
          {blackfridayBonuses.map((bonus) => (
            <li key={bonus.name} className="h-full">
              <OfferCard
                eyebrow="Bônus"
                name={bonus.name}
                description={bonus.description}
                price={bonus.price}
              />
            </li>
          ))}
        </ul>
        <article className="mt-4 grid items-center gap-8 rounded-3xl border border-primary-ja/50 bg-[#10160c] px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:gap-16">
          <div>
            <p className="w-fit rounded-md border border-primary-ja/70 px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-primary-ja uppercase">
              {blackfridayMentorship.eyebrow}
            </p>
            <h3 className="bf-display mt-5 max-w-xl text-4xl leading-[1.05] font-normal sm:text-5xl">
              {blackfridayMentorship.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              {blackfridayMentorship.description}
            </p>
          </div>
          <div className="lg:border-l lg:border-white/10 lg:pl-12 lg:text-right">
            <p className="text-lg text-white/40 line-through">
              {blackfridayMentorship.fullPrice}
            </p>
            <p
              className={`bf-display mt-1 text-5xl font-normal tracking-tight sm:text-6xl ${ACCENT}`}
            >
              {blackfridayMentorship.price}
            </p>
            <p className="mt-2 text-[11px] font-semibold tracking-[0.16em] text-primary-ja uppercase">
              {blackfridayMentorship.priceLabel}
            </p>
          </div>
        </article>
      </Section>

      <Section>
        <h2 className="bf-display text-4xl leading-tight font-normal sm:text-5xl">
          <Emphasis text={blackfridayGifts.title} phrase="18/11" />
        </h2>
        <ul className="mt-8 grid items-stretch gap-4 md:grid-cols-2">
          {blackfridayExtras.items.map((item) => (
            <li key={item.name} className="h-full">
              <OfferCard
                eyebrow="Presente"
                name={item.name}
                note={"note" in item ? item.note : undefined}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="bf-display text-4xl leading-tight font-normal sm:text-5xl">
          {blackfridayStack.title}
        </h2>
        <dl className="mt-10 divide-y divide-white/10">
          {blackfridayStack.items.map((item) => (
            <div
              key={item.label}
              className="flex items-baseline justify-between gap-4 py-5"
            >
              <dt className="text-white/85">{item.label}</dt>
              <dd
                className={`bf-display shrink-0 text-2xl font-normal ${ACCENT}`}
              >
                {item.price}
              </dd>
            </div>
          ))}
          <div className="flex items-baseline justify-between gap-4 py-5">
            <dt className="text-lg font-semibold text-white">
              {blackfridayStack.totalLabel}
            </dt>
            <dd
              className={`bf-display shrink-0 text-3xl font-normal ${ACCENT}`}
            >
              {blackfridayStack.total}
            </dd>
          </div>
        </dl>
      </Section>

      <Section id="checkout" className="scroll-mt-20">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-dark-theme">
          <div className="border-b border-white/10 px-6 py-10 text-center sm:px-12">
            <h2 className="bf-display text-3xl leading-tight font-normal sm:text-5xl">
              <Emphasis text={blackfridayExtras.title} phrase="R$ 997,00" />
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              {blackfridayExtras.subtitle}
            </p>
          </div>
          <div className="grid items-stretch lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex h-full flex-col items-center justify-center p-6 sm:p-10">
              <h3 className="bf-display text-center text-3xl font-normal">
                {blackfridayOffer.title}
              </h3>
              <ul className="mt-5 flex w-fit max-w-full flex-col gap-2 text-left">
                {blackfridayOffer.items.map((item) => (
                  <li key={item} className="flex gap-3 text-white/90">
                    <span
                      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-ja text-xs font-bold text-dark-theme"
                      aria-hidden
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex h-full flex-col justify-between border-t border-white/10 bg-white/5 p-6 sm:p-10 lg:border-t-0 lg:border-l">
              <div className="space-y-3">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm text-white/45">
                    {blackfridayOffer.separatedLabel}
                  </p>
                  <p className="text-lg text-white/35 line-through">
                    {blackfridayOffer.separatedPrice}
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm text-white/45">
                    {blackfridayOffer.fairLabel}
                  </p>
                  <p className="text-lg text-white/35 line-through">
                    {blackfridayOffer.fairPrice}
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm text-white/55">
                  {blackfridayOffer.todayLabel}
                </p>
                <p
                  className={`bf-display mt-2 text-7xl leading-none font-normal tracking-tight sm:text-8xl ${ACCENT}`}
                >
                  {blackfridayOffer.cashPrice}
                </p>
                <p className="mt-3 text-white/70">
                  {blackfridayOffer.cashNote}
                </p>
                <p className="mt-1 text-lg text-white/80">
                  {blackfridayOffer.installments}
                </p>
              </div>
              <div className="mt-8">
                <BlackFridayCta
                  href={checkoutHref}
                  label={blackfridayOffer.acquireLabel}
                  size="large"
                  button="checkout"
                  marker="acquire"
                  solid
                  className="w-full"
                />
                <div className="mt-6 border-t border-white/10 pt-5 text-center">
                  <img
                    src="/images/payments/kiwify-bandeiras.svg"
                    alt="Kiwify, Mastercard, Visa, boleto e PayPal"
                    width={422}
                    height={35}
                    className="mx-auto h-7 w-auto max-w-full brightness-0 invert opacity-70"
                  />
                  <p className="mt-3 text-xs leading-relaxed text-white/55">
                    {blackfridayOffer.secure}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-px flex flex-col items-center text-center">
          <div className="relative h-80 w-48">
            <img
              src="/images/guarantee/linhas.svg"
              alt=""
              width={96}
              height={547}
              className="absolute top-0 left-1/2 h-72 w-auto -translate-x-1/2"
            />
            <img
              src="/images/guarantee/selo-7-dias.svg"
              alt="7 dias de garantia incondicional"
              width={276}
              height={276}
              className="guarantee-float absolute top-14 left-1/2 z-10 h-44 w-44 -translate-x-1/2"
            />
          </div>
          <h2 className="bf-display mt-2 max-w-3xl text-4xl leading-tight font-normal sm:text-5xl">
            7 dias de{" "}
            <em className={`${ACCENT} italic`}>garantia incondicional.</em>
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">
            {guaranteeBody}
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="rounded-3xl border border-white/10 px-6 py-8 sm:px-8">
            <h2 className="bf-display text-4xl leading-tight font-normal sm:text-5xl">
              {blackfridayAccess.lead}{" "}
              <em className={`${ACCENT} italic`}>{blackfridayAccess.emphasis}</em>
            </h2>
            <ol className="mt-8 space-y-4">
              {blackfridayAccess.steps.map((step, index) => (
                <li key={step.text} className="flex items-center gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-ja text-sm font-bold text-dark-theme">
                    {index + 1}
                  </span>
                  <p className="text-base leading-snug text-white/85">
                    <StepText text={step.text} highlight={step.highlight} />
                  </p>
                </li>
              ))}
            </ol>
            <BlackFridayCta
              href="#checkout"
              button="access"
              marker="inline"
              className="mt-8"
            />
          </div>
          <div>
            <h2 className="bf-display text-4xl leading-tight font-normal sm:text-5xl">
              Perguntas <em className={`${ACCENT} italic`}>frequentes.</em>
            </h2>
            <div className="mt-8">
              <FaqSection items={blackfridayFaq} tone="dark" />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="bf-display text-4xl leading-tight font-normal sm:text-5xl">
          Números <em className={`${ACCENT} italic`}>oficiais.</em>
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-white/60">
          {blackfridaySupport.note}
        </p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-3">
          {supportContacts.map((contact) => {
            const digits = contact.phone.replace(/\D/g, "");
            const href = digits
              ? `https://wa.me/${digits.startsWith("55") ? digits : `55${digits}`}`
              : undefined;
            return (
              <li key={contact.name}>
                <p className="text-sm font-bold tracking-wide text-white/50 uppercase">
                  {contact.name}
                </p>
                {href ? (
                  <a
                    href={href}
                    className={`bf-display mt-2 block text-2xl font-normal hover:opacity-90 ${ACCENT}`}
                  >
                    {contact.phone}
                  </a>
                ) : (
                  <p className="mt-2 text-lg text-white/40">A definir</p>
                )}
              </li>
            );
          })}
        </ul>
      </Section>

      <footer className="border-t border-white/15 px-6 py-8 text-center text-white-theme">
        <p>
          ©{new Date().getFullYear()} JA Índio Jiu Jitsu | Todos os direitos
          reservados
        </p>
        <p className="mt-2">
          Desenvolvido por{" "}
          <Link
            href="https://www.ffzanini.dev/"
            target="_blank"
            prefetch={false}
            className="hover:text-primary-ja"
          >
            Felipe Frantz Zanini
          </Link>
        </p>
      </footer>

      <StickyPurchaseBar />
    </main>
  );
}
