'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from '@/lib/use-translations';
import LanguageSwitcher from './LanguageSwitcher';
import Icon from './Icon';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname() ?? '';

  const links = [
    { href: `/${locale}/#features`, label: t.nav.tech },
    { href: `/${locale}/ai-agent/`, label: t.nav.aiAgent },
    { href: `/${locale}/nutrients/`, label: t.nav.nutrients },
    { href: `/${locale}/hardware/`, label: t.nav.hardware },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
        <Link href={`/${locale}/`} className="flex items-center gap-2">
          <img src="/images/logo.svg" alt="" width={17} height={17} />
          <span className="text-4xl leading-[44px] font-bold tracking-[-1.8px] text-primary">JoME</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = !link.href.includes('#') && pathname.startsWith(link.href.slice(0, -1));
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`border-b-2 pt-1.5 pb-1.5 text-base transition-colors hover:text-primary ${
                  active ? 'border-primary font-bold text-primary' : 'border-transparent text-muted'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <button className="cursor-pointer rounded border border-info px-6 py-2 text-base text-accent hover:bg-info/10 transition-colors">
            {t.nav.requestQuote}
          </button>
          <button className="cursor-pointer rounded bg-accent px-6 py-2 text-base font-bold text-background hover:bg-primary transition-colors">
            {t.nav.getStarted}
          </button>
        </div>
        <details key={pathname} className="group md:hidden">
          <summary aria-label="Menu" className="flex cursor-pointer list-none text-on-surface [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden"><Icon name="menu" /></span>
            <span className="hidden group-open:inline"><Icon name="close" /></span>
          </summary>
          <nav className="absolute inset-x-0 top-20 flex flex-col gap-1 border-b border-outline bg-background px-6 pb-6">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="py-3 text-lg text-muted hover:text-primary">
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-3">
              <LanguageSwitcher />
              <button className="flex-1 cursor-pointer rounded bg-accent px-6 py-2 font-bold text-background">{t.nav.getStarted}</button>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
