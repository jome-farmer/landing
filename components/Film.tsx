'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from '@/lib/use-translations';

// Brand film: preloads once the page is idle or the section is near, plays once (muted) when its section is in view and holds the
// last frame; leaving pauses it, and coming back after it has finished plays it again from the start.
// With reduced motion it shows the poster and native controls instead of autoplaying.
export default function Film() {
  const t = useTranslations().home.film;
  const video = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStill(true); // eslint-disable-line react-hooks/set-state-in-effect
      return;
    }
    // fetch the film ahead of time: once the page has loaded and is idle, or when it gets within ~1.5 screens
    const warm = () => { if (v.readyState === 0 && v.preload !== 'auto') { v.preload = 'auto'; v.load(); } };
    const idle = () => ('requestIdleCallback' in window ? requestIdleCallback(warm, { timeout: 3000 }) : setTimeout(warm, 1500));
    if (document.readyState === 'complete') idle(); else addEventListener('load', idle, { once: true });
    const near = new IntersectionObserver(([e]) => e.isIntersecting && warm(), { rootMargin: '0px 0px 150% 0px' });
    near.observe(v);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        warm();
        if (v.ended) v.currentTime = 0;
        v.play().catch(() => {});
      }
      else v.pause();
    }, { threshold: 0.35 });
    io.observe(v);
    return () => { io.disconnect(); near.disconnect(); removeEventListener('load', idle); };
  }, []);

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
    if (v.paused && !v.ended) v.play().catch(() => {});
  };

  return (
    <section className="section rule-top film">
      <div className="wrap">
        <div className="head">
          <p className="label">{t.label}</p>
          <h2>{t.title} <em>{t.titleEm}</em></h2>
          <p className="lead">{t.subtitle}</p>
        </div>
        <figure className="film-frame">
          <video ref={video} src="/video/jome-film.mp4" poster="/video/jome-film.jpg" muted playsInline preload="none" controls={still} aria-label={`${t.title} ${t.titleEm}`} />
          {!still && (
            <button type="button" className="film-sound" onClick={toggle} aria-pressed={!muted}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 9v6h4l5 4V5L8 9H4Z" />
                {muted ? <path d="m17 9 5 6M22 9l-5 6" /> : <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" />}
              </svg>
              {muted ? t.soundOn : t.soundOff}
            </button>
          )}
        </figure>
      </div>
    </section>
  );
}
