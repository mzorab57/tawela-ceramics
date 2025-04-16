import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdZoomOutMap } from "react-icons/md";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { useTranslation } from "react-i18next";

function Gallery() {
  // Updated images array with WebP format and fallbacks
  const images = [
    {
      src: "/assets/images/gallery/g(1).webp",
      fallback: "/assets/images/gallery/g(1).JPG",
      width: 1920,
      height: 1080,
      alt: "Gallery image 1",
    },
    {
      src: "/assets/images/gallery/g(2).webp",
      fallback: "/assets/images/gallery/g(2).JPG",
      width: 1920,
      height: 1080,
      alt: "Gallery image 2",
    },
    {
      src: "/assets/images/gallery/g(3).webp",
      fallback: "/assets/images/gallery/g(3).JPG",
      width: 1920,
      height: 1080,
      alt: "Gallery image 3",
    },
    {
      src: "/assets/images/gallery/g(4).webp",
      fallback: "/assets/images/gallery/g(4).JPG",
      width: 1920,
      height: 1080,
      alt: "Gallery image 4",
    },
    {
      src: "/assets/images/gallery/g(5).webp",
      fallback: "/assets/images/gallery/g(5).JPG",
      width: 1920,
      height: 1080,
      alt: "Gallery image 5",
    },
    {
      src: "/assets/images/gallery/g(6).webp",
      fallback: "/assets/images/gallery/g(6).JPG",
      width: 1920,
      height: 1080,
      alt: "Gallery image 6",
    },
    {
      src: "/assets/images/gallery/g(7).webp",
      fallback: "/assets/images/gallery/g(7).JPG",
      width: 1920,
      height: 1080,
      alt: "Gallery image 7",
    },
    {
      src: "/assets/images/gallery/g(8).webp",
      fallback: "/assets/images/gallery/g(8).JPG",
      width: 1920,
      height: 1080,
      alt: "Gallery image 8",
    },
    {
      src: "/assets/images/gallery/g(9).webp",
      fallback: "/assets/images/gallery/g(9).JPG",
      width: 1920,
      height: 1080,
      alt: "Gallery image 9",
    },
    {
      src: "/assets/images/gallery/g(10).webp",
      fallback: "/assets/images/gallery/g(10).JPG",
      width: 1920,
      height: 1080,
      alt: "Gallery image 10",
    },
    {
      src: "/assets/images/gallery/g(11).webp",
      fallback: "/assets/images/gallery/g(11).JPG",
      width: 1920,
      height: 1080,
      alt: "Gallery image 11",
    },
    {
      src: "/assets/images/gallery/g(12).webp",
      fallback: "/assets/images/gallery/g(12).JPG",
      width: 1920,
      height: 1080,
      alt: "Gallery image 12",
    },
    {
      src: "/assets/images/gallery/g(13).webp",
      fallback: "/assets/images/gallery/g(13).JPG",
      width: 1920,
      height: 1080,
      alt: "Gallery image 13",
    },
    {
      src: "/assets/images/gallery/g(14).webp",
      fallback: "/assets/images/gallery/g(14).JPG",
      width: 1920,
      height: 1080,
      alt: "Gallery image 14",
    },
    {
      src: "/assets/images/gallery/g(15).webp",
      fallback: "/assets/images/gallery/g(15).JPG",
      width: 1920,
      height: 1080,
      alt: "Gallery image 15",
    },
  ];

  const settings = {
    className: "center",
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    slidesPerRow: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const [index, setIndex] = useState(-1);
  const [isOpen, setModalOpen] = useState(false);
  const setIsOpen = (state, i) => {
    setIndex(i);
    setModalOpen(state);
  };

  const { t } = useTranslation();

  return (
    <section
      id="works"
      className="py-14 lg:py-24 overflow-hidden relative bg-cover bg-center bg-no-repeat"
    >
      <div
        style={{
          clipPath: "polygon(10% 0%, 100% 0%, 89% 100%, 0% 100%)",
        }}
        className="container mx-auto relative z-10 max-w-full"
      >
        <h1 className="text-4xl  whitespace-nowrap text-center  leading-relaxed font-semibold relative  uppercase text-gray-800 my-10 lg:my-0 ml-6 ">
          {t("gallery")}
          <h5 className="lg:text-7xl text-6xl whitespace-nowrap  -translate-y-10   leading-relaxed font-bold  uppercase text-gray-500 opacity-10  ">
          {t("gallery")}
          </h5>
        </h1>

        <div className="relative z-20">
          <Slider {...settings}>
            {images.map((item, i) => (
              <div key={i} className="w-full border-2 border-teal-500">
                <div
                  className="group relative flex justify-center items-center"
                  onClick={() => setIsOpen(true, i)}
                >
                  {/* Optimized Image with Picture Element */}
                  <picture>
                    <source srcSet={item.src} type="image/webp" />
                    <img
                      src={item.fallback}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading={i < 3 ? "eager" : "lazy"}
                      decoding="async"
                      className="object-cover w-full h-[30rem] lg:h-[650px] cursor-pointer"
                    />
                  </picture>

                  {/* Hover Overlay with Icon */}
                  <div className="absolute inset-0 bg-teal-400/50 border-8  border-white text-center flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                    <MdZoomOutMap className="text-orange-500 bg-white scale-100 hover:scale-125  duration-500 transition-all transform text-4xl " />{" "}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <Lightbox
          index={index}
          slides={images}
          open={isOpen}
          plugins={[Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
          close={() => setIsOpen(false)}
          styles={{
            thumbnail: {
              borderColor: "#FB8C00",
            },
          }}
        />
      </div>

      {/* Background Image Optimization */}
      <div className="absolute inset-0 lg:opacity-40 opacity-100">
        <picture>
          <source srcSet="/assets/images/gallery/bgre.webp" type="image/webp" />
          <img
            src="/assets/images/gallery/bgre.jpg"
            alt="Gallery background"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
    </section>
  );
}

export default Gallery;
