import React from "react";
import { Route, Routes } from "react-router-dom";

import Hero from "../pages/hero/Hero";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Ezara from "../component/ezara/Ezara";
import VideoWorks from "../component/videoWorks/VideoWorks";
import AwardsSection from "../component/awardSection/AwardsSection";
import Gallery from "../pages/gallery/Gallery";
import Projects from "../pages/projects/Projects";
import Partners from "../component/parteners/Partners";
import Video from "../pages/video/Video";
import AboutUs from "../component/aboutUs/AboutUs";
import OurHistory from "../pages/ourHistory/OurHistory";

const AppRoutes = ({ setMenuOpen }) => {
  return (
    // aw set show service bo awaia katek mouse lasar page lachu la har shwenek bet colse aw hover bkat
    <div onMouseOut={() => setMenuOpen(false)}>
      <Routes>
        <Route
          index
          path="/"
          element={
            <>
              <Hero />
              <AboutUs />
              <Services />
              <Ezara />
              <VideoWorks />
              <AwardsSection />
              <Gallery />
              <Partners />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/video" element={<Video />} />
        <Route path="/ourhistory" element={<OurHistory />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
