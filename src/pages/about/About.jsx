import React from "react";
import AboutUs from "../../component/aboutUs/AboutUs";

import AboutColor from "../../component/aboutColor/AboutColor";
import AboutTop from "../../component/aboutTop/AboutTop";
import Services from "../services/Services";
import Partners from "../../component/parteners/Partners";

import bg from "/assets/images/about/bgAbout.jpg";
import AboutLocation from "../../component/aboutLocation/AboutLocation";
import WhyChooseUs from "../../component/whyChooseUs/WhyChooseUs";
import Network from "../../component/network/Network";
import Ezara from "../../component/ezara/Ezara";


const About = () => {
  return (
    <>
      <AboutTop img={bg} />
      <AboutUs />
      <WhyChooseUs />
      <AboutLocation />
      <AboutColor />
      <Network />
      {/* <Services /> */}
      {/* <Partners /> */}
    </>
  );
};

export default About;
