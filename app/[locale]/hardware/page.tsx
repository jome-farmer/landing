'use client';

import { useTranslations } from '@/lib/use-translations';

type Spec = { title: string; body?: string };

function Feature({
  label,
  title,
  description,
  specs,
  image,
  imageAlt,
  caption,
  flip = false,
  imageStyle,
}: {
  label: string;
  title: string;
  description: string;
  specs: Spec[];
  image: string;
  imageAlt: string;
  caption: string;
  flip?: boolean;
  imageStyle?: React.CSSProperties;
}) {
  return (
    <article className={`feature${flip ? ' flip' : ''}`}>
      <figure className="media">
        <img src={`/images/hardware/${image}`} alt={imageAlt} style={imageStyle} />
        <figcaption className="label">{caption}</figcaption>
      </figure>
      <div className="copy">
        <p className="label">{label}</p>
        <h3 className="h2">{title}</h3>
        <p className="muted">{description}</p>
        <ul className="specs">
          {specs.map((spec, i) => (
            <li key={spec.title}>
              <span className="idx">{'AB'[i]}</span>
              <b>{spec.title}</b>
              {spec.body && <p>{spec.body}</p>}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function HardwarePage() {
  const { hardware: t, common } = useTranslations();

  return (
    <>
      <header className="hero">
        <div className="wrap">
          <p className="label" style={{ marginBottom: 32 }}>{t.label}</p>
          <div className="hero-grid">
            <h1>
              {t.title} <em>{t.titleEm}</em>
            </h1>
            <div className="hero-side">
              <p className="lead">{t.subtitle}</p>
              <div className="actions">
                <a href="#ecosystem" className="btn btn-solid">{t.explore}</a>
                <a href="#ecosystem" className="link">{t.specs} ↓</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <figure className="plate wrap">
        <img src="/images/hardware/hub.jpg" alt={t.imageAlt} style={{ objectPosition: 'center 60%' }} />
        <figcaption>
          <span className="label">{t.caption}</span>
          <span className="label">{t.captionEnd}</span>
        </figcaption>
      </figure>

      <section className="section" id="ecosystem" style={{ paddingBottom: 0, scrollMarginTop: 72 }}>
        <div className="wrap">
          <div className="head" style={{ marginBottom: 72 }}>
            <p className="label">{t.ecosystem.label}</p>
            <h2>{t.ecosystem.title}</h2>
          </div>

          <Feature
            label={t.hub.label}
            title={t.hub.title}
            description={t.hub.description}
            specs={[
              { title: t.hub.dosing, body: t.hub.dosingBody },
              { title: t.hub.flow, body: t.hub.flowBody },
            ]}
            image="pole.jpg"
            imageAlt={t.hub.imageAlt}
            caption={t.hub.caption}
            imageStyle={{ filter: 'grayscale(.6)' }}
          />
          <Feature
            flip
            label={t.injection.label}
            title={t.injection.title}
            description={t.injection.description}
            specs={[{ title: t.injection.dosing }, { title: t.injection.pump }]}
            image="tank.jpg"
            imageAlt={t.injection.imageAlt}
            caption={t.injection.caption}
          />
          <Feature
            label={t.subsurface.label}
            title={t.subsurface.title}
            description={t.subsurface.description}
            specs={[{ title: t.subsurface.sensing }, { title: t.subsurface.delivery }]}
            image="schematic.jpg"
            imageAlt={t.subsurface.imageAlt}
            caption={t.subsurface.caption}
          />
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <p className="label">{common.begin}</p>
          <h2>
            {t.cta.title} <em style={{ color: 'var(--sage)' }}>{t.cta.titleEm}</em>
          </h2>
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
