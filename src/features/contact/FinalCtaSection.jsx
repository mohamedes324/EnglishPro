import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../../shared/components/Button";
import { SectionWrapper, AnimatedDiv, fadeUp } from "../../utils/animations";
import { useLanguage } from "../../hooks/useLanguage";
import clsx from "clsx";

const FinalCtaSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-bg relative overflow-hidden">
      {/* Animated BG */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 start-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 end-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionWrapper>
          <AnimatedDiv variants={fadeUp}>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/60 mb-6 shadow-soft"
            >
              <Sparkles size={28} className="text-white" />
            </motion.div>
          </AnimatedDiv>

          <AnimatedDiv variants={fadeUp}>
            <h2 className={clsx(
              "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-textPrimary mb-6 leading-tight",
              isRTL && "font-arabic"
            )}>
              {t("finalCta.title")}
            </h2>
          </AnimatedDiv>

          <AnimatedDiv variants={fadeUp}>
            <p className={clsx("text-lg text-textSecondary max-w-2xl mx-auto mb-8", isRTL && "font-arabic")}>
              {t("finalCta.subtitle")}
            </p>
          </AnimatedDiv>

          <AnimatedDiv variants={fadeUp}>
            <Button
              size="lg"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="mx-auto"
            >
              <span className={clsx(isRTL && "font-arabic")}>{t("finalCta.cta")}</span>
              <ArrowRight size={20} className={clsx(isRTL && "rotate-180")} />
            </Button>
            <p className={clsx("text-textMuted text-sm mt-4", isRTL && "font-arabic")}>
              {t("finalCta.note")}
            </p>
          </AnimatedDiv>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default FinalCtaSection;
