import type { ReactNode } from "react";

import { fontMontserrat } from "./fonts";

import "./globals.css";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${fontMontserrat.variable} ${fontMontserrat.className} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
