import type { Metadata, Viewport } from "next";

import "./globals.css";
import ClientLayout from "./ClientLayout";
import { BASE_URL } from "@/constants/links";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Arnold Kevin Desouza | Portfolio",
  description:
    "Data Analyst & Engineer turning complex data into actionable insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Inter:wght@100..900&family=Lora:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Arnold" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-dvh overflow-x-hidden bg-zinc-950 font-sans text-zinc-50 antialiased selection:bg-mutedGold/30 selection:text-zinc-50">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
