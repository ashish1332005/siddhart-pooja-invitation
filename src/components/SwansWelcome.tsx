import React from "react";
import { MEDIA } from "../data/weddingConfig";

export function SwansWelcome() {
  return (
    <section
      id="swans-welcome"
      className="relative w-full bg-background overflow-hidden"
      aria-label="Siddhart and Pooja wedding invitation"
    >
      <img
        src={MEDIA.swansHero}
        alt="Embroidered wedding invitation with floral garden and swans"
        className="block h-auto w-full select-none pointer-events-none"
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[32%] sm:top-[32.5%] w-[84%] max-w-sm flex flex-col items-center text-center pointer-events-none select-none z-10 px-2 py-0"
      >
        {/* 1. WE ARE GETTING MARRIED - Safely below hanging wisteria vines */}
        <div className="flex flex-col items-center leading-[1.12]">
          <span
            className="font-serif tracking-[0.16em] uppercase text-[#7c2635] font-semibold"
            style={{ fontSize: "clamp(13px, 3.8vw, 22px)" }}
          >
            WE ARE GETTING
          </span>
          <span
            className="font-serif tracking-[0.22em] uppercase text-[#7c2635] font-semibold mt-1"
            style={{ fontSize: "clamp(15px, 4.4vw, 25px)" }}
          >
            MARRIED
          </span>
        </div>

        {/* 2. Golden Interlocking Wedding Rings Divider with Lateral Lines */}
        <div className="flex items-center justify-center gap-2 w-36 sm:w-48 text-[#b88e44] my-2 sm:my-2.5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b88e44]/80 to-[#b88e44]" />
          <svg
            className="w-5 h-3 sm:w-6 sm:h-3.5 text-[#b88e44] shrink-0"
            viewBox="0 0 32 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <circle cx="11" cy="10" r="6.5" />
            <circle cx="21" cy="10" r="6.5" />
          </svg>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b88e44]/80 to-[#b88e44]" />
        </div>

        {/* 3. With the blessings of - Larger & Dignified Italic Serif */}
        <p
          className="font-serif italic text-[#9c6628] font-medium mb-1.5 sm:mb-2"
          style={{ fontSize: "clamp(15px, 4.2vw, 22px)" }}
        >
          With the blessings of
        </p>

        {/* 4. Elders Names with & - Bold Dignified Serif */}
        <p
          className="font-serif text-[#163328] font-bold leading-[1.28]"
          style={{ fontSize: "clamp(16px, 4.6vw, 26px)" }}
        >
          Late Smt. Kamla Devi &amp;<br />
          Shri Ram Pal Laddha
        </p>

        {/* 5. Golden Ornate Flourish Divider */}
        <div className="flex items-center justify-center gap-2 w-32 sm:w-44 text-[#b88e44]/85 my-2 sm:my-2.5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b88e44]" />
          <span className="text-[10px] sm:text-xs leading-none">&#10022;</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b88e44]" />
        </div>

        {/* 6. Soliciting your gracious presence and blessings on the occasion of our wedding - Elegantly Enlarged & Safely Clear from Side Roses */}
        <p
          className="font-serif italic text-[#163328] leading-[1.38] max-w-[270px] sm:max-w-[310px] mx-auto font-medium"
          style={{ fontSize: "clamp(13px, 3.6vw, 18px)" }}
        >
          Soliciting your gracious presence and blessings<br />
          on the occasion of our wedding
        </p>
      </div>
    </section>
  );
}
