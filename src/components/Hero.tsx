import { motion } from "motion/react";
import { ArrowDown, CalendarRange, UtensilsCrossed, Star } from "lucide-react";
import { CONTACT_INFO } from "../data";
import heroImage from "../assets/images/hero_rooftop_dining_1781840537087.jpg";

interface HeroProps {
  onScrollTo: (elementId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050b09]"
    >
      {/* Background Image with Dark & Forest Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="The Wallflower Kitchen Rooftop Dining Ambiance"
          className="w-full h-full object-cover scale-105 transform translate-y-0"
          style={{ filter: "brightness(0.35) contrast(1.1)" }}
          referrerPolicy="no-referrer"
        />
        {/* Subtle Ambient Vignette & Color Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1713]/90 via-[#0b1713]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1713]/80 via-transparent to-[#0b1713]/20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-12">
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#1c322b]/60 backdrop-blur-md border border-[#d4af37]/30 rounded-full text-[#d4af37] text-xs uppercase tracking-widest font-semibold mb-6"
        >
          <Star size={14} className="fill-[#d4af37]" />
          <span>{CONTACT_INFO.rating}★ Top Rooftop Dining Destination</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight text-[#ece2c6] leading-tight"
        >
          Elevate Your Dining Experience <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#ece2c6] to-[#d4af37]">
            at The Wallflower Kitchen
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#ece2c6]/80 max-w-3xl mx-auto font-sans leading-relaxed font-light"
        >
          A rooftop culinary escape in the heart of Kota, serving delicious multi-cuisine flavors, cozy vibes, and unforgettable moments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={() => onScrollTo("menu")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0b1713] text-sm uppercase tracking-widest font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none"
          >
            <UtensilsCrossed size={16} />
            View Menu
          </button>

          <button
            onClick={() => onScrollTo("reservation")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#d4af37] text-[#0b1713] hover:bg-[#c19b2e] text-sm uppercase tracking-widest font-bold rounded-lg transition-all duration-300 shadow-lg shadow-[#d4af37]/10 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none"
          >
            <CalendarRange size={16} />
            Reserve a Table
          </button>
        </motion.div>

        {/* Quick Contact Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 text-xs text-[#ece2c6]/60 tracking-wider uppercase font-mono"
        >
          Rajeev Gandhi Nagar, Kota • Ph: {CONTACT_INFO.phone}
        </motion.p>
      </div>

      {/* Floating Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.button
          onClick={() => onScrollTo("about")}
          className="p-2 border border-[#ece2c6]/20 hover:border-[#d4af37]/55 text-[#ece2c6]/50 hover:text-[#d4af37] rounded-full bg-[#1c322b]/30 backdrop-blur-sm transition-colors focus:outline-none"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          aria-label="Scroll to content"
        >
          <ArrowDown size={18} />
        </motion.button>
      </div>
    </section>
  );
}
