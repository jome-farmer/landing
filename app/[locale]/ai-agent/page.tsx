'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from '@/lib/use-translations';

const iconCircle = 'flex size-12 items-center justify-center rounded-full border border-outline bg-background';

export default function AiAgentPage() {
  const t = useTranslations().aiAgentPage;
  const chatHref = `/${useLocale()}/ai-agent/chat/`;

  return (
    <>
      <section className="flex w-full justify-center overflow-hidden px-6 py-24 md:py-[140px]">
        <div className="grid w-full max-w-[1280px] items-center gap-16 md:grid-cols-12 md:gap-4">
          <div className="flex flex-col items-start gap-6 md:col-span-7">
            <span className="flex items-center gap-2 rounded-full border border-outline bg-outline/30 px-4 py-1.5">
              <img src="/images/agent/badge.svg" alt="" width={14.26} height={15} />
              <span className="text-xs font-bold uppercase tracking-[0.96px] text-accent">{t.badge}</span>
            </span>
            <h1 className="max-w-[600px] text-4xl md:text-[56px] leading-tight md:leading-[64px] font-bold tracking-[-1.12px]">
              {t.title}
            </h1>
            <p className="max-w-[672px] text-lg leading-7 text-muted">{t.subtitle}</p>
            <div className="flex flex-wrap gap-3 pt-3">
              <Link href={chatHref} className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-bold tracking-[0.96px] text-background hover:bg-primary transition-colors">
                <img src="/images/agent/chat.svg" alt="" width={15} height={15} />
                {t.startConversation}
              </Link>
              <Link href={chatHref} className="flex items-center gap-2 rounded-full border border-info px-6 py-3 text-xs font-bold tracking-[0.96px] hover:bg-info/10 transition-colors">
                <img src="/images/agent/play.svg" alt="" width={15} height={15} />
                {t.seeDemo}
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:col-span-5 md:justify-end">
            <div className="flex w-full max-w-[448px] rotate-2 flex-col gap-4 rounded-xl border border-outline bg-surface/80 p-6 backdrop-blur-[6px] sheen">
              <div className="flex items-center gap-3 border-b border-outline pb-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-accent">
                  <img src="/images/agent/leaf.svg" alt="" width={17.04} height={17.02} />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-[0.96px] text-accent">{t.status.label}</p>
                  <p>{t.status.value}</p>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-muted">{t.status.metric}</p>
                <p className="text-[28px] leading-8 font-bold tracking-[-0.28px] text-primary">82%</p>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-background">
                <div className="h-full w-[82%] rounded-full bg-primary" />
              </div>
              <p className="text-sm text-muted">{t.status.quote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full max-w-[1280px] flex-col items-center gap-20 px-6 py-20">
        <div className="flex max-w-[672px] flex-col gap-3 text-center">
          <h2 className="text-[32px] leading-10 font-semibold">{t.philosophy.title}</h2>
          <p className="text-lg leading-7 text-muted">{t.philosophy.subtitle}</p>
        </div>

        <div className="grid w-full gap-4 md:grid-cols-12">
          <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-xl border border-outline bg-surface p-6 sheen md:col-span-8">
            <img src="/images/agent/doctor-bg.svg" alt="" width={132} height={139} className="absolute end-0 top-0" />
            <div className="relative flex flex-col gap-2">
              <span className={iconCircle}>
                <img src="/images/agent/doctor.svg" alt="" width={14} height={19} />
              </span>
              <h3 className="pt-1 text-2xl leading-8 font-semibold">{t.doctor.title}</h3>
              <p className="max-w-[512px] text-muted">{t.doctor.description}</p>
            </div>
            <div className="flex items-center gap-6 self-start rounded-lg border border-outline/50 bg-background/50 p-4 backdrop-blur-[2px]">
              <div className="relative size-16 shrink-0">
                <div className="absolute inset-0 -rotate-90">
                  <img src="/images/agent/ring-track.svg" alt="" width={61.92} height={61.92} className="absolute left-px top-px" />
                  <img src="/images/agent/ring-arc.svg" alt="" width={61.92} height={61.91} className="absolute left-px top-px" />
                </div>
                <span className="absolute inset-0 flex items-center justify-center font-bold">92%</span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-bold tracking-[0.96px] text-accent">{t.doctor.reasoning}</p>
                <p>{t.doctor.finding}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-xl border border-outline bg-surface p-6 sheen md:col-span-4">
            <span className={`${iconCircle} mb-3`}>
              <img src="/images/agent/sliders.svg" alt="" width={18} height={18} />
            </span>
            <h3 className="pb-2 text-2xl leading-8 font-semibold">{t.whatIf.title}</h3>
            <p className="pb-6 text-muted">{t.whatIf.description}</p>
            <div className="mt-auto flex flex-col gap-4 rounded-lg border border-outline/50 bg-background/50 p-4">
              <div className="flex justify-between text-xs font-bold tracking-[0.96px]">
                <span className="text-muted">{t.whatIf.delay}</span>
                <span className="text-primary">{t.whatIf.delayValue}</span>
              </div>
              <div className="relative h-3 rounded-full bg-soil">
                <div className="absolute start-[68.67%] end-1/4 top-1/2 h-5 -translate-y-1/2 rounded-full bg-accent" />
              </div>
              <div className="flex items-end justify-between border-t border-outline/50 pt-2">
                <span className="text-xs font-bold tracking-[0.96px] text-muted">{t.whatIf.waterSaved}</span>
                <span className="text-xl leading-[30px] text-clay">{t.whatIf.waterValue}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-xl border border-outline bg-surface p-6 sheen md:col-span-12 md:flex-row">
            <div className="flex flex-1 flex-col gap-2">
              <span className={iconCircle}>
                <img src="/images/agent/advice.svg" alt="" width={20} height={20} />
              </span>
              <h3 className="pt-1 text-2xl leading-8 font-semibold">{t.advice.title}</h3>
              <p className="max-w-[512px] text-muted">{t.advice.description}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {t.advice.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-outline px-3 py-1 text-xs font-bold tracking-[0.96px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-1 flex-col gap-4 rounded-lg border border-outline/50 bg-background p-4">
              <p className="max-w-[440px] self-end rounded-lg rounded-se-none border border-outline/30 bg-surface p-3 text-sm">
                {t.advice.question}
              </p>
              <div className="flex max-w-[494px] gap-3 rounded-lg rounded-ss-none border border-outline/30 bg-outline/20 p-3">
                <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent">
                  <img src="/images/agent/leaf-sm.svg" alt="" width={8.52} height={8.51} />
                </span>
                <p className="text-sm">{t.advice.answer}</p>
              </div>
              <Link
                href={chatHref}
                className="flex items-center justify-between rounded-md border border-outline bg-surface py-3.5 ps-4 pe-3 text-muted hover:border-accent transition-colors"
              >
                {t.advice.placeholder}
                <img src="/images/agent/send.svg" alt="" width={19} height={16} className="rtl:-scale-x-100" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-outline/30 bg-raised px-6 py-20">
        <div className="mx-auto flex max-w-[672px] flex-col items-center gap-3 text-center">
          <h2 className="text-[32px] leading-10 font-semibold">{t.cta.title}</h2>
          <p className="pb-3 text-lg leading-7 text-muted">{t.cta.subtitle}</p>
          <Link href={chatHref} className="flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-bold text-background hover:bg-primary transition-colors">
            <img src="/images/agent/chat-cta.svg" alt="" width={20} height={20} />
            {t.startConversation}
          </Link>
        </div>
      </section>
    </>
  );
}
