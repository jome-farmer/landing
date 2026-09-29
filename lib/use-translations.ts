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
