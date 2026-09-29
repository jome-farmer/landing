'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from '@/lib/use-translations';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname() ?? '';

  const tabs = [
    { href: `/${locale}/#capabilities`, label: t.nav.tech, match: null },
    { href: `/${locale}/ai-agent/`, label: t.nav.aiAgent, match: `/${locale}/ai-agent` },
    { href: `/${locale}/nutrients/`, label: t.nav.nutrients, match: `/${locale}/nutrients` },
    { href: `/${locale}/hardware/`, label: t.nav.hardware, match: `/${locale}/hardware` },
  ];
  const links = tabs.map((tab) => (
    <Link
      key={tab.href}
      href={tab.href}
      aria-current={tab.match && pathname.startsWith(tab.match) ? 'page' : undefined}
    >
      {tab.label}
    </Link>
  ));

  return (
    <nav className="nav">
      <div className="wrap">
        <Link href={`/${locale}/`} className="wordmark">
          JoME
        </Link>
        <div className="tabs">{links}</div>
        <div className="nav-end">
          <LanguageSwitcher />
          <a href="#" className="link">
            {t.common.requestQuote} <span className="arrow">→</span>
          </a>
          <a href="#" className="btn btn-solid btn-sm">
            {t.common.getStarted}
          </a>
        </div>
        {/* keyed on pathname so the menu closes after navigating */}
        <details key={pathname} className="menu">
          <summary>
            <span className="open">{t.nav.menu}</span>
            <span className="close">{t.nav.close}</span>
          </summary>
          <div className="menu-panel">
            {links}
            <div className="row-end">
              <LanguageSwitcher />
              <a href="#" className="btn btn-solid btn-sm">
                {t.common.getStarted}
              </a>
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}
