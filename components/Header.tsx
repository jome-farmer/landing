'use client';

import Link from 'next/link';
import { useTranslations } from '@/lib/use-translations';
import LanguageSwitcher from './LanguageSwitcher';
import Icon from './Icon';

export default function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#28392e] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
      <div className="layout-container flex justify-center w-full">
        <div className="flex max-w-[1280px] w-full items-center justify-between px-4 py-3 md:px-10">
          <div className="flex items-center gap-4 text-[#111813] dark:text-white">
            <div className="size-8 flex items-center justify-center text-primary">
              <Icon name="eco" className="text-3xl" />
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">JoME</h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#features"
              >
                {t.nav.features}
              </Link>
              <Link
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#technology"
              >
                {t.nav.technology}
              </Link>
              <Link
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#how-it-works"
              >
                {t.nav.howItWorks}
              </Link>
              <Link
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
              >
                {t.nav.login}
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(19,236,91,0.3)]">
                <span className="truncate">{t.nav.getStarted}</span>
              </button>
            </div>
          </div>
          <div className="md:hidden text-white">
            <Icon name="menu" />
          </div>
        </div>
      </div>
    </header>
  );
}
