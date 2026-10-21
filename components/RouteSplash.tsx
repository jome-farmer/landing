'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Shows the splash (with its progress bar) again when moving between tabs, until the new page's scene and
// eager images are in; cached tabs switch without it. The tracking itself is window.__splash in the layout.
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
    const scenes = [...document.querySelectorAll<HTMLElement>('.hs')]
      .map((el) => el.style.getPropertyValue('--scene').match(/url\("?([^")]+)"?\)/)?.[1])
      .filter((src): src is string => !!src);
    const images = [...document.images].filter((img) => img.loading !== 'lazy').map((img) => img.currentSrc || img.src);
    // already cached: switch tabs without any splash
    if ([...scenes, ...images].every((src) => { const img = new Image(); img.src = src; return img.complete; })) return;
    document.documentElement.removeAttribute('data-loaded');
    (window as Window & { __splash?: (waitLoad: boolean) => void }).__splash?.(false);
  }, [pathname]);

  return null;
}
