import React from "react";
import AnimatedComponent from "../../component/animations/AnimatedComponent";
import foolr from "/assets/images/icon/floor.png";
import tile from "/assets/images/icon/tiles.png";
import trowel from "/assets/images/icon/trowel.png";
import { Link } from "react-router-dom";

const Services = () => {
  const featuresData = [
    {
      id: 1,
      icon: foolr,
      title: "CERAMIC",
      description:
        "Example View ",
    },
    {
      id: 2,
      icon: trowel,
      title: "PORCELAIN",
      description:
        "Example View ",
    },
    {
      id: 3,
      icon: tile,
      title: "GRANITE",
      description:
        "Example View ",
    },
  ];

  return (
    <div>
      <div className="grid lg:grid-cols-2 py-20 max-w-[1650px] overflow-hidden mx-auto w-full justify-start px-10 items-center gap-20 ">
        <AnimatedComponent animationType="fade-right" dataAosDuration="500">
          <div className="w-full py-10">
            <h1 className="text-5xl pb-8 leading-relaxed font-jost font-medium relative uppercase text-gray-800 ">
              Products
              <h5 className="lg:text-7xl text-6xl   absolute lg:-top-4 -top-10   -translate-x-7  leading-relaxed font-bold  uppercase text-gray-500 opacity-10  ">
                Products
              </h5>
            </h1>
            <p className=" lg:mb-16 lg:text-xl lg:max-w-xl  text-slate-600">
              At  <span className="font-medium font-jost text-gray-600 text-xl">Tawela Ceramic </span> , we offer a premium selection of ceramic,
              granite, and porcelain products, designed to elevate any space
              with elegance and durability.
              <p className=" py-5">
                <span className="font-medium font-jost text-gray-600 text-2xl">Ceramic: </span>{" "}
                Versatile and stylish, our ceramic products combine beauty with
                practicality, making them ideal for walls, floors, and
                decorative applications.
              </p>
              <p className=" pb-5">
                <span className="font-medium font-jost text-gray-600 text-2xl">Granite: </span> Known
                for its natural strength and stunning textures, our granite
                collection adds timeless sophistication to any environment.
              </p>
              <p>
                <span className="font-medium font-jost text-gray-600 text-2xl">Porcelain: </span>{" "}
                With superior durability and water resistance, our porcelain
                products are perfect for both indoor and outdoor use, offering a
                sleek and modern aesthetic.
              </p>
            </p>
          </div>
        </AnimatedComponent>
        <AnimatedComponent animationType="fade-left" dataAosDuration="500">
          <img
            src="https://marblex.peacefulqode.co.in/wp-content/uploads/2022/11/2.png"
            alt="product"
            className="animate-custom-bounce  "
          />
        </AnimatedComponent>
      </div>

      <section
        className="bg-neutral-800 py-10 bg-cover bg-center "
        style={{
          backgroundImage:
            'url("https://wowtheme7.com/tf/logistick/assets/images/shapes/features-bg.png")',
        }}
      >
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {featuresData.map((feature, index) => (
            <AnimatedComponent
              animationType="fade-up"
              dataAosDuration="1000"
              key={feature.id}
            >
              <div className="relative font-jost lg:space-y-7 group space-y-5 overflow-hidden group bg-transparent hover:bg-white lg:border-r lg:p-14 p-5 transition-all duration-500 ease-in-out hover:scale-105 flex flex-col items-start text-start h-full">
                <span className="absolute top-10 text-orange-400/70 right-4 text-xl lg:text-3xl font-jost font-medium ">
                  {`0${feature.id}`}
                </span>
                <div className="mb-6 group-hover:animate-bounce  ">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="lg:size-16 size-14  bg-white"
                  />
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="lg:size-24 size-10  absolute right-16 lg:right-28 top-10 opacity-10 group-hover:hidden  bg-white"
                  />
                  <span className="lg:size-14 size-12 rounded-full group-hover:hidden bg-orange-500 absolute top-16 left-10 opacity-20"></span>
                </div>
                <h5 className="mb-4 text-2xl  font-medium group-hover:text-gray-700 text-white">
                  {feature.title}
                </h5>
                <Link onClick={() => window.scrollTo(0, 0)} to={`${'/portfolio'}`} className="text-orange-400/70 translate-y-10 flex justify-center items-center font-medium ">
                  {feature.description} <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 mt-0.5 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </AnimatedComponent>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
