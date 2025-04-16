import React from "react";
import { useTranslation } from "react-i18next";
import AnimatedComponent from "../animations/AnimatedComponent";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      title: t("Versatile Sizes"),
      description: t("Versatile Sizes_desc"),
    },
    {
      id: 2,
      title: t("Faster Manufacturing"),
      description: t("Faster Manufacturing_desc"),
    },
    {
      id: 3,
      title: t("Perfect Service"),
      description: t("Perfect Service_desc"),
    },
    {
      id: 4,
      title: t("Competitive Prices"),
      description: t("Competitive Prices_desc"),
    },
    {
      id: 5,
      title: t("Safe & Durable"),
      description: t("Safe & Durable_desc"),
    },
    {
      id: 6,
      title: t("Eco-Friendly"),
      description: t("Eco-Friendly_desc"),
    },
  ];

  return (
    <section className="py-32 bg-gray-50 font-jost">
      <div className="container mx-auto px-4">
        <AnimatedComponent animationType="fade-down">
          <div className="relative">
            <h2 className="text-5xl pb-20 leading-relaxed font-jost font-medium uppercase text-gray-800">
              {t("why_choose_us")}
            </h2>
            <h2 className="lg:text-7xl text-6xl absolute lg:-top-4 -top-10 -translate-x-0 leading-relaxed font-bold uppercase text-gray-500 opacity-10">
              {t("why_choose_us")}
            </h2>
          </div>
        </AnimatedComponent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <AnimatedComponent
              key={feature.id}
              animationType="fade-up"
              className="relative"
            >
              <div className="group  px-8   transition-all duration-300">
                <div className="absolute left-0 top-0 h-20 w-2 bg-yellow-500 transform scale-y-100 group-hover:scale-y-0 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  {t(feature.title)}
                </h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  {t(feature.description)}
                </p>
              </div>
            </AnimatedComponent>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default WhyChooseUs;
