"use client";

import { useState } from "react";

// In production the site is served from /SpiceCateringBD (see next.config.ts),
// so static assets in /public must be referenced with that prefix.
const PREFIX = process.env.NODE_ENV === "production" ? "/SpiceCateringBD" : "";

interface LogoProps {
  /** Height of the logo in pixels. */
  size?: number;
  /** Path inside /public — defaults to the cloche mark asset. */
  src?: string;
  className?: string;
  alt?: string;
}

/**
 * Renders the Spice Catering cloche logo from /public/assets.
 * Falls back to an inline copy of the same mark if the file fails to load.
 */
export const Logo = ({
  size = 48,
  src = "assets/spice-logo.svg",
  className = "",
  alt = "Spice Catering",
}: LogoProps) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-label={alt} className={className}>
        <circle cx="60" cy="60" r="60" fill="#6B6B6B" />
        <path d="M48 28 Q46 23 48 18 Q50 13 48 8" stroke="#C0581A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M60 26 Q58 21 60 16 Q62 11 60 6" stroke="#C0581A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M72 28 Q70 23 72 18 Q74 13 72 8" stroke="#C0581A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M25 68 Q25 38 60 38 Q95 38 95 68 Z" fill="#C0581A" />
        <ellipse cx="60" cy="38" rx="6" ry="4" fill="#C0581A" />
        <ellipse cx="60" cy="36" rx="4" ry="3" fill="#D4682A" />
        <rect x="18" y="68" width="84" height="6" rx="3" fill="#C0581A" />
        <rect x="44" y="74" width="32" height="10" rx="5" fill="#C0581A" />
        <rect x="46" y="83" width="5" height="14" rx="2.5" fill="#C0581A" />
        <rect x="54" y="84" width="5" height="15" rx="2.5" fill="#C0581A" />
        <rect x="62" y="84" width="5" height="15" rx="2.5" fill="#C0581A" />
        <rect x="70" y="83" width="5" height="14" rx="2.5" fill="#C0581A" />
        <path d="M44 78 Q38 76 36 80 Q34 84 38 86 Q42 87 44 84" fill="#C0581A" />
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
