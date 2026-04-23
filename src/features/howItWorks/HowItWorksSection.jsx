import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Badge from "../../shared/components/Badge";
import { SectionWrapper, AnimatedDiv, fadeUp } from "../../utils/animations";
import { useLanguage } from "../../hooks/useLanguage";
import clsx from "clsx";

const stepColors = [
  { bg: "bg-primary", text: "text-primary", light: "bg-primary/10", border: "border-primary/30" },
  { bg: "bg-secondary", text: "text-secondary", light: "bg-secondary/10", border: "border-secondary/30" },
  { bg: "bg-accent", text: "text-accent", light: "bg-accent/10", border: "border-accent/30" },
];

const HowItWorksSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const steps = t("howItWorks.steps", { returnObjects: true });

  return (
    <section id="howItWorks" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-secondary/3 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          {/* Header */}
          <AnimatedDiv variants={fadeUp} className="text-center mb-16">
            <Badge className="mb-4">{t("howItWorks.badge")}</Badge>
            <h2 className={clsx("text-3xl sm:text-4xl lg:text-5xl font-extrabold text-textPrimary mt-4 mb-4", isRTL && "font-arabic")}>
              {t("howItWorks.title")}
            </h2>
            <p className={clsx("text-lg text-textSecondary max-w-2xl mx-auto", isRTL && "font-arabic")}>
              {t("howItWorks.subtitle")}
            </p>
          </AnimatedDiv>

          {/* Steps */}
          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-20 start-1/6 end-1/6 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, i) => (
                <AnimatedDiv key={i} variants={fadeUp}>
                  <div className="relative flex flex-col items-center text-center">
                    {/* Number circle */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={clsx(
                        "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-soft border-2",
                        stepColors[i].light,
                        stepColors[i].border
                      )}
                    >
                      <span className={clsx("text-3xl font-extrabold", stepColors[i].text)}>
                        {step.number}
                      </span>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-textPrimary mb-1">{step.title}</h3>
                    <p className={clsx("text-base font-semibold mb-3", stepColors[i].text, isRTL && "font-arabic")}>
                      {step.titleAr}
                    </p>
                    <p className={clsx("text-textSecondary text-sm leading-relaxed max-w-xs", isRTL && "font-arabic")}>
                      {step.desc}
                    </p>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default HowItWorksSection;
