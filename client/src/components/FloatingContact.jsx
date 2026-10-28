import { useEffect, useState } from "react";
import { SITE } from "../data/content.js";
import { Icon, WhatsAppIcon } from "./Icons.jsx";

/** Desktop: floating WhatsApp button. Mobile: sticky Call / WhatsApp / Offer bar. */
export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className={`wa-float ${visible ? "is-visible" : ""}`}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>

      <div className={`mobile-bar ${visible ? "is-visible" : ""}`}>
        <a href={SITE.phoneHref} aria-label="Call">
          <Icon name="phone" size={20} />
          <span>Call</span>
        </a>
        <a href={SITE.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <WhatsAppIcon size={20} />
          <span>WhatsApp</span>
        </a>
        <a href="#enquire" data-step="offer" className="mobile-bar__cta">
          Unlock the festive offer
        </a>
      </div>
    </>
  );
}
