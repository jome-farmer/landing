'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const loaded = (src: string) => new Promise<void>((done) => {
  const img = new Image();
  img.onload = img.onerror = () => done();
  img.src = src;
});

// Shows the splash again when moving between tabs, until the new page's scene and eager images
// are in. It only appears if that takes longer than a moment, so cached tabs switch without a flash.
// (The first load is handled by the inline script in the layout.)
export default function RouteSplash() {
  const pathname = usePathname();
  const prev = useRef(pathname);

  // Every time the layout mounts, make sure the splash can leave. React may re-create <html> (switching
  // language, recovering from a hydration mismatch) without the flag the inline script set, and that
  // script does not run again, so without this the splash would stay up until a refresh.
  useEffect(() => {
    const html = document.documentElement;
    const done = () => html.setAttribute('data-loaded', '');
    if (document.readyState === 'complete') { done(); return; }
    addEventListener('load', done, { once: true });
    const cap = setTimeout(done, 8000);
    return () => { removeEventListener('load', done); clearTimeout(cap); };
  }, []);

  useEffect(() => {
    if (prev.current === pathname) return; // first load, or React re-running the effect
    prev.current = pathname;
    const html = document.documentElement;
    const scenes = [...document.querySelectorAll<HTMLElement>('.hs')]
      .map((el) => el.style.getPropertyValue('--scene').match(/url\("?([^")]+)"?\)/)?.[1])
      .filter((src): src is string => !!src);
    const images = [...document.images].filter((img) => img.loading !== 'lazy').map((img) => img.currentSrc || img.src);
    let finished = false;
    const show = setTimeout(() => { if (!finished) html.removeAttribute('data-loaded'); }, 150);
    Promise.race([
      Promise.all([...scenes, ...images].map(loaded)),
      new Promise((r) => setTimeout(r, 8000)),
    ]).then(() => {
      finished = true;
      clearTimeout(show);
      html.setAttribute('data-loaded', '');
    });
    return () => { finished = true; clearTimeout(show); html.setAttribute('data-loaded', ''); };
  }, [pathname]);

  return null;
}
