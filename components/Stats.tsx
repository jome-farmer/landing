'use client';

import { useTranslations } from '@/lib/use-translations';

export default function Stats() {
  const t = useTranslations();

  const stats = [
    { label: t.stats.waterSaved, value: '30%', icon: 'icon-water.svg', w: 16, h: 20, progress: 30, color: 'text-primary', bar: 'bg-primary' },
    { label: t.stats.yieldIncrease, value: '25%', icon: 'icon-trend.svg', w: 20, h: 12, progress: 25, color: 'text-accent', bar: 'bg-accent' },
    { label: t.stats.farmsConnected, value: '500+', icon: 'icon-hub.svg', w: 24, h: 23, progress: 80, color: 'text-on-surface', bar: 'bg-subtle' },
  ];

  return (
    <section className="relative z-10 -mt-12 mb-2 w-full max-w-[1280px] px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-4 rounded-xl border border-outline bg-surface p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.6px] text-muted">{stat.label}</p>
              <img src={`/images/${stat.icon}`} alt="" width={stat.w} height={stat.h} />
            </div>
            <p className={`text-[28px] leading-8 font-bold tracking-[-0.28px] ${stat.color}`}>{stat.value}</p>
            <div className="h-2 w-full overflow-hidden rounded-full bg-surface-variant">
              <div className={`h-full rounded-full ${stat.bar}`} style={{ width: `${stat.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
