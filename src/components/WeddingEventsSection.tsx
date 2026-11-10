import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { MEDIA, WEDDING_CONFIG } from "../data/weddingConfig";
import {
  buildAppleMapsUrl,
  buildGoogleCalendarUrl,
  buildGoogleMapsUrl,
  buildIcsDataUrl,
} from "../utils/calendarAndMaps";
import { ActionMenu } from "./ActionMenu";

export function WeddingEventsSection() {
  const address = WEDDING_CONFIG.main_venue_address;
  const calendarEvent = {
    title: `${WEDDING_CONFIG.couple_name_1} & ${WEDDING_CONFIG.couple_name_2} \u2013 Shubh Vivaah Celebrations`,
    location: address,
    startLocal: "20261205T111500",
    endLocal: "20261205T235900",
    timezone: "Asia/Kolkata",
  };

  return (
    <section
      id="wedding-events"
      className="relative z-10 bg-ivory overflow-visible pt-6 md:pt-12 pb-0"
    >
      <div className="relative z-10 w-full max-w-xl mx-auto px-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full"
        >
          {/* Main Venue Frame - Edge-to-Edge on Mobile, Cropped Clean at the Bottom */}
          <div className="relative w-full overflow-hidden">
            <img
              src={MEDIA.ceremonyReceptionBg}
              alt="Ceremony and Reception Venue Frame"
              className="w-full h-auto block select-none pointer-events-none"
            />

            {/* Details strictly inside the boundary - Natural Royal Spacing Without Artificial White Boxes */}
            <div className="absolute inset-x-[12%] sm:inset-x-[16%] top-[20%] sm:top-[22%] bottom-[18%] sm:bottom-[16%] flex flex-col items-center justify-center text-center px-2 select-none space-y-2.5 sm:space-y-3.5">
              {/* Grand Venue Heading - Runiga Font Matching All Section Titles */}
              <h2 className="font-display font-runiga text-4xl sm:text-5xl md:text-6xl text-[#7c2635] tracking-wide leading-none font-normal">
                Venue
              </h2>

              {/* Golden Flourish Divider */}
              <div className="flex items-center justify-center gap-2 w-32 sm:w-44 text-[#b88e44]/85 py-0.5">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b88e44]" />
                <span className="text-xs sm:text-sm leading-none">&#10022;</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b88e44]" />
              </div>

              {/* Resort Name - Two Balanced Lines to Prevent Any Border Overlap */}
              <h3
                className="font-serif text-[#1e3a2f] font-bold tracking-wide leading-[1.24] max-w-[240px] sm:max-w-xs md:max-w-sm mx-auto"
                style={{ fontSize: "clamp(20px, 5.2vw, 32px)" }}
              >
                Ramee Royal<br />
                Resort &amp; Spa
              </h3>

              {/* Address in Warm Gold */}
              <p className="font-serif text-xs sm:text-sm tracking-[0.2em] uppercase text-[#a3702c] font-semibold">
                NH 8, Udaipur (Rajasthan)
              </p>

              {/* Wedding Celebrations Date - Pure Typography Directly on Linen */}
              <p className="font-serif text-xs sm:text-sm md:text-base text-[#7c2635] font-semibold tracking-[0.16em] uppercase whitespace-nowrap pt-0.5">
                03RD &ndash; 05TH DECEMBER 2026
              </p>

              {/* Open in Maps Action Only - Transparent Elegant Badge Without White Fill */}
              <div className="flex justify-center pt-2">
                <ActionMenu
                  icon={<MapPin className="w-4 h-4 text-[#b88e44]" />}
                  label="OPEN IN MAPS"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full border border-[#b88e44]/70 bg-transparent text-xs font-serif tracking-[0.2em] text-[#1e3a2f] uppercase hover:bg-[#b88e44]/15 hover:text-[#7c2635] transition-all font-semibold"
                  items={[
                    { label: "Google Maps", href: buildGoogleMapsUrl(address) },
                    { label: "Apple Maps", href: buildAppleMapsUrl(address) },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* User-Uploaded Floral Hanging Garland - Seamlessly Attached to Cropped Frame Bottom */}
          <motion.div
            className="relative -mt-[14%] sm:-mt-[15%] w-full mx-auto pointer-events-none select-none z-20"
            style={{ transformOrigin: "50% 0%" }}
            animate={{
              rotate: [-1.4, 1.4, -1.4],
              x: [-1, 1, -1],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={MEDIA.dresscodeHangingGarland}
              alt="Floral hanging garland"
              className="w-full h-auto block drop-shadow-sm"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
