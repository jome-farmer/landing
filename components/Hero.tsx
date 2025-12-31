'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from '@/lib/use-translations';
import Icon from './Icon';
import { type Locale } from '@/lib/translations';

export default function Hero() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as Locale) || 'en';
  const isRTL = locale === 'fa';

  return (
    <section className="w-full flex justify-center py-5 md:py-10 px-4 md:px-10">
      <div className="max-w-[1280px] w-full">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 relative overflow-hidden group"
              style={{
                backgroundImage: `linear-gradient(rgba(16, 34, 22, 0.7) 0%, rgba(16, 34, 22, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPy7D5y3LbG7SJ82IaOA6JegUb1s43kiZfoc0FlFOa__AbBok0u9gssrxfjzAeC58p1sDx6hlMUf74Lxh1w_ScXpOVh-Paw-FCyX4db43pH5ZD0LoKwoeX2Ud8D7pBBECmepd0OSzysVcY55emmTXrRddaKvbV4_J0bI9NuDtdTkZzGlrQI8CddEOkZGg_dT4M5e6LZXHk0Brka9NTOWrl5cVQfVfGOt0N706-ThO6LwS_2tJ9jr-cU__hYkSzBeOK-484R2uzoHA")`,
              }}
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background-dark/80 via-transparent to-background-dark/90 pointer-events-none"></div>
              <div className="flex flex-col gap-4 text-center z-10 max-w-4xl animate-fade-in-up">
                <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mx-auto mb-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">
                    {t.hero.systemOnline}
                  </span>
                </div>
                <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] tracking-[-0.033em]">
                  {t.hero.title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400">
                    {t.hero.titleHighlight}
                  </span>
                </h1>
                <h2 className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mt-4">
                  {t.hero.subtitle}
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 justify-center mt-8 z-10">
                <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform">
                  <span className="truncate">{t.hero.getStarted}</span>
                </button>
                <button className={`flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="truncate">{t.hero.watchDemo}</span>
                  <Icon 
                    name="play_circle" 
                    className={`text-lg ${isRTL ? 'mr-2 scale-x-[-1]' : 'ml-2'}`} 
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
