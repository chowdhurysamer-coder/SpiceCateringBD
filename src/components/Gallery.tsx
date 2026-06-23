"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
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

  return (
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
        <Carousel setApi={setCarouselApi} opts={{ breakpoints: { "(max-width: 768px)": { dragFree: true } } }}>
          <CarouselContent className="ml-6 lg:ml-[max(2rem,calc(50vw-680px))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="max-w-[320px] pl-5 lg:max-w-[380px]">
                <div className="group relative h-full min-h-[28rem] overflow-hidden rounded-2xl">
                  <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1008]/80 via-[#1A1008]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="mb-2 text-xl font-semibold font-serif">{item.title}</div>
                    <div className="text-sm text-stone-200 line-clamp-2">{item.description}</div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-6 flex justify-center gap-2">
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
  );
};

export { Gallery };
