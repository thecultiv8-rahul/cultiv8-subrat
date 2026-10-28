import { WHY } from "../data/content.js";

const WA_HREF =
  "https://wa.me/919766777246?text=" +
  encodeURIComponent("Hi Cultiv8! I'd like to know about the exclusive festive offer at Sterling Towers, Baner.");

const STATS = [
  { value: "500+", label: "Members" },
  { value: "4.9★", label: "Google Rating" },
  { value: "3",    label: "Locations" },
];

const ICONS = [
  <svg viewBox="0 0 24 24" fill="none"><path d="M12 2a6 6 0 0 1 6 6c0 5.25-6 13-6 13S6 13.25 6 8a6 6 0 0 1 6-6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><circle cx="12" cy="8" r="2.2" fill="currentColor"/></svg>,
  <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 5 5.6.8-4 3.9.9 5.5L12 14.5l-4.9 2.7.9-5.5L4 7.8l5.6-.8L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>,
  <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="14" width="4.5" height="7" rx="1" stroke="currentColor" strokeWidth="1.8"/><rect x="9.8" y="9" width="4.5" height="12" rx="1" stroke="currentColor" strokeWidth="1.8"/><rect x="16.5" y="3" width="4.5" height="18" rx="1" stroke="currentColor" strokeWidth="1.8"/></svg>,
  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  <svg viewBox="0 0 24 24" fill="none"><path d="M13 2L5 14h7l-1 8 9-12h-7L13 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12"/></svg>,
  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4.5" stroke="currentColor" strokeWidth="1.8"/><path d="M4 21c0-4.5 3.6-7.5 8-7.5s8 3 8 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
];

export default function WhyCultiv8() {
  return (
    <section className="why4" id="why">
      <div className="container why4__inner">

        {/* LEFT */}
        <div className="why4__left">
          <span className="why4__pill">Why Cultiv8</span>
          <h2 className="why4__title">The smarter workspace choice in Pune.</h2>
          <p className="why4__sub">Built for professionals who value flexibility, a prime address, and a community that grows with them.</p>

          <div className="why4__stats">
            {STATS.map(s => (
              <div key={s.label} className="why4__stat">
                <span className="why4__stat-val">{s.value}</span>
                <span className="why4__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="why4__right">
          {WHY.map((w, i) => (
            <div key={w.title} className={`why4__item${w.highlight ? " why4__item--hl" : ""}`}>
              <span className="why4__item-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="why4__item-icon">{ICONS[i]}</span>
              <div className="why4__item-body">
                <h3 className="why4__item-title">{w.title}</h3>
                <p className="why4__item-text">{w.text}</p>
              </div>
              {w.highlight
                ? <a href={WA_HREF} target="_blank" rel="noreferrer" className="why4__item-btn">Unlock →</a>
                : <span className="why4__item-arrow">→</span>
              }
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
