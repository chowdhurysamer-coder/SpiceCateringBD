"use client";

import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface GalleryProps {
  title?: string;
  description?: string;
  items: GalleryItem[];
}

const Gallery = ({
  title = "Our Services",
  description = "From intimate house gatherings to grand corporate events, Spice Catering delivers excellence every time.",
  items,
}: GalleryProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expanded, setExpanded] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => { carouselApi.off("select", updateSelection); };
  }, [carouselApi]);

  // Close on Escape
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setExpanded(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  return (
    <>
      <section className="py-20 bg-[#FAF7F2]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1008]">{title}</h2>
              <p className="max-w-lg text-stone-500">{description}</p>
            </div>
            <div className="hidden shrink-0 gap-2 md:flex">
              <Button size="icon" variant="ghost" onClick={() => carouselApi?.scrollPrev()} disabled={!canScrollPrev}>
                <ArrowLeft className="size-5" />
              </Button>
              <Button size="icon" variant="ghost" onClick={() => carouselApi?.scrollNext()} disabled={!canScrollNext}>
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Carousel setApi={setCarouselApi} enableWheelGestures opts={{ dragFree: true }}>
            <CarouselContent className="ml-6 lg:ml-[max(2rem,calc(50vw-680px))] pr-6 lg:pr-[max(2rem,calc(50vw-680px))]">
              {items.map((item) => (
                <CarouselItem key={item.id} className="max-w-[320px] pl-5 lg:max-w-[380px]">
                  <button
                    className="group relative h-full min-h-[28rem] w-full overflow-hidden rounded-2xl text-left cursor-pointer"
                    onClick={() => setExpanded(item)}
                    aria-label={`View details: ${item.title}`}
                  >
                    <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1008]/80 via-[#1A1008]/20 to-transparent group-hover:from-[#1A1008]/90 transition-all duration-300" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <div className="mb-2 text-xl font-semibold font-serif">{item.title}</div>
                      <div className="text-sm text-stone-200 line-clamp-2">{item.description}</div>
                      <div className="mt-3 text-xs text-[#E8925A] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Tap to learn more
                      </div>
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="mt-8 pb-2 flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index ? "bg-[#C0581A]" : "bg-[#C0581A]/25"}`}
                onClick={() => carouselApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expanded overlay */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setExpanded(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#1A1008]/70 backdrop-blur-sm" />

          {/* Card */}
          <div
            className="relative z-10 max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={expanded.image}
              alt={expanded.title}
              className="w-full h-56 object-cover"
            />
            <div className="absolute top-0 inset-x-0 h-56 bg-gradient-to-b from-[#1A1008]/30 to-transparent" />
            <button
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
              onClick={() => setExpanded(null)}
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
            <div className="bg-white px-8 py-7">
              <h3 className="text-xl font-semibold text-[#1A1008] font-serif mb-3">{expanded.title}</h3>
              <p className="text-stone-500 leading-relaxed">{expanded.description}</p>
              <a
                href="#contact"
                className="mt-6 inline-block bg-[#C0581A] hover:bg-[#a84a15] text-white text-sm tracking-widest uppercase px-7 py-3 transition-colors"
                onClick={() => setExpanded(null)}
              >
                Make an Enquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Gallery };
