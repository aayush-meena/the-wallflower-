import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function WhatsAppButton() {
  const message = "Hello! I would like to inquire about reserves or order updates at The Wallflower Kitchen.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-700/50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      id="whatsapp-floating-button"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulsating Ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping -z-10" />
      <MessageCircle size={26} className="fill-current" />
    </motion.a>
  );
}
