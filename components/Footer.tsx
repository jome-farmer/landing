'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useLocale, useTranslations } from '@/lib/use-translations';

export default function Footer() {
  const t = useTranslations().footer;
  const locale = useLocale();
  const l = t.links;

  const columns = [
    {
      title: t.product,
      links: [
        [l.features, `/${locale}/`],
        [l.techSpecs, `/${locale}/hardware/`],
        [l.aiAgent, `/${locale}/ai-agent/`],
      ],
    },
    { title: t.company, links: [[l.aboutUs, '#'], [l.careers, '#']] },
    { title: t.legal, links: [[l.privacyPolicy, '#'], [l.termsOfService, '#']] },
  ];

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot">
          <div>
            <span className="wordmark"><Logo /></span>
            <p>{t.description}</p>
          </div>
          <div className="cols">
            {columns.map((col) => (
              <div key={col.title}>
                <span className="label">{col.title}</span>
                {col.links.map(([label, href]) => (
                  <Link key={label} href={href}>
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <figure className="foot-quote">
          <blockquote>{t.quote}</blockquote>
          <figcaption>{t.quoteNote}</figcaption>
        </figure>
        <div className="legal">
          <span>{t.copyright}</span>
          <span className="social">
            <a href="#">{t.like}</a>
            <a href="#">{t.share}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
