'use client';

import Flow from '@/components/Flow';
import Scene, { useTick, wave } from '@/components/Scene';
import { Icon, type IconName } from '@/components/Icons';
import { useNumber, useTranslations } from '@/lib/use-translations';


const subsurfaceIcons: IconName[] = ['chip', 'leaf', 'drop', 'grid', 'drop', 'roots'];
const hubIcons: IconName[] = ['chip', 'wifi', 'shield', 'leaf', 'grid'];
const kitIcons: IconName[] = ['wifi', 'roots', 'sun', 'chip', 'flask', 'drop'];

export default function HardwarePage() {
  const { hardware: t } = useTranslations();
  const h = t.hero;
  const n = useNumber();
  const tick = useTick();
  const fix = (v: number, d = 1) => n(+v.toFixed(d));

  return (
    <>
      <Scene
        name="hub-pole"
        title={h.title}
        tag={h.tag}
        cards={[
          { icon: 'leaf', title: h.sensors[0], desc: h.sensors[1], extra: (
            <div className="hs-read">
              {[`${fix(wave(tick, 28, 1.4), 0)}%`, fix(wave(tick, 1.8, 0.06, 1)), `${fix(wave(tick, 24, 0.5, 2))}°C`, fix(wave(tick, 6.4, 0.05, 3))].map((v, i) => (
                <span key={i}><b dir="ltr">{v}</b><small>{h.readings[i]}</small></span>
              ))}
            </div>
          ) },
          { icon: 'drop', tint: 'water', title: h.irrigation[0], desc: h.irrigation[1], extra: (
            <div className="hs-state"><span className="on">{h.active}</span><span>{h.zone}</span></div>
          ) },
          { icon: 'flask', title: h.injection[0], desc: h.injection[1], extra: (
            <div className="hs-state"><span className="on">{h.running}</span><span>{h.dose}: <span dir="ltr">{fix(wave(tick, 2.1, 0.1))} L/h</span></span></div>
          ) },
          { icon: 'sun', tint: 'sun', title: h.weather[0], desc: h.weather[1], extra: (
            <div className="hs-read">
              {[`${fix(wave(tick, 24, 0.3), 0)}°C`, `${fix(wave(tick, 52, 1.5, 1), 0)}%`, `${fix(wave(tick, 12, 1, 2), 0)} km/h`, '0 mm'].map((v, i) => (
                <span key={i}><b dir="ltr">{v}</b><small>{h.weatherReadings[i]}</small></span>
              ))}
            </div>
          ) },
          { icon: 'wifi', title: h.wireless[0], desc: h.wireless[1], extra: (
            <div className="hs-state"><span dir="ltr">4G / LoRa</span><span className="on">{h.online}</span></div>
          ) },
        ]}
      />

      <section className="section">
        <div className="wrap">
          <div className="head">
            <p className="label">{t.kit.label}</p>
            <h2>{t.kit.title} <em>{t.kit.titleEm}</em></h2>
            <p className="lead">{t.kit.subtitle}</p>
          </div>
          <div className="tiles three">
            {t.kit.items.map(([title, desc], i) => (
              <div key={title} className="tile">
                <Icon name={kitIcons[i]} className="tile-ico" />
                <b>{title}</b>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section rule-top scene-head">
        <div className="wrap head">
          <p className="label">{t.subsurface.label}</p>
          <h2>{t.subsurface.title} <em>{t.subsurface.titleEm}</em></h2>
          <p className="lead">{t.subsurface.subtitle}</p>
        </div>
      </section>
      <Scene
        name="subsurface"
        tag={[t.subsurface.label, `${t.subsurface.title} ${t.subsurface.titleEm}`]}
        cards={t.subsurface.items.map(([title, desc], i) => ({ icon: subsurfaceIcons[i], tint: i === 2 || i === 4 ? 'water' : undefined, title, desc }))}
      />

      <section className="section scene-head">
        <div className="wrap head">
          <p className="label">{t.hub.label}</p>
          <h2>{t.hub.title} <em>{t.hub.titleEm}</em></h2>
          <p className="lead">{t.hub.subtitle}</p>
        </div>
      </section>
      <Scene
        name="hub-field"
        tag={[t.hub.label, `${t.hub.title} ${t.hub.titleEm}`]}
        cards={t.hub.items.map(([title, desc], i) => ({ icon: hubIcons[i], title, desc }))}
      />

      <section className="section">
        <div className="wrap">
          <div className="head">
            <p className="label">{t.controllers.label}</p>
            <h2>{t.controllers.title} <em>{t.controllers.titleEm}</em></h2>
            <p className="lead">{t.controllers.subtitle}</p>
          </div>
          <div className="gallery">
            {t.controllers.items.map(([title, desc], i) => (
              <figure key={title}>
                <img src={`/images/home/controller-${i + 1}.jpg`} alt={t.controllers.alts[i]} loading="lazy" />
                <figcaption><b>{title}</b><p>{desc}</p></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section rule-top">
        <div className="wrap">
          <div className="head">
            <p className="label">{t.install.label}</p>
            <h2>{t.install.title} <em>{t.install.titleEm}</em></h2>
            <p className="lead">{t.install.subtitle}</p>
          </div>
          <Flow steps={t.install.steps} icons={['grid', 'chip', 'flask', 'leaf']} />
        </div>
      </section>
    </>
  );
}
