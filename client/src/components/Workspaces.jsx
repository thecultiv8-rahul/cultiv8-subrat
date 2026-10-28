import { WORKSPACES } from "../data/content.js";
import img561 from "../photos/Frame 1984081561.png";
import img562 from "../photos/Frame 1984081562.png";
import img563 from "../photos/Frame 1984081563.png";
import img564 from "../photos/Frame 1984081564.png";
import img565 from "../photos/Frame 1984081565.png";
import img566 from "../photos/Frame 1984081566.png";

const WORKSPACE_IMGS = {
  "Dedicated Desks":            img566,
  "Private Cabins":             img563,
  "Managed Offices":            img562,
  "Meeting & Conference Rooms": img565,
  "Director's Suite":           img564,
  "Virtual Office":             img561,
};

const WA_BASE = "https://wa.me/919766777246?text=";

const WA_MESSAGES = {
  "Dedicated Desks":            "Hi Cultiv8! I'm interested in a Dedicated Desk at Sterling Towers, Baner. Can you share availability and pricing?",
  "Private Cabins":             "Hi Cultiv8! I'd like to know more about Private Cabins for my team at your Baner centre. Please share details.",
  "Managed Offices":            "Hi Cultiv8! We're looking for a Managed Office space for our team. Can you share options and pricing at Sterling Towers?",
  "Meeting & Conference Rooms": "Hi Cultiv8! I need to book a Meeting/Conference Room at your Baner centre. Can you share availability and hourly rates?",
  "Director's Suite":           "Hi Cultiv8! I'm interested in the Director's Suite at Sterling Towers, Baner. Can I schedule a tour?",
  "Virtual Office":             "Hi Cultiv8! I'd like to know about your Virtual Office plans — address and mail handling services. Please share details.",
};

export default function Workspaces() {
  return (
    <section className="ws3" id="workspaces">
      <div className="container">
        <div className="ws3__head">
          <span className="ws3__pill">Workspace Options</span>
          <h2 className="ws3__title">A workspace for every stage of growth.</h2>
          <p className="ws3__sub">From a dedicated desk to a managed office — pick the setup that fits today, scale when ready.</p>
        </div>

        <div className="ws3__grid">
          {WORKSPACES.map((w) => (
            <a
              href={WA_BASE + encodeURIComponent(WA_MESSAGES[w.title])}
              className="ws3__card"
              key={w.title}
              target="_blank"
              rel="noreferrer"
              style={{ backgroundImage: `url(${WORKSPACE_IMGS[w.title]})` }}
            >
              <div className="ws3__card-overlay" />
              <span className="ws3__card-tag">{w.tag}</span>
              <div className="ws3__card-content">
                <h3 className="ws3__card-title">{w.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
