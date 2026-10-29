import { useState, useEffect } from "react";
import { WhatsAppIcon } from "./Icons.jsx";
import heroBg from "../photos/hero.png";
import heroLogo from "../photos/1 (2) 3 (2).svg";
import heroLogoMobile from "../photos/Cultiv8 Logo 2 with Tagline (1) 1 (1).svg";

const TYPED_TEXT = "Co-working Space";

function useTyping(text, speed = 80, pause = 1500) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    let erasing = false;
    let timeout;
    function tick() {
      if (!erasing) {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          erasing = true;
          timeout = setTimeout(tick, pause);
        } else {
          timeout = setTimeout(tick, speed);
        }
      } else {
        i--;
        setDisplayed(text.slice(0, i));
        if (i <= 0) {
          erasing = false;
          timeout = setTimeout(tick, speed);
        } else {
          timeout = setTimeout(tick, speed / 2);
        }
      }
    }
    timeout = setTimeout(tick, speed);
    return () => clearTimeout(timeout);
  }, [text, speed, pause]);
  return displayed;
}

const WA_HREF =
  "https://wa.me/919766777246?text=" +
  encodeURIComponent("Hi Cultiv8, I'd like to unlock the festive offer at Sterling Towers, Baner.");

export default function Hero() {
  const typed = useTyping(TYPED_TEXT, 80, 3500);

  return (
    <>
    <div className="offer-bar">
      <div className="offer-bar__track">
        {[0,1].map(n => (
          <div className="offer-bar__reel" aria-hidden={n === 1} key={n}>
            {Array(10).fill("🔥 Limited Time Offer").map((item, i) => (
              <span className="offer-bar__item" key={i}>{item}<span className="offer-bar__sep" aria-hidden>·</span></span>
            ))}
          </div>
        ))}
      </div>
    </div>
    <section className="hero2" id="top">
      <div
        className="hero2__bg"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      <div className="hero2__overlay" aria-hidden />

      <div className="hero2__logo-top">
        <img src={heroLogoMobile} alt="Cultiv8 — Elevate Your Success" />
      </div>

      <div className="hero2__content">
        <div className="hero2__logo">
          <img src={heroLogo} alt="Cultiv8 — Elevate Your Success" />
        </div>

        <h1 className="hero2__headline">
          Premium<br />
          <span className="hero2__typed">{typed}</span>
        </h1>

        <div className="hero2__badge">Baner, Pune</div>

        <p className="hero2__price">Starting From INR 6999*</p>

        <div className="hero2__ctas">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noreferrer"
            className="hero2__btn hero2__btn--outline"
          >
            <WhatsAppIcon size={18} />
            Unlock the Festive Offer
          </a>
          <a href="#enquire" className="hero2__btn hero2__btn--solid">
            Enquire Now
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
