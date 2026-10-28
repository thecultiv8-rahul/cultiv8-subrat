import { REVIEWS } from "../data/content.js";

function Stars({ size = 14 }) {
  return (
    <span className="rv3__stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" fill="#CC6633" width={size} height={size}>
          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L8 1Z"/>
        </svg>
      ))}
    </span>
  );
}

function GoogleG() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/>
    </svg>
  );
}

const [featured, ...rest] = REVIEWS.items;

export default function Reviews() {
  return (
    <section className="rv3" id="reviews">
      <div className="container">

        {/* Header */}
        <div className="rv3__head">
          <span className="rv3__pill">Reviews</span>
          <h2 className="rv3__title">What our members say.</h2>
          <a className="rv3__google" href={REVIEWS.url} target="_blank" rel="noreferrer">
            <GoogleG />
            <strong>{REVIEWS.count} reviews</strong>
            <span className="rv3__rating">4.9 ★</span>
            <span className="rv3__google-label">on Google</span>
          </a>
        </div>

        {/* Bento layout */}
        <div className="rv3__bento">

          {/* Featured large card */}
          <article className="rv3__card rv3__card--featured">
            <span className="rv3__bigquote">"</span>
            <Stars size={16} />
            <blockquote className="rv3__featured-quote">{featured.text}</blockquote>
            <footer className="rv3__author">
              <span className="rv3__avatar rv3__avatar--lg">{featured.name.charAt(0)}</span>
              <div>
                <strong className="rv3__name">{featured.name}</strong>
                <span className="rv3__source">Verified Google review</span>
              </div>
            </footer>
          </article>

          {/* Side cards */}
          <div className="rv3__side">
            {rest.map((r) => (
              <article className="rv3__card rv3__card--sm" key={r.name}>
                <Stars size={13} />
                <blockquote className="rv3__sm-quote">{r.text}</blockquote>
                <footer className="rv3__author rv3__author--sm">
                  <span className="rv3__avatar">{r.name.charAt(0)}</span>
                  <div>
                    <strong className="rv3__name">{r.name}</strong>
                    <span className="rv3__source">Google review</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
