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
  icons: { icon: siteConfig.seo.favicon },
  alternates: { canonical: siteConfig.seo.canonical },
  openGraph: {
    type: "website",
    url: siteConfig.seo.url,
    siteName: siteConfig.name,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    locale: siteConfig.seo.locale,
    ...(siteConfig.seo.ogImage && { images: [{ url: siteConfig.seo.ogImage }] }),
  },
  twitter: {
    card: siteConfig.seo.ogImage ? "summary_large_image" : "summary",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    ...(siteConfig.seo.ogImage && { images: [siteConfig.seo.ogImage] }),
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
    <html
      lang={siteConfig.seo.lang}
      className={`${inter.variable} ${firaCode.variable} ${montserrat.variable}`}
    >
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
