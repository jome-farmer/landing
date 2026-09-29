'use client';

import { useTranslations } from '@/lib/use-translations';

export default function Features() {
  const t = useTranslations();

  const features = [
    { icon: 'icon-plant-doctor.svg', w: 19.95, h: 19.95, ...t.features.aiPlantDoctor },
    { icon: 'icon-injection.svg', w: 19, h: 20.5, ...t.features.smartInjection },
    { icon: 'icon-iot.svg', w: 20, h: 17.25, ...t.features.iotConnectivity },
  ];

  return (
    <section className="flex w-full max-w-[1280px] flex-col gap-16 px-6 py-20" id="features">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent">{t.features.title}</p>
        <h2 className="text-[32px] leading-10 font-semibold text-on-surface">{t.features.heading}</h2>
        <p className="max-w-[672px] text-base text-muted">{t.features.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col gap-4 rounded-xl border border-outline bg-surface p-8 sheen hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-surface-variant">
              <img src={`/images/${feature.icon}`} alt="" width={feature.w} height={feature.h} />
            </div>
            <h3 className="text-2xl leading-8 font-semibold text-on-surface">{feature.title}</h3>
            <p className="text-base text-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
