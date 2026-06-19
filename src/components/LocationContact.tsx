import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Compass, ExternalLink } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function LocationContact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#0a1310] relative overflow-hidden text-[#ece2c6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold flex items-center justify-center gap-1.5">
            <Compass size={14} className="text-[#d4af37] animate-spin" style={{ animationDuration: "5s" }} />
            Visit Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#ece2c6] mt-2 tracking-tight">
            Location & Operating Hours
          </h2>
          <p className="text-[#ece2c6]/60 mt-3 sm:text-sm font-light">
            Conveniently located in the primary educational & commercial hub of Kota, Rajasthan. Drop by for a scenic meal or quiet evening escape.
          </p>
          <div className="h-0.5 w-16 bg-[#d4af37]/60 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Information Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Quick Contact Info Cards */}
            <div className="space-y-6">
              
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-4 p-5 bg-[#0b1713] rounded-xl border border-[#142d25] shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1c322b] flex items-center justify-center border border-[#d4af37]/20 flex-shrink-0 text-[#d4af37]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest font-mono text-[#ece2c6]/50">Find Us At</h4>
                  <p className="text-sm text-[#ece2c6] mt-1.5 leading-relaxed font-light font-sans">
                    {CONTACT_INFO.address}
                  </p>
                  <a
                    href={CONTACT_INFO.gmapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#d4af37] hover:text-[#c19b2e] cursor-pointer focus:outline-none uppercase tracking-wider font-bold"
                  >
                    <span>Get Directions on Google Search</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>

              {/* Phone Line */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex gap-4 p-5 bg-[#0b1713] rounded-xl border border-[#142d25] shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1c322b] flex items-center justify-center border border-[#d4af37]/20 flex-shrink-0 text-[#d4af37]">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest font-mono text-[#ece2c6]/50">Hotline & Bookings</h4>
                  <p className="text-base text-[#ece2c6] mt-1.5 font-mono font-bold">
                    {CONTACT_INFO.phone}
                  </p>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="inline-flex items-center gap-1.5 mt-2.5 text-xs text-[#d4af37] hover:text-[#c19b2e] cursor-pointer focus:outline-none uppercase tracking-wider font-bold"
                  >
                    <span>Click-to-Call Now</span>
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex gap-4 p-5 bg-[#0b1713] rounded-xl border border-[#142d25] shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1c322b] flex items-center justify-center border border-[#d4af37]/20 flex-shrink-0 text-[#d4af37]">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest font-mono text-[#ece2c6]/50">Email Support</h4>
                  <p className="text-sm text-[#ece2c6] mt-1.5 font-mono">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Operating Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="p-6 bg-[#0d1c17] rounded-xl border border-[#1c322b] shadow-lg text-sm flex flex-col justify-between"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-2 mb-4">
                <Clock size={16} /> Opening Hours
              </h4>
              <div className="space-y-3">
                {CONTACT_INFO.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-[#142d25] last:border-0 last:pb-0">
                    <span className="text-[#ece2c6]/75 font-mono text-xs">{h.days}</span>
                    <span className="font-bold text-[#ece2c6] text-xs font-mono">{h.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col overflow-hidden rounded-2xl border border-[#1c322b] shadow-2xl relative"
          >
            {/* Interactive Embedded Google Search Map */}
            <div className="flex-1 min-h-[380px] bg-stone-900 overflow-hidden relative">
              <iframe
                title="The Wallflower Kitchen Kota Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8399587428806!2d75.83296181140995!3d25.138531134267817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f6168f86f77cd%3A0xe5f9b4ced92fbef0!2sThe+Wallflower+Kitchen!5e0!3m2!1sen!2sin!4v1781840000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Helper Bar */}
            <div className="bg-[#0b1713] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1c322b]">
              <span className="text-[11px] text-[#ece2c6]/70 text-center sm:text-left leading-relaxed max-w-sm">
                Address: 5th Floor, 48, Rajeev Gandhi Nagar, Instrumentation Limited Colony, Kota, Rajasthan
              </span>
              <a
                href={CONTACT_INFO.gmapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#1c322b] hover:bg-[#254238] border border-[#d4af37]/20 hover:border-[#d4af37]/50 text-[#d4af37] text-xs font-mono font-bold tracking-wider uppercase rounded-md shadow-md transition-all whitespace-nowrap cursor-pointer"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
