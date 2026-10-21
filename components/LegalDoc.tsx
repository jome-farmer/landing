import { EMAIL } from '@/lib/site';
import type { DocSection } from '@/lib/pages';

// A plain-language legal page: title, date, intro, numbered sections and a contact line.
export default function LegalDoc({ t }: {
  t: { label: string; title: string; updated: string; intro: string; sections: readonly DocSection[]; contact: string };
}) {
  return (
    <article className="section doc">
      <div className="wrap">
        <header className="head">
          <p className="label">{t.label}</p>
          <h1>{t.title}</h1>
          <p className="doc-date">{t.updated}</p>
          <p className="lead">{t.intro}</p>
        </header>
        <ol className="doc-body">
          {t.sections.map((s) => (
            <li key={s.title}>
              <h2>{s.title}</h2>
              {s.body.map((p) => <p key={p}>{p}</p>)}
            </li>
          ))}
        </ol>
        <p className="doc-contact">{t.contact} <a href={`mailto:${EMAIL}`} className="link" dir="ltr">{EMAIL}</a></p>
      </div>
    </article>
  );
}
