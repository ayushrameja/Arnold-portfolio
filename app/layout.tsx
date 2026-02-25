import type { Metadata, Viewport } from "next";
import Script from "next/script";

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
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            const key = "akd-theme";
            try {
              const stored = window.localStorage.getItem(key);
              const resolved = stored === "light" || stored === "dark"
                ? stored
                : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
              document.documentElement.dataset.theme = resolved;
              document.documentElement.style.colorScheme = resolved;
            } catch {
              const fallback = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
              document.documentElement.dataset.theme = fallback;
              document.documentElement.style.colorScheme = fallback;
            }
          })();`}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@100..900&family=Plaster&display=swap"
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
      <body className="min-h-dvh overflow-x-hidden font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
