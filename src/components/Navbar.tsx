import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, CalendarRange, Star } from "lucide-react";
import { CONTACT_INFO } from "../data";

interface NavbarProps {
  onScrollTo: (elementId: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Signatures", id: "menu" },
    { name: "Gallery", id: "gallery" },
    { name: "Location", id: "contact" }
  ];

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b1713]/95 backdrop-blur-md border-b border-[#1c322b] py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Branding */}
          <div
            onClick={() => onScrollTo("home")}
            className="flex flex-col cursor-pointer"
          >
            <div className="flex items-center gap-1.5 focus:outline-none">
              <span className="text-xl sm:text-2xl font-sans font-extrabold tracking-widest text-[#d4af37] uppercase">
                The Wallflower
              </span>
            </div>
            <span className="text-xs font-serif italic tracking-widest text-[#ece2c6]/80 text-left -mt-1 pl-0.5">
              Rooftop Restaurant & Cafe
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onScrollTo(link.id)}
                className="text-[#ece2c6]/90 hover:text-[#d4af37] text-sm uppercase tracking-wider font-semibold transition-colors duration-200 cursor-pointer focus:outline-none"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Action Call & Contact */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 text-sm text-[#ece2c6]/90 hover:text-[#d4af37] transition-colors focus:outline-none"
            >
              <Phone size={16} className="text-[#d4af37]" />
              <span className="font-mono">{CONTACT_INFO.phone}</span>
            </a>

            <button
              onClick={() => onScrollTo("reservation")}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#d4af37] hover:bg-[#c19b2e] text-[#0b1713] font-bold text-sm uppercase tracking-wider rounded-md shadow-md hover:shadow-[#d4af37]/10 transition-all cursor-pointer focus:outline-none"
            >
              <CalendarRange size={16} />
              Reserve Table
            </button>
          </div>

          {/* Mobile Right Bar info */}
          <div className="flex items-center space-x-3 md:hidden">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="p-2 text-[#d4af37] border border-[#d4af37]/30 rounded-md bg-stone-900/40"
              aria-label="Call Restaurant"
            >
              <Phone size={16} />
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#ece2c6] border border-[#ece2c6]/20 rounded-md hover:bg-stone-900/40 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d1c17] border-b border-[#1c322b] overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onScrollTo(link.id);
                  }}
                  className="block w-full text-left px-3 py-2 text-[#ece2c6] hover:text-[#d4af37] text-base font-medium uppercase tracking-wider border-b border-[#1c322b]/50"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-3 flex flex-col gap-3 px-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onScrollTo("reservation");
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#d4af37] text-[#0b1713] font-bold uppercase tracking-wider rounded-md shadow"
                >
                  <CalendarRange size={18} />
                  Book Table Now
                </button>
                <div className="flex items-center justify-center gap-1.5 text-xs text-[#ece2c6]/60">
                  <Star size={12} className="fill-[#d4af37] text-[#d4af37]" />
                  <span>Avg Customer Rating: {CONTACT_INFO.rating}★</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
