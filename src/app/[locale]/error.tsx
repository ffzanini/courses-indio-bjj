"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: Readonly<ErrorProps>) {
  const pathname = usePathname();
  const locale = pathname.split("/").filter(Boolean)[0] === "en" ? "en" : "pt";

  useEffect(() => {
    console.error(error);
  }, [error]);

  const copy =
    locale === "en"
      ? {
          title: "Something went wrong",
          body: "An unexpected error occurred while loading this page.",
          retry: "Try again",
          home: "Home",
        }
      : {
          title: "Ops, algo deu errado",
          body: "Ocorreu um erro inesperado ao carregar esta página.",
          retry: "Tentar novamente",
          home: "Início",
        };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <h1 className="text-3xl font-semibold text-foreground">{copy.title}</h1>
      <p className="max-w-md text-base text-muted-foreground">{copy.body}</p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full border border-foreground/20 px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary-ja hover:bg-primary-ja hover:text-dark-theme"
        >
          {copy.retry}
        </button>
        <a
          href={`/${locale}`}
          className="rounded-full border border-foreground/20 px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary-ja hover:bg-primary-ja hover:text-dark-theme"
        >
          {copy.home}
        </a>
      </div>
    </main>
  );
}
