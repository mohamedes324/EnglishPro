import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import Button from "../../shared/components/Button";
import Badge from "../../shared/components/Badge";
import { SectionWrapper, AnimatedDiv, fadeUp, scaleIn } from "../../utils/animations";
import { useLanguage } from "../../hooks/useLanguage";
import clsx from "clsx";

const WHATSAPP_URL = "https://wa.me/2001007834565?text=Hello%2C%20I%27m%20interested%20in%20the%20EnglishMastery%20speaking%20course";

const PricingSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const features = t("pricing.features", { returnObjects: true });

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-secondary/4 -z-10" />
      <div className="absolute top-0 start-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          {/* Header */}
          <AnimatedDiv variants={fadeUp} className="text-center mb-16">
            <Badge className="mb-4">{t("pricing.badge")}</Badge>
            <h2 className={clsx("text-3xl sm:text-4xl lg:text-5xl font-extrabold text-textPrimary mt-4 mb-4", isRTL && "font-arabic")}>
              {t("pricing.title")}
            </h2>
            <p className={clsx("text-lg text-textSecondary max-w-2xl mx-auto", isRTL && "font-arabic")}>
              {t("pricing.subtitle")}
            </p>
          </AnimatedDiv>

          {/* Pricing card */}
          <AnimatedDiv variants={scaleIn} className="max-w-2xl mx-auto">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative bg-surface rounded-3xl shadow-card border-2 border-primary/30 overflow-hidden"
            >
              {/* Popular badge */}
              <div className="absolute top-0 inset-x-0 flex justify-center">
                <div className="bg-gradient-to-r from-primary to-primaryHover text-white text-xs font-bold px-6 py-1.5 rounded-b-xl">
                  <Zap size={12} className="inline me-1" />
                  {t("pricing.popular")}
                </div>
              </div>

              <div className="p-8 pt-12">
                {/* Plan name */}
                <h3 className={clsx("text-xl font-bold text-textPrimary mb-6 text-center", isRTL && "font-arabic")}>
                  {t("pricing.planName")}
                </h3>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-end justify-center gap-2">
                    <span className={clsx("text-2xl font-bold text-textSecondary mt-2", isRTL && "font-arabic")}>
                      {t("pricing.currency")}
                    </span>
                    <span className="text-6xl font-extrabold text-textPrimary leading-none">
                      {t("pricing.price")}
                    </span>
                  </div>
                  <p className={clsx("text-textMuted text-sm mt-2", isRTL && "font-arabic")}>
                    {t("pricing.period")}
                  </p>
                </div>

                {/* Features grid */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-secondary" />
                      </div>
                      <span className={clsx("text-sm text-textSecondary", isRTL && "font-arabic")}>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button size="lg" className="w-full justify-center" onClick={() => window.open(WHATSAPP_URL, "_blank")}>
                  <span className={clsx(isRTL && "font-arabic")}>{t("pricing.cta")}</span>
                </Button>

                {/* Note */}
                <p className={clsx("text-center text-textMuted text-xs mt-4", isRTL && "font-arabic")}>
                  {t("pricing.note")}
                </p>
              </div>
            </motion.div>
          </AnimatedDiv>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default PricingSection;
