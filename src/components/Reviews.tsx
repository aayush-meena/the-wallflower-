import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageSquare, Quote, PenTool, CheckCircle } from "lucide-react";
import { GOOGLE_REVIEWS, CONTACT_INFO } from "../data";
import { Review } from "../types";

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Load reviews from local storage, fallback to baseline google reviews
    const stored = localStorage.getItem("wallflower-reviews");
    if (stored) {
      try {
        setReviews(JSON.parse(stored));
      } catch (e) {
        setReviews(GOOGLE_REVIEWS);
      }
    } else {
      setReviews(GOOGLE_REVIEWS);
      localStorage.setItem("wallflower-reviews", JSON.stringify(GOOGLE_REVIEWS));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) return;

    const newReview: Review = {
      id: "ur_" + Date.now(),
      name: newName,
      rating: newRating,
      text: newText,
      date: "Just now",
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(newName)}&backgroundColor=1c322b&foregroundColor=ece2c6`,
      source: "user"
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("wallflower-reviews", JSON.stringify(updatedReviews));

    setSubmitSuccess(true);
    setNewName("");
    setNewText("");
    setNewRating(5);

    setTimeout(() => {
      setSubmitSuccess(false);
      setShowAddForm(false);
    }, 2500);
  };

  // Compute stats on the fly
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : CONTACT_INFO.rating.toFixed(1);

  return (
    <section
      id="reviews"
      className="py-24 bg-[#0d1c17] relative overflow-hidden text-[#ece2c6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1.5">
              <MessageSquare size={14} className="text-[#d4af37]" />
              Patron Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#ece2c6] mt-2 tracking-tight">
              What Our Visitors Are Saying
            </h2>
            <p className="text-[#ece2c6]/60 mt-3 sm:text-sm font-light max-w-2xl">
              Discover authentic reviews and feedback from our respected guests detailing their experiences with the gourmet signature menu, rooftop city views, and luxurious lighting at Kota.
            </p>
          </div>

          {/* Rating Snapshot Card */}
          <div className="lg:col-span-5 bg-[#0b1713] border border-[#1c322b] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-center sm:text-left">
              <span className="block text-5xl font-sans font-extrabold text-[#d4af37] tracking-tight">{averageRating}</span>
              <div className="flex items-center justify-center sm:justify-start gap-1 py-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={16}
                    className={`${
                      s <= Math.round(Number(averageRating))
                        ? "text-[#d4af37] fill-[#d4af37]"
                        : "text-stone-700"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs uppercase tracking-widest text-[#ece2c6]/40 font-mono">
                {reviews.length} Verified Reviews
              </span>
            </div>

            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-[#d4af37] hover:bg-[#c19b2e] text-[#0b1713] font-mono font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer focus:outline-none"
            >
              <PenTool size={14} />
              Write Review
            </button>
          </div>
        </div>

        {/* Dynamic Review Submission Form */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-[#0b1713] border-2 border-[#d4af37]/45 rounded-2xl p-6 mb-12 shadow-2xl relative overflow-hidden"
            >
              {submitSuccess ? (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                  <CheckCircle size={48} className="text-[#d4af37] animate-bounce mb-3" />
                  <h4 className="text-lg font-bold text-[#ece2c6]">Thank you so much!</h4>
                  <p className="text-sm text-[#ece2c6]/60 mt-1 max-w-sm">
                    Your lovely rating and review have been published successfully to our testimonials list.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-lg font-bold text-[#ece2c6] flex items-center gap-2">
                    <PenTool size={18} className="text-[#d4af37]" />
                    Share Your Dining Experience
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#ece2c6]/60 mb-2 font-semibold">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="e.g. Manish Meena"
                        className="w-full bg-[#1c322b]/40 border border-[#142d25] rounded-lg px-4 py-3 text-sm text-[#ece2c6] focus:outline-none focus:border-[#d4af37] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#ece2c6]/60 mb-2 font-semibold">
                        Your Rating
                      </label>
                      <div className="flex items-center gap-2 pt-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setNewRating(s)}
                            className="p-1 cursor-pointer focus:outline-none"
                            aria-label={`Rate ${s} stars`}
                          >
                            <Star
                              size={24}
                              className={`${
                                s <= newRating
                                  ? "text-[#d4af37] fill-[#d4af37]"
                                  : "text-stone-700 hover:text-stone-500"
                              } transition-colors`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#ece2c6]/60 mb-2 font-semibold">
                      Your Comments
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                      placeholder="Highlight our food quality, rooftop atmosphere, seating comfort, or city coordinates..."
                      className="w-full bg-[#1c322b]/40 border border-[#142d25] rounded-lg p-4 text-sm text-[#ece2c6] focus:outline-none focus:border-[#d4af37] transition-all"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="px-5 py-2.5 border border-[#1c322b] hover:bg-stone-900/30 text-[#ece2c6]/60 rounded-lg text-xs font-mono uppercase tracking-wider cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#d4af37] hover:bg-[#c19b2e] text-[#0b1713] font-bold rounded-lg text-xs font-mono uppercase tracking-wider cursor-pointer"
                    >
                      Publish Review
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* reviews Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0b1713] border border-[#142821] p-8 rounded-2xl flex flex-col justify-between relative shadow-lg group hover:border-[#d4af37]/25 transition-all"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute right-6 top-6 text-[#1c322b]/35 group-hover:text-[#d4af37]/5 transition-colors">
                <Quote size={40} className="fill-current" />
              </div>

              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      className={`${
                        star <= rev.rating
                          ? "text-[#d4af37] fill-[#d4af37]"
                          : "text-stone-800"
                      }`}
                    />
                  ))}
                  <span className="text-[10px] font-mono font-bold text-[#d4af37] ml-1.5 uppercase bg-[#1c322b]/55 px-1.5 py-0.5 rounded border border-[#d4af37]/15">
                    {rev.rating}.0
                  </span>
                </div>

                <p className="text-sm text-[#ece2c6]/85 font-light leading-relaxed italic pr-4">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4.5 mt-8 pt-6 border-t border-[#142821]/80">
                <img
                  src={rev.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#d4af37]/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#ece2c6] tracking-wide">
                    {rev.name}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5 text-[10px] font-mono text-[#ece2c6]/40 uppercase tracking-widest font-light">
                    <span>{rev.date}</span>
                    <span>•</span>
                    <span className="text-[#d4af37]/80">
                      {rev.source === "google" ? "Google Review" : "Diner Review"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
