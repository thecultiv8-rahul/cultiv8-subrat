import { useRef, useEffect, useState } from "react";
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
  const trackRef = useRef(null);
  const raf = useRef(null);
  const state = useRef({ dragging: false, startX: 0, offset: 0, baseOffset: 0, vel: 0, lastX: 0 });
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    let offset = 0;

    function tick() {
      const s = state.current;
      if (!s.dragging) {
        offset -= 0.8;
        const half = trackRef.current ? trackRef.current.scrollWidth / 2 : 0;
        if (Math.abs(offset) >= half) offset = 0;
        s.offset = offset;
      } else {
        offset = s.offset;
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${s.offset}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    }

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  function getX(e) { return e.touches ? e.touches[0].clientX : e.clientX; }

  function onDown(e) {
    const s = state.current;
    s.dragging = true;
    s.startX = getX(e);
    s.baseOffset = s.offset;
  }

  function onMove(e) {
    const s = state.current;
    if (!s.dragging) return;
    e.preventDefault();
    const dx = getX(e) - s.startX;
    s.offset = s.baseOffset + dx;
  }

  function onUp() {
    state.current.dragging = false;
  }

  useEffect(() => {
    const el = trackRef.current?.parentElement;
    if (!el) return;
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
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchEnd={onUp}
      >
        <div className="marquee2__track" ref={trackRef}>
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
