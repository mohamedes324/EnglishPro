import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
    document.documentElement.setAttribute(
      "data-font",
      isRTL ? "arabic" : "sans"
    );
  }, [i18n.language, isRTL]);

  const toggleLanguage = () => {
    const next = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(next);
  };

  return { language: i18n.language, isRTL, toggleLanguage };
};
