import React from "react";
import { useTranslation } from "react-i18next";
import AnimatedComponent from "../animations/AnimatedComponent";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      title: "Versatile Sizes",
      description:
        "Our tiles come in a wide array of sizes to meet diverse project requirements. Whether you're designing a cozy bathroom, a spacious living room, or a sprawling commercial space, we have the perfect size for you.",
    },
    {
      id: 2,
      title: "Faster Manufacturing",
      description:
        "Efficiency is at the core of our production process. With advanced technology and streamlined operations, we ensure quick turnaround times without compromising quality.",
    },
    {
      id: 3,
      title: "Perfect Service",
      description:
        "We prioritize your satisfaction with exceptional customer service and support. From helping you choose the right tiles to ensuring timely delivery, our team is dedicated to making your experience seamless.",
    },
    {
      id: 4,
      title: "Competitive Prices",
      description:
        "High-quality doesn't have to mean high costs. We combine premium materials with cost-effective production methods to offer tiles that are as affordable as they are luxurious.",
    },
    {
      id: 5,
      title: "Safe & Durable",
      description:
        "Our tiles are engineered for longevity. Non-porous, resistant to stains, and capable of withstanding heavy wear and tear, they are perfect for residential and commercial spaces.",
    },
    {
      id: 6,
      title: "Eco-Friendly",
      description:
        "Sustainability is a cornerstone of our manufacturing process. We use eco-friendly raw materials and adopt energy-efficient practices to minimize our environmental footprint.",
    },
  ];

  return (
    <section className="py-32 bg-gray-50 font-jost">
      <div className="container mx-auto px-4">
        <AnimatedComponent animationType="fade-down">
        <h1 className="text-5xl pb-20 leading-relaxed font-jost font-medium relative uppercase text-gray-800 ">
              Why Choose Us
              <h5 className="lg:text-7xl text-6xl   absolute lg:-top-4 -top-10   -translate-x-0  leading-relaxed font-bold  uppercase text-gray-500 opacity-10  ">
                Why Choose Us
              </h5>
            </h1>
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
