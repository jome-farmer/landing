'use client';

import { useTranslations } from '@/lib/use-translations';

type Feature = { icon: string; w: number; h: number; title: string; body?: string };

function Showcase({
  title,
  description,
  features,
  image,
  imageClass,
  reverse = false,
}: {
  title: string;
  description: string;
  features: Feature[];
  image: string;
  imageClass: string;
  reverse?: boolean;
}) {
  return (
    <section className="relative w-full overflow-hidden rounded-xl border border-outline bg-surface p-6 md:p-20">
      <div className="absolute inset-0 bg-[linear-gradient(155deg,rgb(255_255_255/0.02),transparent)]" />
      <div className="relative grid items-center gap-6 md:grid-cols-12">
        <div className={`flex flex-col gap-3 md:col-span-5 ${reverse ? 'md:order-2 md:col-start-8' : ''}`}>
          <h2 className="text-[32px] leading-10 font-semibold">{title}</h2>
          <p className="text-muted">{description}</p>
          <ul className="flex flex-col gap-4 pt-4">
            {features.map((f) => (
              <li key={f.title} className="flex items-start gap-3">
                <img src={`/images/hardware/${f.icon}`} alt="" width={f.w} height={f.h} className="mt-0.5 shrink-0" />
                <div>
                  <p className={f.body ? 'font-bold' : ''}>{f.title}</p>
                  {f.body && <p className="text-muted">{f.body}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={`h-[260px] overflow-hidden rounded-lg bg-background md:h-[400px] ${reverse ? 'md:col-span-7 md:col-start-1' : 'md:col-span-7'}`}>
          <img src={`/images/hardware/${image}`} alt="" className={`size-full object-cover ${imageClass}`} />
        </div>
      </div>
    </section>
  );
}

export default function HardwarePage() {
  const t = useTranslations().hardwarePage;

  return (
    <div className="flex w-full max-w-[1280px] flex-col gap-24 px-6 pt-20 pb-44">
      <section className="grid items-center gap-6 py-4 md:grid-cols-12">
        <div className="flex flex-col items-start gap-6 md:col-span-6">
          <h1 className="text-4xl md:text-[56px] leading-tight md:leading-[64px] font-bold tracking-[-1.12px]">{t.title}</h1>
          <p className="max-w-[576px] text-lg leading-7 text-muted">{t.subtitle}</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#hub" className="bg-accent px-8 py-3 text-xs font-bold tracking-[0.96px] text-background hover:bg-primary transition-colors">
              {t.explore}
            </a>
            <a href="#hub" className="border border-info px-8 py-3 text-xs font-bold tracking-[0.96px] hover:bg-info/10 transition-colors">
              {t.specs}
            </a>
          </div>
        </div>
        <div className="h-[360px] overflow-hidden rounded-lg border border-outline md:col-span-6 md:h-[600px]">
          <img src="/images/hardware/hub.jpg" alt="" className="size-full object-cover" />
        </div>
      </section>

      <div id="hub" className="scroll-mt-24">
        <Showcase
          title={t.hub.title}
          description={t.hub.description}
          features={[
            { icon: 'dosing.svg', w: 18, h: 18, title: t.hub.dosing, body: t.hub.dosingBody },
            { icon: 'flow.svg', w: 20, h: 16, title: t.hub.flow, body: t.hub.flowBody },
          ]}
          image="pole.jpg"
          imageClass="opacity-80 mix-blend-luminosity"
        />
      </div>

      <Showcase
        reverse
        title={t.injection.title}
        description={t.injection.description}
        features={[
          { icon: 'mineral.svg', w: 18.03, h: 18.51, title: t.injection.dosing },
          { icon: 'pump.svg', w: 16, h: 19, title: t.injection.pump },
        ]}
        image="tank.jpg"
        imageClass="opacity-80"
      />

      <Showcase
        title={t.subsurface.title}
        description={t.subsurface.description}
        features={[
          { icon: 'sensing.svg', w: 20, h: 14.15, title: t.subsurface.sensing },
          { icon: 'drop.svg', w: 17, h: 16.99, title: t.subsurface.delivery },
        ]}
        image="schematic.jpg"
        imageClass="opacity-90"
      />
    </div>
  );
}
