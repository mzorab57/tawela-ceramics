import React from "react";
import { useTranslation } from "react-i18next";
import AnimatedComponent from "../animations/AnimatedComponent";

const Network = () => {
  const { t } = useTranslation();

  const countries = [
    "mayorca",
     "MiranCity",
     "pak",
     "sharisharan",
     "rovar",
     "ShariShad",
     "shacity",
     "titanictowers",
     "suli",
     "mayorca",
     "MiranCity",
     "pak",
     "sharisharan",
    //  "rovar",
     "ShariShad",
     "shacity",
     "titanictowers",
     "suli",
     "Qaiwan"
  ];

return (
    <section className="py-48 text-gray-700 ">
        <div className="container   m-auto px-4">
            <AnimatedComponent animationType="fade-down">
            <div className="relative">
              <h2 className="text-5xl leading-relaxed lg:translate-x-6 font-medium uppercase text-gray-800 -translate-y-5">
                Our Network
              </h2>
              <h2 className="lg:text-7xl text-5xl absolute -top-14 leading-relaxed font-medium uppercase text-gray-400 opacity-15">
                Our Network
              </h2>
            </div>
            </AnimatedComponent>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 translate-y-16">
                {countries.map((country,i) => (
                    <AnimatedComponent
                        key={i}
                        animationType="fade-up"
                        className="group"
                    >
                        <div className="flex flex-col items-center">
                            <div
                                className="relative w-24 h-24 mb-4 rounded-lg overflow-hidden 
                                                        transform transition-all duration-300 
                                                        group-hover:scale-110 group-hover:shadow-xl"
                            >
                                <img
                                    src={`/assets/images/partners/${country}.jpg`}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `/assets/images/partners/${country}.png`;
                                    }}
                                    alt={`${country} flag`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
                            </div>
                            <h3
                                className="text-lg font-medium text-center text-gray-700 
                                                     group-hover:text-white transition-colors duration-300"
                            >
                                {country}
                            </h3>
                        </div>
                    </AnimatedComponent>
                ))}
            </div>
        </div>
    </section>
);
};

export default Network;
