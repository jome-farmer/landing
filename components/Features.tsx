'use client';

import { useTranslations } from '@/lib/use-translations';
import Icon from './Icon';

export default function Features() {
  const t = useTranslations();

  const features = [
    {
      icon: 'healing',
      title: t.features.aiPlantDoctor.title,
      description: t.features.aiPlantDoctor.description,
    },
    {
      icon: 'vaccines',
      title: t.features.smartInjection.title,
      description: t.features.smartInjection.description,
    },
    {
      icon: 'wifi_tethering',
      title: t.features.iotConnectivity.title,
      description: t.features.iotConnectivity.description,
    },
  ];

  return (
    <section className="w-full flex justify-center py-10 md:py-20 px-4 md:px-10 bg-[#0d1610]" id="features">
      <div className="max-w-[1280px] w-full">
        <div className="flex flex-col gap-10 px-4 @container">
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">
              {t.features.title}
            </h2>
            <h1 className="text-white tracking-light text-3xl md:text-5xl font-bold leading-tight max-w-[720px]">
              {t.features.heading}
            </h1>
            <p className="text-gray-400 text-lg font-normal leading-normal max-w-[600px]">
              {t.features.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl border border-[#3b5443] bg-surface-dark p-6 hover:translate-y-[-4px] transition-transform duration-300 shadow-lg hover:shadow-primary/10"
              >
                <div className="size-12 rounded-full bg-[#28392e] flex items-center justify-center text-primary mb-2">
                  <Icon name={feature.icon} className="text-3xl" />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-white text-xl font-bold leading-tight">{feature.title}</h2>
                  <p className="text-[#9db9a6] text-base font-normal leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
