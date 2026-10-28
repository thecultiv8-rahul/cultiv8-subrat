import { useState } from "react";

/**
 * Uses /images/cultiv8-logo.png when present; otherwise draws a type-only
 * wordmark in brand colours so the page never shows a broken logo.
 */
export default function Logo({ light = false }) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <img
        src={light ? "/images/cultiv8-logo-light.png" : "/images/cultiv8-logo.png"}
        alt="Cultiv8 — Elevate Your Success"
        className="logo-img"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <span className={`logo-text ${light ? "is-light" : ""}`}>
      <span className="logo-text__mark">
        CULT<span className="logo-text__i">I</span>V8
      </span>
      <span className="logo-text__tag">Elevate Your Success</span>
    </span>
  );
}
