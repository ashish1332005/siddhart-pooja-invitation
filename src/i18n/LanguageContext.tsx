import React, { createContext, useContext, useState } from "react";

const enTranslations: Record<string, string> = {
  "hero.subtitle": "We're getting married",
  "hero.date": "DECEMBER 3RD - 5TH, 2026",
  "hero.rsvp": "Discover",
  "countdown.title": "Countdown to Shubh Vivaah",
  "countdown.until": "Until 03 December 2026",
  "countdown.days": "Days",
  "countdown.hours": "Hours",
  "countdown.minutes": "Minutes",
  "countdown.seconds": "Seconds",
  "welcome.title": "Shubh Vivaah",
  "welcome.ganesh": "।। श्री गणेशाय नमः ।।",
  "welcome.ramji": "|| Shrimad Ramcharanaya Namah ||",
  "welcome.quote":
    '"No Measure Of Time With You Will Be Long Enough, But Let\'s Start With Forever"',
  "welcome.blessings": "With The Blessings Of",
  "welcome.parents":
    "Invite You To Share Their Joy At The Wedding Celebrations Of Their Grand Daughter",
  "welcome.couple": "Pooja & Siddhart",
  "events.title": "Wedding Celebrations\n& Sacred Vows",
  "events.subtitle": "Where we celebrate",
  "events.date": "03 - 05 December 2026",
  "events.openMaps": "Open in Maps",
  "events.addCalendar": "Add to Calendar",
  "program.title": "Wedding Itinerary",
  "program.date": "01, 03, 04 & 05 December 2026",
  "story.title": "Our Journey",
  "story.text":
    "Two hearts, two families, and a lifetime of love. We warmly invite you to grace this sacred union with your blessings and presence as we step into our forever.",
  "rsvp.title": "RSVP",
  "rsvp.subtitle": "Kindly confirm your presence by 15 November 2026",
  "rsvp.attend": "Will you be gracing us with your presence? *",
  "rsvp.yes": "Joyfully accepts",
  "rsvp.no": "Regretfully declines",
  "rsvp.fullName": "Full name *",
  "rsvp.enterName": "Enter your full name",
  "rsvp.howMany": "Number of guests attending *",
  "rsvp.dietary": "Dietary requirements or special requests",
  "rsvp.dietaryPlaceholder": "Pure Veg / Jain Food / Specific Preferences",
  "rsvp.transport": "Do you require local assistance / airport pick-up in Udaipur?",
  "rsvp.shuttle": "Yes, please coordinate with us",
  "rsvp.valet": "No, we are arriving directly",
  "rsvp.message": "Warm wishes & blessings for the couple",
  "rsvp.messagePlaceholder": "Write your blessings or a sweet note for Pooja & Siddhart…",
  "rsvp.sending": "Sending…",
  "rsvp.send": "Send RSVP",
  "confirm.thankYou": "Thank You",
  "confirm.cantMake": "We will miss your presence, but your warm blessings remain forever with us.",
  "confirm.thankResponse": "Thank you for confirming your presence!",
  "confirm.excited": "We are overjoyed and eagerly looking forward to celebrating with you in Udaipur.",
  "confirm.thankPart": "Thank you for being an indispensable part of our lives and celebrations.",
  "confirm.lookForward": "We look forward to welcoming you on:",
  "confirm.addCalendar": "Add to Calendar",
  "confirm.plansChange":
    "For any changes or travel assistance, please reach out directly to the Laddha family coordinators.",
  "footer.madeBy": "Made with love for",
};

const translations: Record<string, Record<string, string>> = {
  en: enTranslations,
  hi: enTranslations,
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("en");
  const t = (key: string) => translations[language]?.[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
