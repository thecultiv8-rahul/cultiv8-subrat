export default function SectionHead({ eyebrow, title, text, children, light = false }) {
  return (
    <div className={`section-head ${light ? "is-light" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h-display">{title}</h2>
      </div>
      <div className="section-head__aside">
        {text && <p className="lead">{text}</p>}
        {children}
      </div>
    </div>
  );
}
