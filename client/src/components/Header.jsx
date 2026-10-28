import { useEffect, useState } from "react";
import { NAV, SITE } from "../data/content.js";
import { Icon } from "./Icons.jsx";
import Logo from "./Logo.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <span className="topbar__addr">
            <span className="dot" /> {SITE.addressShort}
          </span>
          <span className="topbar__contact">
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </span>
        </div>
      </div>

      <div className="navbar">
        <div className="container navbar__inner">
          <a href="#top" className="navbar__logo" aria-label="Cultiv8 home">
            <Logo />
          </a>

          <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={close}>
                {n.label}
              </a>
            ))}
            <a href="#enquire" className="btn btn--primary nav__mobile-cta" onClick={close}>
              Unlock the festive offer
            </a>
          </nav>

          <div className="navbar__actions">
            <a href={SITE.phoneHref} className="btn btn--outline btn--sm">
              <Icon name="phone" size={16} /> Call
            </a>
            <a href="#enquire" className="btn btn--primary btn--sm">
              Unlock the festive offer
            </a>
          </div>

          <button
            className="navbar__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
