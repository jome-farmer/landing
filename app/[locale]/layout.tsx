import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Outfit, Inter } from "next/font/google";
import "../globals.css";
import StoreProvider from "@/lib/store-provider";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import RouteSplash from "@/components/RouteSplash";
import { getTranslations, type Locale } from "@/lib/translations";

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

// Splash with a real progress bar. window.__splash(waitForLoad) watches the page's eager images and scene
// backgrounds (rescanning as the HTML streams in), fills the bar as they finish, and lifts the splash when all
// are in (and, on first load, the window has loaded). Time also nudges the bar so it never looks frozen,
// and after 8s it gives up waiting. Inline so it runs before React; RouteSplash reuses it on tab changes.
const SPLASH = `(function(){
var d=document.documentElement,timer;
function set(p){var s=document.getElementById('splash');if(!s)return;s.style.setProperty('--p',p);var t=s.querySelector('.splash-pct');if(t)t.textContent=Math.round(p*100)+'%'}
function track(src){var o={ok:false},im=new Image();im.onload=im.onerror=function(){o.ok=true};im.src=src;if(im.complete)o.ok=true;return o}
window.__splash=function(waitLoad){
  clearInterval(timer);var urls={},t0=Date.now(),shown=0;
  function scan(){
    [].forEach.call(document.images,function(i){if(i.loading!=='lazy'&&i.src&&!urls[i.src])urls[i.src]=track(i.src)});
    [].forEach.call(document.querySelectorAll('.hs'),function(e){var m=(e.style.getPropertyValue('--scene')||'').match(/url\\("?([^")]+)"?\\)/);if(m&&!urls[m[1]])urls[m[1]]=track(m[1])});
  }
  set(0);
  timer=setInterval(function(){
    scan();var k=Object.keys(urls),n=k.filter(function(u){return urls[u].ok}).length,t=Date.now()-t0;
    var ready=(!waitLoad||document.readyState==='complete')&&n===k.length&&(k.length>0||document.readyState==='complete');
    shown=Math.max(shown,Math.min(.97,(k.length?n/k.length:0)*.9+Math.min(t/8000,1)*.1));
    set(ready?1:shown);
    if(ready||t>8000){clearInterval(timer);set(1);setTimeout(function(){d.setAttribute('data-loaded','')},300)}
  },120);
};
window.__splash(true);
})()`;

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
  const t = getTranslations(localeTyped);

  // Persian has no serif pairing here, so both roles use Vazirmatn (bundled @font-face in globals.css)
  const fonts = {
    "--serif": isRTL ? "Vazirmatn, Tahoma, sans-serif" : "var(--font-outfit), system-ui, sans-serif",
    "--sans": isRTL ? "Vazirmatn, Tahoma, sans-serif" : "var(--font-inter), system-ui, sans-serif",
  } as CSSProperties;

  return (
    <html lang={localeTyped} dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className={isRTL ? undefined : `${outfit.variable} ${inter.variable}`} style={fonts}>
        {/* the inline script below updates the splash before React hydrates, so React must not diff it */}
        <div id="splash" aria-hidden="true" suppressHydrationWarning>
          <Logo gradient="jome-leaf-splash" />
          <p className="splash-quote">{t.footer.quote}</p>
          <div className="splash-progress">
            <i />
            <span><span>{t.common.loading}</span><b className="splash-pct" dir="ltr" suppressHydrationWarning>0%</b></span>
          </div>
        </div>
        <noscript><style>{"#splash{display:none}"}</style></noscript>
        <script dangerouslySetInnerHTML={{ __html: SPLASH }} />
        <RouteSplash />
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
