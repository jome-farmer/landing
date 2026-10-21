'use client';

import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { Icon, type IconName } from './Icons';
import Logo from './Logo';
import scenes from '@/lib/scenes.json';

// A photographic scene (1796x876) whose baked-in labels were blurred out by scripts/clean-scenes.py.
// Every blurred rectangle in lib/scenes.json gets a panel on top, so no blur ever shows. Styles: design/v3/hero.css.
export type SceneName = Exclude<keyof typeof scenes, '_'>;
type Rect = number[];
export type SceneCard = { icon: IconName; tint?: 'sun' | 'water'; title: string; desc?: string; extra?: ReactNode; at?: CSSProperties };

// Places a panel over a blurred rectangle, with a margin that hides the blur's soft edge.
const PAD = 10;
export const cover = ([x0, y0, x1, y1]: Rect) => at(x0 - PAD, y0 - PAD, x1 - x0 + 2 * PAD, y1 - y0 + 2 * PAD);
export const at = (x: number, y: number, w: number, h?: number) => ({ '--x': x, '--y': y, '--w': w, '--h': h }) as CSSProperties;
type Fx = { signal?: number[][]; water?: number[][]; ping?: number[][]; drip?: number[][] };
export const rects = (name: SceneName) => scenes[name] as { tag: Rect; cards: Rect[]; dash?: Rect; head?: Rect; fx?: Fx };

// Motion over the photo: water flowing along pipes, data pulses along signal lines, antenna ripples, emitter glows.
const path = (p: number[]) => p.map((v, i) => (i % 2 ? `${v} ` : `${i ? 'L' : 'M'}${v},`)).join('');
const length = (p: number[]) => p.reduce((sum, _, i) => (i >= 2 && i % 2 === 0 ? sum + Math.hypot(p[i] - p[i - 2], p[i + 1] - p[i - 1]) : sum), 0);

function SceneFx({ fx }: { fx: Fx }) {
  return (
    <svg className="hs-fx" viewBox="0 0 1796 876" preserveAspectRatio="none" aria-hidden="true">
      {fx.water?.map((p, i) => (
        <g key={`w${i}`} className="fx-water"><path d={path(p)} /><path d={path(p)} className="flow" /></g>
      ))}
      {fx.drip?.map(([x, y], i) => <circle key={`d${i}`} className="fx-drip" cx={x} cy={y} r="26" style={{ animationDelay: `${(i * 0.7) % 2.4}s` }} />)}
      {fx.signal?.map((p, i) => (
        <g key={`s${i}`} className="fx-signal">
          <path d={path(p)} />
          <circle r="4" className="fx-dot">
            <animateMotion dur={`${Math.max(1.4, length(p) / 240).toFixed(2)}s`} begin={`${(i * 0.53).toFixed(2)}s`} repeatCount="indefinite" path={path(p)} />
          </circle>
        </g>
      ))}
      {fx.ping?.map(([x, y], i) => (
        <g key={`p${i}`} className="fx-ping" style={{ '--d': `${(i * 0.45).toFixed(2)}s` } as CSSProperties}>
          <circle cx={x} cy={y} r="24" /><circle cx={x} cy={y} r="24" />
        </g>
      ))}
    </svg>
  );
}

// Ticks every `ms` so cards can show slowly drifting "live" readings.
export function useTick(ms = 2500) {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((v) => v + 1), ms);
    return () => clearInterval(id);
  }, [ms]);
  return t;
}
export const wave = (t: number, base: number, amp: number, phase = 0) => base + amp * Math.sin(t * 0.9 + phase);

export default function Scene({ name, title, tag, badge, cards, id, children }: {
  name: SceneName; title?: string; tag: readonly string[]; badge?: string; cards: SceneCard[]; id?: string; children?: ReactNode;
}) {
  const r = rects(name);
  if (cards.filter((c) => !c.at).length !== r.cards.length) throw new Error(`Scene ${name}: expected ${r.cards.length} cards`);
  let i = 0;
  return (
    <section className="hs" id={id} style={{ '--scene': `url("/images/scenes/${name}.jpg")` } as CSSProperties}>
      {title && <h1>{title}</h1>}
      {r.fx && <SceneFx fx={r.fx} />}
      <div className="hs-brand" style={cover(r.tag)}>
        <div className="hs-brand-top"><Logo />{badge && <span className="concept">{badge}</span>}</div>
        <p className="hs-tag">{tag[0]}<br />{tag[1]}</p>
      </div>
      {children}
      <div className="hs-cards">
        {cards.map((c) => (
          <div key={c.title} className="hs-card" style={c.at ?? cover(r.cards[i++])}>
            <Icon name={c.icon} className={`hs-ico ${c.tint ?? ''}`} />
            <div>
              <b>{c.title}</b>
              {c.desc && <p>{c.desc}</p>}
              {c.extra}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
