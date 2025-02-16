import React from "react";
import { useTranslation } from "react-i18next";
import VideoText from "../videoText/VideoText";
import VideoCard from "../videoCard/VideoCard";
import AnimatedComponent from "../animations/AnimatedComponent";
import services_vide from "/assets/videos/tv1.mp4";
import services_vide2 from "/assets/videos/tv2.mp4";
import services_vide3 from "/assets/videos/tv3.MP4?url"; 

const VideoWorks = () => {
  const { t } = useTranslation();

  return (
    <div className="grid lg:flex lg:justify-between relative overflow-hidden items-center mt-32 mb-16 py-14 lg:pt-0 bg-gray-100">
      <div className="text-3xl rtl:right-4 lg:-translate-x-7  md:text-4xl lg:text-5xl font-jost font-medium absolute -top-20 lg:top-0 left-4 lg:left-36 z-10">
        <AnimatedComponent animationType="fade-right">
          {t("Our Video Projects")}
        </AnimatedComponent>
      </div>
      <AnimatedComponent animationType="fade-right">
        <VideoText />
      </AnimatedComponent>
      <main className="w-full px-4    mt-16 lg:mt-0">
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-14">
          <VideoCard
            number="01"
            title={t("Ceramics")}
            description={t("Beautify your home")}
            videoSrc={services_vide}
            poster="/assets/images/gallery/g(4).JPG"
          />
          <VideoCard
            number="02"
            title={t("Porcelain")}
            description={t("Beautify your home")}
            videoSrc={services_vide2}
            poster="/assets/images/gallery/g(15).JPG"
          />
          <VideoCard
            number="03"
            title={t("Granite")}
            description={t("Beautify your home")}
            videoSrc={services_vide3}
            poster="/assets/images/gallery/g(16).JPG"
          />
        </div>
      </main>
    </div>
  );
};

export default VideoWorks;