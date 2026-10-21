'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from '@/lib/use-translations';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname() ?? '';

  const home = `/${locale}/`;
  const tabs = [
    { href: home, label: t.nav.tech },
    { href: `/${locale}/hardware/`, label: t.nav.hardware },
    { href: `/${locale}/ai-agent/`, label: t.nav.aiAgent },
    { href: `/${locale}/nutrients/`, label: t.nav.nutrients },
  ];
  const isOn = (href: string) => (href === home ? pathname === home || pathname === `/${locale}` : pathname.startsWith(href.slice(0, -1)));
  const links = tabs.map((tab) => (
    <Link key={tab.href} href={tab.href} aria-current={isOn(tab.href) ? 'page' : undefined}>
      {tab.label}
    </Link>
  ));

  return (
    <nav className="nav">
      <div className="wrap">
        <Link href={`/${locale}/`} className="wordmark">
          <Logo />
        </Link>
        <div className="tabs">{links}</div>
        <div className="nav-end">
          <LanguageSwitcher />
          <a href="#contact" className="btn btn-green btn-sm">
            {t.nav.contact}
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
              <a href="#contact" className="btn btn-green btn-sm">
                {t.nav.contact}
              </a>
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}
