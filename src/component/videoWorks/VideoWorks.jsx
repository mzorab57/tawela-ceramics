import React from "react";
import { useTranslation } from "react-i18next";
import VideoText from "../videoText/VideoText";
import VideoCard from "../videoCard/VideoCard";
import AnimatedComponent from "../animations/AnimatedComponent";
import services_vide from "/assets/videos/tv1.mp4";
import services_vide2 from "/assets/videos/tv2.mp4";
import services_vide3 from "/assets/videos/tv3.MP4?url"; // Note the ?url

const VideoWorks = () => {
  const { t } = useTranslation();

  return (
    <div className="grid lg:flex lg:justify-between relative  items-center mt-32 mb-16 pt-14 lg:pt-0 pb-14 bg-gray-100">
      <div className="text-3xl rtl:right-4 md:text-4xl lg:text-5xl font-jost font-medium absolute -top-20 lg:top-0 left-4 lg:left-36 z-10">
        <AnimatedComponent animationType="fade-right">
          Our Video Projects
        </AnimatedComponent>
      </div>
      <div className="size-14 hidden bg-white lg:block absolute top-0 w-full"></div>
      <AnimatedComponent animationType="fade-right">
        <VideoText />
      </AnimatedComponent>
      <main className="md:w-4/3 mt-8 lg:mt-0">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <AnimatedComponent animationType="fade-up">
            <VideoCard
              number="01"
              title={t("videoCards.0.title")}
              description={t("videoCards.0.description")}
              videoSrc={services_vide}
              poster="/assets/images/gallery/g(4).JPG"
            />
          </AnimatedComponent>
          <AnimatedComponent animationType="fade-up">
            <VideoCard
              number="03"
              title={t("videoCards.1.title")}
              description={t("videoCards.1.description")}
              videoSrc={services_vide2}
              poster="/assets/images/gallery/g(15).JPG"
            />
          </AnimatedComponent>
          <AnimatedComponent animationType="fade-up">
            <VideoCard
              number="02"
              title={t("videoCards.2.title")}
              description={t("videoCards.2.description")}
              videoSrc={services_vide3}
              poster="/assets/images/gallery/g(16).JPG"
            />
          </AnimatedComponent>
        </div>
      </main>
    </div>
  );
};

export default VideoWorks;
