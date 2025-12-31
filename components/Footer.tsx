'use client';

import Link from 'next/link';
import { useTranslations } from '@/lib/use-translations';
import Icon from './Icon';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="w-full border-t border-[#28392e] bg-[#0d1610] py-12 px-4 md:px-10">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-2 text-white">
            <Icon name="eco" className="text-primary text-3xl" />
            <h2 className="text-xl font-bold">JoME</h2>
          </div>
          <p className="text-[#9db9a6] text-sm leading-relaxed">{t.footer.description}</p>
        </div>
        <div className="flex flex-wrap gap-10 md:gap-20">
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">{t.footer.product}</h3>
            <Link className="text-[#9db9a6] text-sm hover:text-primary transition-colors" href="#">
              {t.footer.links.features}
            </Link>
            <Link className="text-[#9db9a6] text-sm hover:text-primary transition-colors" href="#">
              {t.footer.links.integrations}
            </Link>
            <Link className="text-[#9db9a6] text-sm hover:text-primary transition-colors" href="#">
              {t.footer.links.pricing}
            </Link>
            <Link className="text-[#9db9a6] text-sm hover:text-primary transition-colors" href="#">
              {t.footer.links.hardware}
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">{t.footer.company}</h3>
            <Link className="text-[#9db9a6] text-sm hover:text-primary transition-colors" href="#">
              {t.footer.links.aboutUs}
            </Link>
            <Link className="text-[#9db9a6] text-sm hover:text-primary transition-colors" href="#">
              {t.footer.links.careers}
            </Link>
            <Link className="text-[#9db9a6] text-sm hover:text-primary transition-colors" href="#">
              {t.footer.links.blog}
            </Link>
            <Link className="text-[#9db9a6] text-sm hover:text-primary transition-colors" href="#">
              {t.footer.links.contact}
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">{t.footer.legal}</h3>
            <Link className="text-[#9db9a6] text-sm hover:text-primary transition-colors" href="#">
              {t.footer.links.privacyPolicy}
            </Link>
            <Link className="text-[#9db9a6] text-sm hover:text-primary transition-colors" href="#">
              {t.footer.links.termsOfService}
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] w-full mx-auto mt-12 pt-8 border-t border-[#1c271f] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#5c6f62] text-sm">{t.footer.copyright}</p>
        <div className="flex gap-4">
          <Link className="text-[#5c6f62] hover:text-primary transition-colors" href="#">
            <Icon name="thumb_up" className="text-xl" />
          </Link>
          <Link className="text-[#5c6f62] hover:text-primary transition-colors" href="#">
            <Icon name="share" className="text-xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
