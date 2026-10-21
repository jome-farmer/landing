'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from '@/lib/use-translations';

// The chat now lives in an overlay on the AI Agronomist tab; keep old links working.
export default function ChatPage() {
  const router = useRouter();
  const locale = useLocale();
  useEffect(() => router.replace(`/${locale}/ai-agent/#ask`), [router, locale]);
  return null;
}
