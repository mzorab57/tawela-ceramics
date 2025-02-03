import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Ezara = () => {
  const brandImages = [
    "/assets/images/brand/fChina.webp",
    "/assets/images/brand/fEtalia.webp",
    "/assets/images/brand/fIndia.webp",
    "/assets/images/brand/fIran.webp",
    "/assets/images/brand/fChina.webp",
    "/assets/images/brand/fEtalia.webp",
    "/assets/images/brand/fIndia.webp",
    "/assets/images/brand/fIran.webp",
   
  ];

  return (
    <div className="client-carousel py-24 justify-between  flex lg:flex-row flex-col lg:items-center overflow-hidden bg-white ">
        <h1 className="text-4xl  whitespace-nowrap lg:translate-x-32  leading-relaxed font-semibold relative  uppercase text-gray-800 my-10 lg:my-0 ml-6 ">
          Our brand
        <h5 className="lg:text-7xl text-6xl whitespace-nowrap  absolute lg:-top-12 -top-10     leading-relaxed font-bold  uppercase text-gray-500 opacity-10  ">
          Our brand
        </h5>
        </h1>
      <div className="container max-w-6xl place-self-end">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={65}
          slidesPerView={5}
          loop
          speed={800}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 30 },
            500: { slidesPerView: 3, spaceBetween: 40 },
            768: { slidesPerView: 4, spaceBetween: 50 },
            992: { slidesPerView: 5, spaceBetween: 70 },
            1200: { slidesPerView: 6, spaceBetween: 149 },
          }}
        >
          {brandImages.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-end items-end group ">

              <img
                src={image}
                alt={`Brand ${index + 1}`}
                className="max-h-16 object-contain "
                onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Ezara;
