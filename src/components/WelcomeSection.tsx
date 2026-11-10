import React from "react";
import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "../data/weddingConfig";

function formatLineageColumn(text: string) {
  if (text.includes(" - ")) {
    const [first, second] = text.split(" - ");
    return (
      <div className="flex flex-col items-center leading-[1.45]">
        <span className="whitespace-nowrap">{first} &ndash;</span>
        <span className="whitespace-nowrap">{second}</span>
      </div>
    );
  }
  return <span className="whitespace-nowrap leading-[1.45]">{text}</span>;
}

export function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="section-padding bg-ivory pt-10 md:pt-16 relative pb-14 md:pb-20 overflow-hidden"
    >
      <div className="max-w-2xl w-full mx-auto text-center relative z-10 px-2 sm:px-6">
        {/* Divine Invocation & Quote - Exact Typography Matching Reference */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-3 sm:space-y-4"
        >
          <p className="font-serif text-sm sm:text-base md:text-lg tracking-[0.22em] text-[#a3702c] font-normal">
            {WEDDING_CONFIG.ramji_mantra}
          </p>

          <p className="font-serif text-base sm:text-xl md:text-2xl text-[#1e3a2f] max-w-md sm:max-w-lg mx-auto leading-[1.45] font-medium px-2">
            &ldquo;No Measure Of Time With You Will Be<br />
            Long Enough, But Let&rsquo;s Start With<br />
            Forever&rdquo;
          </p>

          {/* Gold Diamond Divider */}
          <div className="flex items-center justify-center gap-2.5 max-w-[220px] sm:max-w-[280px] mx-auto py-1">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#a3702c]/80" />
            <span className="w-2 h-2 rotate-45 bg-[#a3702c]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#a3702c]/80" />
          </div>
        </motion.div>

        {/* 2-Column Couple Lineage Presentation - Open on Ivory BG */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 md:mt-10 pt-2 relative"
        >
          <div className="relative grid grid-cols-2 gap-1 sm:gap-4 md:gap-5 items-start max-w-md sm:max-w-lg mx-auto">
            {/* Center Vertical Gold Divider Line with Hollow Diamond */}
            <div
              className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-[#a3702c]/60 pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-[#a3702c] bg-ivory" />
            </div>

            {/* Bride Column (Pooja) */}
            <div className="flex flex-col items-center text-center px-0.5 sm:px-2 space-y-2">
              <h3 className="font-couple text-[#7c2635] text-4xl sm:text-5xl md:text-6xl font-normal leading-tight">
                {WEDDING_CONFIG.couple_name_1}
              </h3>

              <div className="space-y-3.5 pt-1 w-full">
                <div>
                  <span className="font-serif text-[11px] sm:text-xs tracking-wider uppercase text-[#a3702c] font-semibold block mb-0.5">
                    GD/O
                  </span>
                  <div className="font-serif text-[11px] sm:text-sm md:text-base text-[#1e3a2f] font-medium">
                    {formatLineageColumn(WEDDING_CONFIG.bride_grand_parents)}
                  </div>
                </div>

                <div>
                  <span className="font-serif text-[11px] sm:text-xs tracking-wider uppercase text-[#a3702c] font-semibold block mb-0.5">
                    D/O
                  </span>
                  <div className="font-serif text-[11px] sm:text-sm md:text-base text-[#1e3a2f] font-medium">
                    {formatLineageColumn(WEDDING_CONFIG.bride_parents)}
                  </div>
                </div>
              </div>
            </div>

            {/* Groom Column (Siddhart) */}
            <div className="flex flex-col items-center text-center px-0.5 sm:px-2 space-y-2">
              <h3 className="font-couple text-[#7c2635] text-4xl sm:text-5xl md:text-6xl font-normal leading-tight">
                {WEDDING_CONFIG.couple_name_2}
              </h3>

              <div className="space-y-3.5 pt-1 w-full">
                <div>
                  <span className="font-serif text-[11px] sm:text-xs tracking-wider uppercase text-[#a3702c] font-semibold block mb-0.5">
                    GS/O
                  </span>
                  <div className="font-serif text-[11px] sm:text-sm md:text-base text-[#1e3a2f] font-medium">
                    {formatLineageColumn(WEDDING_CONFIG.groom_grand_parents)}
                  </div>
                </div>

                <div>
                  <span className="font-serif text-[11px] sm:text-xs tracking-wider uppercase text-[#a3702c] font-semibold block mb-0.5">
                    S/O
                  </span>
                  <div className="font-serif text-[11px] sm:text-sm md:text-base text-[#1e3a2f] font-medium">
                    {formatLineageColumn(WEDDING_CONFIG.groom_parents)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Invitation Closing, Dates & Venue */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 md:mt-10 pt-3 space-y-3.5"
        >
          <p className="font-serif text-sm sm:text-base md:text-lg text-[#1e3a2f] font-medium max-w-md mx-auto leading-[1.45] px-2">
            Invite You To Share Their Joy At The<br />
            Wedding Celebrations Of Their Grand Daughter
          </p>

          {/* Date Block */}
          <p className="font-serif text-sm sm:text-base md:text-lg text-[#1e3a2f] font-semibold tracking-wide whitespace-nowrap pt-1">
            03RD &ndash; 05TH <span className="tracking-[0.16em] uppercase ml-2 font-semibold">DECEMBER 2026</span>
          </p>

          {/* Venue with Lateral Horizontal Rules on Single Line */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 pt-1 font-serif text-xs sm:text-sm md:text-base tracking-[0.18em] uppercase text-[#a3702c] font-semibold whitespace-nowrap">
            <span className="h-px w-8 sm:w-12 bg-[#a3702c]/75" />
            <span>{WEDDING_CONFIG.main_venue_name}, Udaipur</span>
            <span className="h-px w-8 sm:w-12 bg-[#a3702c]/75" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
