'use client';

import { useEffect, useRef, useState } from 'react';
import { useNumber } from '@/lib/use-translations';

// Counts from 0 to `to` the first time it scrolls into view (instantly with reduced motion).
export default function CountUp({ to, prefix = '', suffix = '' }: { to: number; prefix?: string; suffix?: string }) {
  const n = useNumber();
  const el = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);

  useEffect(() => {
    const node = el.current;
    if (!node) return;
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return setV(to);
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / 1400);
        setV(to * (1 - (1 - p) ** 3));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(node);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);

  return <span ref={el} dir="ltr">{prefix}{n(Math.round(v))}{suffix}</span>;
}
