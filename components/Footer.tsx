'use client';

import Link from 'next/link';
import { useTranslations } from '@/lib/use-translations';

export default function Footer() {
  const t = useTranslations();
  const l = t.footer.links;

  const columns = [
    { title: t.footer.product, links: [l.features, l.techSpecs, l.aiAgent] },
    { title: t.footer.company, links: [l.aboutUs, l.careers] },
    { title: t.footer.legal, links: [l.privacyPolicy, l.termsOfService] },
  ];

  return (
    <footer className="w-full border-t border-outline bg-background">
      <div className="mx-auto flex max-w-[1280px] flex-col md:flex-row justify-between gap-10 p-6">
        <div className="flex max-w-[384px] flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src="/images/logo.svg" alt="" width={17} height={17} />
            <span className="text-2xl leading-8 font-semibold tracking-[-1.2px] text-primary">JoME</span>
          </div>
          <p className="text-sm text-muted">{t.footer.description}</p>
        </div>
        <div className="flex flex-wrap gap-12">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-2">
              <h3 className="pb-2 text-xs font-bold uppercase tracking-[0.96px] whitespace-nowrap text-on-surface">{col.title}</h3>
              {col.links.map((label) => (
                <Link key={label} href="#" className="text-sm text-muted hover:text-primary transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-[1280px] flex-col md:flex-row items-center justify-between gap-4 border-t border-surface-variant px-6 py-4">
        <p className="text-sm text-muted">{t.footer.copyright}</p>
        <div className="flex gap-4">
          <Link href="#" aria-label="Like" className="opacity-80 hover:opacity-100 transition-opacity">
            <img src="/images/icon-like.svg" alt="" width={21} height={20} />
          </Link>
          <Link href="#" aria-label="Share" className="opacity-80 hover:opacity-100 transition-opacity">
            <img src="/images/icon-share.svg" alt="" width={18} height={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
