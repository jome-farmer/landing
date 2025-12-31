'use client';

import { useTranslations } from '@/lib/use-translations';

export default function CTA() {
  const t = useTranslations();

  return (
    <section className="w-full flex justify-center py-20 px-4 md:px-10">
      <div className="max-w-[1280px] w-full rounded-2xl overflow-hidden relative border border-[#3b5443]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBv1BOKiSL_iGXCfsFui7ZQYBumX_Wyq3gb-z7Mix__fXC2kAE_4rooBmdVJPwnrGAQ1_9ceHXRSlfj4MaIV0G63W_dhW0DQTtnM-AqWxk7K2xVoztCf_KOUxCsgKVvEVzPDZ8uUQaW7QVZ1RhueUKc26cbeyJVDtqT75dmNWSFoSrSDvK70MhmWHso2-tcAviEEd0I5dim1TlaQnvXhj22iMtD0Fze9SCOTQ3z6PIZeDMlIZY_M3R75NPv2zSvfnWzNx2LT8o3qvk')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/90 to-transparent"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-16">
          <div className="flex flex-col gap-4 max-w-xl">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">{t.cta.title}</h2>
            <p className="text-gray-300 text-lg">{t.cta.description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold hover:bg-opacity-90 transition-all">
              {t.cta.getStarted}
            </button>
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-white text-white text-base font-bold hover:bg-white/10 transition-all">
              {t.cta.contactSales}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
