import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import Button from "../../shared/components/Button";
import { SectionWrapper, AnimatedDiv, fadeUp } from "../../utils/animations";
import { useLanguage } from "../../hooks/useLanguage";
import clsx from "clsx";
import coachImg from "../../assets/AhmedAbdElgwad.png";

const WHATSAPP_URL = "https://wa.me/2001007834565?text=Hello%2C%20I%27m%20interested%20in%20the%20EnglishMastery%20speaking%20course";

const HeroSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-bg via-surface to-primary/5 pt-20">
      {/* Background decorations */}
      <div className="absolute top-20 start-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 end-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <SectionWrapper>
            {/* Badge */}
            <AnimatedDiv variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                {t("hero.badge")}
              </span>
            </AnimatedDiv>

            {/* Headline */}
            <AnimatedDiv variants={fadeUp}>
              <h1 className={clsx("text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-textPrimary mb-4", isRTL && "font-arabic")}>
                {t("hero.headline1")}{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {t("hero.headline2")}
                  </span>
                  <svg className="absolute -bottom-2 start-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M0 10 Q150 0 300 10" stroke="url(#underline)" strokeWidth="3" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="underline" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#10B981" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
            </AnimatedDiv>

            {/* Subtext */}
            <AnimatedDiv variants={fadeUp}>
              <p className={clsx("text-lg text-textSecondary leading-relaxed mb-8 max-w-lg", isRTL && "font-arabic")}>
                {t("hero.subtext")}
              </p>
            </AnimatedDiv>

            {/* CTA Buttons */}
            <AnimatedDiv variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" onClick={() => window.open(WHATSAPP_URL, "_blank")}>
                <span className={clsx(isRTL && "font-arabic")}>{t("hero.cta1")}</span>
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollTo("features")}>
                <Play size={18} className="text-primary" />
                <span className={clsx(isRTL && "font-arabic")}>{t("hero.cta2")}</span>
              </Button>
            </AnimatedDiv>

            {/* Stats */}
            <AnimatedDiv variants={fadeUp}>
              <div className="flex flex-wrap gap-6">
                {[
                  { value: t("hero.stat1"), label: t("hero.stat1Label") },
                  { value: t("hero.stat2"), label: t("hero.stat2Label") },
                  { value: t("hero.stat3"), label: t("hero.stat3Label") },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-2xl font-extrabold text-textPrimary">{value}</p>
                    <p className={clsx("text-sm text-textSecondary", isRTL && "font-arabic")}>{label}</p>
                  </div>
                ))}
              </div>
            </AnimatedDiv>
          </SectionWrapper>

          {/* Coach Image side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-xl mx-auto">
              {/* Glow blob behind image */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/25 to-secondary/25 rounded-full blur-3xl scale-110" />

              {/* Coach image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={coachImg}
                  alt={t("hero.coachName")}
                  className="w-full h-auto max-h-[550px] object-contain rounded-3xl drop-shadow-2xl"
                />

                {/* Coach name badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 start-1/2 -translate-x-1/2 bg-surface border border-border rounded-2xl shadow-card px-6 py-3 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primaryHover flex items-center justify-center text-white text-lg font-bold shadow-md">
                    🎤
                  </div>
                  <div>
                    <p className={clsx("font-bold text-textPrimary text-base", isRTL && "font-arabic")}>{t("hero.coachName")}</p>
                    <p className={clsx("text-textSecondary text-xs", isRTL && "font-arabic")}>{t("hero.coachRole")}</p>
                  </div>
                  <div className="flex items-center gap-0.5 ms-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-sm">★</span>
                    ))}
                  </div>
                </motion.div>

                {/* Floating badge: Course Duration */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-4 -end-4 bg-surface border border-border rounded-2xl shadow-card px-4 py-2 flex items-center gap-2"
                >
                  <span className="text-xl">📅</span>
                  <div>
                    <p className="text-xs text-textMuted">Duration</p>
                    <p className="text-sm font-bold text-textPrimary">1 Month</p>
                  </div>
                </motion.div>

                {/* Floating badge: Sessions */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/3 -start-4 bg-surface border border-border rounded-2xl shadow-card px-4 py-2 flex items-center gap-2"
                >
                  <span className="text-xl">🎯</span>
                  <div>
                    <p className="text-xs text-textMuted">Sessions</p>
                    <p className="text-sm font-bold text-textPrimary">2x / Week</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => scrollTo("features")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-textMuted hover:text-primary transition-colors cursor-pointer"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
