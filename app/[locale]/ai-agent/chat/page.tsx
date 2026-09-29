'use client';

import { useState } from 'react';
import { useTranslations } from '@/lib/use-translations';

const bot = 'rounded-2xl rounded-ss-sm border bg-background/50 p-4';
const user = 'rounded-2xl rounded-se-sm border border-accent/50 bg-accent/20 p-4';

function Avatar({ icon, w, h, ring = 'border-outline' }: { icon: string; w: number; h: number; ring?: string }) {
  return (
    <span className={`mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border bg-background ${ring}`}>
      <img src={`/images/chat/${icon}`} alt="" width={w} height={h} />
    </span>
  );
}

function UserAvatar() {
  return <img src="/images/chat/avatar.jpg" alt="" className="mt-1 size-8 shrink-0 rounded-full border border-outline object-cover" />;
}

export default function ChatPage() {
  const t = useTranslations().chatPage;
  const [hours, setHours] = useState(24);
  // ponytail: linear stand-in (24h → -12%), swap for the real simulator API when it exists
  const risk = Math.round(hours / 2);

  return (
    <div className="w-full max-w-[1024px] p-4 md:p-6">
      <section className="overflow-hidden rounded-xl border border-outline bg-surface shadow-[inset_0_1px_0_1px_rgb(255_255_255/0.05)]">
        <header className="flex items-center justify-between border-b border-outline bg-raised/50 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="relative flex size-10 items-center justify-center rounded-full border border-outline bg-background">
              <img src="/images/chat/copilot.svg" alt="" width={18} height={16} />
              <span className="absolute bottom-0 end-0 size-3 rounded-full border-2 border-surface bg-accent" />
            </span>
            <div>
              <h1 className="text-2xl leading-8 font-semibold">{t.title}</h1>
              <p className="text-sm text-muted">{t.status}</p>
            </div>
          </div>
          <button aria-label="More" className="cursor-pointer rounded-full p-2 hover:bg-outline/40">
            <img src="/images/chat/more.svg" alt="" width={10.5} height={10.5} />
          </button>
        </header>

        <div className="flex flex-col gap-8 bg-background/20 p-4 md:p-6">
          <div className="flex max-w-[877px] gap-4">
            <Avatar icon="alert.svg" w={10.81} h={9.33} ring="border-danger/50" />
            <div className={`${bot} flex-1 border-danger/30`}>
              <p className="text-xs font-bold tracking-[0.96px] text-danger">{t.alert.meta}</p>
              <p className="pt-1 font-semibold">{t.alert.title}</p>
              <p className="text-sm text-muted">{t.alert.body}</p>
              <div className="flex flex-wrap gap-2 pt-3">
                <button className="cursor-pointer rounded-full border border-danger/50 px-4 py-1.5 text-sm text-danger hover:bg-danger/10">{t.alert.viewMap}</button>
                <button className="cursor-pointer rounded-full bg-chip px-4 py-1.5 text-sm text-muted hover:text-on-surface">{t.alert.acknowledge}</button>
              </div>
            </div>
          </div>

          <div className="flex max-w-[877px] gap-4">
            <Avatar icon="insight.svg" w={11.26} h={10.77} ring="border-accent/50" />
            <div className={`${bot} flex-1 border-accent/30`}>
              <p className="text-xs font-bold tracking-[0.96px] text-accent">{t.insight.meta}</p>
              <p className="pt-1 font-semibold">{t.insight.title}</p>
              <p className="text-sm text-muted">{t.insight.body}</p>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <div className={`${user} flex flex-col gap-3`}>
              <p>{t.userScan}</p>
              <img src="/images/chat/leaf-scan.jpg" alt="" className="h-32 w-48 rounded-lg border border-outline object-cover" />
            </div>
            <UserAvatar />
          </div>

          <div className="flex max-w-[925px] gap-4">
            <Avatar icon="bot.svg" w={10.5} h={9.33} />
            <div className={`${bot} flex flex-1 flex-col gap-4 border-outline p-5 shadow-lg`}>
              <p className="flex items-center gap-2 text-xs font-bold tracking-[0.96px] text-muted">
                <img src="/images/chat/diag.svg" alt="" width={9.92} height={9.92} />
                {t.diagnosis.label}
              </p>
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="relative aspect-square flex-1 overflow-hidden rounded-lg border border-outline bg-background">
                  <img src="/images/chat/leaf-scan.jpg" alt="" className="absolute inset-0 size-full object-cover mix-blend-luminosity" />
                  <div className="absolute inset-4 border border-accent/30">
                    <span className="absolute start-0 top-0 size-2 border-s-2 border-t-2 border-danger" />
                    <span className="absolute end-0 top-0 size-2 border-e-2 border-t-2 border-danger" />
                    <span className="absolute bottom-0 start-0 size-2 border-b-2 border-s-2 border-danger" />
                    <span className="absolute bottom-0 end-0 size-2 border-b-2 border-e-2 border-danger" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="self-start rounded bg-danger/10 px-2 py-1 text-xs font-bold tracking-[0.96px] text-danger">{t.diagnosis.badge}</span>
                    <h2 className="text-[32px] leading-10 font-semibold">{t.diagnosis.title}</h2>
                    <div className="flex items-end justify-between pt-2">
                      <span className="text-xs font-bold tracking-[0.96px] text-muted">{t.diagnosis.confidence}</span>
                      <span className="text-[28px] leading-8 font-bold tracking-[-0.28px] text-accent">89%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-soil">
                      <div className="h-full w-[89%] rounded-full bg-accent" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 rounded-lg border border-outline bg-surface p-4">
                    <p className="flex items-center gap-1 text-xs font-bold tracking-[0.96px] text-info">
                      <img src="/images/chat/protocol.svg" alt="" width={9.35} height={9.33} />
                      {t.diagnosis.protocol}
                    </p>
                    <p className="text-sm">{t.diagnosis.protocolBody}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex max-w-[828px] gap-4 pt-4">
            <Avatar icon="message.svg" w={11.67} h={11.67} />
            <p className={`${bot} border-outline`}>{t.morning}</p>
          </div>

          <div className="flex justify-end gap-4 pt-2">
            <p className={user}>{t.userSimulation}</p>
            <UserAvatar />
          </div>

          <div className="flex max-w-[877px] gap-4 pt-2">
            <Avatar icon="bot.svg" w={10.5} h={9.33} />
            <div className={`${bot} flex flex-1 flex-col gap-6 border-outline p-6 shadow-lg`}>
              <p className="flex items-center gap-2 text-xs font-bold tracking-[0.96px] text-muted">
                <img src="/images/chat/irrigation.svg" alt="" width={11.38} height={10} />
                {t.simulation.label}
              </p>
              <div className="text-center">
                <p className="text-lg leading-7">{t.simulation.heading}</p>
                <p className="flex items-baseline justify-center gap-2">
                  <span className="text-[56px] leading-[64px] font-bold tracking-[-1.12px]">{hours}</span>
                  <span className="text-2xl font-semibold text-muted">{t.simulation.unit}</span>
                </p>
              </div>
              <div className="flex flex-col gap-4 px-4 pt-2">
                <input
                  type="range"
                  min={0}
                  max={72}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  aria-label={t.simulation.heading}
                  className="range-soil"
                />
                <div className="flex justify-between text-xs font-bold tracking-[0.96px] text-muted/50">
                  <span>{t.simulation.min}</span>
                  <span>{t.simulation.max}</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border border-danger/30 bg-linear-to-t from-danger/10 to-danger/0 bg-surface p-5 text-center">
                <p className="text-xs font-bold tracking-[0.96px] text-danger">{t.simulation.impactLabel}</p>
                <p className="text-[28px] leading-8 font-bold tracking-[-0.28px] text-danger">
                  <bdi dir="ltr">-{risk}%</bdi> {t.simulation.impact}
                </p>
                <p className="text-sm text-muted">{t.simulation.impactBody}</p>
              </div>
              <div className="flex justify-end gap-3">
                <button onClick={() => setHours(24)} className="cursor-pointer rounded-full border border-outline-variant px-5 py-2 text-sm text-muted hover:text-on-surface">
                  {t.simulation.cancel}
                </button>
                <button className="cursor-pointer rounded-full bg-accent px-5 py-2 text-sm text-background hover:bg-primary">{t.simulation.apply}</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-outline bg-raised p-4">
          <div className="flex items-center gap-3 rounded-full border border-outline bg-background py-2 ps-5 pe-2 text-muted shadow-lg">
            <img src="/images/chat/mic.svg" alt="" width={13} height={18.25} />
            <span className="flex-1 py-2">{t.placeholder}</span>
            <span className="flex size-8 items-center justify-center rounded-full bg-accent">
              <img src="/images/chat/send.svg" alt="" width={16} height={16} className="rtl:-scale-x-100" />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
