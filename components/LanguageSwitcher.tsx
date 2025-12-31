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
      className="text-sm font-medium leading-normal hover:text-primary transition-colors px-2 py-1 rounded"
    >
      {otherLocale.toUpperCase()}
    </Link>
  );
}
