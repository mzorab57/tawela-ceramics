import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";

const AboutColor = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const products = [
    {
      id: 1,
      name: t("marble"),
      image:
        "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/1-1.png",
    },
    {
      id: 2,
      name: t("limestone"),
      image:
        "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/2-1.png",
    },
    {
      id: 3,
      name: t("onyx"),
      image:
        "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/3-1.png",
    },
    {
      id: 4,
      name: t("quartz"),
      image:
        "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/4-1.png",
    },
    {
      id: 5,
      name: t("granite"),
      image:
        "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/5.png",
    },
    {
      id: 6,
      name: t("travertine"),
      image:
        "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/6.png",
    },
    {
      id: 6,
      name: t("travertine"),
      image:
        "https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/6.png",
    },
  ];

  return (
    <div className={`relative text-white font-jost isolate ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background Container - Fixed within component */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/marble_720.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-gray-700/50" />
      </div>

      {/* Content Container */}
      <div  className="relative z-10 py-32 ">
        <div className="container mx-auto px-4 max-w-[1560px]">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-12">
            <div className="space-y-4">
              <span className="text-yellow-600  text-sm uppercase tracking-wider">
                --- {t("choose_your_stone")}
              </span>
              <h2 className="text-5xl  ">{t("showroom_with_selection")}</h2>
            </div>
          </div>

          {/* Product Carousel */}
          <Swiper
          dir="ltr"
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet bg-yellow-600",
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="pt-10 pb-16"
          >
            {products.map((product, index) => (
              <SwiperSlide key={`slide-${index}`}>
                <div  className=" cursor-pointer transform transition-all duration-300 hover:scale-105">
                  <div
                    className=" p-6 rounded-xl shadow-sm 
                    transform transition-all duration-300 
                    -hover:-translate-y-2 -hover:shadow-xl"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover 
                          transform transition-transform duration-300 
                          "
                      />
                    </div>
                    <h3
                      className="text-center  font-medium 
                      -hover:text-yellow-600 transition-colors"
                    >
                      {product.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutColor;
