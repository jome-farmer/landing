'use client';

import { useParams } from 'next/navigation';
import { getTranslations, type Locale } from './translations';

export function useLocale() {
  const params = useParams();
  return (params?.locale as Locale) || 'en';
}

export function useTranslations() {
  return getTranslations(useLocale());
}

// Formats numbers in the page's script (Persian digits on /fa).
export function useNumber() {
  const nf = new Intl.NumberFormat(useLocale() === 'fa' ? 'fa-IR' : 'en', { maximumFractionDigits: 1 });
  return (v: number) => nf.format(v);
}
