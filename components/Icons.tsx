const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const paths = {
  leaf: <><path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" /><path d="M5 19c3-5 6-8 10-10" /></>,
  drop: <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.500 1.500M17.500 17.500 19 19M19 5l-1.500 1.500M6.500 17.500 5 19" /></>,
  wifi: <><path d="M2 9a15 15 0 0 1 20 0M5 12.500a10 10 0 0 1 14 0M8.500 16a5 5 0 0 1 7 0" /><circle cx="12" cy="19.500" r=".8" /></>,
  chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="10" y="10" width="4" height="4" /><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" /></>,
  flask: <><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /><path d="M7.500 15h9" /></>,
  chart: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />,
  roots: <><path d="M12 3v8M12 11c-3 0-5 2-5 5M12 11c3 0 5 2 5 5M12 11v10M7 16v4M17 16v4" /></>,
  grid: <><circle cx="6" cy="6" r="1" /><circle cx="12" cy="6" r="1" /><circle cx="18" cy="6" r="1" /><circle cx="6" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="18" cy="12" r="1" /><circle cx="6" cy="18" r="1" /><circle cx="12" cy="18" r="1" /><circle cx="18" cy="18" r="1" /></>,
  shield: <><path d="M12 3 4 6v6c0 4.500 3.500 8 8 9 4.500-1 8-4.500 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  chat: <><path d="M4 5h16v11H10l-6 4V5Z" /><path d="M8 10h8M8 13h5" /></>,
  check: <path d="m5 12 5 5 9-10" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17v.5" /></>,
};
export type IconName = keyof typeof paths;

export function Icon({ name, size = 24, className }: { name: IconName; size?: number; className?: string }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true" {...P}>{paths[name]}</svg>;
}

export function Spark({ points, className = '' }: { points: number[]; className?: string }) {
  const max = Math.max(...points), min = Math.min(...points);
  const d = points.map((v, i) => `${(i / (points.length - 1)) * 100},${28 - ((v - min) / (max - min || 1)) * 24}`).join(' ');
  return (
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className={`spark ${className}`} aria-hidden="true">
      <polyline points={d} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

// Bold arrow used in links and buttons; sized to the text, mirrored in RTL by the .arrow styles.
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="arrow" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      {diagonal ? <path d="M7 17 17 7M8 7h9v9" /> : <path d="M4 12h15M13 6l6 6-6 6" />}
    </svg>
  );
}
