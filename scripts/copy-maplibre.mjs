// Next's bundler can't resolve maplibre's web worker, so serve it as a static file (see components/FarmMap.tsx).
import { cpSync, mkdirSync } from 'node:fs';
mkdirSync('public/maplibre', { recursive: true });
for (const f of ['maplibre-gl-worker.mjs', 'maplibre-gl-shared.mjs']) cpSync(`node_modules/maplibre-gl/dist/${f}`, `public/maplibre/${f}`);
