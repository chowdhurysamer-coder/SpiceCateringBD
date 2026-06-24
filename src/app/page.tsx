import { Navbar } from "@/components/Navbar";
import { Gallery } from "@/components/Gallery";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { ContactForm } from "@/components/ContactForm";
import { MenuTabs } from "@/components/MenuTabs";
import { CurrencyConverter } from "@/components/CurrencyConverter";
import { Logo } from "@/components/Logo";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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


export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1008]/75 via-[#1A1008]/55 to-[#1A1008]/80" />

        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          <div className="text-base text-[#E8925A] tracking-[0.3em] uppercase mb-6" style={{ textShadow: "0 0 20px rgba(0,0,0,1), 0 0 8px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)" }}>
            Est. 2004 · Dhaka, Bangladesh
          </div>
          <h1
            className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-slide-up"
            style={{ fontFamily: "var(--font-playfair)", letterSpacing: "0.05em" }}
          >
            Catering for<br />
            <span
              className="text-[#C0581A]"
              style={{ textShadow: "0 4px 24px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)" }}
            >
              the Nation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Since 2004, Spice Catering has set the standard in Bangladesh, from intimate
            dawats and grand weddings to corporate canteens serving thousands daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#C0581A] hover:bg-[#a84a15] text-white px-9 py-4 text-sm tracking-widest uppercase transition-colors"
            >
              Make an Enquiry
            </a>
            <a
              href="#menus"
              className="border border-white/30 hover:border-white/60 text-white px-9 py-4 text-sm tracking-widest uppercase transition-colors"
            >
              View Menus
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-stone-400 tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-px bg-stone-500" />
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#C0581A] text-xs tracking-[0.3em] uppercase font-medium mb-4">About Us</div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl text-[#1A1008] leading-tight mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Two decades of culinary excellence
              </h2>
              <p className="text-stone-500 leading-relaxed mb-5">
                After a year of preparation, SPICE was launched in Dhaka in 2004. The company has
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
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 max-w-[200px]" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.22), 0 2px 12px rgba(0,0,0,0.14)" }}>
                <div className="text-[#C0581A] font-bold text-3xl" style={{ fontFamily: "var(--font-playfair)" }}>4.3★</div>
                <div className="text-xs text-stone-500 mt-1">Average rating across 800+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES / GALLERY ───────────────────────────────── */}
      <section id="services">
        <Gallery
          title="Our Services"
          description="From intimate house gatherings to grand corporate events, Spice Catering delivers excellence every time."
          items={galleryItems}
        />
      </section>

      {/* ── MENUS ────────────────────────────────────────────── */}
      <section id="menus" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs text-[#C0581A] tracking-[0.3em] uppercase mb-4">What We Serve</div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-[#1A1008] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Menus
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Five distinct cuisines, dozens of dishes. Each prepared fresh to order for your event.
            </p>
          </div>
          <MenuTabs />
        </div>
      </section>

      {/* ── CURRENCY ─────────────────────────────────────────── */}
      <section id="currency" className="py-24 bg-[#FAF7F2]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs text-[#C0581A] tracking-[0.3em] uppercase mb-4">Pricing Reference</div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-[#1A1008] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Currency Converter
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Plan your event budget in your home currency. Live exchange rates updated hourly.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <CurrencyConverter />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 bg-[#1A1008] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs text-[#C0581A] tracking-[0.3em] uppercase mb-4">Client Stories</div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What Our Clients Say
            </h2>
          </div>
        </div>
        <TestimonialsCarousel />
      </section>

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <section id="gallery" className="py-24 bg-[#FAF7F2]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs text-[#C0581A] tracking-[0.3em] uppercase mb-4">In the Kitchen</div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-[#1A1008]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Gallery
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
              "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
              "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
              "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80",
              "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
              "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
              "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80",
            ].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl aspect-square">
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-[#FAF7F2]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs text-[#C0581A] tracking-[0.3em] uppercase mb-4">Get in Touch</div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-[#1A1008] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Make an Enquiry
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Tell us about your event and we will get back to you within 24 hours with a personalised quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-8">
              {[
                { icon: Phone, label: "Phone", value: "01938-555666", href: "tel:+8801938555666" },
                { icon: Mail, label: "Email", value: "info@spicecateringbd.com", href: "mailto:info@spicecateringbd.com" },
                { icon: MapPin, label: "Address", value: "Dhaka, Bangladesh", href: null },
                { icon: Clock, label: "Hours", value: "Sat to Thu, 9 am to 9 pm", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#C0581A]/15 flex items-center justify-center shrink-0">
                    <Icon className="size-4 text-[#C0581A]" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 uppercase tracking-widest mb-1">{label}</div>
                    {href ? (
                      <a href={href} className="text-[#1A1008] hover:text-[#C0581A] transition-colors">{value}</a>
                    ) : (
                      <div className="text-[#1A1008]">{value}</div>
                    )}
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <div className="text-xs text-stone-400 uppercase tracking-widest mb-4">Follow Us</div>
                <div className="flex gap-3">
                  {[
                    { label: "Facebook", href: "https://www.facebook.com/SPICECATERINGLTD/" },
                    { label: "Instagram", href: "https://www.instagram.com/spicecateringbd/" },
                  ].map(({ label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="border border-stone-300 hover:border-[#C0581A] text-stone-500 hover:text-[#C0581A] text-xs px-4 py-2 transition-colors">{label}</a>
                  ))}
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="bg-[#0E0805] py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <a href="#home" className="flex items-center gap-3 mb-4">
                <Logo size={44} />
                <span className="font-serif text-white text-lg">Spice Catering</span>
              </a>
              <p className="text-stone-500 text-sm leading-relaxed">
                Bangladesh's premier catering company. Serving excellence since 2004.
              </p>
            </div>
            <div>
              <div className="text-stone-300 text-xs tracking-widest uppercase mb-4">Quick Links</div>
              <div className="flex flex-col gap-2">
                {["About Us", "Services", "Menus", "Gallery", "Contact"].map((l) => (
                  <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-stone-500 hover:text-[#C0581A] text-sm transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-stone-300 text-xs tracking-widest uppercase mb-4">Contact</div>
              <div className="space-y-2 text-stone-500 text-sm">
                <div>01938-555666</div>
                <div>info@spicecateringbd.com</div>
                <div>Dhaka, Bangladesh</div>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-stone-600 text-xs">&copy; {new Date().getFullYear()} Spice Catering Ltd. All rights reserved.</div>
            <FeedbackWidget />
            <div className="text-stone-700 text-xs">Dhaka, Bangladesh · Est. 2004</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
