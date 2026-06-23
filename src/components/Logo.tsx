"use client";

import { useState } from "react";

// In production the site is served from /SpiceCateringBD (see next.config.ts),
// so static assets in /public must be referenced with that prefix.
const PREFIX = process.env.NODE_ENV === "production" ? "/SpiceCateringBD" : "";

interface LogoProps {
  /** Height of the logo in pixels. */
  size?: number;
  /** Filename inside /public — defaults to the cream cloche mark. */
  src?: string;
  className?: string;
  alt?: string;
}

/**
 * Renders the real Spice Catering cloche logo from /public.
 * If the image file has not been added to the repo yet, it falls back to a
 * lightweight cloche glyph so nothing appears broken.
 */
export const Logo = ({
  size = 48,
  src = "spice-logo.png",
  className = "",
  alt = "Spice Catering",
}: LogoProps) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-label={alt} className={className}>
        <circle cx="14" cy="6" r="1.6" fill="currentColor" />
        <path d="M3 20 C3 11 8 6 14 6 C20 6 25 11 25 20 Z" fill="currentColor" />
        <rect x="2" y="20" width="24" height="2.2" rx="1.1" fill="currentColor" />
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
