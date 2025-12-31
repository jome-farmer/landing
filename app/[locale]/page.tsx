import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { type Locale } from '@/lib/translations';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fa' }];
}

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Header />
      <main className="flex flex-col flex-1 w-full items-center">
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
