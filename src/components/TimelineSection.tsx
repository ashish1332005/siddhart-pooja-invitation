import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { MEDIA } from "../data/weddingConfig";

function renderWithLiningDigits(text: string) {
  const parts = text.split(/(\d+)/);
  return parts.map((part, i) =>
    /^\d+$/.test(part) ? (
      <span key={i} className="font-digit not-italic inline-block">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export function TimelineSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 18,
    mass: 0.3,
  });

  const pearlTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const events = [
    {
      date: "Thursday, 03 Dec 2026",
      time: "03:15 PM",
      title: "Vinayak Sthapna & Mangal Kalash",
      note: "Sacred Ceremonies (03:15 PM & 04:15 PM) · Ramee Royal Resort",
      image: MEDIA.timelineChapel,
      alt: "Painted stone chapel with flowers",
    },
    {
      date: "Thursday, 03 Dec 2026",
      time: "07:15 PM",
      title: "Starry Mic Night",
      note: "Followed by Dinner · Amangiri Garden",
      image: MEDIA.timelineCocktail,
      alt: "Painted martini glass with olive",
    },
    {
      date: "Friday, 04 Dec 2026",
      time: "10:15 AM",
      title: "The Sunshine Soiree",
      note: "Followed by Lunch · Santorini Garden",
      image: MEDIA.timelineChampagne,
      alt: "Painted celebration toast",
    },
    {
      date: "Friday, 04 Dec 2026",
      time: "07:15 PM",
      title: "Glam, Groove & Gala",
      note: "Followed by Dinner · Aravali Garden",
      image: MEDIA.timelineDisco,
      alt: "Painted disco ball with stars",
    },
    {
      date: "Saturday, 05 Dec 2026",
      time: "10:15 AM",
      title: "Baraat Swagat",
      note: "Welcome of Baraat · Amphitheatre Santorini Garden",
      image: MEDIA.timelineChapel,
      alt: "Painted stone chapel with flowers",
    },
    {
      date: "Saturday, 05 Dec 2026",
      time: "11:15 AM",
      title: "Mangal Phere",
      note: "Seven Sacred Vows & Lunch · Amphitheatre Santorini Garden",
      image: MEDIA.timelineRings,
      alt: "Painted gold wedding rings with blossoms",
    },
    {
      date: "Saturday, 05 Dec 2026",
      time: "07:15 PM",
      title: "The Wedding Gala - Reception",
      note: "Evening of Elegance & Dinner · Aravali Garden",
      image: MEDIA.timelineChampagne,
      alt: "Painted champagne glasses with moon and stars",
    },
  ];

  return (
    <section
      id="day-program"
      className="pt-6 sm:pt-10 pb-12 md:pb-16 px-3 sm:px-4 relative z-20 overflow-hidden bg-transparent"
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Events */}
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center mb-10 sm:mb-14"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-sage-dark font-normal tracking-wide">
              Timeline
            </h2>
            <span className="section-rule !my-2.5" />
            <p className="section-eyebrow text-[9.5px] sm:text-xs tracking-[0.22em]">
              The Wedding Celebrations
            </p>
          </motion.div>

          {/* 2-Column Events Layout Starting Inside the Arch */}
          <div ref={timelineRef} className="relative z-10 mx-auto max-w-2xl px-2 sm:px-6">
            {/* Dashed Vertical Needle Stitches Line */}
            <div
              className="absolute top-3 bottom-3 left-[36%] sm:left-[42%] md:left-[44%] w-[3px] -translate-x-1/2 pointer-events-none select-none"
              aria-hidden="true"
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, hsl(var(--olive)) 0px, hsl(var(--olive)) 4px, transparent 4px, transparent 12px)",
                }}
              />
              <motion.img
                src={MEDIA.timelinePearlLarge}
                alt=""
                aria-hidden="true"
                style={{ top: pearlTop }}
                className="absolute left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-contain max-w-none filter drop-shadow"
              />
            </div>

            {/* Events */}
            <div className="relative space-y-10 sm:space-y-14">
              {events.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.04 + idx * 0.04 }}
                  className="relative grid grid-cols-[32%_1fr] sm:grid-cols-[38%_1fr] md:grid-cols-[40%_1fr] items-center gap-3 sm:gap-6 md:gap-8"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-auto justify-self-center select-none pointer-events-none max-w-[80px] sm:max-w-[120px] md:max-w-[150px] object-contain drop-shadow-sm"
                  />
                  <div className="pl-4 sm:pl-8 md:pl-10">
                    <span className="font-body text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-gold-dark block mb-0.5">
                      {item.date}
                    </span>
                    <p className="font-display font-normal text-sm sm:text-base md:text-lg text-sage-dark tracking-wide">
                      {item.time}
                    </p>
                    <h3 className="font-body uppercase tracking-[0.14em] text-[11px] sm:text-xs text-sage-dark font-medium mt-0.5">
                      {item.title}
                    </h3>
                    <p className="font-body italic text-[11px] sm:text-xs text-sage-dark/75 mt-0.5 leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sage-dark font-body font-semibold text-sm md:text-lg leading-relaxed max-w-md mx-auto mt-14"
        >
          Your presence will fill our celebrations with warmth, joy, and blessings.
        </motion.p>
      </div>
    </section>
  );
}
