import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingScreen from "../component/loading/LoadingScreen";
import AboutColor from "../component/aboutColor/AboutColor";

// Lazy load components with delay to simulate network
const Hero = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/hero/Hero")), 0)
    )
);
const AboutUs = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../component/aboutUs/AboutUs")), 3000)
    )
);
const Services = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/services/Services")), 4000)
    )
);
const Ezara = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../component/ezara/Ezara")), 1000)
    )
);
const VideoWorks = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(import("../component/videoWorks/VideoWorks")),
        1000
      )
    )
);
const AwardsSection = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(import("../component/awardSection/AwardsSection")),
        1000
      )
    )
);
const Gallery = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/gallery/Gallery")), 1000)
    )
);
const Projects = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/projects/Projects")), 1000)
    )
);
const Partners = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../component/parteners/Partners")), 1000)
    )
);
const Video = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/video/Video")), 3000)
    )
);
const About = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/about/About")), 3000)
    )
);
const OurHistory = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../pages/ourHistory/OurHistory")), 3000)
    )
);

const LazyComponent = ({ children }) => (
  <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
);

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          index
          path="/"
          element={
            <>
              <LazyComponent>
                <Hero />
              </LazyComponent>
              <LazyComponent>
                <AboutUs />
              </LazyComponent>
              <LazyComponent>
                <Services />
              </LazyComponent>
              <LazyComponent>
                <VideoWorks />
              </LazyComponent>
              <LazyComponent>
                {/* <Ezara /> ama brand kanin wlatakana  */}
                <AboutColor />
              </LazyComponent>
              <LazyComponent>
                <AwardsSection />
              </LazyComponent>
              <LazyComponent>
                <Gallery />
              </LazyComponent>
              <LazyComponent>
                <Partners />
              </LazyComponent>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <LazyComponent>
              <About />
            </LazyComponent>
          }
        />
        <Route
          path="/portfolio"
          element={
            <LazyComponent>
              <Projects />
            </LazyComponent>
          }
        />
        <Route
          path="/video"
          element={
            <LazyComponent>
              <Video />
            </LazyComponent>
          }
        />
        <Route
          path="/ourhistory"
          element={
            <LazyComponent>
              <OurHistory />
            </LazyComponent>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
