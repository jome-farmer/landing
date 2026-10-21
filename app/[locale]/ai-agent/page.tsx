'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import AskJome, { WorkSteps, type Step } from '@/components/Agent';
import { Arrow, Icon, type IconName } from '@/components/Icons';
import Ring from '@/components/Ring';
import Scene, { at, cover, rects, useTick, wave } from '@/components/Scene';
import { useNumber, useTranslations } from '@/lib/use-translations';

const capabilityIcons: IconName[] = ['leaf', 'drop', 'flask', 'sun', 'chart', 'grid', 'chat', 'shield'];

export default function AiAgentPage() {
  const { agent: t, home, chat } = useTranslations();
  const c = home.cards;
  const n = useNumber();
  const tick = useTick();
  // null = free chat, 0..2 = an example workflow
  const [ask, setAsk] = useState<{ flow: number | null } | null>(null);
  const open = (flow: number | null = null) => setAsk({ flow });
  const close = () => {
    setAsk(null);
    if (location.hash === '#ask') history.replaceState(null, '', location.pathname);
  };

  // /ai-agent/chat/ and #ask links land here with the chat open
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (location.hash === '#ask') setAsk({ flow: null });
  }, []);

  return (
    <>
      <Scene
        name="ai"
        tag={[t.label, home.kicker]}
        cards={[
          { icon: 'leaf', title: c.plantHealth, extra: <><b className="hs-big">{c.excellent}</b><i className="hs-meter" style={{ '--p': '92%' } as CSSProperties} /></> },
          { icon: 'drop', tint: 'water', title: c.soilMoisture, extra: <><b className="hs-big" dir="ltr">{n(Math.round(wave(tick, 68, 1.5)))}%</b><i className="hs-meter water" style={{ '--p': `${wave(tick, 68, 1.5)}%` } as CSSProperties} /></> },
          { icon: 'sun', tint: 'sun', title: c.weather, extra: <><b className="hs-big" dir="ltr">{n(24)}°C</b><small>{c.clearSky}</small></> },
          { icon: 'chart', title: c.waterUsage, extra: <><b className="hs-big" dir="ltr">−{n(32)}%</b><small>{c.vsLast}</small></> },
          { icon: 'flask', title: c.nutrients, extra: <><b className="hs-big">{c.optimal}</b><i className="hs-meter" style={{ '--p': '78%' } as CSSProperties} /></> },
          { icon: 'grid', title: c.irrigation, extra: <div className="hs-state"><span className="on">{c.active}</span></div> },
          { icon: 'chip', at: at(720, 540, 340), title: t.status.by.replace(/^—\s*/, ''), desc: t.status.quote },
        ]}
      >
        <div className="hs-head" style={cover(rects('ai').head!)}>
          <h1>{t.title} <em>{t.titleEm}</em></h1>
          <p>{t.subtitle}</p>
          <div className="actions">
            <button type="button" className="btn btn-green" onClick={() => open()}>{t.startConversation}</button>
            <button type="button" className="link" onClick={() => open(0)}>{t.seeDemo} <Arrow diagonal /></button>
          </div>
        </div>
      </Scene>

      <section className="section">
        <div className="wrap">
          <div className="head">
            <p className="label">{t.capabilities.label}</p>
            <h2>{t.capabilities.title} <em>{t.capabilities.titleEm}</em></h2>
            <p className="lead">{t.capabilities.subtitle}</p>
          </div>
          <div className="tiles">
            {t.capabilities.items.map(([title, desc], i) => (
              <div key={title} className="tile">
                <Icon name={capabilityIcons[i]} className="tile-ico" />
                <b>{title}</b>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Day t={t.day} labels={chat.phases} />

      <section className="section rule-top">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
          <div className="head center">
            <p className="label">{t.philosophy.label}</p>
            <h2>{t.philosophy.title}</h2>
            <p className="lead">{t.philosophy.subtitle}</p>
          </div>

          <div className="cells">
            <article className="cell span-8">
              <div className="cell-body">
                <p className="label">{t.doctor.label}</p>
                <h3 className="h3">{t.doctor.title}</h3>
                <p className="muted">{t.doctor.description}</p>
              </div>
              <div className="cell-foot panel-sunken" style={{ display: 'flex', alignItems: 'center', gap: 24, maxWidth: 560 }}>
                <Ring value={92} color="var(--sage)" />
                <div>
                  <p className="meta sage">{t.doctor.reasoning}</p>
                  <p style={{ marginTop: 6 }}>{t.doctor.finding}</p>
                </div>
              </div>
            </article>

            <article className="cell span-4">
              <div className="cell-body">
                <p className="label">{t.whatIf.label}</p>
                <h3 className="h3">{t.whatIf.title}</h3>
                <p className="muted">{t.whatIf.description}</p>
              </div>
              <div className="cell-foot panel-sunken" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="kv">
                  <span className="meta">{t.whatIf.delay}</span>
                  <span className="meta sage">{t.whatIf.delayValue}</span>
                </div>
                <div className="meter sage"><i style={{ width: '33%' }} /></div>
                <div className="kv" style={{ paddingTop: 12, borderTop: '1px solid var(--hairline)' }}>
                  <span className="meta">{t.whatIf.waterSaved}</span>
                  <span className="num-sm" style={{ color: 'var(--clay)' }}>{t.whatIf.waterValue}</span>
                </div>
              </div>
            </article>

            <article className="cell span-12" style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'start' }}>
              <div className="cell-body">
                <p className="label">{t.advice.label}</p>
                <h3 className="h3">{t.advice.title}</h3>
                <p className="muted">{t.advice.description}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 6 }}>
                  {t.advice.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="thread" style={{ gap: 16 }}>
                <div className="msg me">
                  <div className="avatar">{t.advice.you}</div>
                  <div className="bubble"><p>{t.advice.question}</p></div>
                </div>
                <div className="msg">
                  <div className="avatar">J</div>
                  <div className="bubble"><p>{t.advice.answer}</p></div>
                </div>
                <button type="button" className="composer" onClick={() => open()}>
                  <span style={{ flex: 1, textAlign: 'start' }}>{t.advice.placeholder}</span>
                  <span className="send"><Arrow /></span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section rule-top ask-cta">
        <div className="wrap">
          <p className="label">{t.ask.label}</p>
          <h2>{t.ask.title} <em>{t.ask.titleEm}</em></h2>
          <p className="lead">{t.ask.subtitle}</p>
          <button type="button" className="ask-big" onClick={() => open()}>
            <Icon name="chat" size={28} />{t.ask.button}<Arrow />
          </button>
          <div className="ask-chips">
            {chat.flows.map((f, i) => <button key={f} type="button" className="tag" onClick={() => open(i)}>{f}</button>)}
          </div>
        </div>
      </section>

      <AskJome open={!!ask} flow={ask?.flow ?? null} onClose={close} />
    </>
  );
}

// The agent at work, replayed: for each entry it thinks, reads two reports, plans, then sends its message.
const PER = 7; // ticks per entry: 4 work steps, the message, and 2 beats to read it
type DayT = ReturnType<typeof useTranslations>['agent']['day'];
function Day({ t, labels }: { t: DayT; labels: Record<'thinking' | 'reading' | 'planning', string> }) {
  const tick = useTick(900) % (t.items.length * PER + 4);
  return (
    <section className="section rule-top">
      <div className="wrap day">
        <div className="head">
          <p className="label">{t.label}</p>
          <h2>{t.title} <em>{t.titleEm}</em></h2>
          <p className="lead">{t.subtitle}</p>
        </div>
        <ol className="day-list">
          {t.items.map((it, i) => {
            const local = tick - i * PER;
            const steps: Step[] = [['thinking'], ['reading', it.reads[0]], ['reading', it.reads[1]], ['planning', it.plan]];
            const working = local >= 0 && local < steps.length;
            return (
              <li key={it.time} className={local < 0 ? '' : local < PER ? 'in now' : 'in'}>
                <span className="day-time" dir="ltr">{it.time}</span>
                <div className="day-card">
                  {working && <WorkSteps steps={steps} at={local} labels={labels} />}
                  {local >= steps.length && (
                    <>
                      <p className="day-did"><Icon name="check" size={14} />{it.reads.join(' · ')} <Arrow /> {it.plan}</p>
                      <div className="bubble"><b>{it.title}</b><p>{it.body}</p></div>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
