import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Outfit, Inter } from "next/font/google";
import "../globals.css";
import StoreProvider from "@/lib/store-provider";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { type Locale } from "@/lib/translations";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}

const outfit = Outfit({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
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

  // Persian has no serif pairing here, so both roles use Vazirmatn (bundled @font-face in globals.css)
  const fonts = {
    "--serif": isRTL ? "Vazirmatn, Tahoma, sans-serif" : "var(--font-outfit), system-ui, sans-serif",
    "--sans": isRTL ? "Vazirmatn, Tahoma, sans-serif" : "var(--font-inter), system-ui, sans-serif",
  } as CSSProperties;

  return (
    <html lang={localeTyped} dir={isRTL ? "rtl" : "ltr"}>
      <body className={isRTL ? undefined : `${outfit.variable} ${inter.variable}`} style={fonts}>
        <StoreProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Contact />
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
