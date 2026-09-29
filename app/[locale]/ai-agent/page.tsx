'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from '@/lib/use-translations';
import Ring from '@/components/Ring';

export default function AiAgentPage() {
  const { agent: t, common } = useTranslations();
  const chatHref = `/${useLocale()}/ai-agent/chat/`;

  return (
    <>
      <header className="hero">
        <div className="wrap hero-split">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <p className="label">{t.label}</p>
            <h1>
              {t.title} <em>{t.titleEm}</em>
            </h1>
            <p className="lead" style={{ maxWidth: 560 }}>{t.subtitle}</p>
            <div className="actions">
              <Link href={chatHref} className="btn btn-solid">{t.startConversation}</Link>
              <Link href={chatHref} className="link">
                {t.seeDemo} <span className="arrow">↗</span>
              </Link>
            </div>
          </div>

          <aside className="panel" aria-label={t.status.label}>
            <div className="panel-head">
              <div>
                <p className="label">{t.status.label}</p>
                <p className="status" style={{ marginTop: 6 }}>
                  <span className="dot" />
                  {t.status.value}
                </p>
              </div>
            </div>
            <div className="kv" style={{ marginBottom: 14 }}>
              <span className="muted">{t.status.metric}</span>
              <span className="num-md" dir="ltr" style={{ color: 'var(--sage)' }}>82%</span>
            </div>
            <div className="meter sage"><i style={{ width: '82%' }} /></div>
            <p className="serif" style={{ fontSize: 22, lineHeight: '30px', marginTop: 28 }}>{t.status.quote}</p>
            <p className="label" style={{ marginTop: 12 }}>{t.status.by}</p>
          </aside>
        </div>
      </header>

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
                <Link href={chatHref} className="composer">
                  <span style={{ flex: 1 }}>{t.advice.placeholder}</span>
                  <span className="send"><span className="arrow">→</span></span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <p className="label">{common.begin}</p>
          <h2>{t.cta.title}</h2>
          <p className="lead" style={{ maxWidth: 560, margin: '-16px auto 40px' }}>{t.cta.subtitle}</p>
          <div className="actions">
            <Link href={chatHref} className="btn btn-solid">{t.startConversation}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
