import heroBg from "../photos/hero.png";

const ITEMS = [
  {
    key: "wifi",
    title: "High-Speed Wi-Fi",
    sub: "Fibre connectivity across every desk",
    accent: "dark",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="38" r="3.5" fill="currentColor"/>
        <path d="M13 27a15.5 15.5 0 0 1 22 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M7 21a23.5 23.5 0 0 1 34 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M19 33a7.5 7.5 0 0 1 10 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "ac",
    title: "Air Conditioning",
    sub: "Climate-controlled all year",
    accent: "white",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="14" width="36" height="13" rx="5" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M14 27v5M24 27v7M34 27v5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="13" cy="20.5" r="2.5" fill="currentColor"/>
        <path d="M20 18h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "meeting",
    title: "Meeting Rooms",
    sub: "Boardroom & breakout spaces",
    accent: "white",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="5" y="8" width="38" height="26" rx="5" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M15 40h18M24 34v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M13 19h22M13 25h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "cafe",
    title: "Cafeteria",
    sub: "Full-service dining on site",
    accent: "white",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M10 14h28l-3.5 20H13.5L10 14Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M38 17h4a3.5 3.5 0 0 1 0 7h-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M7 38h34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "coffee",
    title: "Tea & Coffee",
    sub: "Unlimited, all day long",
    accent: "orange",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M15 6c0 0 3 4 0 7s-3 7 0 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 6c0 0 3 4 0 7s-3 7 0 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M10 24h28l-3.5 14H13.5L10 24Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M7 42h34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: "games",
    title: "Recreation Area",
    sub: "Foosball, carrom & lounge",
    accent: "white",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M24 7v34M7 24h34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="24" cy="24" rx="7" ry="17" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    key: "parking",
    title: "Parking",
    sub: "Covered parking for members",
    accent: "white",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="7" y="7" width="34" height="34" rx="7" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M18 34V14h10a7 7 0 0 1 0 14H18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: "power",
    title: "Power Backup",
    sub: "Zero downtime, always on",
    accent: "white",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M26 4L8 28h14l-2 16 18-24H24L26 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12"/>
      </svg>
    ),
  },
  {
    key: "security",
    title: "24/7 Security",
    sub: "Secure access & CCTV",
    accent: "orange",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 4L7 11v12c0 9 7 17.4 17 19.4C34 40.4 41 32 41 23V11L24 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
        <path d="M16 24l6 6 10-11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Amenities() {
  return (
    <section className="am5" id="amenities" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container">
        <div className="am5__head">
          <span className="am5__pill">Amenities</span>
          <h2 className="am5__title">Everything your workday needs.</h2>
        </div>
        <div className="am5__bento">
          {ITEMS.map((item) => (
            <div key={item.key} className={`am5__card am5__card--${item.accent} am5__card--${item.key}`}>
              <div className="am5__card-icon">{item.icon}</div>
              <div className="am5__card-body">
                <h3 className="am5__card-title">{item.title}</h3>
                <p className="am5__card-sub">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
