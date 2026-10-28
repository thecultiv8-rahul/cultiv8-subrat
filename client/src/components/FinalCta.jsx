import { SITE } from "../data/content.js";
import { WhatsAppIcon } from "./Icons.jsx";

const TRUST = [
  { value: "500+", label: "Members" },
  { value: "4.9★", label: "Google Rating" },
  { value: "7th Floor", label: "Sterling Towers, Baner" },
];

export default function FinalCta() {
  return (
    <section className="fcta2">
      <div className="container fcta2__inner">

        <div className="fcta2__trust">
          {TRUST.map((t) => (
            <div key={t.label} className="fcta2__stat">
              <span className="fcta2__stat-val">{t.value}</span>
              <span className="fcta2__stat-label">{t.label}</span>
            </div>
          ))}
        </div>

        <h2 className="fcta2__title">
          Ready to work from <span className="fcta2__accent">Cultiv8?</span>
        </h2>
        <p className="fcta2__sub">
          Explore the festive privilege, check seat availability or book a tour of Sterling Towers, Baner.
        </p>

        <div className="fcta2__btns">
          <a href="#enquire" data-step="offer" className="fcta2__btn fcta2__btn--primary">
            Request exclusive offer →
          </a>
          <a href="#enquire" data-step="tour" className="fcta2__btn fcta2__btn--outline">
            Book a workspace tour
          </a>
          <a href={SITE.whatsappHref} target="_blank" rel="noreferrer" className="fcta2__btn fcta2__btn--ghost">
            <WhatsAppIcon size={16} /> WhatsApp us
          </a>
        </div>

      </div>
    </section>
  );
}
