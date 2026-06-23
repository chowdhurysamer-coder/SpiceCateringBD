"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Menus", href: "#menus" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-[#1A1008]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-[#C0581A] flex items-center justify-center">
            <span className="text-white font-bold text-lg font-serif">SC</span>
          </div>
          <div className="text-white">
            <div className="font-serif text-lg leading-none">Spice Catering</div>
            <div className="text-xs text-stone-300 tracking-widest uppercase">Dhaka, Bangladesh</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-stone-300 hover:text-white text-sm tracking-wide transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <a href="tel:+8801938555666" className="hidden lg:flex items-center gap-2 bg-[#C0581A] hover:bg-[#a84a15] text-white text-sm px-4 py-2 rounded-full transition-colors">
          <Phone className="size-4" /> 01938-555666
        </a>

        {/* Burger */}
        <button className="lg:hidden text-white p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#1A1008] px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-stone-300 hover:text-white py-1 text-base" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="tel:+8801938555666" className="flex items-center gap-2 bg-[#C0581A] text-white px-4 py-2 rounded-full w-fit mt-2">
            <Phone className="size-4" /> 01938-555666
          </a>
        </div>
      )}
    </header>
  );
};
