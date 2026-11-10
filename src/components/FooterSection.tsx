import React from "react";
import { motion } from "framer-motion";
import { MEDIA, WEDDING_CONFIG } from "../data/weddingConfig";

interface FooterSectionProps {
  name1?: string;
  name2?: string;
  date?: string;
}

export function FooterSection({
  name1 = WEDDING_CONFIG.couple_name_1,
  name2 = WEDDING_CONFIG.couple_name_2,
}: FooterSectionProps) {
  return (
    <footer className="text-center relative overflow-hidden bg-ivory pb-8 pt-0 mt-[10px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="relative max-w-md mx-auto pt-12 pb-2 px-6">
          <div className="text-center px-4 py-6 -m-4">
            <p className="font-couple md:text-6xl text-sage-dark leading-tight text-5xl pb-0 pt-0 mb-0 font-normal">
              {name1} <span className="font-display text-dusty-rose text-3xl md:text-4xl">&amp;</span> {name2}
            </p>
            <p className="section-eyebrow mt-3 !text-xs md:!text-sm">
              <span className="font-digit">05</span> December <span className="font-digit">2026</span>
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto -mt-2 md:-mt-4">
          <img
            src={MEDIA.footerChateau}
            alt="Château and formal garden illustration"
            className="w-full h-auto select-none pointer-events-none"
          />
        </div>

        <p className="text-xs sm:text-sm text-sage-dark/85 mt-2 font-body font-normal">
          With Best Compliments from Laddha &amp; Malani Family
        </p>
      </motion.div>
    </footer>
  );
}
