"use client";

import { useEffect, useRef, useState } from "react";
import { X, Star } from "lucide-react";

interface Review {
  name: string;
  role: string;
  quote: string;
  stars: number;
}

const REVIEWS: Review[] = [
  {
    name: "Rahim Chowdhury",
    role: "Head of Operations, BRAC Bank",
    quote: "SPICE has been our corporate canteen partner for three years. The consistency and quality is unmatched. Our employees look forward to lunch every single day.",
    stars: 5,
  },
  {
    name: "Nadia Islam",
    role: "Bride, December 2023",
    quote: "Our wedding feast was absolutely perfect. Every single guest complimented the food. SPICE turned our most important day into a culinary memory.",
    stars: 5,
  },
  {
    name: "Morshedul Alam",
    role: "Google Review · Local Guide",
    quote: "Five star catering service.Locate in Gulshan area.Everyday they are serving 3500 meals.Its has a setup for 15000 meals serving capacity at a time. They are serving all kind of local and different kind of Thai,Chinese, Continental food with turkish and Arabic Food. Pre order basis food catering. I've tested one of Their dessert Item name Apple pie. They also offer authentic Bakery items. They have best quality Kacchi with premium quality mutton. You could try for your next family or office party.",
    stars: 5,
  },
  {
    name: "Karim Ahmed",
    role: "Director, Grameenphone",
    quote: "We've used SPICE for quarterly board events. Presentation is always immaculate and the service is seamlessly professional.",
    stars: 5,
  },
  {
    name: "Abdur Rohman",
    role: "Google Review · Local Guide",
    quote: "Very good food and service. Loved their kacci and the quality of the offered food is too delicious. Surely recommend anyone to order from them.",
    stars: 5,
  },
  {
    name: "Fatema Begum",
    role: "Event Host",
    quote: "Spice Catering made our daughter's birthday party a night to remember. The food was delicious and the team were incredibly helpful and friendly.",
    stars: 5,
  },
  {
    name: "Readul Hasan Chayan",
    role: "Google Review · Local Guide",
    quote: "Great service! We recently had a family occasion and were so lucky to find Spice catering online. We met with the manager Mr. Rakib and fixed a plan after a discussion with him. He showed us the kitchen inside and guided us through the other procedures. We planned to serve the dishes in a buffet style; someone from their office visited the venue (incidentally our house) one day before to make sure everything was okay and sketched an initial plan for the next day. On the day of the occasion, they reached our venue early in the morning to set up the buffet counter and other necessary stuff. The food reached around 12:30 and everything went according to the plan afterwards. All the guests highly praised the food, and the servers were very friendly and well-trained as well. Although the pricing was a bit on the higher side, they compensated that very well with the quality of the food and amazing service. All in all, they were splendid! Given the horrible \"Baburchi\" culture here, they were a breath of fresh air. I'd hire them again without a doubt - way to go!!",
    stars: 5,
  },
  {
    name: "Rifat Khan",
    role: "Google Review · Local Guide",
    quote: "Best catering service in Dhaka. Hygienic and tasty food.",
    stars: 5,
  },
];

// Clone first review at end for seamless infinite loop
const extended = [...REVIEWS, REVIEWS[0]];
const N = extended.length;

export const TestimonialsCarousel = () => {
  const [idx, setIdx] = useState(0);
  const [transition, setTransition] = useState(true);
  const [expanded, setExpanded] = useState<Review | null>(null);
  const paused = useRef(false);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) {
        setTransition(true);
        setIdx(i => i + 1);
      }
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // When we reach the clone at the end, snap back to index 0
  useEffect(() => {
    if (idx === N - 1) {
      const t = setTimeout(() => {
        setTransition(false);
        setIdx(0);
      }, 950);
      return () => clearTimeout(t);
    }
  }, [idx]);

  // Re-enable transition after snap
  useEffect(() => {
    if (!transition) {
      const t = setTimeout(() => setTransition(true), 60);
      return () => clearTimeout(t);
    }
  }, [transition]);

  // Escape key closes modal
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setExpanded(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  const activeReal = idx % REVIEWS.length;

  return (
    <>
      <div
        className="overflow-hidden"
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; }}
      >
        <div
          style={{
            display: "flex",
            width: `${N * 100}%`,
            transform: `translateX(-${(idx / N) * 100}%)`,
            transition: transition ? "transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          }}
        >
          {extended.map((review, i) => (
            <div key={i} style={{ width: `${100 / N}%` }} className="px-6 lg:px-32">
              <button
                className="w-full text-left group cursor-pointer"
                onClick={() => setExpanded(review)}
                aria-label={`Read full review from ${review.name}`}
              >
                {/* Opening quote */}
                <div
                  className="text-[#D4A843]/60 mb-2 leading-none select-none"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "6rem", lineHeight: 0.8 }}
                  aria-hidden
                >
                  &ldquo;
                </div>

                {/* Quote text */}
                <p
                  className="text-white/85 text-xl lg:text-2xl leading-relaxed italic mb-8 line-clamp-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {review.quote}
                </p>

                {/* Gold ornament */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-[#D4A843]/40" />
                  <span className="text-[#D4A843]/70 text-xs">✦</span>
                  <div className="h-px w-12 bg-[#D4A843]/40" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(review.stars)].map((_, j) => (
                    <Star key={j} className="size-3 fill-[#D4A843] text-[#D4A843]" />
                  ))}
                </div>

                {/* Name & role */}
                <div className="text-white text-xs tracking-[0.2em] uppercase font-medium mb-1">
                  {review.name}
                </div>
                <div className="text-stone-500 text-xs">{review.role}</div>

                {/* Tap hint */}
                <div className="mt-5 text-[10px] text-[#D4A843]/50 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Tap to expand
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-2 mt-12">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setTransition(true); setIdx(i); }}
            aria-label={`Go to review ${i + 1}`}
            className={`transition-all duration-500 rounded-none ${
              activeReal === i
                ? "w-8 h-px bg-[#D4A843]"
                : "w-3 h-px bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Expanded modal */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setExpanded(null)}
        >
          <div className="absolute inset-0 bg-[#0E0805]/85 backdrop-blur-sm" />
          <div
            className="relative z-10 max-w-2xl w-full bg-[#1A1008] border border-white/10 p-10 lg:p-14 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 text-stone-500 hover:text-white transition-colors"
              onClick={() => setExpanded(null)}
              aria-label="Close"
            >
              <X className="size-5" />
            </button>

            <div
              className="text-[#D4A843]/50 mb-2 leading-none select-none"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "5rem", lineHeight: 0.8 }}
              aria-hidden
            >
              &ldquo;
            </div>
            <p
              className="text-white/90 text-xl leading-relaxed italic mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {expanded.quote}
            </p>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#D4A843]/40" />
              <span className="text-[#D4A843]/60 text-xs">✦</span>
              <div className="h-px w-10 bg-[#D4A843]/40" />
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(expanded.stars)].map((_, i) => (
                <Star key={i} className="size-3 fill-[#D4A843] text-[#D4A843]" />
              ))}
            </div>
            <div className="text-white text-xs tracking-[0.2em] uppercase font-medium mb-1">{expanded.name}</div>
            <div className="text-stone-500 text-xs">{expanded.role}</div>
          </div>
        </div>
      )}
    </>
  );
};
