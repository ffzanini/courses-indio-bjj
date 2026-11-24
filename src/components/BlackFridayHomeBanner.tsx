"use client";

import { useSyncExternalStore } from "react";

/** Meia-noite de 1º de dezembro de 2026, horário de Brasília. */
const BANNER_CLOSES_AT = Date.parse("2026-12-01T00:00:00-03:00");

const hideBannerScript = `if(Date.now()>=${BANNER_CLOSES_AT})document.documentElement.dataset.bfBanner="closed"`;

function subscribe(onStoreChange: () => void) {
  const remaining = BANNER_CLOSES_AT - Date.now();
  if (remaining <= 0) return () => {};
  const id = window.setTimeout(onStoreChange, remaining);
  return () => window.clearTimeout(id);
}

function isBannerVisible() {
  return Date.now() < BANNER_CLOSES_AT;
}

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

export function BlackFridayHomeBanner({
  text,
  cta,
}: {
  text: string;
  cta: string;
}) {
  const visible = useSyncExternalStore(
    subscribe,
    isBannerVisible,
    () => true,
  );

  if (!visible) return null;

  return (
    <div data-bf-home-banner>
      <script dangerouslySetInnerHTML={{ __html: hideBannerScript }} />
      <a
        href="/blackfriday"
        className="group flex flex-col items-start justify-between gap-5 rounded-3xl border-2 border-primary-ja bg-dark-theme px-6 py-6 text-white-theme shadow-[0_18px_50px_rgba(209,255,0,0.16)] sm:flex-row sm:items-center sm:px-8 sm:py-8"
      >
        <span className="bf-display text-2xl leading-tight font-normal sm:text-4xl">
          <Emphasis text={text} phrase="Ultra Black Friday" />
        </span>
        <span className="shrink-0 rounded-full bg-primary-ja px-6 py-3.5 text-sm font-bold tracking-wide text-dark-theme uppercase shadow-[0_8px_24px_rgba(209,255,0,0.35)] transition group-hover:brightness-110">
          {cta}
        </span>
      </a>
    </div>
  );
}
