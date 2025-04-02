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
    <section className="relative bg-gray-50 py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20 ">
          <AnimatedComponent animationType="fade-right">
            <div className="relative">
              <h1 className="text-5xl leading-relaxed font-jost font-medium uppercase text-gray-800">
                {t("Our Video Projects")}
              </h1>
              <div className="lg:text-6xl text-6xl absolute lg:-top-4 -top-10 -translate-x-7 leading-relaxed font-bold uppercase text-gray-500 opacity-10">
                {t("Our Video Projects")}
              </div>
            </div>
          </AnimatedComponent>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12  gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-3 ">
            <AnimatedComponent animationType="fade-right">
              <VideoText />
            </AnimatedComponent>
          </div>

          {/* Video Grid */}
          <div className="lg:col-span-9 ">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              <VideoCard
                number="01"
                title={t("Ceramics")}
                description={t("walls and floors")}
                videoSrc={services_vide}
                poster="/assets/images/gallery/g(4).JPG"
              />
              <VideoCard
                number="02"
                title={t("Porcelain")}
                description={t("any environment.")}
                videoSrc={services_vide2}
                poster="/assets/images/gallery/g(15).JPG"
              />
              <VideoCard
                number="03"
                title={t("Granite")}
                description={t("indoor and outdoor")}
                videoSrc={services_vide3}
                poster="/assets/images/gallery/g(16).JPG"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWorks;
