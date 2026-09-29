'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { type Locale } from '@/lib/translations';

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = (params?.locale as Locale) || 'en';
  const otherLocale: Locale = currentLocale === 'en' ? 'fa' : 'en';

  // Replace the locale in the pathname
  const newPath = pathname?.replace(`/${currentLocale}`, `/${otherLocale}`) || `/${otherLocale}`;

  return (
    <Link
      href={newPath}
      className="lang"
    >
      {otherLocale === 'fa' ? 'فارسی' : 'English'}
    </Link>
  );
}
