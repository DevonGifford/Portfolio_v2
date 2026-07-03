import React from "react";
import { inter, firaCode, montserrat } from "./fonts";
import type { Metadata } from "next";
import MotionProvider from "@/components/providers/MotionProvider";
import { siteConfig } from "@/site.config";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.seo.url,
    siteName: siteConfig.name,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.seo.url,
    jobTitle: siteConfig.role,
    email: siteConfig.email,
    sameAs: Object.values(siteConfig.social),
  };

  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} ${montserrat.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
