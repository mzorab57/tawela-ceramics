import React from "react";
import AnimatedComponent from "../../component/animations/AnimatedComponent";
import foolr from "/assets/images/icon/floor.png";
import tile from "/assets/images/icon/tiles.png";
import trowel from "/assets/images/icon/trowel.png";

const Services = () => {
  const featuresData = [
    {
      id: 1,
      icon: foolr,
      title: "Ceramics",
      description:
        "Temperate ocean-bass sea chub unicorn treefish eulachon tidewater goby.",
    },
    {
      id: 2,
      icon: trowel,
      title: "Porcelain",
      description:
        "Temperate ocean-bass sea chub unicorn treefish eulachon tidewater goby.",
    },
    {
      id: 3,
      icon: tile,
      title: "Granet",
      description:
        "Temperate ocean-bass sea chub unicorn treefish eulachon tidewater goby.",
    },
  ];

  return (
    <div>
      <div className="grid lg:grid-cols-2 py-20 max-w-[1650px] overflow-hidden mx-auto w-full justify-start px-10 items-center gap-20 ">
        <AnimatedComponent animationType="fade-right" dataAosDuration="500">
          <div className="w-full py-10">
            <h1 className="text-4xl pb-8 leading-relaxed font-jost font-medium relative uppercase text-gray-800 ">
              Products
              <h5 className="lg:text-7xl text-6xl   absolute lg:-top-4 -top-10   -translate-x-7  leading-relaxed font-bold  uppercase text-gray-500 opacity-10  ">
                Products
              </h5>
            </h1>
            <p className=" lg:mb-16 lg:text-2xl lg:max-w-xl  text-slate-500">
              Our car oil is engineered to reduce wear and tear, ensuring your
              engine runs smoothly even under the toughest conditions.
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
        className="bg-neutral-800 bg-cover bg-center "
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
              <div className="relative lg:space-y-7 group space-y-5 overflow-hidden group bg-transparent hover:bg-white lg:border-r lg:p-14 p-5 transition-all duration-500 ease-in-out hover:scale-105 flex flex-col items-start text-start h-full">
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
                <h5 className="mb-4 text-2xl font-jost font-medium group-hover:text-gray-700 text-white">
                  {feature.title}
                </h5>
                <p className="text-gray-300 group-hover:text-gray-500">{feature.description}</p>
              </div>
            </AnimatedComponent>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
