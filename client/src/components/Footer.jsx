import { SITE, mapsDirectionsUrl } from "../data/content.js";
import cultiv8Logo from "../photos/Cultiv8 Logo 2 with Tagline (1) 1.svg";

export default function Footer() {
  return (
    <footer className="ft2">
      <div className="container">

        <div className="ft2__grid">
          <div className="ft2__brand">
            <div className="ft2__logo"><img src={cultiv8Logo} alt="Cultiv8" height="56" /></div>
            <p className="ft2__tagline">Premium coworking spaces, private cabins, managed offices and meeting rooms at Sterling Towers, Pancard Club Road, Baner, Pune. Flexible workspace solutions for startups, freelancers and growing teams in Pune's western business corridor.</p>
            <div className="ft2__social">
              <a href={SITE.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
                      <stop offset="0%" stopColor="#fdf497"/>
                      <stop offset="5%" stopColor="#fdf497"/>
                      <stop offset="45%" stopColor="#fd5949"/>
                      <stop offset="60%" stopColor="#d6249f"/>
                      <stop offset="90%" stopColor="#285AEB"/>
                    </radialGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-grad)"/>
                  <circle cx="12" cy="12" r="4.5" fill="none" stroke="#fff" strokeWidth="1.6"/>
                  <circle cx="17.5" cy="6.5" r="1.1" fill="#fff"/>
                </svg>
              </a>
              <a href={SITE.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="5" fill="#1877F2"/>
                  <path d="M15.5 8H13V6.5C13 5.9 13.4 5.5 14 5.5h1.5V3h-2C11.6 3 10 4.6 10 6.5V8H8v2.5h2V21h3V10.5h2L15.5 8z" fill="#fff"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="ft2__col">
            <h4 className="ft2__col-head">Visit</h4>
            <p className="ft2__addr-name">Cultiv8 Sterling Towers</p>
            {SITE.addressLines.map((l) => (
              <p key={l} className="ft2__line">{l}</p>
            ))}
            <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer" className="ft2__link">
              Get directions →
            </a>
          </div>

          <div className="ft2__col">
            <h4 className="ft2__col-head">Contact</h4>
            <a href={SITE.phoneHref} className="ft2__link">{SITE.phone}</a>
            <a href={SITE.whatsappHref} target="_blank" rel="noreferrer" className="ft2__link">WhatsApp</a>
            <a href={`mailto:${SITE.email}`} className="ft2__link">{SITE.email}</a>
            <a href={SITE.website} target="_blank" rel="noreferrer" className="ft2__link">{SITE.websiteLabel}</a>
          </div>
        </div>

        <div className="ft2__bottom">
          <span>© {new Date().getFullYear()} Cultiv8. All rights reserved.</span>
          <span>Offer subject to eligibility and terms shared by the Cultiv8 team.</span>
        </div>
        <div className="ft2__made">Made with ❤️ by <a href="https://quebeta.in" target="_blank" rel="noreferrer" className="ft2__made-link">Quebeta</a></div>

      </div>
    </footer>
  );
}
