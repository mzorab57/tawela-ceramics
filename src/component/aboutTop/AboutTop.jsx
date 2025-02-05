import React from "react";
import bg from "/assets/images/about/bgAbout.jpg";
import { Link } from "react-router-dom";

const AboutTop = () => {
  return (
    <section className="navigation">
      <div className="relative">
        <img
          src={bg}
          alt="background"
          className="object-cover h-[500px] w-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-white via-transparent to-transparent">
          <h2 className="text-3xl lg:text-4xl text-white  font-jost">
            About Us
          </h2>
          <ul className="flex justify-center space-x-2 text-gray-300 mt-4  p-2 px-5">
            <li>
              <Link to="/" className="text-gray-200 text-xl font-jost font-medium">
                Home
              </Link>
            </li>
            <li className="text-gray-200 text-xl font-jost font-medium">
              - - About
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutTop;
