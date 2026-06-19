import { motion } from "motion/react";
import { Utensils, Compass, Award, Users, MapPin, Heart, Sparkles } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function AboutUs() {
  const highlights = [
    {
      icon: <Utensils className="text-[#d4af37]" size={22} />,
      title: "Delicious Multi-Cuisine Menu",
      desc: "An array of thoughtfully curated dishes ranging from smoky starters to delicious sizzlers and artisanal desserts."
    },
    {
      icon: <Compass className="text-[#d4af37]" size={22} />,
      title: "Stunning Rooftop Ambiance",
      desc: "Escape the city rush on our 5th-floor garden courtyard, decorated with lush greenery and warm ambient starbursts."
    },
    {
      icon: <Award className="text-[#d4af37]" size={22} />,
      title: "Fresh Ingredients & Expert Chefs",
      desc: "Our culinary craft is prepared fresh daily with top-tier locally sourced produce and traditional gourmet standards."
    },
    {
      icon: <Users className="text-[#d4af37]" size={22} />,
      title: "Perfect for Celebrations",
      desc: "Whether a birthday, romantic anniversary, or family get-together, enjoy custom setups and warm hospitality."
    },
    {
      icon: <MapPin className="text-[#d4af37]" size={22} />,
      title: "Prime Location in Kota",
      desc: "Conveniently situated in the bustling center of Rajeev Gandhi Nagar with spacious surroundings and lift access."
    },
    {
      icon: <Heart className="text-[#d4af37]" size={22} />,
      title: "Highly Rated by Customers",
      desc: "With a 4.3★ average score, we are praised for cozy vibes, unforgettable tastes, and highly responsive service."
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#0d1c17] relative overflow-hidden text-[#ece2c6]"
    >
      {/* Decorative Warm Backglows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-emerald-800/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Side Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#d4af37]/35 to-emerald-800/40 blur-md opacity-75" />
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 shadow-2xl border border-[#1c322b]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                alt="The Wallflower Kitchen Seating Setup"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0b1713]/40 mix-blend-multiply" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0b1713]/80 backdrop-blur-md rounded-lg border border-[#1c322b]">
                <h4 className="text-[#d4af37] text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-1.5">
                  <Sparkles size={14} className="animate-spin" style={{ animationDuration: "3s" }} />
                  Atmosphere
                </h4>
                <p className="text-sm text-[#ece2c6]/80 leading-relaxed italic">
                  &ldquo;A panoramic view of the Kota city line set against cozy ambient lanterns.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Description Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold">
              Discover Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#ece2c6] mt-2 tracking-tight">
              A Unique Rooftop Experience
            </h2>
            <div className="h-1 w-20 bg-[#d4af37] rounded mt-4 mb-6" />
            
            <p className="text-base sm:text-lg text-[#ece2c6]/80 leading-relaxed font-light">
              The Wallflower Kitchen offers a unique rooftop dining experience where exceptional food meets a relaxing, plant-filled ambiance. Whether you are seeking a serene family dinner, a warm romantic evening, or a stellar gathering of close friends, our carefully crafted multi-cuisine menu and welcoming space make every visit truly unforgettable.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 items-center border-t border-[#1c322b] pt-8">
              <div>
                <span className="block text-3xl font-extrabold text-[#d4af37]">5th</span>
                <span className="text-xs uppercase tracking-widest text-[#ece2c6]/60 font-mono">Floor Oasis</span>
              </div>
              <div className="h-8 w-px bg-[#1c322b]" />
              <div>
                <span className="block text-3xl font-extrabold text-[#d4af37]">4.3★</span>
                <span className="text-xs uppercase tracking-widest text-[#ece2c6]/60 font-mono">Customer Rating</span>
              </div>
              <div className="h-8 w-px bg-[#1c322b]" />
              <div>
                <span className="block text-3xl font-extrabold text-[#d4af37]">100%</span>
                <span className="text-xs uppercase tracking-widest text-[#ece2c6]/60 font-mono">Veg Multi-Cuisine</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold">
              What Stands Us Apart
            </span>
            <h3 className="text-2xl sm:text-3xl font-sans font-bold mt-2">
              Why Diners Love The Wallflower Kitchen
            </h3>
            <p className="text-[#ece2c6]/70 mt-3 sm:text-sm font-light">
              We take pride in crafting a holistic dining journey that blends culinary innovation with aesthetic grace in Kota.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#0b1713] border border-[#142821] hover:border-[#d4af37]/35 p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg hover:shadow-black/20"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1c322b] flex items-center justify-center mb-6 border border-[#d4af37]/20">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-[#ece2c6] tracking-wide mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-[#ece2c6]/70 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
