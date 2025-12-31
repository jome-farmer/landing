import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Sans, Space_Grotesk } from "next/font/google";
import { Vazirmatn } from "next/font/google";
import "../globals.css";
import StoreProvider from "@/lib/store-provider";
import { type Locale } from "@/lib/translations";

const notoSans = Noto_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const vazirmatn = Vazirmatn({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "JoME Smart Irrigation",
  description: "Precision Agriculture Powered by AI",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localeTyped = locale as Locale;
  const isRTL = localeTyped === "fa";

  return (
    <html lang={localeTyped} dir={isRTL ? "rtl" : "ltr"} className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${
          isRTL
            ? vazirmatn.variable
            : `${notoSans.variable} ${spaceGrotesk.variable}`
        } antialiased`}
        style={{
          fontFamily: isRTL
            ? "var(--font-vazirmatn), sans-serif"
            : "var(--font-space-grotesk), var(--font-noto-sans), sans-serif",
        }}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
