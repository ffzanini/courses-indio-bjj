"use client";

import { trackEvent } from "@/libs/facebook-pixel";

export type CourseOfferCopy = {
  badge: string;
  title: string;
  subtitle: string;
  priceTitle: string;
  lead: string;
  from: string;
  oldPrice: string;
  bridge: string;
  price: string;
  installments: string;
  includes: string[];
  button: string;
  secure: string;
};

export type CourseGuaranteeCopy = {
  title: string;
  subtitle: string;
  description: string;
};

function splitInstallment(price: string) {
  const mark = price.indexOf("R$");
  if (mark <= 0) return { prefix: "", amount: price };
  return {
    prefix: price.slice(0, mark).trim(),
    amount: price.slice(mark).trim(),
  };
}

export function CourseOffer({
  copy,
  guarantee,
  href,
}: {
  copy: CourseOfferCopy;
  guarantee: CourseGuaranteeCopy;
  href: string;
}) {
  const { prefix, amount } = splitInstallment(copy.price);

  return (
    <section id="callAction" className="bg-dark-theme py-14 text-white-theme lg:py-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-white/70">{copy.subtitle}</p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_24rem_minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:gap-x-16 lg:gap-y-0">
          <div className="order-1 text-center lg:col-start-1 lg:row-start-1 lg:text-left">
            <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
              {copy.priceTitle}
            </h3>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70 lg:mx-0">
              {copy.lead}
            </p>
          </div>

          <div className="relative z-10 order-2 mx-auto w-full max-w-sm rounded-2xl bg-white px-6 py-7 text-center text-dark-theme shadow-[0_24px_60px_rgba(0,0,0,0.35)] lg:col-start-2 lg:row-start-1">
            <p className="text-2xl font-bold">{copy.badge}</p>
            <p className="mx-auto mt-4 inline-flex items-center rounded-md border border-dark-theme/15 px-3 py-1 text-sm text-dark-theme/80">
              {copy.from} <s className="mx-1 text-[#ff3b3b]">{copy.oldPrice}</s>{" "}
              {copy.bridge}
            </p>
            <div className="my-4 h-px bg-dark-theme/10" />
            <p className="flex flex-wrap items-end justify-center gap-x-2 gap-y-1 leading-none">
              {prefix ? (
                <span className="pb-1 text-lg font-medium text-dark-theme/80">
                  {prefix}
                </span>
              ) : null}
              <span className="text-5xl font-bold tracking-tight">{amount}</span>
            </p>
            <p className="mt-2 text-base text-dark-theme/70">{copy.installments}</p>
            <a
              className="mt-5 flex w-full items-center justify-center rounded-md bg-[#ff3b3b] px-4 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition hover:brightness-110"
              href={href}
              onClick={() =>
                trackEvent("ButtonClick", { button: "paymentButton" })
              }
              target="_blank"
              rel="noreferrer"
            >
              {copy.button}
            </a>
            <div className="my-4 h-px bg-dark-theme/10" />
            <img
              src="/images/payments/kiwify-bandeiras.svg"
              alt="Kiwify, Mastercard, Visa, boleto e PayPal"
              width={422}
              height={35}
              className="mx-auto h-7 w-auto max-w-full"
            />
            <p className="mt-3 text-xs leading-relaxed text-dark-theme/55">
              {copy.secure}
            </p>
          </div>

          <ul className="order-4 mx-auto max-w-sm space-y-3 text-left text-base leading-snug lg:col-start-3 lg:row-start-1 lg:mx-0">
            {copy.includes.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff3b3b]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="relative z-0 order-3 -mt-2 flex h-64 items-start justify-center lg:col-start-2 lg:row-start-2">
            <img
              src="/images/guarantee/linhas.svg"
              alt=""
              width={96}
              height={547}
              className="h-64 w-auto"
            />
            <img
              src="/images/guarantee/selo-7-dias.svg"
              alt={guarantee.title}
              width={276}
              height={276}
              className="guarantee-float absolute top-8 h-40 w-40"
            />
          </div>
        </div>

        <div id="garantia" className="mx-auto mt-8 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">{guarantee.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
            {guarantee.subtitle} {guarantee.description}
          </p>
        </div>
      </div>
    </section>
  );
}
