import type { Metadata } from 'next';
import Link from 'next/link';
import { Arrow, Icon, type IconName } from '@/components/Icons';
import { getPages } from '@/lib/pages';
import { getTranslations, type Locale } from '@/lib/translations';

type Props = { params: Promise<{ locale: string }> };
const valueIcons: IconName[] = ['drop', 'shield', 'leaf', 'chip'];
const parts = [['hardware', '/images/home/f-hubfield.jpg'], ['ai-agent', '/images/nutrients/map.jpg'], ['nutrients', '/images/home/f-nutrients.jpg']];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `${getPages((await params).locale as Locale).about.label} · Jome` };
}

export default async function AboutPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const t = getPages(locale).about;
  const home = getTranslations(locale).home;

  return (
    <>
      <header className="section page-hero">
        <div className="wrap head">
          <p className="label">{t.label}</p>
          <h1>{t.title} <em>{t.titleEm}</em></h1>
          <p className="lead">{t.lead}</p>
        </div>
      </header>

      <section className="section rule-top">
        <div className="wrap story">
          <div className="head">
            <p className="label">{t.story.label}</p>
            <h2>{t.story.title} <em>{t.story.titleEm}</em></h2>
          </div>
          <div className="story-body">{t.story.body.map((p) => <p key={p}>{p}</p>)}</div>
        </div>
      </section>

      <section className="section rule-top">
        <div className="wrap">
          <div className="head">
            <p className="label">{t.values.label}</p>
            <h2>{t.values.title} <em>{t.values.titleEm}</em></h2>
          </div>
          <div className="tiles">
            {t.values.items.map(([title, desc], i) => (
              <div key={title} className="tile">
                <Icon name={valueIcons[i]} className="tile-ico" />
                <b>{title}</b>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section rule-top">
        <div className="wrap">
          <div className="head">
            <p className="label">{t.what.label}</p>
            <h2>{t.what.title} <em>{t.what.titleEm}</em></h2>
          </div>
          <div className="parts">
            {home.parts.items.map((it, i) => (
              <Link key={it.title} href={`/${locale}/${parts[i][0]}/`} className="part">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={parts[i][1]} alt={it.alt} loading="lazy" />
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                  <span className="link">{it.link} <Arrow /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="page-cta">
            <h3 className="h3">{t.cta.title}</h3>
            <a href="#contact" className="btn btn-green">{t.cta.button} <Arrow /></a>
          </div>
        </div>
      </section>
    </>
  );
}
