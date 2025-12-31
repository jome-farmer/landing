'use client';

import { useTranslations } from '@/lib/use-translations';
import Icon from './Icon';

export default function HowItWorks() {
  const t = useTranslations();

  const steps = [
    {
      icon: 'sensors',
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
    },
    {
      icon: 'psychology',
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
    },
    {
      icon: 'sprinkler',
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
    },
  ];

  return (
    <section className="w-full flex justify-center py-10 md:py-20 px-4 md:px-10" id="how-it-works">
      <div className="max-w-[960px] w-full">
        <div className="flex flex-col gap-8 px-4 mb-12 text-center items-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">{t.howItWorks.title}</h2>
          <p className="text-gray-400">{t.howItWorks.subtitle}</p>
        </div>
        <div className="grid grid-cols-[60px_1fr] gap-x-6 px-4">
          {steps.map((step, index) => (
            <div key={index} className="contents">
              <div className={`flex flex-col items-center gap-1 ${index === 0 ? 'pt-3' : ''} ${index === steps.length - 1 ? 'pb-3' : ''}`}>
                {index > 0 && <div className="w-[2px] bg-gradient-to-b from-[#3b5443] to-primary h-8"></div>}
                <div className="size-12 rounded-full bg-[#1c271f] border border-primary flex items-center justify-center text-primary z-10">
                  <Icon name={step.icon} />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-[2px] bg-gradient-to-b from-primary to-[#3b5443] h-full grow min-h-[80px]"></div>
                )}
              </div>
              <div className={`flex flex-1 flex-col py-2 ${index < steps.length - 1 ? 'pb-12' : ''}`}>
                <h3 className="text-white text-xl font-bold leading-normal mb-2">{step.title}</h3>
                <p className="text-[#9db9a6] text-base font-normal leading-relaxed max-w-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
