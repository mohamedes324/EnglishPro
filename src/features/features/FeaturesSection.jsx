import { useTranslation } from "react-i18next";
import { MessageCircle, BookOpen, Zap, Users } from "lucide-react";
import Card from "../../shared/components/Card";
import Badge from "../../shared/components/Badge";
import { SectionWrapper, AnimatedDiv, fadeUp, staggerContainer } from "../../utils/animations";
import { useLanguage } from "../../hooks/useLanguage";
import clsx from "clsx";

const iconMap = {
  MessageCircle: <MessageCircle size={28} />,
  BookOpen: <BookOpen size={28} />,
  Zap: <Zap size={28} />,
  Users: <Users size={28} />,
};

const colors = [
  "from-primary/20 to-primary/5 text-primary",
  "from-secondary/20 to-secondary/5 text-secondary",
  "from-accent/20 to-accent/5 text-accent",
  "from-primaryHover/20 to-primaryHover/5 text-primaryHover",
];

const FeaturesSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const items = t("features.items", { returnObjects: true });

  return (
    <section id="features" className="py-20 lg:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          {/* Header */}
          <AnimatedDiv variants={fadeUp} className="text-center mb-16">
            <Badge className="mb-4">{t("features.badge")}</Badge>
            <h2 className={clsx("text-3xl sm:text-4xl lg:text-5xl font-extrabold text-textPrimary mt-4 mb-4", isRTL && "font-arabic")}>
              {t("features.title")}
            </h2>
            <p className={clsx("text-lg text-textSecondary max-w-2xl mx-auto", isRTL && "font-arabic")}>
              {t("features.subtitle")}
            </p>
          </AnimatedDiv>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <AnimatedDiv key={i} variants={fadeUp}>
                <Card className="h-full text-center group">
                  {/* Icon */}
                  <div className={clsx(
                    "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110",
                    colors[i]
                  )}>
                    {iconMap[item.icon]}
                  </div>

                  {/* Bilingual title */}
                  <h3 className="text-lg font-bold text-textPrimary mb-1">{item.title}</h3>
                  <p className={clsx("text-base font-semibold text-primary mb-3", isRTL && "font-arabic")}>
                    {item.titleAr}
                  </p>
                  <p className={clsx("text-sm text-textSecondary leading-relaxed", isRTL && "font-arabic")}>
                    {item.desc}
                  </p>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default FeaturesSection;
