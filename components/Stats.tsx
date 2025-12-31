'use client';

import { useTranslations } from '@/lib/use-translations';
import Icon from './Icon';

export default function Stats() {
  const t = useTranslations();

  const stats = [
    {
      label: t.stats.waterSaved,
      value: '30%',
      icon: 'water_drop',
      progress: 30,
    },
    {
      label: t.stats.yieldIncrease,
      value: '25%',
      icon: 'trending_up',
      progress: 25,
    },
    {
      label: t.stats.farmsConnected,
      value: '500+',
      icon: 'hub',
      progress: 75,
    },
  ];

  return (
    <section className="w-full flex justify-center py-5 px-4 md:px-10">
      <div className="max-w-[1280px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col gap-2 rounded-xl p-8 border border-[#3b5443] bg-surface-dark hover:border-primary/50 transition-colors group"
            >
              <div className="flex justify-between items-start">
                <p className="text-[#9db9a6] text-base font-medium leading-normal group-hover:text-primary transition-colors">
                  {stat.label}
                </p>
                <Icon
                  name={stat.icon}
                  className="text-[#3b5443] group-hover:text-primary transition-colors"
                />
              </div>
              <p className="text-white tracking-light text-4xl font-bold leading-tight">{stat.value}</p>
              <div className="w-full h-1 bg-[#28392e] rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${stat.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
