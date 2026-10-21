'use client';

import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { Icon, Spark, type IconName } from './Icons';
import Logo from './Logo';
import FarmMap, { type FarmMapHandle } from './FarmMap';
import { irrigationOf, statusOf, type Layer, type Nutrient, type Tick } from '../design/v3/farm-map.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
type T = { hero: { panel: string; expand: string; nav: readonly string[]; views: any }; dashboard: any };

const navIcons: IconName[] = ['grid', 'leaf', 'drop', 'flask', 'sun', 'chart'];
const layerOf = (v: number): Layer => (v === 2 ? 'irrigation' : v === 3 ? 'nutrients' : 'moisture');
const forecast = [[24, 11], [26, 13], [27, 14], [25, 12], [23, 10]];
const hourly = [14, 13, 12, 13, 16, 20, 23, 25, 26, 24, 20, 16];

export default function FarmDashboard({ t, n, style }: { t: T; n: (v: number) => string; style: CSSProperties }) {
  const d = t.dashboard;
  const v = t.hero.views as Record<string, string> & { days: string[] };
  const [view, setView] = useState(0);
  const [open, setOpen] = useState(false);
  const [nutrient, setNutrient] = useState<Nutrient>('N');
  const [tick, setTick] = useState<Tick | null>(null);
  const map = useRef<FarmMapHandle>(null);
  const labels = useMemo(() => ({ irrigating: d.irrigating, scheduled: d.scheduled, idle: d.idle }), [d.irrigating, d.scheduled, d.idle]);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, []);
  // the map canvas needs a nudge when its box changes size
  useEffect(() => { const id = setTimeout(() => map.current?.resize(), 380); return () => clearTimeout(id); }, [open, view]);

  const fields = tick?.fields ?? [];
  const avg = tick?.avg ?? 68;
  const stateLabel = (s: 'irrigating' | 'scheduled' | 'idle') => d[s] as string;

  return (
    <div className={`hs-dash${open ? ' open' : ''}`} style={style}>
      <div className="hs-dash-top">
        <Logo /><span>{t.hero.panel}</span>
        <button className="hs-expand" aria-expanded={open} aria-label={t.hero.expand} onClick={() => setOpen(!open)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
        </button>
      </div>
      <div className="hs-dash-body">
        <nav className="hs-nav" role="tablist">
          {t.hero.nav.map((x, i) => (
            <button key={x} role="tab" aria-selected={view === i} title={x} className={view === i ? 'on' : ''} onClick={() => setView(i)}>
              <Icon name={navIcons[i]} /><em>{x}</em>
            </button>
          ))}
        </nav>

        <div className="hs-center">
          <FarmMap ref={map} layer={layerOf(view)} nutrient={nutrient} fieldLabel={d.field} labels={labels} onTick={setTick} onSelect={() => {}} />

          {view === 4 && (
            <div className="hs-pane">
              <h4>{v.forecast}</h4>
              <div className="hs-days">
                {forecast.map(([hi, lo], i) => (
                  <div key={i}><small>{v.days[i]}</small><Icon name={i === 3 ? 'drop' : 'sun'} className={`hs-ico ${i === 3 ? 'water' : 'sun'}`} /><b>{n(hi)}°</b><small>{n(lo)}°</small></div>
                ))}
              </div>
              <h4>{v.temp}</h4>
              <Spark points={hourly} className="big" />
            </div>
          )}

          {view === 5 && (
            <div className="hs-pane">
              {[[d.perf[0], '−32%', [60, 58, 55, 50, 49, 44, 41, 38]], [d.perf[1], '+18%', [52, 55, 54, 58, 57, 62, 60, 66, 68]], [d.perf[2], '−24%', [50, 49, 46, 44, 40, 39, 36, 35]]].map(([l, val, p]) => (
                <div key={l as string} className="hs-chart">
                  <div><small>{l as string}</small><b dir="ltr">{(val as string).replace(/\d+/, (m) => n(+m))}</b></div>
                  <Spark points={p as number[]} className="big" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={`hs-kpis${view === 0 ? '' : ' list'}`}>
          {view === 0 && (
            <>
              <div className="hs-kpi"><Icon name="leaf" className="hs-ico" /><div><small>{d.kpis[0]}</small><b>{d.excellent}</b><i style={{ '--p': '90%' } as CSSProperties} /></div></div>
              <div className="hs-kpi"><Icon name="drop" className="hs-ico water" /><div><small>{d.kpis[1]}</small><b>{n(Math.round(avg))}%</b></div><Spark points={tick?.series ?? [68, 68]} /></div>
              <div className="hs-kpi"><Icon name="leaf" className="hs-ico" /><div><small>{d.kpis[2]}</small><b>{d.optimal}</b><i style={{ '--p': '78%' } as CSSProperties} /></div></div>
              <div className="hs-kpi"><Icon name="sun" className="hs-ico sun" /><div><small>{d.kpis[3]}</small><b>{n(24)}°C</b><small>{d.clearSky}</small></div></div>
            </>
          )}

          {view === 1 && fields.map((f) => (
            <button key={f.id} className={`hs-row ${statusOf(f.moisture)}${tick?.selected === f.id ? ' sel' : ''}`} onClick={() => map.current?.focus(f.id)}>
              <b>{d.field} {n(f.id)}</b><small>{n(f.ha)} {v.hectares}</small>
              <span className="pct">{n(Math.round(f.moisture))}%</span>
              <span className="tag">{d.status[statusOf(f.moisture)]}</span>
            </button>
          ))}

          {view === 2 && [...fields].sort((a, b) => Number(b.irrigating) - Number(a.irrigating)).map((f) => {
            const s = irrigationOf(f);
            return (
              <div key={f.id} className={`hs-row irr ${s}`}>
                <b>{d.field} {n(f.id)}</b><small>{stateLabel(s)}</small>
                <span className="pct">{n(s === 'irrigating' ? Math.round(f.progress) : 0)}%</span>
                <i style={{ '--p': `${s === 'irrigating' ? f.progress : 0}%` } as CSSProperties} />
              </div>
            );
          })}

          {view === 3 && (
            <>
              <div className="hs-seg" role="group">
                {(['N', 'P', 'K'] as Nutrient[]).map((k) => (
                  <button key={k} className={nutrient === k ? 'on' : ''} title={v[k.toLowerCase()]} onClick={() => setNutrient(k)}>{k}</button>
                ))}
              </div>
              {fields.map((f) => (
                <div key={f.id} className={`hs-row irr ${statusOf(f.nutrients[nutrient])}`}>
                  <b>{d.field} {n(f.id)}</b><small>{d.status[statusOf(f.nutrients[nutrient])]}</small>
                  <span className="pct">{n(Math.round(f.nutrients[nutrient]))}</span>
                  <i style={{ '--p': `${f.nutrients[nutrient]}%` } as CSSProperties} />
                </div>
              ))}
            </>
          )}

          {view === 4 && (
            <>
              {[['sun', v.temp, `${n(24)}°C`], ['drop', v.humidity, `${n(52)}%`], ['wifi', v.wind, `${n(12)} km/h`], ['drop', v.rain, `${n(0)} mm`]].map(([ic, l, val]) => (
                <div key={l} className="hs-kpi"><Icon name={ic as IconName} className={`hs-ico ${ic === 'sun' ? 'sun' : 'water'}`} /><div><small>{l}</small><b dir="ltr">{val}</b></div></div>
              ))}
            </>
          )}

          {view === 5 && d.alertItems.map((a: string, i: number) => (
            <div key={a} className="hs-row alert"><Icon name="alert" className="hs-ico" /><b>{a}</b><small>{d.ago[i]}</small></div>
          ))}
        </div>
      </div>
    </div>
  );
}
