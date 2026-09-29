'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from '@/lib/use-translations';

function UserAvatar() {
  return (
    <div className="avatar">
      <img src="/images/chat/avatar.jpg" alt="" />
    </div>
  );
}

export default function ChatPage() {
  const t = useTranslations().chat;
  const locale = useLocale();
  const [hours, setHours] = useState(24);
  // ponytail: linear stand-in (24h → −12%), swap for the real simulator API when it exists
  const risk = Math.round(hours / 2);

  return (
    <div className="wrap" style={{ maxWidth: 1072 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, padding: '64px 0 32px', borderBottom: '1px solid var(--hairline)' }}>
        <div>
          <Link href={`/${locale}/ai-agent/`} className="label" style={{ display: 'inline-block', marginBottom: 16 }}>
            <span className="arrow">←</span> {t.back}
          </Link>
          <h1 className="serif" style={{ fontSize: 'clamp(44px, 5vw, 64px)', lineHeight: 1.1, letterSpacing: '-.02em' }}>
            {t.title} <em style={{ color: 'var(--sage)' }}>{t.titleEm}</em>
          </h1>
        </div>
        <p className="status muted" style={{ fontSize: 14 }}>
          <span className="dot" />
          {t.status}
        </p>
      </div>

      <div className="thread" style={{ padding: '40px 0 16px' }}>
        <div className="msg">
          <div className="avatar">!</div>
          <div className="bubble alert">
            <p className="meta alert">{t.alert.meta}</p>
            <p style={{ fontWeight: 500 }}>{t.alert.title}</p>
            <p className="muted" style={{ fontSize: 14 }}>{t.alert.body}</p>
            <div className="actions" style={{ gap: 12, marginTop: 8 }}>
              <button className="btn btn-ghost btn-sm">{t.alert.viewMap}</button>
              <button className="btn btn-sm muted">{t.alert.acknowledge}</button>
            </div>
          </div>
        </div>

        <div className="msg">
          <div className="avatar">J</div>
          <div className="bubble insight">
            <p className="meta sage">{t.insight.meta}</p>
            <p style={{ fontWeight: 500 }}>{t.insight.title}</p>
            <p className="muted" style={{ fontSize: 14 }}>{t.insight.body}</p>
          </div>
        </div>

        <div className="msg me">
          <UserAvatar />
          <div className="bubble">
            <p>{t.userScan}</p>
            <img src="/images/chat/leaf-scan.jpg" alt={t.scanAlt} style={{ width: 220, aspectRatio: '3 / 2', objectFit: 'cover', border: '1px solid var(--hairline)' }} />
          </div>
        </div>

        <div className="msg">
          <div className="avatar">J</div>
          <div className="bubble" style={{ padding: 24 }}>
            <p className="meta">{t.diagnosis.label}</p>
            <div style={{ display: 'grid', gap: 28, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', marginTop: 12 }}>
              <div className="scan">
                <img src="/images/chat/leaf-scan.jpg" alt="" />
                <i /><i /><i /><i />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <span className="tag alert" style={{ alignSelf: 'flex-start' }}>{t.diagnosis.badge}</span>
                  <h2 className="h3">{t.diagnosis.title}</h2>
                  <div className="kv">
                    <span className="meta">{t.diagnosis.confidence}</span>
                    <span className="num-sm" dir="ltr" style={{ color: 'var(--sage)' }}>89%</span>
                  </div>
                  <div className="meter sage"><i style={{ width: '89%' }} /></div>
                </div>
                <div className="panel-sunken">
                  <p className="meta sky">{t.diagnosis.protocol}</p>
                  <p style={{ marginTop: 8, fontSize: 14 }}>{t.diagnosis.protocolBody}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="msg">
          <div className="avatar">J</div>
          <div className="bubble"><p>{t.morning}</p></div>
        </div>

        <div className="msg me">
          <UserAvatar />
          <div className="bubble"><p>{t.userSimulation}</p></div>
        </div>

        <div className="msg">
          <div className="avatar">J</div>
          <div className="bubble" style={{ padding: 28, gap: 24 }}>
            <p className="meta">{t.simulation.label}</p>
            <div style={{ textAlign: 'center' }}>
              <p className="muted">{t.simulation.heading}</p>
              <p style={{ marginTop: 6 }}>
                <span className="num">{hours}</span>{' '}
                <span className="serif" style={{ fontSize: 28, color: 'var(--text-2)', marginInlineStart: 6 }}>{t.simulation.unit}</span>
              </p>
            </div>
            <div>
              <input
                className="range"
                type="range"
                min={0}
                max={72}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                aria-label={t.simulation.heading}
              />
              <div className="kv" style={{ marginTop: 12 }}>
                <span className="meta">{t.simulation.min}</span>
                <span className="meta">{t.simulation.max}</span>
              </div>
            </div>
            <div className="panel-sunken" style={{ textAlign: 'center', borderColor: 'color-mix(in srgb, var(--alert) 35%, transparent)' }}>
              <p className="meta alert">{t.simulation.impactLabel}</p>
              <p className="num-md" style={{ color: 'var(--alert)', margin: '10px 0' }}>
                <bdi dir="ltr">−{risk}%</bdi> {t.simulation.impact}
              </p>
              <p className="muted" style={{ fontSize: 14 }}>{t.simulation.impactBody}</p>
            </div>
            <div className="actions" style={{ justifyContent: 'flex-end', gap: 12 }}>
              <button className="btn btn-ghost btn-sm" onClick={() => setHours(24)}>{t.simulation.cancel}</button>
              <button className="btn btn-solid btn-sm">{t.simulation.apply}</button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'sticky', bottom: 0, background: 'linear-gradient(180deg, transparent, var(--canvas) 30%)', padding: '32px 0 24px' }}>
        <label className="composer">
          <input placeholder={t.placeholder} />
          <span className="send">↑</span>
        </label>
      </div>
    </div>
  );
}
