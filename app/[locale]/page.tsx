'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from '@/lib/use-translations';

const stats = [
  { value: '30%', width: '30%', meter: 'sage' },
  { value: '25%', width: '25%', meter: 'wheat' },
  { value: '500+', width: '80%', meter: '' },
];

export default function HomePage() {
  const { home: t, common } = useTranslations();
  const locale = useLocale();
  const capabilityHrefs = [`/${locale}/ai-agent/`, `/${locale}/nutrients/`, `/${locale}/hardware/`];

  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="status label" style={{ marginBottom: 32 }}>
            <span className="dot" />
            {t.status}
          </div>
          <div className="hero-grid">
            <h1>
              {t.title}
              <br />
              <em>{t.titleEm}</em>
            </h1>
            <div className="hero-side">
              <p className="lead">{t.subtitle}</p>
              <div className="actions">
                <a href="#" className="btn btn-solid">{common.getStarted}</a>
                <a href="#" className="link">
                  {t.watchDemo} <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <figure className="plate wrap">
        <img src="/images/hero.jpg" alt={t.imageAlt} />
        <figcaption>
          <span className="label">{t.caption}</span>
          <span className="label">{t.captionEnd}</span>
        </figcaption>
      </figure>

      <section style={{ padding: '112px 0 64px' }}>
        <div className="wrap figures">
          {t.stats.map((stat, i) => (
            <div key={stat.label} className="figure">
              <span className="label">{stat.label}</span>
              <span className="num" dir="ltr" style={{ alignSelf: 'flex-start' }}>{stats[i].value}</span>
              <div className={`meter ${stats[i].meter}`}>
                <i style={{ width: stats[i].width }} />
              </div>
              <p>{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="wrap split">
          <div className="head">
            <p className="label">{t.capabilities.label}</p>
            <h2>{t.capabilities.title}</h2>
            <p className="lead">{t.capabilities.subtitle}</p>
          </div>
          <div className="list">
            {t.capabilities.items.map((item, i) => (
              <Link key={item.title} href={capabilityHrefs[i]} className="row">
                <span className="idx">0{i + 1}</span>
                <h3>{item.title}</h3>
                <span className="arrow">→</span>
                <p>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto">
        <img src="/images/hardware/hub.jpg" alt={t.philosophy.imageAlt} />
        <div className="manifesto-body">
          <p className="label">{t.philosophy.label}</p>
          <blockquote>
            {t.philosophy.quote} <em>{t.philosophy.quoteEm}</em>
          </blockquote>
          <Link href={`/${locale}/ai-agent/`} className="link" style={{ alignSelf: 'flex-start' }}>
            {t.philosophy.link} <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <p className="label">{common.begin}</p>
          <h2>{t.cta}</h2>
          <div className="actions">
            <a href="#" className="btn btn-solid">{common.getStarted}</a>
            <a href="#" className="link">
              {common.requestQuote} <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
