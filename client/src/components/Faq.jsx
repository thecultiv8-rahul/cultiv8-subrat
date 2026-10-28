import { useState } from "react";
import { FAQS, SITE } from "../data/content.js";
import { WhatsAppIcon } from "./Icons.jsx";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq2" id="faqs">
      <div className="container faq2__inner">

        <div className="faq2__left">
          <span className="faq2__pill">FAQs</span>
          <h2 className="faq2__title">Questions, answered.</h2>
          <p className="faq2__sub">Something else on your mind? Our team is happy to help — call, WhatsApp or drop us a message and we'll get back to you quickly.</p>
          <a href={SITE.phoneHref} className="faq2__phone">{SITE.phone}</a>
          <a href={SITE.whatsappHref} target="_blank" rel="noreferrer" className="faq2__wa">
            <WhatsAppIcon size={16} />
            WhatsApp us
          </a>
        </div>

        <div className="faq2__list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq2__item${isOpen ? " is-open" : ""}`} key={f.q}>
                <button
                  className="faq2__q"
                  aria-expanded={isOpen}
                  aria-controls={`faq2-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <span className="faq2__toggle" aria-hidden>
                    {isOpen ? (
                      <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    ) : (
                      <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    )}
                  </span>
                </button>
                <div className="faq2__a" id={`faq2-${i}`} role="region" hidden={!isOpen}>
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
