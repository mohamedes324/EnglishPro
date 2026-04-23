import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import Button from "../../shared/components/Button";
import { SectionWrapper, AnimatedDiv, fadeUp, slideInLeft, slideInRight, scaleIn } from "../../utils/animations";
import { useLanguage } from "../../hooks/useLanguage";
import clsx from "clsx";

const HeroIllustration = () => (
  <div className="relative w-full max-w-lg mx-auto">
    {/* Glow blob */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl scale-110" />

    {/* Main card */}
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      className="bg-surface rounded-3xl shadow-card border border-border p-8 relative"
    >
      {/* Avatar row */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primaryHover flex items-center justify-center text-white text-2xl font-bold shadow-md">
          👨‍🏫
        </div>
        <div>
          <p className="font-bold text-textPrimary text-lg">Coach Ahmed</p>
          <p className="text-textSecondary text-sm">English Instructor</p>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-accent text-sm">★</span>
            ))}
            <span className="text-textMuted text-xs ms-1">4.9 (1,200+)</span>
          </div>
        </div>
      </div>

      {/* Progress bars */}
      <div className="space-y-3 mb-6">
        {[
          { label: "Speaking", pct: 87, color: "bg-primary" },
          { label: "Grammar", pct: 92, color: "bg-secondary" },
          { label: "Vocabulary", pct: 79, color: "bg-accent" },
        ].map(({ label, pct, color }) => (
          <div key={label}>
            <div className="flex justify-between text-xs text-textSecondary mb-1">
              <span>{label}</span>
              <span className="font-semibold">{pct}%</span>
            </div>
            <div className="h-2 bg-bg rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                className={clsx("h-full rounded-full", color)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Status pill */}
      <div className="flex items-center gap-2 bg-secondary/10 rounded-xl px-4 py-2">
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
        <span className="text-secondary text-sm font-semibold">Live session available now!</span>
      </div>
    </motion.div>

    {/* Floating badges */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
      className="absolute -top-4 -end-4 bg-surface border border-border rounded-2xl shadow-card px-4 py-2 flex items-center gap-2"
    >
      <span className="text-xl">🏆</span>
      <div>
        <p className="text-xs text-textMuted">Certificates</p>
        <p className="text-sm font-bold text-textPrimary">1,200+ Issued</p>
      </div>
    </motion.div>

    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
      className="absolute -bottom-4 -start-4 bg-surface border border-border rounded-2xl shadow-card px-4 py-2 flex items-center gap-2"
    >
      <span className="text-xl">🔥</span>
      <div>
        <p className="text-xs text-textMuted">Success Rate</p>
        <p className="text-sm font-bold text-textPrimary">98%</p>
      </div>
    </motion.div>
  </div>
);

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
              <Button size="lg" onClick={() => scrollTo("pricing")}>
                <span className={clsx(isRTL && "font-arabic")}>{t("hero.cta1")}</span>
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollTo("howItWorks")}>
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

          {/* Illustration side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <HeroIllustration />
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
