import { Navbar } from "@/components/Navbar";
import { Gallery } from "@/components/Gallery";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { ContactForm } from "@/components/ContactForm";
import { MenuTabs } from "@/components/MenuTabs";
import { CurrencyConverter } from "@/components/CurrencyConverter";
import { Logo } from "@/components/Logo";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";

/* ─── Brand palette ──────────────────────────
   Primary orange : #C0581A
   Dark brown     : #1A1008
   Cream          : #FAF7F2
   Accent gold    : #D4A843
─────────────────────────────────────────────── */

const galleryItems = [
  {
    id: "corporate",
    title: "Corporate Catering",
    description:
      "Daily canteen management and premium event catering for Bangladesh's leading companies in banking, telecoms, pharma and more.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
  },
  {
    id: "wedding",
    title: "Wedding Catering",
    description:
      "Let us coordinate your dream wedding feast and help you make it a grand success your guests will never forget.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  },
  {
    id: "house",
    title: "House Catering",
    description:
      "From intimate family gatherings to lavish house parties, SPICE is the best choice to be your catering partner.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    id: "buffet",
    title: "Hot Buffet Service",
    description:
      "Our daily hot buffet menus offer a rotating selection of freshly prepared Bangladeshi and continental dishes.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  },
  {
    id: "delivery",
    title: "Home Delivery",
    description:
      "Delivered in our own refrigerated vans to ensure the highest food safety and hygiene standards.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
  },
];

const testimonials = [
  {
    name: "Rahim Chowdhury",
    role: "Head of Operations, BRAC Bank",
    quote:
      "SPICE has been our corporate canteen partner for three years. The consistency and quality is unmatched. Our employees look forward to lunch every single day.",
    stars: 5,
  },
  {
    name: "Nadia Islam",
    role: "Bride, December 2023",
    quote:
      "Our wedding feast was absolutely perfect. Every single guest complimented the food. SPICE turned our most important day into a culinary memory.",
    stars: 5,
  },
  {
    name: "Karim Ahmed",
    role: "Director, Grameenphone",
    quote:
      "We've used SPICE for quarterly board events. Presentation is always immaculate and the service is seamlessly professional.",
    stars: 5,
  },
  {
    name: "Fatema Begum",
    role: "Event Host",
    quote:
      "I hosted a house party for 80 guests and SPICE handled everything. The food arrived hot, on time, and tasted incredible. Highly recommended!",
    stars: 5,
  },
];

const galleryStrip = [
  "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80",
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1008]/70 via-[#1A1008]/50 to-[#1A1008]/80" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="text-[#D4A843] text-xs tracking-[0.3em] uppercase mb-6">
            Est. 2006 · Dhaka, Bangladesh
          </div>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-slide-up"
            style={{ fontFamily: "var(--font-playfair)", letterSpacing: "0.05em" }}
          >
            Catering for<br />
            <span
              className="text-[#C0581A]"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55), 0 0 2px rgba(0,0,0,0.3)" }}
            >
              the Nation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Since 2006, Spice Catering has set the standard in Bangladesh, from intimate
            dawats and grand weddings to corporate canteens serving thousands daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#C0581A] hover:bg-[#a84a15] text-white px-8 py-4 rounded-full font-medium tracking-wide transition-all hover:shadow-lg hover:shadow-[#C0581A]/30"
            >
              Make an Enquiry
            </a>
            <a
              href="#services"
              className="border border-white/40 hover:border-white text-white px-8 py-4 rounded-full font-medium tracking-wide transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest">
          <span>SCROLL</span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#C0581A] text-xs tracking-[0.3em] uppercase font-medium mb-4">About Us</div>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#1A1008] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Catering Excellence<br />Since 2006
              </h2>
              <p className="text-stone-500 leading-relaxed mb-5">
                After a year of preparation, SPICE was launched in Dhaka in 2006. The company has
                gone from strength to strength, growing each year in size and popularity. Today
                the company employs many professional catering staff with years of experience
                across several countries, and operates kitchens in a premium location in Gulshan.
              </p>
              <p className="text-stone-600 font-medium mb-3">Our business is catering for:</p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Annual general meetings, corporate events, canteens and company picnics",
                  "Weddings, walimas and mehendis",
                  "House catering for gatherings of family and friends",
                  "Servicing and managing large venues such as the Bangabandhu International and Bashundhara Convention Centres",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-stone-500 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C0581A] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-500 leading-relaxed mb-5">
                SPICE has expertise in event management and can assist with most aspects of your
                event, supported by partners who are experts in their field. We have catered for
                gatherings of 25 to 2,500 guests, from Sylhet to Chittagong.
              </p>
              <p className="text-stone-500 leading-relaxed mb-8">
                We look forward to building a real relationship with you, for life.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <div className="h-10 w-10 rounded-full bg-[#C0581A]/10 flex items-center justify-center shrink-0">
                    <Phone className="size-4 text-[#C0581A]" />
                  </div>
                  <div>
                    <div className="font-medium">24-Hour Contact</div>
                    <div className="text-[#C0581A] font-bold text-base">01938-555666</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <div className="h-10 w-10 rounded-full bg-[#C0581A]/10 flex items-center justify-center shrink-0">
                    <MapPin className="size-4 text-[#C0581A]" />
                  </div>
                  <div>
                    <div className="font-medium">Office</div>
                    <div>House 12, Road 33, Gulshan 1, Dhaka</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                  alt="Spice Catering food"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 max-w-[200px]">
                <div className="text-[#C0581A] font-bold text-3xl" style={{ fontFamily: "var(--font-playfair)" }}>4.3★</div>
                <div className="text-xs text-stone-500 mt-1">Average rating across 800+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GALLERY ─────── */}
      <section id="services">
        <Gallery
          title="Our Services"
          description="From intimate house gatherings to grand corporate events and weddings, SPICE delivers excellence every time."
          items={galleryItems}
        />
      </section>

      {/* ── MENUS ────────────────────────────────────────────── */}
      <section id="menus" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#C0581A] text-xs tracking-[0.3em] uppercase font-medium mb-4">Sample Menus</div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1A1008]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Menu to Suit Every Occasion
            </h2>
            <p className="text-stone-500 mt-4 max-w-xl mx-auto">
              Five distinct cuisines, dozens of dishes. Each prepared with the finest local
              produce and authentic flavours. Browse the menus below; all are fully customisable.
            </p>
          </div>
          <MenuTabs />
        </div>
      </section>

      {/* ── CURRENCY CONVERTER ───────────────────────────────── */}
      <section id="currency" className="py-24 bg-[#FAF7F2]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#C0581A] text-xs tracking-[0.3em] uppercase font-medium mb-4">Currency Converter</div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1A1008]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Planning From Abroad?
            </h2>
            <p className="text-stone-500 mt-4 max-w-xl mx-auto leading-relaxed">
              Convert between Bangladeshi Taka and your home currency to get a clear picture of your event budget. Live exchange rates updated daily.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <CurrencyConverter />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section id="testimonials" className="py-24 bg-[#1A1008]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#C0581A] text-xs tracking-[0.3em] uppercase font-medium mb-4">Testimonials</div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="size-4 fill-[#D4A843] text-[#D4A843]" />
                  ))}
                </div>
                <blockquote className="text-stone-300 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-stone-400 text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ──────────────────────────────────────── */}
      <section id="gallery" className="grid grid-cols-2 md:grid-cols-4 h-72 md:h-80">
        {galleryStrip.map((src, i) => (
          <div key={i} className="relative overflow-hidden group">
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#1A1008]/20 group-hover:bg-[#1A1008]/5 transition-colors" />
          </div>
        ))}
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-[#FAF7F2]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-[#C0581A] text-xs tracking-[0.3em] uppercase font-medium mb-4">Get In Touch</div>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#1A1008] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Make an Enquiry
              </h2>
              <p className="text-stone-500 leading-relaxed mb-10">
                Tell us about your upcoming event and one of our catering coordinators will
                be in touch as soon as possible to discuss how we can make it truly perfect.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: <Phone className="size-4 text-white" />,
                    title: "24-Hour Hotline",
                    content: (
                      <>
                        <a href="tel:+8801938555666" className="text-[#C0581A] font-bold text-lg hover:underline">01938-555666</a>
                        <div className="text-stone-500 text-sm">/ 01786-554433</div>
                      </>
                    ),
                  },
                  {
                    icon: <Mail className="size-4 text-white" />,
                    title: "Email Us",
                    content: (
                      <a href="mailto:contact@spicecateringbd.com" className="text-stone-600 hover:text-[#C0581A] transition-colors">
                        contact@spicecateringbd.com
                      </a>
                    ),
                  },
                  {
                    icon: <MapPin className="size-4 text-white" />,
                    title: "Office Address",
                    content: <div className="text-stone-600">House 12, Road 33, Gulshan 1<br />Dhaka 1212, Bangladesh</div>,
                  },
                  {
                    icon: <Clock className="size-4 text-white" />,
                    title: "Office Hours",
                    content: (
                      <div className="text-stone-600">
                        <div>Sat – Thu: 10:00 am – 8:00 pm</div>
                        <div>Friday: 10:30 am – 3:30 pm</div>
                      </div>
                    ),
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#C0581A] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-[#1A1008] mb-0.5">{item.title}</div>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-stone-200">
                <FeedbackWidget />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 lg:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="bg-[#1A1008] text-stone-400 py-14">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4 text-white">
                <Logo size={44} className="shrink-0" />
                <div className="font-bold" style={{ fontFamily: "var(--font-playfair)", letterSpacing: "0.05em" }}>Spice Catering Ltd.</div>
              </div>
              <p className="text-sm leading-relaxed">
                Bangladesh&apos;s most trusted catering partner since 2006. Serving excellence
                across corporate, wedding, and house catering.
              </p>
            </div>
            <div>
              <div className="text-stone-300 font-medium mb-4 text-xs tracking-widest uppercase">Quick Links</div>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Menus", href: "#menus" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "Contact", href: "#contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-[#C0581A] transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-stone-300 font-medium mb-4 text-xs tracking-widest uppercase">Contact</div>
              <div className="space-y-2 text-sm">
                <div>House 12, Road 33, Gulshan 1</div>
                <div>Dhaka 1212, Bangladesh</div>
                <div className="pt-2">
                  <a href="tel:+8801938555666" className="text-[#C0581A] font-bold hover:underline">01938-555666</a>
                </div>
                <div>
                  <a href="mailto:contact@spicecateringbd.com" className="hover:text-[#C0581A] transition-colors">
                    contact@spicecateringbd.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <span>© {new Date().getFullYear()} Spice Catering Ltd. All rights reserved.</span>
            <a href="https://www.spicecateringbd.com" className="hover:text-[#C0581A] transition-colors">
              spicecateringbd.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
