# Design

Run `npm run design` and open http://localhost:3200 to browse every design preview (index at `design/index.html`). Design first, then implement.

## v3 — Live (current)

The site is rebuilt as live HTML over photographic scenes (see the supplied hero/infographic images).

| Path | What |
|---|---|
| `v3/hero.html` | Hero: scene + live dashboard + callouts (CSS: `v3/hero.css`, shared with the app) |
| `v3/fields.js` | Real farm parcels (OpenStreetMap, near Qazvin) used as the map's field zones |
| `v3/map.html` | Live farm map, full size. Logic in `v3/farm-map.js` (MapLibre + Esri World Imagery tiles), shared with the app via `components/FarmMap.tsx` |
| `v3/logo.html` | Logo and app icon sheet |
| Tabs | Technology (home), Hardware, AI Agronomist, Nutrient Injector. Each opens with a scene hero built by `components/Scene.tsx`: a render from `public/images/` with its baked labels blurred out (with a local script, `scripts/clean-scenes.py`, not committed; the source renders live in `public/images/*.png`, also not committed → `public/images/scenes/`). Every blurred rectangle is listed once in `lib/scenes.json`, and the component puts a panel over each one with a 10px margin, so no blur shows. To move a card, edit its rectangle there and rerun the script. The same file holds each scene's motion paths (`fx`: water, signal, ping, drip) in the same design pixels |
| Contact | `components/Contact.tsx`, rendered by the layout above the footer on every page (`#contact`) |
| `logo/` | Logo files generated from `Jome Leaf Logo.png`: `logo-light` (dark backgrounds), `logo-dark`, `logo-white`, `logo-black`, plus `app-icon-{1024,512,192,32}.png`. The site uses `public/images/logo-light.png`. |

Reference exports of the site design. Each version lives in its own folder; code should match the latest one.

## v1 — current live site

Source: [Figma "jome"](https://www.figma.com/design/UtE23Lx8CHMIb69NS4uGY2/jome), exported 2026-09-29.

| File | Figma frame | Route |
|---|---|---|
| `v1/01-home.png` | JoME \| Smart Irrigation Redesign | `/[locale]/` |
| `v1/02-ai-agent.png` | JoME \| AI Agent Introduction | `/[locale]/ai-agent/` |
| `v1/03-ai-agent-chat.png` | JoME \| Conversational AI Agent | `/[locale]/ai-agent/chat/` |
| `v1/04-nutrients.png` | JoME \| Precision Nutrients Introduction | `/[locale]/nutrients/` |
| `v1/05-hardware.png` | JoME \| Next-Gen Hardware & Injection Hub | `/[locale]/hardware/` |
| `v1/06-hardware-alt-unused.png` | JoME \| Hardware & Irrigation Infrastructure | not built (older variant) |

Tokens are defined in `app/globals.css` (`@theme`); font is Hanken Grotesk (Vazirmatn for Persian).

## v2 — Editorial (in progress)

Clickable HTML mock of the premium redesign. Serve the repo root (`python3 -m http.server`) and open `/design/v2/home.html`; images load from `public/images/`.

| File | Page |
|---|---|
| `v2/home.html` | Home |
| `v2/ai-agent.html` | AI Agronomist |
| `v2/chat.html` | Agronomist Copilot (What-If slider is live) |
| `v2/nutrients.html` | Nutrients |
| `v2/hardware.html` | Hardware |

`v2/styles.css` holds the v2 tokens (colors, type) and components; `v2/partials.js` renders the shared nav and footer. Type: Instrument Serif (display) + Inter (text).
