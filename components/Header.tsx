'use client';

import Link from 'next/link';
import { useTranslations } from '@/lib/use-translations';
import LanguageSwitcher from './LanguageSwitcher';
import Icon from './Icon';

export default function Header() {
  const t = useTranslations();

  const links = [
    { href: '#features', label: t.nav.tech },
    { href: '#', label: t.nav.aiAgent },
    { href: '#', label: t.nav.nutrients },
    { href: '#', label: t.nav.hardware },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
        <Link href="#" className="flex items-center gap-2">
          <img src="/images/logo.svg" alt="" width={17} height={17} />
          <span className="text-4xl leading-[44px] font-bold tracking-[-1.8px] text-primary">JoME</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-base text-muted hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
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
        <div className="md:hidden text-on-surface">
          <Icon name="menu" />
        </div>
      </div>
    </header>
  );
}
