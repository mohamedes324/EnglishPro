import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import clsx from "clsx";
import logoImg from "../assets/EnglishMastery.png";

const WHATSAPP_URL = "https://wa.me/2001007834565?text=Hello%2C%20I%27m%20interested%20in%20the%20EnglishMastery%20speaking%20course";

const navLinks = ["features", "howItWorks", "testimonials", "pricing", "contact"];

const Navbar = () => {
  const { t } = useTranslation();
  const { isRTL, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/95 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={logoImg}
              alt="EnglishMastery"
              className="h-h-20 w-auto rounded-xl object-contain"
            />
            <span className={clsx("font-bold text-xl text-textPrimary", isRTL && "font-arabic")}>
              EnglishMastery
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className={clsx(
                  "px-4 py-2 rounded-lg text-sm font-medium text-textSecondary hover:text-primary hover:bg-primary/8 transition-all duration-200 cursor-pointer",
                  isRTL && "font-arabic"
                )}
              >
                {t(`nav.${key}`)}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Lang Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-sm font-semibold text-textSecondary hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer"
            >
              <Globe size={15} />
              {t("nav.langToggle")}
            </motion.button>

            {/* CTA - goes to WhatsApp */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              className={clsx(
                "hidden sm:flex px-5 py-2 rounded-xl bg-primary hover:bg-primaryHover text-white text-sm font-semibold shadow-md transition-all duration-200 cursor-pointer",
                isRTL && "font-arabic"
              )}
            >
              {t("hero.cta1")}
            </motion.button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-primary/10 text-textSecondary transition"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-surface border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((key) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className={clsx(
                    "w-full text-start px-4 py-3 rounded-xl text-sm font-medium text-textSecondary hover:text-primary hover:bg-primary/8 transition-all cursor-pointer",
                    isRTL && "font-arabic text-end"
                  )}
                >
                  {t(`nav.${key}`)}
                </button>
              ))}
              <button
                onClick={() => window.open(WHATSAPP_URL, "_blank")}
                className={clsx(
                  "mt-2 px-4 py-3 rounded-xl bg-primary text-white font-semibold text-sm text-center cursor-pointer",
                  isRTL && "font-arabic"
                )}
              >
                {t("hero.cta1")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
