'use client';

import { useTranslations } from '@/lib/use-translations';

const card = 'relative overflow-hidden rounded-xl border border-outline/30 bg-surface p-8 sheen';
const cardTitle = 'text-2xl leading-8 font-semibold';

export default function NutrientsPage() {
  const t = useTranslations().nutrientsPage;

  const npk = [
    { label: t.output.nitrogen, width: '75%', bar: 'bg-info' },
    { label: t.output.phosphorus, width: '60%', bar: 'bg-primary' },
    { label: t.output.potassium, width: '85%', bar: 'bg-clay' },
  ];
  const readings = [
    { value: 42, label: 'N', color: 'text-info' },
    { value: 18, label: 'P', color: 'text-primary' },
    { value: 36, label: 'K', color: 'text-clay' },
  ];

  return (
    <>
      <section className="relative flex min-h-[739px] w-full items-center justify-center px-6 py-24 md:py-[140px]">
        <img src="/images/nutrients/hero.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-40" />
        <div className="relative grid w-full max-w-[1280px] items-center gap-12 md:grid-cols-2 md:gap-4">
          <div className="flex flex-col items-start gap-6">
            <span className="rounded-full bg-outline px-3 py-1 text-xs font-bold tracking-[0.96px]">{t.badge}</span>
            <h1 className="max-w-[600px] text-4xl md:text-[56px] leading-tight md:leading-[64px] font-bold tracking-[-1.12px]">{t.title}</h1>
            <p className="max-w-[512px] text-lg leading-7 text-muted">{t.subtitle}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="cursor-pointer rounded bg-accent px-6 py-3 text-xs font-bold tracking-[0.96px] text-background hover:bg-primary transition-colors">
                {t.optimize}
              </button>
              <a href="#delivery" className="rounded border border-info px-6 py-3 text-xs font-bold tracking-[0.96px] hover:bg-info/10 transition-colors">
                {t.learnMore}
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="flex w-full max-w-[384px] flex-col gap-4 rounded-lg border border-outline/50 bg-background/70 p-6 backdrop-blur-[4px] sheen">
              <div className="flex items-center justify-between border-b border-outline/30 pb-2">
                <span className="text-xs font-bold tracking-[0.96px] text-accent">{t.output.label}</span>
                <span className="text-[28px] leading-8 font-bold tracking-[-0.28px]">{t.output.value}</span>
              </div>
              <div className="flex flex-col gap-3">
                {npk.map((row) => (
                  <div key={row.label} className="flex items-center gap-2">
                    <span className="w-32 shrink-0 text-muted">{row.label}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-variant">
                      <div className={`h-full rounded-full ${row.bar}`} style={{ width: row.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="w-full bg-deep px-6 py-20">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-16">
          <div className="flex max-w-[672px] flex-col gap-4 text-center">
            <h2 className="text-[32px] leading-10 font-semibold">{t.section.title}</h2>
            <p className="text-lg leading-7 text-muted">{t.section.subtitle}</p>
          </div>

          <div className="grid w-full gap-4 md:grid-cols-12">
            <div className={`${card} min-h-[328px] md:col-span-8`}>
              <img
                src="/images/nutrients/map.jpg"
                alt=""
                className="absolute bottom-0 end-0 h-2/3 w-2/3 object-cover object-right opacity-30"
              />
              <div className="relative flex max-w-[448px] flex-col gap-2">
                <img src="/images/nutrients/tractor.svg" alt="" width={33} height={25.8} />
                <h3 className={`${cardTitle} pt-2`}>{t.targeting.title}</h3>
                <p className="text-muted">{t.targeting.description}</p>
              </div>
            </div>

            <div className={`${card} flex flex-col gap-6 md:col-span-4`}>
              <div className="flex flex-col gap-2">
                <img src="/images/nutrients/sensor.svg" alt="" width={30} height={21.23} />
                <h3 className={`${cardTitle} pt-2`}>{t.monitoring.title}</h3>
                <p className="text-sm text-muted">{t.monitoring.description}</p>
              </div>
              <div className="flex justify-around rounded-lg border border-outline bg-background p-4" dir="ltr">
                {readings.map((r, i) => (
                  <div key={r.label} className="flex items-stretch">
                    {i > 0 && <span className="me-10 w-px bg-outline" />}
                    <div className="flex flex-col items-center">
                      <span className={`text-[28px] leading-8 font-bold tracking-[-0.28px] ${r.color}`}>{r.value}</span>
                      <span className="text-xs font-bold tracking-[0.96px] text-muted">{r.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${card} flex min-h-[340px] flex-col justify-between md:col-span-5`}>
              <div className="h-[27px] overflow-hidden">
                <img src="/images/nutrients/sprout.svg" alt="" width={438} height={27} className="max-w-none" />
              </div>
              <h3 className={`${cardTitle} pt-4 pb-2`}>{t.engine.title}</h3>
              <p className="pb-6 text-muted">{t.engine.description}</p>
              <div className="flex items-center gap-4 rounded-lg border border-outline bg-background p-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-4 border-soil text-xs font-bold tracking-[0.96px] text-accent">
                  94%
                </span>
                <div>
                  <p className="text-xs font-bold tracking-[0.96px]">{t.engine.confidence}</p>
                  <p className="text-sm text-muted">{t.engine.blend}</p>
                </div>
              </div>
            </div>

            <div className={`${card} flex min-h-[340px] items-center md:col-span-7`}>
              <img
                src="/images/nutrients/jug.jpg"
                alt=""
                className="absolute inset-y-0 end-0 h-full w-1/2 object-cover opacity-60 mix-blend-luminosity"
              />
              <div className="relative flex max-w-[448px] flex-col items-start gap-2 md:max-w-[50%]">
                <span className="rounded-sm bg-rust-deep px-2 py-1 text-xs font-bold tracking-[0.96px] text-rust">{t.pure.badge}</span>
                <h3 className={`${cardTitle} pt-2`}>{t.pure.title}</h3>
                <p className="text-muted">{t.pure.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
