'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from '@/lib/use-translations';
import Ring from '@/components/Ring';

export default function NutrientsPage() {
  const { nutrients: t, common } = useTranslations();
  const locale = useLocale();

  const output = [
    { label: t.output.nitrogen, value: 75, meter: 'sky' },
    { label: t.output.phosphorus, value: 60, meter: 'sage' },
    { label: t.output.potassium, value: 85, meter: 'clay' },
  ];
  const readings = [
    { value: 42, label: 'N', color: 'var(--sky)' },
    { value: 18, label: 'P', color: 'var(--sage)' },
    { value: 36, label: 'K', color: 'var(--clay)' },
  ];

  return (
    <>
      <header className="bleed">
        <img src="/images/nutrients/hero.jpg" alt={t.imageAlt} />
        <div className="wrap">
          <div className="hero" style={{ padding: 0 }}>
            <div className="hero-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <p className="label" style={{ color: 'var(--text-2)' }}>{t.label}</p>
                <h1>
                  {t.title} <em>{t.titleEm}</em>
                </h1>
                <p className="lead" style={{ maxWidth: 560, color: 'var(--text)' }}>{t.subtitle}</p>
                <div className="actions">
                  <a href="#" className="btn btn-solid">{t.optimize}</a>
                  <a href="#delivery" className="link">{t.learnMore} ↓</a>
                </div>
              </div>
              <aside className="panel panel-glass" aria-label={t.output.label}>
                <div className="panel-head">
                  <p className="label">{t.output.label}</p>
                  <p className="num-sm">{t.output.value}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {output.map((row) => (
                    <div key={row.label} className="kv-meter">
                      <span>{row.label}</span>
                      <div className={`meter ${row.meter}`}><i style={{ width: `${row.value}%` }} /></div>
                      <span className="v">{row.value}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="delivery">
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
                    <span className="num-md" style={{ color: r.color }}>{r.value}</span>
                    <span className="label">{r.label}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="cell span-5">
              <div className="cell-body">
                <p className="label">{t.engine.label}</p>
                <h3 className="h3">{t.engine.title}</h3>
                <p className="muted">{t.engine.description}</p>
              </div>
              <div className="cell-foot panel-sunken" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <Ring value={94} color="var(--wheat)" />
                <div>
                  <p className="meta">{t.engine.confidence}</p>
                  <p style={{ marginTop: 4 }}>{t.engine.blend}</p>
                </div>
              </div>
            </article>

            <article className="cell span-7 has-img" style={{ minHeight: 420, justifyContent: 'center' }}>
              <img className="cell-img end" src="/images/nutrients/jug.jpg" alt={t.pure.imageAlt} />
              <div className="cell-body" style={{ maxWidth: 380 }}>
                <span className="tag wheat" style={{ alignSelf: 'flex-start' }}>{t.pure.badge}</span>
                <h3 className="h3">{t.pure.title}</h3>
                <p className="muted">{t.pure.description}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <p className="label">{common.begin}</p>
          <h2>
            {t.cta.title} <em style={{ color: 'var(--sage)' }}>{t.cta.titleEm}</em>
          </h2>
          <div className="actions">
            <a href="#" className="btn btn-solid">{t.optimize}</a>
            <Link href={`/${locale}/hardware/`} className="link">
              {t.cta.link} <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
