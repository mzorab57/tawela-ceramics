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
      className="flex flex-col items-center justify-between py-12 lg:py-20  overflow-hidden relative bg-gradient-to-t from-gray-400 via-gray-50 to-gray-50/30 "
    >
      {/* Left Fog */}
   
      <h1 className="lg:text-4xl text-3xl w-full whitespace-nowrap text-center  leading-relaxed font-semibold relative  uppercase text-gray-800 my-10 lg:my-0  ">
      Our Collaborations
        <h5 className="lg:text-7xl text-4xl whitespace-nowrap  absolute lg:-top-12 -top-7  w-full     leading-relaxed font-bold  uppercase text-gray-500 opacity-10  ">
        Collaborations
        </h5>
        </h1>

      <div className="relative mt-12 overflow-hidden w-full">
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
