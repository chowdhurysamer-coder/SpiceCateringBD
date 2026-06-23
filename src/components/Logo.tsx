"use client";

import { useState } from "react";

// In production the site is served from /SpiceCateringBD (see next.config.ts),
// so static assets in /public must be referenced with that prefix.
const PREFIX = process.env.NODE_ENV === "production" ? "/SpiceCateringBD" : "";

interface LogoProps {
  /** Height of the logo in pixels. */
  size?: number;
  /** Path inside /public — defaults to the transparent cloche SVG. */
  src?: string;
  className?: string;
  alt?: string;
}

export const Logo = ({
  size = 48,
  src = "assets/image (1).svg",
  className = "",
  alt = "Spice Catering",
}: LogoProps) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // Inline fallback: same transparent mark
    return (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-label={alt} className={className}>
        <path d="M47 32 Q44 26 47 20 Q50 14 47 8" stroke="#FAF7F2" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
        <path d="M60 30 Q57 24 60 18 Q63 12 60 6" stroke="#FAF7F2" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
        <path d="M73 32 Q70 26 73 20 Q76 14 73 8" stroke="#FAF7F2" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
        <path d="M22 70 Q22 40 60 40 Q98 40 98 70 Z" fill="#E8925A"/>
        <ellipse cx="60" cy="40" rx="6" ry="4" fill="#E8925A"/>
        <rect x="16" y="70" width="88" height="6.5" rx="3.2" fill="#E8925A"/>
        <rect x="43" y="76.5" width="34" height="10" rx="5" fill="#E8925A"/>
        <rect x="45" y="85.5" width="5.5" height="15" rx="2.7" fill="#E8925A"/>
        <rect x="53.5" y="86.5" width="5.5" height="16" rx="2.7" fill="#E8925A"/>
        <rect x="62" y="86.5" width="5.5" height="16" rx="2.7" fill="#E8925A"/>
        <rect x="70.5" y="85.5" width="5.5" height="15" rx="2.7" fill="#E8925A"/>
        <path d="M43 82 Q36 79 34 83.5 Q32 88 37 90 Q41 91 43 87" fill="#E8925A"/>
      </svg>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${PREFIX}/${src}`}
      alt={alt}
      height={size}
      style={{ height: size, width: "auto" }}
      className={className}
      onError={() => setFailed(true)}
    />
  );
};
