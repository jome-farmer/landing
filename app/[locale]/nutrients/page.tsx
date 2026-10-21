'use client';

import { EMAIL } from '@/components/Contact';
import Flow from '@/components/Flow';
import { Arrow, Icon } from '@/components/Icons';
import Ring from '@/components/Ring';
import Scene, { useTick, wave } from '@/components/Scene';
import type { IconName } from '@/components/Icons';
import { useNumber, useTranslations } from '@/lib/use-translations';

// target N, P, K per zone (0-100), matching t.zones.items
const recipes = [[55, 40, 85], [75, 45, 50], [50, 80, 55], [40, 30, 35]];
const jugIcons: IconName[] = ['leaf', 'drop', 'flask', 'roots'];

export default function NutrientsPage() {
  const { nutrients: t } = useTranslations();
  const h = t.hero;
  const n = useNumber();
  const tick = useTick();
  const fix = (v: number, d = 1) => n(+v.toFixed(d));
  // the tank drains slowly while the pump runs, then refills
  const level = 72 - (tick % 40) * 0.5;

  const readings = [
    { value: 42, label: 'N', color: 'var(--sky)' },
    { value: 18, label: 'P', color: 'var(--sage)' },
    { value: 36, label: 'K', color: 'var(--clay)' },
  ];

  return (
    <>
      <Scene
        name="nutrients"
        title={h.title}
        tag={h.tag}
        cards={[
          { icon: 'drop', tint: 'water', title: h.tank[0], desc: h.tank[1], extra: (
            <div className="hs-state"><span>{h.level}</span><b dir="ltr">{fix(level, 0)}%</b></div>
          ) },
          { icon: 'chip', title: h.controller[0], desc: h.controller[1] },
          { icon: 'chart', title: h.monitoring[0], desc: h.monitoring[1], extra: (
            <div className="hs-read" style={{ '--n': 3 } as React.CSSProperties}>
              {[[fix(wave(tick, 1.9, 0.05), 2), 'EC'], [fix(wave(tick, 6.2, 0.04, 1)), 'pH'], [`${fix(wave(tick, 3.4, 0.15, 2))} m³/h`, h.flow]].map(([v, l]) => (
                <span key={l}><b dir="ltr">{v}</b><small>{l}</small></span>
              ))}
            </div>
          ) },
          { icon: 'grid', title: h.blend[0], desc: h.blend[1] },
          { icon: 'flask', title: h.pump[0], desc: h.pump[1], extra: (
            <div className="hs-state"><span className="on">{h.running}</span><span>{h.dose}: <span dir="ltr">{fix(wave(tick, 2.1, 0.1))} L/h</span></span></div>
          ) },
        ]}
      />

      <a href="#rfp" className="concept-bar">
        <span className="wrap"><span className="concept">{t.concept}</span>{t.conceptNote}<b>{t.conceptLink} <Arrow /></b></span>
      </a>

      <section className="section">
        <div className="wrap">
          <div className="head">
            <p className="label">{t.dose.label}</p>
            <h2>{t.dose.title} <em>{t.dose.titleEm}</em></h2>
            <p className="lead">{t.dose.subtitle}</p>
          </div>
          <Flow kind="water" steps={t.dose.steps} icons={['flask', 'chart', 'drop', 'roots', 'leaf']} />
        </div>
      </section>

      <section className="section rule-top" id="delivery">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
          <div className="head center">
            <p className="label">{t.section.label}</p>
            <h2>{t.section.title}</h2>
            <p className="lead">{t.section.subtitle}</p>
          </div>

          <div className="cells">
            <article className="cell span-8 has-img" style={{ minHeight: 420 }}>
              <img className="cell-img" src="/images/nutrients/map.jpg" alt="" />
              <div className="cell-body">
                <p className="label">{t.targeting.label}</p>
                <h3 className="h3">{t.targeting.title}</h3>
                <p className="muted">{t.targeting.description}</p>
              </div>
            </article>

            <article className="cell span-4">
              <div className="cell-body">
                <p className="label">{t.monitoring.label}</p>
                <h3 className="h3">{t.monitoring.title}</h3>
                <p className="muted">{t.monitoring.description}</p>
              </div>
              <div className="cell-foot readings" dir="ltr">
                {readings.map((r) => (
                  <div key={r.label}>
                    <span className="num-md" style={{ color: r.color }}>{n(r.value)}</span>
                    <span className="label">{r.label}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="cell span-12" style={{ display: 'grid', gap: 32, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'center' }}>
              <div className="cell-body">
                <p className="label">{t.engine.label}</p>
                <h3 className="h3">{t.engine.title}</h3>
                <p className="muted">{t.engine.description}</p>
              </div>
              <div className="panel-sunken" style={{ display: 'flex', alignItems: 'center', gap: 20, maxWidth: 420 }}>
                <Ring value={94} color="var(--sage)" />
                <div>
                  <p className="meta">{t.engine.confidence}</p>
                  <p style={{ marginTop: 4 }}>{t.engine.blend}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section rule-top">
        <div className="wrap">
          <div className="head">
            <p className="label">{t.zones.label}</p>
            <h2>{t.zones.title} <em>{t.zones.titleEm}</em></h2>
            <p className="lead">{t.zones.subtitle}</p>
          </div>
          <div className="zones">
            {t.zones.items.map(([crop, recipe], i) => {
              const on = tick % 4 === i;
              return (
                <div key={crop} className={`zone${on ? ' on' : ''}`}>
                  <div className="zone-head">
                    <span className="label">{t.zones.zone} {n(i + 1)}</span>
                    {on && <span className="live"><span className="dot" />{t.zones.dosing}</span>}
                  </div>
                  <b>{crop}</b>
                  <small>{recipe}</small>
                  <div className="npk" dir="ltr">
                    {recipes[i].map((v, j) => (
                      <span key={j} className={'npk-' + 'npk'[j]} style={{ '--p': `${Math.round(wave(tick, v, 3, i + j))}%` } as React.CSSProperties}>
                        <em>{'NPK'[j]}</em><i /><small>{n(Math.round(wave(tick, v, 3, i + j)))}</small>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section rule-top scene-head">
        <div className="wrap head">
          <p className="label">{t.jug.label}</p>
          <h2>{t.jug.title} <em>{t.jug.titleEm}</em></h2>
          <p className="lead">{t.jug.subtitle}</p>
        </div>
      </section>
      <Scene
        name="jug"
        badge={t.concept}
        tag={[t.jug.label, `${t.jug.title} ${t.jug.titleEm}`]}
        cards={t.jug.items.map(([title, desc], i) => ({ icon: jugIcons[i], tint: i === 1 ? 'water' : undefined, title, desc }))}
      />


      <section className="section rule-top rfp" id="rfp">
        <div className="wrap">
          <div className="head">
            <p className="label">{t.rfp.label}</p>
            <h2>{t.rfp.title} <em>{t.rfp.titleEm}</em></h2>
            <p className="lead">{t.rfp.subtitle}</p>
          </div>

          <h3 className="rfp-h">{t.rfp.scopeTitle}</h3>
          <div className="tiles">
            {t.rfp.scope.map(([title, desc], i) => (
              <div key={title} className="tile">
                <Icon name={(['leaf', 'drop', 'shield', 'grid'] as const)[i]} className="tile-ico" />
                <b>{title}</b>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div className="rfp-lists">
            <div>
              <h3 className="rfp-h">{t.rfp.reqTitle}</h3>
              <ul className="checks">{t.rfp.reqs.map((r) => <li key={r}><Icon name="check" size={16} />{r}</li>)}</ul>
            </div>
            <div>
              <h3 className="rfp-h">{t.rfp.offerTitle}</h3>
              <ul className="checks">{t.rfp.offer.map((r) => <li key={r}><Icon name="check" size={16} />{r}</li>)}</ul>
            </div>
          </div>

          <h3 className="rfp-h">{t.rfp.stepsTitle}</h3>
          <Flow steps={t.rfp.steps} icons={['chat', 'grid', 'flask', 'leaf']} />

          <div className="rfp-cta">
            <a className="btn btn-green" href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.rfp.subject)}`}>{t.rfp.cta} <Arrow /></a>
            <small>{t.rfp.note}</small>
          </div>
        </div>
      </section>
    </>
  );
}
