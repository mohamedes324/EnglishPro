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
  "from-purple-500 to-purple-700",
  "from-pink-500 to-rose-500",
  "from-teal-500 to-teal-700",
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

          {/* Overall rating bar */}
          <AnimatedDiv variants={fadeUp} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 bg-surface rounded-2xl border border-border p-6 shadow-soft">
            <div className="text-center">
              <p className="text-5xl font-extrabold text-primary">4.9</p>
              <StarRating count={5} />
              <p className={clsx("text-textMuted text-sm mt-1", isRTL && "font-arabic")}>Overall Rating</p>
            </div>
            <div className="w-px h-16 bg-border hidden sm:block" />
            <div className="flex flex-col gap-2 w-full max-w-xs">
              {[5, 4, 3].map((stars) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="text-sm text-textSecondary w-4">{stars}</span>
                  <span className="text-accent text-sm">★</span>
                  <div className="flex-1 h-2 bg-bg rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full"
                      style={{ width: stars === 5 ? "88%" : stars === 4 ? "9%" : "3%" }}
                    />
                  </div>
                  <span className="text-xs text-textMuted">
                    {stars === 5 ? "88%" : stars === 4 ? "9%" : "3%"}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-px h-16 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-extrabold text-textPrimary">1,200+</p>
              <p className={clsx("text-textMuted text-sm", isRTL && "font-arabic")}>Happy Students</p>
            </div>
          </AnimatedDiv>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
