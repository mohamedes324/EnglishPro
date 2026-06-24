import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import StarRating from "../../shared/components/StarRating";
import Badge from "../../shared/components/Badge";
import { SectionWrapper, AnimatedDiv, fadeUp, scaleIn } from "../../utils/animations";
import { useLanguage } from "../../hooks/useLanguage";
import clsx from "clsx";

const avatarColors = [
  "from-primary to-primaryHover",
  "from-secondary to-secondary/70",
  "from-accent to-accent/70",
];

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const items = t("testimonials.items", { returnObjects: true });

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          {/* Header */}
          <AnimatedDiv variants={fadeUp} className="text-center mb-16">
            <Badge className="mb-4">{t("testimonials.badge")}</Badge>
            <h2 className={clsx("text-3xl sm:text-4xl lg:text-5xl font-extrabold text-textPrimary mt-4 mb-4", isRTL && "font-arabic")}>
              {t("testimonials.title")}
            </h2>
            <p className={clsx("text-lg text-textSecondary max-w-2xl mx-auto", isRTL && "font-arabic")}>
              {t("testimonials.subtitle")}
            </p>
          </AnimatedDiv>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <AnimatedDiv key={i} variants={scaleIn}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-surface rounded-2xl shadow-card border border-border p-6 h-full flex flex-col relative overflow-hidden"
                >
                  {/* Quote icon decoration */}
                  <Quote
                    size={48}
                    className="absolute top-4 end-4 text-primary/10"
                  />

                  {/* Stars */}
                  <StarRating count={item.rating} />

                  {/* Text */}
                  <p className={clsx("text-textSecondary text-sm leading-relaxed mt-4 mb-6 flex-1 relative z-10", isRTL && "font-arabic")}>
                    "{item.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <div className={clsx(
                      "w-11 h-11 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-sm font-bold shrink-0",
                      avatarColors[i % avatarColors.length]
                    )}>
                      {item.avatar}
                    </div>
                    <div>
                      <p className={clsx("font-bold text-textPrimary text-sm", isRTL && "font-arabic")}>{item.name}</p>
                      <p className={clsx("text-textMuted text-xs", isRTL && "font-arabic")}>{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedDiv>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
