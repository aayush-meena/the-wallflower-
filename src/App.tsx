import { useState } from "react";
import { motion } from "motion/react";
import { Star, Instagram, ChevronUp, MapPin, Phone, Info, Compass, Sparkles } from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import MenuSection from "./components/MenuSection";
import Reviews from "./components/Reviews";
import GallerySection from "./components/GallerySection";
import ReservationSection from "./components/ReservationSection";
import LocationContact from "./components/LocationContact";
import WhatsAppButton from "./components/WhatsAppButton";
import LocalSEOAndSchema from "./components/LocalSEOAndSchema";
import { CONTACT_INFO } from "./data";

export default function App() {
  const [preOrderItems, setPreOrderItems] = useState<{ itemId: string; name: string; quantity: number; price: number }[]>([]);
  const [preOrderCart, setPreOrderCart] = useState<{ [key: string]: number }>({});

  const scrollToElement = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const clearPreOrderCart = () => {
    setPreOrderCart({});
    setPreOrderItems([]);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#0b1713] text-[#ece2c6] min-h-screen font-sans selection:bg-[#d4af37] selection:text-[#0b1713] overflow-x-hidden antialiased">
      {/* Dynamic SEO schema injecting on load */}
      <LocalSEOAndSchema />

      {/* Navigation bar component */}
      <Navbar onScrollTo={scrollToElement} />

      {/* Full screen atmospheric hero section */}
      <Hero onScrollTo={scrollToElement} />

      {/* Cozy Presentation / About and core values list */}
      <AboutUs />

      {/* Signature Dish explorer and linked preordering */}
      <MenuSection
        onPreOrderChange={setPreOrderItems}
        preOrderCart={preOrderCart}
        setPreOrderCart={setPreOrderCart}
        onGoToReservation={() => scrollToElement("reservation")}
      />

      {/* Photo gallery slider with immersive lightbox zoom */}
      <GallerySection />

      {/* Testimonials with Google average scoring & live review publishing */}
      <Reviews />

      {/* online table reservation with confirmer ticket output */}
      <ReservationSection
        preOrderItems={preOrderItems}
        clearPreOrderCart={clearPreOrderCart}
      />

      {/* Coordinates / Interactive locator maps / Operating schedule */}
      <LocationContact />

      {/* Floating interactive elements */}
      <WhatsAppButton />

      {/* Back to Top Indicator link */}
      <div className="fixed bottom-24 right-6 z-30">
        <motion.button
          onClick={handleScrollToTop}
          className="p-3 bg-[#11231d]/90 hover:bg-[#1c322b] border border-[#d4af37]/20 text-[#d4af37] rounded-full shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#d4af37]/45"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ChevronUp size={18} />
        </motion.button>
      </div>

      {/* Footer layout */}
      <footer className="bg-[#040807] border-t border-[#142d25] py-16 text-[#ece2c6]/60 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center sm:text-left">
            
            {/* Branding Column */}
            <div className="md:col-span-1 flex flex-col items-center sm:items-start gap-4">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#d4af37] font-sans">
                  The Wallflower
                </h3>
                <span className="text-xs uppercase tracking-widest font-mono text-[#ece2c6]/40 leading-none block mt-0.5">
                  Rooftop Kitchen & Cafe
                </span>
              </div>
              <p className="text-xs text-[#ece2c6]/60 leading-relaxed font-light mt-2 max-w-xs">
                A scenic botanical oasis on the fifth floor, dedicating fresh culinary multi-cuisine, elegant starburst lighting, and romantic seating schedules in Kota.
              </p>
              
              {/* Instagram social link placeholder */}
              <div className="flex gap-3 mt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#142d25]/50 border border-[#1c322b] hover:border-[#d4af37]/45 text-[#ece2c6] hover:text-[#d4af37] rounded-lg transition-all"
                  title="Follow us on Instagram"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Quick Navigation footer */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[#ece2c6] uppercase font-mono font-bold tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-2 text-xs font-light">
                <li><button onClick={() => scrollToElement("home")} className="hover:text-[#d4af37] cursor-pointer">Home Landing</button></li>
                <li><button onClick={() => scrollToElement("about")} className="hover:text-[#d4af37] cursor-pointer">About Atmosphere</button></li>
                <li><button onClick={() => scrollToElement("menu")} className="hover:text-[#d4af37] cursor-pointer">Signature Menu</button></li>
                <li><button onClick={() => scrollToElement("gallery")} className="hover:text-[#d4af37] cursor-pointer">Photo Gallery</button></li>
                <li><button onClick={() => scrollToElement("reservation")} className="hover:text-[#d4af37] cursor-pointer">Book a Table</button></li>
              </ul>
            </div>

            {/* Location footer block */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[#ece2c6] uppercase font-mono font-bold tracking-widest text-xs">Reach Us</h4>
              <p className="text-xs font-light leading-relaxed">
                5th Floor, 48, Rajeev Gandhi Nagar,<br />
                Instrumentation Limited Colony,<br />
                Kota, Rajasthan 324005
              </p>
              <div className="flex flex-col gap-1 text-xs font-mono font-bold text-[#d4af37]">
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:underline">{CONTACT_INFO.phone}</a>
                <span>hello@thewallflowerkitchen.com</span>
              </div>
            </div>

            {/* Opening timings summary */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[#ece2c6] uppercase font-mono font-bold tracking-widest text-xs">Dining Hours</h4>
              <div className="text-xs space-y-1.5 font-light">
                <p><span className="font-semibold block text-[#ece2c6]/80">Mon - Thu:</span> 12:00 PM - 11:30 PM</p>
                <p><span className="font-semibold block text-[#ece2c6]/80">Fri - Sun:</span> 12:00 PM - 12:00 AM (Midnight)</p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 justify-center sm:justify-start">
                <Star size={13} className="fill-[#d4af37] text-[#d4af37]" />
                <span className="text-[11px] font-mono text-stone-400">Rating: {CONTACT_INFO.rating}★ (120+ reviews)</span>
              </div>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-[#142821] text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
            <p>&copy; {new Date().getFullYear()} The Wallflower Kitchen. All Rights Reserved.</p>
            <p className="font-mono text-[#ece2c6]/30">Designed & Crafted with Premium Fine Dining Aesthetics &bull; Kota</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
