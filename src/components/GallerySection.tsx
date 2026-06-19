import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, Star, Sparkles, Navigation } from "lucide-react";
import { GALLERY_ITEMS } from "../data";
import { GalleryItem } from "../types";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { label: "All Photos", id: "all" },
    { label: "Rooftop Seating", id: "seating" },
    { label: "Food Photography", id: "food" },
    { label: "Evening Lighting", id: "lighting" },
    { label: "Gatherings", id: "gatherings" },
    { label: "Restaurant Interiors", id: "interiors" }
  ];

  const filteredItems = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    const fullIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);
    if (fullIndex !== -1) {
      setLightboxIndex(fullIndex);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-[#0a1310] relative overflow-hidden text-[#ece2c6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold flex items-center justify-center gap-1.5">
            <Sparkles size={14} className="text-[#d4af37] animate-pulse" />
            Visual Escape
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#ece2c6] mt-2 tracking-tight">
            Ambience Gallery
          </h2>
          <p className="text-[#ece2c6]/60 mt-3 sm:text-sm font-light">
            Take a virtual tour of our 5th-floor garden workspace, cozy evening lighting elements, customer events, and premium food presentation.
          </p>
          <div className="h-0.5 w-16 bg-[#d4af37]/60 mx-auto mt-6" />
        </div>

        {/* Gallery Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer focus:outline-none border ${
                activeCategory === cat.id
                  ? "bg-[#1c322b] text-[#d4af37] border-[#d4af37]/50 shadow"
                  : "text-[#ece2c6]/60 hover:text-white border-transparent hover:bg-[#142d25]/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-950 border border-[#142821] hover:border-[#d4af37]/30 shadow-md hover:shadow-2xl cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ filter: "brightness(0.9) contrast(1.02)" }}
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-[#0b1713]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10">
                  <div className="flex justify-end">
                    <div className="p-2 bg-[#1c322b] rounded-lg text-[#d4af37] border border-[#d4af37]/25 shadow-md">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#d4af37]">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-[#ece2c6] mt-1.5 tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Immersive Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4"
              onClick={closeLightbox}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between py-2 px-4 text-[#ece2c6] relative z-10">
                <div>
                  <span className="text-xs uppercase tracking-widest font-mono text-[#d4af37]">
                    {GALLERY_ITEMS[lightboxIndex].category}
                  </span>
                  <h4 className="text-base font-semibold tracking-wide mt-0.5">
                    {GALLERY_ITEMS[lightboxIndex].title}
                  </h4>
                </div>
                <button
                  onClick={closeLightbox}
                  className="p-2.5 bg-stone-900 border border-stone-800 text-[#ece2c6] rounded-full hover:bg-stone-800 transition-colors cursor-pointer focus:outline-none"
                  aria-label="Close Lightbox"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main Photo Content */}
              <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full group">
                <button
                  onClick={showPrev}
                  className="absolute left-4 z-20 p-3 bg-stone-900/60 hover:bg-stone-900 text-[#ece2c6] hover:text-[#d4af37] rounded-full border border-stone-800 transition-colors focus:outline-none cursor-pointer"
                  aria-label="Previous Image"
                >
                  <Navigation size={18} className="transform -rotate-90" />
                </button>

                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={GALLERY_ITEMS[lightboxIndex].image}
                  alt={GALLERY_ITEMS[lightboxIndex].title}
                  className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl border border-stone-900"
                  onClick={(e) => e.stopPropagation()}
                  referrerPolicy="no-referrer"
                />

                <button
                  onClick={showNext}
                  className="absolute right-4 z-20 p-3 bg-stone-900/60 hover:bg-stone-900 text-[#ece2c6] hover:text-[#d4af37] rounded-full border border-stone-800 transition-colors focus:outline-none cursor-pointer"
                  aria-label="Next Image"
                >
                  <Navigation size={18} className="transform rotate-90" />
                </button>
              </div>

              {/* Lightbox Footer count */}
              <div className="text-center text-[#ece2c6]/40 text-xs font-mono py-3">
                {lightboxIndex + 1} / {GALLERY_ITEMS.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
