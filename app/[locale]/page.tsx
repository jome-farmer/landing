'use client';

import Link from 'next/link';
import FarmDashboard from '@/components/FarmDashboard';
import CountUp from '@/components/CountUp';
import Film from '@/components/Film';
import Flow from '@/components/Flow';
import Scene, { cover, rects, useTick, type SceneCard } from '@/components/Scene';
import { Arrow, Icon, type IconName } from '@/components/Icons';
import { useLocale, useNumber, useTranslations } from '@/lib/use-translations';

// Hero callout icons; order matches t.system.items and lib/scenes.json.
const icons: [IconName, SceneCard['tint']][] = [
  ['sun', 'sun'], ['leaf', undefined], ['wifi', undefined], ['chart', undefined], ['drop', 'water'], ['chip', undefined], ['flask', undefined], ['drop', 'water'],
];
const parts = [['hardware', '/images/home/f-hubfield.jpg'], ['ai-agent', '/images/nutrients/map.jpg'], ['nutrients', '/images/home/f-nutrients.jpg']];

export default function HomePage() {
  const { home: t } = useTranslations();
  const locale = useLocale();
  const n = useNumber();

  return (
    <>
      {/* HERO — design/v3/hero.html (styles in design/v3/hero.css) */}
      <Scene
        name="home"
        title={t.hero.title}
        tag={t.hero.tag}
        cards={t.system.items.map((it, i) => ({ icon: icons[i][0], tint: icons[i][1], title: it.title, desc: it.desc }))}
      >
        <FarmDashboard t={t} n={n} style={cover(rects('home').dash!)} />
      </Scene>

      {/* STATS */}
      <section className="wrap figures stats">
        {t.stats.map((stat, i) => (
          <div key={stat.label} className="figure">
            <span className="label">{stat.label}</span>
            <span className="num">{[<CountUp key="w" to={30} suffix="%" />, <CountUp key="y" to={25} prefix="+" suffix="%" />, <CountUp key="f" to={500} suffix="+" />][i]}</span>
            <p>{stat.desc}</p>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section className="section rule-top">
        <div className="wrap">
          <div className="head">
            <p className="label">{t.how.label}</p>
            <h2>{t.how.title} <em>{t.how.titleEm}</em></h2>
            <p className="lead">{t.how.subtitle}</p>
          </div>
          <Flow steps={t.how.steps} icons={['leaf', 'chip', 'drop', 'chart']} />
        </div>
      </section>

      {/* THE THREE TABS */}
      <section className="section rule-top">
        <div className="wrap">
          <div className="head">
            <p className="label">{t.parts.label}</p>
            <h2>{t.parts.title} <em>{t.parts.titleEm}</em></h2>
            <p className="lead">{t.parts.subtitle}</p>
          </div>
          <div className="parts">
            {t.parts.items.map((it, i) => (
              <Link key={it.title} href={`/${locale}/${parts[i][0]}/`} className="part">
                <img src={parts[i][1]} alt={it.alt} loading="lazy" />
                <div>
                  <span className="label">{n(i + 1).padStart(2, n(0))}</span>
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                  <span className="link">{it.link} <Arrow /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LiveFarm t={t.live} />

      {/* SCALE */}
      <section className="section rule-top">
        <div className="wrap">
          <div className="head">
            <p className="label">{t.scale.label}</p>
            <h2>{t.scale.title} <em>{t.scale.titleEm}</em></h2>
          </div>
          <div className="tiles">
            {t.scale.items.map(([title, desc], i) => (
              <div key={title} className="tile">
                <Icon name={(['leaf', 'sun', 'roots', 'grid'] as IconName[])[i]} className="tile-ico" />
                <b>{title}</b>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Film />
    </>
  );
}

// Demo-farm counters that keep ticking while the page is open.
function LiveFarm({ t }: { t: { label: string; title: string; titleEm: string; items: readonly string[]; litres: string; note: string } }) {
  const n = useNumber();
  const tick = useTick(1000);
  const values = [
    `${n(18420 + tick * 7 + (tick % 3))} ${t.litres}`,
    `${n(Math.sin(tick / 7) > 0 ? 4 : 3)} / ${n(8)}`,
    n(12840 + tick * 4),
    n(96 + Math.floor(tick / 9)),
  ];
  return (
    <section className="live-farm rule-top">
      <div className="wrap">
        <div className="live-head">
          <span className="live"><span className="dot" />{t.label}</span>
          <h2>{t.title} <em>{t.titleEm}</em></h2>
        </div>
        <div className="live-grid">
          {t.items.map((label, i) => (
            <div key={label}>
              <b dir="ltr">{values[i]}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <p className="live-note">{t.note}</p>
      </div>
    </section>
  );
}
