import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Ezara = () => {
  const brandImages = [
    {
      src: "/assets/images/brand/fChina.webp",
      country: "China",
    },
    {
      src: "/assets/images/brand/fEtalia.webp",
      country: "Italy",
    },
    {
      src: "/assets/images/brand/fIndia.webp",
      country: "India",
    },
    {
      src: "/assets/images/brand/fIran.webp",
      country: "Iran",
    },
    {
      src: "/assets/images/brand/fChina.webp",
      country: "China",
    },
    {
      src: "/assets/images/brand/fEtalia.webp",
      country: "Italy",
    },
    {
      src: "/assets/images/brand/fIndia.webp",
      country: "India",
    },
    {
      src: "/assets/images/brand/fIran.webp",
      country: "Iran",
    },
  ];

  return (
    <div className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Decorative elements */}

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header Section with enhanced styling */}
        <div className="text-center space-y-6 mb-4">
          <div className="inline-flex items-center justify-center"></div>

          <div className="relative text-gray-500">
            <h1 className="text-4xl  leading-relaxed font-jost font-medium relative uppercase text-gray-800 ">
              Industry Leaders
              <h5 className=" lg:text-7xl text-5xl w-full  absolute -top-10 leading-relaxed font-bold  uppercase text-gray-500 opacity-10  ">
                Partnering
              </h5>
            </h1>
            <h2 className="mt-6 text-gray-700 max-w-2xl text-5xl mx-auto font-jost font-medium "></h2>
            <p className=" text-gray-500 max-w-2xl mx-auto font-jost text-lg">
              Partnering with world-class brands to create exceptional
              experiences
            </p>
          </div>
        </div>

        {/* Enhanced Brands Slider */}
        <div className="relative px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={5}
            loop
            speed={1000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 20 },
              500: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 40 },
            }}
            className="py-10"
          >
            {brandImages.map((item, index) => (
              <SwiperSlide key={index} className="group">
                <div
                  className=" backdrop-blur-sm p-3 py-4   shadow-[0_0_15px_rgba(0,0,0,0.05)] 
                  hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] transition-all duration-500 
                  hover:-translate-y-1 border border-gray-100/50"
                >
                  <span className="block text-center text-gray-400 font-jost mb-4">
                    {item.country}
                  </span>
                  <img
                    src={item.src}
                    alt={`${item.country} flag`}
                    className="max-h-16 w-full mx-auto 
                      group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/150")
                    }
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Ezara;
