import React from "react";
import AboutUs from "../../component/aboutUs/AboutUs";

import AboutColor from "../../component/aboutColor/AboutColor";
import AboutTop from "../../component/aboutTop/AboutTop";
import Services from "../services/Services";
import Partners from "../../component/parteners/Partners";

import bg from "/assets/images/about/bgAbout.jpg";

const About = () => {
  return (
    <>
      <AboutTop img={bg} />
      <AboutUs />
      <AboutColor />
      <Services />
      <Partners />
    </>
  );
};

export default About;
