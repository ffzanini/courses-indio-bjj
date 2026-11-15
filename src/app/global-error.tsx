"use client";

import { useEffect } from "react";

import { fontMontserrat } from "@/app/fonts";

import "./globals.css";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({
  error,
  reset,
}: Readonly<GlobalErrorProps>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body
        className={`${fontMontserrat.className} flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center`}
      >
        <h1 className="text-3xl font-semibold">Ops, algo deu errado</h1>
        <button
          type="button"
          onClick={reset}
          className="rounded-full border border-black/15 px-5 py-2 text-sm font-semibold"
        >
          Tentar novamente
        </button>
      </body>
    </html>
  );
}
