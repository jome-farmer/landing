import type { Metadata } from "next";
import Script from "next/script";
import { Hanken_Grotesk, Vazirmatn } from "next/font/google";
import "../globals.css";
import StoreProvider from "@/lib/store-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { type Locale } from "@/lib/translations";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}

const hankenGrotesk = Hanken_Grotesk({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
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
            : hankenGrotesk.variable
        } antialiased`}
        style={{
          fontFamily: isRTL
            ? "var(--font-vazirmatn), sans-serif"
            : "var(--font-hanken-grotesk), sans-serif",
        }}
      >
        <StoreProvider>
          <div className="relative flex min-h-screen w-full flex-col">
            <Header />
            <main className="flex flex-1 w-full flex-col items-center">{children}</main>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
