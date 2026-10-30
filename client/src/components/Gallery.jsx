import img80 from "../photos/Frame 1984081580.png";
import img81 from "../photos/Frame 1984081581.png";
import img82 from "../photos/Frame 1984081582.png";
import img83 from "../photos/Frame 1984081583.png";
import img84 from "../photos/Frame 1984081584.png";
import img85 from "../photos/Frame 1984081585.png";
import img86 from "../photos/Frame 1984081586.png";
import img87 from "../photos/Frame 1984081587.png";
import img88 from "../photos/Frame 1984081588.png";
import img89 from "../photos/Frame 1984081589.png";
import img90 from "../photos/Frame 1984081590.png";
import img91 from "../photos/Frame 1984081591.png";
import img92 from "../photos/Frame 1984081592.png";
import img93 from "../photos/Frame 1984081593.png";
import img94 from "../photos/Frame 1984081594.png";
import img95 from "../photos/Frame 1984081595.png";
import img96 from "../photos/Frame 1984081596.png";
import img97 from "../photos/Frame 1984081597.png";
import img98 from "../photos/Frame 1984081598.png";
import img99 from "../photos/Frame 1984081599.png";
import imgNew1 from "../photos/IMG_7324_645x430.jpg";
import imgNew2 from "../photos/IMG_7368 (1)_645x430.jpg";
import imgNew3 from "../photos/WhatsApp Image 2026-05-14 at 11.53.56 (2)_645x430.jpg";
import officeImg1 from "../photos/office_image_1.png";
import officeImg2 from "../photos/office_image_2.png";
import officeImg3 from "../photos/office_image_3.png";
import workspaceVideo from "../photos/Cultive8 Workspace Video.mp4";

const ROW1 = [img80, imgNew1, officeImg1, img81, img82, img83, imgNew2, officeImg2, img84, img85, img86, img87, img88, img89];
const ROW2 = [img90, img91, imgNew3, img92, officeImg3, img93, img94, img95, img96, img97, img98, img99];

function MarqueeRow({ images, reverse = false }) {
  const track = [...images, ...images];
  return (
    <div className="gal-marquee">
      <div className={`gal-marquee__track${reverse ? " gal-marquee__track--reverse" : ""}`}>
        {track.map((src, i) => (
          <div className="gal-marquee__item" key={i}>
            <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="gal-section" id="inside">
      <div className="container gal-section__head">
        <span className="gal-section__pill">Gallery</span>
        <h2 className="gal-section__title">Take a look inside Cultiv8.</h2>
        <p className="gal-section__sub">Real photography of our Baner workspace — reception, open desks, private cabins, boardroom and breakout zone.</p>
      </div>

      <MarqueeRow images={ROW1} reverse={false} />
      <MarqueeRow images={ROW2} reverse={true} />

      <div className="gal-video-wrap">
        <video
          src={workspaceVideo}
          autoPlay
          muted
          loop
          playsInline
          className="gal-video"
        />
      </div>
    </section>
  );
}
