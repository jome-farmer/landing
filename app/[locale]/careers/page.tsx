import type { Metadata } from 'next';
import { Arrow, Icon, type IconName } from '@/components/Icons';
import { getPages } from '@/lib/pages';
import { EMAIL } from '@/lib/site';
import type { Locale } from '@/lib/translations';

type Props = { params: Promise<{ locale: string }> };
const areaIcons: IconName[] = ['drop', 'chip', 'chart', 'leaf'];
const howIcons: IconName[] = ['sun', 'grid', 'check'];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `${getPages((await params).locale as Locale).careers.label} · Jome` };
}

export default async function CareersPage({ params }: Props) {
  const t = getPages((await params).locale as Locale).careers;

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
        <div className="wrap">
          <div className="head">
            <p className="label">{t.areas.label}</p>
            <h2>{t.areas.title} <em>{t.areas.titleEm}</em></h2>
          </div>
          <div className="tiles">
            {t.areas.items.map(([title, desc], i) => (
              <div key={title} className="tile">
                <Icon name={areaIcons[i]} className="tile-ico" />
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
            <p className="label">{t.how.label}</p>
            <h2>{t.how.title} <em>{t.how.titleEm}</em></h2>
          </div>
          <div className="tiles three">
            {t.how.items.map(([title, desc], i) => (
              <div key={title} className="tile">
                <Icon name={howIcons[i]} className="tile-ico" />
                <b>{title}</b>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="open-role">
            <h3 className="h3">{t.open.title}</h3>
            <p className="lead">{t.open.body}</p>
            <a className="btn btn-green" href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.open.subject)}`}>{t.open.button} <Arrow /></a>
          </div>
        </div>
      </section>
    </>
  );
}
