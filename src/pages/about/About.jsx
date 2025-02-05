import React from "react";
import AboutUs from "../../component/aboutUs/AboutUs";

import AboutColor from "../../component/aboutColor/AboutColor";
import AboutTop from "../../component/aboutTop/AboutTop";
import Services from "../services/Services";
import Partners from "../../component/parteners/Partners";

const About = () => {
  return (
    <>
      <AboutTop />
      <AboutUs />
      <AboutColor />
      <Services />
      <Partners />
    </>
  );
};

export default About;
