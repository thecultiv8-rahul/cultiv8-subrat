import { LOCATION_POINTS, OTHER_CENTRES, SITE, mapsDirectionsUrl, mapsEmbedUrl } from "../data/content.js";

const POINT_ICONS = {
  pin: (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M10 2a6 6 0 0 1 6 6c0 4-6 10-6 10S4 12 4 8a6 6 0 0 1 6-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <circle cx="10" cy="8" r="2" fill="currentColor"/>
    </svg>
  ),
  road: (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M10 2v16M6 4l4-2 4 2M6 16l4 2 4-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 6h4M13 6h4M3 14h4M13 14h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  metro: (
    <svg viewBox="0 0 20 20" fill="none">
      <rect x="3" y="4" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M7 17h6M10 14v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="7" cy="9" r="1.5" fill="currentColor"/>
      <circle cx="13" cy="9" r="1.5" fill="currentColor"/>
    </svg>
  ),
  building: (
    <svg viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M2 8h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M7 12h2M11 12h2M7 15h2M11 15h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
};

export default function Location() {
  return (
    <section className="loc2" id="location">
      <div className="container">

        <div className="loc2__head">
          <span className="loc2__pill">Location</span>
          <h2 className="loc2__title">A well-connected workspace <span className="loc2__br">in Baner, Pune.</span></h2>
        </div>

        <div className="loc2__layout">

          {/* LEFT — info */}
          <div className="loc2__info">
            <div className="loc2__address-block">
              <p className="loc2__address-name">Cultiv8 Sterling Towers</p>
              <address className="loc2__address">
                {SITE.addressLines.map((l) => <span key={l}>{l}</span>)}
              </address>
            </div>

            <ul className="loc2__points">
              {LOCATION_POINTS.map((p) => (
                <li key={p.strong} className="loc2__point">
                  <span className="loc2__point-icon">
                    {POINT_ICONS[p.icon] || POINT_ICONS.pin}
                  </span>
                  <span className="loc2__point-text">
                    <strong>{p.strong}</strong> — {p.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="loc2__ctas">
              <a href="#enquire" data-step="tour" className="loc2__btn loc2__btn--solid">
                Book a Workspace Tour
              </a>
              <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer" className="loc2__btn loc2__btn--outline">
                <svg viewBox="0 0 18 18" fill="none" width="16" height="16">
                  <path d="M9 2a5 5 0 0 1 5 5c0 3.5-5 9-5 9S4 10.5 4 7a5 5 0 0 1 5-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="1.8" fill="currentColor"/>
                </svg>
                Get Directions
              </a>
            </div>

            <p className="loc2__note">
              <strong>Other centres:</strong> {OTHER_CENTRES}
            </p>
          </div>

          {/* RIGHT — map */}
          <div className="loc2__map-wrap">
            <iframe
              title="Cultiv8 Sterling Towers on Google Maps"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="loc2__map-badge">
              <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                <path d="M8 1a4.5 4.5 0 0 1 4.5 4.5C12.5 9 8 15 8 15S3.5 9 3.5 5.5A4.5 4.5 0 0 1 8 1Z" fill="#CC6633"/>
                <circle cx="8" cy="5.5" r="1.5" fill="#fff"/>
              </svg>
              Cultiv8 Sterling Towers, Baner
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
