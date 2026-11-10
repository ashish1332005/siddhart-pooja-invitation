import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { MEDIA, WEDDING_CONFIG } from "../data/weddingConfig";
import {
  buildAppleMapsUrl,
  buildGoogleMapsUrl,
} from "../utils/calendarAndMaps";
import { ActionMenu } from "./ActionMenu";

export function RecoveryDaySection() {
  const address = WEDDING_CONFIG.bhilwara_venue_address;

  return (
    <section id="bhilwara-venue" className="bg-ivory relative overflow-hidden">
      <img
        src={MEDIA.recoveryDayDivider}
        alt=""
        aria-hidden="true"
        className="w-full h-auto block select-none pointer-events-none"
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-8 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-sage-dark font-normal tracking-wide pt-6">
            Pre-Wedding Rituals
          </h2>
          <span className="section-rule !my-2.5" />
          <p className="section-eyebrow">Bhilwara Celebrations</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full max-w-sm mx-auto mb-5 px-4"
        >
          <img
            src={MEDIA.recoveryVenue}
            alt="Venue illustration"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-md mx-auto"
        >
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-normal text-sage-dark mb-1 tracking-wide">
            {WEDDING_CONFIG.bhilwara_venue_name}
          </h3>
          <p className="font-body text-xs sm:text-sm tracking-[0.18em] uppercase text-gold-dark font-semibold mb-4">
            Bhilwara (Rajasthan)
          </p>

          <div className="flex flex-col items-center gap-2 pt-1">
            <ActionMenu
              icon={<MapPin className="w-3.5 h-3.5 text-gold-dark" />}
              label="OPEN IN MAPS"
              className="text-[11px] sm:text-xs font-body tracking-[0.22em] text-sage-dark uppercase hover:text-gold-dark transition-colors font-semibold"
              items={[
                { label: "Google Maps", href: buildGoogleMapsUrl(address) },
                { label: "Apple Maps", href: buildAppleMapsUrl(address) },
              ]}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
