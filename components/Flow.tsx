'use client';

import type { CSSProperties } from 'react';
import { Icon, type IconName } from './Icons';
import { useTick } from './Scene';
import { useNumber } from '@/lib/use-translations';

// Numbered steps lit one after another like lamps: a spark leaves a lit step, runs along the gap,
// stops at the next step's edge and switches it on. All stay lit for a beat, then the chain restarts.
// `water` draws the gaps as pipes instead of data lines.
export default function Flow({ steps, icons, kind = 'signal' }: {
  steps: readonly (readonly [string, string])[]; icons: IconName[]; kind?: 'signal' | 'water';
}) {
  const n = useNumber();
  const k = useTick(1700) % (steps.length + 2); // step k is being reached; the last two ticks hold
  return (
    <ol className={`flow ${kind}`} style={{ '--n': steps.length } as CSSProperties}>
      {steps.map(([title, desc], i) => (
        <li key={title} className={i < k ? 'on' : i === k ? (k === 0 ? 'arrive first' : 'arrive') : ''}>
          <span className="flow-node"><Icon name={icons[i]} /></span>
          {i < steps.length - 1 && <span className={`flow-seg${i < k - 1 ? ' lit' : i === k - 1 ? ' go' : ''}`}><i /></span>}
          <span className="label">{n(0)}{n(i + 1)}</span>
          <b>{title}</b>
          <p>{desc}</p>
        </li>
      ))}
    </ol>
  );
}
