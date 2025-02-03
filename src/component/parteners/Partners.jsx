import React from "react";

import mayorca from "/assets/images/partners/mayorca.jpg";
import miran from "/assets/images/partners/miran.png";
import pak from "/assets/images/partners/pak.jpg";
import rovar from "/assets/images/partners/rovar.jpg";
import shacity from "/assets/images/partners/shacity.jpg";
import shad from "/assets/images/partners/shad.jpg";
import sharisharan from "/assets/images/partners/sharisharan.jpg";
import titanictowers from "/assets/images/partners/titanictowers.jpg";
import suli from "/assets/images/partners/suli.png";
import homele from "/assets/images/partners/homele.jpg";

const images = [
  mayorca,
  miran,
  pak,
  sharisharan,
  rovar,
  shad,
  shacity,
  titanictowers,
  suli,
  homele,
  mayorca,
  miran,
  pak,
  sharisharan,
  rovar,
  shad,
  shacity,
  titanictowers,
  suli,
  homele,
];

const Partners = () => {
  return (
    <main
      dir="ltr"
      className="flex flex-col items-center justify-between py-20 overflow-hidden relative bg-gradient-to-t from-teal-100/20 via-teal-50 to-teal-50/30 "
    >
      {/* Left Fog */}
      <h4 className="text-orange-500  text-2xl lg:text-3xl mb-10 font-medium">
        Our Collaborations
      </h4>

      <div className="relative overflow-hidden w-full">
        <div className="flex gap-14  animate-scroll">
          {images.concat(images).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Partner logo ${index + 1}`}
              className="h-28 w-auto rounded-lg flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Right Fog */}
      <div className="absolute inset-y-0 right-0 w-8 lg:w-16 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10" />
    </main>
  );
};

export default Partners;
