import React from "react";
import { inter, firaCode, montserrat } from "./fonts";
import type { Metadata } from "next";
import MotionProvider from "@/components/providers/MotionProvider";
import { siteConfig } from "@/site.config";

import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} ${montserrat.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
