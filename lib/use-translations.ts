'use client';

import { useParams } from 'next/navigation';
import { getTranslations, type Locale } from './translations';

export function useTranslations() {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'en';
  return getTranslations(locale);
}
