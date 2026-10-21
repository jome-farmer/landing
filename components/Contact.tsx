'use client';

import type { FormEvent } from 'react';
import { usePathname } from 'next/navigation';
import { Arrow } from './Icons';
import { useTranslations } from '@/lib/use-translations';

// TODO: confirm the real inbox before launch.
export const EMAIL = 'info@jome-farmer.ir';

// ponytail: static export has no backend, so the form hands off to the visitor's mail app; swap for a form endpoint when one exists.
export default function Contact() {
  const { contact: t } = useTranslations();
  // preselect the product of the tab we're on
  const path = usePathname() ?? '';
  const interest = ['/hardware', '/ai-agent', '/nutrients'].findIndex((p) => path.includes(p)) + 1;

  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      [t.name, f.get('name')], [t.reach, f.get('reach')], [t.size, f.get('size')], [t.interest, f.get('interest')], ['', f.get('message')],
    ].map(([k, v]) => (k ? `${k}: ${v}` : `\n${v}`)).join('\n');
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section rule-top" id="contact">
      <div className="wrap contact">
        <div className="head">
          <p className="label">{t.label}</p>
          <h2>{t.title} <em>{t.titleEm}</em></h2>
          <p className="lead">{t.subtitle}</p>
          <div className="contact-direct">
            <a href={`mailto:${EMAIL}`} className="link">{t.email}: <span dir="ltr">{EMAIL}</span></a>
            <span className="live"><span className="dot" />{t.reply}</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={send}>
          <label className="fld">{t.name}<input name="name" required autoComplete="name" /></label>
          <label className="fld">{t.reach}<input name="reach" required autoComplete="email" /></label>
          <label className="fld">{t.size}<input name="size" type="number" min="0" step="any" inputMode="decimal" /></label>
          <label className="fld">{t.interest}
            <select key={interest} name="interest" defaultValue={t.interests[interest]}>
              {t.interests.map((x) => <option key={x}>{x}</option>)}
            </select>
          </label>
          <label className="fld full">{t.message}<textarea name="message" rows={4} placeholder={t.placeholder} /></label>
          <div className="full contact-send">
            <button type="submit" className="btn btn-green">{t.send} <Arrow /></button>
            <small>{t.note}</small>
          </div>
        </form>
      </div>
    </section>
  );
}
