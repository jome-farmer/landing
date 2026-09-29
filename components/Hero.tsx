'use client';

import { useTranslations } from '@/lib/use-translations';

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative flex min-h-[631px] w-full items-center justify-center overflow-hidden pt-[178px] pb-[98px]">
      <img src="/images/hero.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background" />
      <div className="relative flex max-w-[896px] flex-col items-center gap-6 px-6 text-center">
        <div className="flex items-center gap-2 rounded-full border border-outline bg-surface/80 px-4 py-1.5 backdrop-blur-[4px] sheen">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-[1.2px] text-primary">{t.hero.systemOnline}</span>
        </div>
        <h1 className="max-w-[768px] text-4xl md:text-[56px] leading-tight md:leading-[64px] font-bold tracking-[-1.12px] text-on-surface">
          {t.hero.title}
          <br />
          <span className="text-primary">{t.hero.titleHighlight}</span>
        </h1>
        <p className="max-w-[672px] text-lg leading-7 text-muted">{t.hero.subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button className="cursor-pointer rounded-lg bg-accent px-8 py-3 text-lg font-bold text-background hover:bg-primary transition-colors">
            {t.hero.getStarted}
          </button>
          <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-outline bg-surface px-8 py-3 text-lg text-on-surface sheen hover:border-accent transition-colors">
            <img src="/images/icon-play.svg" alt="" width={20} height={20} />
            {t.hero.watchDemo}
          </button>
        </div>
      </div>
    </section>
  );
}
