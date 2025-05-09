import React from "react";
import { useTranslation } from "react-i18next";
import AnimatedComponent from "../animations/AnimatedComponent";

const AwardsSection = () => {
  const { t } = useTranslation();

  const awardsData = [
    {
      id: 1,
      title: t("size_120_240"),
      description: t("size_120_240_desc"),
      link: "https://marblex.peacefulqode.co.in/our-services/",
    },
    {
      id: 2,
      title: t("size_120_260"),
      description: t("size_120_260_desc"),
      link: "https://marblex.peacefulqode.co.in/carpets-rugs/",
    },
    {
      id: 3,
      title: t("size_120_300"),
      description: t("size_120_300_desc"),
      link: "https://marblex.peacefulqode.co.in/about-us/",
    },
    {
      id: 4,
      title: t("size_160_320"),
      description: t("size_160_320_desc"),
      link: "https://marblex.peacefulqode.co.in/carpets-rugs/",
    },
  ];

  return (
    <div className="w-full" style={{ backgroundImage: "url(https://arkio-next.netlify.app/images/testimonial/bg.png)" }}>
    <section className="w-full  py-16 px-4 max-w-[1500px] overflow-hidden  mx-auto" >
      <div className="flex lg:flex-row flex-col justify-between  ">
        <div className="text-start w-full lg:w-1/3 mb-12 overflow-hidden ">
          <div className="lg:translate-x- ">
            <span className="text-sm uppercase text-yellow-600 ">
              {t("best_slap")}
            </span>
            <AnimatedComponent animationType="fade-right" dataAosDuration="500">
              <h2 className="text-5xl font-medium mt-2  text-gray-700">
                {t("our_slab_offering")}
              </h2>
            </AnimatedComponent>
          </div>
          <AnimatedComponent animationType="fade-up" dataAosDuration="500">
            <img
              src="https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/4.png"
              alt="slap image"
              className="w-96 pt-16  animate-custom-bounce2  "
            />
          </AnimatedComponent>
        </div>
        <div className="lg:w-3/4 w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 font-jost">
          {awardsData.map((award, index) => (
            <AnimatedComponent
              animationType="fade-right"
              dataAosDuration="500"
              key={award.id}
              className="bg-white p-6  rounded-2xl"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-col space-y-6">
                <div className="text-2xl border-b-2 pb-5 whitespace-nowrap  text-yellow-600 flex items-center gap-3">
                  <h1>0{index + 1}/ </h1>
                  <h3 className="text-3xl  text-gray-700 ">{award.title}</h3>
                </div>

                <p className="text-gray-500  lg:line-clamp-3 lg:w-80 text-lg ">
                  {award.description}
                </p>
                <a
                  // href={award.link}
                  className="inline-flex items-center text-yellow-600 hover:underline mt-2"
                  dir="ltr"
                >
                  {t("view_more")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </AnimatedComponent>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default AwardsSection;
