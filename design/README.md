# Design

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
