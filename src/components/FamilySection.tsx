import React from "react";
import { motion } from "framer-motion";
import { FAMILY_DETAILS, MEDIA } from "../data/weddingConfig";

export function FamilySection() {
  return (
    <section id="family-blessings" className="bg-ivory pt-6 sm:pt-10 pb-16 md:pb-24 relative z-0 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-10 sm:space-y-12 relative z-10">
        {/* Section Main Heading in Runiga Font */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 pt-2"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1e3a2f] font-normal tracking-wide">
            With Love &amp; Blessings
          </h2>
          <div className="flex items-center justify-center gap-2 w-32 sm:w-44 text-[#b88e44]/80 mx-auto py-0.5">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b88e44]" />
            <span className="text-xs leading-none">&#10022;</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b88e44]" />
          </div>
          <p className="font-serif text-xs sm:text-sm tracking-[0.24em] uppercase text-[#a3702c] font-medium">
            Our Families &amp; Well Wishers
          </p>
        </motion.div>

        {/* 1. With Best Compliments */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal">
            With Best Compliments
          </h3>
          <div className="space-y-1 sm:space-y-1.5 font-serif text-sm sm:text-base md:text-lg text-[#7c2635] font-medium leading-relaxed">
            {FAMILY_DETAILS.compliments.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        </motion.div>

        {/* 2. Maternal Side */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2.5 max-w-lg mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal">
            Maternal Side
          </h3>
          <div className="font-serif text-sm sm:text-base md:text-lg text-[#7c2635] font-medium leading-relaxed space-y-1">
            <p className="font-semibold text-[#1e3a2f]">
              {FAMILY_DETAILS.maternal_side.elders}
            </p>
            <p>{FAMILY_DETAILS.maternal_side.family}</p>
          </div>
        </motion.div>

        {/* 3. Welcome By */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal">
            Welcome By
          </h3>
          <div className="space-y-1 sm:space-y-1.5 font-serif text-sm sm:text-base md:text-lg text-[#7c2635] font-medium leading-relaxed">
            {FAMILY_DETAILS.welcome_by.map((item, idx) => (
              <p key={idx}>{item.replace(/-/g, " \u2013 ")}</p>
            ))}
          </div>
        </motion.div>

        {/* 4. Special Request */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 max-w-lg mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal">
            Special Request
          </h3>
          <div className="space-y-1 font-serif text-sm sm:text-base md:text-lg text-[#7c2635] font-medium leading-relaxed">
            {FAMILY_DETAILS.special_request.map((item, idx) => (
              <p key={idx}>{item.replace(/-/g, " \u2013 ")}</p>
            ))}
          </div>
        </motion.div>

        {/* 5. Sharing The Joy */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 max-w-lg mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal">
            Sharing the Joy
          </h3>
          <div className="space-y-1 font-serif text-sm sm:text-base md:text-lg text-[#1e3a2f] font-medium leading-relaxed">
            {FAMILY_DETAILS.sharing_the_joy.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        </motion.div>

        {/* 6. Awaiting your Presence */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 max-w-lg mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal">
            Awaiting your Presence
          </h3>
          <div className="space-y-1 font-serif text-sm sm:text-base md:text-lg text-[#7c2635] font-medium leading-relaxed">
            {FAMILY_DETAILS.awaiting_presence.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        </motion.div>

        {/* 7. Sweet Request */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-2 pb-1"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal mb-1">
            Sweet Request
          </h3>
          <p className="font-serif font-semibold text-[#7c2635] text-base sm:text-lg md:text-xl tracking-wide mt-1">
            {FAMILY_DETAILS.sweet_request.name}
          </p>
        </motion.div>

        {/* 8. Gazing Eyelids */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-1 max-w-lg mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal">
            Gazing Eyelids
          </h3>
          <p className="font-serif text-sm sm:text-base md:text-lg text-[#1e3a2f] font-medium leading-relaxed">
            {FAMILY_DETAILS.gazing_eyelids.join(", ")}
          </p>
        </motion.div>

        {/* 9. Samdhi Pravar */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2.5 max-w-xl mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal">
            Samdhi Pravar
          </h3>
          <p className="font-serif text-sm sm:text-base md:text-lg text-[#7c2635] font-medium leading-relaxed">
            {FAMILY_DETAILS.samdhi_pravar}
          </p>
        </motion.div>

        {/* 10. Business Concerns - Royal Gift Frame */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-md sm:max-w-lg mx-auto pt-4"
        >
          {/* Frame Backdrop */}
          <img
            src={MEDIA.giftFrame}
            alt="Business Concerns Embroidered Frame"
            className="w-full h-auto block select-none pointer-events-none drop-shadow-md"
          />

          {/* Business Concerns Text Nested Inside the Linen Canvas */}
          <div className="absolute inset-x-[15%] top-[19%] bottom-[16%] flex flex-col items-center justify-center text-center px-2 select-none">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal mb-1">
              Business Concerns
            </h3>

            <div className="flex items-center justify-center gap-2 w-32 sm:w-44 text-[#b88e44]/80 mb-3 sm:mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b88e44]" />
              <span className="text-[10px] leading-none">&#10022;</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b88e44]" />
            </div>

            <div className="space-y-1.5 sm:space-y-2.5 font-serif text-xs sm:text-sm md:text-base text-[#1e3a2f] font-bold leading-snug">
              {FAMILY_DETAILS.business_concerns.map((name, i) => (
                <p key={i} className="whitespace-nowrap tracking-wide">
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 11. RSVP Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-4 space-y-2 max-w-md mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7d6736] tracking-wide font-normal">
            RSVP
          </h3>
          <div className="space-y-1.5 font-serif text-sm sm:text-base md:text-lg text-[#1e3a2f] font-semibold">
            {FAMILY_DETAILS.rsvp.map((contact, idx) => (
              <p key={idx}>
                <span className="text-[#7c2635]">{contact.name}</span> &ndash; {contact.phones}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
