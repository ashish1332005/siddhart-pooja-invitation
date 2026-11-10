import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarPlus, Send } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { MEDIA, WEDDING_CONFIG } from "../data/weddingConfig";
import { buildGoogleCalendarUrl, buildIcsDataUrl } from "../utils/calendarAndMaps";
import { ActionMenu } from "./ActionMenu";

export interface StoredGuestRsvp {
  id: string;
  full_name: string;
  email?: string;
  attendance: "yes" | "no" | "pending";
  guest_count: number;
  adult_count: number;
  children_count: number;
  dietary_requirements?: string;
  transportation?: "shuttle" | "valet";
  message?: string;
  responded_at: string;
}

export const RSVP_STORAGE_KEY = "embroidered_garden_rsvps";

export function getStoredRsvps(): StoredGuestRsvp[] {
  try {
    const raw = localStorage.getItem(RSVP_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveGuestRsvp(entry: Omit<StoredGuestRsvp, "id" | "responded_at">) {
  const existing = getStoredRsvps();
  const newRecord: StoredGuestRsvp = {
    ...entry,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    responded_at: new Date().toISOString(),
  };
  localStorage.setItem(RSVP_STORAGE_KEY, JSON.stringify([newRecord, ...existing]));
  return newRecord;
}

interface RsvpConfirmationProps {
  attendance: "yes" | "no";
  name1: string;
  name2: string;
  venueLocation: string;
  whatsappUrl?: string;
}

function RsvpConfirmation({
  attendance,
  name1,
  name2,
  venueLocation,
  whatsappUrl,
}: RsvpConfirmationProps) {
  const { t } = useLanguage();

  useEffect(() => {
    const el = document.getElementById("rsvp-confirmation");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const calendarEvent = {
    title: `Wedding ${name1} & ${name2}`,
    description: `Wedding of ${name1} and ${name2}`,
    location: venueLocation,
    startLocal: `20261205T111500`,
    endLocal: `20261205T235900`,
    timezone: "Asia/Kolkata",
  };

  if (attendance === "no") {
    return (
      <section
        id="rsvp-confirmation"
        className="section-padding bg-transparent pb-[50px] pt-[20px]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl text-sage-dark mb-6">
            {t("confirm.thankYou")}
          </h2>
          <p className="text-sage-dark font-body font-semibold text-lg leading-relaxed">
            {t("confirm.cantMake")}
          </p>
          <p className="text-sage-dark font-display text-2xl mt-8 font-bold">
            — {name1} &amp; {name2}
          </p>
          {whatsappUrl && (
            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 px-6 py-2 items-center justify-center rounded-md border border-gold/40 gap-2 text-primary-foreground font-medium tracking-[0.18em] uppercase text-xs bg-sage-dark hover:bg-sage-dark/90 transition-colors"
              >
                Confirm via WhatsApp
              </a>
            </div>
          )}
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="rsvp-confirmation"
      className="min-h-screen bg-transparent flex items-center justify-center relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-transparent pt-[20px] pb-[50px]"
      >
        <div className="max-w-2xl mx-auto text-center pb-[40px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-sage-dark mb-8 text-center leading-relaxed tracking-wide"
          >
            {t("confirm.thankResponse")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6 max-w-2xl text-center"
          >
            <p className="text-sage-dark font-body text-lg md:text-xl leading-relaxed">
              {t("confirm.excited")}
            </p>
            <p className="text-sage-dark font-body text-lg md:text-xl leading-relaxed">
              {t("confirm.thankPart")}
            </p>
            <p className="text-sage-dark font-body text-base md:text-lg font-semibold mt-4">
              {t("confirm.lookForward")}
            </p>
            <p className="text-sage-dark font-body font-semibold text-base md:text-lg">
              3rd – 5th December 2026 · Ramee Royal Resort &amp; Spa, Udaipur
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sage-dark font-display font-bold text-3xl md:text-4xl mt-10"
          >
            — {name1} &amp; {name2}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 px-6 py-2 items-center justify-center rounded-md border border-gold/40 gap-2 text-primary-foreground font-medium tracking-[0.18em] uppercase text-xs bg-sage-dark hover:bg-sage-dark/90 transition-colors"
              >
                Send RSVP on WhatsApp
              </a>
            )}
            <ActionMenu
              icon={<CalendarPlus className="w-5 h-5" />}
              label={t("confirm.addCalendar")}
              items={[
                { label: "Google Calendar", href: buildGoogleCalendarUrl(calendarEvent) },
                {
                  label: "Apple Calendar",
                  href: buildIcsDataUrl(calendarEvent),
                  download: "wedding.ics",
                },
              ]}
            />
            <p className="text-sage-dark/70 font-body text-sm max-w-md text-center leading-relaxed mt-4">
              {t("confirm.plansChange")}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export function RsvpSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");
  const [formData, setFormData] = useState<{
    attendance: "yes" | "no";
    fullName: string;
    dietary: string;
    message: string;
    website: string;
    transportation: "shuttle" | "valet";
  }>({
    attendance: "yes",
    fullName: "",
    dietary: "",
    message: "",
    website: "",
    transportation: "shuttle",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return;
    setIsSending(true);

    const guestName = formData.fullName.trim() || "Guest";
    const rsvpEntry = {
      full_name: guestName,
      attendance: formData.attendance,
      guest_count: 1,
      adult_count: 1,
      children_count: 0,
      dietary_requirements:
        formData.attendance === "yes" && formData.dietary ? formData.dietary : undefined,
      message: formData.message || undefined,
      transportation: formData.attendance === "yes" ? formData.transportation : undefined,
    };

    saveGuestRsvp(rsvpEntry);

    // Optional Google Sheets / Webhook submission if configured
    const webhookUrl = import.meta.env.VITE_RSVP_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(rsvpEntry),
          mode: "no-cors",
        });
      } catch {
        // Ignore network errors and proceed to WhatsApp confirmation
      }
    }

    // Build pre-formatted WhatsApp RSVP message
    const rsvpPhone = (WEDDING_CONFIG.rsvp_phones[0] || "9413864415").replace(/\D/g, "");
    const lines = [
      `*Wedding RSVP – Pooja & Siddhart (3rd–5th Dec 2026)*`,
      `• *Name:* ${guestName}`,
      `• *Attending:* ${formData.attendance === "yes" ? "Yes, joyfully attending!" : "Regretfully unable to attend"}`,
    ];
    if (formData.attendance === "yes") {
      lines.push(
        `• *Transport in Udaipur:* ${
          formData.transportation === "shuttle"
            ? "Station / Airport Pickup & Resort Transfers"
            : "Arriving by Own Vehicle (Valet Parking)"
        }`
      );
      if (formData.dietary.trim()) {
        lines.push(`• *Dietary / Jain Notes:* ${formData.dietary.trim()}`);
      }
    }
    if (formData.message.trim()) {
      lines.push(`• *Wishes / Note:* ${formData.message.trim()}`);
    }

    const waLink = `https://wa.me/91${rsvpPhone}?text=${encodeURIComponent(lines.join("\n"))}`;
    setWhatsappUrl(waLink);

    // Open WhatsApp automatically so the host receives the RSVP right away
    window.open(waLink, "_blank", "noopener,noreferrer");

    setIsSending(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <RsvpConfirmation
        attendance={formData.attendance}
        name1={WEDDING_CONFIG.couple_name_1}
        name2={WEDDING_CONFIG.couple_name_2}
        venueLocation={WEDDING_CONFIG.main_venue_address}
        whatsappUrl={whatsappUrl}
      />
    );
  }

  return (
    <section id="rsvp" className="section-padding bg-ivory py-16 md:py-20 pt-[4px]">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <img
            src={MEDIA.rsvpEnvelope}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-[55%] max-w-[260px] md:max-w-[300px] mx-auto mt-0 mb-4 select-none pointer-events-none"
          />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-sage-dark font-normal tracking-wide pt-2">
            {t("rsvp.title")}
          </h2>
          <span className="section-rule !my-2.5" />
          <div className="font-serif text-sm sm:text-base text-sage-dark space-y-1.5 mt-2">
            {WEDDING_CONFIG.rsvp_contacts.map((contact, idx) => (
              <p key={idx}>
                <span className="font-semibold text-[#7c2635]">{contact.name}</span>
                {" \u2013 "}
                {contact.phones.map((phone, pIdx) => (
                  <React.Fragment key={pIdx}>
                    {pIdx > 0 && ", "}
                    <a
                      href={`tel:+91${phone.replace(/\D/g, "")}`}
                      className="font-digit text-sage-dark hover:text-[#b88e44] transition-colors font-semibold"
                    >
                      {phone}
                    </a>
                  </React.Fragment>
                ))}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <form onSubmit={handleSubmit} className="space-y-8 relative z-20">
            <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>

            <div>
              <label
                htmlFor="fullName"
                className="text-sage-dark font-medium text-sm leading-none"
              >
                {t("rsvp.fullName")}
              </label>
              <input
                id="fullName"
                type="text"
                required
                maxLength={120}
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="mt-2 flex h-10 w-full rounded-md border bg-ivory px-3 py-2 text-base md:text-sm border-sage-dark/30 text-sage-dark placeholder:text-sage-dark/50 focus:outline-none focus:border-sage-dark"
                placeholder={t("rsvp.enterName")}
              />
            </div>

            <div>
              <div className="w-full">
                <label className="text-sage-dark font-medium text-base leading-none">
                  {t("rsvp.attend")}
                </label>
                <div className="flex flex-col gap-3 mt-3" role="radiogroup">
                  <label
                    htmlFor="attend-yes"
                    className="flex items-start space-x-2 cursor-pointer"
                  >
                    <button
                      type="button"
                      role="radio"
                      id="attend-yes"
                      aria-checked={formData.attendance === "yes"}
                      onClick={() => setFormData({ ...formData, attendance: "yes" })}
                      className="aspect-square h-4 w-4 rounded-full border border-sage-dark text-sage-dark mt-0.5 flex items-center justify-center focus:outline-none"
                    >
                      {formData.attendance === "yes" && (
                        <span className="h-2 w-2 rounded-full bg-sage-dark" />
                      )}
                    </button>
                    <span className="cursor-pointer text-sage-dark leading-tight text-sm">
                      {t("rsvp.yes")}
                    </span>
                  </label>

                  <label
                    htmlFor="attend-no"
                    className="flex items-start space-x-2 cursor-pointer"
                  >
                    <button
                      type="button"
                      role="radio"
                      id="attend-no"
                      aria-checked={formData.attendance === "no"}
                      onClick={() => setFormData({ ...formData, attendance: "no" })}
                      className="aspect-square h-4 w-4 rounded-full border border-sage-dark text-sage-dark mt-0.5 flex items-center justify-center focus:outline-none"
                    >
                      {formData.attendance === "no" && (
                        <span className="h-2 w-2 rounded-full bg-sage-dark" />
                      )}
                    </button>
                    <span className="cursor-pointer text-sage-dark leading-tight text-sm">
                      {t("rsvp.no")}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {formData.attendance === "yes" && (
              <div>
                <label
                  htmlFor="dietary"
                  className="text-sage-dark font-medium text-sm leading-none"
                >
                  {t("rsvp.dietary")}
                </label>
                <textarea
                  id="dietary"
                  value={formData.dietary}
                  maxLength={500}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  className="mt-2 flex min-h-[80px] w-full rounded-md border bg-ivory px-3 py-2 text-sm border-sage-dark/30 text-sage-dark placeholder:text-sage-dark/50 focus:outline-none focus:border-sage-dark"
                  placeholder={t("rsvp.dietaryPlaceholder")}
                  rows={3}
                />
              </div>
            )}

            {formData.attendance === "yes" && (
              <div>
                <label className="text-sage-dark font-medium text-base leading-none">
                  {t("rsvp.transport")}
                </label>
                <div className="flex flex-col gap-3 mt-3" role="radiogroup">
                  <label
                    htmlFor="transport-shuttle"
                    className="flex items-start space-x-2 cursor-pointer"
                  >
                    <button
                      type="button"
                      role="radio"
                      id="transport-shuttle"
                      aria-checked={formData.transportation === "shuttle"}
                      onClick={() => setFormData({ ...formData, transportation: "shuttle" })}
                      className="aspect-square h-4 w-4 rounded-full border border-sage-dark text-sage-dark mt-0.5 flex items-center justify-center focus:outline-none"
                    >
                      {formData.transportation === "shuttle" && (
                        <span className="h-2 w-2 rounded-full bg-sage-dark" />
                      )}
                    </button>
                    <span className="cursor-pointer text-sage-dark leading-tight text-sm">
                      {t("rsvp.shuttle")}
                    </span>
                  </label>

                  <label
                    htmlFor="transport-valet"
                    className="flex items-start space-x-2 cursor-pointer"
                  >
                    <button
                      type="button"
                      role="radio"
                      id="transport-valet"
                      aria-checked={formData.transportation === "valet"}
                      onClick={() => setFormData({ ...formData, transportation: "valet" })}
                      className="aspect-square h-4 w-4 rounded-full border border-sage-dark text-sage-dark mt-0.5 flex items-center justify-center focus:outline-none"
                    >
                      {formData.transportation === "valet" && (
                        <span className="h-2 w-2 rounded-full bg-sage-dark" />
                      )}
                    </button>
                    <span className="cursor-pointer text-sage-dark leading-tight text-sm">
                      {t("rsvp.valet")}
                    </span>
                  </label>
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="message"
                className="text-sage-dark font-medium text-sm leading-none"
              >
                {t("rsvp.message")}
              </label>
              <textarea
                id="message"
                value={formData.message}
                maxLength={1000}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-2 flex min-h-[80px] w-full rounded-md border bg-ivory px-3 py-2 text-sm border-sage-dark/30 text-sage-dark placeholder:text-sage-dark/50 focus:outline-none focus:border-sage-dark"
                placeholder={t("rsvp.messagePlaceholder")}
                rows={4}
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full inline-flex h-10 px-4 py-2 items-center justify-center rounded-md border border-gold/30 gap-2 text-primary-foreground font-medium tracking-[0.2em] uppercase text-xs bg-sage-dark hover:bg-sage-dark/90 transition-colors disabled:opacity-50"
            >
              {isSending ? (
                t("rsvp.sending")
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t("rsvp.send")}
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
