import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';

export default function HomePage() {
  return (
    <div className="flex w-full flex-col items-center pb-20">
      <Hero />
      <Stats />
      <Features />
    </div>
  );
}
