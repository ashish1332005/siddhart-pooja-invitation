import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MEDIA, WEDDING_CONFIG } from "../data/weddingConfig";

interface IntroHeroProps {
  coupleName1?: string;
  coupleName2?: string;
  weddingDate?: string;
}

export function IntroHero({
  coupleName1 = WEDDING_CONFIG.couple_name_1,
  coupleName2 = WEDDING_CONFIG.couple_name_2,
}: IntroHeroProps) {
  const [status, setStatus] = useState<"idle" | "playing" | "done">("idle");
  const [showText, setShowText] = useState(false);
  const textShownRef = useRef(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartY = useRef<number | null>(null);
  const playStartTime = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    // Swiped up by > 40px
    if (diff > 40) {
      setStatus("done");
      setShowText(true);
      textShownRef.current = true;
      document.getElementById("swans-welcome")?.scrollIntoView({ behavior: "smooth" });
    }
    touchStartY.current = null;
  };

  useEffect(() => {
    if (status === "done") {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = "";
    };
  }, [status]);

  const handleTimeUpdate = () => {
    const vid = videoRef.current;
    if (!vid || textShownRef.current) return;
    // Curtains fully part at 7.2 seconds
    if (vid.currentTime >= 7.2) {
      textShownRef.current = true;
      setShowText(true);
    }
  };

  const handleEnded = () => {
    setStatus("done");
    if (!textShownRef.current) {
      textShownRef.current = true;
      setShowText(true);
    }
  };

  const handleOpen = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    window.dispatchEvent(new CustomEvent("play-wedding-music"));
    if (status === "idle") {
      setStatus("playing");
      setShowText(false);
      textShownRef.current = false;
      playStartTime.current = Date.now();
      const vid = videoRef.current;
      if (vid) {
        if (vid.currentTime > 0.1) {
          vid.currentTime = 0;
        }
        vid.play().catch(() => {
          setTimeout(() => {
            setStatus("done");
            setShowText(true);
            textShownRef.current = true;
          }, 1500);
        });
      }
    }
  };

  const handleSkip = () => {
    // Prevent accidental skips within first 2.5 seconds of curtain opening
    if (Date.now() - playStartTime.current < 2500) return;
    setStatus("done");
    setShowText(true);
    textShownRef.current = true;
  };

  return (
    <>
      <section
        className="relative w-full min-h-screen bg-ivory overflow-hidden cursor-pointer"
        onClick={status === "playing" ? handleSkip : undefined}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Permanent Fallback & High-Res Finished Frame */}
        <img
          src={MEDIA.introDoorsFinalFrame}
          alt="Palace Villa & Garden"
          className="absolute inset-0 h-full w-full object-cover select-none"
        />

        {/* Gate Opening Video - Stays smoothly mounted on final frame with GPU hardware acceleration */}
        <video
          ref={videoRef}
          src={MEDIA.introDoorsVideo}
          poster={MEDIA.introDoorsPoster}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onError={handleEnded}
          style={{
            transform: "translate3d(0, 0, 0)",
            WebkitTransform: "translate3d(0, 0, 0)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            status === "idle" ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Monogram, Couple Names & Wedding Date - Fades in ONLY after curtains have fully opened */}
        <AnimatePresence>
          {showText && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-x-0 top-[8%] sm:top-[8.5%] h-[48%] flex flex-col items-center justify-center text-center px-4 pointer-events-none select-none z-10"
            >
              {/* Original P S Monogram Logo - Generous Royal Gap before Couple Name */}
              <img
                src={MEDIA.coupleMonogram}
                alt="Pooja & Siddhart monogram"
                className="h-[10.5vh] sm:h-[12vh] max-h-[105px] sm:max-h-[130px] w-auto object-contain mb-6 sm:mb-8 md:mb-9 drop-shadow-sm select-none"
              />

              {/* Groom & Bride Names + Wedding Date */}
              <div className="flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md">
                {/* Pooja */}
                <h1 className="font-couple text-[#7c2635] text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-wide drop-shadow-sm my-0">
                  {coupleName1}
                </h1>

                {/* Gold Ampersand with Lateral Divider Lines */}
                <div className="flex items-center justify-center w-40 sm:w-52 md:w-60 my-0.5 sm:my-1">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b88e44]/75 to-[#b88e44]" />
                  <span className="font-display text-[#b88e44] text-base sm:text-lg md:text-xl font-light px-2.5 leading-none">
                    &amp;
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b88e44]/75 to-[#b88e44]" />
                </div>

                {/* Siddhart */}
                <h1 className="font-couple text-[#7c2635] text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-wide drop-shadow-sm my-0">
                  {coupleName2}
                </h1>

                {/* Wedding Date directly on 1st Page */}
                <p className="font-serif text-sm sm:text-base md:text-lg text-[#7c2635] font-semibold mt-4 sm:mt-5 tracking-[0.14em] uppercase whitespace-nowrap">
                  03RD &ndash; 05TH DECEMBER 2026
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Prominent Interactive Swipe Up Indicator with Theme Cloud Backdrop at Eye Level */}
        {(showText || status === "done") && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-x-0 bottom-8 sm:bottom-12 md:bottom-14 flex justify-center z-20 pointer-events-auto"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setStatus("done");
                setShowText(true);
                textShownRef.current = true;
                setTimeout(() => {
                  document.getElementById("swans-welcome")?.scrollIntoView({ behavior: "smooth" });
                }, 50);
              }}
              className="group relative flex flex-col items-center justify-center cursor-pointer select-none transition-transform active:scale-95 px-8 py-3.5"
              aria-label="Swipe up to explore invitation"
            >
              {/* Theme-Matching Embroidered Cloud Backdrop */}
              <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
                <img
                  src={MEDIA.swipeUpCloud}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain filter drop-shadow-[0_6px_16px_rgba(35,25,15,0.22)]"
                />
              </div>

              {/* Interactive Content inside the Cloud */}
              <div className="relative z-10 flex flex-col items-center pt-1.5 pb-1 px-4">
                {/* Stacked Double Chevron Up Arrow */}
                <motion.div
                  animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center -space-y-1.5 text-[#544d2e]"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </motion.div>

                {/* SWIPE UP Serif Text */}
                <span className="font-serif text-[11px] sm:text-xs tracking-[0.38em] uppercase text-[#34301d] font-bold drop-shadow-sm mt-0.5">
                  SWIPE UP
                </span>
              </div>
            </button>
          </motion.div>
        )}
      </section>

      {/* Tap to open overlay */}
      <AnimatePresence>
        {status === "idle" && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-50 h-screen w-screen cursor-pointer overflow-hidden bg-ivory"
            onClick={handleOpen}
            role="button"
            aria-label="Tap to open the invitation"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <img
              src={MEDIA.introDoorsPoster}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover select-none"
            />
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 bottom-16 text-center font-body text-[0.7rem] md:text-xs tracking-[0.5em] uppercase text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] pointer-events-none"
            >
              Tap to open
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
