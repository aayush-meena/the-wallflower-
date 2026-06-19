import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, User, Phone, Clock, Users, MessageSquare, Check, ClipboardCopy, Trash2, Ticket, Sparkles, UtensilsCrossed } from "lucide-react";
import { CONTACT_INFO, MENU_ITEMS } from "../data";
import { Reservation } from "../types";

interface ReservationSectionProps {
  preOrderItems: { itemId: string; name: string; quantity: number; price: number }[];
  clearPreOrderCart: () => void;
}

export default function ReservationSection({ preOrderItems, clearPreOrderCart }: ReservationSectionProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [specialRequests, setSpecialRequests] = useState("");
  
  const [pastBookings, setPastBookings] = useState<Reservation[]>([]);
  const [confirmedReservation, setConfirmedReservation] = useState<Reservation | null>(null);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    // Load local bookings history
    const stored = localStorage.getItem("wallflower-bookings");
    if (stored) {
      try {
        setPastBookings(JSON.parse(stored));
      } catch (e) {
        setPastBookings([]);
      }
    }
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText("");

    if (!name.trim()) {
      setErrorText("Please enter a valid name for the reservation.");
      return;
    }
    if (!phone.replace(/[^0-9]/g, "").length || phone.length < 10) {
      setErrorText("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!date) {
      setErrorText("Please select a date for your visit.");
      return;
    }
    if (!time) {
      setErrorText("Please select a dining time slot.");
      return;
    }

    const bookingId = "WF-" + Math.floor(100000 + Math.random() * 900000).toString(36).toUpperCase().substring(0, 6);
    
    const newBooking: Reservation = {
      id: bookingId,
      name,
      phone,
      date,
      time,
      guests,
      specialRequests,
      preOrderItems: preOrderItems.length > 0 ? [...preOrderItems] : undefined,
      status: "confirmed",
      createdAt: new Date().toISOString()
    };

    const updatedBookings = [newBooking, ...pastBookings];
    setPastBookings(updatedBookings);
    localStorage.setItem("wallflower-bookings", JSON.stringify(updatedBookings));

    // Open ticket modal / confirmation state
    setConfirmedReservation(newBooking);

    // Clear form inputs
    setName("");
    setPhone("");
    setDate("");
    setTime("");
    setGuests(2);
    setSpecialRequests("");
    // Clear pre-order selection
    clearPreOrderCart();
  };

  const deleteReservation = (id: string) => {
    const next = pastBookings.filter(b => b.id !== id);
    setPastBookings(next);
    localStorage.setItem("wallflower-bookings", JSON.stringify(next));
  };

  const getSubtotal = (items?: { price: number; quantity: number }[]) => {
    if (!items) return 0;
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  return (
    <section
      id="reservation"
      className="py-24 bg-[#0b1713] relative overflow-hidden text-[#ece2c6]"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#d4af37]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold flex items-center justify-center gap-1.5">
            <Ticket size={14} className="text-[#d4af37]" />
            Table Booking Portal
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#ece2c6] mt-2 tracking-tight">
            Reserve An Unforgettable Evening
          </h2>
          <p className="text-[#ece2c6]/60 mt-3 sm:text-sm font-light">
            Skip the queues and secure prime panoramic rooftop views at Kota. Complete the booking form below to receive a digital entry pass instantly.
          </p>
          <div className="h-0.5 w-16 bg-[#d4af37]/60 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Reservation Booking Form */}
          <div className="lg:col-span-7 bg-[#0d1c17] border border-[#1c322b] rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Sparkles size={120} className="text-[#d4af37]" />
            </div>

            <h3 className="text-xl font-bold mb-8 flex items-center gap-2.5">
              <Calendar size={22} className="text-[#d4af37]" />
              Online Table Booking Room
            </h3>

            {errorText && (
              <div className="mb-6 p-4 bg-rose-950/40 border border-rose-500/30 text-rose-300 text-sm rounded-lg font-light">
                {errorText}
              </div>
            )}

            <form onSubmit={handleBookingSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#ece2c6]/60 mb-2 font-semibold flex items-center gap-1.5">
                    <User size={13} className="text-[#d4af37]" /> Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Manish Meena"
                    className="w-full bg-[#1c322b]/45 border border-[#142d25] rounded-lg px-4 py-3 text-sm text-[#ece2c6] focus:outline-none focus:border-[#d4af37] transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#ece2c6]/60 mb-2 font-semibold flex items-center gap-1.5">
                    <Phone size={13} className="text-[#d4af37]" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 80790 55870"
                    className="w-full bg-[#1c322b]/45 border border-[#142d25] rounded-lg px-4 py-3 text-sm text-[#ece2c6] focus:outline-none focus:border-[#d4af37] transition-all font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Date */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#ece2c6]/60 mb-2 font-semibold flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#d4af37]" /> Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#1c322b]/45 border border-[#142d25] rounded-lg px-4 py-3 text-sm text-[#ece2c6] focus:outline-none focus:border-[#d4af37] transition-all"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#ece2c6]/60 mb-2 font-semibold flex items-center gap-1.5">
                    <Clock size={13} className="text-[#d4af37]" /> Preferred Hour
                  </label>
                  <select
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#1c322b]/45 border border-[#142d25] rounded-lg px-4 py-3 text-sm text-[#ece2c6] focus:outline-none focus:border-[#d4af37] transition-all appearance-none"
                  >
                    <option value="" className="bg-[#0b1713]">Select Hour</option>
                    <option value="12:00 PM" className="bg-[#0b1713]">12:00 PM (Lunch)</option>
                    <option value="01:30 PM" className="bg-[#0b1713]">01:30 PM</option>
                    <option value="03:00 PM" className="bg-[#0b1713]">03:00 PM</option>
                    <option value="05:30 PM" className="bg-[#0b1713]">05:30 PM (Sunset High Tea)</option>
                    <option value="07:00 PM" className="bg-[#0b1713]">07:00 PM (Dinner Hour)</option>
                    <option value="08:30 PM" className="bg-[#0b1713]">08:30 PM</option>
                    <option value="10:00 PM" className="bg-[#0b1713]">10:00 PM</option>
                    <option value="11:00 PM" className="bg-[#0b1713]">11:00 PM</option>
                  </select>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#ece2c6]/60 mb-2 font-semibold flex items-center gap-1.5">
                    <Users size={13} className="text-[#d4af37]" /> Number of Guests
                  </label>
                  <select
                    required
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-[#1c322b]/45 border border-[#142d25] rounded-lg px-4 py-3 text-sm text-[#ece2c6] focus:outline-none focus:border-[#d4af37] transition-all appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(num => (
                      <option key={num} value={num} className="bg-[#0b1713]">
                        {num} {num === 1 ? "Person" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Display items pre-ordered in Menu Tab */}
              {preOrderItems.length > 0 && (
                <div className="bg-[#1c322b]/30 border border-[#d4af37]/20 rounded-xl p-5">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1.5 mb-3.5">
                    <UtensilsCrossed size={14} />
                    Linked Pre-order Cart ({preOrderItems.length} dishes)
                  </h4>
                  <div className="space-y-2 text-xs">
                    {preOrderItems.map(item => (
                      <div key={item.itemId} className="flex justify-between text-[#ece2c6]/80 font-mono">
                        <span className="font-light">{item.name} <span className="text-[#d4af37]">x {item.quantity}</span></span>
                        <span>₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                    <div className="border-t border-[#142d25] pt-2.5 mt-2.5 flex justify-between font-bold text-sm">
                      <span>Total Pre-Order:</span>
                      <span className="text-[#d4af37]">₹{getSubtotal(preOrderItems)}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#ece2c6]/60 mb-2 font-semibold flex items-center gap-1.5">
                  <MessageSquare size={13} className="text-[#d4af37]" /> Special Requests
                </label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Birthday setup, candle lights, sunset table face selection, food spice preferences..."
                  className="w-full bg-[#1c322b]/45 border border-[#142d25] rounded-lg p-4 text-sm text-[#ece2c6] focus:outline-none focus:border-[#d4af37] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4.5 bg-[#d4af37] hover:bg-[#c19b2e] text-[#0b1713] font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg hover:shadow-[#d4af37]/20 transition-all cursor-pointer focus:outline-none"
              >
                Confirm Booking & Generate Ticket
              </button>
            </form>
          </div>

          {/* Side Bookings Queue Tracker */}
          <div className="lg:col-span-5 space-y-8 font-sans">
            <div className="bg-[#0b1713] border border-[#1c322b] rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-base font-bold text-[#ece2c6] tracking-wide mb-6 flex items-center gap-2">
                <Ticket className="text-[#d4af37]" size={18} />
                My Active Table Bookings
              </h3>

              {pastBookings.length === 0 ? (
                <div className="text-center py-10 border border-dashed border-[#1c322b]/60 rounded-xl">
                  <p className="text-sm text-[#ece2c6]/40 font-light">No active reservations stored.</p>
                  <p className="text-xs text-[#d4af37]/50 font-mono mt-1">Book your table now to populate.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
                  {pastBookings.map((b) => (
                    <div
                      key={b.id}
                      className="p-5 bg-[#0d1c17] rounded-xl border border-[#142d25] hover:border-[#d4af37]/30 transition-all flex flex-col justify-between gap-3 shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm font-bold text-[#d4af37]">{b.id}</span>
                            <span className="px-2 py-0.5 bg-emerald-950 border border-emerald-500/25 text-[#ece2c6] text-[9px] font-mono font-bold rounded uppercase tracking-wider">
                              {b.status}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-[#ece2c6] mt-1">{b.name}</h4>
                        </div>
                        <button
                          onClick={() => deleteReservation(b.id)}
                          className="p-1.5 hover:bg-rose-950/30 text-[#ece2c6]/40 hover:text-rose-400 rounded transition-colors focus:outline-none cursor-pointer"
                          title="Delete / Cancel Booking"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs text-[#ece2c6]/75 font-mono border-t border-[#142821]/60 pt-3">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[9px] text-[#ece2c6]/40 uppercase tracking-widest leading-none">Guests</span>
                          <span>{b.guests} Persons</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[9px] text-[#ece2c6]/40 uppercase tracking-widest leading-none">Date / Time</span>
                          <span className="truncate">{b.date} &bull; {b.time}</span>
                        </div>
                      </div>

                      {b.preOrderItems && (
                        <div className="text-[11px] bg-[#1c322b]/20 p-2.5 rounded border border-[#142d25] font-mono text-[#ece2c6]/70">
                          <span className="block text-[9px] uppercase tracking-widest text-[#d4af37] font-semibold mb-1">Pre-ordered Dishes</span>
                          <p className="truncate">
                            {b.preOrderItems.map(p => `${p.name} (x${p.quantity})`).join(", ")}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* General hours help card */}
            <div className="bg-[#1c322b]/20 border border-[#d4af37]/15 rounded-2xl p-6 sm:p-8 space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-widest text-[#d4af37] font-semibold">Important Notes</h4>
              <ul className="text-xs text-[#ece2c6]/80 space-y-2.5 list-disc pl-4 font-light leading-relaxed">
                <li>Your reserved table will be held for up to 30 minutes from the scheduled dining hour.</li>
                <li>For any fast modification, you can reach out via direct WhatsApp button or Call.</li>
                <li>There are zero table fees. Online ticketing is absolutely free!</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Ticket Confirmation Dialog / Lightbox Modal Overlay */}
      <AnimatePresence>
        {confirmedReservation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setConfirmedReservation(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="w-full max-w-lg bg-[#ffffff] text-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-200 relative font-serif"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold Top Header Accent */}
              <div className="bg-[#0b1713] text-[#d4af37] py-6 px-8 flex items-center justify-between">
                <div>
                  <h4 className="text-[#ece2c6] text-xs font-mono uppercase tracking-widest font-bold">Rooftop Boarding Pass</h4>
                  <h3 className="text-lg font-bold tracking-wider uppercase font-sans mt-0.5">The Wallflower Kitchen</h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ece2c6]/50 block">Booking code</span>
                  <span className="text-base font-mono font-bold text-[#d4af37] tracking-wider">{confirmedReservation.id}</span>
                </div>
              </div>

              {/* Ticket Body layout */}
              <div className="p-8 space-y-6">
                
                <div className="text-center pb-4 border-b border-dashed border-stone-300">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#1c322b] text-[#d4af37] text-[10px] font-mono uppercase tracking-widest font-bold rounded-full shadow-inner mb-2.5">
                    <Check size={12} /> Reservation Confirmed
                  </span>
                  <h4 className="text-sm font-sans font-light text-stone-500">Welcome boarding,</h4>
                  <h3 className="text-2xl font-bold font-sans text-stone-800 tracking-tight mt-1">{confirmedReservation.name}</h3>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                  <div>
                    <span className="block text-[10px] text-stone-400 uppercase tracking-widest font-mono">Date</span>
                    <span className="font-sans font-semibold text-stone-800">{confirmedReservation.date}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-stone-400 uppercase tracking-widest font-mono">Dining Time</span>
                    <span className="font-sans font-semibold text-stone-800">{confirmedReservation.time}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-stone-400 uppercase tracking-widest font-mono">Guests count</span>
                    <span className="font-sans font-semibold text-stone-800">{confirmedReservation.guests} Persons</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-stone-400 uppercase tracking-widest font-mono">Phone Number</span>
                    <span className="font-sans font-semibold text-stone-800 font-mono">{confirmedReservation.phone}</span>
                  </div>
                </div>

                {confirmedReservation.preOrderItems && (
                  <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-xs font-mono text-stone-600">
                    <span className="block text-[9px] uppercase tracking-widest text-[#1c322b] font-bold mb-2">Pre-Ordered Food items</span>
                    {confirmedReservation.preOrderItems.map(p => (
                      <div key={p.itemId} className="flex justify-between items-center py-1 border-b border-stone-200/50 last:border-0 last:pb-0">
                        <span>{p.name} <span className="text-stone-400">x{p.quantity}</span></span>
                        <span className="font-semibold text-stone-800">₹{p.price * p.quantity}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-bold text-stone-800 pt-2.5 mt-2">
                      <span>Total Dinner Cost:</span>
                      <span>₹{getSubtotal(confirmedReservation.preOrderItems)}</span>
                    </div>
                  </div>
                )}

                {confirmedReservation.specialRequests && (
                  <div>
                    <span className="block text-[10px] text-stone-400 uppercase tracking-widest font-mono mb-1">Special Instruction</span>
                    <p className="text-xs text-stone-600 font-sans italic">&ldquo;{confirmedReservation.specialRequests}&rdquo;</p>
                  </div>
                )}

                {/* Simulated Barcode */}
                <div className="pt-4 flex flex-col items-center justify-center">
                  <div className="h-10 w-full bg-stone-900 flex gap-[2px] overflow-hidden rounded shadow-sm opacity-90 max-w-xs">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div
                        key={i}
                        className={`bg-white h-full`}
                        style={{
                          width: `${Math.floor(Math.sin(i * 1.5) * 3) + 4}px`,
                          opacity: i % 3 === 0 ? 0.35 : 1
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono tracking-[0.55em] text-stone-500 mt-2">
                    {confirmedReservation.id}
                  </span>
                </div>

              </div>

              {/* Bottom Instructions Card */}
              <div className="bg-stone-100 py-5 px-8 flex justify-between items-center border-t border-stone-200">
                <p className="text-[10px] text-stone-500 max-w-xs leading-relaxed font-sans">
                  Please show this pass code at the 5th-floor reception check-in. Have a lovely dinner experience!
                </p>
                <button
                  onClick={() => setConfirmedReservation(null)}
                  className="px-5 py-2.5 bg-[#0b1713] text-[#d4af37] font-semibold text-xs font-mono uppercase tracking-wider rounded-lg shadow cursor-pointer focus:outline-none"
                >
                  Done
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
