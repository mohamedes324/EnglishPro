import { useTranslation } from "react-i18next";
import { Mail, Phone, Camera, PlayCircle, Share2, MessageCircle } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import clsx from "clsx";

const navLinks = ["features", "howItWorks", "testimonials", "pricing"];

const Footer = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const socialLinks = [
    { icon: <Camera size={18} />, href: "#", label: "Instagram", color: "hover:text-pink-500" },
    { icon: <PlayCircle size={18} />, href: "#", label: "YouTube", color: "hover:text-red-500" },
    { icon: <Share2 size={18} />, href: "#", label: "Facebook", color: "hover:text-blue-500" },
    { icon: <MessageCircle size={18} />, href: "#", label: "WhatsApp", color: "hover:text-green-500" },
  ];

  return (
    <footer id="contact" className="bg-textPrimary text-surface pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primaryHover flex items-center justify-center">
                <span className="text-white font-bold text-base">E</span>
              </div>
              <span className="font-bold text-xl text-white">EnglishPro</span>
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

          {/* Contact Info */}
          <div>
            <h4 className={clsx("font-bold text-white mb-4 text-sm uppercase tracking-wider", isRTL && "font-arabic")}>
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-textMuted text-sm">
                <Mail size={15} className="text-primary shrink-0" />
                <a href={`mailto:${t("footer.email")}`} className="hover:text-white transition-colors">
                  {t("footer.email")}
                </a>
              </li>
              <li className="flex items-center gap-2 text-textMuted text-sm">
                <Phone size={15} className="text-secondary shrink-0" />
                <a href={`tel:${t("footer.phone")}`} className="hover:text-white transition-colors">
                  {t("footer.phone")}
                </a>
              </li>
              <li className="flex items-center gap-2 text-textMuted text-sm">
                <MessageCircle size={15} className="text-green-400 shrink-0" />
                <a href="#" className={clsx("hover:text-white transition-colors", isRTL && "font-arabic")}>
                  {t("footer.whatsapp")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className={clsx("font-bold text-white mb-4 text-sm uppercase tracking-wider", isRTL && "font-arabic")}>
              {t("footer.follow")}
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={clsx(
                    "w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-textMuted transition-all duration-200 hover:bg-white/20 hover:scale-110",
                    color
                  )}
                >
                  {icon}
                </a>
              ))}
            </div>
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
