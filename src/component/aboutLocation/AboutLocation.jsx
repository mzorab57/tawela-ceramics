import React from "react";
import iraqMap from "/assets/images/aboutBg/tw_part4-removebg-preview.png?url";

const AboutLocation = () => {
  const locations = [
    {
      city: "Mosul",
      text: "Mosul Branch  / Al-Muthana",
      coordinates: { top: "15%", left: "45%" },
    },
    {
      city: "Erbil",
      text: "Erbil Branch / 100m Street",
      coordinates: { top: "20%", left: "58%" },
    },
    {
      city: "Sulaymaniyah",
      text: "Sulaymaniyah Branch / Arbat",
      coordinates: { top: "29%", left: "65%" },
    },
    {
      city: "Kirkuk",
      text: "Kirkuk Branch / Shorija",
      coordinates: { top: "38%", left: "50%" },
    },
    {
      city: "Baghdad",
      text: "Baghdad Branch / Al-Mansour",
      coordinates: { top: "52%", left: "46%" },
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4 font-jost">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
            <div className="relative">
        <h5 className="text-4xl leading-relaxed font-medium  uppercase text-gray-800 -translate-y-5 ">
        Tawela Ceramic in Iraq
          </h5>
          <h5 className="text-5xl absolute  -top-14   leading-relaxed font-medium  uppercase text-gray-400 opacity-15  ">
            Tawela Ceramic in Iraq
          </h5>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Tawela Ceramic Company is one of the largest ceramic distribution
            companies in Iraq. We proudly serve Iraqi citizens through our
            branches in the country's most important cities.
          </p>

          {/* Locations List */}
          <div className="space-y-4">
            {locations.map((location, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700 font-medium ">
                  {location.text} 
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-500  text-lg mt-8">
            All our branches provide the best service and offer the latest
            global ceramic models available.
          </p>
        </div>

        {/* Map Image */}
        <div className="relative">
          <img
            src={iraqMap}
            alt="Iraq Map with Tawela Locations"
            className="w-full "
          />
          {/* Location Markers */}
          {locations.map((location, index) => (
            <div
              key={index}
              className="absolute lg:size-4 size-2 border  bg-yellow-500 rounded-full animate-pulse"
              style={{
                top: location.coordinates.top,
                left: location.coordinates.left,
              }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="lg:text-sm text-xs  bg-white px-2   rounded shadow">
                  {location.city} 
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutLocation;
