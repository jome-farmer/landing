'use client';

import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from 'react';
import { Arrow, Icon } from './Icons';
import { useNumber, useTranslations } from '@/lib/use-translations';

type Chat = ReturnType<typeof useTranslations>['chat'];
export type Phase = 'thinking' | 'reading' | 'planning';
export type Step = [Phase, string?];

// The agent's visible work: each step spins while active and gets a check when done.
export function WorkSteps({ steps, at, labels }: { steps: Step[]; at: number; labels: Record<Phase, string> }) {
  return (
    <ul className="work" aria-live="polite">
      {steps.map(([phase, text], i) => i <= at && (
        <li key={i} className={i < at ? 'done' : 'now'}>
          {i < at ? <Icon name="check" size={14} /> : <span className="spin" />}
          <b>{labels[phase]}</b>{text && <span>{text}</span>}
        </li>
      ))}
    </ul>
  );
}

type Ev =
  | { who: 'me'; text: string; img?: boolean }
  | { who: 'jo'; kind: 'text'; text: string; actions?: readonly string[] }
  | { who: 'jo'; kind: 'alert'; text: string }
  | { who: 'jo'; kind: 'work'; steps: Step[] }
  | { who: 'jo'; kind: 'diagnosis' | 'sim' | 'npk' };
// a message is a played event; work messages also track which step is running
type Msg = Ev & { id: number; at?: number };

// Keyword topics for the free-chat demo, checked in order (Persian and English).
const TOPICS: [keyof Chat['kb'], RegExp][] = [
  ['health', /leaf|disease|pest|fung|spot|yellow|sick|برگ|بیماری|آفت|لکه|قارچ|زرد/i],
  ['weather', /rain|weather|frost|forecast|storm|باران|هوا|یخ|بارش|طوفان/i],
  ['ph', /\bph\b|acid|اسید/i],
  ['harvest', /harvest|brix|ripe|pick|برداشت|بریکس|رسیده/i],
  ['nutrients', /nitrogen|phosph|potass|fertil|nutri|dose|\bec\b|npk|کود|نیتروژن|فسفر|پتاسیم|تغذیه|دوز/i],
  ['water', /water|irrigat|moist|dry|drip|thirst|آب|رطوبت|خشک|قطره/i],
];

const flows = (t: Chat): Ev[][] => [
  [
    { who: 'me', text: t.leaf.ask, img: true },
    { who: 'jo', kind: 'work', steps: [['thinking'], ...t.leaf.work.map((w) => ['reading', w] as Step)] },
    { who: 'jo', kind: 'diagnosis' },
    { who: 'jo', kind: 'work', steps: [...t.leaf.plan.map((w) => ['reading', w] as Step), ['planning']] },
    { who: 'jo', kind: 'text', text: t.leaf.protocol, actions: t.leaf.actions },
  ],
  [
    { who: 'me', text: t.water.ask },
    { who: 'jo', kind: 'work', steps: [['thinking'], ...t.water.work.map((w) => ['reading', w] as Step), ['planning']] },
    { who: 'jo', kind: 'sim' },
  ],
  [
    { who: 'jo', kind: 'alert', text: t.nutrient.alert },
    { who: 'me', text: t.nutrient.ask },
    { who: 'jo', kind: 'work', steps: [['thinking'], ...t.nutrient.work.map((w) => ['reading', w] as Step), ...t.nutrient.plan.map((w) => ['planning', w] as Step)] },
    { who: 'jo', kind: 'text', text: t.nutrient.reply },
    { who: 'jo', kind: 'npk' },
  ],
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// "Ask JoME": a full-screen overlay with example workflows and a scripted demo chat.
// ponytail: answers come from keyword topics, not a model; wire to the real agent API when it exists.
export default function AskJome({ open, flow, onClose }: { open: boolean; flow: number | null; onClose: () => void }) {
  const t = useTranslations().chat;
  const dialog = useRef<HTMLDialogElement>(null);
  const thread = useRef<HTMLDivElement>(null);
  const run = useRef(0);
  const nextId = useRef(0);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [busy, setBusy] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  const push = (m: Ev) => {
    const id = nextId.current++;
    setMsgs((all) => [...all, { ...m, id, at: 0 }]);
    return id;
  };

  async function play(script: Ev[], fresh: boolean) {
    const me = ++run.current;
    if (fresh) setMsgs([{ id: nextId.current++, who: 'jo', kind: 'text', text: t.hello }]);
    setBusy(true);
    for (const ev of script) {
      await sleep(ev.who === 'me' ? 350 : 650);
      if (run.current !== me) return;
      const id = push(ev);
      if (ev.who === 'jo' && ev.kind === 'work') {
        for (let at = 1; at <= ev.steps.length; at++) {
          await sleep(850);
          if (run.current !== me) return;
          setMsgs((all) => all.map((m) => (m.id === id ? { ...m, at } : m)));
        }
      }
    }
    setBusy(false);
  }

  const start = (i: number | null) => {
    setActive(i);
    if (i === null) { run.current++; setBusy(false); setMsgs([{ id: nextId.current++, who: 'jo', kind: 'text', text: t.hello }]); }
    else play(flows(t)[i], true);
  };

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) { d.showModal(); start(flow); }
    if (!open && d.open) { d.close(); run.current++; }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, flow]);

  useEffect(() => { thread.current?.scrollTo({ top: thread.current.scrollHeight, behavior: 'smooth' }); }, [msgs]);

  const ask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem('q') as HTMLInputElement;
    const q = input.value.trim();
    if (!q || busy) return;
    input.value = '';
    const topic = TOPICS.find(([, re]) => re.test(q))?.[0] ?? 'other';
    const kb = t.kb[topic];
    play([
      { who: 'me', text: q },
      { who: 'jo', kind: 'work', steps: [['thinking'], ...kb.reads.map((r) => ['reading', r] as Step), ['planning']] },
      { who: 'jo', kind: 'text', text: kb.reply },
    ], false);
  };

  return (
    <dialog ref={dialog} className="ask" onClose={onClose} onClick={(e) => e.target === dialog.current && onClose()} aria-labelledby="ask-title">
      <div className="ask-in">
        <header className="ask-top">
          <span className="ask-avatar"><Icon name="chat" size={20} /></span>
          <div>
            <h2 id="ask-title">{t.title}</h2>
            <span className="live"><span className="dot" />{t.status}</span>
          </div>
          <p className="ask-demo">{t.demo}</p>
          <button type="button" className="ask-close" onClick={onClose} aria-label={t.close}>
            <Icon name="close" size={18} /><span>{t.close}</span><kbd>Esc</kbd>
          </button>
        </header>

        <nav className="ask-flows" aria-label={t.examples}>
          <span className="label">{t.examples}</span>
          {t.flows.map((f, i) => (
            <button key={f} type="button" className={active === i ? 'on' : ''} onClick={() => start(i)}>
              <Icon name={(['leaf', 'drop', 'flask'] as const)[i]} size={18} />{f}
            </button>
          ))}
        </nav>

        <div className="ask-thread" ref={thread}>
          {msgs.map((m) => <Message key={m.id} m={m} t={t} />)}
        </div>

        <form className="ask-form" onSubmit={ask}>
          <input name="q" placeholder={t.placeholder} autoComplete="off" aria-label={t.placeholder} />
          <button type="submit" className="btn btn-green btn-sm" disabled={busy}>{t.send} <Arrow /></button>
        </form>
      </div>
    </dialog>
  );
}

function Message({ m, t }: { m: Msg; t: Chat }) {
  if (m.who === 'me') {
    return (
      <div className="msg me">
        <div className="avatar"><img src="/images/chat/avatar.jpg" alt="" /></div>
        <div className="bubble"><p>{m.text}</p>{m.img && <img className="ask-photo" src="/images/chat/leaf-scan.jpg" alt={t.leaf.alt} />}</div>
      </div>
    );
  }
  const body = (() => {
    switch (m.kind) {
      case 'work': return <WorkSteps steps={m.steps} at={m.at ?? 0} labels={t.phases} />;
      case 'alert': return <div className="bubble alert"><p>{m.text}</p></div>;
      case 'text': return <div className="bubble"><p>{m.text}</p>{m.actions && <Actions items={m.actions} done={t.done} />}</div>;
      case 'diagnosis': return <Diagnosis t={t} />;
      case 'sim': return <Simulation t={t} />;
      case 'npk': return <Blend t={t} />;
    }
  })();
  return <div className="msg"><div className="avatar">J</div>{body}</div>;
}

function Actions({ items, done }: { items: readonly string[]; done: string }) {
  const [on, setOn] = useState<number[]>([]);
  return (
    <div className="ask-actions">
      {items.map((a, i) => (
        <button key={a} type="button" className={`btn btn-sm ${on.includes(i) ? 'btn-green' : 'btn-ghost'}`} onClick={() => setOn((x) => [...x, i])}>
          {on.includes(i) && <Icon name="check" size={14} />}{on.includes(i) ? `${a} · ${done}` : a}
        </button>
      ))}
    </div>
  );
}

function Diagnosis({ t }: { t: Chat }) {
  const n = useNumber();
  return (
    <div className="bubble diag">
      <div className="diag-scan">
        <img src="/images/chat/leaf-scan.jpg" alt="" />
        <i className="sweep" />
        <b style={{ left: '46%', top: '30%', width: '20%', height: '24%' }} />
        <b style={{ left: '22%', top: '58%', width: '16%', height: '20%', animationDelay: '.5s' }} />
        <b style={{ left: '64%', top: '62%', width: '14%', height: '16%', animationDelay: '.9s' }} />
      </div>
      <div className="diag-body">
        <span className="label">{t.leaf.label}</span>
        <span className="tag alert">{t.leaf.badge}</span>
        <h3>{t.leaf.title}</h3>
        <div className="kv"><span className="meta">{t.leaf.confidence}</span><span className="num-sm" dir="ltr">{n(89)}%</span></div>
        <i className="diag-meter" style={{ '--p': '89%' } as CSSProperties} />
      </div>
    </div>
  );
}

function Simulation({ t }: { t: Chat }) {
  const n = useNumber();
  const [hours, setHours] = useState(24);
  const [applied, setApplied] = useState(false);
  // ponytail: linear stand-in (24h → −12%), swap for the real simulator API when it exists
  const risk = Math.round(hours / 2);
  return (
    <div className="bubble sim">
      <span className="label">{t.water.label}</span>
      <p className="muted">{t.water.heading}</p>
      <p><span className="num-md">{n(hours)}</span> <span className="muted">{t.water.unit}</span></p>
      <input className="range" type="range" min={0} max={72} value={hours} onChange={(e) => { setHours(Number(e.target.value)); setApplied(false); }} aria-label={t.water.heading} />
      <div className="sim-impact">
        <span className="meta alert">{t.water.impactLabel}</span>
        <b><bdi dir="ltr">−{n(risk)}%</bdi> {t.water.impact}</b>
        <p className="muted">{t.water.impactBody}</p>
      </div>
      <button type="button" className={`btn btn-sm ${applied ? 'btn-green' : 'btn-ghost'}`} onClick={() => setApplied(true)}>
        {applied && <Icon name="check" size={14} />}{applied ? `${t.water.apply} · ${t.done}` : t.water.apply}
      </button>
    </div>
  );
}

function Blend({ t }: { t: Chat }) {
  const n = useNumber();
  const [ok, setOk] = useState(false);
  const rows: [string, number, number][] = [['N', 60, 60], ['P', 46, 80], ['K', 70, 70]];
  return (
    <div className="bubble blend">
      <div className="blend-head"><span className="meta">{t.nutrient.now}</span><span className="meta sage">{t.nutrient.next}</span></div>
      {rows.map(([k, a, b]) => (
        <div key={k} className="blend-row" dir="ltr">
          <em>{k}</em>
          <i style={{ '--p': `${a}%` } as CSSProperties} />
          <i className="next" style={{ '--p': `${b}%` } as CSSProperties} />
          <small>{n(a)} <Arrow /> {n(b)}</small>
        </div>
      ))}
      <button type="button" className={`btn btn-sm ${ok ? 'btn-green' : 'btn-ghost'}`} onClick={() => setOk(true)}>
        {ok && <Icon name="check" size={14} />}{ok ? `${t.nutrient.approve} · ${t.done}` : t.nutrient.approve}
      </button>
    </div>
  );
}
