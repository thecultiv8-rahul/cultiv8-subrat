import { useRef, useEffect } from "react";
import frame1 from "../photos/Frame 1984081567.png";
import frame2 from "../photos/Frame 1984081568.png";
import frame3 from "../photos/Frame 1984081569.png";
import frame4 from "../photos/Frame 1984081570.png";
import frame5 from "../photos/Frame 1984081571.png";
import frame6 from "../photos/Frame 1984081572.png";
import frame7 from "../photos/Frame 1984081573.png";
import frame8 from "../photos/Frame 1984081574.png";
import frame9 from "../photos/Frame 1984081575.png";
import frame10 from "../photos/Frame 1984081576.png";
import frame11 from "../photos/Frame 1984081577.png";
import frame12 from "../photos/Frame 1984081578.png";
import logoBhupendra from "../photos/Bhupendra Goud Logo.jpg_620x245.png";
import logoLight from "../photos/Logo_light_620x245.png";
import logoMarq from "../photos/MARQ_Realtors_620x245.png";
import logoTlphr from "../photos/TLPHR_Logo.jpg_620x245.png";

const LOGOS = [
  frame1, frame2, frame3, frame4, frame5, frame6, frame7,
  frame8, frame9, frame10, frame11, frame12,
  logoBhupendra, logoLight, logoMarq, logoTlphr,
];

export default function ClientLogos() {
  const wrapRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const raf = useRef(null);
  const paused = useRef(false);
  const speed = 0.8;

  useEffect(() => {
    const el = wrapRef.current;

    function autoScroll() {
      if (!paused.current && el) {
        el.scrollLeft += speed;
        // loop — when we reach halfway (one set of logos), reset to start
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      raf.current = requestAnimationFrame(autoScroll);
    }

    raf.current = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  function onDown(e) {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    drag.current = { active: true, startX: x, scrollLeft: wrapRef.current.scrollLeft };
    paused.current = true;
  }

  function onMove(e) {
    if (!drag.current.active) return;
    e.preventDefault();
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    wrapRef.current.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX);
  }

  function onUp() {
    drag.current.active = false;
    paused.current = false;
  }

  useEffect(() => {
    const el = wrapRef.current;
    el.addEventListener("touchmove", onMove, { passive: false });
    return () => el.removeEventListener("touchmove", onMove);
  }, []);

  const track = [...LOGOS, ...LOGOS];

  return (
    <section className="clients2">
      <div className="container clients2__header">
        <span className="clients2__pill">Our Clients</span>
        <p className="clients2__label">Trusted by innovative teams &amp; companies</p>
      </div>

      <div
        className="marquee2-wrap"
        ref={wrapRef}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchEnd={onUp}
      >
        <div className="marquee2__track">
          {track.map((src, i) => (
            <div className="marquee2__item" key={i}>
              <img src={src} alt={`Client logo ${(i % LOGOS.length) + 1}`} loading="lazy" draggable={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
