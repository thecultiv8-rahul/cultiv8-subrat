import { useState } from "react";

/**
 * Image with a branded fallback: if the file in /public/images is missing,
 * a warm-sand placeholder with the label is shown instead of a broken icon.
 */
export default function Img({ src, alt, className = "", label }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={alt}>
        <span>{label || alt}</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} />;
}
