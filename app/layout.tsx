import type { Metadata, Viewport } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import { eventConfig } from "@/lib/event-config";
import "../styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-display",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: `Invitation anniversaire de ${eventConfig.childName} — ${eventConfig.age} ans`,
    template: `%s | Invitation anniversaire de ${eventConfig.childName}`,
  },
  description: eventConfig.eventDescription,
  keywords: [
    "invitation",
    "anniversaire",
    eventConfig.childName,
    "super héros",
    "enfant",
  ],
  authors: [{ name: `Famille de ${eventConfig.childName}` }],
  metadataBase: new URL(eventConfig.siteUrl),
  openGraph: {
    title: `Invitation anniversaire de ${eventConfig.childName} — ${eventConfig.age} ans`,
    description: eventConfig.eventDescription,
    url: eventConfig.siteUrl,
    siteName: `Invitation anniversaire de ${eventConfig.childName}`,
    images: [
      {
        url: "/images/stitch/invitation-nolan.png",
        width: 1200,
        height: 630,
        alt: `Invitation anniversaire de ${eventConfig.childName}`,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Invitation anniversaire de ${eventConfig.childName} — ${eventConfig.age} ans`,
    description: eventConfig.eventDescription,
    images: ["/images/stitch/invitation-nolan.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/images/stitch/invitation-nolan.png",
    apple: "/images/stitch/invitation-nolan.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#E92828",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${nunito.variable} ${nunitoSans.variable} font-body bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
