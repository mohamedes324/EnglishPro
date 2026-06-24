import { useTranslation } from "react-i18next";
import { Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import clsx from "clsx";
import logoImg from "../assets/EnglishMastery.png";

const WHATSAPP_URL = "https://wa.me/2001007834565?text=Hello%2C%20I%27m%20interested%20in%20the%20EnglishMastery%20course";

const navLinks = ["features", "howItWorks", "testimonials", "pricing"];

const Footer = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer id="contact" className="bg-textPrimary text-surface pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoImg}
                alt="EnglishMastery"
                className="h-14 w-auto rounded-xl object-contain"
              />
              <span className="font-bold text-xl text-white">EnglishMastery</span>
            </div>
            <p className={clsx("text-textMuted text-sm leading-relaxed", isRTL && "font-arabic")}>
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={clsx("font-bold text-white mb-4 text-sm uppercase tracking-wider", isRTL && "font-arabic")}>
              {t("footer.links")}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((key) => (
                <li key={key}>
                  <button
                    onClick={() => scrollTo(key)}
                    className={clsx(
                      "text-textMuted hover:text-white text-sm transition-colors cursor-pointer",
                      isRTL && "font-arabic"
                    )}
                  >
                    {t(`nav.${key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info — WhatsApp + Email only */}
          <div>
            <h4 className={clsx("font-bold text-white mb-4 text-sm uppercase tracking-wider", isRTL && "font-arabic")}>
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-textMuted text-sm">
                <MessageCircle size={15} className="text-green-400 shrink-0" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx("hover:text-white transition-colors", isRTL && "font-arabic")}
                >
                  {t("footer.whatsapp")}
                </a>
              </li>
              <li className="flex items-center gap-2 text-textMuted text-sm">
                <Mail size={15} className="text-primary shrink-0" />
                <a href={`mailto:${t("footer.email")}`} className="hover:text-white transition-colors">
                  {t("footer.email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className={clsx("text-textMuted text-xs", isRTL && "font-arabic")}>{t("footer.copyright")}</p>
          <p className={clsx("text-textMuted text-xs", isRTL && "font-arabic")}>{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
