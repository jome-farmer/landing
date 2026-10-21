import type { Metadata } from 'next';
import LegalDoc from '@/components/LegalDoc';
import { getPages } from '@/lib/pages';
import type { Locale } from '@/lib/translations';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `${getPages((await params).locale as Locale).privacy.title} · Jome` };
}

export default async function Page({ params }: Props) {
  return <LegalDoc t={getPages((await params).locale as Locale).privacy} />;
}
