import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ShoppingBag, Leaf, Sparkles, Check } from "lucide-react";
import { MENU_ITEMS } from "../data";
import { MenuItem } from "../types";

interface MenuSectionProps {
  onPreOrderChange: (items: { itemId: string; name: string; quantity: number; price: number }[]) => void;
  preOrderCart: { [key: string]: number };
  setPreOrderCart: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
  onGoToReservation: () => void;
}

export default function MenuSection({
  onPreOrderChange,
  preOrderCart,
  setPreOrderCart,
  onGoToReservation
}: MenuSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { label: "Full Menu", id: "all" },
    { label: "Signatures", id: "signatures" },
    { label: "Starters", id: "starters" },
    { label: "Mains", id: "mains" },
    { label: "Mocktails", id: "beverages" },
    { label: "Desserts", id: "desserts" }
  ];

  const filteredItems = activeTab === "all"
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeTab);

  const handleQuantityChange = (itemId: string, itemPrice: number, itemName: string, change: number) => {
    setPreOrderCart(prev => {
      const currentQty = prev[itemId] || 0;
      const nextQty = Math.max(0, currentQty + change);
      
      const nextCart = { ...prev };
      if (nextQty === 0) {
        delete nextCart[itemId];
      } else {
        nextCart[itemId] = nextQty;
      }

      // Notify parent about cart updates
      const updatedItems = Object.entries(nextCart).map(([id, qty]) => {
        const found = MENU_ITEMS.find(m => m.id === id);
        return {
          itemId: id,
          name: found?.name || "",
          quantity: qty as number,
          price: found?.price || 0
        };
      });
      onPreOrderChange(updatedItems);
      
      return nextCart;
    });
  };

  const totalPreOrderedCount = Object.values(preOrderCart).reduce((sum, q) => sum + q, 0);
  const totalCartValue = Object.entries(preOrderCart).reduce((sum, [id, q]) => {
    const item = MENU_ITEMS.find(m => m.id === id);
    return sum + (item ? item.price * q : 0);
  }, 0);

  return (
    <section
      id="menu"
      className="py-24 bg-[#0a1310] relative overflow-hidden text-[#ece2c6]"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-emerald-950/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-stone-900/30 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold flex items-center justify-center gap-1.5">
            <Sparkles size={14} className="text-[#d4af37] animate-pulse" />
            Culinary Craftsmanship
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#ece2c6] mt-2 tracking-tight">
            Explore Our Signature Dishes
          </h2>
          <p className="text-[#ece2c6]/60 mt-3 sm:text-sm font-light">
            Indulge in a premium, multi-cuisine menu designed by executive chefs using fresh, high-quality ingredients, specifically compiled for Kota's food lovers.
          </p>
          <div className="h-0.5 w-16 bg-[#d4af37]/60 mx-auto mt-6" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:gap-3 bg-[#0d1c17] p-2 rounded-full max-w-2xl mx-auto border border-[#142d25] shadow-lg">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer focus:outline-none ${
                activeTab === cat.id
                  ? "bg-[#d4af37] text-[#0b1713]"
                  : "text-[#ece2c6]/75 hover:bg-[#142d25] hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const quantityInCart = preOrderCart[item.id] || 0;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-[#0b1713] rounded-2xl border border-[#142821] hover:border-[#d4af37]/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-xl hover:shadow-black/20"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-900 border-b border-[#142821]">
                    {/* Badge */}
                    {item.tag && (
                      <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#d4af37] text-[#0b1713] text-[10px] uppercase font-mono font-bold rounded shadow-md tracking-wider">
                        {item.tag}
                      </span>
                    )}
                    {/* Vegetarian Indicator */}
                    {item.isVegetarian && (
                      <div className="absolute top-4 right-4 z-10 p-1.5 bg-[#0b1713]/80 backdrop-blur-md border border-emerald-600 rounded flex items-center gap-1 shadow-md">
                        <Leaf size={14} className="text-emerald-500 fill-emerald-500/10" />
                        <span className="text-[9px] font-bold text-emerald-400 font-mono tracking-widest uppercase">100% Veg</span>
                      </div>
                    )}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-bold text-[#ece2c6] group-hover:text-[#d4af37] transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <span className="text-lg font-bold font-mono text-[#d4af37] whitespace-nowrap">
                          ₹{item.price}
                        </span>
                      </div>
                      <p className="text-xs text-[#ece2c6]/60 leading-relaxed font-light mt-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Pre-Order Actions */}
                    <div className="mt-6 pt-5 border-t border-[#142821] flex items-center justify-between gap-4">
                      <span className="text-[10px] font-mono text-[#ece2c6]/40 uppercase tracking-widest">
                        Add to pre-order
                      </span>

                      {quantityInCart === 0 ? (
                        <button
                          onClick={() => handleQuantityChange(item.id, item.price, item.name, 1)}
                          className="flex items-center gap-1.5 px-4 py-2 bg-[#1c322b] hover:bg-[#254238] border border-[#d4af37]/20 hover:border-[#d4af37]/45 text-[#ece2c6] text-xs font-mono tracking-wider uppercase font-semibold rounded-lg transition-all cursor-pointer focus:outline-none"
                        >
                          <Plus size={14} className="text-[#d4af37]" />
                          Pre-Order
                        </button>
                      ) : (
                        <div className="flex items-center bg-[#1c322b] border border-[#d4af37]/30 rounded-lg overflow-hidden shadow-inner">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.price, item.name, -1)}
                            className="p-2 hover:bg-[#254238] text-[#ece2c6] transition-colors focus:outline-none cursor-pointer"
                            aria-label="Decrease"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 text-xs font-bold font-mono text-[#d4af37]">
                            {quantityInCart}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.price, item.name, 1)}
                            className="p-2 hover:bg-[#254238] text-[#ece2c6] transition-colors focus:outline-none cursor-pointer"
                            aria-label="Increase"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Floating Preorder tray */}
        <AnimatePresence>
          {totalPreOrderedCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed bottom-6 left-4 right-4 md:left-auto md:right-32 z-30 max-w-md bg-[#0d1c17] border-2 border-[#d4af37] rounded-xl shadow-2xl p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-[#d4af37]">
                    <ShoppingBag size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#ece2c6] flex items-center gap-1.5">
                      Pre-order Selection
                      <span className="px-1.5 py-0.5 bg-emerald-800 text-[10px] font-mono rounded-full font-bold text-white">
                        {totalPreOrderedCount}
                      </span>
                    </h4>
                    <p className="text-xs text-[#d4af37] font-mono mt-0.5">
                      Subtotal: ₹{totalCartValue}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onGoToReservation}
                  className="flex items-center gap-1 px-4 py-2.5 bg-[#d4af37] hover:bg-[#c19b2e] text-[#0b1713] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer focus:outline-none"
                >
                  Book Table & Confirm
                </button>
              </div>
              <p className="text-[10px] text-[#ece2c6]/60 leading-relaxed font-light mt-2.5 border-t border-[#142821] pt-2">
                Your pre-ordered items will be prepared fresh and served automatically upon your table seating check-in.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
