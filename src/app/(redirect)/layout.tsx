import type { ReactNode } from "react";

import { fontMontserrat } from "../fonts";

import "../globals.css";

type Props = {
  children: ReactNode;
};

export default function RedirectLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fontMontserrat.variable} ${fontMontserrat.className} min-h-screen antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
