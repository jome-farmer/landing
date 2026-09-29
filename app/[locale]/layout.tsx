import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Instrument_Serif, Inter, Vazirmatn } from "next/font/google";
import "../globals.css";
import StoreProvider from "@/lib/store-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { type Locale } from "@/lib/translations";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const vazirmatn = Vazirmatn({
  weight: ["400", "500"],
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

  // Persian has no serif pairing here, so both roles use Vazirmatn
  const fonts = {
    "--serif": isRTL ? "var(--font-vazirmatn), serif" : "var(--font-instrument-serif), Georgia, serif",
    "--sans": isRTL ? "var(--font-vazirmatn), sans-serif" : "var(--font-inter), system-ui, sans-serif",
  } as CSSProperties;

  return (
    <html lang={localeTyped} dir={isRTL ? "rtl" : "ltr"}>
      <body className={isRTL ? vazirmatn.variable : `${instrumentSerif.variable} ${inter.variable}`} style={fonts}>
        <StoreProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
